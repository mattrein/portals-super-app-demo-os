define("SuperappSDK.controller$InitializeAuthResults", ["exports", "OutSystems/ClientRuntime/Main", "SuperappSDK.model", "SuperappSDK.controller", "SuperappSDK.controller$InitializeAuthResults.RouterPlugin_initialContextJS"], function (exports, OutSystems, SuperappSDKModel, SuperappSDKController, SuperappSDK_controller_InitializeAuthResults_RouterPlugin_initialContextJS) {
var OS = OutSystems.Internal;
SuperappSDKController.default.initializeAuthResults$Action = function (callContext) {
var varBag = {};
return OS.Logger.startActiveSpan("InitializeAuthResults", function (span) {
if(span) {
span.setAttribute("code.function", "InitializeAuthResults");
span.setAttribute("outsystems.function.key", "8ba18a93-829e-4a2a-b685-45a6f1ca3e55");
span.setAttribute("outsystems.function.owner.name", "SuperappSDK");
span.setAttribute("outsystems.function.owner.key", "394d2b7a-5b16-4cbf-8241-790f05c76736");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("eitNORZbv0yCQXkPBcdnNg:k4qhi56CKkq2hUWm8co+VQ:/ClientActionFlows.k4qhi56CKkq2hUWm8co+VQ:TfnrwNKUJEs1_sdF41bsFQ", "SuperappSDK", "InitializeAuthResults", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eitNORZbv0yCQXkPBcdnNg:EpurF+_0SUShiwJmuL4ocg", callContext.id);
OutSystemsDebugger.handleBreakpoint("eitNORZbv0yCQXkPBcdnNg:i3haEzCPIkWaAXkNG02dbA", callContext.id);
OS.Logger.startActiveSpan("RouterPlugin_initialContext", function (span) {
if(span) {
span.setAttribute("code.function", "RouterPlugin_initialContext");
span.setAttribute("outsystems.function.key", "135a788b-8f30-4522-9a01-790d1b4d9d6c");
span.setAttribute("outsystems.function.owner.name", "SuperappSDK");
span.setAttribute("outsystems.function.owner.key", "394d2b7a-5b16-4cbf-8241-790f05c76736");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(SuperappSDK_controller_InitializeAuthResults_RouterPlugin_initialContextJS, "RouterPlugin_initialContext", "InitializeAuthResults", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("eitNORZbv0yCQXkPBcdnNg:2STMNkBSXUSaaaQLK3ph2w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("eitNORZbv0yCQXkPBcdnNg:k4qhi56CKkq2hUWm8co+VQ", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = SuperappSDKController.default;
SuperappSDKController.default.clientActionProxies.initializeAuthResults$Action = function () {
return controller.executeActionInsideJSNode(SuperappSDKController.default.initializeAuthResults$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("SuperappSDK.controller$InitializeAuthResults.RouterPlugin_initialContextJS", [], function () {
return function ($actions, $roles, $public) {
console.log("Initializing Auth")
};
});


define("SuperappSDK.controller$StoreAuthResults", ["exports", "OutSystems/ClientRuntime/Main", "SuperappSDK.model", "SuperappSDK.controller", "SuperappSDK.controller$StoreAuthResults.AuthPlugin_StoreJS"], function (exports, OutSystems, SuperappSDKModel, SuperappSDKController, SuperappSDK_controller_StoreAuthResults_AuthPlugin_StoreJS) {
var OS = OutSystems.Internal;
SuperappSDKController.default.storeAuthResults$Action = function (accessTokenIn, callContext) {
var varBag = {};
return OS.Logger.startActiveSpan("StoreAuthResults", function (span) {
if(span) {
span.setAttribute("code.function", "StoreAuthResults");
span.setAttribute("outsystems.function.key", "162478d3-181e-45af-aa27-eb2482f0831f");
span.setAttribute("outsystems.function.owner.name", "SuperappSDK");
span.setAttribute("outsystems.function.owner.key", "394d2b7a-5b16-4cbf-8241-790f05c76736");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappSDK.StoreAuthResults$vars"))());
vars.value.accessTokenInLocal = accessTokenIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("eitNORZbv0yCQXkPBcdnNg:03gkFh4Yr0WqJ+skgvCDHw:/ClientActionFlows.03gkFh4Yr0WqJ+skgvCDHw:4kcegcnt2t+K2D2IT2la0w", "SuperappSDK", "StoreAuthResults", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eitNORZbv0yCQXkPBcdnNg:+kaqUnyqc0S6v+Sovfu9Rg", callContext.id);
OutSystemsDebugger.handleBreakpoint("eitNORZbv0yCQXkPBcdnNg:fwyx1V2mTkSOkOHYmd_Vsg", callContext.id);
OS.Logger.startActiveSpan("AuthPlugin_Store", function (span) {
if(span) {
span.setAttribute("code.function", "AuthPlugin_Store");
span.setAttribute("outsystems.function.key", "d5b10c7f-a65d-444e-8e90-e1d899dfd5b2");
span.setAttribute("outsystems.function.owner.name", "SuperappSDK");
span.setAttribute("outsystems.function.owner.key", "394d2b7a-5b16-4cbf-8241-790f05c76736");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(SuperappSDK_controller_StoreAuthResults_AuthPlugin_StoreJS, "AuthPlugin_Store", "StoreAuthResults", {
AccessToken: OS.DataConversion.JSNodeParamConverter.to(vars.value.accessTokenInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("eitNORZbv0yCQXkPBcdnNg:5a_VIwfAI0CQxs+duc7kKg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("eitNORZbv0yCQXkPBcdnNg:03gkFh4Yr0WqJ+skgvCDHw", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = SuperappSDKController.default;
SuperappSDKController.default.constructor.registerVariableGroupType("SuperappSDK.StoreAuthResults$vars", [{
name: "AccessToken",
attrName: "accessTokenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
SuperappSDKController.default.clientActionProxies.storeAuthResults$Action = function (accessTokenIn) {
accessTokenIn = (accessTokenIn === undefined) ? "" : accessTokenIn;
return controller.executeActionInsideJSNode(SuperappSDKController.default.storeAuthResults$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(accessTokenIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("SuperappSDK.controller$StoreAuthResults.AuthPlugin_StoreJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Auth) {
    let storedData = JSON.stringify(Object.entries(localStorage))
    // window.Capacitor.Plugins.Auth.save({accessToken: storedData})
}


};
});


define("SuperappSDK.controller", ["exports", "OutSystems/ClientRuntime/Main", "SuperappSDK.model", "SuperappSDK.controller$debugger"], function (exports, OutSystems, SuperappSDKModel, SuperappSDK_Controller_debugger) {
var OS = OutSystems.Internal;
var SuperappSDKController = exports;
class Controller extends 
OS.Controller.BaseModuleController {
constructor(model, messagesProvider, idService, translationResources) {
super(model, messagesProvider, idService, translationResources);
}

get clientActionProxies() {if(!(this.hasOwnProperty("_clientActionProxies"))) {
this._clientActionProxies = {};
}

return this._clientActionProxies;
}set clientActionProxies(value) {this._clientActionProxies = value;
}


get roles() {if(!(this.hasOwnProperty("_roles"))) {
this._roles = {};
}

return this._roles;
}set roles(value) {this._roles = value;
}

get defaultTimeout() {if(!(this.hasOwnProperty("_defaultTimeout"))) {
this._defaultTimeout = 10;
}

return this._defaultTimeout;
}set defaultTimeout(value) {this._defaultTimeout = value;
}

getDefaultTimeout() {
return SuperappSDKController.default.defaultTimeout;
}

}

SuperappSDKController.default = new Controller();
});

define("SuperappSDK.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"JPfZDMLQCkC_QYE5Apuq_w": {
getter: function (varBag, idService) {
return varBag.vars.value.accessTokenInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fwyx1V2mTkSOkOHYmd_Vsg": {
getter: function (varBag, idService) {
return varBag.authPlugin_StoreJSResult.value;
}
},
"i3haEzCPIkWaAXkNG02dbA": {
getter: function (varBag, idService) {
return varBag.routerPlugin_initialContextJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

