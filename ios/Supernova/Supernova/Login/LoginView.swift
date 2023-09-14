//
//  ContentView.swift
//  SupabaseLogin
//
//  Created by Steven Sherry on 5/2/23.
//

import SwiftUI
import Supabase
import ComposableArchitecture
import Dependencies
import IonicPortals

struct LoginView: View {
    let store: StoreOf<LoginFeature>

    func create(
        saveOSAuth: @escaping (_ storage: String) async -> Void
    ) -> Portal {
        return Portal(name: "time", startDir: "portals/time").adding(Auth(saveOSAuth: saveOSAuth))
    }
    // Move to extension on Portal static func

    var body: some View {
        WithViewStore(store) { vs in
            PortalView(
                portal: create { @MainActor storage in
                    vs.send(.saveOSAuth(storage))
                }
            ) { $0.webView?.isInspectable = true }        }
    }
}

struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView(
            store: .init(
                initialState: .init(loginStatus: .loggedOut),
                reducer: LoginFeature()
            )
        )
    }
}

private struct LoginModifier: ViewModifier {
    func body(content: Content) -> some View {
        content
            .padding([.bottom, .top], 8)
            .overlay(Rectangle().frame(height: 0.5), alignment: .bottom)
    }
}

private extension Image {
    func loginAccessory() -> some View {
        resizable()
            .aspectRatio(contentMode: .fit)
            .frame(width: 24, height: 24)
    }
}

private extension Text {
    func fieldPrompt() -> Text {
        font(.system(size: 17, weight: .regular, design: .rounded))
    }
}

struct LoginPair: View {
    @Binding private var email: String
    @Binding private var password: String

    init(email: Binding<String>, password: Binding<String>) {
        self._email = email
        self._password = password
    }

    var body: some View {
        VStack {
            HStack(spacing: 18) {
                Image.mail
                    .loginAccessory()

                TextField(
                    "Email",
                    text: $email,
                    prompt: Text("Email")
                        .fieldPrompt()
                )
                .keyboardType(.emailAddress)
            }
            .modifier(LoginModifier())

            Spacer()
                .frame(height: 20)

            HStack(spacing: 18) {
                Image.lock
                    .loginAccessory()

                SecureField(
                    "Password",
                    text: $password,
                    prompt: Text("Password")
                        .fieldPrompt()
                )
            }
            .modifier(LoginModifier())
        }
        .foregroundColor(.superGray)
    }
}
