define("SuperappLogin.Common.ChangePassword.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "OutSystemsUI.model", "OutSystemsUI.controller", "System_.model", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "System_.model$ChangePasswordResultRec", "SuperappLogin.referencesHealth$System_", "SuperappLogin.model$RC_ced013358a82a813f1d9a5108f17ce79", "SuperappLogin.model$RL_8430333e95ceffc00def96d8abb01f75"], function (OutSystems, SuperappLoginModel, OutSystemsUIModel, OutSystemsUIController, System_Model) {
var OS = OutSystems.Internal;
{class GetUserDetailAggrRecInner extends 
OS.Model.AggregateRecord {
}

GetUserDetailAggrRecInner.RecordListType = SuperappLoginModel.RL_8430333e95ceffc00def96d8abb01f75;
var GetUserDetailAggrRec = GetUserDetailAggrRecInner;
GetUserDetailAggrRec.init();
}


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("OldPassword", "oldPasswordVar", "OldPassword", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
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
this.attr("GetUserDetail", "getUserDetailAggr", "getUserDetailAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetUserDetailAggrRec());
}, true, GetUserDetailAggrRec)
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
ChangePasswordForm: OS.Model.ValidationWidgetRecord,
Input_OldPassword: OS.Model.ValidationWidgetRecord,
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
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("SuperappLogin.Common.ChangePassword.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "System_.model", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.ChangePassword.mvc$model", "SuperappLogin.Common.ChangePassword.mvc$controller", "SuperappLogin.clientVariables", "SuperappLogin.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "SuperappLogin.Common.Menu.mvc$view", "SuperappLogin.Common.MenuIcon.mvc$view", "OutSystemsUI.Utilities.MarginContainer.mvc$view", "OutSystemsUI.Adaptive.Columns2.mvc$view", "OutSystemsUI.Interaction.AnimatedLabel.mvc$view", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "OutSystemsUI.Utilities.PasswordPolicy.mvc$view", "OutSystemsUI.Utilities.ButtonLoading.mvc$view", "SuperappLogin.Common.BottomBar.mvc$view", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "System_.model$ChangePasswordResultRec", "SuperappLogin.referencesHealth$System_", "SuperappLogin.model$RC_ced013358a82a813f1d9a5108f17ce79", "SuperappLogin.model$RL_8430333e95ceffc00def96d8abb01f75"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIModel, OutSystemsUIController, System_Model, React, OSView, SuperappLogin_Common_ChangePassword_mvc_model, SuperappLogin_Common_ChangePassword_mvc_controller, SuperappLoginClientVariables, SuperappLogin_Common_Layout_mvc_view, OSWidgets, SuperappLogin_Common_Menu_mvc_view, SuperappLogin_Common_MenuIcon_mvc_view, OutSystemsUI_Utilities_MarginContainer_mvc_view, OutSystemsUI_Adaptive_Columns2_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, OutSystemsUI_Utilities_PasswordPolicy_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view, SuperappLogin_Common_BottomBar_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "Common.ChangePassword"; }

        static getAttributes() { return {
codeFunction: "ChangePassword",
functionKey: "82f878f6-3ca2-42dd-991e-10dd860da0b1",
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
            return [SuperappLogin_Common_Layout_mvc_view, SuperappLogin_Common_Menu_mvc_view, SuperappLogin_Common_MenuIcon_mvc_view, OutSystemsUI_Utilities_MarginContainer_mvc_view, OutSystemsUI_Adaptive_Columns2_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, OutSystemsUI_Utilities_PasswordPolicy_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view, SuperappLogin_Common_BottomBar_mvc_view];
        }

        get modelFactory() {
            return SuperappLogin_Common_ChangePassword_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_ChangePassword_mvc_controller;
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
            

            return "Change password";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(SuperappLogin_Common_Layout_mvc_view, {
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
navigation: new PlaceholderContent(function () {
return [React.createElement(SuperappLogin_Common_Menu_mvc_view, {
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
headerLeft: new PlaceholderContent(function () {
return [React.createElement(SuperappLogin_Common_MenuIcon_mvc_view, {
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
title: new PlaceholderContent(function () {
return ["Change your password"];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_Utilities_MarginContainer_mvc_view, {
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
marginContainer: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_Adaptive_Columns2_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
PhoneBehavior: SuperappLoginModel.staticEntities.breakColumns.all
},
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
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
column1: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
style: "form card",
_idProps: {
service: idService,
name: "ChangePasswordForm"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "login-inputs",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
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
validationParentId: idService.getId("ChangePasswordForm")
},
_idProps: {
service: idService,
uuid: "8",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_OldPassword",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Current password")];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("ChangePasswordForm")
},
enabled: true,
extendedProperties: {
autoComplete: "current-password",
tabIndex: "1"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/ChangePassword/Input_OldPassword OnChange");
controller.input_OldPasswordOnChange$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.oldPasswordVar, function (value) {
model.variables.oldPasswordVar = value;
}),
_idProps: {
service: idService,
name: "Input_OldPassword"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.oldPasswordVar)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "11"
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
validationParentId: idService.getId("ChangePasswordForm")
},
_idProps: {
service: idService,
uuid: "12",
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
targetWidget: "Input_NewPassword",
_idProps: {
service: idService,
uuid: "13"
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
ExtendedClass: "padding-left-none",
AlignIconRight: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("ChangePasswordForm")
},
_idProps: {
service: idService,
uuid: "14",
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/ChangePassword/Link OnClick");
controller.onToggleNewPasswordVisibility$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
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
uuid: "16"
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
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}))];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("ChangePasswordForm")
},
enabled: true,
extendedProperties: {
autoComplete: "new-password",
tabIndex: "2",
style: "padding-bottom: 0px; padding-left: 0px; padding-right: var(--space-xl); padding-top: 0px;"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Password*/ 1,
mandatory: true,
maxLength: 256,
style: "form-control login-password padding-left-none margin-bottom-m",
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
validationParentId: idService.getId("ChangePasswordForm")
},
_idProps: {
service: idService,
uuid: "19",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "20"
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
validationParentId: idService.getId("ChangePasswordForm")
},
_idProps: {
service: idService,
uuid: "21",
alias: "10"
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
uuid: "22"
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
ExtendedClass: "padding-left-none",
AlignIconRight: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("ChangePasswordForm")
},
_idProps: {
service: idService,
uuid: "23",
alias: "11"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/ChangePassword/Link OnClick");
controller.onToggleConfirmPasswordVisibility$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "24"
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
uuid: "25"
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
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}))];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("ChangePasswordForm")
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/ChangePassword/Input_ConfirmPassword OnChange");
controller.input_ConfirmPasswordOnChange$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "form-control login-password padding-left-none",
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
_dependencies: [asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "28"
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
validationParentId: idService.getId("ChangePasswordForm")
},
_idProps: {
service: idService,
uuid: "29",
alias: "12"
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
_this.validateWidget(idService.getId("ChangePasswordForm"));
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/ChangePassword/Button OnClick");
return controller.setNewPasswordOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});

;
},
style: "btn btn-primary margin-top-l",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-btn-loading__spinner-animation",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Set new password")];
})
},
_dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar)]
}))))];
}),
column2: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar), asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.newPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar), asPrimitiveValue(model.variables.oldPasswordVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar), asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.newPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar), asPrimitiveValue(model.variables.oldPasswordVar)]
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(SuperappLogin_Common_BottomBar_mvc_view, {
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
uuid: "32",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar), asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.newPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar), asPrimitiveValue(model.variables.oldPasswordVar)]
}));
        }
    }

    return View;
});
define("SuperappLogin.Common.ChangePassword.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "System_.model", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.ChangePassword.mvc$debugger", "SuperappLogin.Common.controller", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "System_.model$ChangePasswordResultRec", "SuperappLogin.referencesHealth$System_", "SuperappLogin.model$RC_ced013358a82a813f1d9a5108f17ce79", "SuperappLogin.model$RL_8430333e95ceffc00def96d8abb01f75"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIModel, OutSystemsUIController, System_Model, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_ChangePassword_mvc_Debugger, SuperappLogin_CommonController) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getUserDetail$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getUserDetail$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}

// Server Actions - Methods

// Aggregates and Data Actions
get getUserDetail$AggrRefresh() {if(!(this.hasOwnProperty("_getUserDetail$AggrRefresh"))) {
this._getUserDetail$AggrRefresh = function () {
var innerBody = function (maxRecords, startIndex, callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:L16pHvTBZkSkecNCYJuxSA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.9nj4gqI83UKZHhDdhg2gsQ/ScreenDataSets.L16pHvTBZkSkecNCYJuxSA:zS7qMW8LPqWWhsO81sCTSg", "SuperappLogin", "GetUserDetail", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Common/ChangePassword/GetUserDetail");
return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetUserDetail", "screenservices/SuperappLogin/Common/ChangePassword/ScreenDataSetGetUserDetail", "2+utS1kxdqqT9pRkycspIw", maxRecords, startIndex, function (b) {
model.variables.getUserDetailAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getUserDetailAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getUserDetailAggr.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:L16pHvTBZkSkecNCYJuxSA", callContext.id);
controller.popDebuggerContext(callContext);

});
}.bind(this);
return OS.Logger.startActiveSpan("GetUserDetail", function (span) {
if(span) {
span.setAttribute("code.function", "GetUserDetail");
span.setAttribute("outsystems.function.key", "1ea95e2f-c1f4-4466-a479-c342609bb148");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL");
}

return OS.Flow.tryFinally(function () {
return innerBody();
}, function () {
if(span) {
span.end();
}

});
}, 0);

};
}

return this._getUserDetail$AggrRefresh;
}set getUserDetail$AggrRefresh(value) {this._getUserDetail$AggrRefresh = value;
}


get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = ["getUserDetail$AggrRefresh"];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
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
span.setAttribute("outsystems.function.key", "200e1788-63e4-4cb3-8a3b-4bcc1fe0ab63");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("SetIsButtonEnabled");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:iBcOIORjs0yKO0vMH+CrYw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.9nj4gqI83UKZHhDdhg2gsQ/ClientActions.iBcOIORjs0yKO0vMH+CrYw:BHiem_tYdL6jEd2Whx+NPg", "SuperappLogin", "SetIsButtonEnabled", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:hdyPheZpMUOCUtc2+39T5A", callContext.id);
// Is OldPassword empty?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:OTYZ6dqeZ0SlxuKN1dxxgA", callContext.id) && (model.variables.oldPasswordVar === ""))) {
// DisableButton
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:ux6O3FV_aEGTBED2JW0aDw", callContext.id);
// IsButtonEnabled = False
model.variables.isButtonEnabledVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:U_cyDf10u0+ixugFbZWKWw", callContext.id);
} else {
// Is NewPassword empty?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:M9W3ckGbOkeRLyDEcjUF8w", callContext.id) && (model.variables.newPasswordVar === ""))) {
// DisableButton
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:jDMnF07rFUSBmIPCXuc+LA", callContext.id);
// IsButtonEnabled = False
model.variables.isButtonEnabledVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:U_cyDf10u0+ixugFbZWKWw", callContext.id);
} else {
// Is NewPassword compliant?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:gxjAH4xodkqaFJ_VZ29Yew", callContext.id) && model.variables.isNewPasswordCompliantVar)) {
// Is ConfirmPassword empty?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:LNRv7LPZB0icrbf_CHLloA", callContext.id) && (model.variables.confirmPasswordVar === ""))) {
// DisableButton
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:aNMSMsU57ESuZFS2Soan_g", callContext.id);
// IsButtonEnabled = False
model.variables.isButtonEnabledVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:U_cyDf10u0+ixugFbZWKWw", callContext.id);
} else {
// EnableButton
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:TbPmfBo2UU+F4k3LLqJPLg", callContext.id);
// IsButtonEnabled = True
model.variables.isButtonEnabledVar = true;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:U_cyDf10u0+ixugFbZWKWw", callContext.id);
}

} else {
// DisableButton
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:6aDNHFKGQUe+FVviYRdhsw", callContext.id);
// IsButtonEnabled = False
model.variables.isButtonEnabledVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:U_cyDf10u0+ixugFbZWKWw", callContext.id);
}

}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:iBcOIORjs0yKO0vMH+CrYw", callContext.id);
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

get _input_OldPasswordOnChange$Action() {if(!(this.hasOwnProperty("__input_OldPasswordOnChange$Action"))) {
this.__input_OldPasswordOnChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("Input_OldPasswordOnChange", function (span) {
if(span) {
span.setAttribute("code.function", "Input_OldPasswordOnChange");
span.setAttribute("outsystems.function.key", "467bc525-7db6-4f94-b7cf-5348eb216350");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("Input_OldPasswordOnChange");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:JcV7RrZ9lE+3z1NI6yFjUA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.9nj4gqI83UKZHhDdhg2gsQ/ClientActions.JcV7RrZ9lE+3z1NI6yFjUA:5X82chCJWZCpKe2acOw44Q", "SuperappLogin", "Input_OldPasswordOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:JftihUojlUCAl33OgBap4g", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:aKHrMZlNuUW0C3iIhzfRMg", callContext.id);
// Execute Action: SetIsButtonEnabled
controller._setIsButtonEnabled$Action(callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:nc7g7j_dIUC7r1Nxt0+LEA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:JcV7RrZ9lE+3z1NI6yFjUA", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__input_OldPasswordOnChange$Action;
}set _input_OldPasswordOnChange$Action(value) {this.__input_OldPasswordOnChange$Action = value;
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
span.setAttribute("outsystems.function.key", "4e8b7350-eaee-4508-93cb-1b40feb2358f");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnToggleConfirmPasswordVisibility");
callContext = controller.callContext(callContext);
var showPasswordVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.showPasswordVar = showPasswordVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:UHOLTu7qCEWTyxtA_rI1jw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.9nj4gqI83UKZHhDdhg2gsQ/ClientActions.UHOLTu7qCEWTyxtA_rI1jw:DBafUQ0USnfS0ZInWZPu4Q", "SuperappLogin", "OnToggleConfirmPasswordVisibility", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:nnxFWGPKX0CnA7wLIdIldg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:si5jPK_WUEedalhfCW9UcA", callContext.id);
// IsConfirmPasswordVisible = notIsConfirmPasswordVisible
model.variables.isConfirmPasswordVisibleVar = !(model.variables.isConfirmPasswordVisibleVar);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:PgZ7xwEmmUqGHtNXq8gy8A", callContext.id);
// Execute Action: ShowPassword
showPasswordVar.value = OutSystemsUIController.default.showPassword$Action(idService.getId("Input_ConfirmPassword"), callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:gCXr04GO_kmexKwMNzSHAQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:UHOLTu7qCEWTyxtA_rI1jw", callContext.id);
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
span.setAttribute("outsystems.function.key", "69ad858b-295e-4878-ab61-4e25646a3ab1");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnToggleNewPasswordVisibility");
callContext = controller.callContext(callContext);
var showPasswordVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.showPasswordVar = showPasswordVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:i4WtaV4peEirYU4lZGo6sQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.9nj4gqI83UKZHhDdhg2gsQ/ClientActions.i4WtaV4peEirYU4lZGo6sQ:E+9n1znwMqrBt37BpEuS8w", "SuperappLogin", "OnToggleNewPasswordVisibility", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:X5EX_FEVwkizCv+qHenGAA", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:OBJAS2g_0U+oJ8CUq2kXuA", callContext.id);
// IsPasswordVisible = notIsPasswordVisible
model.variables.isPasswordVisibleVar = !(model.variables.isPasswordVisibleVar);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:PRFVymErIEa3XOvvRjgmbQ", callContext.id);
// Execute Action: ShowPassword
showPasswordVar.value = OutSystemsUIController.default.showPassword$Action(idService.getId("Input_NewPassword"), callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:OlKiuyxmyUGSrzugHqed4A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:i4WtaV4peEirYU4lZGo6sQ", callContext.id);
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
span.setAttribute("outsystems.function.key", "6e7af6fd-1b6d-4eab-a0a0-0964764dd8c8");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("PasswordPolicyCompliant");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.Common.ChangePassword.PasswordPolicyCompliant$vars"))());
vars.value.isValidInLocal = isValidIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:_fZ6bm0bq06goAlkdk3YyA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.9nj4gqI83UKZHhDdhg2gsQ/ClientActions._fZ6bm0bq06goAlkdk3YyA:9oPZ9qDQRVq6ydrG3SLcDg", "SuperappLogin", "PasswordPolicyCompliant", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:7SUbLFzaeU+5SxDX55Zs7g", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:tAzUDm5qkkymOQlopsUcXQ", callContext.id);
// IsNewPasswordCompliant = IsValid
model.variables.isNewPasswordCompliantVar = vars.value.isValidInLocal;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:FHZx5fy9mk2z3c7NkGd8_Q", callContext.id);
// Execute Action: SetIsButtonEnabled
controller._setIsButtonEnabled$Action(callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:yf6DsjzszkycM3c0I3nW8g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:_fZ6bm0bq06goAlkdk3YyA", callContext.id);
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
span.setAttribute("outsystems.function.key", "af728690-9a22-43c2-ac58-9bd3cfc0b30e");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("Input_ConfirmPasswordOnChange");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:kIZyryKawkOsWJvTz8CzDg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.9nj4gqI83UKZHhDdhg2gsQ/ClientActions.kIZyryKawkOsWJvTz8CzDg:zkH_uci4LiUTbCmRk6N2Lg", "SuperappLogin", "Input_ConfirmPasswordOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:0YbQxmnNn0+6mTdDOzeH8g", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:xBRqUN44ikeAUTWHM8FC8g", callContext.id);
// Execute Action: SetIsButtonEnabled
controller._setIsButtonEnabled$Action(callContext);
// IsEmpty
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:HDVxuUkWi0KbzRtTDGELKg", callContext.id) && (model.variables.confirmPasswordVar === ""))) {
// ClearErrors
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:9i7p79GQ0EyKK2rajVuKYw", callContext.id);
// Input_ConfirmPassword.Valid = True
model.widgets.get(idService.getId("Input_ConfirmPassword")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:9i7p79GQ0EyKK2rajVuKYw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_ConfirmPassword.ValidationMessage = ""
model.widgets.get(idService.getId("Input_ConfirmPassword")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:+TpeGm5NzE2kqu+IKlyGuw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:+TpeGm5NzE2kqu+IKlyGuw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:kIZyryKawkOsWJvTz8CzDg", callContext.id);
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

get _setNewPasswordOnClick$Action() {if(!(this.hasOwnProperty("__setNewPasswordOnClick$Action"))) {
this.__setNewPasswordOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("SetNewPasswordOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "SetNewPasswordOnClick");
span.setAttribute("outsystems.function.key", "e70f6ba2-5e4c-4097-a254-4d9e1676ced4");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("SetNewPasswordOnClick");
callContext = controller.callContext(callContext);
var changePasswordVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.changePasswordVar = changePasswordVar;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:omsP50xel0CiVE2eFnbO1A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.9nj4gqI83UKZHhDdhg2gsQ/ClientActions.omsP50xel0CiVE2eFnbO1A:QVBhudP1FlSlxC3N21tIrw", "SuperappLogin", "SetNewPasswordOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:QJdN5CNbnU2JPJH_ZpaaMQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:kwypxcMpHk+V2HmjlfPL9w", callContext.id) && model.widgets.get(idService.getId("ChangePasswordForm")).validAttr)) {
// IsExecuting = true
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:x1zR6WgsOEOnZPTysJmHRg", callContext.id);
// IsExecuting = True
model.variables.isExecutingVar = true;
// Passwords matches?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:oIRDoxz7ekCy7sN5rQp+bA", callContext.id) && (model.variables.newPasswordVar === model.variables.confirmPasswordVar))) {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:yHX7fGNotE2HT0afEGBZVA", callContext.id);
// Execute Action: ChangePassword
model.flush();
return OS.SystemActions.changePassword(model.variables.getUserDetailAggr.listOut.getCurrent(callContext.iterationContext).userAttr.emailAttr, model.variables.newPasswordVar, model.variables.oldPasswordVar, callContext).then(function (value) {
changePasswordVar.value = value;
}).then(function () {
// Success?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Ez_k66hBqEO33ymWhGyPHQ", callContext.id) && changePasswordVar.value.changePasswordResultOut.successAttr)) {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:aeRqioGtiECRnAsc3cEQ1Q", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Password successfully changed!", /*Success*/ 1);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:vsAsyPqUM0yIvaTYXeQ5cQ", callContext.id);
// Destination: /SuperappLogin/UserProfile
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/SuperappLogin/UserProfile", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// IsExecuting = false
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:HxIamSjnW0SxSYfc2t0g7A", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
// Invalid Credentials?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:eTs9wZXDGEufLjDwb0lQtg", callContext.id) && changePasswordVar.value.changePasswordResultOut.changePasswordFailureReasonAttr.invalidCredentialsAttr)) {
// Password invalid
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:gecxIkX02Eak2sxM4yfEyQ", callContext.id);
// Input_OldPassword.Valid = False
model.widgets.get(idService.getId("Input_OldPassword")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:gecxIkX02Eak2sxM4yfEyQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_OldPassword.ValidationMessage = "Incorrect password."
model.widgets.get(idService.getId("Input_OldPassword")).validationMessageAttr = "Incorrect password.";
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:mOZ+Dsm2JEiwa8vUoA0Ncw", callContext.id);
} else {
// Password Complexity Failed?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:zuHEaEzackiJ9+AcdnwvSQ", callContext.id) && changePasswordVar.value.changePasswordResultOut.changePasswordFailureReasonAttr.passwordComplexityPolicyFailedAttr)) {
// Complexity Failed
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:4485GcM090y5DYAuKi6GPg", callContext.id);
// Input_NewPassword.Valid = False
model.widgets.get(idService.getId("Input_NewPassword")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:4485GcM090y5DYAuKi6GPg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_NewPassword.ValidationMessage = "Password doesn't meet the requirements."
model.widgets.get(idService.getId("Input_NewPassword")).validationMessageAttr = "Password doesn\'t meet the requirements.";
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:4485GcM090y5DYAuKi6GPg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsButtonEnabled = False
model.variables.isButtonEnabledVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:mOZ+Dsm2JEiwa8vUoA0Ncw", callContext.id);
} else {
// Number of Attempts Failed?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:8YazNFs4SESAHC_CINkL4A", callContext.id) && changePasswordVar.value.changePasswordResultOut.changePasswordFailureReasonAttr.tooManyFailedAttemptsAttr)) {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:YPbgHQrKtUebZ1Y5oOsP6Q", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Too many failed attempts, please try again after some time.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:mOZ+Dsm2JEiwa8vUoA0Ncw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:7UQYDNeaOECYu5lWfYn7jw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Password change failed.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:mOZ+Dsm2JEiwa8vUoA0Ncw", callContext.id);
}

}

}

}

});
} else {
// Password doesn't match
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:hFKcmYb2nUamz+zYiQ9SuQ", callContext.id);
// Input_ConfirmPassword.Valid = False
model.widgets.get(idService.getId("Input_ConfirmPassword")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:hFKcmYb2nUamz+zYiQ9SuQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_ConfirmPassword.ValidationMessage = "Password and Confirm password don’t match."
model.widgets.get(idService.getId("Input_ConfirmPassword")).validationMessageAttr = "Password and Confirm password don’t match.";
// IsExecuting = false
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:NSg3+3m8SEOWox6jccCNwQ", callContext.id);
// IsExecuting = False
model.variables.isExecutingVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:mOZ+Dsm2JEiwa8vUoA0Ncw", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:mOZ+Dsm2JEiwa8vUoA0Ncw", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:omsP50xel0CiVE2eFnbO1A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:omsP50xel0CiVE2eFnbO1A", callContext.id);
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

return this.__setNewPasswordOnClick$Action;
}set _setNewPasswordOnClick$Action(value) {this.__setNewPasswordOnClick$Action = value;
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
span.setAttribute("outsystems.function.key", "fdf1840d-744b-436d-b206-11f498f04352");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:DYTx_Ut0bUOyBhH0mPBDUg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.9nj4gqI83UKZHhDdhg2gsQ/ClientActions.DYTx_Ut0bUOyBhH0mPBDUg:Lv+jFyPuNWFoWdRV+zdpPQ", "SuperappLogin", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:vY8_6cQ01UySdLT1L0RIBQ", callContext.id);
// IsExternalUser
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:GQ9mQkTu+UaN8GbSv1m0lA", callContext.id) && OutSystemsDebugger.handleFunctionCall(function () {
return OS.SystemActions.isExternalUser(callContext).isExternalUserOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:MYEixVwv7EC76w_AdxOnyA", callContext.id);
// Destination: /SuperappLogin/InvalidPermissions
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/SuperappLogin/InvalidPermissions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:VujOhafZZ0iUi7Aw8hVXXA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:DYTx_Ut0bUOyBhH0mPBDUg", callContext.id);
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


setIsButtonEnabled$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SetIsButtonEnabled__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SetIsButtonEnabled");
span.setAttribute("outsystems.function.key", "200e1788-63e4-4cb3-8a3b-4bcc1fe0ab63");
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

input_OldPasswordOnChange$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Input_OldPasswordOnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Input_OldPasswordOnChange");
span.setAttribute("outsystems.function.key", "467bc525-7db6-4f94-b7cf-5348eb216350");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._input_OldPasswordOnChange$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onToggleConfirmPasswordVisibility$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnToggleConfirmPasswordVisibility__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnToggleConfirmPasswordVisibility");
span.setAttribute("outsystems.function.key", "4e8b7350-eaee-4508-93cb-1b40feb2358f");
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
span.setAttribute("outsystems.function.key", "69ad858b-295e-4878-ab61-4e25646a3ab1");
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

passwordPolicyCompliant$Action(isValidIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "PasswordPolicyCompliant");
span.setAttribute("outsystems.function.key", "6e7af6fd-1b6d-4eab-a0a0-0964764dd8c8");
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

input_ConfirmPasswordOnChange$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Input_ConfirmPasswordOnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Input_ConfirmPasswordOnChange");
span.setAttribute("outsystems.function.key", "af728690-9a22-43c2-ac58-9bd3cfc0b30e");
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

setNewPasswordOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SetNewPasswordOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SetNewPasswordOnClick");
span.setAttribute("outsystems.function.key", "e70f6ba2-5e4c-4097-a254-4d9e1676ced4");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._setNewPasswordOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "fdf1840d-744b-436d-b206-11f498f04352");
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


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:nOLMJqktSVokKnWDq+B1LQ", "SuperappLogin", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:9nj4gqI83UKZHhDdhg2gsQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.9nj4gqI83UKZHhDdhg2gsQ:Cf9JuoogFEwYsxfUvNQ7GQ", "SuperappLogin", "ChangePassword", "NRNodes.WebScreen", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:9nj4gqI83UKZHhDdhg2gsQ", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/ChangePassword On Initialize");
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
Controller.registerVariableGroupType("SuperappLogin.Common.ChangePassword.PasswordPolicyCompliant$vars", [{
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


define("SuperappLogin.Common.ChangePassword.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"PgZ7xwEmmUqGHtNXq8gy8A": {
getter: function (varBag, idService) {
return varBag.showPasswordVar.value;
}
},
"PRFVymErIEa3XOvvRjgmbQ": {
getter: function (varBag, idService) {
return varBag.showPasswordVar.value;
}
},
"W9dCOFkfpEetovlOIbda9Q": {
getter: function (varBag, idService) {
return varBag.vars.value.isValidInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"yHX7fGNotE2HT0afEGBZVA": {
getter: function (varBag, idService) {
return varBag.changePasswordVar.value;
}
},
"GrSRtW14J0y0MPdkKROPzA": {
getter: function (varBag, idService) {
return varBag.model.variables.oldPasswordVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6G1x2r_fMEa8tzhcn8h23w": {
getter: function (varBag, idService) {
return varBag.model.variables.newPasswordVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"k+CTTOyqZ0+ubOARSCU4DA": {
getter: function (varBag, idService) {
return varBag.model.variables.confirmPasswordVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2+SJNdBWrkC81jmywwxA4g": {
getter: function (varBag, idService) {
return varBag.model.variables.isPasswordVisibleVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"VMwQA5FpXkWDHjWKql82NQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isConfirmPasswordVisibleVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"XLsZmOyb8kmaI01T0RkAsA": {
getter: function (varBag, idService) {
return varBag.model.variables.isButtonEnabledVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"dIGn1OKu10Knzfi2AgarEA": {
getter: function (varBag, idService) {
return varBag.model.variables.isExecutingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tNcICxUMQ0eJjfJe7ATSmg": {
getter: function (varBag, idService) {
return varBag.model.variables.isNewPasswordCompliantVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"L16pHvTBZkSkecNCYJuxSA": {
getter: function (varBag, idService) {
return varBag.model.variables.getUserDetailAggr;
}
},
"Q79SeoL7sUK2N_qm+iPcuw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Navigation"));
})(varBag.model, idService);
}
},
"nYZF+IRvuUWQxL551hpKmQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"KcKkl7VyKkCB0aqONo+z0w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"FWZC1UJJRkSofqE0rwInLA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"oJlVWiFE7ki6RpDuUAb0rw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"C0aqPOG8eEWgY09q7ajURw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"DhNjFL8YhUChuNU6d_XazA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MarginContainer"));
})(varBag.model, idService);
}
},
"OJlzsB0Bo06X0df9d+dFww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column1"));
})(varBag.model, idService);
}
},
"kbiUhMtaKkyAtyYkllz0WQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ChangePasswordForm"));
})(varBag.model, idService);
}
},
"n5ECQfw5IUWMvlFqak1UOA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"+UvS0b4pAESkcgbPmOwA6Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"DokWlHnUlUmB1LcNx1lKbg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_OldPassword"));
})(varBag.model, idService);
}
},
"6JhN1KbWy0WazBm50qBB6w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"gJ8EY3DLw0iYNXMsAw4uSA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"hK4dbX1fM0aBQDmZcEcyQA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"3Qsd2rKpqkKvAZidW2qzeA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PasswordVisible"));
})(varBag.model, idService);
}
},
"SlYh38urFEe7rE_YLvd5xw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"ODDauotz0Eet4zOXD3euMw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_NewPassword"));
})(varBag.model, idService);
}
},
"NXXMoSYjnE+mhQ3GwgkmLg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"ejFtSkI62k+MZn0U9OzS5g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"m_JsgmKjnkqNAh9u00i1Rg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"_bwosWDoyki+gp3CxOMsaQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PasswordVisible2"));
})(varBag.model, idService);
}
},
"7PUVvbC+UEGqCCNOOpydAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"D1D0EGzbWEyp5MfOluWejg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_ConfirmPassword"));
})(varBag.model, idService);
}
},
"FfiuFAn3sEC8L7aO4fJ7+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
},
"j+3TUwokTESY7J1ru+_0Qw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column2"));
})(varBag.model, idService);
}
},
"nQS0Vba8fkyfz5wOgmvB2A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

