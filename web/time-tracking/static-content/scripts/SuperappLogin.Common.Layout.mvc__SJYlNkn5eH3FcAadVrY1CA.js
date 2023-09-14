define("SuperappLogin.Common.Layout.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.Private.PullToRefresh.mvc$model", "SuperappLogin.Common.OfflineDataSyncEvents.mvc$model", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$SkipToContent", "OutSystemsUI.controller$LayoutDestroy"], function (OutSystems, SuperappLoginModel, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_Private_PullToRefresh_mvcModel, SuperappLogin_Common_OfflineDataSyncEvents_mvcModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UsePullToRefresh", "usePullToRefreshIn", "UsePullToRefresh", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HideHeaderOnScroll", "hideHeaderOnScrollIn", "HideHeaderOnScroll", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_hideHeaderOnScrollInDataFetchStatus", "_hideHeaderOnScrollInDataFetchStatus", "_hideHeaderOnScrollInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("MenuBehavior", "menuBehaviorIn", "MenuBehavior", true, false, OS.DataTypes.DataTypes.Text, function () {
return SuperappLoginModel.staticEntities.sideMenuBehavior.overlay;
}, false), 
this.attr("_menuBehaviorInDataFetchStatus", "_menuBehaviorInDataFetchStatus", "_menuBehaviorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (OutSystemsUI_Private_PullToRefresh_mvcModel.hasValidationWidgets || SuperappLogin_Common_OfflineDataSyncEvents_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
if("UsePullToRefresh" in inputs) {
this.variables.usePullToRefreshIn = inputs.UsePullToRefresh;
if("_usePullToRefreshInDataFetchStatus" in inputs) {
this.variables._usePullToRefreshInDataFetchStatus = inputs._usePullToRefreshInDataFetchStatus;
}

}

if("HideHeaderOnScroll" in inputs) {
this.variables.hideHeaderOnScrollIn = inputs.HideHeaderOnScroll;
if("_hideHeaderOnScrollInDataFetchStatus" in inputs) {
this.variables._hideHeaderOnScrollInDataFetchStatus = inputs._hideHeaderOnScrollInDataFetchStatus;
}

}

if("MenuBehavior" in inputs) {
this.variables.menuBehaviorIn = inputs.MenuBehavior;
if("_menuBehaviorInDataFetchStatus" in inputs) {
this.variables._menuBehaviorInDataFetchStatus = inputs._menuBehaviorInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

if("EnableAccessibilityFeatures" in inputs) {
this.variables.enableAccessibilityFeaturesIn = inputs.EnableAccessibilityFeatures;
if("_enableAccessibilityFeaturesInDataFetchStatus" in inputs) {
this.variables._enableAccessibilityFeaturesInDataFetchStatus = inputs._enableAccessibilityFeaturesInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("SuperappLogin.Common.Layout.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.Layout.mvc$model", "SuperappLogin.Common.Layout.mvc$controller", "SuperappLogin.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Private.PullToRefresh.mvc$view", "SuperappLogin.Common.OfflineDataSyncEvents.mvc$view", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$SkipToContent", "OutSystemsUI.controller$LayoutDestroy"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIModel, OutSystemsUIController, React, OSView, SuperappLogin_Common_Layout_mvc_model, SuperappLogin_Common_Layout_mvc_controller, SuperappLoginClientVariables, OSWidgets, OutSystemsUI_Private_PullToRefresh_mvc_view, SuperappLogin_Common_OfflineDataSyncEvents_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Common.Layout"; }

        static getAttributes() { return {
codeFunction: "Layout",
functionKey: "698f7003-f93e-426b-b1cc-75d322c49bc6",
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
            return [OutSystemsUI_Private_PullToRefresh_mvc_view, SuperappLogin_Common_OfflineDataSyncEvents_mvc_view];
        }

        get modelFactory() {
            return SuperappLogin_Common_Layout_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_Layout_mvc_controller;
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
style: model.getCachedValue(idService.getId("LayoutWrapper.Style"), function () {
return (((("layout layout-side layout-native ios-bounce " + ((!(model.variables.hideHeaderOnScrollIn)) ? ("") : ("hide-header-on-scroll "))) + model.variables.menuBehaviorIn) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn)))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features")));
}, function () {
return model.variables.hideHeaderOnScrollIn;
}, function () {
return model.variables.menuBehaviorIn;
}, function () {
return model.variables.extendedClassIn;
}, function () {
return model.variables.enableAccessibilityFeaturesIn;
}),
visible: true,
_idProps: {
service: idService,
name: "LayoutWrapper"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hideHeaderOnScrollInDataFetchStatus, model.variables._menuBehaviorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus, model.variables._enableAccessibilityFeaturesInDataFetchStatus)
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"aria-label": "Skip to Content (Press Enter)",
"data-showskipcontent": model.getCachedValue(idService.getId("yRvtB25X+UKrx0JRPzwU1A.data-showskipcontent"), function () {
return ((model.variables.enableAccessibilityFeaturesIn) ? ("true") : ("false"));
}, function () {
return model.variables.enableAccessibilityFeaturesIn;
})
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/Layout/Link OnClick");
controller.skipToContentOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "skip-nav",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Skip to Content (Press Enter)"), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
role: "complementary",
className: "aside-navigation"
},
tag: "aside",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.navigation,
_idProps: {
service: idService,
name: "Navigation"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "main",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.hideHeaderOnScrollIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-hidden": "true"
},
style: "sticky-observer",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
role: "banner",
className: "header"
},
tag: "header",
_idProps: {
service: idService,
name: "Header"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-top",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-content display-flex",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center full-width",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerLeft,
style: "header-left",
_idProps: {
service: idService,
name: "HeaderLeft"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "header-title"
},
tag: "h1",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.title,
gridProperties: {
classes: "OSInline"
},
_idProps: {
service: idService,
name: "Title"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerRight,
style: "header-right",
_idProps: {
service: idService,
name: "HeaderRight"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerContent,
style: "header-top-content ph",
_idProps: {
service: idService,
name: "HeaderContent"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if(model.variables.usePullToRefreshIn, false, this, function () {
return [React.createElement(OutSystemsUI_Private_PullToRefresh_mvc_view, {
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
},
onContentPull$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/PullToRefresh OnContentPull");
return controller.actionHandler_OnPullToRefreshTrigger$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "15",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content",
visible: true,
_idProps: {
service: idService,
name: "ContentWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
role: "main"
},
style: "main-content ThemeGrid_Container",
visible: true,
_idProps: {
service: idService,
name: "MainContentWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "content-middle",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
role: "contentinfo",
className: "content-bottom"
},
tag: "footer",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.bottom,
style: "footer ph",
_idProps: {
service: idService,
name: "Bottom"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "offline-data-sync",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(SuperappLogin_Common_OfflineDataSyncEvents_mvc_view, {
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
},
onSyncComplete$Action: function (syncUnitIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/OfflineDataSyncEvents OnSyncComplete");
return controller.actionHandler_OnSyncCompleteTrigger$Action(syncUnitIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onSyncError$Action: function (syncUnitIn, errorMessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/OfflineDataSyncEvents OnSyncError");
return controller.actionHandler_OnSyncErrorTrigger$Action(syncUnitIn, errorMessageIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onSyncStart$Action: function (syncUnitIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/OfflineDataSyncEvents OnSyncStart");
return controller.actionHandler_OnSyncStartTrigger$Action(syncUnitIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "22",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))));
        }
    }

    return View;
});
define("SuperappLogin.Common.Layout.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.Layout.mvc$debugger", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$SkipToContent", "OutSystemsUI.controller$LayoutDestroy"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIModel, OutSystemsUIController, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_Layout_mvc_Debugger) {
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
get _actionHandler_OnSyncCompleteTrigger$Action() {if(!(this.hasOwnProperty("__actionHandler_OnSyncCompleteTrigger$Action"))) {
this.__actionHandler_OnSyncCompleteTrigger$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("ActionHandler_OnSyncCompleteTrigger", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnSyncCompleteTrigger");
span.setAttribute("outsystems.function.key", "01221d4e-aadc-4762-b47b-148423b59952");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("ActionHandler_OnSyncCompleteTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.Common.Layout.ActionHandler_OnSyncCompleteTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:Th0iAdyqYke0exSEI7WZUg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.Th0iAdyqYke0exSEI7WZUg:eunz49Zr4oxMgskuTTHrFw", "SuperappLogin", "ActionHandler_OnSyncCompleteTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:zdEEGoFyh0O0X8sSFFssZg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:9+eATscBcUGq9JDrZ017eQ", callContext.id);
// Trigger Event: OnSyncComplete
return controller.onSyncComplete$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:jyVw_v_sgU6hJbgHkIPKnA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:Th0iAdyqYke0exSEI7WZUg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:Th0iAdyqYke0exSEI7WZUg", callContext.id);
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

return this.__actionHandler_OnSyncCompleteTrigger$Action;
}set _actionHandler_OnSyncCompleteTrigger$Action(value) {this.__actionHandler_OnSyncCompleteTrigger$Action = value;
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
span.setAttribute("outsystems.function.key", "2b522baa-6664-49f3-b0c7-18d7eddfdae8");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var addFaviconVar = new OS.DataTypes.VariableHolder();
var setLangVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.addFaviconVar = addFaviconVar;
varBag.setLangVar = setLangVar;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:qitSK2Rm80mwxxjX7d_a6A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.qitSK2Rm80mwxxjX7d_a6A:sEeZ7KqZz6slFVy4VnTX7g", "SuperappLogin", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:tTNoJzHZMUyM8i60bD0qAw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:1atQWSYmeU60xXiAq6mv6Q", callContext.id);
// Execute Action: LayoutReady
model.flush();
return OutSystemsUIController.default.layoutReady$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:wDcmb05rYkuaOoOIn71Qmg", callContext.id);
// Execute Action: SetLang
setLangVar.value = OutSystemsUIController.default.setLang$Action("", callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:mzLAB3gQz0WxRS4rcv7eXA", callContext.id);
// Execute Action: AddFavicon
addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("favicon.png", callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:8Vk2KE_oUUmyiqZsqOuOlg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:qitSK2Rm80mwxxjX7d_a6A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:qitSK2Rm80mwxxjX7d_a6A", callContext.id);
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

get _actionHandler_OnPullToRefreshTrigger$Action() {if(!(this.hasOwnProperty("__actionHandler_OnPullToRefreshTrigger$Action"))) {
this.__actionHandler_OnPullToRefreshTrigger$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("ActionHandler_OnPullToRefreshTrigger", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnPullToRefreshTrigger");
span.setAttribute("outsystems.function.key", "5dd47e77-acbd-4e8f-9bc5-830c316a6b3a");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("ActionHandler_OnPullToRefreshTrigger");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:d37UXb2sj06bxYMMMWprOg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.d37UXb2sj06bxYMMMWprOg:ZXVij4oqSupuSyAmH_KChA", "SuperappLogin", "ActionHandler_OnPullToRefreshTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:kERdD8LDgE+J23uvzpqMVg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:3MkhZPZSUUKMdCUHdSKEZw", callContext.id);
// Trigger Event: OnPullToRefresh
return controller.onPullToRefresh$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Qs_5c_iidE+Fy49opuoRcA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:d37UXb2sj06bxYMMMWprOg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:d37UXb2sj06bxYMMMWprOg", callContext.id);
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

return this.__actionHandler_OnPullToRefreshTrigger$Action;
}set _actionHandler_OnPullToRefreshTrigger$Action(value) {this.__actionHandler_OnPullToRefreshTrigger$Action = value;
}

get _actionHandler_OnSyncErrorTrigger$Action() {if(!(this.hasOwnProperty("__actionHandler_OnSyncErrorTrigger$Action"))) {
this.__actionHandler_OnSyncErrorTrigger$Action = function (syncUnitIn, errorMessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("ActionHandler_OnSyncErrorTrigger", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnSyncErrorTrigger");
span.setAttribute("outsystems.function.key", "604ed767-4191-47b8-81fb-50d2bb607974");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("ActionHandler_OnSyncErrorTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.Common.Layout.ActionHandler_OnSyncErrorTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:Z9dOYJFBuEeB+1DSu2B5dA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.Z9dOYJFBuEeB+1DSu2B5dA:O9AlNDbr+7ebcFopwEHtbA", "SuperappLogin", "ActionHandler_OnSyncErrorTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:bpdSPKfwc06uAGEZDNYGeQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:8A1YH1U13E+ZfPzwwlPUag", callContext.id);
// Trigger Event: OnSyncError
return controller.onSyncError$Action(vars.value.syncUnitInLocal, vars.value.errorMessageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:WMtEHNdfBECdT6zsjwRFqA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:Z9dOYJFBuEeB+1DSu2B5dA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:Z9dOYJFBuEeB+1DSu2B5dA", callContext.id);
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

return this.__actionHandler_OnSyncErrorTrigger$Action;
}set _actionHandler_OnSyncErrorTrigger$Action(value) {this.__actionHandler_OnSyncErrorTrigger$Action = value;
}

get _actionHandler_OnSyncStartTrigger$Action() {if(!(this.hasOwnProperty("__actionHandler_OnSyncStartTrigger$Action"))) {
this.__actionHandler_OnSyncStartTrigger$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("ActionHandler_OnSyncStartTrigger", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnSyncStartTrigger");
span.setAttribute("outsystems.function.key", "6d5a41c6-f562-4c51-93f1-f9bbb8a9a039");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("ActionHandler_OnSyncStartTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.Common.Layout.ActionHandler_OnSyncStartTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:xkFabWL1UUyT8fm7uKmgOQ:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.xkFabWL1UUyT8fm7uKmgOQ:GS0A_K_ODlU6vba9Vbituw", "SuperappLogin", "ActionHandler_OnSyncStartTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:kmWxeX59vkSpWn5AZqMLwQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:cvW+l1AVnUSssp+DnbaqdQ", callContext.id);
// Trigger Event: OnSyncStart
return controller.onSyncStart$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Wmo6YvJsGk+YHJkCLYY8gw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:xkFabWL1UUyT8fm7uKmgOQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:xkFabWL1UUyT8fm7uKmgOQ", callContext.id);
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

return this.__actionHandler_OnSyncStartTrigger$Action;
}set _actionHandler_OnSyncStartTrigger$Action(value) {this.__actionHandler_OnSyncStartTrigger$Action = value;
}

get _skipToContentOnClick$Action() {if(!(this.hasOwnProperty("__skipToContentOnClick$Action"))) {
this.__skipToContentOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("SkipToContentOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "SkipToContentOnClick");
span.setAttribute("outsystems.function.key", "9657ab1e-0925-4d09-a157-47bd67808483");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("SkipToContentOnClick");
callContext = controller.callContext(callContext);
var skipToContentVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.skipToContentVar = skipToContentVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:HqtXliUJCU2hV0e9Z4CEgw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.HqtXliUJCU2hV0e9Z4CEgw:2IJqvFTvG4KY0wJYjSElmA", "SuperappLogin", "SkipToContentOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:k6mkyv5TE0m24MLBDtmf7A", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:BGOYVEyzeEul1cG8uoW7XA", callContext.id);
// Execute Action: SkipToContent
skipToContentVar.value = OutSystemsUIController.default.skipToContent$Action(idService.getId("MainContentWrapper"), callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:ZWG2kjwUSUCx8XuyRCDYLQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:HqtXliUJCU2hV0e9Z4CEgw", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__skipToContentOnClick$Action;
}set _skipToContentOnClick$Action(value) {this.__skipToContentOnClick$Action = value;
}

get _onDestroy$Action() {if(!(this.hasOwnProperty("__onDestroy$Action"))) {
this.__onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnDestroy", function (span) {
if(span) {
span.setAttribute("code.function", "OnDestroy");
span.setAttribute("outsystems.function.key", "bbd6cce6-bfb4-43eb-825b-6dd92d244d67");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:5szWu7S_60OCW23ZLSRNZw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg/ClientActions.5szWu7S_60OCW23ZLSRNZw:Cgr0IJAmWW4iKLTGejrxBg", "SuperappLogin", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:79Nx7455BkiwR9ASp9JXhQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:+wSKJn0qd0ChBEET6+ZIFA", callContext.id);
// Execute Action: LayoutDestroy
OutSystemsUIController.default.layoutDestroy$Action(callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Hd0KFTL8Z0KsJfre7Q5KCw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:5szWu7S_60OCW23ZLSRNZw", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onDestroy$Action;
}set _onDestroy$Action(value) {this.__onDestroy$Action = value;
}


actionHandler_OnSyncCompleteTrigger$Action(syncUnitIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ActionHandler_OnSyncCompleteTrigger__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnSyncCompleteTrigger");
span.setAttribute("outsystems.function.key", "01221d4e-aadc-4762-b47b-148423b59952");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncCompleteTrigger$Action, callContext, syncUnitIn);
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
span.setAttribute("outsystems.function.key", "2b522baa-6664-49f3-b0c7-18d7eddfdae8");
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

actionHandler_OnPullToRefreshTrigger$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ActionHandler_OnPullToRefreshTrigger__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnPullToRefreshTrigger");
span.setAttribute("outsystems.function.key", "5dd47e77-acbd-4e8f-9bc5-830c316a6b3a");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._actionHandler_OnPullToRefreshTrigger$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

actionHandler_OnSyncErrorTrigger$Action(syncUnitIn, errorMessageIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ActionHandler_OnSyncErrorTrigger__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnSyncErrorTrigger");
span.setAttribute("outsystems.function.key", "604ed767-4191-47b8-81fb-50d2bb607974");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncErrorTrigger$Action, callContext, syncUnitIn, errorMessageIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

actionHandler_OnSyncStartTrigger$Action(syncUnitIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ActionHandler_OnSyncStartTrigger__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnSyncStartTrigger");
span.setAttribute("outsystems.function.key", "6d5a41c6-f562-4c51-93f1-f9bbb8a9a039");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncStartTrigger$Action, callContext, syncUnitIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

skipToContentOnClick$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SkipToContentOnClick__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SkipToContentOnClick");
span.setAttribute("outsystems.function.key", "9657ab1e-0925-4d09-a157-47bd67808483");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._skipToContentOnClick$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onDestroy$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnDestroy__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnDestroy");
span.setAttribute("outsystems.function.key", "bbd6cce6-bfb4-43eb-825b-6dd92d244d67");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

get onPullToRefresh$Action() {if(!(this.hasOwnProperty("_onPullToRefresh$Action"))) {
this._onPullToRefresh$Action = function () {
return Promise.resolve();
};
}

return this._onPullToRefresh$Action;
}set onPullToRefresh$Action(value) {this._onPullToRefresh$Action = value;
}

get onSyncComplete$Action() {if(!(this.hasOwnProperty("_onSyncComplete$Action"))) {
this._onSyncComplete$Action = function () {
return Promise.resolve();
};
}

return this._onSyncComplete$Action;
}set onSyncComplete$Action(value) {this._onSyncComplete$Action = value;
}

get onSyncError$Action() {if(!(this.hasOwnProperty("_onSyncError$Action"))) {
this._onSyncError$Action = function () {
return Promise.resolve();
};
}

return this._onSyncError$Action;
}set onSyncError$Action(value) {this._onSyncError$Action = value;
}

get onSyncStart$Action() {if(!(this.hasOwnProperty("_onSyncStart$Action"))) {
this._onSyncStart$Action = function () {
return Promise.resolve();
};
}

return this._onSyncStart$Action;
}set onSyncStart$Action(value) {this._onSyncStart$Action = value;
}


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:nOLMJqktSVokKnWDq+B1LQ", "SuperappLogin", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:A3CPaT75a0KxzHXTIsSbxg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.A3CPaT75a0KxzHXTIsSbxg:8hipVKcvLtSvqRUsSa1qBQ", "SuperappLogin", "Layout", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:A3CPaT75a0KxzHXTIsSbxg", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Layout On Ready");
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
this._onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/Layout On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
Controller.registerVariableGroupType("SuperappLogin.Common.Layout.ActionHandler_OnSyncCompleteTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("SuperappLogin.Common.Layout.ActionHandler_OnSyncErrorTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("SuperappLogin.Common.Layout.ActionHandler_OnSyncStartTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, SuperappLoginLanguageResources);
});


define("SuperappLogin.Common.Layout.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"6U1yhr2j0U2w8ng_SFxDoA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mzLAB3gQz0WxRS4rcv7eXA": {
getter: function (varBag, idService) {
return varBag.addFaviconVar.value;
}
},
"wDcmb05rYkuaOoOIn71Qmg": {
getter: function (varBag, idService) {
return varBag.setLangVar.value;
}
},
"BJST1JvzxU2jhqze0URhdQ": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fOTuEctLG0+pt9Ow99wVWw": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VRQDHNiYHUisBgO_ngeYVg": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BGOYVEyzeEul1cG8uoW7XA": {
getter: function (varBag, idService) {
return varBag.skipToContentVar.value;
}
},
"Kxz2dJRhBki6BBp0xkKFqA": {
getter: function (varBag, idService) {
return varBag.model.variables.usePullToRefreshIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ZOqgk97lx0uZhfBUAy1KoQ": {
getter: function (varBag, idService) {
return varBag.model.variables.hideHeaderOnScrollIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"QO21XPxfVUi8vJ3W5LNJow": {
getter: function (varBag, idService) {
return varBag.model.variables.menuBehaviorIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sW+LuYpNqU24PvPdLwoxeg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"t4WcP87NeU2omTCJHi88rg": {
getter: function (varBag, idService) {
return varBag.model.variables.enableAccessibilityFeaturesIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"BC7au_eWnEiKn8y5xt8TzQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LayoutWrapper"));
})(varBag.model, idService);
}
},
"as5JQcIufUKZv_PtqXJgYw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Navigation"));
})(varBag.model, idService);
}
},
"JnwU6UZneUe2sWedGD3d0w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Header"));
})(varBag.model, idService);
}
},
"jNymkgJVaU6dCOgTk7ar6A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"ji+CbMqLAE+fpFT1Dpmfhw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"EWjBtq0YjEK9uGPUfqIm7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"ognXnBhykkK9K9WlNZ_90Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"fcwHr6W7FU2mn3EbbmkcRg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PullToRefresh"));
})(varBag.model, idService);
}
},
"XhsFXJEIQkeADDaTVOiSyw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentWrapper"));
})(varBag.model, idService);
}
},
"+EwZgPtEY0i+Cfs+_SvF+A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MainContentWrapper"));
})(varBag.model, idService);
}
},
"JZ1VMVXA2EupwwQKlTjsuQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"kuTy7XWhtEOOSkRNTFearg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

