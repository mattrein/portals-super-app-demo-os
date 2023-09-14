define("OutSystemsUI.Private.ApplicationLoadEvents.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("TimeoutId", "timeoutIdVar", "TimeoutId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("IntervalId", "intervalIdVar", "IntervalId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("MinimumDisplayTimeMs", "minimumDisplayTimeMsIn", "MinimumDisplayTimeMs", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 1000;
}, false), 
this.attr("_minimumDisplayTimeMsInDataFetchStatus", "_minimumDisplayTimeMsInDataFetchStatus", "_minimumDisplayTimeMsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("MinimumDisplayTimeMs" in inputs) {
this.variables.minimumDisplayTimeMsIn = inputs.MinimumDisplayTimeMs;
if("_minimumDisplayTimeMsInDataFetchStatus" in inputs) {
this.variables._minimumDisplayTimeMsInDataFetchStatus = inputs._minimumDisplayTimeMsInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Private.ApplicationLoadEvents.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Private.ApplicationLoadEvents.mvc$model", "OutSystemsUI.Private.ApplicationLoadEvents.mvc$controller"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Private_ApplicationLoadEvents_mvc_model, OutSystemsUI_Private_ApplicationLoadEvents_mvc_controller) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Private.ApplicationLoadEvents"; }

        static getAttributes() { return {
codeFunction: "ApplicationLoadEvents",
functionKey: "e90e438e-4ef3-4e36-bc75-f3cbb3c2b15e",
functionOwnerName: "OutSystemsUI",
functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
screen: ""
}; }

        static getCssDependencies() {
            return [];
        }

        static getJsDependencies() {
            return ["scripts/OutSystemsUI.OutSystemsUI.js"];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Private_ApplicationLoadEvents_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Private_ApplicationLoadEvents_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties());
        }
    }

    return View;
});
define("OutSystemsUI.Private.ApplicationLoadEvents.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Private.ApplicationLoadEvents.mvc$translationsResources", "OutSystemsUI.Private.ApplicationLoadEvents.mvc$debugger", "OutSystemsUI.Private.ApplicationLoadEvents.mvc$controller.OnDestroy.clearTimeoutJS", "OutSystemsUI.Private.ApplicationLoadEvents.mvc$controller.OnInitialize.RegisterListenersJS"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Private_ApplicationLoadEvents_mvc_TranslationsResources, OutSystemsUI_Private_ApplicationLoadEvents_mvc_Debugger, OutSystemsUI_Private_ApplicationLoadEvents_mvc_controller_OnDestroy_clearTimeoutJS, OutSystemsUI_Private_ApplicationLoadEvents_mvc_controller_OnInitialize_RegisterListenersJS) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Private_ApplicationLoadEvents_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {
triggerOnUpgradeProgress$Action: function (completedIn, totalIn) {
completedIn = (completedIn === undefined) ? 0 : completedIn;
totalIn = (totalIn === undefined) ? 0 : totalIn;
return controller.executeActionInsideJSNode(controller._triggerOnUpgradeProgress$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(completedIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(totalIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnUpgradeProgress");
},
triggerOnLoadComplete$Action: function (redirectURLIn) {
redirectURLIn = (redirectURLIn === undefined) ? "" : redirectURLIn;
return controller.executeActionInsideJSNode(controller._triggerOnLoadComplete$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(redirectURLIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnLoadComplete");
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
get _triggerOnUpgradeProgress$Action() {if(!(this.hasOwnProperty("__triggerOnUpgradeProgress$Action"))) {
this.__triggerOnUpgradeProgress$Action = function (completedIn, totalIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("TriggerOnUpgradeProgress", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOnUpgradeProgress");
span.setAttribute("outsystems.function.key", "1f2aa346-620a-4702-bff8-57054a79f47e");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("TriggerOnUpgradeProgress");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.ApplicationLoadEvents.TriggerOnUpgradeProgress$vars"))());
vars.value.completedInLocal = completedIn;
vars.value.totalInLocal = totalIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:RqMqHwpiAke_+FcFSnn0fg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg/ClientActions.RqMqHwpiAke_+FcFSnn0fg:BK_PAlXBJNHLli4ldMmYuA", "OutSystemsUI", "TriggerOnUpgradeProgress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dqYgtPLrvUG_uinULDTEDQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:7lJa2zMxqk6tDUHAhjtcIg", callContext.id);
// Trigger Event: OnUpgradeProgress
return controller.onUpgradeProgress$Action(vars.value.completedInLocal, vars.value.totalInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ECF6JbpUu0KfWmvsu2YhIQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:RqMqHwpiAke_+FcFSnn0fg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:RqMqHwpiAke_+FcFSnn0fg", callContext.id);
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

return this.__triggerOnUpgradeProgress$Action;
}set _triggerOnUpgradeProgress$Action(value) {this.__triggerOnUpgradeProgress$Action = value;
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
span.setAttribute("outsystems.function.key", "21aaa761-4cf9-488e-9978-f0f4ae608dfe");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:YaeqIflMjkiZePD0rmCN_g:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg/ClientActions.YaeqIflMjkiZePD0rmCN_g:Od2aNcaZ8WO+VbkvxVglnA", "OutSystemsUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:wWfwLJvx2UmcxtS9t805Lg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:61SX6KAvLkeezANUJ52vzg", callContext.id);
// Clears the timeout set on the initialize event.
OS.Logger.startActiveSpan("clearTimeout", function (span) {
if(span) {
span.setAttribute("code.function", "clearTimeout");
span.setAttribute("outsystems.function.key", "e89754eb-2fa0-472e-9ecc-0354279dafce");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_ApplicationLoadEvents_mvc_controller_OnDestroy_clearTimeoutJS, "clearTimeout", "OnDestroy", {
IntervalId: OS.DataConversion.JSNodeParamConverter.to(model.variables.intervalIdVar, OS.DataTypes.DataTypes.Integer),
TimeoutId: OS.DataConversion.JSNodeParamConverter.to(model.variables.timeoutIdVar, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sevZUrgst0Gk+gehc5N2pw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:YaeqIflMjkiZePD0rmCN_g", callContext.id);
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

get _triggerOnLoadComplete$Action() {if(!(this.hasOwnProperty("__triggerOnLoadComplete$Action"))) {
this.__triggerOnLoadComplete$Action = function (redirectURLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("TriggerOnLoadComplete", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOnLoadComplete");
span.setAttribute("outsystems.function.key", "6b2229f9-cc4c-43a7-9d86-52d7cf210d38");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("TriggerOnLoadComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.ApplicationLoadEvents.TriggerOnLoadComplete$vars"))());
vars.value.redirectURLInLocal = redirectURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:+Skia0zMp0OdhlLXzyENOA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg/ClientActions.+Skia0zMp0OdhlLXzyENOA:7hrFWyFLZKwtpN4vKDR2Tw", "OutSystemsUI", "TriggerOnLoadComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lVdLXzveHEi6fq0v1_kRfQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zaCq6hHgA0+zTve2EVUlDA", callContext.id);
// Trigger Event: OnLoadComplete
return controller.onLoadComplete$Action(vars.value.redirectURLInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:YSNMvtmZkU2xMT_Kcj+jSg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+Skia0zMp0OdhlLXzyENOA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:+Skia0zMp0OdhlLXzyENOA", callContext.id);
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

return this.__triggerOnLoadComplete$Action;
}set _triggerOnLoadComplete$Action(value) {this.__triggerOnLoadComplete$Action = value;
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
span.setAttribute("outsystems.function.key", "b069cb17-8354-42fd-869d-456bf6e7786c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var registerListenersJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.registerListenersJSResult = registerListenersJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:F8tpsFSD_UKGnUVr9ud4bA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg/ClientActions.F8tpsFSD_UKGnUVr9ud4bA:jXg7zwaZMBGTcNFD7yTe8w", "OutSystemsUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:dTId22GxXkqJF26JapieWw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iW7rR+64JU29M2auV6jnZQ", callContext.id);
registerListenersJSResult.value = OS.Logger.startActiveSpan("RegisterListeners", function (span) {
if(span) {
span.setAttribute("code.function", "RegisterListeners");
span.setAttribute("outsystems.function.key", "47eb6e89-b8ee-4d25-bd33-66ae57a8e765");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_ApplicationLoadEvents_mvc_controller_OnInitialize_RegisterListenersJS, "RegisterListeners", "OnInitialize", {
MinDisplayTimeMs: OS.DataConversion.JSNodeParamConverter.to(model.variables.minimumDisplayTimeMsIn, OS.DataTypes.DataTypes.Integer),
TimeoutId: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
IntervalId: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.ApplicationLoadEvents.OnInitialize$registerListenersJSResult"))();
jsNodeResult.timeoutIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.TimeoutId, OS.DataTypes.DataTypes.Integer);
jsNodeResult.intervalIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IntervalId, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {
TriggerOnUpgradeProgress: controller.clientActionProxies.triggerOnUpgradeProgress$Action,
TriggerOnLoadComplete: controller.clientActionProxies.triggerOnLoadComplete$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VypNxhIkUEO+6scdOVv+_w", callContext.id);
// TimeoutId = RegisterListeners.TimeoutId
model.variables.timeoutIdVar = registerListenersJSResult.value.timeoutIdOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VypNxhIkUEO+6scdOVv+_w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IntervalId = RegisterListeners.IntervalId
model.variables.intervalIdVar = registerListenersJSResult.value.intervalIdOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:QPSDH0Y5rkaQvGw8vhmeAw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:F8tpsFSD_UKGnUVr9ud4bA", callContext.id);
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


triggerOnUpgradeProgress$Action(completedIn, totalIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("TriggerOnUpgradeProgress__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOnUpgradeProgress");
span.setAttribute("outsystems.function.key", "1f2aa346-620a-4702-bff8-57054a79f47e");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._triggerOnUpgradeProgress$Action, callContext, completedIn, totalIn);
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
span.setAttribute("outsystems.function.key", "21aaa761-4cf9-488e-9978-f0f4ae608dfe");
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

triggerOnLoadComplete$Action(redirectURLIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("TriggerOnLoadComplete__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOnLoadComplete");
span.setAttribute("outsystems.function.key", "6b2229f9-cc4c-43a7-9d86-52d7cf210d38");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._triggerOnLoadComplete$Action, callContext, redirectURLIn);
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
span.setAttribute("outsystems.function.key", "b069cb17-8354-42fd-869d-456bf6e7786c");
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

get onUpgradeProgress$Action() {if(!(this.hasOwnProperty("_onUpgradeProgress$Action"))) {
this._onUpgradeProgress$Action = function () {
return Promise.resolve();
};
}

return this._onUpgradeProgress$Action;
}set onUpgradeProgress$Action(value) {this._onUpgradeProgress$Action = value;
}

get onLoadComplete$Action() {if(!(this.hasOwnProperty("_onLoadComplete$Action"))) {
this._onLoadComplete$Action = function () {
return Promise.resolve();
};
}

return this._onLoadComplete$Action;
}set onLoadComplete$Action(value) {this._onLoadComplete$Action = value;
}


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:iwiOphx9xsA5b5dLEBsqNQ", "OutSystemsUI", "Private", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:jkMO6fNONk68dfPLs8KxXg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.jkMO6fNONk68dfPLs8KxXg:gH8rblGT5WxdyDzOLAzAcw", "OutSystemsUI", "ApplicationLoadEvents", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:jkMO6fNONk68dfPLs8KxXg", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/ApplicationLoadEvents On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/ApplicationLoadEvents On Destroy");
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
Controller.registerVariableGroupType("OutSystemsUI.Private.ApplicationLoadEvents.TriggerOnUpgradeProgress$vars", [{
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
Controller.registerVariableGroupType("OutSystemsUI.Private.ApplicationLoadEvents.TriggerOnLoadComplete$vars", [{
name: "RedirectURL",
attrName: "redirectURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Private.ApplicationLoadEvents.OnInitialize$registerListenersJSResult", [{
name: "TimeoutId",
attrName: "timeoutIdOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "IntervalId",
attrName: "intervalIdOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Private.ApplicationLoadEvents.mvc$controller.OnDestroy.clearTimeoutJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
clearTimeout($parameters.TimeoutId);
clearInterval($parameters.IntervalId);
};
});

define("OutSystemsUI.Private.ApplicationLoadEvents.mvc$controller.OnInitialize.RegisterListenersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
    var start = new Date();
    // Check if the app is currently being upgraded
    var isUpgrading = $public.ApplicationLifecycle.isUpgradingVersion();
    
    var progressCallback = function(loaded, total) { 
        $actions.TriggerOnUpgradeProgress(loaded, total); 
    };
    
    var finishCallback = function() {
        var elapsedMs = new Date() - start;
        var timeout = Math.max($parameters.MinDisplayTimeMs - elapsedMs, 0);
        $parameters.TimeoutId = setTimeout(function() {
            $actions.TriggerOnLoadComplete(window.location.href);    
        }, timeout);
    };
    
    // When there is no upgrade, we need to mimic the progress using the MinDisplayTimeMs
    if (!isUpgrading) {
        var loaded = 0;
        var interval = Math.ceil($parameters.MinDisplayTimeMs / 10);
        var timerId = setInterval(function() {
            progressCallback(++loaded, 10);
            if (loaded === 10) {
                clearInterval(timerId);
            }
        }, interval);
        
        $parameters.IntervalId = timerId;
    }
    $public.ApplicationLifecycle.listen({
        // When there is no upgrade, we'll provide the feedback
        onUpgradeProgress: isUpgrading ? progressCallback : null,
        onLoadComplete: finishCallback
    });
};
});


define("OutSystemsUI.Private.ApplicationLoadEvents.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"y_QGn_nTNkKk5ifahW1jPA": {
getter: function (varBag, idService) {
return varBag.vars.value.completedInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"vBDB5qcszk+1Sp+OHgtCiw": {
getter: function (varBag, idService) {
return varBag.vars.value.totalInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"61SX6KAvLkeezANUJ52vzg": {
getter: function (varBag, idService) {
return varBag.clearTimeoutJSResult.value;
}
},
"I+VKpnJej0iaD6F8iscSXA": {
getter: function (varBag, idService) {
return varBag.vars.value.redirectURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iW7rR+64JU29M2auV6jnZQ": {
getter: function (varBag, idService) {
return varBag.registerListenersJSResult.value;
}
},
"KxH5Ch6XRUK_VGpJ_LJ+VQ": {
getter: function (varBag, idService) {
return varBag.model.variables.timeoutIdVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"6L4oV8bUqE+1X2FKsqTNjQ": {
getter: function (varBag, idService) {
return varBag.model.variables.intervalIdVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"024sl3u8qUejQwcB4vBCtQ": {
getter: function (varBag, idService) {
return varBag.model.variables.minimumDisplayTimeMsIn;
},
dataType: OS.DataTypes.DataTypes.Integer
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

define("OutSystemsUI.Private.ApplicationLoadEvents.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

