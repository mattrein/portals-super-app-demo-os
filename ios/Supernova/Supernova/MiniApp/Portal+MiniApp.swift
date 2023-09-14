//
//  Portal+MiniApp.swift
//  Supernova
//
//  Created by Steven Sherry on 6/2/23.
//

import Capacitor
import IonicPortals
import IonicLiveUpdates

extension Portal {
    private static let encoder = JSONEncoder()

    static func create(
        from selectedApp: MiniAppFeature.State,
        dismiss: @escaping () async -> Void,
        onLoad: @escaping () async -> Void
    ) -> Portal {
        let creds = (try? encoder.encodeJsObject(selectedApp.credentials)) ?? [:]
        var initialContext: [String: JSValue] = [
            "supabase": creds
        ]

        if let resourceId = selectedApp.id {
            initialContext["resourceId"] = resourceId as NSNumber
        }

        return Portal(
            name: selectedApp.app.id,
            startDir: "portals/\(selectedApp.app.id)",
            initialContext: initialContext,
            liveUpdateConfig: .init(
                appId: selectedApp.app.appFlowId,
                channel: "production",
                syncOnAdd: false
            )
        )
        .adding(Dismiss(dismiss: dismiss))
        .adding(WebVitalsPlugin { _, _ in Task.detached { await onLoad() } })
    }
}

private class Dismiss: CAPInstancePlugin, CAPBridgedPlugin {
    let jsName = "Dismiss"
    let identifier = "Dismiss"
    let pluginMethods: [CAPPluginMethod] = [
        .init(name: "dismiss", returnType: CAPPluginReturnPromise)
    ]

    private let _dismiss: () async -> Void

    init(dismiss: @escaping () async -> Void) {
        _dismiss = dismiss
        super.init()
    }

    @objc func dismiss(_ call: CAPPluginCall) {
        Task.detached { [weak self] in
            await self?._dismiss()
            call.resolve()
        }
    }
}

public class Auth: CAPInstancePlugin, CAPBridgedPlugin {
    public let jsName = "Auth"
    public let identifier = "Auth"
    public let pluginMethods: [CAPPluginMethod] = [
        .init(name: "save", returnType: CAPPluginReturnPromise)
    ]

    private let _saveOSAuth: (_ storage: String) async -> Void

    init(saveOSAuth: @escaping (_ storage: String) async -> Void) {
        _saveOSAuth = saveOSAuth
        super.init()
    }

    @objc func save(_ call: CAPPluginCall) {
        Task.detached { [weak self] in
            await self?._saveOSAuth(call.getString("accessToken")!)
            print("Save Auth")
            // print(call.getString("accessToken"))
            call.resolve()
        }
    }
}
