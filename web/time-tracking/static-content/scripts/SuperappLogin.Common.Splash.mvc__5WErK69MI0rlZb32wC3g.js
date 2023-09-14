define("SuperappLogin.Common.Splash.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "OutSystemsUI.model", "SuperappLogin.Common.LayoutBlank.mvc$model", "OutSystemsUI.Interaction.Animate.mvc$model", "OutSystemsUI.Numbers.ProgressBar.mvc$model", "OutSystemsUI.Private.ApplicationLoadEvents.mvc$model", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (OutSystems, SuperappLoginModel, OutSystemsUIModel, SuperappLogin_Common_LayoutBlank_mvcModel, OutSystemsUI_Interaction_Animate_mvcModel, OutSystemsUI_Numbers_ProgressBar_mvcModel, OutSystemsUI_Private_ApplicationLoadEvents_mvcModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Percentage", "percentageVar", "Percentage", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
percentageVar: OS.DataTypes.ImmutableBase.getData(str)
}));
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
Model._hasValidationWidgetsValue = (((SuperappLogin_Common_LayoutBlank_mvcModel.hasValidationWidgets || OutSystemsUI_Interaction_Animate_mvcModel.hasValidationWidgets) || OutSystemsUI_Numbers_ProgressBar_mvcModel.hasValidationWidgets) || OutSystemsUI_Private_ApplicationLoadEvents_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("SuperappLogin.Common.Splash.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.model", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.Splash.mvc$model", "SuperappLogin.Common.Splash.mvc$controller", "SuperappLogin.clientVariables", "SuperappLogin.Common.LayoutBlank.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI.Interaction.Animate.mvc$view", "OutSystemsUI.Numbers.ProgressBar.mvc$view", "OutSystemsUI.Private.ApplicationLoadEvents.mvc$view", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIModel, React, OSView, SuperappLogin_Common_Splash_mvc_model, SuperappLogin_Common_Splash_mvc_controller, SuperappLoginClientVariables, SuperappLogin_Common_LayoutBlank_mvc_view, OSWidgets, OutSystemsUI_Interaction_Animate_mvc_view, OutSystemsUI_Numbers_ProgressBar_mvc_view, OutSystemsUI_Private_ApplicationLoadEvents_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "Common.Splash"; }

        static getAttributes() { return {
codeFunction: "Splash",
functionKey: "4ed4998a-de3b-4ba8-a7cb-4063cf917330",
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
            return [SuperappLogin_Common_LayoutBlank_mvc_view, OutSystemsUI_Interaction_Animate_mvc_view, OutSystemsUI_Numbers_ProgressBar_mvc_view, OutSystemsUI_Private_ApplicationLoadEvents_mvc_view];
        }

        get modelFactory() {
            return SuperappLogin_Common_Splash_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_Splash_mvc_controller;
        }

        get title() {
            

            return "Splash";
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
style: "background-neutral-0 full-height display-flex center flex-direction-column",
visible: true,
_idProps: {
service: idService,
name: "SplashContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Interaction_Animate_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Speed: SuperappLoginModel.staticEntities.speed.slow,
AnimationType: SuperappLoginModel.staticEntities.animationType.topToBottom
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
name: "Image",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
alt: "",
style: "height: 96px;"
},
gridProperties: {
width: "96px"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/SuperappLogin.Logo.png"),
style: "border-radius-soft shadow-s",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
}), React.createElement(OutSystemsUI_Interaction_Animate_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
AnimationType: SuperappLoginModel.staticEntities.animationType.topToBottom,
Speed: SuperappLoginModel.staticEntities.speed.slow
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
name: "Title",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "margin-top-m heading5 text-neutral-8"
},
tag: "h1",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("c8oL7DnUgE2NVkuESgLWWg.Value"), function () {
return OS.BuiltinFunctions.getAppName();
}),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
}), React.createElement(OutSystemsUI_Interaction_Animate_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
AnimationType: SuperappLoginModel.staticEntities.animationType.bottomToTop,
Speed: SuperappLoginModel.staticEntities.speed.slow
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
name: "Progress",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline",
width: "200px"
},
style: "margin-top-xxl",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_Numbers_ProgressBar_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
ProgressColor: SuperappLoginModel.staticEntities.color.primary,
OptionalConfigs: model.getCachedValue(idService.getId("ZmOiOkrbYEmj_0o2__CJGA.OptionalConfigs"), function () {
return function () {
var rec = new OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure();
rec.animateInitialProgressAttr = false;
return rec;
}();
}),
Thickness: 2,
Progress: model.variables.percentageVar
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
uuid: "9",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: PlaceholderContent.Empty
},
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.percentageVar)]
})), React.createElement(OutSystemsUI_Private_ApplicationLoadEvents_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
MinimumDisplayTimeMs: 1500
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onUpgradeProgress$Action: function (completedIn, totalIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/ApplicationLoadEvents OnUpgradeProgress");
controller.onUpgradeProgress$Action(completedIn, totalIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onLoadComplete$Action: function (redirectURLIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/ApplicationLoadEvents OnLoadComplete");
controller.onLoadComplete$Action(redirectURLIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "10",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.percentageVar)]
}));
        }
    }

    return View;
});
define("SuperappLogin.Common.Splash.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.model", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.Splash.mvc$debugger", "SuperappLogin.Common.controller", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIModel, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_Splash_mvc_Debugger, SuperappLogin_CommonController) {
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
get _onUpgradeProgress$Action() {if(!(this.hasOwnProperty("__onUpgradeProgress$Action"))) {
this.__onUpgradeProgress$Action = function (completedIn, totalIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnUpgradeProgress", function (span) {
if(span) {
span.setAttribute("code.function", "OnUpgradeProgress");
span.setAttribute("outsystems.function.key", "36841dad-cfce-4183-8ba5-37a2d1fc2170");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnUpgradeProgress");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.Common.Splash.OnUpgradeProgress$vars"))());
vars.value.completedInLocal = completedIn;
vars.value.totalInLocal = totalIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:rR2ENs7Pg0GLpTei0fwhcA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ipnUTjveqEuny0Bjz5FzMA/ClientActions.rR2ENs7Pg0GLpTei0fwhcA:nks4wwT+UaVALgYY+_vyyw", "SuperappLogin", "OnUpgradeProgress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:0oDk3NNBnECd1uLh8G5eyg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:AHsYrAg7ZUiNAqg_UH0eVw", callContext.id);
// Percentage = Completed / Total * 150
model.variables.percentageVar = OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal(vars.value.completedInLocal).div(OS.BuiltinFunctions.integerToDecimal(vars.value.totalInLocal)).times(OS.BuiltinFunctions.integerToDecimal(150))));
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:vmEjnVwmqEuaVsYGtt1z5w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:rR2ENs7Pg0GLpTei0fwhcA", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onUpgradeProgress$Action;
}set _onUpgradeProgress$Action(value) {this.__onUpgradeProgress$Action = value;
}

get _onLoadComplete$Action() {if(!(this.hasOwnProperty("__onLoadComplete$Action"))) {
this.__onLoadComplete$Action = function (redirectURLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnLoadComplete", function (span) {
if(span) {
span.setAttribute("code.function", "OnLoadComplete");
span.setAttribute("outsystems.function.key", "85a60f52-370e-4a42-9976-1703a740310c");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnLoadComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.Common.Splash.OnLoadComplete$vars"))());
vars.value.redirectURLInLocal = redirectURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:Ug+mhQ43QkqZdhcDp0AxDA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ipnUTjveqEuny0Bjz5FzMA/ClientActions.Ug+mhQ43QkqZdhcDp0AxDA:yewknxWCiknqf4d7OEJ_Gw", "SuperappLogin", "OnLoadComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:dd56lYn0Y0SdP39aUcSt0A", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:1cPC+qsOzEyHMJToZiD5vg", callContext.id);
// Destination: /SuperappLogin/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(vars.value.redirectURLInLocal, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:Ug+mhQ43QkqZdhcDp0AxDA", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onLoadComplete$Action;
}set _onLoadComplete$Action(value) {this.__onLoadComplete$Action = value;
}


onUpgradeProgress$Action(completedIn, totalIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnUpgradeProgress__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnUpgradeProgress");
span.setAttribute("outsystems.function.key", "36841dad-cfce-4183-8ba5-37a2d1fc2170");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onUpgradeProgress$Action, callContext, completedIn, totalIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onLoadComplete$Action(redirectURLIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnLoadComplete__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnLoadComplete");
span.setAttribute("outsystems.function.key", "85a60f52-370e-4a42-9976-1703a740310c");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onLoadComplete$Action, callContext, redirectURLIn);
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
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:ipnUTjveqEuny0Bjz5FzMA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ipnUTjveqEuny0Bjz5FzMA:sdt15JXnxk1S8qIYaY9g5A", "SuperappLogin", "Splash", "NRNodes.WebScreen", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:ipnUTjveqEuny0Bjz5FzMA", callContext.id);
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
Controller.registerVariableGroupType("SuperappLogin.Common.Splash.OnUpgradeProgress$vars", [{
name: "Completed",
attrName: "completedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Total",
attrName: "totalInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("SuperappLogin.Common.Splash.OnLoadComplete$vars", [{
name: "RedirectURL",
attrName: "redirectURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, SuperappLoginLanguageResources);
});


define("SuperappLogin.Common.Splash.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"JZ7+KfE+mUujF7HDd+gyfg": {
getter: function (varBag, idService) {
return varBag.vars.value.completedInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"5n4ExuaQfU+HkpLhKS+dig": {
getter: function (varBag, idService) {
return varBag.vars.value.totalInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"_DoUNW2vbkO0pvK0QnFdXw": {
getter: function (varBag, idService) {
return varBag.vars.value.redirectURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7oHlsMajaky6MBEZq3v6lQ": {
getter: function (varBag, idService) {
return varBag.model.variables.percentageVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"PK3bas26mkW8Qw_TcC3_kA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"zOnzlCo8wUimst8X1bF+EA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SplashContent"));
})(varBag.model, idService);
}
},
"frXMKnjUPEGGcK47V9Txfg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Image"));
})(varBag.model, idService);
}
},
"m_MYJ5qYb0m4lv+QMdR0uw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"yuWEWAitNEWcrmpQSV4pKQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"uHo1HAy7e02uOIadj2gYPg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"bEFUQmiShkK7VAF6zvxTOg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Progress"));
})(varBag.model, idService);
}
},
"U4Oenl1O7UiwyDo1cW7AuQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ekghPe5t+U+h1VF9YJZ1kQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

