define("OutSystemsUI.Content.controller", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.Content.controller$debugger", "OutSystemsUI.Content.controller$translationsResources"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_Content_Controller_debugger, OutSystemsUI_Content_Controller_translationsResources) {
var OS = OutSystems.Internal;
var OutSystemsUI_ContentController = exports;
class Controller extends 
OS.Controller.BaseController {
getDefaultTimeout() {
return OutSystemsUIController.default.defaultTimeout;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex, callContext) {
var varBag = {};
var controller = this.controller;
OS.Logger.debug("Content", OS.Exceptions.getMessage(ex));
var globalExceptionHandle = OS.Injector.resolve(OS.ServiceNames.GlobalExceptionHandler);
globalExceptionHandle(ex, callContext);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;


};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

}



OutSystemsUI_ContentController.default = new Controller(OutSystemsUI_Content_Controller_translationsResources);
});


define("OutSystemsUI.Content.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
});

define("OutSystemsUI.Content.controller$translationsResources", ["exports"], function (exports) {
return {};
});

