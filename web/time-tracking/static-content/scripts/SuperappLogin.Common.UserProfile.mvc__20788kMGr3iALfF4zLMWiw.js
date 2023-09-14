define("SuperappLogin.Common.UserProfile.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "System_.model", "System_.model$UserInfoRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_", "System_.model$UserUpdateInfoRec", "System_.model$UpdateUserResultRec"], function (OutSystems, SuperappLoginModel, System_Model) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UserInfo", "userInfoVar", "UserInfo", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UserInfoRec());
}, false, OS.SystemStructures.UserInfoRec), 
this.attr("IsButtonEnabled", "isButtonEnabledVar", "IsButtonEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsExternal", "isExternalVar", "IsExternal", true, false, OS.DataTypes.DataTypes.Boolean, function () {
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
Form1: OS.Model.ValidationWidgetRecord,
Input_Name: OS.Model.ValidationWidgetRecord
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

define("SuperappLogin.Common.UserProfile.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "System_.model", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.UserProfile.mvc$model", "SuperappLogin.Common.UserProfile.mvc$controller", "SuperappLogin.clientVariables", "SuperappLogin.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "SuperappLogin.Common.Menu.mvc$view", "SuperappLogin.Common.MenuIcon.mvc$view", "OutSystemsUI.Utilities.MarginContainer.mvc$view", "OutSystemsUI.Adaptive.Columns2.mvc$view", "OutSystemsUI.Interaction.AnimatedLabel.mvc$view", "SuperappLogin.Common.BottomBar.mvc$view", "System_.model$UserInfoRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_", "System_.model$UserUpdateInfoRec", "System_.model$UpdateUserResultRec"], function (OutSystems, SuperappLoginModel, SuperappLoginController, System_Model, React, OSView, SuperappLogin_Common_UserProfile_mvc_model, SuperappLogin_Common_UserProfile_mvc_controller, SuperappLoginClientVariables, SuperappLogin_Common_Layout_mvc_view, OSWidgets, SuperappLogin_Common_Menu_mvc_view, SuperappLogin_Common_MenuIcon_mvc_view, OutSystemsUI_Utilities_MarginContainer_mvc_view, OutSystemsUI_Adaptive_Columns2_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, SuperappLogin_Common_BottomBar_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "Common.UserProfile"; }

        static getAttributes() { return {
codeFunction: "UserProfile",
functionKey: "166c7c4c-d824-47c7-86e4-59b58cf717f2",
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
            return [SuperappLogin_Common_Layout_mvc_view, SuperappLogin_Common_Menu_mvc_view, SuperappLogin_Common_MenuIcon_mvc_view, OutSystemsUI_Utilities_MarginContainer_mvc_view, OutSystemsUI_Adaptive_Columns2_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, SuperappLogin_Common_BottomBar_mvc_view];
        }

        get modelFactory() {
            return SuperappLogin_Common_UserProfile_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_UserProfile_mvc_controller;
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
            

            return "Your profile";
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
return ["Your profile"];
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-right margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isExternalVar, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("/SuperappLogin/ChangePassword", {}),
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Change your password")];
})), React.createElement(OutSystemsUI_Adaptive_Columns2_mvc_view, {
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
uuid: "6",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
column1: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
gridProperties: {
classes: "OSFillParent"
},
style: "form card",
_idProps: {
service: idService,
name: "Form1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-m",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Email"), React.createElement(OSWidgets.Expression, {
style: "font-size-base",
value: model.variables.userInfoVar.emailAttr,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-m",
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
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "12",
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
targetWidget: "Input_Name",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Name")];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: !(model.variables.isExternalVar),
extendedProperties: {
tabIndex: "1",
style: "margin-bottom: 0px;"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/UserProfile/Input_Name OnChange");
controller.input_NameOnChange$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.userInfoVar.nameAttr, function (value) {
model.variables.userInfoVar.nameAttr = value;
}),
_idProps: {
service: idService,
name: "Input_Name"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isExternalVar), asPrimitiveValue(model.variables.userInfoVar.nameAttr)]
})), $if(model.variables.isExternalVar, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Button, {
enabled: model.variables.isButtonEnabledVar,
extendedProperties: {
tabIndex: "2"
},
isDefault: false,
onClick: function () {
_this.validateWidget(idService.getId("Form1"));
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/UserProfile/SaveChangeButton OnClick");
return controller.saveChangesOnClick$Action(controller.callContext(eventHandlerContext));
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
name: "SaveChangeButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
tabIndex: "2"
},
text: ["Save changes"],
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}))];
}),
column2: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar), asPrimitiveValue(model.variables.isExternalVar), asPrimitiveValue(model.variables.userInfoVar.nameAttr), asPrimitiveValue(model.variables.userInfoVar.emailAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar), asPrimitiveValue(model.variables.userInfoVar.nameAttr), asPrimitiveValue(model.variables.userInfoVar.emailAttr), asPrimitiveValue(model.variables.isExternalVar)]
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
uuid: "17",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar), asPrimitiveValue(model.variables.userInfoVar.nameAttr), asPrimitiveValue(model.variables.userInfoVar.emailAttr), asPrimitiveValue(model.variables.isExternalVar)]
}));
        }
    }

    return View;
});
define("SuperappLogin.Common.UserProfile.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "System_.model", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.UserProfile.mvc$debugger", "SuperappLogin.Common.controller", "System_.model$UserInfoRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_", "System_.model$UserUpdateInfoRec", "System_.model$UpdateUserResultRec"], function (OutSystems, SuperappLoginModel, SuperappLoginController, System_Model, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_UserProfile_mvc_Debugger, SuperappLogin_CommonController) {
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
get updateUser$ServerAction() {if(!(this.hasOwnProperty("_updateUser$ServerAction"))) {
this._updateUser$ServerAction = function (userUpdateInfoIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("UpdateUser", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateUser");
span.setAttribute("outsystems.function.key", "ce3479aa-042a-4653-9cac-e007ba20bd23");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
}

return OS.Flow.tryFinally(function () {
var inputs = {
UserUpdateInfo: OS.DataConversion.ServerDataConverter.to(userUpdateInfoIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("UpdateUser", "screenservices/SuperappLogin/Common/UserProfile/ActionUpdateUser", "f+w9TRZi1JqSKbln3hu0zw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("SuperappLogin.Common.UserProfile$ActionUpdateUser"))();
executeServerActionResult.updateUserResultOut = OS.DataConversion.ServerDataConverter.from(outputs.UpdateUserResult, OS.SystemStructures.UpdateUserResultRec);
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

return this._updateUser$ServerAction;
}set updateUser$ServerAction(value) {this._updateUser$ServerAction = value;
}


// Aggregates and Data Actions

get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = [];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
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
span.setAttribute("outsystems.function.key", "1cd7595e-fec8-41bc-a185-f837d9fb66e2");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var isExternalUserVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.isExternalUserVar = isExternalUserVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:XlnXHMj+vEGhhfg32ftm4g:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.THxsFiTYx0eG5Fm1jPcX8g/ClientActions.XlnXHMj+vEGhhfg32ftm4g:LdvnWjRxNLD6Mg1o6zEDew", "SuperappLogin", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:uhd8WqV+bEm8xg6mkLO5Lg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:c2KTNVaPd0Oow3FsI60HLQ", callContext.id);
// Execute Action: IsExternalUser
isExternalUserVar.value = OS.SystemActions.isExternalUser(callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:SEu8fyehHE2QEnOr4s0fdQ", callContext.id);
// IsExternal = IsExternalUser.IsExternalUser
model.variables.isExternalVar = isExternalUserVar.value.isExternalUserOut;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:wBzfLwkI_EG41fVWxASr8A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:XlnXHMj+vEGhhfg32ftm4g", callContext.id);
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

get _saveChangesOnClick$Action() {if(!(this.hasOwnProperty("__saveChangesOnClick$Action"))) {
this.__saveChangesOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("SaveChangesOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "SaveChangesOnClick");
span.setAttribute("outsystems.function.key", "2db7e2b9-c82b-4098-b91d-2aab01fddd02");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("SaveChangesOnClick");
callContext = controller.callContext(callContext);
var updateUserVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.updateUserVar = updateUserVar;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:ueK3LSvImEC5HSqrAf3dAg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.THxsFiTYx0eG5Fm1jPcX8g/ClientActions.ueK3LSvImEC5HSqrAf3dAg:gKZlivKMC58iFa0q5ElJZg", "SuperappLogin", "SaveChangesOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:CRGLrdvhTEO9KpbEil1AxQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:_CuoH4Edhkmi3YkvmRo_+A", callContext.id);
// Execute Action: UpdateUser
model.flush();
return controller.updateUser$ServerAction(OS.DataConversion.JSConversions.typeConvertRecord(model.variables.userInfoVar, new OS.SystemStructures.UserUpdateInfoRec(), function (source, target) {
target.nameAttr = source.nameAttr;
target.photoURLAttr = source.photoURLAttr;
return target;
}), callContext).then(function (value) {
updateUserVar.value = value;
}).then(function () {
// Success?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:+pAhwmuHmkaaJT4fmcCbuA", callContext.id) && updateUserVar.value.updateUserResultOut.successAttr)) {
// Update client variables
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:HLKhJ06PbUegLORAXXCiaw", callContext.id);
// UserName = UserInfo.Name
SuperappLoginClientVariables.setUserName(model.variables.userInfoVar.nameAttr);
// User updated successfully
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Rr3KLwK_u0CbWct8XBn42g", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Your profile has been successfully updated!", /*Success*/ 1);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Pl3lQKenakinW3JUJQjRPA", callContext.id);
} else {
// Invalid credentials?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:ZLSa1rVgg0GJx+RsTeSTfQ", callContext.id) && updateUserVar.value.updateUserResultOut.updateUserFailureReasonAttr.invalidCredentialsAttr)) {
// Invalid credentials.
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:HhKMjUavZkmrnFGoqC47bA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Invalid credentials.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Pl3lQKenakinW3JUJQjRPA", callContext.id);
} else {
// Invalid Name?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:0NqjephiVEKlkAryXl7dUA", callContext.id) && updateUserVar.value.updateUserResultOut.updateUserFailureReasonAttr.invalidNameAttr)) {
// Invalid Name
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:CoR2cVDsvUy6rhm06bfJbw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Name invalid.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Pl3lQKenakinW3JUJQjRPA", callContext.id);
} else {
// Update user failed.
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:60dFd6+nAkq68d4wvd8jHA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Update user failed.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Pl3lQKenakinW3JUJQjRPA", callContext.id);
}

}

}

});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:ueK3LSvImEC5HSqrAf3dAg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:ueK3LSvImEC5HSqrAf3dAg", callContext.id);
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

return this.__saveChangesOnClick$Action;
}set _saveChangesOnClick$Action(value) {this.__saveChangesOnClick$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "88d6ef30-d986-4263-a635-e2a22e52a68c");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:MO_WiIbZY0KmNeKiLlKmjA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.THxsFiTYx0eG5Fm1jPcX8g/ClientActions.MO_WiIbZY0KmNeKiLlKmjA:tsJaQE_9KDex44Q9N4qw5A", "SuperappLogin", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:bnWsjACPi0GX4+JvSeTA8A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:fHVJLYgcPkimFkYXZ7hqtQ", callContext.id);
// Execute Action: GetUserData
return controller._getUserData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:bWwuKvg2E0S69VNsZvqIrg", callContext.id);
// Execute Action: SetIsButtonEnabled
controller._setIsButtonEnabled$Action(callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Vta05ZvKS0ulFCS+Zjl4PQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:MO_WiIbZY0KmNeKiLlKmjA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:MO_WiIbZY0KmNeKiLlKmjA", callContext.id);
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

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}

get _getUserData$Action() {if(!(this.hasOwnProperty("__getUserData$Action"))) {
this.__getUserData$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("GetUserData", function (span) {
if(span) {
span.setAttribute("code.function", "GetUserData");
span.setAttribute("outsystems.function.key", "d18ffa71-b864-45a2-9497-b61525eefa2e");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("GetUserData");
callContext = controller.callContext(callContext);
var getUserProfileVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getUserProfileVar = getUserProfileVar;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:cfqP0WS4okWUl7YVJe76Lg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.THxsFiTYx0eG5Fm1jPcX8g/ClientActions.cfqP0WS4okWUl7YVJe76Lg:K4NngU26cV6MYGSLMnU1UA", "SuperappLogin", "GetUserData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:iQG1vsRLDkCLXo0dA13J8Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Bwd1NWKJhEmEw0NmjO2zXQ", callContext.id);
// Execute Action: GetUserProfile
model.flush();
return OS.SystemActions.getUserProfile(callContext).then(function (value) {
getUserProfileVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:w_UtFiJ1kEqZGkMuELxSGQ", callContext.id);
// UserInfo = GetUserProfile.UserInfo
model.variables.userInfoVar = getUserProfileVar.value.userInfoOut;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:VPl5+QAct0+ycM43BMUl_A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:cfqP0WS4okWUl7YVJe76Lg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:cfqP0WS4okWUl7YVJe76Lg", callContext.id);
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

return this.__getUserData$Action;
}set _getUserData$Action(value) {this.__getUserData$Action = value;
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
span.setAttribute("outsystems.function.key", "e1fa4450-352c-43d1-b285-54c7d7bd46d6");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("SetIsButtonEnabled");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:UET64Sw10UOyhVTH171G1g:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.THxsFiTYx0eG5Fm1jPcX8g/ClientActions.UET64Sw10UOyhVTH171G1g:XHoGzw3K0IxWmYfiqgHywg", "SuperappLogin", "SetIsButtonEnabled", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:MHQHNy9PpEKXvExKSoa5kw", callContext.id);
// Empty Name?
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:r1skWNIRrkCcIF_thHJNyw", callContext.id) && (model.variables.userInfoVar.nameAttr === ""))) {
// Disable Button
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:ZKEn4p5kOU6WHTmQPa5_Qg", callContext.id);
// IsButtonEnabled = False
model.variables.isButtonEnabledVar = false;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:OSf_951sVki4CKLUVM3sBQ", callContext.id);
} else {
// Enable Button
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:cqi4U0_IAU27Sakl4FSwNQ", callContext.id);
// IsButtonEnabled = True
model.variables.isButtonEnabledVar = true;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:OSf_951sVki4CKLUVM3sBQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:UET64Sw10UOyhVTH171G1g", callContext.id);
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

get _input_NameOnChange$Action() {if(!(this.hasOwnProperty("__input_NameOnChange$Action"))) {
this.__input_NameOnChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("Input_NameOnChange", function (span) {
if(span) {
span.setAttribute("code.function", "Input_NameOnChange");
span.setAttribute("outsystems.function.key", "f3229c81-aac6-4a10-a1f3-65107f20c923");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("Input_NameOnChange");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:gZwi88aqEEqh82UQfyDJIw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.THxsFiTYx0eG5Fm1jPcX8g/ClientActions.gZwi88aqEEqh82UQfyDJIw:op6iHUTfhbUvwhm9UmEZBA", "SuperappLogin", "Input_NameOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:+Gpgzl2TiE6l5xW9cr3FZA", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:dV6Z9ZCkX0CHoVm0Gcug9w", callContext.id);
// Execute Action: SetIsButtonEnabled
controller._setIsButtonEnabled$Action(callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:JI3OrmRLzkOVi38pqskYmw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:gZwi88aqEEqh82UQfyDJIw", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__input_NameOnChange$Action;
}set _input_NameOnChange$Action(value) {this.__input_NameOnChange$Action = value;
}


onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "1cd7595e-fec8-41bc-a185-f837d9fb66e2");
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

saveChangesOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SaveChangesOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SaveChangesOnClick");
span.setAttribute("outsystems.function.key", "2db7e2b9-c82b-4098-b91d-2aab01fddd02");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._saveChangesOnClick$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "88d6ef30-d986-4263-a635-e2a22e52a68c");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

getUserData$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetUserData__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GetUserData");
span.setAttribute("outsystems.function.key", "d18ffa71-b864-45a2-9497-b61525eefa2e");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._getUserData$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

setIsButtonEnabled$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SetIsButtonEnabled__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SetIsButtonEnabled");
span.setAttribute("outsystems.function.key", "e1fa4450-352c-43d1-b285-54c7d7bd46d6");
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

input_NameOnChange$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Input_NameOnChange__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Input_NameOnChange");
span.setAttribute("outsystems.function.key", "f3229c81-aac6-4a10-a1f3-65107f20c923");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._input_NameOnChange$Action, callContext);
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
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:THxsFiTYx0eG5Fm1jPcX8g:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.THxsFiTYx0eG5Fm1jPcX8g:KRNlVM1fdRk1sHt0l2xVQA", "SuperappLogin", "UserProfile", "NRNodes.WebScreen", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:THxsFiTYx0eG5Fm1jPcX8g", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/UserProfile On Initialize");
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
this._onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/UserProfile On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
OS.Authorization.ensureUserHasRole({
roles: [SuperappLoginController.default.roles.SuperappLogin]
});
}

getDefaultTimeout() {
return SuperappLoginController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables
Controller.registerVariableGroupType("SuperappLogin.Common.UserProfile$ActionUpdateUser", [{
name: "UpdateUserResult",
attrName: "updateUserResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OS.SystemStructures.UpdateUserResultRec();
},
complexType: OS.SystemStructures.UpdateUserResultRec
}]);

// Client Actions - Variables

}
return new OS.Controller.ControllerFactory(Controller, SuperappLoginLanguageResources);
});


define("SuperappLogin.Common.UserProfile.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"c2KTNVaPd0Oow3FsI60HLQ": {
getter: function (varBag, idService) {
return varBag.isExternalUserVar.value;
}
},
"_CuoH4Edhkmi3YkvmRo_+A": {
getter: function (varBag, idService) {
return varBag.updateUserVar.value;
}
},
"Bwd1NWKJhEmEw0NmjO2zXQ": {
getter: function (varBag, idService) {
return varBag.getUserProfileVar.value;
}
},
"XygajCBnpE2hUkuq6qcXKA": {
getter: function (varBag, idService) {
return varBag.model.variables.userInfoVar;
}
},
"iLWSDa3saUCrRa6DUOacfg": {
getter: function (varBag, idService) {
return varBag.model.variables.isButtonEnabledVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"unKURqIyQkShUcEEErRINg": {
getter: function (varBag, idService) {
return varBag.model.variables.isExternalVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"KyfLJg7RqkWFtbTFBmpMxQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Navigation"));
})(varBag.model, idService);
}
},
"V4OfDJMVV0OEi54gnp2YbQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"FlBRifxxWEaIxYo1OhKmAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"jnOefpgp80SiJLafdkTZ3g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"TWBPEmdlv0a3O2MTV8qlrA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"9f_R_jfW+kSjNFgsHjXDVQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"wx4mqqJbSEKe_s83vnnc2w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MarginContainer"));
})(varBag.model, idService);
}
},
"rJ7Ups3MwU6v4XMd6OcZHA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column1"));
})(varBag.model, idService);
}
},
"dui1lSMaYUWUeXYkj5GTBw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Form1"));
})(varBag.model, idService);
}
},
"2bOCZbOlqUWdDi8CLwUl9w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"aAZpMHDtn0+FZAV5CzGaUw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"MmGng+g5FUKxlzxgHm+2Qg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Name"));
})(varBag.model, idService);
}
},
"36LgCYavMk6WPExT+sGb1A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SaveChangeButton"));
})(varBag.model, idService);
}
},
"r+O038KUfUCg2UKMO_nkHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Column2"));
})(varBag.model, idService);
}
},
"hmghFhGxfkG_wtXjMIJ7xw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

