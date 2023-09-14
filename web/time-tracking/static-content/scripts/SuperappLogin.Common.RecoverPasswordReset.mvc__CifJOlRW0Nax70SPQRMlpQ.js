define("SuperappLogin.Common.RecoverPasswordReset.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "System_.model", "OutSystemsUI.model", "OutSystemsUI.controller", "SuperappLogin.controller$DoLogin", "System_.model$FinishResetPasswordResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword"], function (OutSystems, SuperappLoginModel, SuperappLoginController, System_Model, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("NewPassword", "newPasswordVar", "NewPassword", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ConfirmPassword", "confirmPasswordVar", "ConfirmPassword", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsConfirmPasswordVisible", "isConfirmPasswordVisibleVar", "IsConfirmPasswordVisible", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsButtonEnabled", "isButtonEnabledVar", "IsButtonEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsExecuting", "isExecutingVar", "IsExecuting", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsNewPasswordCompliant", "isNewPasswordCompliantVar", "IsNewPasswordCompliant", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Email", "emailIn", "Email", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, false), 
this.attr("_emailInDataFetchStatus", "_emailInDataFetchStatus", "_emailInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("VerificationCode", "verificationCodeIn", "VerificationCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_verificationCodeInDataFetchStatus", "_verificationCodeInDataFetchStatus", "_verificationCodeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
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
PasswordResetForm: OS.Model.ValidationWidgetRecord,
Input_Email: OS.Model.ValidationWidgetRecord,
Input_Code: OS.Model.ValidationWidgetRecord,
Input_NewPassword: OS.Model.ValidationWidgetRecord,
Input_ConfirmPassword: OS.Model.ValidationWidgetRecord
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
if("Email" in inputs) {
this.variables.emailIn = OS.DataConversion.ServerDataConverter.from(inputs.Email, OS.DataTypes.DataTypes.Email);
}

if("VerificationCode" in inputs) {
this.variables.verificationCodeIn = OS.DataConversion.ServerDataConverter.from(inputs.VerificationCode, OS.DataTypes.DataTypes.Text);
}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("SuperappLogin.Common.RecoverPasswordReset.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "System_.model", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.RecoverPasswordReset.mvc$model", "SuperappLogin.Common.RecoverPasswordReset.mvc$controller", "SuperappLogin.clientVariables", "SuperappLogin.Common.LayoutBlank.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Interaction.AnimatedLabel.mvc$view", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "OutSystemsUI.Utilities.PasswordPolicy.mvc$view", "OutSystemsUI.Utilities.ButtonLoading.mvc$view", "SuperappLogin.controller$DoLogin", "System_.model$FinishResetPasswordResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword"], function (OutSystems, SuperappLoginModel, SuperappLoginController, System_Model, OutSystemsUIModel, OutSystemsUIController, React, OSView, SuperappLogin_Common_RecoverPasswordReset_mvc_model, SuperappLogin_Common_RecoverPasswordReset_mvc_controller, SuperappLoginClientVariables, SuperappLogin_Common_LayoutBlank_mvc_view, OSWidgets, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, OutSystemsUI_Utilities_PasswordPolicy_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "Common.RecoverPasswordReset"; }

        static getAttributes() { return {
codeFunction: "RecoverPasswordReset",
functionKey: "56be72f3-5a94-4950-a920-ae6a808242bb",
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
            return [SuperappLogin_Common_LayoutBlank_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, OutSystemsUI_Utilities_PasswordPolicy_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view];
        }

        get modelFactory() {
            return SuperappLogin_Common_RecoverPasswordReset_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_RecoverPasswordReset_mvc_controller;
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
            

            return "Set a new password";
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
name: "PasswordResetForm"
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
}, "Reset password"), React.createElement(OSWidgets.Container, {
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
}, "If the entered email is correct, we\'ll send a verification code to that email.", React.createElement("br"), "Please enter the code below to verify your identity.", React.createElement("br")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-inputs margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "10"
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
validationParentId: idService.getId("PasswordResetForm")
},
_idProps: {
service: idService,
uuid: "11",
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
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Email")];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("PasswordResetForm")
},
enabled: false,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Email*/ 7,
mandatory: true,
maxLength: 250,
prompt: "mary.smith@acme.com",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.emailIn, function (value) {
model.variables.emailIn = value;
}),
_idProps: {
service: idService,
name: "Input_Email"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.emailIn)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-inputs margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "14"
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
validationParentId: idService.getId("PasswordResetForm")
},
_idProps: {
service: idService,
uuid: "15",
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
targetWidget: "Input_Code",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Verification code")];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("PasswordResetForm")
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
maxLength: 0,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/RecoverPasswordReset/Input_Code OnChange");
controller.input_CodeOnChange$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.verificationCodeIn, function (value) {
model.variables.verificationCodeIn = value;
}),
_idProps: {
service: idService,
name: "Input_Code"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.verificationCodeIn)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base password-input",
visible: true,
_idProps: {
service: idService,
uuid: "18"
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
validationParentId: idService.getId("PasswordResetForm")
},
_idProps: {
service: idService,
uuid: "19",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_NewPassword",
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, "New password")];
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
validationParentId: idService.getId("PasswordResetForm")
},
_idProps: {
service: idService,
uuid: "21",
alias: "5"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/RecoverPasswordReset/Link OnClick");
controller.onToggleNewPasswordVisibility$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "22"
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
uuid: "23"
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
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}))];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("PasswordResetForm")
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
maxLength: 256,
style: "form-control login-password",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.newPasswordVar, function (value) {
model.variables.newPasswordVar = value;
}),
_idProps: {
service: idService,
name: "Input_NewPassword"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.newPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.newPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
})), React.createElement(OutSystemsUI_Utilities_PasswordPolicy_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Password: model.variables.newPasswordVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
compliant$Action: function (isValidIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/PasswordPolicy Compliant");
controller.passwordPolicyCompliant$Action(isValidIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("PasswordResetForm")
},
_idProps: {
service: idService,
uuid: "26",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base password-input",
visible: true,
_idProps: {
service: idService,
uuid: "27"
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
validationParentId: idService.getId("PasswordResetForm")
},
_idProps: {
service: idService,
uuid: "28",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_ConfirmPassword",
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Confirm password")];
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
validationParentId: idService.getId("PasswordResetForm")
},
_idProps: {
service: idService,
uuid: "30",
alias: "8"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/RecoverPasswordReset/Link OnClick");
controller.onToggleConfirmPasswordVisibility$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isConfirmPasswordVisibleVar, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "eye-slash",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "32"
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
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}))];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("PasswordResetForm")
},
enabled: true,
extendedProperties: {
tabIndex: "3",
style: "padding-bottom: 0px; padding-left: 0px; padding-right: var(--space-xl); padding-top: 0px;"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Password*/ 1,
mandatory: true,
maxLength: 256,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/RecoverPasswordReset/Input_ConfirmPassword OnChange");
controller.input_ConfirmPasswordOnChange$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "form-control login-password",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.confirmPasswordVar, function (value) {
model.variables.confirmPasswordVar = value;
}),
_idProps: {
service: idService,
name: "Input_ConfirmPassword"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.isConfirmPasswordVisibleVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.isConfirmPasswordVisibleVar)]
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-button margin-top-l",
visible: true,
_idProps: {
service: idService,
uuid: "35"
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
ExtendedClass: "full-width",
IsLoading: model.variables.isExecutingVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("PasswordResetForm")
},
_idProps: {
service: idService,
uuid: "36",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: model.variables.isButtonEnabledVar,
extendedProperties: {
tabIndex: "4"
},
gridProperties: {
classes: "OSFillParent"
},
isDefault: true,
onClick: function () {
_this.validateWidget(idService.getId("PasswordResetForm"));
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/RecoverPasswordReset/Button OnClick");
return controller.savePasswordOnClick$Action(controller.callContext(eventHandlerContext));
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
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-btn-loading__spinner-animation",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
extendedProperties: {
tabIndex: "4"
},
text: ["Save password"],
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar)]
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
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Not in the right place?", React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
tabIndex: "5",
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
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Go to login."))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar), asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.isConfirmPasswordVisibleVar), asPrimitiveValue(model.variables.newPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar), asPrimitiveValue(model.variables.verificationCodeIn), asPrimitiveValue(model.variables.emailIn)]
}));
        }
    }

    return View;
});
define("SuperappLogin.Common.RecoverPasswordReset.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "System_.model", "OutSystemsUI.model", "OutSystemsUI.controller", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.RecoverPasswordReset.mvc$debugger", "SuperappLogin.Common.controller", "SuperappLogin.controller$DoLogin", "System_.model$FinishResetPasswordResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword"], function (OutSystems, SuperappLoginModel, SuperappLoginController, System_Model, OutSystemsUIModel, OutSystemsUIController, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_RecoverPasswordReset_mvc_Debugger, SuperappLogin_CommonController) {
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
get _passwordPolicyCompliant$Action() {if(!(this.hasOwnProperty("__passwordPolicyCompliant$Action"))) {
this.__passwordPolicyCompliant$Action = function (isValidIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("PasswordPolicyCompliant", function (span) {
if(span) {
span.setAttribute("code.function", "PasswordPolicyCompliant");
span.setAttribute("outsystems.function.key", "08c86315-f230-4f27-9dbb-f2b5169696f9");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("PasswordPolicyCompliant");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.Common.RecoverPasswordReset.PasswordPolicyCompliant$vars"))());
vars.value.isValidInLocal = isValidIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:FWPICDDyJ0+du_K1FpaW+Q:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.83K+VpRaUEmpIK5qgIJCuw/ClientActions.FWPICDDyJ0+du_K1FpaW+Q:x4T+J8sdUsyDSnoCGxsaRg", "SuperappLogin", "PasswordPolicyCompliant", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:R47CgFMAk0q1B1x71JI_+w", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:JPluhZpuyUy6FIb2RGckQA", callContext.id);
// IsNewPasswordCompliant = IsValid
model.variables.isNewPasswordCompliantVar = vars.value.isValidInLocal;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:G7Of7qKWxEOSIHgOq4fWyg", callContext.id);
// Execute Action: SetIsButtonEnabled
controller._setIsButtonEnabled$Action(callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Yrt3WXWnP0ugnhbI5s9KmA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:FWPICDDyJ0+du_K1FpaW+Q", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__passwordPolicyCompliant$Action;
}set _passwordPolicyCompliant$Action(value) {this.__passwordPolicyCompliant$Action = value;
}

get _setIsButtonEnabled$Action() {if(!(this.hasOwnProperty("__setIsButtonEnabled$Action"))) {
this.__setIsButtonEnabled$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("SetIsButtonEnabled", function (span) {
if(span) {
span.setAttribute("code.function", "SetIsButtonEnabled");
span.setAttribute("outsystems.function.key", "7aa08af1-d0f0-4bbe-8a02-42f71ea4c4be");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("SetIsButtonEnabled");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:8YqgevDQvkuKAkL3HqTEvg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.83K+VpRaUEmpIK5qgIJCuw/ClientActions.8YqgevDQvkuKAkL3HqTEvg:J5_FnU0Ig78SoM8k8dIHLQ", "SuperappLogin", "SetIsButtonEnabled", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:tEDDN176bU2Ps6LG0gAk+w", callContext.id);
// Is Code Empty?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:UysCxT5qgk2s8yh_dYBosg", callContext.id) && (model.variables.verificationCodeIn === ""))) {
// DisableButton
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:NQyjasXJp02KNfTUbtzEYA", callContext.id);
// IsButtonEnabled = False
model.variables.isButtonEnabledVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:7AV2Ak3+ZUOwpOPJFkRzWQ", callContext.id);
} else {
// Is NewPassword Empty?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:KcJG4UV5VE29L9QHzCaHbg", callContext.id) && (model.variables.newPasswordVar === ""))) {
// DisableButton
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:TpFa+Alp5U6xBnUrypf45A", callContext.id);
// IsButtonEnabled = False
model.variables.isButtonEnabledVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:7AV2Ak3+ZUOwpOPJFkRzWQ", callContext.id);
} else {
// Is NewPassword Compliant?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:7xxfpohrKEGLXeuA+o9EGQ", callContext.id) && model.variables.isNewPasswordCompliantVar)) {
// Is ConfirmPassword Empty?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:2coYyihGLUyky7BU6QBNWw", callContext.id) && (model.variables.confirmPasswordVar === ""))) {
// DisableButton
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:8mfDaRU8EEGZHg9QT22cSg", callContext.id);
// IsButtonEnabled = False
model.variables.isButtonEnabledVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:7AV2Ak3+ZUOwpOPJFkRzWQ", callContext.id);
} else {
// EnableButton
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:iAA1qsKmmkWYZ8GnyRjncA", callContext.id);
// IsButtonEnabled = True
model.variables.isButtonEnabledVar = true;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:7AV2Ak3+ZUOwpOPJFkRzWQ", callContext.id);
}

} else {
// DisableButton
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:xdaol2iZzkaIbg7JoX1jzw", callContext.id);
// IsButtonEnabled = False
model.variables.isButtonEnabledVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:7AV2Ak3+ZUOwpOPJFkRzWQ", callContext.id);
}

}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:8YqgevDQvkuKAkL3HqTEvg", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__setIsButtonEnabled$Action;
}set _setIsButtonEnabled$Action(value) {this.__setIsButtonEnabled$Action = value;
}

get _savePasswordOnClick$Action() {if(!(this.hasOwnProperty("__savePasswordOnClick$Action"))) {
this.__savePasswordOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("SavePasswordOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "SavePasswordOnClick");
span.setAttribute("outsystems.function.key", "a58d962a-a91e-4f37-a7bd-319ecbe364fb");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("SavePasswordOnClick");
callContext = controller.callContext(callContext);
var doLoginVar = new OS.DataTypes.VariableHolder();
var finishResetPasswordVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.doLoginVar = doLoginVar;
varBag.finishResetPasswordVar = finishResetPasswordVar;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:KpaNpR6pN0+nvTGey+Nk+w:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.83K+VpRaUEmpIK5qgIJCuw/ClientActions.KpaNpR6pN0+nvTGey+Nk+w:ye6Lbfh1SvSt1HMUFITe7Q", "SuperappLogin", "SavePasswordOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:JTmqKub_HUu71q7bhY0EFQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:qxJUHJiIMUqP+RA3PSrLng", callContext.id) && model.widgets.get(idService.getId("PasswordResetForm")).validAttr)) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Bs081QrT7kSd16NkkLqhMA", callContext.id) && model.variables.isButtonEnabledVar)) {
// IsExecuting = true
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:nnJCQdXBi0amwrkgn8tooQ", callContext.id);
// IsExecuting = True
model.variables.isExecutingVar = true;
// Passwords match?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:m_vMqqQxvk+QhX9QsT3xsA", callContext.id) && (model.variables.newPasswordVar === model.variables.confirmPasswordVar))) {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:c_qJ3P0lU0WuZP3WTvrPKg", callContext.id);
// Execute Action: FinishResetPassword
model.flush();
return OS.SystemActions.finishResetPassword(model.variables.emailIn, model.variables.verificationCodeIn, model.variables.newPasswordVar, callContext).then(function (value) {
finishResetPasswordVar.value = value;
}).then(function () {
// Reset successful?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:BynUictbSUOVU3LxxLpk4g", callContext.id) && finishResetPasswordVar.value.finishResetPasswordResultOut.successAttr)) {
// Password changed successfully
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:GTASZLtQxE6_G09hvovQ9A", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Your password was changed successfully!", /*Success*/ 1);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:SLBFM+VmekC9Dn+478Tg0A", callContext.id);
// Execute Action: DoLogin
model.flush();
return SuperappLoginController.default.doLogin$Action(model.variables.emailIn, model.variables.newPasswordVar, callContext).then(function (value) {
doLoginVar.value = value;
}).then(function () {
// Success?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:x8lb27YkL0CbuX8VwVABgg", callContext.id) && doLoginVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:NaUCSFgxMEawO46AWSDmsA", callContext.id);
// Destination: /SuperappLogin/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(OS.BuiltinFunctions.getOwnerURLPath(), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:ubbF_UxVq0OIPZE+7BXOvQ", callContext.id);
// Destination: /SuperappLogin/Login
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/SuperappLogin/Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
} else {
// IsExecuting = false
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:JLgm_hEmBEqch+dc98CkEw", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
// Password Complexity Failed?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:rVQ6AKjNuUqTXd7EWfVIhQ", callContext.id) && finishResetPasswordVar.value.finishResetPasswordResultOut.finishResetPasswordFailureReasonAttr.passwordComplexityPolicyFailedAttr)) {
// Password invalid
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:UjX_UrYK9ESfROw9BxzfmA", callContext.id);
// Input_NewPassword.Valid = False
model.widgets.get(idService.getId("Input_NewPassword")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:UjX_UrYK9ESfROw9BxzfmA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_NewPassword.ValidationMessage = "The password does not meet the requirements."
model.widgets.get(idService.getId("Input_NewPassword")).validationMessageAttr = "The password does not meet the requirements.";
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:UjX_UrYK9ESfROw9BxzfmA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsButtonEnabled = False
model.variables.isButtonEnabledVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:T00rUusQTkGqYRo7R7FgwQ", callContext.id);
} else {
// Invalid Reset Token?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:zJEWLkm6Q0O7oq5vK9wHAA", callContext.id) && finishResetPasswordVar.value.finishResetPasswordResultOut.finishResetPasswordFailureReasonAttr.invalidVerificationCodeAttr)) {
// Invalid code
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:eFGzySFmXk+2x2fL+W2nuw", callContext.id);
// Input_Code.Valid = False
model.widgets.get(idService.getId("Input_Code")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:eFGzySFmXk+2x2fL+W2nuw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_Code.ValidationMessage = "The code is invalid."
model.widgets.get(idService.getId("Input_Code")).validationMessageAttr = "The code is invalid.";
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:T00rUusQTkGqYRo7R7FgwQ", callContext.id);
} else {
// Unkown Error
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:XFOI36qBGkSPXIbvgeqy0A", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("An unknown error occured. Please try again later.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:T00rUusQTkGqYRo7R7FgwQ", callContext.id);
}

}

}

});
});
} else {
// Password doesn't match
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:RPnEZ8mZQ0CoQF+HEzk5pQ", callContext.id);
// Input_ConfirmPassword.Valid = False
model.widgets.get(idService.getId("Input_ConfirmPassword")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:RPnEZ8mZQ0CoQF+HEzk5pQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_ConfirmPassword.ValidationMessage = "Passwords doesn't match."
model.widgets.get(idService.getId("Input_ConfirmPassword")).validationMessageAttr = "Passwords doesn\'t match.";
// IsExecuting = false
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:RodXD1ise0uuQvyOIo6QFA", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:T00rUusQTkGqYRo7R7FgwQ", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:T00rUusQTkGqYRo7R7FgwQ", callContext.id);
}

});
} else {
// Disable Button
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:WHD7y8uJIEeyb9sYvRLQKA", callContext.id);
// IsButtonEnabled = False
model.variables.isButtonEnabledVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:T00rUusQTkGqYRo7R7FgwQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:KpaNpR6pN0+nvTGey+Nk+w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:KpaNpR6pN0+nvTGey+Nk+w", callContext.id);
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

return this.__savePasswordOnClick$Action;
}set _savePasswordOnClick$Action(value) {this.__savePasswordOnClick$Action = value;
}

get _onToggleConfirmPasswordVisibility$Action() {if(!(this.hasOwnProperty("__onToggleConfirmPasswordVisibility$Action"))) {
this.__onToggleConfirmPasswordVisibility$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnToggleConfirmPasswordVisibility", function (span) {
if(span) {
span.setAttribute("code.function", "OnToggleConfirmPasswordVisibility");
span.setAttribute("outsystems.function.key", "c4373ca7-675a-4c72-882d-66f187857f32");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnToggleConfirmPasswordVisibility");
callContext = controller.callContext(callContext);
var showPasswordVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.showPasswordVar = showPasswordVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:pzw3xFpnckyILWbxh4V_Mg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.83K+VpRaUEmpIK5qgIJCuw/ClientActions.pzw3xFpnckyILWbxh4V_Mg:g1TGsN_F0u3QC6buUfIXlg", "SuperappLogin", "OnToggleConfirmPasswordVisibility", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:I_sHuvgntUSnTtRupelqmA", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:ai3l244PqEOYhpGI8jzPoA", callContext.id);
// IsConfirmPasswordVisible = notIsConfirmPasswordVisible
model.variables.isConfirmPasswordVisibleVar = !(model.variables.isConfirmPasswordVisibleVar);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:w1eJhseTpkSTY+fIxriZEA", callContext.id);
// Execute Action: ShowPassword
showPasswordVar.value = OutSystemsUIController.default.showPassword$Action(idService.getId("Input_ConfirmPassword"), callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:X7GHcTbn502z+DrHF2sWAQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:pzw3xFpnckyILWbxh4V_Mg", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onToggleConfirmPasswordVisibility$Action;
}set _onToggleConfirmPasswordVisibility$Action(value) {this.__onToggleConfirmPasswordVisibility$Action = value;
}

get _onToggleNewPasswordVisibility$Action() {if(!(this.hasOwnProperty("__onToggleNewPasswordVisibility$Action"))) {
this.__onToggleNewPasswordVisibility$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnToggleNewPasswordVisibility", function (span) {
if(span) {
span.setAttribute("code.function", "OnToggleNewPasswordVisibility");
span.setAttribute("outsystems.function.key", "d630cfc4-8d55-4e2a-9987-c445a885235b");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnToggleNewPasswordVisibility");
callContext = controller.callContext(callContext);
var showPasswordVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.showPasswordVar = showPasswordVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:xM8w1lWNKk6Zh8RFqIUjWw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.83K+VpRaUEmpIK5qgIJCuw/ClientActions.xM8w1lWNKk6Zh8RFqIUjWw:OOGq9esbTRWn4dOMnHt25w", "SuperappLogin", "OnToggleNewPasswordVisibility", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:AXP830fdNkmZ+Q_QSql2yg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:GFMWOTN9XEu1yAgfRZFBvQ", callContext.id);
// IsPasswordVisible = notIsPasswordVisible
model.variables.isPasswordVisibleVar = !(model.variables.isPasswordVisibleVar);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:dtG7tbRqzEW_AhH7Cnf5yQ", callContext.id);
// Execute Action: ShowPassword
showPasswordVar.value = OutSystemsUIController.default.showPassword$Action(idService.getId("Input_NewPassword"), callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:M4tW5R7tIU2JULkmdja4xQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:xM8w1lWNKk6Zh8RFqIUjWw", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onToggleNewPasswordVisibility$Action;
}set _onToggleNewPasswordVisibility$Action(value) {this.__onToggleNewPasswordVisibility$Action = value;
}

get _input_CodeOnChange$Action() {if(!(this.hasOwnProperty("__input_CodeOnChange$Action"))) {
this.__input_CodeOnChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("Input_CodeOnChange", function (span) {
if(span) {
span.setAttribute("code.function", "Input_CodeOnChange");
span.setAttribute("outsystems.function.key", "dd490f39-8805-40ef-b123-ee8d503550bb");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("Input_CodeOnChange");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:OQ9J3QWI70CxI+6NUDVQuw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.83K+VpRaUEmpIK5qgIJCuw/ClientActions.OQ9J3QWI70CxI+6NUDVQuw:SpvdqENjNwoaXSSCfz31ww", "SuperappLogin", "Input_CodeOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:RrsUHO0deUiGoN6yatAIaQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:6xT6Ue0_YUezJ0NBAVbNoQ", callContext.id);
// Execute Action: SetIsButtonEnabled
controller._setIsButtonEnabled$Action(callContext);
// IsEmpty
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:oCeERlCxr0qKhdzktDNgyw", callContext.id) && (model.variables.verificationCodeIn === ""))) {
// ClearErrors
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:t74xkUQAE0OcK04pYINx3g", callContext.id);
// Input_Code.Valid = True
model.widgets.get(idService.getId("Input_Code")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:t74xkUQAE0OcK04pYINx3g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_Code.ValidationMessage = ""
model.widgets.get(idService.getId("Input_Code")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:XnAVX1e5uk2MZlBflsr1UQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:XnAVX1e5uk2MZlBflsr1UQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:OQ9J3QWI70CxI+6NUDVQuw", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__input_CodeOnChange$Action;
}set _input_CodeOnChange$Action(value) {this.__input_CodeOnChange$Action = value;
}

get _input_ConfirmPasswordOnChange$Action() {if(!(this.hasOwnProperty("__input_ConfirmPasswordOnChange$Action"))) {
this.__input_ConfirmPasswordOnChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("Input_ConfirmPasswordOnChange", function (span) {
if(span) {
span.setAttribute("code.function", "Input_ConfirmPasswordOnChange");
span.setAttribute("outsystems.function.key", "f3fbb816-1361-4f01-915f-f92bdbd5d93b");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("Input_ConfirmPasswordOnChange");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:Frj782ETAU+RX_kr29XZOw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.83K+VpRaUEmpIK5qgIJCuw/ClientActions.Frj782ETAU+RX_kr29XZOw:MqsygQ9FagzFf+O1ZDJFvg", "SuperappLogin", "Input_ConfirmPasswordOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:KJip+1SjgEudNU52SIP79w", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:0rj3FhkhvEeQt3CPeSjYmw", callContext.id);
// Execute Action: SetIsButtonEnabled
controller._setIsButtonEnabled$Action(callContext);
// IsEmpty
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:djKdpvpLcUSvKlz9kVTuSQ", callContext.id) && (model.variables.confirmPasswordVar === ""))) {
// ClearErrors
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:ZP4AT3Ft_kq0sBxBfyW+iQ", callContext.id);
// Input_ConfirmPassword.Valid = True
model.widgets.get(idService.getId("Input_ConfirmPassword")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:ZP4AT3Ft_kq0sBxBfyW+iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_ConfirmPassword.ValidationMessage = ""
model.widgets.get(idService.getId("Input_ConfirmPassword")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Eu73XCNdyEKvPp9nGaxSwg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Eu73XCNdyEKvPp9nGaxSwg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:Frj782ETAU+RX_kr29XZOw", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__input_ConfirmPasswordOnChange$Action;
}set _input_ConfirmPasswordOnChange$Action(value) {this.__input_ConfirmPasswordOnChange$Action = value;
}


passwordPolicyCompliant$Action(isValidIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "PasswordPolicyCompliant");
span.setAttribute("outsystems.function.key", "08c86315-f230-4f27-9dbb-f2b5169696f9");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._passwordPolicyCompliant$Action, callContext, isValidIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

setIsButtonEnabled$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SetIsButtonEnabled__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SetIsButtonEnabled");
span.setAttribute("outsystems.function.key", "7aa08af1-d0f0-4bbe-8a02-42f71ea4c4be");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._setIsButtonEnabled$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

savePasswordOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SavePasswordOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SavePasswordOnClick");
span.setAttribute("outsystems.function.key", "a58d962a-a91e-4f37-a7bd-319ecbe364fb");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._savePasswordOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onToggleConfirmPasswordVisibility$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnToggleConfirmPasswordVisibility__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnToggleConfirmPasswordVisibility");
span.setAttribute("outsystems.function.key", "c4373ca7-675a-4c72-882d-66f187857f32");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onToggleConfirmPasswordVisibility$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onToggleNewPasswordVisibility$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnToggleNewPasswordVisibility__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnToggleNewPasswordVisibility");
span.setAttribute("outsystems.function.key", "d630cfc4-8d55-4e2a-9987-c445a885235b");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onToggleNewPasswordVisibility$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

input_CodeOnChange$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Input_CodeOnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Input_CodeOnChange");
span.setAttribute("outsystems.function.key", "dd490f39-8805-40ef-b123-ee8d503550bb");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._input_CodeOnChange$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

input_ConfirmPasswordOnChange$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Input_ConfirmPasswordOnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Input_ConfirmPasswordOnChange");
span.setAttribute("outsystems.function.key", "f3fbb816-1361-4f01-915f-f92bdbd5d93b");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._input_ConfirmPasswordOnChange$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:nOLMJqktSVokKnWDq+B1LQ", "SuperappLogin", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:83K+VpRaUEmpIK5qgIJCuw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.83K+VpRaUEmpIK5qgIJCuw:ggw7jKFjWf3KKfUP3RAk0w", "SuperappLogin", "RecoverPasswordReset", "NRNodes.WebScreen", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:83K+VpRaUEmpIK5qgIJCuw", callContext.id);
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

// Client Actions - Variables
Controller.registerVariableGroupType("SuperappLogin.Common.RecoverPasswordReset.PasswordPolicyCompliant$vars", [{
name: "IsValid",
attrName: "isValidInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, SuperappLoginLanguageResources);
});


define("SuperappLogin.Common.RecoverPasswordReset.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"snPQMDWZ4kq0n1qZdQLf4g": {
getter: function (varBag, idService) {
return varBag.vars.value.isValidInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SLBFM+VmekC9Dn+478Tg0A": {
getter: function (varBag, idService) {
return varBag.doLoginVar.value;
}
},
"c_qJ3P0lU0WuZP3WTvrPKg": {
getter: function (varBag, idService) {
return varBag.finishResetPasswordVar.value;
}
},
"w1eJhseTpkSTY+fIxriZEA": {
getter: function (varBag, idService) {
return varBag.showPasswordVar.value;
}
},
"dtG7tbRqzEW_AhH7Cnf5yQ": {
getter: function (varBag, idService) {
return varBag.showPasswordVar.value;
}
},
"cLhjF4nmPkaWwhB9e7VHCA": {
getter: function (varBag, idService) {
return varBag.model.variables.newPasswordVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lPiz7jqNdkWiF4awgI4UQg": {
getter: function (varBag, idService) {
return varBag.model.variables.confirmPasswordVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hcK4141rZkeWALT5RQcI4Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isPasswordVisibleVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nIFxKWQ2f0mqA0Zehb_QbA": {
getter: function (varBag, idService) {
return varBag.model.variables.isConfirmPasswordVisibleVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"dTjTR391jkOkpSJqwcjv_A": {
getter: function (varBag, idService) {
return varBag.model.variables.isButtonEnabledVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"WtKxT5ItYU60a5EjvliJBg": {
getter: function (varBag, idService) {
return varBag.model.variables.isExecutingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wi+SSxPMkE20LhsdaKVRdA": {
getter: function (varBag, idService) {
return varBag.model.variables.isNewPasswordCompliantVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"lAxC6r+O6kKJIzLL6X0IXw": {
getter: function (varBag, idService) {
return varBag.model.variables.emailIn;
},
dataType: OS.DataTypes.DataTypes.Email
},
"jHEU9FW+pUG7_8SyILGRnA": {
getter: function (varBag, idService) {
return varBag.model.variables.verificationCodeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9zIV5kKSnkqDZkp9Hbuq+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"veTLqef3vEuKyw9QN9FCjQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PasswordResetForm"));
})(varBag.model, idService);
}
},
"5Plv6NNztUaMeLZ+kb70ng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"HARSM2xaRE24vKhZpTqzvA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"RjCOmBLZpkK5bx_yyHbgsw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Email"));
})(varBag.model, idService);
}
},
"R7RlGRHJW0axfKK+HriARA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"ytFu_8JBakiB_FUreicrZg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"uQNpR_emp063zXCzACNPNw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Code"));
})(varBag.model, idService);
}
},
"JTV2RzA3ckmGsN5M1FtQAg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"IgxNjuM4T0CQ2ghGvNPn8w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"cVsgAZ2Qr0iQ4O8K03UoLg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"JTBGrAx3AE2ChX+i2o7gNw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PasswordVisibile"));
})(varBag.model, idService);
}
},
"CqyV4kIvF06_zFHf1CEV3w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"pJgeZZgzBU+J5X+9DEHXCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_NewPassword"));
})(varBag.model, idService);
}
},
"B7n6wyWYVUuQcqUti+wAJw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"Um2tEaIYlkWtrmCF+YpqWA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"Rd26ODoY2kuTzh8qwo0DIg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"gXi6JwON6EOwvmtiwDAmXQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ConfirmPasswordVisible"));
})(varBag.model, idService);
}
},
"lrPuMMP2AUOBPoPK9sJfwA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"uDtfEed69UenS8V4vZbyGg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_ConfirmPassword"));
})(varBag.model, idService);
}
},
"lc+VUvy_b0iK7fp6aHB+Gg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

