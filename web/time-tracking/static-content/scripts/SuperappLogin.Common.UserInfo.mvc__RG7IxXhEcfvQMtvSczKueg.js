define("SuperappLogin.Common.UserInfo.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "System_.model", "OutSystemsUI.Content.UserAvatar.mvc$model", "System_.model$UserInfoRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (OutSystems, SuperappLoginModel, System_Model, OutSystemsUI_Content_UserAvatar_mvcModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

var VariablesRecord = VariablesRecordInner;
VariablesRecord.init();
}
class WidgetsRecord extends 
OS.Model.BaseWidgetRecordMap {
static getWidgetsType() {
return {};
}

}

class Model extends 
OS.Model.VariablelessViewModel {
static getVariablesRecordConstructor() {
return VariablesRecord;
}

static getWidgetsRecordConstructor() {
return WidgetsRecord;
}

static get hasValidationWidgets() {if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = OutSystemsUI_Content_UserAvatar_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("SuperappLogin.Common.UserInfo.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "System_.model", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.UserInfo.mvc$model", "SuperappLogin.Common.UserInfo.mvc$controller", "SuperappLogin.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Content.UserAvatar.mvc$view", "System_.model$UserInfoRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (OutSystems, SuperappLoginModel, SuperappLoginController, System_Model, React, OSView, SuperappLogin_Common_UserInfo_mvc_model, SuperappLogin_Common_UserInfo_mvc_controller, SuperappLoginClientVariables, OSWidgets, OutSystemsUI_Content_UserAvatar_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Common.UserInfo"; }

        static getAttributes() { return {
codeFunction: "UserInfo",
functionKey: "cfd612ca-24c0-4249-a37e-a8be6c31e684",
functionOwnerName: "SuperappLogin",
functionOwnerKey: "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Content_UserAvatar_mvc_view];
        }

        get modelFactory() {
            return SuperappLogin_Common_UserInfo_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_UserInfo_mvc_controller;
        }

        get title() {
            

            return "";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "user-info",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((((OS.BuiltinFunctions.getUserId()).toString()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((SuperappLoginClientVariables.getUserPhotoURL()) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
title: SuperappLoginClientVariables.getUserName(),
alt: "User photo"
},
style: "avatar avatar-small border-radius-rounded",
type: /*External*/ 1,
url: SuperappLoginClientVariables.getUserPhotoURL(),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OutSystemsUI_Content_UserAvatar_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Size: SuperappLoginModel.staticEntities.size.small,
Name: SuperappLoginClientVariables.getUserName()
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
uuid: "3",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("/SuperappLogin/UserProfile", {}),
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: SuperappLoginClientVariables.getUserName(),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/UserInfo/Link OnClick");
return controller.clientLogout$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "sign-out",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Icon3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s wcag-hide-text",
text: ["Log out"],
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade),
url: OS.Navigation.generateScreenURL("/SuperappLogin/Login", {}),
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "sign-in",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Icon4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s",
text: ["Login"],
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})));
        }
    }

    return View;
});
define("SuperappLogin.Common.UserInfo.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "System_.model", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.UserInfo.mvc$debugger", "System_.model$UserInfoRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (OutSystems, SuperappLoginModel, SuperappLoginController, System_Model, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_UserInfo_mvc_Debugger) {
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
span.setAttribute("outsystems.function.key", "3c5bfbf1-f3df-4b90-873a-0c4dcbf7d105");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:8ftbPN_zkEuHOgxNy_fRBQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.yhLWz8AkSUKjfqi+bDHmhA/ClientActions.8ftbPN_zkEuHOgxNy_fRBQ:93Zkt+IhakKQhYcIqTg1og", "SuperappLogin", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:3EM_zyviOkOLW5horIuksw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:ea5_TC0PG0Wo6U5k0ofjiQ", callContext.id);
// Execute Action: GetUsernameAndPhoto
return controller._getUsernameAndPhoto$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:7Vn8sGEPBUeHzAVfGsKJVA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:8ftbPN_zkEuHOgxNy_fRBQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:8ftbPN_zkEuHOgxNy_fRBQ", callContext.id);
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

get _getUsernameAndPhoto$Action() {if(!(this.hasOwnProperty("__getUsernameAndPhoto$Action"))) {
this.__getUsernameAndPhoto$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("GetUsernameAndPhoto", function (span) {
if(span) {
span.setAttribute("code.function", "GetUsernameAndPhoto");
span.setAttribute("outsystems.function.key", "9a93354f-2fb0-47df-adb1-d5d7f3c8a765");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("GetUsernameAndPhoto");
callContext = controller.callContext(callContext);
var getUserProfileVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getUserProfileVar = getUserProfileVar;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:TzWTmrAv30etsdXX88inZQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.yhLWz8AkSUKjfqi+bDHmhA/ClientActions.TzWTmrAv30etsdXX88inZQ:I8JjHOimRNDzmrf+XsIOsQ", "SuperappLogin", "GetUsernameAndPhoto", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:FHZORLKiCkmvwM71azIzgQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// No username?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:kchbwlnrQ0evkrxIw49CuA", callContext.id) && ((SuperappLoginClientVariables.getUserName() === "") && (((OS.BuiltinFunctions.getUserId()).toString()) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:se51RKiHx02VgWaH8fbUtw", callContext.id);
// Execute Action: GetUserProfile
model.flush();
return OS.SystemActions.getUserProfile(callContext).then(function (value) {
getUserProfileVar.value = value;
}).then(function () {
// Set User Info
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:GdYmzWc9mU+o992udCEYWQ", callContext.id);
// UserName = GetUserProfile.UserInfo.Name
SuperappLoginClientVariables.setUserName(getUserProfileVar.value.userInfoOut.nameAttr);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:GdYmzWc9mU+o992udCEYWQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// UserPhotoURL = GetUserProfile.UserInfo.PhotoURL
SuperappLoginClientVariables.setUserPhotoURL(getUserProfileVar.value.userInfoOut.photoURLAttr);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:OxWwmH72A0qjrmNG5UoKxg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:OxWwmH72A0qjrmNG5UoKxg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:TzWTmrAv30etsdXX88inZQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:TzWTmrAv30etsdXX88inZQ", callContext.id);
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

return this.__getUsernameAndPhoto$Action;
}set _getUsernameAndPhoto$Action(value) {this.__getUsernameAndPhoto$Action = value;
}

get _clientLogout$Action() {if(!(this.hasOwnProperty("__clientLogout$Action"))) {
this.__clientLogout$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("ClientLogout", function (span) {
if(span) {
span.setAttribute("code.function", "ClientLogout");
span.setAttribute("outsystems.function.key", "ac2f6312-8a7f-483b-8f73-391f878817e0");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("ClientLogout");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:EmMvrH+KO0iPczkfh4gX4A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.yhLWz8AkSUKjfqi+bDHmhA/ClientActions.EmMvrH+KO0iPczkfh4gX4A:EVfChjVx9v0LspLBNMxd3Q", "SuperappLogin", "ClientLogout", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:2g1uQoOGsU2TbpiXxislHA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:IarvjRwr5ka4SR9HiN4Lzg", callContext.id);
// Execute Action: Logout
model.flush();
return OS.SystemActions.logout(callContext).then(function () {
// Clear client variables
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:EX6fnXjSbE2hruKIH29+3g", callContext.id);
// UserName = ""
SuperappLoginClientVariables.setUserName("");
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:EX6fnXjSbE2hruKIH29+3g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// UserPhotoURL = ""
SuperappLoginClientVariables.setUserPhotoURL("");
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:EX6fnXjSbE2hruKIH29+3g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// LastURL = ""
SuperappLoginClientVariables.setLastURL("");
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:VUJQpPzuME67ui0BhnhEyg", callContext.id);
// Destination: /SuperappLogin/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(OS.BuiltinFunctions.getOwnerURLPath(), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:EmMvrH+KO0iPczkfh4gX4A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:EmMvrH+KO0iPczkfh4gX4A", callContext.id);
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

return this.__clientLogout$Action;
}set _clientLogout$Action(value) {this.__clientLogout$Action = value;
}


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "3c5bfbf1-f3df-4b90-873a-0c4dcbf7d105");
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

getUsernameAndPhoto$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetUsernameAndPhoto__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GetUsernameAndPhoto");
span.setAttribute("outsystems.function.key", "9a93354f-2fb0-47df-adb1-d5d7f3c8a765");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._getUsernameAndPhoto$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

clientLogout$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ClientLogout__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ClientLogout");
span.setAttribute("outsystems.function.key", "ac2f6312-8a7f-483b-8f73-391f878817e0");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._clientLogout$Action, callContext);
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
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:yhLWz8AkSUKjfqi+bDHmhA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.yhLWz8AkSUKjfqi+bDHmhA:hOBEJIKXHM6PtgvvmpImwA", "SuperappLogin", "UserInfo", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:yhLWz8AkSUKjfqi+bDHmhA", callContext.id);
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
this._onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/UserInfo On Ready");
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
return controller.handleError(ex);
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


define("SuperappLogin.Common.UserInfo.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"se51RKiHx02VgWaH8fbUtw": {
getter: function (varBag, idService) {
return varBag.getUserProfileVar.value;
}
},
"TIH0nUTDPUWQfwo4jDOUfw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasPhotoURL"));
})(varBag.model, idService);
}
},
"Nqw1XgMPUky2Kc5M0JI4PQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon3"));
})(varBag.model, idService);
}
},
"+Ye0LCXqVEuQq_xT9wnRpg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon4"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

