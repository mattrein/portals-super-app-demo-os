define("OutSystemsUI.Utilities.TouchEvents.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IsBound", "isBoundVar", "IsBound", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("GestureObj", "gestureObjVar", "GestureObj", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("WidgetId", "widgetIdIn", "WidgetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_widgetIdInDataFetchStatus", "_widgetIdInDataFetchStatus", "_widgetIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("PreventDefaults", "preventDefaultsIn", "PreventDefaults", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_preventDefaultsInDataFetchStatus", "_preventDefaultsInDataFetchStatus", "_preventDefaultsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("WidgetId" in inputs) {
this.variables.widgetIdIn = inputs.WidgetId;
if("_widgetIdInDataFetchStatus" in inputs) {
this.variables._widgetIdInDataFetchStatus = inputs._widgetIdInDataFetchStatus;
}

}

if("PreventDefaults" in inputs) {
this.variables.preventDefaultsIn = inputs.PreventDefaults;
if("_preventDefaultsInDataFetchStatus" in inputs) {
this.variables._preventDefaultsInDataFetchStatus = inputs._preventDefaultsInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Utilities.TouchEvents.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Utilities.TouchEvents.mvc$model", "OutSystemsUI.Utilities.TouchEvents.mvc$controller"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Utilities_TouchEvents_mvc_model, OutSystemsUI_Utilities_TouchEvents_mvc_controller) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Utilities.TouchEvents"; }

        static getAttributes() { return {
codeFunction: "TouchEvents",
functionKey: "f7ecc35c-38b1-4d25-956d-47508c2eb320",
functionOwnerName: "OutSystemsUI",
functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
screen: ""
}; }

        static getCssDependencies() {
            return [];
        }

        static getJsDependencies() {
            return ["scripts/OutSystemsUI.TouchTrack.js", "scripts/OutSystemsUI.OutSystemsUI.js"];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Utilities_TouchEvents_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Utilities_TouchEvents_mvc_controller;
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
return [];
}));
        }
    }

    return View;
});
define("OutSystemsUI.Utilities.TouchEvents.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Utilities.TouchEvents.mvc$translationsResources", "OutSystemsUI.Utilities.TouchEvents.mvc$debugger", "OutSystemsUI.Utilities.TouchEvents.mvc$controller.OnDestroy.DestroyJS", "OutSystemsUI.Utilities.TouchEvents.mvc$controller.OnParametersChanged.SetPreventDefaultJS", "OutSystemsUI.Utilities.TouchEvents.mvc$controller.OnReady.BindEventsJS"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Utilities_TouchEvents_mvc_TranslationsResources, OutSystemsUI_Utilities_TouchEvents_mvc_Debugger, OutSystemsUI_Utilities_TouchEvents_mvc_controller_OnDestroy_DestroyJS, OutSystemsUI_Utilities_TouchEvents_mvc_controller_OnParametersChanged_SetPreventDefaultJS, OutSystemsUI_Utilities_TouchEvents_mvc_controller_OnReady_BindEventsJS) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Utilities_TouchEvents_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {
onStart$Action: function (xIn, yIn) {
xIn = (xIn === undefined) ? 0 : xIn;
yIn = (yIn === undefined) ? 0 : yIn;
return controller.executeActionInsideJSNode(controller._onStart$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(xIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(yIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnStart");
},
onMove$Action: function (evtIn, xIn, yIn, offsetXIn, offsetYIn) {
evtIn = (evtIn === undefined) ? null : evtIn;
xIn = (xIn === undefined) ? 0 : xIn;
yIn = (yIn === undefined) ? 0 : yIn;
offsetXIn = (offsetXIn === undefined) ? 0 : offsetXIn;
offsetYIn = (offsetYIn === undefined) ? 0 : offsetYIn;
return controller.executeActionInsideJSNode(controller._onMove$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(evtIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(xIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(yIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(offsetXIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(offsetYIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnMove");
},
onEnd$Action: function (xIn, yIn, offsetXIn, offsetYIn, timeTakenIn) {
xIn = (xIn === undefined) ? 0 : xIn;
yIn = (yIn === undefined) ? 0 : yIn;
offsetXIn = (offsetXIn === undefined) ? 0 : offsetXIn;
offsetYIn = (offsetYIn === undefined) ? 0 : offsetYIn;
timeTakenIn = (timeTakenIn === undefined) ? 0 : timeTakenIn;
return controller.executeActionInsideJSNode(controller._onEnd$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(xIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(yIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(offsetXIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(offsetYIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(timeTakenIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnEnd");
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
get _onStart$Action() {if(!(this.hasOwnProperty("__onStart$Action"))) {
this.__onStart$Action = function (xIn, yIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnStart", function (span) {
if(span) {
span.setAttribute("code.function", "OnStart");
span.setAttribute("outsystems.function.key", "26d42584-6aad-42ba-b6a6-af457dbde3dc");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnStart");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Utilities.TouchEvents.OnStart$vars"))());
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:hCXUJq1qukK2pq9Ffb3j3A:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.hCXUJq1qukK2pq9Ffb3j3A:eagctfl5VchCb8LyaVK7cw", "OutSystemsUI", "OnStart", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:+OK8IOTgbEOYuoxuKtBngw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vQmVSezsQkSrNHKbRZlVDQ", callContext.id);
// Trigger Event: Start
return controller.start$Action(OS.BuiltinFunctions.integerToDecimal(vars.value.xInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.yInLocal), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:m6GVD8XxuECURTDnYVlqUQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:hCXUJq1qukK2pq9Ffb3j3A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:hCXUJq1qukK2pq9Ffb3j3A", callContext.id);
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

return this.__onStart$Action;
}set _onStart$Action(value) {this.__onStart$Action = value;
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
span.setAttribute("outsystems.function.key", "29fa4a6b-7c1b-4b43-9aab-25ae16d77e0c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:a0r6KRt8Q0uaqyWuFtd+DA:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.a0r6KRt8Q0uaqyWuFtd+DA:wcsr4erh0FIJl_cpV+xUrQ", "OutSystemsUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WTlZZuqcb0mygZ6tNQGLZA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:40LPvOZvREeaoaf+TokBMg", callContext.id);
// IsBound = False
model.variables.isBoundVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HacsT1m0ykm4_wV4LDzqIw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:a0r6KRt8Q0uaqyWuFtd+DA", callContext.id);
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

get _onEnd$Action() {if(!(this.hasOwnProperty("__onEnd$Action"))) {
this.__onEnd$Action = function (xIn, yIn, offsetXIn, offsetYIn, timeTakenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnEnd", function (span) {
if(span) {
span.setAttribute("code.function", "OnEnd");
span.setAttribute("outsystems.function.key", "45362b2b-228a-4fec-be43-1a5d30c812e7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnEnd");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Utilities.TouchEvents.OnEnd$vars"))());
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
vars.value.timeTakenInLocal = timeTakenIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Kys2RYoi7E++QxpdMMgS5w:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.Kys2RYoi7E++QxpdMMgS5w:Stl+Uas9OKpkKY8aMoIvhA", "OutSystemsUI", "OnEnd", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BL0FJUqOMUSoQzuuLyLH1g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VPhEXWQNHEisHevRGQ5kBQ", callContext.id);
// Trigger Event: End
return controller.end$Action(OS.BuiltinFunctions.integerToDecimal(vars.value.xInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.yInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.offsetYInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.timeTakenInLocal), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Rw8jqitCGkm8jMK7t6WrEQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Kys2RYoi7E++QxpdMMgS5w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Kys2RYoi7E++QxpdMMgS5w", callContext.id);
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

return this.__onEnd$Action;
}set _onEnd$Action(value) {this.__onEnd$Action = value;
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
span.setAttribute("outsystems.function.key", "77e35339-36cd-4c7d-9b40-860a408690b5");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:OVPjd802fUybQIYKQIaQtQ:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.OVPjd802fUybQIYKQIaQtQ:cqKQNmZyncq79jRPLT0b5w", "OutSystemsUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v6HL2leBKEeh0GnyBmONSA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:F0i4BQTNj0yzHaxDSh3xog", callContext.id);
OS.Logger.startActiveSpan("Destroy", function (span) {
if(span) {
span.setAttribute("code.function", "Destroy");
span.setAttribute("outsystems.function.key", "05b84817-cd04-4c8f-b31d-ac434a1df1a2");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Utilities_TouchEvents_mvc_controller_OnDestroy_DestroyJS, "Destroy", "OnDestroy", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.gestureObjVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yniy3So_IEeBQ4Nqecwvfg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:OVPjd802fUybQIYKQIaQtQ", callContext.id);
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
span.setAttribute("outsystems.function.key", "781cafa2-eb23-4db4-b88a-8a3a0a950daa");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:oq8ceCPrtE24ioo6CpUNqg:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.oq8ceCPrtE24ioo6CpUNqg:auc+l44z4rBh1pWgRPmTfg", "OutSystemsUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IXBG7KnH4kC47BrSaUR05w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VMh381GwykGIVlBLHebwmg", callContext.id);
OS.Logger.startActiveSpan("SetPreventDefault", function (span) {
if(span) {
span.setAttribute("code.function", "SetPreventDefault");
span.setAttribute("outsystems.function.key", "f377c854-b051-41ca-8856-504b1de6f09a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Utilities_TouchEvents_mvc_controller_OnParametersChanged_SetPreventDefaultJS, "SetPreventDefault", "OnParametersChanged", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.gestureObjVar, OS.DataTypes.DataTypes.Object),
Prevent: OS.DataConversion.JSNodeParamConverter.to(model.variables.preventDefaultsIn, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CrIVqbxKcUyDW0CsUrV52w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:oq8ceCPrtE24ioo6CpUNqg", callContext.id);
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

get _onMove$Action() {if(!(this.hasOwnProperty("__onMove$Action"))) {
this.__onMove$Action = function (evtIn, xIn, yIn, offsetXIn, offsetYIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnMove", function (span) {
if(span) {
span.setAttribute("code.function", "OnMove");
span.setAttribute("outsystems.function.key", "c32859ec-39df-407f-9ee5-62a833953fdd");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnMove");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Utilities.TouchEvents.OnMove$vars"))());
vars.value.evtInLocal = evtIn;
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:7Fkow985f0Ce5WKoM5U_3Q:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.7Fkow985f0Ce5WKoM5U_3Q:xUTQkUUQHt4bsLC3i_Ah1A", "OutSystemsUI", "OnMove", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cIdcNYM5LEu8oO5x31lzCg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AsAvTfpnc02_plItbAViHw", callContext.id);
// Trigger Event: Move
return controller.move$Action(OS.BuiltinFunctions.integerToDecimal(vars.value.xInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.yInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal), OS.BuiltinFunctions.integerToDecimal(vars.value.offsetYInLocal), vars.value.evtInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lCdxfDx8fU6fmum1Z2l2tw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:7Fkow985f0Ce5WKoM5U_3Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:7Fkow985f0Ce5WKoM5U_3Q", callContext.id);
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

return this.__onMove$Action;
}set _onMove$Action(value) {this.__onMove$Action = value;
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
span.setAttribute("outsystems.function.key", "e30c4ccf-79af-435b-afa0-03bc6f32ff92");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var bindEventsJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bindEventsJSResult = bindEventsJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:z0wM4695W0OvoAO8bzL_kg:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA/ClientActions.z0wM4695W0OvoAO8bzL_kg:RQQy8wkvIZVjBYrEjFGV4A", "OutSystemsUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:hfiRRA7q6E2Bu2jQ1tHG4g", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:uO7V719jf0qCTEPy2+Z9uw", callContext.id);
bindEventsJSResult.value = OS.Logger.startActiveSpan("BindEvents", function (span) {
if(span) {
span.setAttribute("code.function", "BindEvents");
span.setAttribute("outsystems.function.key", "efd5eeb8-635f-4a7f-824c-43f2dbe67dbb");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Utilities_TouchEvents_mvc_controller_OnReady_BindEventsJS, "BindEvents", "OnReady", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(model.variables.widgetIdIn, OS.DataTypes.DataTypes.Text),
isBound: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Obj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Utilities.TouchEvents.OnReady$bindEventsJSResult"))();
jsNodeResult.isBoundOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isBound, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.objOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Obj, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OnStart: controller.clientActionProxies.onStart$Action,
OnMove: controller.clientActionProxies.onMove$Action,
OnEnd: controller.clientActionProxies.onEnd$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UdT1HPBb7EuVBR6S9paVmw", callContext.id);
// IsBound = BindEvents.isBound
model.variables.isBoundVar = bindEventsJSResult.value.isBoundOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:UdT1HPBb7EuVBR6S9paVmw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// GestureObj = BindEvents.Obj
model.variables.gestureObjVar = bindEventsJSResult.value.objOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kqNluviB20WE0SJdg5GE5A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:z0wM4695W0OvoAO8bzL_kg", callContext.id);
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


onStart$Action(xIn, yIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnStart__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnStart");
span.setAttribute("outsystems.function.key", "26d42584-6aad-42ba-b6a6-af457dbde3dc");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onStart$Action, callContext, xIn, yIn);
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
span.setAttribute("outsystems.function.key", "29fa4a6b-7c1b-4b43-9aab-25ae16d77e0c");
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

onEnd$Action(xIn, yIn, offsetXIn, offsetYIn, timeTakenIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnEnd__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnEnd");
span.setAttribute("outsystems.function.key", "45362b2b-228a-4fec-be43-1a5d30c812e7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onEnd$Action, callContext, xIn, yIn, offsetXIn, offsetYIn, timeTakenIn);
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
span.setAttribute("outsystems.function.key", "77e35339-36cd-4c7d-9b40-860a408690b5");
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

onParametersChanged$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "781cafa2-eb23-4db4-b88a-8a3a0a950daa");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
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

onMove$Action(evtIn, xIn, yIn, offsetXIn, offsetYIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnMove__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnMove");
span.setAttribute("outsystems.function.key", "c32859ec-39df-407f-9ee5-62a833953fdd");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onMove$Action, callContext, evtIn, xIn, yIn, offsetXIn, offsetYIn);
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
span.setAttribute("outsystems.function.key", "e30c4ccf-79af-435b-afa0-03bc6f32ff92");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
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

get start$Action() {if(!(this.hasOwnProperty("_start$Action"))) {
this._start$Action = function () {
return Promise.resolve();
};
}

return this._start$Action;
}set start$Action(value) {this._start$Action = value;
}

get move$Action() {if(!(this.hasOwnProperty("_move$Action"))) {
this._move$Action = function () {
return Promise.resolve();
};
}

return this._move$Action;
}set move$Action(value) {this._move$Action = value;
}

get end$Action() {if(!(this.hasOwnProperty("_end$Action"))) {
this._end$Action = function () {
return Promise.resolve();
};
}

return this._end$Action;
}set end$Action(value) {this._end$Action = value;
}


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw:H+UJ8W9I8hc71hqLkfsPOw", "OutSystemsUI", "Utilities", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:XMPs97E4JU2VbUdQjC6zIA:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.XMPs97E4JU2VbUdQjC6zIA:4irpHdmiA_G2ZHY8cv3PFA", "OutSystemsUI", "TouchEvents", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:XMPs97E4JU2VbUdQjC6zIA", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/TouchEvents On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/TouchEvents On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/TouchEvents On Destroy");
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
this._onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/TouchEvents On Parameters Changed");
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
return OutSystemsUIController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables
Controller.registerVariableGroupType("OutSystemsUI.Utilities.TouchEvents.OnStart$vars", [{
name: "X",
attrName: "xInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Y",
attrName: "yInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Utilities.TouchEvents.OnEnd$vars", [{
name: "X",
attrName: "xInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Y",
attrName: "yInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "OffsetY",
attrName: "offsetYInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "TimeTaken",
attrName: "timeTakenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Utilities.TouchEvents.OnMove$vars", [{
name: "Evt",
attrName: "evtInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "X",
attrName: "xInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Y",
attrName: "yInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "OffsetY",
attrName: "offsetYInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Utilities.TouchEvents.OnReady$bindEventsJSResult", [{
name: "isBound",
attrName: "isBoundOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Obj",
attrName: "objOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Utilities.TouchEvents.mvc$controller.OnDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.destroy();
};
});

define("OutSystemsUI.Utilities.TouchEvents.mvc$controller.OnParametersChanged.SetPreventDefaultJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.setPreventDefault($parameters.Prevent);
};
});

define("OutSystemsUI.Utilities.TouchEvents.mvc$controller.OnReady.BindEventsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var touchTrack = new TouchTrack();
$parameters.isBound = false;

var el = document.getElementById($parameters.WidgetId);

if (el) {
    touchTrack.init(el, $actions.OnStart, $actions.OnMove, $actions.OnEnd);
    $parameters.isBound = true;
}


$parameters.Obj = touchTrack;
};
});


define("OutSystemsUI.Utilities.TouchEvents.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"JvxaRML4nUmlXRdUvLQt_Q": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"OHcN4GW1Ukm0Vqa87Ju6gw": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"yB7kdtwtckykOST5H260pQ": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"jJd3Ov69PkGABjVw4lxTNg": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"sBBBUKq_0EyRJuvgCkQ_VA": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"oRxdfy9UR02NXcWOpNS7QQ": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"IN88pqNP4kGorcQtgCObUg": {
getter: function (varBag, idService) {
return varBag.vars.value.timeTakenInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"F0i4BQTNj0yzHaxDSh3xog": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"VMh381GwykGIVlBLHebwmg": {
getter: function (varBag, idService) {
return varBag.setPreventDefaultJSResult.value;
}
},
"v_K1qvzHGUWxiwizNVlj7w": {
getter: function (varBag, idService) {
return varBag.vars.value.evtInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"cMirC5tkWEiUNMQORBFfNg": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"bKF6ZYfYHUCVuY2EyaEiuw": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"sWcfOaAYKU+9xVUgowcraw": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"7PoUbe5l5E+nhgGuImu9xQ": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"uO7V719jf0qCTEPy2+Z9uw": {
getter: function (varBag, idService) {
return varBag.bindEventsJSResult.value;
}
},
"g3XPNRlwqUmGn8igvIwN7Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isBoundVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"HODMFqGIxEOSn+OyEVEtvA": {
getter: function (varBag, idService) {
return varBag.model.variables.gestureObjVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"sEjWjg2rqkql9BYBupPwqg": {
getter: function (varBag, idService) {
return varBag.model.variables.widgetIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PmJj1RwC1kaN39+QXMtE4A": {
getter: function (varBag, idService) {
return varBag.model.variables.preventDefaultsIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

define("OutSystemsUI.Utilities.TouchEvents.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

