define("SuperappLogin.Common.RecoverPasswordRequest.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model"], function (OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IsExecuting", "isExecutingVar", "IsExecuting", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Email", "emailVar", "Email", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
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
return {
RecoverPasswordForm: OS.Model.ValidationWidgetRecord,
Input_Email: OS.Model.ValidationWidgetRecord
};
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

static get hasValidationWidgets() {return true;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("SuperappLogin.Common.RecoverPasswordRequest.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.RecoverPasswordRequest.mvc$model", "SuperappLogin.Common.RecoverPasswordRequest.mvc$controller", "SuperappLogin.clientVariables", "SuperappLogin.Common.LayoutBlank.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Interaction.AnimatedLabel.mvc$view", "OutSystemsUI.Utilities.ButtonLoading.mvc$view"], function (OutSystems, SuperappLoginModel, SuperappLoginController, React, OSView, SuperappLogin_Common_RecoverPasswordRequest_mvc_model, SuperappLogin_Common_RecoverPasswordRequest_mvc_controller, SuperappLoginClientVariables, SuperappLogin_Common_LayoutBlank_mvc_view, OSWidgets, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "Common.RecoverPasswordRequest"; }

        static getAttributes() { return {
codeFunction: "RecoverPasswordRequest",
functionKey: "fb2a399f-d94d-4cf2-98fd-c7c9eb27ee01",
functionOwnerName: "SuperappLogin",
functionOwnerKey: "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/SuperappLogin.SuperappLogin.css", "css/OutSystemsUI.OutSystemsUI.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [SuperappLogin_Common_LayoutBlank_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view];
        }

        get modelFactory() {
            return SuperappLogin_Common_RecoverPasswordRequest_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_RecoverPasswordRequest_mvc_controller;
        }

        get title() {
            
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var callContext = controller.callContext();
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;
            

            return "Recover password";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(SuperappLogin_Common_LayoutBlank_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-screen",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
style: "login-form",
_idProps: {
service: idService,
name: "RecoverPasswordForm"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "login-logo",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
alt: "",
style: "height: 100px;"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/SuperappLogin.Logo.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "margin-top-base text-neutral-8"
},
tag: "h5",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Forgot your password?"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-s",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Don\'t worry, we\'ll send you an email with instructions."))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-inputs margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Interaction_AnimatedLabel_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("RecoverPasswordForm")
},
_idProps: {
service: idService,
uuid: "10",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_Email",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Email")];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("RecoverPasswordForm")
},
enabled: true,
extendedProperties: {
tabIndex: "1"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Email*/ 7,
mandatory: true,
maxLength: 250,
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.emailVar, function (value) {
model.variables.emailVar = value;
}),
_idProps: {
service: idService,
name: "Input_Email"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.emailVar)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-button margin-top-l",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Utilities_ButtonLoading_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
IsLoading: model.variables.isExecutingVar,
ExtendedClass: "full-width"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("RecoverPasswordForm")
},
_idProps: {
service: idService,
uuid: "14",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
tabIndex: "2"
},
gridProperties: {
classes: "OSFillParent"
},
isDefault: true,
onClick: function () {
_this.validateWidget(idService.getId("RecoverPasswordForm"));
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/RecoverPasswordRequest/Button OnClick");
return controller.resetPasswordOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-btn-loading__spinner-animation",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Reset password")];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Not in the right place?", React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
tabIndex: "3",
"aria-label": "Go to login page"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("/SuperappLogin/Login", {}),
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Go to login."))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.emailVar)]
}));
        }
    }

    return View;
});
define("SuperappLogin.Common.RecoverPasswordRequest.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.RecoverPasswordRequest.mvc$debugger", "SuperappLogin.Common.controller"], function (OutSystems, SuperappLoginModel, SuperappLoginController, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_RecoverPasswordRequest_mvc_Debugger, SuperappLogin_CommonController) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}

// Server Actions - Methods
get sendResetPasswordEmail$ServerAction() {if(!(this.hasOwnProperty("_sendResetPasswordEmail$ServerAction"))) {
this._sendResetPasswordEmail$ServerAction = function (applicationNameIn, customerEmailIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SendResetPasswordEmail", function (span) {
if(span) {
span.setAttribute("code.function", "SendResetPasswordEmail");
span.setAttribute("outsystems.function.key", "bc19ffbf-00d6-4ef4-bb30-177ef0416740");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
}

return OS.Flow.tryFinally(function () {
var inputs = {
ApplicationName: OS.DataConversion.ServerDataConverter.to(applicationNameIn, OS.DataTypes.DataTypes.Text),
CustomerEmail: OS.DataConversion.ServerDataConverter.to(customerEmailIn, OS.DataTypes.DataTypes.Email)
};
return controller.callServerAction("SendResetPasswordEmail", "screenservices/SuperappLogin/Common/RecoverPasswordRequest/ActionSendResetPasswordEmail", "ZQ3JIWE5Y0g+GWpXfIJc8A", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("SuperappLogin.Common.RecoverPasswordRequest$ActionSendResetPasswordEmail"))();
executeServerActionResult.successOut = OS.DataConversion.ServerDataConverter.from(outputs.Success, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
}, function () {
if(span) {
span.end();
}

});
}, 0);
};
}

return this._sendResetPasswordEmail$ServerAction;
}set sendResetPasswordEmail$ServerAction(value) {this._sendResetPasswordEmail$ServerAction = value;
}


// Aggregates and Data Actions

get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = [];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _resetPasswordOnClick$Action() {if(!(this.hasOwnProperty("__resetPasswordOnClick$Action"))) {
this.__resetPasswordOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("ResetPasswordOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "ResetPasswordOnClick");
span.setAttribute("outsystems.function.key", "d1dcbdb7-800e-44f1-b332-7566d3a28f6b");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("ResetPasswordOnClick");
callContext = controller.callContext(callContext);
var sendResetPasswordEmailVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.sendResetPasswordEmailVar = sendResetPasswordEmailVar;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:t73c0Q6A8USzMnVm06KPaw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.nzkq+03Z8kyY_cfJ6yfuAQ/ClientActions.t73c0Q6A8USzMnVm06KPaw:zzIe+Xheg8W4cqmsXQfKgw", "SuperappLogin", "ResetPasswordOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Nspak804m0iQUgJhtNrlmg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:8p+enx9dP0C5xj7vkW04jQ", callContext.id) && model.widgets.get(idService.getId("RecoverPasswordForm")).validAttr)) {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:SAGZ1CLUDUWl7hxjhh0JQw", callContext.id);
// IsExecuting = True
model.variables.isExecutingVar = true;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:nI7yuKj5qk6zauqf3jTr+Q", callContext.id);
// Execute Action: SendResetPasswordEmail
model.flush();
return controller.sendResetPasswordEmail$ServerAction(OS.BuiltinFunctions.getAppName(), model.variables.emailVar, callContext).then(function (value) {
sendResetPasswordEmailVar.value = value;
}).then(function () {
// Success?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:bhDFRryilEO2t3BQ_RMqAQ", callContext.id) && sendResetPasswordEmailVar.value.successOut)) {
// Clear Variables
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:eLkM3Nevg02ZPsMMaODkfA", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:z8b08KbGvkKcKz6wy7K7uA", callContext.id);
// Destination: /SuperappLogin/RecoverPasswordReset
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/SuperappLogin/RecoverPasswordReset", {
Email: OS.DataConversion.ServerDataConverter.to(model.variables.emailVar, OS.DataTypes.DataTypes.Email)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:RztZ3DHZ4U2gDQx6oMzasQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("An error has occured. Please try again later.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:JcdLpO3KDUG3ZhpD9ttAkQ", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:HSjDjXjA5U2ss9vvwb8BeQ", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:HSjDjXjA5U2ss9vvwb8BeQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:t73c0Q6A8USzMnVm06KPaw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:t73c0Q6A8USzMnVm06KPaw", callContext.id);
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

return this.__resetPasswordOnClick$Action;
}set _resetPasswordOnClick$Action(value) {this.__resetPasswordOnClick$Action = value;
}


resetPasswordOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ResetPasswordOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ResetPasswordOnClick");
span.setAttribute("outsystems.function.key", "d1dcbdb7-800e-44f1-b332-7566d3a28f6b");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._resetPasswordOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:nOLMJqktSVokKnWDq+B1LQ", "SuperappLogin", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:nzkq+03Z8kyY_cfJ6yfuAQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.nzkq+03Z8kyY_cfJ6yfuAQ:xCYkpbVlpvdJE4hzVEKGBA", "SuperappLogin", "RecoverPasswordRequest", "NRNodes.WebScreen", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:nzkq+03Z8kyY_cfJ6yfuAQ", callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
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
this._onReadyEventHandler = null;
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
this._onDestroyEventHandler = null;
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
return SuperappLogin_CommonController.default.handleError(ex, this.callContext());
};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

static checkPermissions() {
}

getDefaultTimeout() {
return SuperappLoginController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables
Controller.registerVariableGroupType("SuperappLogin.Common.RecoverPasswordRequest$ActionSendResetPasswordEmail", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

// Client Actions - Variables

}
return new OS.Controller.ControllerFactory(Controller, SuperappLoginLanguageResources);
});


define("SuperappLogin.Common.RecoverPasswordRequest.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"nI7yuKj5qk6zauqf3jTr+Q": {
getter: function (varBag, idService) {
return varBag.sendResetPasswordEmailVar.value;
}
},
"f7WJhV2WVEqq5kzRlUsOeA": {
getter: function (varBag, idService) {
return varBag.model.variables.isExecutingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"inPjeCnhJkS4er+6At_0oA": {
getter: function (varBag, idService) {
return varBag.model.variables.emailVar;
},
dataType: OS.DataTypes.DataTypes.Email
},
"rxCYwfehC0q4EWfgSC_mag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"67hMeEicb0Ongw7z6ygn2Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RecoverPasswordForm"));
})(varBag.model, idService);
}
},
"zN5MC5BiWk2MkWEocr0h5g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"suwPMq5fXUGEg+MGtMy5UA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"1xjpF3+h6EGzDK8U294ttQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Email"));
})(varBag.model, idService);
}
},
"oXqUHmqCtkGFcDFhm+lr4g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

