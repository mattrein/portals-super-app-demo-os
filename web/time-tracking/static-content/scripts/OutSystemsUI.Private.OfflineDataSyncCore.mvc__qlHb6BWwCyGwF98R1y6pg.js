define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.Private.NetworkStatusChanged.mvc$model", "OutSystemsUI.controller$StartOfflineDataSync", "OutSystemsUI.controller$EndOfflineDataSync", "OutSystemsUI.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_Private_NetworkStatusChanged_mvcModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("InstanceToken", "instanceTokenVar", "InstanceToken", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new VariablesRecord(new VariablesRecord.RecordClass({
instanceTokenVar: OS.DataTypes.ImmutableBase.getData(str)
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
Model._hasValidationWidgetsValue = OutSystemsUI_Private_NetworkStatusChanged_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$model", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller", "OutSystemsUI.Private.NetworkStatusChanged.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI.controller$StartOfflineDataSync", "OutSystemsUI.controller$EndOfflineDataSync", "OutSystemsUI.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Private_OfflineDataSyncCore_mvc_model, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller, OutSystemsUI_Private_NetworkStatusChanged_mvc_view, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Private.OfflineDataSyncCore"; }

        static getAttributes() { return {
codeFunction: "OfflineDataSyncCore",
functionKey: "f926b4ec-9a60-481c-bb0d-a03dda97f3df",
functionOwnerName: "OutSystemsUI",
functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return ["scripts/OutSystemsUI.OfflineDataSync.js", "scripts/OutSystemsUI.OutSystemsUI.js"];
        }

        static getBlocks() {
            return [OutSystemsUI_Private_NetworkStatusChanged_mvc_view];
        }

        get modelFactory() {
            return OutSystemsUI_Private_OfflineDataSyncCore_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OutSystemsUI_Private_NetworkStatusChanged_mvc_view, {
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
networkStatusChanged$Action: function (isOnlineIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/NetworkStatusChanged NetworkStatusChanged");
controller.onNetworkStatusChanged$Action(isOnlineIn, controller.callContext(eventHandlerContext));
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}));
        }
    }

    return View;
});
define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$debugger", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnResume.GetSyncOnResumeJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnDestroy.UnregisterAPIJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.Init.RegisterAPIJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncStartEventJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncErrorEventOfflineJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.SuspendSyncJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnNetworkStatusChanged.GetSyncOnOnlineJS", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnInitialize.InitJS", "OutSystemsUI.controller$StartOfflineDataSync", "OutSystemsUI.controller$EndOfflineDataSync", "OutSystemsUI.controller$GetNetworkStatus"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Private_OfflineDataSyncCore_mvc_TranslationsResources, OutSystemsUI_Private_OfflineDataSyncCore_mvc_Debugger, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnResume_GetSyncOnResumeJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnDestroy_UnregisterAPIJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_Init_RegisterAPIJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_TriggerSyncStartEventJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_TriggerSyncErrorEventOfflineJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_SuspendSyncJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnNetworkStatusChanged_GetSyncOnOnlineJS, OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnInitialize_InitJS) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Private_OfflineDataSyncCore_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {
syncWrapper$Action: function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(controller._syncWrapper$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "SyncWrapper");
},
onResume$Action: function () {
return controller.executeActionInsideJSNode(controller._onResume$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnResume");
},
triggerOnSyncStart$Action: function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(controller._triggerOnSyncStart$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnSyncStart");
},
triggerOnSyncComplete$Action: function (syncUnitIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
return controller.executeActionInsideJSNode(controller._triggerOnSyncComplete$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnSyncComplete");
},
triggerOnSyncError$Action: function (syncUnitIn, errorMessageIn) {
syncUnitIn = (syncUnitIn === undefined) ? "" : syncUnitIn;
errorMessageIn = (errorMessageIn === undefined) ? "" : errorMessageIn;
return controller.executeActionInsideJSNode(controller._triggerOnSyncError$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(syncUnitIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(errorMessageIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnSyncError");
},
init$Action: function () {
return controller.executeActionInsideJSNode(controller._init$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Init");
}
};
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
get _onResume$Action() {if(!(this.hasOwnProperty("__onResume$Action"))) {
this.__onResume$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnResume", function (span) {
if(span) {
span.setAttribute("code.function", "OnResume");
span.setAttribute("outsystems.function.key", "14293896-871c-4058-aa3d-af51f72aa5d3");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnResume");
callContext = controller.callContext(callContext);
var getSyncOnResumeJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getSyncOnResumeJSResult = getSyncOnResumeJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ljgpFByHWECqPa9R9yql0w:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.ljgpFByHWECqPa9R9yql0w:77fliDt7OlRHriTcREGFAg", "OutSystemsUI", "OnResume", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qbvmMcNyB0WqI551Qzj+yg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pNqidDqDcUOD1FKsjDtBzA", callContext.id);
getSyncOnResumeJSResult.value = OS.Logger.startActiveSpan("GetSyncOnResume", function (span) {
if(span) {
span.setAttribute("code.function", "GetSyncOnResume");
span.setAttribute("outsystems.function.key", "74a2daa4-833a-4371-83d4-52ac8c3b41cc");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnResume_GetSyncOnResumeJS, "GetSyncOnResume", "OnResume", {
SyncOnResume: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.OnResume$getSyncOnResumeJSResult"))();
jsNodeResult.syncOnResumeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SyncOnResume, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// SyncOnResume?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:z+7gvvh69EaZV3wCcM4FAg", callContext.id) && getSyncOnResumeJSResult.value.syncOnResumeOut)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iUPPGk7dgUqwZLFuobIXdg", callContext.id);
// Execute Action: StartOfflineDataSync
OutSystemsUIController.default.startOfflineDataSync$Action("", false, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L8XSZCR4UEaYUXgjmOcpOw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:L8XSZCR4UEaYUXgjmOcpOw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ljgpFByHWECqPa9R9yql0w", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onResume$Action;
}set _onResume$Action(value) {this.__onResume$Action = value;
}

get _triggerOnSyncComplete$Action() {if(!(this.hasOwnProperty("__triggerOnSyncComplete$Action"))) {
this.__triggerOnSyncComplete$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("TriggerOnSyncComplete", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOnSyncComplete");
span.setAttribute("outsystems.function.key", "2b7c13c9-b832-4a5c-819e-433ee4c2e7c2");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("TriggerOnSyncComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.TriggerOnSyncComplete$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:yRN8KzK4XEqBnkM+5MLnwg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.yRN8KzK4XEqBnkM+5MLnwg:3ugJcdYsIiyGvXTTT06k0Q", "OutSystemsUI", "TriggerOnSyncComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0J2kh2tYf0KhazdRWlvFJQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:fgGs9UHBPk+BhtJ2QNvKHQ", callContext.id);
// Trigger Event: OnSyncComplete
return controller.onSyncComplete$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ghkHnVF1KUmi62pA4zx76w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:yRN8KzK4XEqBnkM+5MLnwg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:yRN8KzK4XEqBnkM+5MLnwg", callContext.id);
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

return this.__triggerOnSyncComplete$Action;
}set _triggerOnSyncComplete$Action(value) {this.__triggerOnSyncComplete$Action = value;
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
span.setAttribute("outsystems.function.key", "6748572e-bbba-4d38-9f70-985703470710");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:LldIZ7q7OE2fcJhXA0cHEA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.LldIZ7q7OE2fcJhXA0cHEA:_Zs8eg0E6UptfL1XQUDt5w", "OutSystemsUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WdXaUSZmeEmt4V1qVRSXtA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iqwLbSzl40aQOxA4jncutw", callContext.id);
OS.Logger.startActiveSpan("UnregisterAPI", function (span) {
if(span) {
span.setAttribute("code.function", "UnregisterAPI");
span.setAttribute("outsystems.function.key", "6d0bac8a-e52c-46e3-903b-10388e772eb7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnDestroy_UnregisterAPIJS, "UnregisterAPI", "OnDestroy", {
Token: OS.DataConversion.JSNodeParamConverter.to(model.variables.instanceTokenVar, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v+OAzsz38kyYfMUH9yKtyQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:LldIZ7q7OE2fcJhXA0cHEA", callContext.id);
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

get _init$Action() {if(!(this.hasOwnProperty("__init$Action"))) {
this.__init$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("Init", function (span) {
if(span) {
span.setAttribute("code.function", "Init");
span.setAttribute("outsystems.function.key", "8a8d0761-ccc0-4066-985e-6bde68f0e337");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("Init");
callContext = controller.callContext(callContext);
var registerAPIJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.registerAPIJSResult = registerAPIJSResult;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:YQeNisDMZkCYXmveaPDjNw:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.YQeNisDMZkCYXmveaPDjNw:q5JmWi9G_GI_5aoG37zIqg", "OutSystemsUI", "Init", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:I7EhrR9vYk+lhuhC8Xk5Og", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NnpaUkoy60OK58LSxM+fvA", callContext.id);
registerAPIJSResult.value = OS.Logger.startActiveSpan("RegisterAPI", function (span) {
if(span) {
span.setAttribute("code.function", "RegisterAPI");
span.setAttribute("outsystems.function.key", "525a7a36-324a-43eb-8ae7-c2d2c4cf9fbc");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_Init_RegisterAPIJS, "RegisterAPI", "Init", {
Token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.Init$registerAPIJSResult"))();
jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Token, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
SyncWrapper: controller.clientActionProxies.syncWrapper$Action,
OnResume: controller.clientActionProxies.onResume$Action,
TriggerOnSyncStart: controller.clientActionProxies.triggerOnSyncStart$Action,
TriggerOnSyncComplete: controller.clientActionProxies.triggerOnSyncComplete$Action,
TriggerOnSyncError: controller.clientActionProxies.triggerOnSyncError$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:si3bn5IIjUOyjpjLABqtQg", callContext.id);
// InstanceToken = RegisterAPI.Token
model.variables.instanceTokenVar = registerAPIJSResult.value.tokenOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zLGZWa5qI0yXj1Y3OmiOMg", callContext.id);
// Trigger Event: OnConfigure
return controller.onConfigure$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aAdzLFmad0ykuG_eSF9kSQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:YQeNisDMZkCYXmveaPDjNw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:YQeNisDMZkCYXmveaPDjNw", callContext.id);
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

return this.__init$Action;
}set _init$Action(value) {this.__init$Action = value;
}

get _syncWrapper$Action() {if(!(this.hasOwnProperty("__syncWrapper$Action"))) {
this.__syncWrapper$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("SyncWrapper", function (span) {
if(span) {
span.setAttribute("code.function", "SyncWrapper");
span.setAttribute("outsystems.function.key", "ca6d52eb-44a7-4ce2-90de-8b8c817d6190");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("SyncWrapper");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.SyncWrapper$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getNetworkStatusVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.securityExceptionVar = securityExceptionVar;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getNetworkStatusVar = getNetworkStatusVar;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:61JtyqdE4kyQ3ouMgX1hkA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.61JtyqdE4kyQ3ouMgX1hkA:c2I1nh6gSqJt4CRU8cTNRw", "OutSystemsUI", "SyncWrapper", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:t9gFCoSUGE+kI82pQA3a1w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2H7JMqJDYky09Bv7b+e+pg", callContext.id);
OS.Logger.startActiveSpan("TriggerSyncStartEvent", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerSyncStartEvent");
span.setAttribute("outsystems.function.key", "32c97ed8-43a2-4c62-b4f4-1bfb6fe7bea6");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_TriggerSyncStartEventJS, "TriggerSyncStartEvent", "SyncWrapper", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:_rNVoy5gskirfHpTddoezQ", callContext.id);
// Execute Action: GetNetworkStatus
getNetworkStatusVar.value = OutSystemsUIController.default.getNetworkStatus$Action(callContext);

// IsOnline?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:nfaFmKlDNUOiez88ImzkUQ", callContext.id) && getNetworkStatusVar.value.isOnlineOut)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SqlfaOn5fEqwSDNw0ZoocA", callContext.id);
// Trigger Event: OnSync
return controller.onSync$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qn7NXJ1M2UO36Qd1pnFv1w", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9_Iu1tkm8kOEr1KilaACFA", callContext.id);
OS.Logger.startActiveSpan("SuspendSync", function (span) {
if(span) {
span.setAttribute("code.function", "SuspendSync");
span.setAttribute("outsystems.function.key", "d62ef2f7-26d9-43f2-84af-52a295a00214");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_SuspendSyncJS, "SuspendSync", "SyncWrapper", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ovxxnK25wkediVRyRJvj3w", callContext.id);
OS.Logger.startActiveSpan("TriggerSyncErrorEventOffline", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerSyncErrorEventOffline");
span.setAttribute("outsystems.function.key", "9c71fca2-b9ad-47c2-9d89-5472449be3df");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_SyncWrapper_TriggerSyncErrorEventOfflineJS, "TriggerSyncErrorEventOffline", "SyncWrapper", {
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1", "Unable to synchronize data. Device has no network connectivity."), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qn7NXJ1M2UO36Qd1pnFv1w", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.debug("OfflineDataSyncCore.SyncWrapper", OS.Exceptions.getMessage(ex));
// Handle Error: SecurityException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
OS.Logger.error(null, ex, null, null, 1);
securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(securityExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Logger.startActiveSpan("SecurityException", function (span) {
if(span) {
span.setAttribute("code.function", "SecurityException");
span.setAttribute("outsystems.function.key", "353e2e82-2354-47bf-9ade-d68d91aadbcd");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

return OS.Flow.tryFinally(function () {
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gi4+NVQjv0ea3taNkarbzQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:3Pg96F62hUWzkzd_qrSukA", callContext.id);
// Execute Action: EndWithSecurityError
OutSystemsUIController.default.endOfflineDataSync$Action(true, securityExceptionVar.value.exceptionMessageAttr, false, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qn7NXJ1M2UO36Qd1pnFv1w", callContext.id);
return OS.Flow.returnAsync();

});
}, function () {
if(span) {
span.end();
}

});
}, 1);
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex, null, null, 1);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Logger.startActiveSpan("AllExceptions", function (span) {
if(span) {
span.setAttribute("code.function", "AllExceptions");
span.setAttribute("outsystems.function.key", "3619f65a-6be8-4f6b-84f1-070777b99282");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

return OS.Flow.tryFinally(function () {
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WvYZNuhra0+E8QcHd7mSgg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vqdjnHVFc0OqxgTooRemBQ", callContext.id);
// Execute Action: EndWithError
OutSystemsUIController.default.endOfflineDataSync$Action(true, allExceptionsVar.value.exceptionMessageAttr, true, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qn7NXJ1M2UO36Qd1pnFv1w", callContext.id);
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
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:61JtyqdE4kyQ3ouMgX1hkA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:61JtyqdE4kyQ3ouMgX1hkA", callContext.id);
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

return this.__syncWrapper$Action;
}set _syncWrapper$Action(value) {this.__syncWrapper$Action = value;
}

get _triggerOnSyncStart$Action() {if(!(this.hasOwnProperty("__triggerOnSyncStart$Action"))) {
this.__triggerOnSyncStart$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("TriggerOnSyncStart", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOnSyncStart");
span.setAttribute("outsystems.function.key", "cb8d5016-281a-43de-9f28-9329be438a24");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("TriggerOnSyncStart");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.TriggerOnSyncStart$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:FlCNyxoo3kOfKJMpvkOKJA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.FlCNyxoo3kOfKJMpvkOKJA:eGm5xHKweOh6XrRtNRbzSA", "OutSystemsUI", "TriggerOnSyncStart", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FbpO1AzUzE66zg9L23vrvg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:S6IxnFTX4k6_xSaB1SWLYA", callContext.id);
// Trigger Event: OnSyncStart
return controller.onSyncStart$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NVr+d_l7L0Ku37FS4mw_bw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:FlCNyxoo3kOfKJMpvkOKJA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:FlCNyxoo3kOfKJMpvkOKJA", callContext.id);
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

return this.__triggerOnSyncStart$Action;
}set _triggerOnSyncStart$Action(value) {this.__triggerOnSyncStart$Action = value;
}

get _triggerOnSyncError$Action() {if(!(this.hasOwnProperty("__triggerOnSyncError$Action"))) {
this.__triggerOnSyncError$Action = function (syncUnitIn, errorMessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("TriggerOnSyncError", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOnSyncError");
span.setAttribute("outsystems.function.key", "da41dbee-5d6e-459b-8925-760a7b8af7c1");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("TriggerOnSyncError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.TriggerOnSyncError$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:7ttB2m5dm0WJJXYKe4r3wQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.7ttB2m5dm0WJJXYKe4r3wQ:2fOfZ3Ade+yizJ2k3PXDfg", "OutSystemsUI", "TriggerOnSyncError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cYfVxQKmekO5KtHq4bCdbg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zc4widPCeESJmW_hUhOjtw", callContext.id);
// Trigger Event: OnSyncError
return controller.onSyncError$Action(vars.value.syncUnitInLocal, vars.value.errorMessageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bU08AO+g6k6Q3TKAYDt9wA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:7ttB2m5dm0WJJXYKe4r3wQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:7ttB2m5dm0WJJXYKe4r3wQ", callContext.id);
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

return this.__triggerOnSyncError$Action;
}set _triggerOnSyncError$Action(value) {this.__triggerOnSyncError$Action = value;
}

get _onNetworkStatusChanged$Action() {if(!(this.hasOwnProperty("__onNetworkStatusChanged$Action"))) {
this.__onNetworkStatusChanged$Action = function (isOnlineIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnNetworkStatusChanged", function (span) {
if(span) {
span.setAttribute("code.function", "OnNetworkStatusChanged");
span.setAttribute("outsystems.function.key", "e3c84ba7-3587-4d12-b82a-448f02c33f82");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnNetworkStatusChanged");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.OnNetworkStatusChanged$vars"))());
vars.value.isOnlineInLocal = isOnlineIn;
var getSyncOnOnlineJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getSyncOnOnlineJSResult = getSyncOnOnlineJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:p0vI44c1Ek24KkSPAsM_gg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.p0vI44c1Ek24KkSPAsM_gg:rV9+Bm0grWmdIaqLtKAj7A", "OutSystemsUI", "OnNetworkStatusChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:76JVsJw_ME+cWCl_ZQRUEg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:awv5UMOrb0yskStkJUM9jg", callContext.id);
getSyncOnOnlineJSResult.value = OS.Logger.startActiveSpan("GetSyncOnOnline", function (span) {
if(span) {
span.setAttribute("code.function", "GetSyncOnOnline");
span.setAttribute("outsystems.function.key", "50f90b6b-abc3-4c6f-ac91-2b6425433d8e");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnNetworkStatusChanged_GetSyncOnOnlineJS, "GetSyncOnOnline", "OnNetworkStatusChanged", {
SyncOnOnline: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.OnNetworkStatusChanged$getSyncOnOnlineJSResult"))();
jsNodeResult.syncOnOnlineOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SyncOnOnline, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:G8IwyMOhgEOJ6Qnf6+yN6A", callContext.id) && (vars.value.isOnlineInLocal && getSyncOnOnlineJSResult.value.syncOnOnlineOut))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lPVnhBGiWU+eTil6P3jOTw", callContext.id);
// Execute Action: StartOfflineDataSync
OutSystemsUIController.default.startOfflineDataSync$Action("", false, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:F6nymmbXyEWpcAWFS4wEnw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:F6nymmbXyEWpcAWFS4wEnw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:p0vI44c1Ek24KkSPAsM_gg", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onNetworkStatusChanged$Action;
}set _onNetworkStatusChanged$Action(value) {this.__onNetworkStatusChanged$Action = value;
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
span.setAttribute("outsystems.function.key", "e4f71bd8-c160-4dd5-bf3f-f41d5a156bc8");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:2Bv35GDB1U2_P_QdWhVryA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w/ClientActions.2Bv35GDB1U2_P_QdWhVryA:3lPEqYg+VeRvaYqPewZucg", "OutSystemsUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Eii40DOziEe_8dritvMK+w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0aDDvP4lLUyNDZvZBMisrw", callContext.id);
OS.Logger.startActiveSpan("Init", function (span) {
if(span) {
span.setAttribute("code.function", "Init");
span.setAttribute("outsystems.function.key", "bcc3a0d1-25fe-4c2d-8d0d-9bd904c8acaf");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_OfflineDataSyncCore_mvc_controller_OnInitialize_InitJS, "Init", "OnInitialize", null, function ($parameters) {
}, {
Init: controller.clientActionProxies.init$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GjSRPETX60ayqASlB2qVJw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:2Bv35GDB1U2_P_QdWhVryA", callContext.id);
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


onResume$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnResume__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnResume");
span.setAttribute("outsystems.function.key", "14293896-871c-4058-aa3d-af51f72aa5d3");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onResume$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

triggerOnSyncComplete$Action(syncUnitIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("TriggerOnSyncComplete__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOnSyncComplete");
span.setAttribute("outsystems.function.key", "2b7c13c9-b832-4a5c-819e-433ee4c2e7c2");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._triggerOnSyncComplete$Action, callContext, syncUnitIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onDestroy$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnDestroy__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnDestroy");
span.setAttribute("outsystems.function.key", "6748572e-bbba-4d38-9f70-985703470710");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
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

init$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("Init__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "Init");
span.setAttribute("outsystems.function.key", "8a8d0761-ccc0-4066-985e-6bde68f0e337");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._init$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

syncWrapper$Action(syncUnitIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("SyncWrapper__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "SyncWrapper");
span.setAttribute("outsystems.function.key", "ca6d52eb-44a7-4ce2-90de-8b8c817d6190");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._syncWrapper$Action, callContext, syncUnitIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

triggerOnSyncStart$Action(syncUnitIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("TriggerOnSyncStart__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOnSyncStart");
span.setAttribute("outsystems.function.key", "cb8d5016-281a-43de-9f28-9329be438a24");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._triggerOnSyncStart$Action, callContext, syncUnitIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

triggerOnSyncError$Action(syncUnitIn, errorMessageIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("TriggerOnSyncError__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOnSyncError");
span.setAttribute("outsystems.function.key", "da41dbee-5d6e-459b-8925-760a7b8af7c1");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._triggerOnSyncError$Action, callContext, syncUnitIn, errorMessageIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onNetworkStatusChanged$Action(isOnlineIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnNetworkStatusChanged__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnNetworkStatusChanged");
span.setAttribute("outsystems.function.key", "e3c84ba7-3587-4d12-b82a-448f02c33f82");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onNetworkStatusChanged$Action, callContext, isOnlineIn);
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
span.setAttribute("outsystems.function.key", "e4f71bd8-c160-4dd5-bf3f-f41d5a156bc8");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
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

get onSyncError$Action() {if(!(this.hasOwnProperty("_onSyncError$Action"))) {
this._onSyncError$Action = function () {
return Promise.resolve();
};
}

return this._onSyncError$Action;
}set onSyncError$Action(value) {this._onSyncError$Action = value;
}

get onConfigure$Action() {if(!(this.hasOwnProperty("_onConfigure$Action"))) {
this._onConfigure$Action = function () {
return Promise.resolve();
};
}

return this._onConfigure$Action;
}set onConfigure$Action(value) {this._onConfigure$Action = value;
}

get onSyncComplete$Action() {if(!(this.hasOwnProperty("_onSyncComplete$Action"))) {
this._onSyncComplete$Action = function () {
return Promise.resolve();
};
}

return this._onSyncComplete$Action;
}set onSyncComplete$Action(value) {this._onSyncComplete$Action = value;
}

get onSync$Action() {if(!(this.hasOwnProperty("_onSync$Action"))) {
this._onSync$Action = function () {
return Promise.resolve();
};
}

return this._onSync$Action;
}set onSync$Action(value) {this._onSync$Action = value;
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
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:iwiOphx9xsA5b5dLEBsqNQ", "OutSystemsUI", "Private", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:7LQm+WCaHEi7DaA92pfz3w:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.7LQm+WCaHEi7DaA92pfz3w:NoAaeQpv9Vx+hnhvbuoAWA", "OutSystemsUI", "OfflineDataSyncCore", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:7LQm+WCaHEi7DaA92pfz3w", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/OfflineDataSyncCore On Initialize");
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
this._onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/OfflineDataSyncCore On Destroy");
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
return OutSystemsUIController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.OnResume$getSyncOnResumeJSResult", [{
name: "SyncOnResume",
attrName: "syncOnResumeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.TriggerOnSyncComplete$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.Init$registerAPIJSResult", [{
name: "Token",
attrName: "tokenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.SyncWrapper$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.TriggerOnSyncStart$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.TriggerOnSyncError$vars", [{
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
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.OnNetworkStatusChanged$vars", [{
name: "IsOnline",
attrName: "isOnlineInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Private.OfflineDataSyncCore.OnNetworkStatusChanged$getSyncOnOnlineJSResult", [{
name: "SyncOnOnline",
attrName: "syncOnOnlineOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnResume.GetSyncOnResumeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.SyncOnResume = window.offlineDataSync.getSyncOnResume();
};
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnDestroy.UnregisterAPIJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.offlineDataSync.unregisterAPI($parameters.Token);
};
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.Init.RegisterAPIJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Token = window.offlineDataSync.registerAPI($actions.SyncWrapper, $actions.OnResume, $actions.TriggerOnSyncStart, $actions.TriggerOnSyncComplete, $actions.TriggerOnSyncError);
};
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncStartEventJS", [], function () {
return function ($actions, $roles, $public) {
window.offlineDataSync.triggerSyncStartEvent();
};
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.TriggerSyncErrorEventOfflineJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.offlineDataSync.triggerSyncErrorEvent($parameters.ErrorMessage);
};
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.SyncWrapper.SuspendSyncJS", [], function () {
return function ($actions, $roles, $public) {
window.offlineDataSync.suspendSync();
};
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnNetworkStatusChanged.GetSyncOnOnlineJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.SyncOnOnline = window.offlineDataSync.getSyncOnOnline();
};
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$controller.OnInitialize.InitJS", [], function () {
return function ($actions, $roles, $public) {
$actions.Init();
};
});


define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"pNqidDqDcUOD1FKsjDtBzA": {
getter: function (varBag, idService) {
return varBag.getSyncOnResumeJSResult.value;
}
},
"idJdKRvsQk6pvXB+ubw_oA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iqwLbSzl40aQOxA4jncutw": {
getter: function (varBag, idService) {
return varBag.unregisterAPIJSResult.value;
}
},
"NnpaUkoy60OK58LSxM+fvA": {
getter: function (varBag, idService) {
return varBag.registerAPIJSResult.value;
}
},
"nxyJm5jw90aBg8itfNfXvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gi4+NVQjv0ea3taNkarbzQ": {
getter: function (varBag, idService) {
return varBag.securityExceptionVar.value;
}
},
"WvYZNuhra0+E8QcHd7mSgg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"_rNVoy5gskirfHpTddoezQ": {
getter: function (varBag, idService) {
return varBag.getNetworkStatusVar.value;
}
},
"2H7JMqJDYky09Bv7b+e+pg": {
getter: function (varBag, idService) {
return varBag.triggerSyncStartEventJSResult.value;
}
},
"ovxxnK25wkediVRyRJvj3w": {
getter: function (varBag, idService) {
return varBag.triggerSyncErrorEventOfflineJSResult.value;
}
},
"9_Iu1tkm8kOEr1KilaACFA": {
getter: function (varBag, idService) {
return varBag.suspendSyncJSResult.value;
}
},
"zUPlcLxU4Umwm46cWFnhPw": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wo9aZpbvgUuaG_Lff5Rxcw": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gC0MuawEY0qHJMEUZEd2iA": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mD3miAXxckKq1xqDdgLx1w": {
getter: function (varBag, idService) {
return varBag.vars.value.isOnlineInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"awv5UMOrb0yskStkJUM9jg": {
getter: function (varBag, idService) {
return varBag.getSyncOnOnlineJSResult.value;
}
},
"0aDDvP4lLUyNDZvZBMisrw": {
getter: function (varBag, idService) {
return varBag.initJSResult.value;
}
},
"ytHCSkv2FESDz5DyIaUDMg": {
getter: function (varBag, idService) {
return varBag.model.variables.instanceTokenVar;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources", ["exports", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources.de-DE", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources.fr-CA", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources.pt"], function (exports, OutSystemsUI_Private_OfflineDataSyncCore_mvc_translationsResources_deDE, OutSystemsUI_Private_OfflineDataSyncCore_mvc_translationsResources_frCA, OutSystemsUI_Private_OfflineDataSyncCore_mvc_translationsResources_pt) {
return {
"de-DE": {
"translations": OutSystemsUI_Private_OfflineDataSyncCore_mvc_translationsResources_deDE,
"isRTL": false
},
"fr-CA": {
"translations": OutSystemsUI_Private_OfflineDataSyncCore_mvc_translationsResources_frCA,
"isRTL": false
},
"pt": {
"translations": OutSystemsUI_Private_OfflineDataSyncCore_mvc_translationsResources_pt,
"isRTL": false
}
};
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources.de-DE", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Daten können nicht synchronisiert werden. Das Gerät hat keine. Netzwerkverbindung."
};
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources.fr-CA", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Impossible de synchroniser les données. L\'appareil n\'a pas de connectivité réseau."
};
});

define("OutSystemsUI.Private.OfflineDataSyncCore.mvc$translationsResources.pt", [], function () {
return {
"oV_BjLEnd0WhUVEpy1YP+g#Value.2001762002.1": "Não é possivel a sincronização de dados pois o dispositivo não está conectado a nenhuma rede móvel ou Wi Fi."
};
});

