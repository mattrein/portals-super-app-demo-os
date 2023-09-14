define("SuperappLogin.Common.Login.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "OutSystemsUI.controller", "SuperappLogin.controller", "OutSystemsUI.model", "OutSystemsUI.controller$FeedbackMessageClose", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "SuperappLogin.controller$OfflineDataSyncConfiguration", "SuperappLogin.controller$DoLogin", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$ShowPassword", "SuperappLogin.controller$OfflineDataSync"], function (OutSystems, SuperappLoginModel, OutSystemsUIController, SuperappLoginController, OutSystemsUIModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UserEmail", "userEmailVar", "UserEmail", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Password", "passwordVar", "Password", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsExecuting", "isExecutingVar", "IsExecuting", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
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
LoginForm: OS.Model.ValidationWidgetRecord,
Input_UsernameVal: OS.Model.ValidationWidgetRecord,
Input_Password: OS.Model.ValidationWidgetRecord
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

define("SuperappLogin.Common.Login.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.Login.mvc$model", "SuperappLogin.Common.Login.mvc$controller", "SuperappLogin.clientVariables", "SuperappLogin.Common.LayoutBlank.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Interaction.AnimatedLabel.mvc$view", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "OutSystemsUI.Utilities.ButtonLoading.mvc$view", "OutSystemsUI.controller$FeedbackMessageClose", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "SuperappLogin.controller$OfflineDataSyncConfiguration", "SuperappLogin.controller$DoLogin", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$ShowPassword", "SuperappLogin.controller$OfflineDataSync"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIController, OutSystemsUIModel, React, OSView, SuperappLogin_Common_Login_mvc_model, SuperappLogin_Common_Login_mvc_controller, SuperappLoginClientVariables, SuperappLogin_Common_LayoutBlank_mvc_view, OSWidgets, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "Common.Login"; }

        static getAttributes() { return {
codeFunction: "Login",
functionKey: "596ca4f0-e1cd-40fe-850e-1f81315b11fd",
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
            return [SuperappLogin_Common_LayoutBlank_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view];
        }

        get modelFactory() {
            return SuperappLogin_Common_Login_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_Login_mvc_controller;
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
            

            return "Login";
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
name: "LoginForm"
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
style: "border-radius-soft shadow-s",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "margin-top-base"
},
tag: "h1",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "heading5 text-neutral-8",
value: model.getCachedValue(idService.getId("gmkrkWorSkudZwfcwnO0Yw.Value"), function () {
return OS.BuiltinFunctions.getAppName();
}),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-inputs margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
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
validationParentId: idService.getId("LoginForm")
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
targetWidget: "Input_UsernameVal",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Login")];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("LoginForm")
},
enabled: true,
extendedProperties: {
tabIndex: "1"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 250,
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.userEmailVar, function (value) {
model.variables.userEmailVar = value;
}),
_idProps: {
service: idService,
name: "Input_UsernameVal"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.userEmailVar)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "13"
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
validationParentId: idService.getId("LoginForm")
},
_idProps: {
service: idService,
uuid: "14",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_Password",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Password")];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
AlignIconRight: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("LoginForm")
},
_idProps: {
service: idService,
uuid: "16",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Login/Link OnClick");
controller.onTogglePasswordVisibility$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isPasswordVisibleVar, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "eye-slash",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "eye",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}))];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("LoginForm")
},
enabled: true,
extendedProperties: {
tabIndex: "2",
style: "padding-bottom: 0px; padding-left: 0px; padding-right: var(--space-xl); padding-top: 0px;"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Password*/ 1,
mandatory: true,
maxLength: 0,
style: "form-control login-password",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.passwordVar, function (value) {
model.variables.passwordVar = value;
}),
_idProps: {
service: idService,
name: "Input_Password"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-l",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
tabIndex: "3",
"aria-label": "Forgot your password? Click here to recover it"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("/SuperappLogin/RecoverPasswordRequest", {}),
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Forgot your password?")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-button margin-top-l",
visible: true,
_idProps: {
service: idService,
uuid: "24"
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
validationParentId: idService.getId("LoginForm")
},
_idProps: {
service: idService,
uuid: "25",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
tabIndex: "4"
},
gridProperties: {
classes: "OSFillParent"
},
isDefault: true,
onClick: function () {
_this.validateWidget(idService.getId("LoginForm"));
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Login/Button OnClick");
return controller.loginOnClick$Action(controller.callContext(eventHandlerContext));
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
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-btn-loading__spinner-animation",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Log in")];
})
},
_dependencies: []
}))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar), asPrimitiveValue(model.variables.userEmailVar)]
}));
        }
    }

    return View;
});
define("SuperappLogin.Common.Login.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.Login.mvc$debugger", "SuperappLogin.Common.controller", "OutSystemsUI.controller$FeedbackMessageClose", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "SuperappLogin.controller$OfflineDataSyncConfiguration", "SuperappLogin.controller$DoLogin", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$ShowPassword", "SuperappLogin.controller$OfflineDataSync"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIController, OutSystemsUIModel, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_Login_mvc_Debugger, SuperappLogin_CommonController) {
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

// Aggregates and Data Actions

get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = [];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _loginOnClick$Action() {if(!(this.hasOwnProperty("__loginOnClick$Action"))) {
this.__loginOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("LoginOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "LoginOnClick");
span.setAttribute("outsystems.function.key", "09f2538d-8dca-4730-8685-1def84ac028f");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("LoginOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var offlineDataSyncConfigurationVar = new OS.DataTypes.VariableHolder();
var checkSuperappLoginRoleVar = new OS.DataTypes.VariableHolder();
var doLoginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.offlineDataSyncConfigurationVar = offlineDataSyncConfigurationVar;
varBag.checkSuperappLoginRoleVar = checkSuperappLoginRoleVar;
varBag.doLoginVar = doLoginVar;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:jVPyCcqNMEeGhR3vhKwCjw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.8KRsWc3h_kCFDh+BMVsR_Q/ClientActions.jVPyCcqNMEeGhR3vhKwCjw:Dffa06qHY4nRzSvqA0prFA", "SuperappLogin", "LoginOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:hFdAw5GguEORf5jKkKCtmA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:dT3n486JOk+q_WMbLSx4Wg", callContext.id) && model.widgets.get(idService.getId("LoginForm")).validAttr)) {
// IsExecuting = true
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:47ui61ugok215r6t67HWZw", callContext.id);
// IsExecuting = True
model.variables.isExecutingVar = true;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:9O1WF9qm_kW_szcsoiByKw", callContext.id);
// Execute Action: FeedbackMessageClose
OutSystemsUIController.default.feedbackMessageClose$Action(callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:QCHPakHQCEe8zBgE0A5SIw", callContext.id);
// Execute Action: DoLogin
model.flush();
return SuperappLoginController.default.doLogin$Action(model.variables.userEmailVar, model.variables.passwordVar, callContext).then(function (value) {
doLoginVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:VtmBLx+gm0ebs9oVAvdlbg", callContext.id);
// Execute Action: CheckSuperappLoginRole
checkSuperappLoginRoleVar.value = SuperappLoginController.default.checkSuperappLoginRole$Action(callContext);

}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:1DqCTo+82EeiQK_sEZhXOQ", callContext.id) && doLoginVar.value.successOut)) {
// Has Role?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:9IW3HHzwu0OKx5ZXRvBpkw", callContext.id) && checkSuperappLoginRoleVar.value.hasRoleOut)) {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:kT9uKJgI4kKF7cZi9WgQNA", callContext.id);
// Execute Action: OfflineDataSyncConfiguration
offlineDataSyncConfigurationVar.value = SuperappLoginController.default.offlineDataSyncConfiguration$Action(callContext);

// Configuration.SyncOnLogin?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:TkL27UMDB06_2xOxy2pa6w", callContext.id) && offlineDataSyncConfigurationVar.value.syncOnLoginOut)) {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:bhiCkVvPXE2XoVQQSs_gXw", callContext.id);
// Execute Action: SyncOnLogin
return controller._syncOnLogin$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:oOVJCAfi6EyOGAvbQYuSaw", callContext.id);
});
} else {
// IsExecuting = false
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:OJA2_FalPUSPPdF1zOjL0w", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:9Y928H0OLEqzCJtk74OXNQ", callContext.id);
// Destination: /SuperappLogin/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL((((SuperappLoginClientVariables.getLastURL() === "")) ? (OS.BuiltinFunctions.getOwnerURLPath()) : (SuperappLoginClientVariables.getLastURL())), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
}

});
} else {
// Clear Password
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:10ViqezLiUSKbD9z+IHOsQ", callContext.id);
// Password = ""
model.variables.passwordVar = "";
// IsExecuting = false
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:OGhqFif8hkuL6U6w4KPyOw", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
// No Permission
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:+vqHXqgWcUeCMNso9ZzjjA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("No permission.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:jUxjJe3pE02jkUgQi6_JRQ", callContext.id);
// Execute Action: Logout
model.flush();
return OS.SystemActions.logout(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:oOVJCAfi6EyOGAvbQYuSaw", callContext.id);
});
}

});
} else {
// Clear Password
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:7SmI86hisEO1P1QcBX9SpQ", callContext.id);
// Password = ""
model.variables.passwordVar = "";
// IsExecuting = false
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:w6xVKAyBU0CfBbGI4dJn7w", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
// Error Message
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:ZqTNOgVW8Eew9fg8wq2L0g", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(doLoginVar.value.errorMessageOut, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:oOVJCAfi6EyOGAvbQYuSaw", callContext.id);
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:oOVJCAfi6EyOGAvbQYuSaw", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.debug("Login.LoginOnClick", OS.Exceptions.getMessage(ex));
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex, null, null, 1);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Logger.startActiveSpan("AllExceptions", function (span) {
if(span) {
span.setAttribute("code.function", "AllExceptions");
span.setAttribute("outsystems.function.key", "92ab14d2-f613-4f45-8bf5-7deca5508534");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

return OS.Flow.tryFinally(function () {
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:0hSrkhP2RU+L9X3spVCFNA", callContext.id);
// Clear Password
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:o1Zu_ixfgUmzvhz2lt3ywg", callContext.id);
// Password = ""
model.variables.passwordVar = "";
// IsExecuting = false
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:kBEsZG_RjEGThWZTgQq4Sw", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:BuJbgkWBUUeIQ3aJa2p6Zw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:oOVJCAfi6EyOGAvbQYuSaw", callContext.id);
return OS.Flow.returnAsync();

});
}, function () {
if(span) {
span.end();
}

});
}, 1);
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:jVPyCcqNMEeGhR3vhKwCjw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:jVPyCcqNMEeGhR3vhKwCjw", callContext.id);
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

return this.__loginOnClick$Action;
}set _loginOnClick$Action(value) {this.__loginOnClick$Action = value;
}

get _onTogglePasswordVisibility$Action() {if(!(this.hasOwnProperty("__onTogglePasswordVisibility$Action"))) {
this.__onTogglePasswordVisibility$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnTogglePasswordVisibility", function (span) {
if(span) {
span.setAttribute("code.function", "OnTogglePasswordVisibility");
span.setAttribute("outsystems.function.key", "1134af19-8c59-413e-ae37-b97fbe3eea58");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnTogglePasswordVisibility");
callContext = controller.callContext(callContext);
var showPasswordVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.showPasswordVar = showPasswordVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:Ga80EVmMPkGuN7l_vj7qWA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.8KRsWc3h_kCFDh+BMVsR_Q/ClientActions.Ga80EVmMPkGuN7l_vj7qWA:1K56KrRYB85E0_3FpHRC1w", "SuperappLogin", "OnTogglePasswordVisibility", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:XySIxkUfGEuav7HrgZZGaA", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:WG3gQlcZyEqh3JD7dcn1xA", callContext.id);
// IsPasswordVisible = notIsPasswordVisible
model.variables.isPasswordVisibleVar = !(model.variables.isPasswordVisibleVar);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:xnsUtZQZ0Ui0dpZ2Gyqazw", callContext.id);
// Execute Action: ShowPassword
showPasswordVar.value = OutSystemsUIController.default.showPassword$Action("", callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:0saXwwoH+06A+TMrF81Ouw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:Ga80EVmMPkGuN7l_vj7qWA", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onTogglePasswordVisibility$Action;
}set _onTogglePasswordVisibility$Action(value) {this.__onTogglePasswordVisibility$Action = value;
}

get _onInitialize$Action() {if(!(this.hasOwnProperty("__onInitialize$Action"))) {
this.__onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnInitialize", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "b92f41d1-8948-41be-976c-8211b8ce953c");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:0UEvuUiJvkGXbIIRuM6VPA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.8KRsWc3h_kCFDh+BMVsR_Q/ClientActions.0UEvuUiJvkGXbIIRuM6VPA:hF2njeWi4WsboYt+_AeSrA", "SuperappLogin", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:0H6f9wwUVUei19bUgRL5GA", callContext.id);
// Logged User?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:WmLuanJc50qPKUoasKIRwA", callContext.id) && (((OS.BuiltinFunctions.getUserId()).toString()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:6264XmgGHUmvhZrhw0YpGg", callContext.id);
// Destination: /SuperappLogin/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(OS.BuiltinFunctions.getOwnerURLPath(), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:1VjxrKegHU6wW7hh90b4LA", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:8GPT2NX6GkaeTvYeLac+AQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:0UEvuUiJvkGXbIIRuM6VPA", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onInitialize$Action;
}set _onInitialize$Action(value) {this.__onInitialize$Action = value;
}

get _syncOnLogin$Action() {if(!(this.hasOwnProperty("__syncOnLogin$Action"))) {
this.__syncOnLogin$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("SyncOnLogin", function (span) {
if(span) {
span.setAttribute("code.function", "SyncOnLogin");
span.setAttribute("outsystems.function.key", "fb3ef43e-8a74-4e92-af03-1a766bdc84e4");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("SyncOnLogin");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:PvQ++3SKkk6vAxp2a9yE5A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.8KRsWc3h_kCFDh+BMVsR_Q/ClientActions.PvQ++3SKkk6vAxp2a9yE5A:UBnDcYReYehaYF+swN5xYg", "SuperappLogin", "SyncOnLogin", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:JA6RrPgS40iwG7ekmYHOwA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:TNNr6Duh20OH5iucIm9htA", callContext.id);
// Execute Action: OfflineDataSync
model.flush();
return SuperappLoginController.default.offlineDataSync$Action("", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:+1SPngdrXkGNnR4vz3aWbg", callContext.id);
// Destination: /SuperappLogin/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL((((SuperappLoginClientVariables.getLastURL() === "")) ? (OS.BuiltinFunctions.getOwnerURLPath()) : (SuperappLoginClientVariables.getLastURL())), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
});
}).catch(function (ex) {
OS.Logger.debug("Login.SyncOnLogin", OS.Exceptions.getMessage(ex));
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex, null, null, 1);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Logger.startActiveSpan("AllExceptions", function (span) {
if(span) {
span.setAttribute("code.function", "AllExceptions");
span.setAttribute("outsystems.function.key", "8ba62c53-7b91-4194-a6c6-3aa08ebc1298");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

return OS.Flow.tryFinally(function () {
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Uyymi5F7lEGmxjqgjrwSmA", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:1YIbd3b1z0+jBw2G+53o8Q", callContext.id);
// Execute Action: Logout
model.flush();
return OS.SystemActions.logout(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:ayDb4fpg3k6AMICQLlhUdA", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:_dQEz30OxUSpXaruVG4tdw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:uf1YIwSDwk2dn1y5OEIYRQ", callContext.id);
return OS.Flow.returnAsync();

});
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:PvQ++3SKkk6vAxp2a9yE5A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:PvQ++3SKkk6vAxp2a9yE5A", callContext.id);
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

return this.__syncOnLogin$Action;
}set _syncOnLogin$Action(value) {this.__syncOnLogin$Action = value;
}


loginOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("LoginOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "LoginOnClick");
span.setAttribute("outsystems.function.key", "09f2538d-8dca-4730-8685-1def84ac028f");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._loginOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onTogglePasswordVisibility$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnTogglePasswordVisibility__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnTogglePasswordVisibility");
span.setAttribute("outsystems.function.key", "1134af19-8c59-413e-ae37-b97fbe3eea58");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onTogglePasswordVisibility$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "b92f41d1-8948-41be-976c-8211b8ce953c");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

syncOnLogin$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SyncOnLogin__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SyncOnLogin");
span.setAttribute("outsystems.function.key", "fb3ef43e-8a74-4e92-af03-1a766bdc84e4");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._syncOnLogin$Action, callContext);
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
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:8KRsWc3h_kCFDh+BMVsR_Q:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.8KRsWc3h_kCFDh+BMVsR_Q:JcpWIS2UAe9iZRbkM3lqyw", "SuperappLogin", "Login", "NRNodes.WebScreen", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:8KRsWc3h_kCFDh+BMVsR_Q", callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
}

return this._popDebuggerContext;
}set popDebuggerContext(value) {this._popDebuggerContext = value;
}

get onInitializeEventHandler() {if(!(this.hasOwnProperty("_onInitializeEventHandler"))) {
this._onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Login On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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

// Client Actions - Variables

}
return new OS.Controller.ControllerFactory(Controller, SuperappLoginLanguageResources);
});


define("SuperappLogin.Common.Login.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"0hSrkhP2RU+L9X3spVCFNA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"kT9uKJgI4kKF7cZi9WgQNA": {
getter: function (varBag, idService) {
return varBag.offlineDataSyncConfigurationVar.value;
}
},
"VtmBLx+gm0ebs9oVAvdlbg": {
getter: function (varBag, idService) {
return varBag.checkSuperappLoginRoleVar.value;
}
},
"QCHPakHQCEe8zBgE0A5SIw": {
getter: function (varBag, idService) {
return varBag.doLoginVar.value;
}
},
"xnsUtZQZ0Ui0dpZ2Gyqazw": {
getter: function (varBag, idService) {
return varBag.showPasswordVar.value;
}
},
"Uyymi5F7lEGmxjqgjrwSmA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"JXY9+Lm84EO6drPBDV92sQ": {
getter: function (varBag, idService) {
return varBag.model.variables.userEmailVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ClYzPrD9uU223mU5xMhMXQ": {
getter: function (varBag, idService) {
return varBag.model.variables.passwordVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6Vtt+VckVEOBjyURb3NYFg": {
getter: function (varBag, idService) {
return varBag.model.variables.isExecutingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"BfI+NFIP0kWsQzyX9VRv0g": {
getter: function (varBag, idService) {
return varBag.model.variables.isPasswordVisibleVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5BlTY4p4qkWpxwslgPgMhg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"nOz9mzBx0U6HkCVIZSq2AA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LoginForm"));
})(varBag.model, idService);
}
},
"SsVKU6l60kqjGabyHM4xrg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"4lRR07qXLU2AT62BNGqvOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"H0aYPMsQ00uyUj4Hiw4E0A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_UsernameVal"));
})(varBag.model, idService);
}
},
"x9UqtNqvH0Wl8sdgfkpMeA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"TyI_qOWFpEWYF12qtPDXkQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"XsNE_R9ogkyyOzzam4Yfwg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"7O26cSm4EkiD06mt+3kezQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PasswordVisibile"));
})(varBag.model, idService);
}
},
"Om8V6HLM_UC44p8IpD9L6w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"eTjWZEVzMUC8n7a_wPjBSQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Password"));
})(varBag.model, idService);
}
},
"8hdSq3eKhk276SXf+nHkIA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

