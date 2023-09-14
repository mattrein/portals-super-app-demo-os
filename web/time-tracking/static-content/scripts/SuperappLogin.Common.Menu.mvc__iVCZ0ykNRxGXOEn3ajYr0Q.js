define("SuperappLogin.Common.Menu.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "OutSystemsUI.model", "OutSystemsUI.controller", "SuperappLogin.Common.ApplicationTitle.mvc$model", "SuperappLogin.Common.UserInfo.mvc$model", "OutSystemsUI.Private.MenuDrag.mvc$model", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsMenuDraggable", "OutSystemsUI.controller$SetActiveMenuItems", "OutSystemsUI.controller$SetMenuListeners", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, SuperappLoginModel, OutSystemsUIModel, OutSystemsUIController, SuperappLogin_Common_ApplicationTitle_mvcModel, SuperappLogin_Common_UserInfo_mvcModel, OutSystemsUI_Private_MenuDrag_mvcModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("NeedsDrag", "needsDragVar", "NeedsDrag", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ActiveItem", "activeItemIn", "ActiveItem", true, false, OS.DataTypes.DataTypes.Integer, function () {
return -1;
}, false), 
this.attr("_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ActiveSubItem", "activeSubItemIn", "ActiveSubItem", true, false, OS.DataTypes.DataTypes.Integer, function () {
return -1;
}, false), 
this.attr("_activeSubItemInDataFetchStatus", "_activeSubItemInDataFetchStatus", "_activeSubItemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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

static get hasValidationWidgets() {if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = ((SuperappLogin_Common_ApplicationTitle_mvcModel.hasValidationWidgets || SuperappLogin_Common_UserInfo_mvcModel.hasValidationWidgets) || OutSystemsUI_Private_MenuDrag_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
if("ActiveItem" in inputs) {
this.variables.activeItemIn = inputs.ActiveItem;
if("_activeItemInDataFetchStatus" in inputs) {
this.variables._activeItemInDataFetchStatus = inputs._activeItemInDataFetchStatus;
}

}

if("ActiveSubItem" in inputs) {
this.variables.activeSubItemIn = inputs.ActiveSubItem;
if("_activeSubItemInDataFetchStatus" in inputs) {
this.variables._activeSubItemInDataFetchStatus = inputs._activeSubItemInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("SuperappLogin.Common.Menu.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.Menu.mvc$model", "SuperappLogin.Common.Menu.mvc$controller", "SuperappLogin.clientVariables", "OutSystems/ReactWidgets/Main", "SuperappLogin.Common.ApplicationTitle.mvc$view", "SuperappLogin.Common.UserInfo.mvc$view", "OutSystemsUI.Private.MenuDrag.mvc$view", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsMenuDraggable", "OutSystemsUI.controller$SetActiveMenuItems", "OutSystemsUI.controller$SetMenuListeners", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIModel, OutSystemsUIController, React, OSView, SuperappLogin_Common_Menu_mvc_model, SuperappLogin_Common_Menu_mvc_controller, SuperappLoginClientVariables, OSWidgets, SuperappLogin_Common_ApplicationTitle_mvc_view, SuperappLogin_Common_UserInfo_mvc_view, OutSystemsUI_Private_MenuDrag_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Common.Menu"; }

        static getAttributes() { return {
codeFunction: "Menu",
functionKey: "9cce6585-d7a2-4a7e-9e42-cd10a58f2169",
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
            return [SuperappLogin_Common_ApplicationTitle_mvc_view, SuperappLogin_Common_UserInfo_mvc_view, OutSystemsUI_Private_MenuDrag_mvc_view];
        }

        get modelFactory() {
            return SuperappLogin_Common_Menu_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_Menu_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "app-menu-content display-flex",
role: "navigation"
},
tag: "nav",
_idProps: {
service: idService,
name: "ApplicationContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-logo ph",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(SuperappLogin_Common_ApplicationTitle_mvc_view, {
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
role: "menubar"
},
style: "app-menu-links",
visible: true,
_idProps: {
service: idService,
name: "PageLinks"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "app-login-info ph",
visible: true,
_idProps: {
service: idService,
name: "LoginInfo"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(SuperappLogin_Common_UserInfo_mvc_view, {
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
uuid: "5",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Menu/Container onclick");
controller.hideMenu$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
role: "button"
},
style: "app-menu-overlay",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.needsDragVar, false, this, function () {
return [React.createElement(OutSystemsUI_Private_MenuDrag_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
MenuId: idService.getId("ApplicationContainer")
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
uuid: "7",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}));
        }
    }

    return View;
});
define("SuperappLogin.Common.Menu.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.Menu.mvc$debugger", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$IsMenuDraggable", "OutSystemsUI.controller$SetActiveMenuItems", "OutSystemsUI.controller$SetMenuListeners", "OutSystemsUI.controller$ToggleSideMenu"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIModel, OutSystemsUIController, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_Menu_mvc_Debugger) {
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
span.setAttribute("outsystems.function.key", "11c82c04-80b2-471d-b198-1be93c2b3364");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var isMenuDraggableVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.isMenuDraggableVar = isMenuDraggableVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:BCzIEbKAHUexmBvpPCszZA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.hWXOnKLXfkqeQs0QpY8haQ/ClientActions.BCzIEbKAHUexmBvpPCszZA:jWBWOlswoMLB1smszDGsMA", "SuperappLogin", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:3I9kKD0aaEW6gF1nEPLeSw", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:q8xVXINefU+rljp+f25FgQ", callContext.id);
// Execute Action: IsMenuDraggable
isMenuDraggableVar.value = OutSystemsUIController.default.isMenuDraggable$Action(callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:ItdeaMWceEag9e+4cPCbug", callContext.id);
// NeedsDrag = IsMenuDraggable.AddDrag
model.variables.needsDragVar = isMenuDraggableVar.value.addDragOut;
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:QOKqqU6R+Ue+js0I6sXsVw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:BCzIEbKAHUexmBvpPCszZA", callContext.id);
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

get _onRender$Action() {if(!(this.hasOwnProperty("__onRender$Action"))) {
this.__onRender$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnRender", function (span) {
if(span) {
span.setAttribute("code.function", "OnRender");
span.setAttribute("outsystems.function.key", "2cc71eb8-df41-420c-bd41-1adbd115915b");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
var setActiveMenuItemsVar = new OS.DataTypes.VariableHolder();
var setMenuListenersVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setActiveMenuItemsVar = setActiveMenuItemsVar;
varBag.setMenuListenersVar = setMenuListenersVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:uB7HLEHfDEK9QRrb0RWRWw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.hWXOnKLXfkqeQs0QpY8haQ/ClientActions.uB7HLEHfDEK9QRrb0RWRWw:OMpjP0eby_7bIKyb6opkhg", "SuperappLogin", "OnRender", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:gmhoauAZpUqotjkfKggWig", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:f0kI5tppAEW8LhZDG7qgKQ", callContext.id);
// Execute Action: SetMenuListeners
setMenuListenersVar.value = OutSystemsUIController.default.setMenuListeners$Action("", callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:PwWpMeChx0ubkgSnn4qjcA", callContext.id);
// Execute Action: SetActiveMenuItems
setActiveMenuItemsVar.value = OutSystemsUIController.default.setActiveMenuItems$Action("", model.variables.activeItemIn, model.variables.activeSubItemIn, callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:y+fd3WjZ0UicwzTl195ZVQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:uB7HLEHfDEK9QRrb0RWRWw", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onRender$Action;
}set _onRender$Action(value) {this.__onRender$Action = value;
}

get _hideMenu$Action() {if(!(this.hasOwnProperty("__hideMenu$Action"))) {
this.__hideMenu$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("HideMenu", function (span) {
if(span) {
span.setAttribute("code.function", "HideMenu");
span.setAttribute("outsystems.function.key", "4f327189-3168-4aab-9667-80385e48cd34");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("HideMenu");
callContext = controller.callContext(callContext);
var toggleSideMenuVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.toggleSideMenuVar = toggleSideMenuVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:iXEyT2gxq0qWZ4A4XkjNNA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.hWXOnKLXfkqeQs0QpY8haQ/ClientActions.iXEyT2gxq0qWZ4A4XkjNNA:G3onQoHZgzDIjRnuMApUZw", "SuperappLogin", "HideMenu", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:zgr5KyvPkE+VJW8HHmzE_g", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:LVlzM+uU9kOWciFcNNyf1w", callContext.id);
// Execute Action: ToggleSideMenu
toggleSideMenuVar.value = OutSystemsUIController.default.toggleSideMenu$Action(callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:arh4VfG0lUCqs_PJPbU4+Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:iXEyT2gxq0qWZ4A4XkjNNA", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__hideMenu$Action;
}set _hideMenu$Action(value) {this.__hideMenu$Action = value;
}

get _onParametersChanged$Action() {if(!(this.hasOwnProperty("__onParametersChanged$Action"))) {
this.__onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnParametersChanged", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "cdefaf81-23c7-4b50-bdb0-7f3362f32eb4");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var setActiveMenuItemsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setActiveMenuItemsVar = setActiveMenuItemsVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:ga_vzccjUEu9sH8zYvMutA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.hWXOnKLXfkqeQs0QpY8haQ/ClientActions.ga_vzccjUEu9sH8zYvMutA:T5vjPhEfmNYIXlavt3jbIQ", "SuperappLogin", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:OzNlm0fSYkOqV2Csg7h1eg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:WFb9urgYWES_Sq257tB7ng", callContext.id);
// Execute Action: SetActiveMenuItems
setActiveMenuItemsVar.value = OutSystemsUIController.default.setActiveMenuItems$Action("", model.variables.activeItemIn, model.variables.activeSubItemIn, callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:okWHzoyb5USqI8Aaw+lQrg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:ga_vzccjUEu9sH8zYvMutA", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onParametersChanged$Action;
}set _onParametersChanged$Action(value) {this.__onParametersChanged$Action = value;
}


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "11c82c04-80b2-471d-b198-1be93c2b3364");
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

onRender$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnRender__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnRender");
span.setAttribute("outsystems.function.key", "2cc71eb8-df41-420c-bd41-1adbd115915b");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onRender$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

hideMenu$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("HideMenu__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "HideMenu");
span.setAttribute("outsystems.function.key", "4f327189-3168-4aab-9667-80385e48cd34");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._hideMenu$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onParametersChanged$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "cdefaf81-23c7-4b50-bdb0-7f3362f32eb4");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
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
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:hWXOnKLXfkqeQs0QpY8haQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.hWXOnKLXfkqeQs0QpY8haQ:i6CCK21mPa8vLSoLq8WR7w", "SuperappLogin", "Menu", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:hWXOnKLXfkqeQs0QpY8haQ", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Menu On Ready");
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
this._onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Menu On Render");
return controller.onRender$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Menu On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

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


define("SuperappLogin.Common.Menu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"q8xVXINefU+rljp+f25FgQ": {
getter: function (varBag, idService) {
return varBag.isMenuDraggableVar.value;
}
},
"PwWpMeChx0ubkgSnn4qjcA": {
getter: function (varBag, idService) {
return varBag.setActiveMenuItemsVar.value;
}
},
"f0kI5tppAEW8LhZDG7qgKQ": {
getter: function (varBag, idService) {
return varBag.setMenuListenersVar.value;
}
},
"LVlzM+uU9kOWciFcNNyf1w": {
getter: function (varBag, idService) {
return varBag.toggleSideMenuVar.value;
}
},
"WFb9urgYWES_Sq257tB7ng": {
getter: function (varBag, idService) {
return varBag.setActiveMenuItemsVar.value;
}
},
"J+2hMxU0JEuTciMiNi5DPg": {
getter: function (varBag, idService) {
return varBag.model.variables.needsDragVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"z_g+PArOXEyEU7HdgvXQ_w": {
getter: function (varBag, idService) {
return varBag.model.variables.activeItemIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"75_p0MkYXESIUxBEUkwJzw": {
getter: function (varBag, idService) {
return varBag.model.variables.activeSubItemIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Vn4eUyiam0y+hf7ix8YH1w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ApplicationContainer"));
})(varBag.model, idService);
}
},
"OTEsBGbIvUC774QavQrMmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PageLinks"));
})(varBag.model, idService);
}
},
"fbrl94BgrUO7+zNK3n087w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LoginInfo"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

