define("OutSystemsUI.Private.NetworkStatusChanged.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IsOnline", "isOnlineVar", "IsOnline", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("OfflineActionReference", "offlineActionReferenceVar", "OfflineActionReference", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("OnlineActionReference", "onlineActionReferenceVar", "OnlineActionReference", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("DeviceReadyActionReference", "deviceReadyActionReferenceVar", "DeviceReadyActionReference", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

var VariablesRecord = VariablesRecordInner;
VariablesRecord.init();
}
class WidgetsRecord extends 
OS.Model.BaseWidgetRecordMap {
static getWidgetsType() {
return {};
}

}

class Model extends 
OS.Model.BaseViewModel {
static getVariablesRecordConstructor() {
return VariablesRecord;
}

static getWidgetsRecordConstructor() {
return WidgetsRecord;
}

static get hasValidationWidgets() {return false;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Private.NetworkStatusChanged.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Private.NetworkStatusChanged.mvc$model", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Private_NetworkStatusChanged_mvc_model, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Private.NetworkStatusChanged"; }

        static getAttributes() { return {
codeFunction: "NetworkStatusChanged",
functionKey: "d1feb84a-1589-4104-91d4-53dbc9add189",
functionOwnerName: "OutSystemsUI",
functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return ["scripts/OutSystemsUI.OutSystemsUI.js"];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Private_NetworkStatusChanged_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Private_NetworkStatusChanged_mvc_controller;
        }

        get title() {
            

            return "";
        }

        internalRender() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}));
        }
    }

    return View;
});
define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Private.NetworkStatusChanged.mvc$translationsResources", "OutSystemsUI.Private.NetworkStatusChanged.mvc$debugger", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.OnReady.InitJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetEventListenersJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetActionReferencesJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.OnDestroy.RemoveEventHandlersJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.SaveDeviceReadyCallbackJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.RegisterPluginInfoJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.SetActionReferencesJS", "OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.SetEventListenersJS", "OutSystemsUI.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Private_NetworkStatusChanged_mvc_TranslationsResources, OutSystemsUI_Private_NetworkStatusChanged_mvc_Debugger, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_OnReady_InitJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_DeviceReady_SetEventListenersJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_DeviceReady_SetActionReferencesJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_OnDestroy_RemoveEventHandlersJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_SaveDeviceReadyCallbackJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_RegisterPluginInfoJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_SetActionReferencesJS, OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_SetEventListenersJS) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Private_NetworkStatusChanged_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {
init$Action: function () {
return controller.executeActionInsideJSNode(controller._init$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Init");
},
offline$Action: function () {
return controller.executeActionInsideJSNode(controller._offline$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Offline");
},
online$Action: function () {
return controller.executeActionInsideJSNode(controller._online$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Online");
},
deviceReady$Action: function () {
return controller.executeActionInsideJSNode(controller._deviceReady$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "DeviceReady");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}

// Server Actions - Methods

// Aggregates and Data Actions

get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = [];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _offline$Action() {if(!(this.hasOwnProperty("__offline$Action"))) {
this.__offline$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("Offline", function (span) {
if(span) {
span.setAttribute("code.function", "Offline");
span.setAttribute("outsystems.function.key", "55d4c313-1ef1-402a-b2c9-c25b76ba989b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("Offline");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:E8PUVfEeKkCyycJbdrqYmw:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ/ClientActions.E8PUVfEeKkCyycJbdrqYmw:u37vpPyV1HI1sqkqCluBJw", "OutSystemsUI", "Offline", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WWaNxdsW2UmkKPfUm67uEw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:a8vJUGVUxU22c_WeSG3zEg", callContext.id) && model.variables.isOnlineVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kUD84LeH_Uy7yRvK3oeNmw", callContext.id);
// IsOnline = False
model.variables.isOnlineVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gMtLljXlUkmYXQUxMvdu2w", callContext.id);
// Trigger Event: NetworkStatusChangedToOffline
return controller.networkStatusChanged$Action(model.variables.isOnlineVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XwMhYhWOs06ezG8aJIMKMg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XwMhYhWOs06ezG8aJIMKMg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:E8PUVfEeKkCyycJbdrqYmw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:E8PUVfEeKkCyycJbdrqYmw", callContext.id);
throw ex;

});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__offline$Action;
}set _offline$Action(value) {this.__offline$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "8096b967-a824-458c-bb27-37d40f5e437d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Z7mWgCSojEW7JzfUD15DfQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ/ClientActions.Z7mWgCSojEW7JzfUD15DfQ:SkPgC4z24CViFRIvFRKDVw", "OutSystemsUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gyWF6ontsUqYAjMzMpe12w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Otk89tv4YUCp0Bm1oCgZwA", callContext.id);
OS.Logger.startActiveSpan("Init", function (span) {
if(span) {
span.setAttribute("code.function", "Init");
span.setAttribute("outsystems.function.key", "f63cd93a-f8db-4061-a9d0-19b5a02819c0");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_OnReady_InitJS, "Init", "OnReady", null, function ($parameters) {
}, {
Init: controller.clientActionProxies.init$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0dJC0mn66E+ejZES6YZB1w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Z7mWgCSojEW7JzfUD15DfQ", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}

get _online$Action() {if(!(this.hasOwnProperty("__online$Action"))) {
this.__online$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("Online", function (span) {
if(span) {
span.setAttribute("code.function", "Online");
span.setAttribute("outsystems.function.key", "b77f3935-1c8b-4868-9c2d-986d1026d56d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("Online");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:NTl_t4scaEicLZhtECbVbQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ/ClientActions.NTl_t4scaEicLZhtECbVbQ:gxSNObBKYjpeGunPtToptQ", "OutSystemsUI", "Online", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LzRx3y9pjES12MMWC4tmhQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pYqhM3deHkSREvqlXE0FWQ", callContext.id) && model.variables.isOnlineVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c6bCZQaKHk+m8j2MdfCipA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mZw+QNY3pESFHCFdOPDG2g", callContext.id);
// IsOnline = True
model.variables.isOnlineVar = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gOgbNozBlUaa+GOa4WhsIg", callContext.id);
// Trigger Event: NetworkStatusChangedToOnline
return controller.networkStatusChanged$Action(model.variables.isOnlineVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c6bCZQaKHk+m8j2MdfCipA", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:NTl_t4scaEicLZhtECbVbQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:NTl_t4scaEicLZhtECbVbQ", callContext.id);
throw ex;

});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__online$Action;
}set _online$Action(value) {this.__online$Action = value;
}

get _deviceReady$Action() {if(!(this.hasOwnProperty("__deviceReady$Action"))) {
this.__deviceReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("DeviceReady", function (span) {
if(span) {
span.setAttribute("code.function", "DeviceReady");
span.setAttribute("outsystems.function.key", "c0ca0a6f-6e6b-4d1f-83c3-08f130fc0a26");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("DeviceReady");
callContext = controller.callContext(callContext);
var setActionReferencesJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setActionReferencesJSResult = setActionReferencesJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:bwrKwGtuH02DwwjxMPwKJg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ/ClientActions.bwrKwGtuH02DwwjxMPwKJg:cFN0wHcismtxGOvkX7QRdQ", "OutSystemsUI", "DeviceReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JbHVEG3b0ke1A+fMX5keVw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c3aq7AK8eUi33dOftqUdRA", callContext.id);
setActionReferencesJSResult.value = OS.Logger.startActiveSpan("SetActionReferences", function (span) {
if(span) {
span.setAttribute("code.function", "SetActionReferences");
span.setAttribute("outsystems.function.key", "ecaa7673-bc02-4879-b7dd-d39fb6a51d44");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_DeviceReady_SetActionReferencesJS, "SetActionReferences", "DeviceReady", {
OfflineActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
OnlineActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.NetworkStatusChanged.DeviceReady$setActionReferencesJSResult"))();
jsNodeResult.offlineActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OfflineActionReference, OS.DataTypes.DataTypes.Object);
jsNodeResult.onlineActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnlineActionReference, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Offline: controller.clientActionProxies.offline$Action,
Online: controller.clientActionProxies.online$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// SaveReferences
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wEu1V2GEHEG10FpqGNhqwQ", callContext.id);
// OfflineActionReference = SetActionReferences.OfflineActionReference
model.variables.offlineActionReferenceVar = setActionReferencesJSResult.value.offlineActionReferenceOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wEu1V2GEHEG10FpqGNhqwQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// OnlineActionReference = SetActionReferences.OnlineActionReference
model.variables.onlineActionReferenceVar = setActionReferencesJSResult.value.onlineActionReferenceOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:G_euS9ToHEys0VV6hvoSmw", callContext.id);
OS.Logger.startActiveSpan("SetEventListeners", function (span) {
if(span) {
span.setAttribute("code.function", "SetEventListeners");
span.setAttribute("outsystems.function.key", "4baef71b-e8d4-4c1c-acd1-557a86fa129b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_DeviceReady_SetEventListenersJS, "SetEventListeners", "DeviceReady", {
OnlineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.onlineActionReferenceVar, OS.DataTypes.DataTypes.Object),
OfflineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.offlineActionReferenceVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:o1EK4r+6CEiznS54vEGByQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:bwrKwGtuH02DwwjxMPwKJg", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__deviceReady$Action;
}set _deviceReady$Action(value) {this.__deviceReady$Action = value;
}

get _onDestroy$Action() {if(!(this.hasOwnProperty("__onDestroy$Action"))) {
this.__onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnDestroy", function (span) {
if(span) {
span.setAttribute("code.function", "OnDestroy");
span.setAttribute("outsystems.function.key", "d05ef9de-45c1-46c3-ba21-8a7a7cb0b481");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:3vle0MFFw0a6IYp6fLC0gQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ/ClientActions.3vle0MFFw0a6IYp6fLC0gQ:jKsI2LWPEF7oSbJxs3NoBg", "OutSystemsUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_5sAfARb8UayxCurVMwnLA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jCj5bLwD1EaeYpfWEQUgMA", callContext.id);
OS.Logger.startActiveSpan("RemoveEventHandlers", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveEventHandlers");
span.setAttribute("outsystems.function.key", "6cf9288c-03bc-46d4-9e62-97d611052030");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_OnDestroy_RemoveEventHandlersJS, "RemoveEventHandlers", "OnDestroy", {
OnlineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.onlineActionReferenceVar, OS.DataTypes.DataTypes.Object),
OfflineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.offlineActionReferenceVar, OS.DataTypes.DataTypes.Object),
offlineHandlerObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.offlineActionReferenceVar, OS.DataTypes.DataTypes.Object),
onlineHandlerObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.onlineActionReferenceVar, OS.DataTypes.DataTypes.Object),
deviceReadyActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.deviceReadyActionReferenceVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:69k4OgWOFEix4f+bwbR_Sg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:3vle0MFFw0a6IYp6fLC0gQ", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onDestroy$Action;
}set _onDestroy$Action(value) {this.__onDestroy$Action = value;
}

get _init$Action() {if(!(this.hasOwnProperty("__init$Action"))) {
this.__init$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("Init", function (span) {
if(span) {
span.setAttribute("code.function", "Init");
span.setAttribute("outsystems.function.key", "e9909a3f-b537-4a17-9f3d-1775923119c5");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("Init");
callContext = controller.callContext(callContext);
var getNetworkStatusVar = new OS.DataTypes.VariableHolder();
var saveDeviceReadyCallbackJSResult = new OS.DataTypes.VariableHolder();
var setActionReferencesJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getNetworkStatusVar = getNetworkStatusVar;
varBag.saveDeviceReadyCallbackJSResult = saveDeviceReadyCallbackJSResult;
varBag.setActionReferencesJSResult = setActionReferencesJSResult;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:P5qQ6Te1F0qfPRd1kjEZxQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ/ClientActions.P5qQ6Te1F0qfPRd1kjEZxQ:EZc7tgelMZT3xKfOkzpHQQ", "OutSystemsUI", "Init", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QvWreYpw4U6WLFNq6+ZVGg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:fs1VpSF4qUaw6xzo_iS4VA", callContext.id);
// Execute Action: GetNetworkStatus
getNetworkStatusVar.value = OutSystemsUIController.default.getNetworkStatus$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Odna7IGVRk6Y4qrW2yjkPQ", callContext.id) && getNetworkStatusVar.value.isOnlineOut)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kG8BQr7ek0GhvqUDLRsaDg", callContext.id);
// Execute Action: Online
return controller._online$Action(callContext);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4aObpbqDZ0+qXPux7GwnvQ", callContext.id);
// Execute Action: Offline
return controller._offline$Action(callContext);
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Eng+R8dYV0KZnesmImNJHQ", callContext.id);
saveDeviceReadyCallbackJSResult.value = OS.Logger.startActiveSpan("SaveDeviceReadyCallback", function (span) {
if(span) {
span.setAttribute("code.function", "SaveDeviceReadyCallback");
span.setAttribute("outsystems.function.key", "473e7812-58c7-4257-999d-eb262263491d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_SaveDeviceReadyCallbackJS, "SaveDeviceReadyCallback", "Init", {
DeviceReadyActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.NetworkStatusChanged.Init$saveDeviceReadyCallbackJSResult"))();
jsNodeResult.deviceReadyActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DeviceReadyActionReference, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
DeviceReady: controller.clientActionProxies.deviceReady$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// SaveReference
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BHW20kLX0EeGy_V5Liu1gw", callContext.id);
// DeviceReadyActionReference = SaveDeviceReadyCallback.DeviceReadyActionReference
model.variables.deviceReadyActionReferenceVar = saveDeviceReadyCallbackJSResult.value.deviceReadyActionReferenceOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PRrlaa3iX0mXex9u3_1KXw", callContext.id);
OS.Logger.startActiveSpan("RegisterPluginInfo", function (span) {
if(span) {
span.setAttribute("code.function", "RegisterPluginInfo");
span.setAttribute("outsystems.function.key", "69e51a3d-e2ad-495f-977b-1f6edffd4a5f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_RegisterPluginInfoJS, "RegisterPluginInfo", "Init", {
DeviceReadyActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.deviceReadyActionReferenceVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9q8CjvyykkmG0oASlHjZ_A", callContext.id);
setActionReferencesJSResult.value = OS.Logger.startActiveSpan("SetActionReferences", function (span) {
if(span) {
span.setAttribute("code.function", "SetActionReferences");
span.setAttribute("outsystems.function.key", "8e02aff6-b2fc-4992-86d2-80129478d9fc");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_SetActionReferencesJS, "SetActionReferences", "Init", {
OfflineActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
OnlineActionReference: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.NetworkStatusChanged.Init$setActionReferencesJSResult"))();
jsNodeResult.offlineActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OfflineActionReference, OS.DataTypes.DataTypes.Object);
jsNodeResult.onlineActionReferenceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnlineActionReference, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Offline: controller.clientActionProxies.offline$Action,
Online: controller.clientActionProxies.online$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// SaveReferences
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RyaFXTHToEmCLAN7lpT_tQ", callContext.id);
// OfflineActionReference = SetActionReferences.OfflineActionReference
model.variables.offlineActionReferenceVar = setActionReferencesJSResult.value.offlineActionReferenceOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RyaFXTHToEmCLAN7lpT_tQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// OnlineActionReference = SetActionReferences.OnlineActionReference
model.variables.onlineActionReferenceVar = setActionReferencesJSResult.value.onlineActionReferenceOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:uYKIv7SDyEybwcJQuxWwGQ", callContext.id);
OS.Logger.startActiveSpan("SetEventListeners", function (span) {
if(span) {
span.setAttribute("code.function", "SetEventListeners");
span.setAttribute("outsystems.function.key", "bf8882b9-83b4-4cc8-9bc1-c250bb15b019");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_NetworkStatusChanged_mvc_controller_Init_SetEventListenersJS, "SetEventListeners", "Init", {
OfflineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.offlineActionReferenceVar, OS.DataTypes.DataTypes.Object),
OnlineActionReference: OS.DataConversion.JSNodeParamConverter.to(model.variables.onlineActionReferenceVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:t7qKvYl+X0SRF98j07ZKJQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:P5qQ6Te1F0qfPRd1kjEZxQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:P5qQ6Te1F0qfPRd1kjEZxQ", callContext.id);
throw ex;

});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__init$Action;
}set _init$Action(value) {this.__init$Action = value;
}


offline$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Offline__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Offline");
span.setAttribute("outsystems.function.key", "55d4c313-1ef1-402a-b2c9-c25b76ba989b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._offline$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "8096b967-a824-458c-bb27-37d40f5e437d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

online$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Online__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Online");
span.setAttribute("outsystems.function.key", "b77f3935-1c8b-4868-9c2d-986d1026d56d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._online$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

deviceReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("DeviceReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "DeviceReady");
span.setAttribute("outsystems.function.key", "c0ca0a6f-6e6b-4d1f-83c3-08f130fc0a26");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._deviceReady$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onDestroy$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnDestroy__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnDestroy");
span.setAttribute("outsystems.function.key", "d05ef9de-45c1-46c3-ba21-8a7a7cb0b481");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

init$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Init__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Init");
span.setAttribute("outsystems.function.key", "e9909a3f-b537-4a17-9f3d-1775923119c5");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._init$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

get networkStatusChanged$Action() {if(!(this.hasOwnProperty("_networkStatusChanged$Action"))) {
this._networkStatusChanged$Action = function () {
return Promise.resolve();
};
}

return this._networkStatusChanged$Action;
}set networkStatusChanged$Action(value) {this._networkStatusChanged$Action = value;
}


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:iwiOphx9xsA5b5dLEBsqNQ", "OutSystemsUI", "Private", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Srj+0YkVBEGR1FPbya3RiQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.Srj+0YkVBEGR1FPbya3RiQ:I5SkVJJmUK6CgyL9D3Xqww", "OutSystemsUI", "NetworkStatusChanged", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Srj+0YkVBEGR1FPbya3RiQ", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q", callContext.id);
};
}

return this._popDebuggerContext;
}set popDebuggerContext(value) {this._popDebuggerContext = value;
}

get onInitializeEventHandler() {if(!(this.hasOwnProperty("_onInitializeEventHandler"))) {
this._onInitializeEventHandler = null;
}

return this._onInitializeEventHandler;
}set onInitializeEventHandler(value) {this._onInitializeEventHandler = value;
}

get onReadyEventHandler() {if(!(this.hasOwnProperty("_onReadyEventHandler"))) {
this._onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/NetworkStatusChanged On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
}

return this._onReadyEventHandler;
}set onReadyEventHandler(value) {this._onReadyEventHandler = value;
}

get onRenderEventHandler() {if(!(this.hasOwnProperty("_onRenderEventHandler"))) {
this._onRenderEventHandler = null;
}

return this._onRenderEventHandler;
}set onRenderEventHandler(value) {this._onRenderEventHandler = value;
}

get onDestroyEventHandler() {if(!(this.hasOwnProperty("_onDestroyEventHandler"))) {
this._onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/NetworkStatusChanged On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
}

return this._onDestroyEventHandler;
}set onDestroyEventHandler(value) {this._onDestroyEventHandler = value;
}

get onParametersChangedEventHandler() {if(!(this.hasOwnProperty("_onParametersChangedEventHandler"))) {
this._onParametersChangedEventHandler = null;
}

return this._onParametersChangedEventHandler;
}set onParametersChangedEventHandler(value) {this._onParametersChangedEventHandler = value;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex) {
return controller.handleError(ex);
};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

static checkPermissions() {
}

getDefaultTimeout() {
return OutSystemsUIController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables
Controller.registerVariableGroupType("OutSystemsUI.Private.NetworkStatusChanged.DeviceReady$setActionReferencesJSResult", [{
name: "OfflineActionReference",
attrName: "offlineActionReferenceOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "OnlineActionReference",
attrName: "onlineActionReferenceOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Private.NetworkStatusChanged.Init$saveDeviceReadyCallbackJSResult", [{
name: "DeviceReadyActionReference",
attrName: "deviceReadyActionReferenceOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Private.NetworkStatusChanged.Init$setActionReferencesJSResult", [{
name: "OfflineActionReference",
attrName: "offlineActionReferenceOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "OnlineActionReference",
attrName: "onlineActionReferenceOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.OnReady.InitJS", [], function () {
return function ($actions, $roles, $public) {
$actions.Init();
};
});

define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetEventListenersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.addEventListener("offline", $parameters.OfflineActionReference, false);
document.addEventListener("online", $parameters.OnlineActionReference, false);
};
});

define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.DeviceReady.SetActionReferencesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.OfflineActionReference = $actions.Offline;
$parameters.OnlineActionReference = $actions.Online;
};
});

define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.OnDestroy.RemoveEventHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.removeEventListener("offline", $parameters.offlineHandlerObj );
document.removeEventListener("online", $parameters.onlineHandlerObj );
document.removeEventListener("deviceready", $parameters.deviceReadyActionReference);
window.removeEventListener("offline", $parameters.OfflineActionReference);
window.removeEventListener("online",$parameters.OnlineActionReference);
};
});

define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.SaveDeviceReadyCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.DeviceReadyActionReference = function(){$actions.DeviceReady();};

};
});

define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.RegisterPluginInfoJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.addEventListener("deviceready", $parameters.DeviceReadyActionReference, false);
};
});

define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.SetActionReferencesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.OfflineActionReference = $actions.Offline;
$parameters.OnlineActionReference = $actions.Online;
};
});

define("OutSystemsUI.Private.NetworkStatusChanged.mvc$controller.Init.SetEventListenersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.addEventListener("offline", $parameters.OfflineActionReference, false);
window.addEventListener("online",$parameters.OnlineActionReference, false);
};
});


define("OutSystemsUI.Private.NetworkStatusChanged.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Otk89tv4YUCp0Bm1oCgZwA": {
getter: function (varBag, idService) {
return varBag.initJSResult.value;
}
},
"G_euS9ToHEys0VV6hvoSmw": {
getter: function (varBag, idService) {
return varBag.setEventListenersJSResult.value;
}
},
"c3aq7AK8eUi33dOftqUdRA": {
getter: function (varBag, idService) {
return varBag.setActionReferencesJSResult.value;
}
},
"jCj5bLwD1EaeYpfWEQUgMA": {
getter: function (varBag, idService) {
return varBag.removeEventHandlersJSResult.value;
}
},
"fs1VpSF4qUaw6xzo_iS4VA": {
getter: function (varBag, idService) {
return varBag.getNetworkStatusVar.value;
}
},
"Eng+R8dYV0KZnesmImNJHQ": {
getter: function (varBag, idService) {
return varBag.saveDeviceReadyCallbackJSResult.value;
}
},
"PRrlaa3iX0mXex9u3_1KXw": {
getter: function (varBag, idService) {
return varBag.registerPluginInfoJSResult.value;
}
},
"9q8CjvyykkmG0oASlHjZ_A": {
getter: function (varBag, idService) {
return varBag.setActionReferencesJSResult.value;
}
},
"uYKIv7SDyEybwcJQuxWwGQ": {
getter: function (varBag, idService) {
return varBag.setEventListenersJSResult.value;
}
},
"6Fz8hNp33EGM7mrymXS3WA": {
getter: function (varBag, idService) {
return varBag.model.variables.isOnlineVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Lkbs3_xRiEqIN145tiFLaw": {
getter: function (varBag, idService) {
return varBag.model.variables.offlineActionReferenceVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"WJwkG38260mcuNQVgpCwPA": {
getter: function (varBag, idService) {
return varBag.model.variables.onlineActionReferenceVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Fx2l6fSrakKgXqigIA25Yw": {
getter: function (varBag, idService) {
return varBag.model.variables.deviceReadyActionReferenceVar;
},
dataType: OS.DataTypes.DataTypes.Object
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

define("OutSystemsUI.Private.NetworkStatusChanged.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

