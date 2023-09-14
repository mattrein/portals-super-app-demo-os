define("OutSystemsUI.Utilities.ButtonLoading.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_2b510eefd88959a00bf486cfc856fa96Structure", "OutSystemsUI.controller$ButtonLoadingDestroy", "OutSystemsUI.controller$ButtonLoadingChangeBooleanProperty", "OutSystemsUI.controller$ButtonLoadingChangeTextProperty", "OutSystemsUI.controller$ButtonLoadingRegisterCallback", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$ButtonLoadingCreate", "OutSystemsUI.controller$ButtonLoadingInitialize"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_2b510eefd88959a00bf486cfc856fa96Structure());
}, false, OutSystemsUIModel.ST_2b510eefd88959a00bf486cfc856fa96Structure), 
this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowLabelOnLoading", "showLabelOnLoadingIn", "ShowLabelOnLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("IsLoading" in inputs) {
this.variables.isLoadingIn = inputs.IsLoading;
if("_isLoadingInDataFetchStatus" in inputs) {
this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
}

}

if("ShowLabelOnLoading" in inputs) {
this.variables.showLabelOnLoadingIn = inputs.ShowLabelOnLoading;
if("_showLabelOnLoadingInDataFetchStatus" in inputs) {
this.variables._showLabelOnLoadingInDataFetchStatus = inputs._showLabelOnLoadingInDataFetchStatus;
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

define("OutSystemsUI.Utilities.ButtonLoading.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Utilities.ButtonLoading.mvc$model", "OutSystemsUI.Utilities.ButtonLoading.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$ST_2b510eefd88959a00bf486cfc856fa96Structure", "OutSystemsUI.controller$ButtonLoadingDestroy", "OutSystemsUI.controller$ButtonLoadingChangeBooleanProperty", "OutSystemsUI.controller$ButtonLoadingChangeTextProperty", "OutSystemsUI.controller$ButtonLoadingRegisterCallback", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$ButtonLoadingCreate", "OutSystemsUI.controller$ButtonLoadingInitialize"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Utilities_ButtonLoading_mvc_model, OutSystemsUI_Utilities_ButtonLoading_mvc_controller, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Utilities.ButtonLoading"; }

        static getAttributes() { return {
codeFunction: "ButtonLoading",
functionKey: "b6fb29b1-5745-4f43-b887-e98b7a5eb5d1",
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
            return OutSystemsUI_Utilities_ButtonLoading_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Utilities_ButtonLoading_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.button,
extendedProperties: {
name: model.variables.internal_ConfigsVar.uniqueIdAttr
},
gridProperties: {
classes: "OSInline"
},
style: "osui-btn-loading",
_idProps: {
service: idService,
name: "Button"
},
_widgetRecordProvider: widgetsRecordProvider
}));
        }
    }

    return View;
});
define("OutSystemsUI.Utilities.ButtonLoading.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Utilities.ButtonLoading.mvc$translationsResources", "OutSystemsUI.Utilities.ButtonLoading.mvc$debugger", "OutSystemsUI.Utilities.ButtonLoading.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI.model$ST_2b510eefd88959a00bf486cfc856fa96Structure", "OutSystemsUI.controller$ButtonLoadingDestroy", "OutSystemsUI.controller$ButtonLoadingChangeBooleanProperty", "OutSystemsUI.controller$ButtonLoadingChangeTextProperty", "OutSystemsUI.controller$ButtonLoadingRegisterCallback", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$ButtonLoadingCreate", "OutSystemsUI.controller$ButtonLoadingInitialize"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Utilities_ButtonLoading_mvc_TranslationsResources, OutSystemsUI_Utilities_ButtonLoading_mvc_Debugger, OutSystemsUI_Utilities_ButtonLoading_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Utilities_ButtonLoading_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {
initializedHandler$Action: function (buttonLoadingIdIn) {
buttonLoadingIdIn = (buttonLoadingIdIn === undefined) ? "" : buttonLoadingIdIn;
return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(buttonLoadingIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
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
get _initializedHandler$Action() {if(!(this.hasOwnProperty("__initializedHandler$Action"))) {
this.__initializedHandler$Action = function (buttonLoadingIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("InitializedHandler", function (span) {
if(span) {
span.setAttribute("code.function", "InitializedHandler");
span.setAttribute("outsystems.function.key", "0edfd226-b70a-4aaf-8ff2-c0c972952aac");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("InitializedHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.InitializedHandler$vars"))());
vars.value.buttonLoadingIdInLocal = buttonLoadingIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:JtLfDgq3r0qP8sDJcpUqrA:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q/ClientActions.JtLfDgq3r0qP8sDJcpUqrA:JurpwwP6Gw3J0SBptPxlUQ", "OutSystemsUI", "InitializedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:cKAfBEbSw0epCJWAu7Cn8Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:iy1OD37kBEiL+LWR8majuA", callContext.id);
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.buttonLoadingIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KnMvZcWHlUSo7POBl_9b9w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:JtLfDgq3r0qP8sDJcpUqrA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:JtLfDgq3r0qP8sDJcpUqrA", callContext.id);
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
span.setAttribute("outsystems.function.key", "80963e7d-89b9-472a-9f6b-c1cfa982a8e0");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:fT6WgLmJKkefa8HPqYKo4A:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q/ClientActions.fT6WgLmJKkefa8HPqYKo4A:J8+N7eC63j+q1GliJDQYjA", "OutSystemsUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:IWWNn6HBzEWIBIG1uR5k9A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gzuvU6xuP0m0lVFUWo+DzQ", callContext.id);
// Execute Action: ButtonLoadingDestroy
OutSystemsUIController.default.buttonLoadingDestroy$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4vISs363ZUiquonZDfxNTA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:fT6WgLmJKkefa8HPqYKo4A", callContext.id);
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
span.setAttribute("outsystems.function.key", "db8aafb9-abe6-405b-a7ac-a76048fca091");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ua+K2+arW0CnrKdgSPygkQ:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q/ClientActions.ua+K2+arW0CnrKdgSPygkQ:LZQQlz+8wZfKakv3ObOyUg", "OutSystemsUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:EAHrP7ogeUmwGJw2FQr64g", callContext.id);
// IsLoading?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:1hM+HTrPBEKfZrFYzQHnSw", callContext.id) && ((model.variables.isLoadingIn) !== (model.variables.internal_ConfigsVar.isLoadingAttr)))) {
// Set IsLoading
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Xemsk3r7dE+4olDlfNLh_g", callContext.id);
// Internal_Configs.IsLoading = IsLoading
model.variables.internal_ConfigsVar.isLoadingAttr = model.variables.isLoadingIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:VXRkxavf3kq7IX1gWLykHg", callContext.id);
// Execute Action: UpdateIsLoading
OutSystemsUIController.default.buttonLoadingChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "IsLoading", model.variables.isLoadingIn, callContext);
}

// ShowLoadingAndLabel?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:K0FFpts5WEylML2bQxJfgA", callContext.id) && ((model.variables.showLabelOnLoadingIn) !== (model.variables.internal_ConfigsVar.showLoadingAndLabelAttr)))) {
// Set ShowLoadingAndLabel
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Vh1eKmUF6kiE721IkjCqDg", callContext.id);
// Internal_Configs.ShowLoadingAndLabel = ShowLabelOnLoading
model.variables.internal_ConfigsVar.showLoadingAndLabelAttr = model.variables.showLabelOnLoadingIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XP9a7auM0EyoGI6D+oALMA", callContext.id);
// Execute Action: UpdateIsVisible
OutSystemsUIController.default.buttonLoadingChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ShowLoadingAndLabel", model.variables.internal_ConfigsVar.showLoadingAndLabelAttr, callContext);
}

// ExtendedClass?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:W39tJ3jg3Uu8zCkvJk8WJg", callContext.id) && ((model.variables.extendedClassIn) !== (model.variables.internal_ConfigsVar.extendedClassAttr)))) {
// Set ExtendedClass
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:yqSLuX104E6vkysxgBggww", callContext.id);
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gI8c6U7y4U256pOsXvR2Eg", callContext.id);
// Execute Action: UpdateExtendedClass
OutSystemsUIController.default.buttonLoadingChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internal_ConfigsVar.extendedClassAttr, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GtogxBUKzUaPbjRltGzdTQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GtogxBUKzUaPbjRltGzdTQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ua+K2+arW0CnrKdgSPygkQ", callContext.id);
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
span.setAttribute("outsystems.function.key", "e9af2ffc-de9d-4700-b1b8-a3f0ad0f9943");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("RegisterCallbacks");
callContext = controller.callContext(callContext);
var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCallbackHandlersJSResult = getCallbackHandlersJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_C+v6Z3eAEexuKPwrQ+ZQw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q/ClientActions._C+v6Z3eAEexuKPwrQ+ZQw:Y99SsTNIL+QzVXRdkGXMmw", "OutSystemsUI", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Umxt_61UvUyQltOjiQDqlQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AOBsPPiuLEWs1Bvf3PqMeg", callContext.id);
getCallbackHandlersJSResult.value = OS.Logger.startActiveSpan("GetCallbackHandlers", function (span) {
if(span) {
span.setAttribute("code.function", "GetCallbackHandlers");
span.setAttribute("outsystems.function.key", "3c6ce000-aef8-452c-acd4-1bdfdcfa8c7a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Utilities_ButtonLoading_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult"))();
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
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N_44F1d43EaVWTHSRFLZuw", callContext.id);
// Execute Action: RegisterOnInitialize
OutSystemsUIController.default.buttonLoadingRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.initializedOut, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TlwPDioEc0y4qb1tSv53xw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_C+v6Z3eAEexuKPwrQ+ZQw", callContext.id);
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
span.setAttribute("outsystems.function.key", "eb8e028b-e0d2-4a0d-99a7-f97618a1eada");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.generateUniqueIdVar = generateUniqueIdVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:iwKO69LgDUqZp_l2GKHq2g:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q/ClientActions.iwKO69LgDUqZp_l2GKHq2g:l8kBAI775SNDCU5QrK3rhw", "OutSystemsUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aVBmr4KzmUKvizM9g5FLJA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:EnKOKIoHpEOj0yXkzE72EA", callContext.id);
// Execute Action: LogStart
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create ButtonLoading", callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:N9mIyzb4eUSkHyfk5NvMzQ", callContext.id);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);

// Set Internal Configs
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pL5Rn_0VaE+6_E8EBE+3ug", callContext.id);
// Internal_Configs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internal_ConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pL5Rn_0VaE+6_E8EBE+3ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Internal_Configs.IsLoading = IsLoading
model.variables.internal_ConfigsVar.isLoadingAttr = model.variables.isLoadingIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pL5Rn_0VaE+6_E8EBE+3ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Internal_Configs.ShowLoadingAndLabel = ShowLabelOnLoading
model.variables.internal_ConfigsVar.showLoadingAndLabelAttr = model.variables.showLabelOnLoadingIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:pL5Rn_0VaE+6_E8EBE+3ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gzXIy2Xa_UWDF4p4vIF1wQ", callContext.id);
// Execute Action: ButtonLoadingCreate
OutSystemsUIController.default.buttonLoadingCreate$Action(model.variables.internal_ConfigsVar, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Wh2JinH_MUeazHVbkAtOlw", callContext.id);
// Execute Action: RegisterCallbacks
controller._registerCallbacks$Action(callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:2DGHUP+ofEaKnZY0kw2lKQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:iwKO69LgDUqZp_l2GKHq2g", callContext.id);
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
span.setAttribute("outsystems.function.key", "ff263e3c-bfcd-47ea-a0b9-96fb1264fae5");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:PD4m_82_6keguZb7EmT65Q:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q/ClientActions.PD4m_82_6keguZb7EmT65Q:gbnfATcd13lPnbeV7Rb4Xw", "OutSystemsUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CmYKRuirOU2Ld6OSpOW67Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:abKcSFaMyESXi5dqcLBgfg", callContext.id);
// Execute Action: ButtonLoadingInitialize
OutSystemsUIController.default.buttonLoadingInitialize$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:7DwyRZsX_0mNXao7j+wldQ", callContext.id);
// Execute Action: LogEnd
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "ButtonLoading created", callContext);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BBI1NP4iD0Slgotf7qt3qg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:PD4m_82_6keguZb7EmT65Q", callContext.id);
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


initializedHandler$Action(buttonLoadingIdIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("InitializedHandler__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "InitializedHandler");
span.setAttribute("outsystems.function.key", "0edfd226-b70a-4aaf-8ff2-c0c972952aac");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, buttonLoadingIdIn);
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
span.setAttribute("outsystems.function.key", "80963e7d-89b9-472a-9f6b-c1cfa982a8e0");
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
span.setAttribute("outsystems.function.key", "db8aafb9-abe6-405b-a7ac-a76048fca091");
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

registerCallbacks$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("RegisterCallbacks__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "RegisterCallbacks");
span.setAttribute("outsystems.function.key", "e9af2ffc-de9d-4700-b1b8-a3f0ad0f9943");
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

onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "eb8e028b-e0d2-4a0d-99a7-f97618a1eada");
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

onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "ff263e3c-bfcd-47ea-a0b9-96fb1264fae5");
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
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw:H+UJ8W9I8hc71hqLkfsPOw", "OutSystemsUI", "Utilities", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:sSn7tkVXQ0+4h+mLel610Q:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.sSn7tkVXQ0+4h+mLel610Q:K5mVE92RTEPe7pUDcZhS_w", "OutSystemsUI", "ButtonLoading", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:sSn7tkVXQ0+4h+mLel610Q", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/ButtonLoading On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/ButtonLoading On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/ButtonLoading On Destroy");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/ButtonLoading On Parameters Changed");
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
Controller.registerVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.InitializedHandler$vars", [{
name: "ButtonLoadingId",
attrName: "buttonLoadingIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult", [{
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

define("OutSystemsUI.Utilities.ButtonLoading.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Initialized = $actions.InitializedHandler;
};
});


define("OutSystemsUI.Utilities.ButtonLoading.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"eS3Gcup44k2YTqBxIet5sQ": {
getter: function (varBag, idService) {
return varBag.vars.value.buttonLoadingIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AOBsPPiuLEWs1Bvf3PqMeg": {
getter: function (varBag, idService) {
return varBag.getCallbackHandlersJSResult.value;
}
},
"N9mIyzb4eUSkHyfk5NvMzQ": {
getter: function (varBag, idService) {
return varBag.generateUniqueIdVar.value;
}
},
"BqZXklpcOUGbzg_lRcKwew": {
getter: function (varBag, idService) {
return varBag.model.variables.internal_ConfigsVar;
}
},
"5vwk7_knKEOeJsCNs8sgTw": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"_2vyWllrYEay2VDyvPRbZw": {
getter: function (varBag, idService) {
return varBag.model.variables.showLabelOnLoadingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"bqiZP3Ect0aiJXrwX31a0A": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"CVl6ZCZWOUClYIFkomzQQg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

define("OutSystemsUI.Utilities.ButtonLoading.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

