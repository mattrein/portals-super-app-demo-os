define("SuperappLogin.controller$DoLogin", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "SuperappSDK.controller", "System_.model", "SuperappLogin.clientVariables", "SuperappSDK.controller$StoreAuthResults", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$SuperappSDK", "System_.model$UserLoginResultRec", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, SuperappLoginModel, SuperappLoginController, SuperappSDKController, System_Model, SuperappLoginClientVariables) {
var OS = OutSystems.Internal;
SuperappLoginController.default.doLogin$Action = function (usernameIn, passwordIn, callContext) {
var varBag = {};
return OS.Logger.startActiveSpan("DoLogin", function (span) {
if(span) {
span.setAttribute("code.function", "DoLogin");
span.setAttribute("outsystems.function.key", "3238c479-1368-4a8f-beb6-d4dbbcb28805");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.DoLogin$vars"))());
vars.value.usernameInLocal = usernameIn;
vars.value.passwordInLocal = passwordIn;
var loginVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.DoLogin$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.loginVar = loginVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:ecQ4MmgTj0q+ttTbvLKIBQ:/ClientActionFlows.ecQ4MmgTj0q+ttTbvLKIBQ:wbRuHsok+DExqv5+7QjilQ", "SuperappLogin", "DoLogin", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:RJyiWL1sPk2VP38wEegwLQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:sGmTuNB1KEmi8nCI3KkFCA", callContext.id);
// Execute Action: Login
return OS.SystemActions.login(vars.value.usernameInLocal, vars.value.passwordInLocal, callContext).then(function (value) {
loginVar.value = value;
}).then(function () {
// Success?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:lsR9VUYm6ECoTcIfGN4UGQ", callContext.id) && true)) {
// Success = True
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:5df5zHpRL0637REzzbWkbw", callContext.id);
// Success = True
outVars.value.successOut = true;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:oL+tKjz1_kC5iuazYWV5KQ", callContext.id);
// Execute Action: StoreAuthResults
SuperappSDKController.default.storeAuthResults$Action(vars.value.usernameInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:h97WprzQZE6x8P1D4xw1mg", callContext.id);
} else {
// Invalid credentials?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Py2adfURmUyF7QV66bEoMA", callContext.id) && loginVar.value.userLoginResultOut.userLoginFailureReasonAttr.invalidCredentialsAttr)) {
// Set error message
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:H1veIClkfUyg5sS_gHy9Ng", callContext.id);
// ErrorMessage = "Invalid credentials."
outVars.value.errorMessageOut = "Invalid credentials.";
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:h97WprzQZE6x8P1D4xw1mg", callContext.id);
} else {
// Too many failed login attempts?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:nt+wr2mv_0WHCmLsdQypLA", callContext.id) && loginVar.value.userLoginResultOut.userLoginFailureReasonAttr.tooManyFailedLoginAttemptsAttr)) {
// Set error message
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:JQLQI29wQkiMUKjCp_0vRw", callContext.id);
// ErrorMessage = "Too many failed login attempts. Please try again in " + Login.UserLoginResult.RetryAfterSeconds + " seconds."
outVars.value.errorMessageOut = (("Too many failed login attempts. Please try again in " + (loginVar.value.userLoginResultOut.retryAfterSecondsAttr).toString()) + " seconds.");
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:h97WprzQZE6x8P1D4xw1mg", callContext.id);
} else {
// Set error message
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:E2MRaqgEDEeLGMtm2qgW6A", callContext.id);
// ErrorMessage = "Login operation failed."
outVars.value.errorMessageOut = "Login operation failed.";
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:h97WprzQZE6x8P1D4xw1mg", callContext.id);
}

}

}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:ecQ4MmgTj0q+ttTbvLKIBQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:ecQ4MmgTj0q+ttTbvLKIBQ", callContext.id);
throw ex;

});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
var controller = SuperappLoginController.default;
SuperappLoginController.default.constructor.registerVariableGroupType("SuperappLogin.DoLogin$vars", [{
name: "Username",
attrName: "usernameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Password",
attrName: "passwordInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
SuperappLoginController.default.constructor.registerVariableGroupType("SuperappLogin.DoLogin$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
SuperappLoginController.default.clientActionProxies.doLogin$Action = function (usernameIn, passwordIn) {
usernameIn = (usernameIn === undefined) ? "" : usernameIn;
passwordIn = (passwordIn === undefined) ? "" : passwordIn;
return controller.executeActionInsideJSNode(SuperappLoginController.default.doLogin$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(usernameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(passwordIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});


define("SuperappLogin.controller$OfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "SuperappLogin.clientVariables", "SuperappLogin.controller$ServerAction.ServerDataSync"], function (exports, OutSystems, SuperappLoginModel, SuperappLoginController, SuperappLoginClientVariables) {
var OS = OutSystems.Internal;
SuperappLoginController.default.offlineDataSync$Action = function (syncUnitIn, callContext) {
var varBag = {};
return OS.Logger.startActiveSpan("OfflineDataSync", function (span) {
if(span) {
span.setAttribute("code.function", "OfflineDataSync");
span.setAttribute("outsystems.function.key", "8786992e-5c2f-4913-8247-4059ce126824");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.OfflineDataSync$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:LpmGhy9cE0mCR0BZzhJoJA:/ClientActionFlows.LpmGhy9cE0mCR0BZzhJoJA:9fW7JZ_EcTcjt12Bg_nsGA", "SuperappLogin", "OfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:r3w04DYy+UO88Hnbcauheg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:NSg3uwX2z0KDzIngfCcKnw", callContext.id);
// Execute Action: ServerDataSync
return controller.serverDataSync$ServerAction(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:CutXTLFsZE632Xm9fh21Kg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:LpmGhy9cE0mCR0BZzhJoJA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:LpmGhy9cE0mCR0BZzhJoJA", callContext.id);
throw ex;

});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
var controller = SuperappLoginController.default;
SuperappLoginController.default.constructor.registerVariableGroupType("SuperappLogin.OfflineDataSync$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
SuperappLoginController.default.clientActionProxies.offlineDataSync$Action = function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(SuperappLoginController.default.offlineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("SuperappLogin.controller$OfflineDataSyncConfiguration", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "SuperappLogin.clientVariables"], function (exports, OutSystems, SuperappLoginModel, SuperappLoginController, SuperappLoginClientVariables) {
var OS = OutSystems.Internal;
SuperappLoginController.default.offlineDataSyncConfiguration$Action = function (callContext) {
var varBag = {};
return OS.Logger.startActiveSpan("OfflineDataSyncConfiguration", function (span) {
if(span) {
span.setAttribute("code.function", "OfflineDataSyncConfiguration");
span.setAttribute("outsystems.function.key", "9309b25f-dbda-41c0-bc09-cdaace905800");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.OfflineDataSyncConfiguration$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:X7IJk9rbwEG8Cc2qzpBYAA:/ClientActionFlows.X7IJk9rbwEG8Cc2qzpBYAA:caWfCxDC_+ez9PImlgRZBg", "SuperappLogin", "OfflineDataSyncConfiguration", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:4uf+P18taEuIWJBnuSJ1Gw", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:i_wEoadk3kWP4Wc1gPBpjA", callContext.id);
// SyncOnOnline = False
outVars.value.syncOnOnlineOut = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:8FTfXO_sYEiA3QGV5j9Caw", callContext.id);
// SyncOnLogin = False
outVars.value.syncOnLoginOut = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Et6hhpxEZEq61+V1aOfXNg", callContext.id);
// SyncOnResume = False
outVars.value.syncOnResumeOut = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:XUGCZiBFuEmTNw_FElJlcw", callContext.id);
// RetryOnError = False
outVars.value.retryOnErrorOut = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:QziPTs5cUUOu7YJ52192jA", callContext.id);
// RetryIntervalInSeconds = 30
outVars.value.retryIntervalInSecondsOut = 30;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:9P4z+cemjUqImNOz1PrWig", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:X7IJk9rbwEG8Cc2qzpBYAA", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = SuperappLoginController.default;
SuperappLoginController.default.constructor.registerVariableGroupType("SuperappLogin.OfflineDataSyncConfiguration$outVars", [{
name: "SyncOnOnline",
attrName: "syncOnOnlineOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SyncOnLogin",
attrName: "syncOnLoginOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SyncOnResume",
attrName: "syncOnResumeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RetryOnError",
attrName: "retryOnErrorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RetryIntervalInSeconds",
attrName: "retryIntervalInSecondsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
SuperappLoginController.default.clientActionProxies.offlineDataSyncConfiguration$Action = function () {
return controller.executeActionInsideJSNode(SuperappLoginController.default.offlineDataSyncConfiguration$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
SyncOnOnline: OS.DataConversion.JSNodeParamConverter.to(actionResults.syncOnOnlineOut, OS.DataTypes.DataTypes.Boolean),
SyncOnLogin: OS.DataConversion.JSNodeParamConverter.to(actionResults.syncOnLoginOut, OS.DataTypes.DataTypes.Boolean),
SyncOnResume: OS.DataConversion.JSNodeParamConverter.to(actionResults.syncOnResumeOut, OS.DataTypes.DataTypes.Boolean),
RetryOnError: OS.DataConversion.JSNodeParamConverter.to(actionResults.retryOnErrorOut, OS.DataTypes.DataTypes.Boolean),
RetryIntervalInSeconds: OS.DataConversion.JSNodeParamConverter.to(actionResults.retryIntervalInSecondsOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});


define("SuperappLogin.controller$TriggerOfflineDataSync", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.controller", "SuperappLogin.clientVariables", "OutSystemsUI.controller$StartOfflineDataSync", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIController, SuperappLoginClientVariables) {
var OS = OutSystems.Internal;
SuperappLoginController.default.triggerOfflineDataSync$Action = function (syncUnitIn, discardPendingSyncUnitsIn, callContext) {
var varBag = {};
return OS.Logger.startActiveSpan("TriggerOfflineDataSync", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOfflineDataSync");
span.setAttribute("outsystems.function.key", "e236067b-111d-4da2-9354-c3e3681473e2");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.TriggerOfflineDataSync$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.discardPendingSyncUnitsInLocal = discardPendingSyncUnitsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:ewY24h0Rok2TVMPjaBRz4g:/ClientActionFlows.ewY24h0Rok2TVMPjaBRz4g:q9wgGzACfownwjkqyxOq5w", "SuperappLogin", "TriggerOfflineDataSync", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:nwD+mAhpF0C5lbeoGhWn7A", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:9zjg8WmArkmExeOIJ+8uyQ", callContext.id);
// Execute Action: StartOfflineDataSync
OutSystemsUIController.default.startOfflineDataSync$Action(vars.value.syncUnitInLocal, vars.value.discardPendingSyncUnitsInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:f3NRrVvFPkO4qaGalBP3Vw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:ewY24h0Rok2TVMPjaBRz4g", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = SuperappLoginController.default;
SuperappLoginController.default.constructor.registerVariableGroupType("SuperappLogin.TriggerOfflineDataSync$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DiscardPendingSyncUnits",
attrName: "discardPendingSyncUnitsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
SuperappLoginController.default.clientActionProxies.triggerOfflineDataSync$Action = function (syncUnitIn, discardPendingSyncUnitsIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
discardPendingSyncUnitsIn = (discardPendingSyncUnitsIn === undefined) ? false : discardPendingSyncUnitsIn;
return controller.executeActionInsideJSNode(SuperappLoginController.default.triggerOfflineDataSync$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(discardPendingSyncUnitsIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("SuperappLogin.controller$ServerAction.ServerDataSync", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller"], function (exports, OutSystems, SuperappLoginModel, SuperappLoginController) {
var OS = OutSystems.Internal;
SuperappLoginController.default.serverDataSync$ServerAction = function (syncUnitIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ServerDataSync", function (span) {
if(span) {
span.setAttribute("code.function", "ServerDataSync");
span.setAttribute("outsystems.function.key", "eb1441ad-bf6c-40ae-a055-6c1440bee79e");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
}

return OS.Flow.tryFinally(function () {
var inputs = {
SyncUnit: OS.DataConversion.ServerDataConverter.to(syncUnitIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("ServerDataSync", "screenservices/SuperappLogin/ActionServerDataSync", "SnHEsMVTuTHmpdlTypWAow", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
}, function () {
if(span) {
span.end();
}

});
}, 0);
};
});

define("SuperappLogin.controller", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller$debugger"], function (exports, OutSystems, SuperappLoginModel, SuperappLogin_Controller_debugger) {
var OS = OutSystems.Internal;
var SuperappLoginController = exports;
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

checkSuperappLoginRole$Action(callContext) {
var outVars = new OS.SystemStructures.HasRoleResultRec();
outVars.hasRoleOut = OS.Authorization.hasRole({
roleKey: this.roles.SuperappLogin.roleKey
});
return outVars;

}


get roles() {if(!(this.hasOwnProperty("_roles"))) {
this._roles = {
SuperappLogin: {
roleKey: "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f.ab2a6b39-1f30-4f20-a069-cf5d18b076f4",
roleException: new OS.Exceptions.Exceptions.NotRegisteredException("SuperappLogin.NotSuperappLogin", "SuperappLogin role required")
}
};
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
return SuperappLoginController.default.defaultTimeout;
}

}

SuperappLoginController.default = new Controller();
});

define("SuperappLogin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main", "SuperappLogin.clientVariables"], function (exports, Debugger, OutSystems, SuperappLoginClientVariables) {
var OS = OutSystems.Internal;
var metaInfo = {
"TDwelhP8+k2QIdopjNGdwQ": {
getter: function (varBag, idService) {
return varBag.vars.value.usernameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XUodYExaNE26vxzORBcfcg": {
getter: function (varBag, idService) {
return varBag.vars.value.passwordInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UGYBvE6+OkGu6MtlgN37wA": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"8aBvS0jtUUuZKhFLkdW8Fg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sGmTuNB1KEmi8nCI3KkFCA": {
getter: function (varBag, idService) {
return varBag.loginVar.value;
}
},
"ohKLgVfudEO9WIjbR4IDJg": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ISb8Rf1h5kui7U4VaeJ4Qg": {
getter: function (varBag, idService) {
return varBag.outVars.value.syncOnOnlineOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xCO9GsKcHEShU+X2TOlOFg": {
getter: function (varBag, idService) {
return varBag.outVars.value.syncOnLoginOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5Qpcg_GuwE6Ynei0vKslOg": {
getter: function (varBag, idService) {
return varBag.outVars.value.syncOnResumeOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5IHHC5Ck6EWlngzbULlcXg": {
getter: function (varBag, idService) {
return varBag.outVars.value.retryOnErrorOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"n6dhnmBl802fr13DcvtUlw": {
getter: function (varBag, idService) {
return varBag.outVars.value.retryIntervalInSecondsOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"a90n2WJUTU6syYn3y31SVA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Aqrrh8UMfUa806dMfGJNCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.discardPendingSyncUnitsInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tZBjB88+K0aL_zar2IoqIg": {
getter: function (varBag, idService) {
return SuperappLoginClientVariables.getLastURL();
},
dataType: OS.DataTypes.DataTypes.Text
},
"tOYsJd_1Skitw_mfxt4KeQ": {
getter: function (varBag, idService) {
return SuperappLoginClientVariables.getUserPhotoURL();
},
dataType: OS.DataTypes.DataTypes.Text
},
"J3Lxm1NJSk+olvTu7kTe0w": {
getter: function (varBag, idService) {
return SuperappLoginClientVariables.getUserName();
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

