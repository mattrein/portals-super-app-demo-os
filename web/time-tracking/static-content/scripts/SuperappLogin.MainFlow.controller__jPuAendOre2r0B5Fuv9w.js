﻿define("SuperappLogin.MainFlow.controller", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "SuperappLogin.Common.controller", "SuperappLogin.clientVariables", "SuperappLogin.MainFlow.controller$debugger"], function (exports, OutSystems, SuperappLoginModel, SuperappLoginController, SuperappLogin_CommonController, SuperappLoginClientVariables, SuperappLogin_MainFlow_Controller_debugger) {
var OS = OutSystems.Internal;
var SuperappLogin_MainFlowController = exports;
class Controller extends 
OS.Controller.BaseController {
getDefaultTimeout() {
return SuperappLoginController.default.defaultTimeout;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex, callContext) {
var varBag = {};
var controller = this.controller;
OS.Logger.debug("MainFlow", OS.Exceptions.getMessage(ex));
var globalExceptionHandle = OS.Injector.resolve(OS.ServiceNames.GlobalExceptionHandler);
globalExceptionHandle(ex, callContext);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;


};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

}



SuperappLogin_MainFlowController.default = new Controller();
});


define("SuperappLogin.MainFlow.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
});

