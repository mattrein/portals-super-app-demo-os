define("OutSystemsUI.Interaction.controller", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.Interaction.controller$debugger", "OutSystemsUI.Interaction.controller$translationsResources"], function (exports, OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_Interaction_Controller_debugger, OutSystemsUI_Interaction_Controller_translationsResources) {
var OS = OutSystems.Internal;
var OutSystemsUI_InteractionController = exports;
class Controller extends 
OS.Controller.BaseController {
getDefaultTimeout() {
return OutSystemsUIController.default.defaultTimeout;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex, callContext) {
var varBag = {};
var controller = this.controller;
OS.Logger.debug("Interaction", OS.Exceptions.getMessage(ex));
var globalExceptionHandle = OS.Injector.resolve(OS.ServiceNames.GlobalExceptionHandler);
globalExceptionHandle(ex, callContext);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;


};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

}



OutSystemsUI_InteractionController.default = new Controller(OutSystemsUI_Interaction_Controller_translationsResources);
});


define("OutSystemsUI.Interaction.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
});

define("OutSystemsUI.Interaction.controller$translationsResources", ["exports"], function (exports) {
return {};
});

