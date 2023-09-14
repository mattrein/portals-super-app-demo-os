define("SuperappLogin.Common.MenuIcon.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetMenuIcon", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$IsRTL", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, SuperappLoginModel, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IsRTL", "isRTLVar", "IsRTL", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("MenuAction", "menuActionIn", "MenuAction", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_menuActionInDataFetchStatus", "_menuActionInDataFetchStatus", "_menuActionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
return {};
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

static get hasValidationWidgets() {return false;
}
setInputs(inputs) {
if("MenuAction" in inputs) {
this.variables.menuActionIn = inputs.MenuAction;
if("_menuActionInDataFetchStatus" in inputs) {
this.variables._menuActionInDataFetchStatus = inputs._menuActionInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("SuperappLogin.Common.MenuIcon.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.MenuIcon.mvc$model", "SuperappLogin.Common.MenuIcon.mvc$controller", "SuperappLogin.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetMenuIcon", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$IsRTL", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIModel, OutSystemsUIController, React, OSView, SuperappLogin_Common_MenuIcon_mvc_model, SuperappLogin_Common_MenuIcon_mvc_controller, SuperappLoginClientVariables, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Common.MenuIcon"; }

        static getAttributes() { return {
codeFunction: "MenuIcon",
functionKey: "9b2f3328-52b4-4294-bc28-f34619a25d9f",
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
            return [];
        }

        get modelFactory() {
            return SuperappLogin_Common_MenuIcon_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_MenuIcon_mvc_controller;
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
extendedProperties: {
style: "margin-top: 0px;"
},
style: model.getCachedValue(idService.getId("MenuIcon.Style"), function () {
return ("app-menu-icon" + ((((model.variables.menuActionIn) !== (SuperappLoginModel.staticEntities.menuAction.back))) ? ("") : (" back")));
}, function () {
return model.variables.menuActionIn;
}),
visible: ((model.variables.menuActionIn) !== (SuperappLoginModel.staticEntities.menuAction.hidden)),
_idProps: {
service: idService,
name: "MenuIcon"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuActionInDataFetchStatus),
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuActionInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/MenuIcon/Container onclick");
controller.onToggleMenu$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
"aria-label": "Toggle the Menu",
role: "button",
tabIndex: "0",
"aria-haspopup": "true"
},
style: "menu-icon",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "menu-icon-line",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "menu-icon-line",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "menu-icon-line",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/MenuIcon/Container onclick");
controller.onBack$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
"aria-label": "Back to previous screen",
role: "button",
tabIndex: "0"
},
style: "menu-back",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isRTLVar, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "angle-right",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "ArrowReverse"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "angle-left",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "ArrowBack"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}))));
        }
    }

    return View;
});
define("SuperappLogin.Common.MenuIcon.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.MenuIcon.mvc$debugger", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetMenuIcon", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$IsRTL", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIModel, OutSystemsUIController, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_MenuIcon_mvc_Debugger) {
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
span.setAttribute("outsystems.function.key", "1dfc92db-8ee1-49d7-84e7-8941b91ab9dc");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var setMenuIconVar = new OS.DataTypes.VariableHolder();
var setMenuIconListenersVar = new OS.DataTypes.VariableHolder();
var checkIsRTLVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setMenuIconVar = setMenuIconVar;
varBag.setMenuIconListenersVar = setMenuIconListenersVar;
varBag.checkIsRTLVar = checkIsRTLVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:25L8HeGO10mE54lBuRq53A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.KDMvm7RSlEK8KPNGGaJdnw/ClientActions.25L8HeGO10mE54lBuRq53A:7YXpnMtNQDK9H2t7sxHW3w", "SuperappLogin", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:930pRHbQmkqkgjMnxbsxZA", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:6_iQJnlasUCx2E0MtgvL_A", callContext.id);
// Execute Action: SetMenuIcon
setMenuIconVar.value = OutSystemsUIController.default.setMenuIcon$Action(model.variables.menuActionIn, callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:d5Q0kmrRc0KT8ebzN0agYQ", callContext.id);
// Execute Action: SetMenuIconListeners
setMenuIconListenersVar.value = OutSystemsUIController.default.setMenuIconListeners$Action(callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:8b3EmbEB50GUKbTtMxAR9w", callContext.id);
// Execute Action: CheckIsRTL
checkIsRTLVar.value = OutSystemsUIController.default.isRTL$Action(callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:P9sYZ7t8zE+Vs2IGYLScPA", callContext.id);
// IsRTL = CheckIsRTL.IsRTL
model.variables.isRTLVar = checkIsRTLVar.value.isRTLOut;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:s4_TzujSYEyWfKfpquVC8A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:25L8HeGO10mE54lBuRq53A", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}

get _onToggleMenu$Action() {if(!(this.hasOwnProperty("__onToggleMenu$Action"))) {
this.__onToggleMenu$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnToggleMenu", function (span) {
if(span) {
span.setAttribute("code.function", "OnToggleMenu");
span.setAttribute("outsystems.function.key", "8c44bb35-ccd0-4bdd-a0ce-fd78674a3305");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnToggleMenu");
callContext = controller.callContext(callContext);
var toggleSideMenuVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.toggleSideMenuVar = toggleSideMenuVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:NbtEjNDM3Uugzv14Z0ozBQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.KDMvm7RSlEK8KPNGGaJdnw/ClientActions.NbtEjNDM3Uugzv14Z0ozBQ:FT5aM4woFoJJDuf3YCA4pg", "SuperappLogin", "OnToggleMenu", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:AwzWQMFjqU+vRHQnax8+Kw", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:a0Gb5jostE+WwxEkX50FFA", callContext.id);
// Execute Action: ToggleSideMenu
toggleSideMenuVar.value = OutSystemsUIController.default.toggleSideMenu$Action(callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:IawdC6m1lkCGenBYVz7KSg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:NbtEjNDM3Uugzv14Z0ozBQ", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onToggleMenu$Action;
}set _onToggleMenu$Action(value) {this.__onToggleMenu$Action = value;
}

get _onBack$Action() {if(!(this.hasOwnProperty("__onBack$Action"))) {
this.__onBack$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnBack", function (span) {
if(span) {
span.setAttribute("code.function", "OnBack");
span.setAttribute("outsystems.function.key", "e6eadfea-b684-4a19-807b-eb1c3eb83c3e");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnBack");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:6t_q5oS2GUqAe+scPrg8Pg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.KDMvm7RSlEK8KPNGGaJdnw/ClientActions.6t_q5oS2GUqAe+scPrg8Pg:XspcHOi9b6PxAB8QkwUA9g", "SuperappLogin", "OnBack", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:j2TNZaqk1kSqRgowGeHooA", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:pIRKUz2qxE6HwsXpsbgicA", callContext.id);
// Destination: (PreviousScreen)
return OS.Navigation.navigateBack(null, callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:6t_q5oS2GUqAe+scPrg8Pg", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onBack$Action;
}set _onBack$Action(value) {this.__onBack$Action = value;
}


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "1dfc92db-8ee1-49d7-84e7-8941b91ab9dc");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onToggleMenu$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnToggleMenu__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnToggleMenu");
span.setAttribute("outsystems.function.key", "8c44bb35-ccd0-4bdd-a0ce-fd78674a3305");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onToggleMenu$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onBack$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnBack__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnBack");
span.setAttribute("outsystems.function.key", "e6eadfea-b684-4a19-807b-eb1c3eb83c3e");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onBack$Action, callContext);
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
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:KDMvm7RSlEK8KPNGGaJdnw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.KDMvm7RSlEK8KPNGGaJdnw:Jx55DlNkHETgKEgAAt8+DA", "SuperappLogin", "MenuIcon", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:KDMvm7RSlEK8KPNGGaJdnw", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/MenuIcon On Ready");
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
this._onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/MenuIcon On Parameters Changed");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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


define("SuperappLogin.Common.MenuIcon.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"6_iQJnlasUCx2E0MtgvL_A": {
getter: function (varBag, idService) {
return varBag.setMenuIconVar.value;
}
},
"d5Q0kmrRc0KT8ebzN0agYQ": {
getter: function (varBag, idService) {
return varBag.setMenuIconListenersVar.value;
}
},
"8b3EmbEB50GUKbTtMxAR9w": {
getter: function (varBag, idService) {
return varBag.checkIsRTLVar.value;
}
},
"a0Gb5jostE+WwxEkX50FFA": {
getter: function (varBag, idService) {
return varBag.toggleSideMenuVar.value;
}
},
"p3m_8GZgfkS6MgVq9tQTTw": {
getter: function (varBag, idService) {
return varBag.model.variables.isRTLVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"DBVN2SdEqUK9vOajJKCjVA": {
getter: function (varBag, idService) {
return varBag.model.variables.menuActionIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pegExOLfS0WF48CX5qEo5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuIcon"));
})(varBag.model, idService);
}
},
"HQn2OsYrEkSLdd6hneWSAQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ArrowReverse"));
})(varBag.model, idService);
}
},
"88NA8XPCL0itLORLN8I8CQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ArrowBack"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

