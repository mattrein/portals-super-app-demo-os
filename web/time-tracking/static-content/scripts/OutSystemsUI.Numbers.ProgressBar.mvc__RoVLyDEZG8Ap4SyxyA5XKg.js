define("OutSystemsUI.Numbers.ProgressBar.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_b29bdecfa7956bb3d5bee97678e39fb0Structure", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$ProgressBarCreate", "OutSystemsUI.controller$ProgressChangeIntegerProp", "OutSystemsUI.controller$ProgressChangeTextProp", "OutSystemsUI.controller$ProgressDestroy", "OutSystemsUI.controller$ProgressInitialize", "OutSystemsUI.controller$ProgressRegisterCallback"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_b29bdecfa7956bb3d5bee97678e39fb0Structure());
}, false, OutSystemsUIModel.ST_b29bdecfa7956bb3d5bee97678e39fb0Structure), 
this.attr("Progress", "progressIn", "Progress", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_progressInDataFetchStatus", "_progressInDataFetchStatus", "_progressInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ProgressColor", "progressColorIn", "ProgressColor", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUIModel.staticEntities.color.primary;
}, false), 
this.attr("_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("TrailColor", "trailColorIn", "TrailColor", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUIModel.staticEntities.color.neutral4;
}, false), 
this.attr("_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Thickness", "thicknessIn", "Thickness", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 12;
}, false), 
this.attr("_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure());
}, false, OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure), 
this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("Progress" in inputs) {
this.variables.progressIn = inputs.Progress;
if("_progressInDataFetchStatus" in inputs) {
this.variables._progressInDataFetchStatus = inputs._progressInDataFetchStatus;
}

}

if("ProgressColor" in inputs) {
this.variables.progressColorIn = inputs.ProgressColor;
if("_progressColorInDataFetchStatus" in inputs) {
this.variables._progressColorInDataFetchStatus = inputs._progressColorInDataFetchStatus;
}

}

if("TrailColor" in inputs) {
this.variables.trailColorIn = inputs.TrailColor;
if("_trailColorInDataFetchStatus" in inputs) {
this.variables._trailColorInDataFetchStatus = inputs._trailColorInDataFetchStatus;
}

}

if("Thickness" in inputs) {
this.variables.thicknessIn = inputs.Thickness;
if("_thicknessInDataFetchStatus" in inputs) {
this.variables._thicknessInDataFetchStatus = inputs._thicknessInDataFetchStatus;
}

}

if("OptionalConfigs" in inputs) {
this.variables.optionalConfigsIn = inputs.OptionalConfigs;
if("_optionalConfigsInDataFetchStatus" in inputs) {
this.variables._optionalConfigsInDataFetchStatus = inputs._optionalConfigsInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Numbers.ProgressBar.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Numbers.ProgressBar.mvc$model", "OutSystemsUI.Numbers.ProgressBar.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$ST_b29bdecfa7956bb3d5bee97678e39fb0Structure", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$ProgressBarCreate", "OutSystemsUI.controller$ProgressChangeIntegerProp", "OutSystemsUI.controller$ProgressChangeTextProp", "OutSystemsUI.controller$ProgressDestroy", "OutSystemsUI.controller$ProgressInitialize", "OutSystemsUI.controller$ProgressRegisterCallback"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Numbers_ProgressBar_mvc_model, OutSystemsUI_Numbers_ProgressBar_mvc_controller, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Numbers.ProgressBar"; }

        static getAttributes() { return {
codeFunction: "ProgressBar",
functionKey: "aa878163-7d92-4bc9-acce-392b67407218",
functionOwnerName: "OutSystemsUI",
functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return ["scripts/OutSystemsUI.OutSystemsUI.js"];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Numbers_ProgressBar_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Numbers_ProgressBar_mvc_controller;
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
name: model.variables.internal_ConfigsVar.uniqueIdAttr
},
style: "osui-progress-bar",
visible: true,
_idProps: {
service: idService,
name: "ProgressBar"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-progress-bar__container",
visible: true,
_idProps: {
service: idService,
name: "ProgressContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-progress-bar__value",
visible: true,
_idProps: {
service: idService,
name: "ProgressValue"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "osui-progress-bar__content ph",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        }
    }

    return View;
});
define("OutSystemsUI.Numbers.ProgressBar.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Numbers.ProgressBar.mvc$translationsResources", "OutSystemsUI.Numbers.ProgressBar.mvc$debugger", "OutSystemsUI.Numbers.ProgressBar.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI.model$ST_b29bdecfa7956bb3d5bee97678e39fb0Structure", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$ProgressBarCreate", "OutSystemsUI.controller$ProgressChangeIntegerProp", "OutSystemsUI.controller$ProgressChangeTextProp", "OutSystemsUI.controller$ProgressDestroy", "OutSystemsUI.controller$ProgressInitialize", "OutSystemsUI.controller$ProgressRegisterCallback"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Numbers_ProgressBar_mvc_TranslationsResources, OutSystemsUI_Numbers_ProgressBar_mvc_Debugger, OutSystemsUI_Numbers_ProgressBar_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Numbers_ProgressBar_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {
initializedHandler$Action: function (progressBarIdIn) {
progressBarIdIn = (progressBarIdIn === undefined) ? "" : progressBarIdIn;
return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(progressBarIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "InitializedHandler");
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
span.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.generateUniqueIdVar = generateUniqueIdVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:NsvnHZhiIE+ivmOeWNCGyQ:/NRWebFlows.0ix1sPf1lEWTg0T_NJjm1A/NodesShownInESpaceTree.Y4GHqpJ9yUuszjkrZ0ByGA/ClientActions.NsvnHZhiIE+ivmOeWNCGyQ:Dtx4fxzAviJnT5qBYw10Bw", "OutSystemsUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:vFX9Xen_ekCPQjTI0bbIzg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2JfmMqBSgkaDeb7Ck41m8g", callContext.id);
// Execute Action: LogStart
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create ProgressBar", callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:RiM_u27Mw06C6u1PCq8A0Q", callContext.id);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);

// Set Internal Configs
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9d5dI9yGc02JuntC2mHNLg", callContext.id);
// Internal_Configs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internal_ConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9d5dI9yGc02JuntC2mHNLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Internal_Configs.Progress = Progress
model.variables.internal_ConfigsVar.progressAttr = model.variables.progressIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9d5dI9yGc02JuntC2mHNLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Internal_Configs.ProgressColor = ProgressColor
model.variables.internal_ConfigsVar.progressColorAttr = model.variables.progressColorIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9d5dI9yGc02JuntC2mHNLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Internal_Configs.TrailColor = TrailColor
model.variables.internal_ConfigsVar.trailColorAttr = model.variables.trailColorIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9d5dI9yGc02JuntC2mHNLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Internal_Configs.Shape = OptionalConfigs.Shape
model.variables.internal_ConfigsVar.shapeAttr = model.variables.optionalConfigsIn.shapeAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9d5dI9yGc02JuntC2mHNLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// Internal_Configs.Thickness = Thickness
model.variables.internal_ConfigsVar.thicknessAttr = model.variables.thicknessIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9d5dI9yGc02JuntC2mHNLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// Internal_Configs.AnimateInitialProgress = OptionalConfigs.AnimateInitialProgress
model.variables.internal_ConfigsVar.animateInitialProgressAttr = model.variables.optionalConfigsIn.animateInitialProgressAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9d5dI9yGc02JuntC2mHNLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// Internal_Configs.Type = Bar
model.variables.internal_ConfigsVar.typeAttr = OutSystemsUIModel.staticEntities.progressType.bar;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9d5dI9yGc02JuntC2mHNLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9d5dI9yGc02JuntC2mHNLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// Internal_Configs.InitialProgress = Internal_Configs.Progress
model.variables.internal_ConfigsVar.initialProgressAttr = model.variables.internal_ConfigsVar.progressAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:g_nKzmjyGkWT3S0X65iKJQ", callContext.id);
// Execute Action: ProgressCreate
OutSystemsUIController.default.progressBarCreate$Action(model.variables.internal_ConfigsVar, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:zPOeyfgHKkWjAHoA53Y_2A", callContext.id);
// Execute Action: RegisterCallbacks
controller._registerCallbacks$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ayQqdoskI0qBskwVSeAphw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:NsvnHZhiIE+ivmOeWNCGyQ", callContext.id);
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
span.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:cSndOTBmcUmX5fg1IN7Eng:/NRWebFlows.0ix1sPf1lEWTg0T_NJjm1A/NodesShownInESpaceTree.Y4GHqpJ9yUuszjkrZ0ByGA/ClientActions.cSndOTBmcUmX5fg1IN7Eng:8nDjyf8iig2wtD1T9v+Bdg", "OutSystemsUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mGifV3Rq9kOcsiRVtRtstg", callContext.id);
// Progress?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:P3HoFEBz9UuhsM5Sy_JX3A", callContext.id) && ((model.variables.progressIn) !== (model.variables.internal_ConfigsVar.progressAttr)))) {
// Set Progress
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pjg+m1v3k067XG8ILc+QNg", callContext.id);
// Internal_Configs.Progress = Progress
model.variables.internal_ConfigsVar.progressAttr = model.variables.progressIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xJb9O79Z7U+9sIt4u8XmAA", callContext.id);
// Execute Action: UpdateProgress
OutSystemsUIController.default.progressChangeIntegerProp$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "Progress", OS.BuiltinFunctions.integerToLongInteger(model.variables.internal_ConfigsVar.progressAttr), callContext);
}

// ProgressColor?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:B2OC8SaWHkKMuoyWmXMhag", callContext.id) && ((model.variables.progressColorIn) !== (model.variables.internal_ConfigsVar.progressColorAttr)))) {
// Set ProgressColor
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NqlFHh3Go0aCc4L3NqHmeA", callContext.id);
// Internal_Configs.ProgressColor = ProgressColor
model.variables.internal_ConfigsVar.progressColorAttr = model.variables.progressColorIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:O1CS+FQcKkSERvkcH+5ikQ", callContext.id);
// Execute Action: UpdateProgressColor
OutSystemsUIController.default.progressChangeTextProp$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ProgressColor", model.variables.internal_ConfigsVar.progressColorAttr, callContext);
}

// TrailColor?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SdNP_pE3R0CY7ZnJ0LIIoA", callContext.id) && ((model.variables.trailColorIn) !== (model.variables.internal_ConfigsVar.trailColorAttr)))) {
// Set TrailColor
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6JfXoZPTPEuZ9LDL5jWnLA", callContext.id);
// Internal_Configs.TrailColor = TrailColor
model.variables.internal_ConfigsVar.trailColorAttr = model.variables.trailColorIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FXQT29IT8U6w9JBK2OejqA", callContext.id);
// Execute Action: UpdateTrailColor
OutSystemsUIController.default.progressChangeTextProp$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "TrailColor", model.variables.internal_ConfigsVar.trailColorAttr, callContext);
}

// Thickness?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:rWUCP6p5SE+MeCOLU0KTNQ", callContext.id) && ((model.variables.thicknessIn) !== (model.variables.internal_ConfigsVar.thicknessAttr)))) {
// Set Thickness
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aAQA6Uxh60KQcWZmXNL0sA", callContext.id);
// Internal_Configs.Thickness = Thickness
model.variables.internal_ConfigsVar.thicknessAttr = model.variables.thicknessIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1NkjPAwjrkCYdisRGsqt9w", callContext.id);
// Execute Action: UpdateThickness
OutSystemsUIController.default.progressChangeIntegerProp$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "Thickness", OS.BuiltinFunctions.integerToLongInteger(model.variables.internal_ConfigsVar.thicknessAttr), callContext);
}

// Shape?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZS7Ko2k48EmPXAZPRZCwHQ", callContext.id) && ((model.variables.optionalConfigsIn.shapeAttr) !== (model.variables.internal_ConfigsVar.shapeAttr)))) {
// Set Shape
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WsDxbH6IUEynuvwxnl2afg", callContext.id);
// Internal_Configs.Shape = OptionalConfigs.Shape
model.variables.internal_ConfigsVar.shapeAttr = model.variables.optionalConfigsIn.shapeAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:n1wyh9qG00OhzpKnZKiTBA", callContext.id);
// Execute Action: UpdateShape
OutSystemsUIController.default.progressChangeTextProp$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "Shape", model.variables.internal_ConfigsVar.shapeAttr, callContext);
}

// ExtendedClass?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:a525W9JCxUGBr9Jey5sCuQ", callContext.id) && ((model.variables.extendedClassIn) !== (model.variables.internal_ConfigsVar.extendedClassAttr)))) {
// Set ExtendedClass
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cBr9DSRPrkexBktU7loRug", callContext.id);
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TMJNwg2ZMEykaoCTdixLtw", callContext.id);
// Execute Action: UpdateExtendedClass
OutSystemsUIController.default.progressChangeTextProp$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internal_ConfigsVar.extendedClassAttr, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qph2OUds4UKlwaLVShbrXg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qph2OUds4UKlwaLVShbrXg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:cSndOTBmcUmX5fg1IN7Eng", callContext.id);
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

get _initializedHandler$Action() {if(!(this.hasOwnProperty("__initializedHandler$Action"))) {
this.__initializedHandler$Action = function (progressBarIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("InitializedHandler", function (span) {
if(span) {
span.setAttribute("code.function", "InitializedHandler");
span.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("InitializedHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars"))());
vars.value.progressBarIdInLocal = progressBarIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:5muaTu5ckUa1AWvgNflK1w:/NRWebFlows.0ix1sPf1lEWTg0T_NJjm1A/NodesShownInESpaceTree.Y4GHqpJ9yUuszjkrZ0ByGA/ClientActions.5muaTu5ckUa1AWvgNflK1w:eG6d1h1u7QXn2imHstBfEg", "OutSystemsUI", "InitializedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:T8RJMMtBhkSPmujxPdRzhA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:87yMRQ5Xi0eZxCbLnNVvww", callContext.id);
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.progressBarIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Oowsl52_W0mehtEF8Hli8Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:5muaTu5ckUa1AWvgNflK1w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:5muaTu5ckUa1AWvgNflK1w", callContext.id);
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

return this.__initializedHandler$Action;
}set _initializedHandler$Action(value) {this.__initializedHandler$Action = value;
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
span.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:V5yTVaZhP0mcZ5+AyXOq6Q:/NRWebFlows.0ix1sPf1lEWTg0T_NJjm1A/NodesShownInESpaceTree.Y4GHqpJ9yUuszjkrZ0ByGA/ClientActions.V5yTVaZhP0mcZ5+AyXOq6Q:BgjHlsR9abcoevTGO6sMoA", "OutSystemsUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tAzgHYwe_0WrZIYit+4x7w", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:m6YbdMeWmEC_wzhdeyL+gg", callContext.id);
// Execute Action: Destroy
OutSystemsUIController.default.progressDestroy$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BN79PySQ8k++mm50vv_8YQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:V5yTVaZhP0mcZ5+AyXOq6Q", callContext.id);
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
span.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:unpQfDZVaEyHTlBiGEiVkw:/NRWebFlows.0ix1sPf1lEWTg0T_NJjm1A/NodesShownInESpaceTree.Y4GHqpJ9yUuszjkrZ0ByGA/ClientActions.unpQfDZVaEyHTlBiGEiVkw:34HDiFEAtFBqAhb9bvh7VA", "OutSystemsUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:tZSCGHV_pUKfJaaWi+KjrQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:MqpqtgrGQ061WkQineHYGA", callContext.id);
// Execute Action: ProgressInitialize
OutSystemsUIController.default.progressInitialize$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:21xUpUQ9ckKVOZzKH7B1OQ", callContext.id);
// Execute Action: LogEnd
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "ProgressBar Created", callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oVV36WS9b0mZx2vs0wdpTA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:unpQfDZVaEyHTlBiGEiVkw", callContext.id);
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

get _registerCallbacks$Action() {if(!(this.hasOwnProperty("__registerCallbacks$Action"))) {
this.__registerCallbacks$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("RegisterCallbacks", function (span) {
if(span) {
span.setAttribute("code.function", "RegisterCallbacks");
span.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("RegisterCallbacks");
callContext = controller.callContext(callContext);
var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCallbackHandlersJSResult = getCallbackHandlersJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:kxyj_ETbI0Czx0lP1Y8hVQ:/NRWebFlows.0ix1sPf1lEWTg0T_NJjm1A/NodesShownInESpaceTree.Y4GHqpJ9yUuszjkrZ0ByGA/ClientActions.kxyj_ETbI0Czx0lP1Y8hVQ:6DPlhTn_6DmsZDrBGIA2yg", "OutSystemsUI", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ADffNDcYvkmWfKA9sLrdug", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6m4F6oTDDEWBSzgMgwtr3A", callContext.id);
getCallbackHandlersJSResult.value = OS.Logger.startActiveSpan("GetCallbackHandlers", function (span) {
if(span) {
span.setAttribute("code.function", "GetCallbackHandlers");
span.setAttribute("outsystems.function.key", "ea056eea-c384-450c-814b-380c830b6bdc");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Numbers_ProgressBar_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult"))();
jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
InitializedHandler: controller.clientActionProxies.initializedHandler$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FTvOGCviZE+tW4YsQOXzdg", callContext.id);
// Execute Action: RegisterOnInitialize
OutSystemsUIController.default.progressRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.initializedOut, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XdIZnn_T50S2O8RJK+_Rww", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:kxyj_ETbI0Czx0lP1Y8hVQ", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__registerCallbacks$Action;
}set _registerCallbacks$Action(value) {this.__registerCallbacks$Action = value;
}


onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9");
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

onParametersChanged$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e");
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

initializedHandler$Action(progressBarIdIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("InitializedHandler__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "InitializedHandler");
span.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, progressBarIdIn);
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
span.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9");
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

onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593");
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

registerCallbacks$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("RegisterCallbacks__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "RegisterCallbacks");
span.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

get initialized$Action() {if(!(this.hasOwnProperty("_initialized$Action"))) {
this._initialized$Action = function () {
return Promise.resolve();
};
}

return this._initialized$Action;
}set initialized$Action(value) {this._initialized$Action = value;
}


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:0ix1sPf1lEWTg0T_NJjm1A:/NRWebFlows.0ix1sPf1lEWTg0T_NJjm1A:BGX7NJlmT6ITEMcatlHCIg", "OutSystemsUI", "Numbers", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:Y4GHqpJ9yUuszjkrZ0ByGA:/NRWebFlows.0ix1sPf1lEWTg0T_NJjm1A/NodesShownInESpaceTree.Y4GHqpJ9yUuszjkrZ0ByGA:HXJaa+xrxnbRxCWKJygzsw", "OutSystemsUI", "ProgressBar", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:Y4GHqpJ9yUuszjkrZ0ByGA", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:0ix1sPf1lEWTg0T_NJjm1A", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Numbers/ProgressBar On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Numbers/ProgressBar On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Numbers/ProgressBar On Destroy");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Numbers/ProgressBar On Parameters Changed");
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
Controller.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars", [{
name: "ProgressBarId",
attrName: "progressBarIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult", [{
name: "Initialized",
attrName: "initializedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Numbers.ProgressBar.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Initialized = $actions.InitializedHandler;
};
});


define("OutSystemsUI.Numbers.ProgressBar.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"RiM_u27Mw06C6u1PCq8A0Q": {
getter: function (varBag, idService) {
return varBag.generateUniqueIdVar.value;
}
},
"rrP9n7C5EEW1KYIBBrMGvA": {
getter: function (varBag, idService) {
return varBag.vars.value.progressBarIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6m4F6oTDDEWBSzgMgwtr3A": {
getter: function (varBag, idService) {
return varBag.getCallbackHandlersJSResult.value;
}
},
"y+bl5XAbBUe7jgTg3evqUw": {
getter: function (varBag, idService) {
return varBag.model.variables.internal_ConfigsVar;
}
},
"uxbaK+o5DEyaDanSkVbD9Q": {
getter: function (varBag, idService) {
return varBag.model.variables.progressIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"z8IT+AFUdEuDNiDMhRh2Fw": {
getter: function (varBag, idService) {
return varBag.model.variables.progressColorIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MYJhUJrwn023zwfdKwNPOw": {
getter: function (varBag, idService) {
return varBag.model.variables.trailColorIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SEL99AWbhk+fhTRW8qrCdQ": {
getter: function (varBag, idService) {
return varBag.model.variables.thicknessIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"hw9y99+utUmAGoLMTTVbuQ": {
getter: function (varBag, idService) {
return varBag.model.variables.optionalConfigsIn;
}
},
"AOsl2O9K3E2038MT8B_Idw": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2tMPfGG8+E2gtCtX+i8Oaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ProgressBar"));
})(varBag.model, idService);
}
},
"+7VtE8GxvUCj8echK6ME8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ProgressContainer"));
})(varBag.model, idService);
}
},
"OHbq5lw2Nku_q83hbpn1NA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ProgressValue"));
})(varBag.model, idService);
}
},
"lT5X8lqMCU6A0orFzB+k4A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

define("OutSystemsUI.Numbers.ProgressBar.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

