define("OutSystemsUI.Numbers.controller", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.Numbers.controller$debugger", "OutSystemsUI.Numbers.controller$translationsResources"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_Numbers_Controller_debugger, OutSystemsUI_Numbers_Controller_translationsResources) {
var OS = OutSystems.Internal;
var OutSystemsUI_NumbersController = exports;
class Controller extends 
OS.Controller.BaseController {
getDefaultTimeout() {
return OutSystemsUIController.default.defaultTimeout;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex, callContext) {
var varBag = {};
var controller = this.controller;
OS.Logger.debug("Numbers", OS.Exceptions.getMessage(ex));
var globalExceptionHandle = OS.Injector.resolve(OS.ServiceNames.GlobalExceptionHandler);
globalExceptionHandle(ex, callContext);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;


};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

}



OutSystemsUI_NumbersController.default = new Controller(OutSystemsUI_Numbers_Controller_translationsResources);
});


define("OutSystemsUI.Numbers.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
});

define("OutSystemsUI.Numbers.controller$translationsResources", ["exports"], function (exports) {
return {};
});

