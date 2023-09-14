﻿define("OutSystemsUI.Private.MenuDrag.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.Utilities.TouchEvents.mvc$model"], function (OutSystems, OutSystemsUIModel, OutSystemsUI_Utilities_TouchEvents_mvcModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IsMoving", "isMovingVar", "IsMoving", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("MoveX", "moveXVar", "MoveX", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("MenuWidth", "menuWidthVar", "MenuWidth", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("IsOpen", "isOpenVar", "IsOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("LastX", "lastXVar", "LastX", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("LastY", "lastYVar", "LastY", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("DragDirection", "dragDirectionVar", "DragDirection", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("PreventDefault", "preventDefaultVar", "PreventDefault", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("FloatingActionsExists", "floatingActionsExistsVar", "FloatingActionsExists", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("BurgerMenuExists", "burgerMenuExistsVar", "BurgerMenuExists", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Velocity", "velocityVar", "Velocity", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return (new OS.DataTypes.Decimal("0.3"));
}, false), 
this.attr("BackExists", "backExistsVar", "BackExists", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsMenuHidden", "isMenuHiddenVar", "IsMenuHidden", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsRTL", "isRTLVar", "IsRTL", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("MenuId", "menuIdIn", "MenuId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_menuIdInDataFetchStatus", "_menuIdInDataFetchStatus", "_menuIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = OutSystemsUI_Utilities_TouchEvents_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
if("MenuId" in inputs) {
this.variables.menuIdIn = inputs.MenuId;
if("_menuIdInDataFetchStatus" in inputs) {
this.variables._menuIdInDataFetchStatus = inputs._menuIdInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Private.MenuDrag.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Private.MenuDrag.mvc$model", "OutSystemsUI.Private.MenuDrag.mvc$controller", "OutSystemsUI.Utilities.TouchEvents.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Private_MenuDrag_mvc_model, OutSystemsUI_Private_MenuDrag_mvc_controller, OutSystemsUI_Utilities_TouchEvents_mvc_view, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Private.MenuDrag"; }

        static getAttributes() { return {
codeFunction: "MenuDrag",
functionKey: "99cc2beb-5d4d-41af-838d-82eae4e36402",
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
            return [OutSystemsUI_Utilities_TouchEvents_mvc_view];
        }

        get modelFactory() {
            return OutSystemsUI_Private_MenuDrag_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Private_MenuDrag_mvc_controller;
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
return [React.createElement(OutSystemsUI_Utilities_TouchEvents_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
WidgetId: model.variables.menuIdIn,
_widgetIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._menuIdInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
end$Action: function (xIn, yIn, offsetXIn, offsetYIn, timeTakenIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/TouchEvents End");
controller.gestureEnd$Action(OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(offsetXIn)), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(offsetYIn)), timeTakenIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
start$Action: function (xIn, yIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/TouchEvents Start");
controller.gestureStart$Action(OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(xIn)), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(yIn)), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
move$Action: function (xIn, yIn, offsetXIn, offsetYIn, evtIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities/TouchEvents Move");
controller.gestureMove$Action(OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(xIn)), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(yIn)), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(offsetXIn)), OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(offsetYIn)), evtIn, controller.callContext(eventHandlerContext));
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
define("OutSystemsUI.Private.MenuDrag.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Private.MenuDrag.mvc$translationsResources", "OutSystemsUI.Private.MenuDrag.mvc$debugger", "OutSystemsUI.Private.MenuDrag.mvc$controller.UpdateUI.MoveMenuJS", "OutSystemsUI.Private.MenuDrag.mvc$controller.GestureStart.CheckMenuOpenJS", "OutSystemsUI.Private.MenuDrag.mvc$controller.GestureMove.PreventDefaultWDirectionJS", "OutSystemsUI.Private.MenuDrag.mvc$controller.GestureMove.UpdateUIJS", "OutSystemsUI.Private.MenuDrag.mvc$controller.GestureMove.SetOpacityJS", "OutSystemsUI.Private.MenuDrag.mvc$controller.GestureEnd.RemoveClasses2JS", "OutSystemsUI.Private.MenuDrag.mvc$controller.GestureEnd.GoBackJS", "OutSystemsUI.Private.MenuDrag.mvc$controller.GestureEnd.RemoveTransitionJS", "OutSystemsUI.Private.MenuDrag.mvc$controller.GestureEnd.SendMenuToStartJS", "OutSystemsUI.Private.MenuDrag.mvc$controller.GestureEnd.OpenEnitreMenuJS"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Private_MenuDrag_mvc_TranslationsResources, OutSystemsUI_Private_MenuDrag_mvc_Debugger, OutSystemsUI_Private_MenuDrag_mvc_controller_UpdateUI_MoveMenuJS, OutSystemsUI_Private_MenuDrag_mvc_controller_GestureStart_CheckMenuOpenJS, OutSystemsUI_Private_MenuDrag_mvc_controller_GestureMove_PreventDefaultWDirectionJS, OutSystemsUI_Private_MenuDrag_mvc_controller_GestureMove_UpdateUIJS, OutSystemsUI_Private_MenuDrag_mvc_controller_GestureMove_SetOpacityJS, OutSystemsUI_Private_MenuDrag_mvc_controller_GestureEnd_RemoveClasses2JS, OutSystemsUI_Private_MenuDrag_mvc_controller_GestureEnd_GoBackJS, OutSystemsUI_Private_MenuDrag_mvc_controller_GestureEnd_RemoveTransitionJS, OutSystemsUI_Private_MenuDrag_mvc_controller_GestureEnd_SendMenuToStartJS, OutSystemsUI_Private_MenuDrag_mvc_controller_GestureEnd_OpenEnitreMenuJS) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Private_MenuDrag_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {
updateUI$Action: function () {
return controller.executeActionInsideJSNode(controller._updateUI$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "UpdateUI");
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
get _updateUI$Action() {if(!(this.hasOwnProperty("__updateUI$Action"))) {
this.__updateUI$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("UpdateUI", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateUI");
span.setAttribute("outsystems.function.key", "1ba81c37-e16f-4a2f-a8af-db4c95bd986c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("UpdateUI");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:NxyoG2_hL0qor9tMlb2YbA:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.6yvMmU1dr0GDjYLq5ONkAg/ClientActions.NxyoG2_hL0qor9tMlb2YbA:aBBv8XOvQTyX1YHX3sPyEw", "OutSystemsUI", "UpdateUI", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aS84n1+_ekmeoeR0rz13pw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bsUhrm0Kf06Y3jHyrw_w5A", callContext.id) && model.variables.isMovingVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kh9hK_JVtEO5Sfy_hsCKMQ", callContext.id);
OS.Logger.startActiveSpan("MoveMenu", function (span) {
if(span) {
span.setAttribute("code.function", "MoveMenu");
span.setAttribute("outsystems.function.key", "2b611f92-55f2-43b4-b949-fcbf86c08a31");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_MenuDrag_mvc_controller_UpdateUI_MoveMenuJS, "MoveMenu", "UpdateUI", {
MoveX: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar), OS.DataTypes.DataTypes.Decimal),
MenuWidth: OS.DataConversion.JSNodeParamConverter.to(model.variables.menuWidthVar, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
}, {
UpdateUI: controller.clientActionProxies.updateUI$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0aFfM+Oyj06PXvRHXioHLw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:0aFfM+Oyj06PXvRHXioHLw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:NxyoG2_hL0qor9tMlb2YbA", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__updateUI$Action;
}set _updateUI$Action(value) {this.__updateUI$Action = value;
}

get _gestureStart$Action() {if(!(this.hasOwnProperty("__gestureStart$Action"))) {
this.__gestureStart$Action = function (xIn, yIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("GestureStart", function (span) {
if(span) {
span.setAttribute("code.function", "GestureStart");
span.setAttribute("outsystems.function.key", "2edab965-ca41-4ce5-98d6-11b5a53fbaa5");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("GestureStart");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.MenuDrag.GestureStart$vars"))());
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
var checkMenuOpenJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkMenuOpenJSResult = checkMenuOpenJSResult;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:ZbnaLkHK5UyY1hG1pT+6pQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.6yvMmU1dr0GDjYLq5ONkAg/ClientActions.ZbnaLkHK5UyY1hG1pT+6pQ:n2dhdgautTLRtljn0yK27w", "OutSystemsUI", "GestureStart", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lKcjTBSD00OrERNDrLvmjA", callContext.id);
// Menu is moving
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ROyDytNHkEOYy5H4qhCL+g", callContext.id);
// IsMoving = True
model.variables.isMovingVar = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8vkWOcvrpUm7Vg3BvzbVJQ", callContext.id);
checkMenuOpenJSResult.value = OS.Logger.startActiveSpan("CheckMenuOpen", function (span) {
if(span) {
span.setAttribute("code.function", "CheckMenuOpen");
span.setAttribute("outsystems.function.key", "3916f9f2-ebcb-49a5-bb56-0dc1bf36d525");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_MenuDrag_mvc_controller_GestureStart_CheckMenuOpenJS, "CheckMenuOpen", "GestureStart", {
BackExists: OS.DataConversion.JSNodeParamConverter.to(model.variables.backExistsVar, OS.DataTypes.DataTypes.Boolean),
IsOpen: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
MenuWidth: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
isBurgerIconVisible: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
isBackIconVisible: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
IsMenuHidden: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
isRTL: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.MenuDrag.GestureStart$checkMenuOpenJSResult"))();
jsNodeResult.isOpenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsOpen, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.menuWidthOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MenuWidth, OS.DataTypes.DataTypes.Integer);
jsNodeResult.isBurgerIconVisibleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isBurgerIconVisible, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.isBackIconVisibleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isBackIconVisible, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.isMenuHiddenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsMenuHidden, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.isRTLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isRTL, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Set initial conditions
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BPyaJ6VFLkipLPC8KOzjQA", callContext.id);
// BackExists = CheckMenuOpen.isBackIconVisible
model.variables.backExistsVar = checkMenuOpenJSResult.value.isBackIconVisibleOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BPyaJ6VFLkipLPC8KOzjQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// BurgerMenuExists = CheckMenuOpen.isBurgerIconVisible
model.variables.burgerMenuExistsVar = checkMenuOpenJSResult.value.isBurgerIconVisibleOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BPyaJ6VFLkipLPC8KOzjQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsMenuHidden = CheckMenuOpen.IsMenuHidden
model.variables.isMenuHiddenVar = checkMenuOpenJSResult.value.isMenuHiddenOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BPyaJ6VFLkipLPC8KOzjQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// IsOpen = CheckMenuOpen.IsOpen
model.variables.isOpenVar = checkMenuOpenJSResult.value.isOpenOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BPyaJ6VFLkipLPC8KOzjQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// MenuWidth = CheckMenuOpen.MenuWidth
model.variables.menuWidthVar = checkMenuOpenJSResult.value.menuWidthOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BPyaJ6VFLkipLPC8KOzjQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// LastX = X
model.variables.lastXVar = vars.value.xInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BPyaJ6VFLkipLPC8KOzjQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// LastY = Y
model.variables.lastYVar = vars.value.yInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BPyaJ6VFLkipLPC8KOzjQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// IsRTL = CheckMenuOpen.isRTL
model.variables.isRTLVar = checkMenuOpenJSResult.value.isRTLOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BPyaJ6VFLkipLPC8KOzjQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// MoveX = If
model.variables.moveXVar = ((model.variables.burgerMenuExistsVar) ? (((model.variables.isOpenVar) ? (0) : (((model.variables.isRTLVar) ? (model.variables.menuWidthVar) : (-model.variables.menuWidthVar))))) : ((-model.variables.menuWidthVar * 2)));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BPyaJ6VFLkipLPC8KOzjQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// DragDirection = ""
model.variables.dragDirectionVar = "";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:BPyaJ6VFLkipLPC8KOzjQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// PreventDefault = True
model.variables.preventDefaultVar = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:9v9+fs3Tu0KRQw8IxPO8AA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:ZbnaLkHK5UyY1hG1pT+6pQ", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__gestureStart$Action;
}set _gestureStart$Action(value) {this.__gestureStart$Action = value;
}

get _gestureMove$Action() {if(!(this.hasOwnProperty("__gestureMove$Action"))) {
this.__gestureMove$Action = function (xIn, yIn, offsetXIn, offsetYIn, evtIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("GestureMove", function (span) {
if(span) {
span.setAttribute("code.function", "GestureMove");
span.setAttribute("outsystems.function.key", "a6eae758-cf0d-4ab9-8108-4130d328e4cb");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("GestureMove");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.MenuDrag.GestureMove$vars"))());
vars.value.xInLocal = xIn;
vars.value.yInLocal = yIn;
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
vars.value.evtInLocal = evtIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:WOfqpg3PuUqBCEEw0yjkyw:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.6yvMmU1dr0GDjYLq5ONkAg/ClientActions.WOfqpg3PuUqBCEEw0yjkyw:QX65cngQP+vh3V9pg_RPGQ", "OutSystemsUI", "GestureMove", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:SFzt9a8vV0i01B9NDvTBkw", callContext.id);
// No direction set?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8_7fsOytK0SUh8oVDfLx8Q", callContext.id) && (model.variables.dragDirectionVar === ""))) {
// Set drag direction
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ki+EqyAlQ0qz+pP3BYH4UA", callContext.id);
// DragDirection = If
model.variables.dragDirectionVar = ((OS.BuiltinFunctions.abs(OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal)).gte(OS.BuiltinFunctions.abs(OS.BuiltinFunctions.integerToDecimal(vars.value.offsetYInLocal)))) ? ("horizontal") : ("vertical"));
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:j9qvg+f1l0C0nC8PIkVwHA", callContext.id);
OS.Logger.startActiveSpan("UpdateUI", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateUI");
span.setAttribute("outsystems.function.key", "83afda8f-f5e7-4097-b49c-2f0f2245701c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_MenuDrag_mvc_controller_GestureMove_UpdateUIJS, "UpdateUI", "GestureMove", null, function ($parameters) {
}, {
UpdateUI: controller.clientActionProxies.updateUI$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
}

if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qUunvOIT70mmAXfzl6eWkw", callContext.id) && model.variables.floatingActionsExistsVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v9EAKhn14UC8qRRKaZGr+A", callContext.id);
} else {
// Menu Icons Conditions
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:kOPFkbnsmkq9SaQqEv6SAg", callContext.id) && ((model.variables.backExistsVar || !(model.variables.burgerMenuExistsVar)) || model.variables.isMenuHiddenVar))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v9EAKhn14UC8qRRKaZGr+A", callContext.id);
} else {
// Is vertical?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GnrdryxY50q_LjK1eT13Vg", callContext.id) && (model.variables.dragDirectionVar === "vertical"))) {
// Update Last Positions
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WlgWa9H5dEuRULxkjbfNjw", callContext.id);
// LastY = Y
model.variables.lastYVar = vars.value.yInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:WlgWa9H5dEuRULxkjbfNjw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LastX = X
model.variables.lastXVar = vars.value.xInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v9EAKhn14UC8qRRKaZGr+A", callContext.id);
} else {
do {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:PvAwayxpPk2MJZQNh9HLig", callContext.id);
OS.Logger.startActiveSpan("PreventDefaultWDirection", function (span) {
if(span) {
span.setAttribute("code.function", "PreventDefaultWDirection");
span.setAttribute("outsystems.function.key", "6b30f03e-692c-4d3e-8c25-940d87d1cb8a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_MenuDrag_mvc_controller_GestureMove_PreventDefaultWDirectionJS, "PreventDefaultWDirection", "GestureMove", {
Evt: OS.DataConversion.JSNodeParamConverter.to(vars.value.evtInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lWF6pJ8+4EKvJtIGOz0DpQ", callContext.id) && model.variables.isRTLVar)) {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XiRk6kNOr0SpTfptmFbiCA", callContext.id) && !((((model.variables.moveXVar + (vars.value.xInLocal - model.variables.lastXVar)) < model.variables.menuWidthVar) && ((model.variables.moveXVar + (vars.value.xInLocal - model.variables.lastXVar)) >= 0))))) {
break;
}

} else {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:V0EvL8MV9kWzSefkXatmUw", callContext.id) && !((((model.variables.moveXVar + (vars.value.xInLocal - model.variables.lastXVar)) > -model.variables.menuWidthVar) && ((model.variables.moveXVar + (vars.value.xInLocal - model.variables.lastXVar)) <= 0))))) {
break;
}

}

// Update menu X axis offset
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:J+THN3NQk0KrgCMrPFPKOQ", callContext.id);
// MoveX = MoveX + X - LastX
model.variables.moveXVar = (model.variables.moveXVar + (vars.value.xInLocal - model.variables.lastXVar));
} while(false)
;
// Update Last Positions
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:K7ygiNAhy0iYkMrKzi+tbQ", callContext.id);
// LastY = Y
model.variables.lastYVar = vars.value.yInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:K7ygiNAhy0iYkMrKzi+tbQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LastX = X
model.variables.lastXVar = vars.value.xInLocal;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FK8HkSC58E+jqXManjxRhw", callContext.id);
OS.Logger.startActiveSpan("SetOpacity", function (span) {
if(span) {
span.setAttribute("code.function", "SetOpacity");
span.setAttribute("outsystems.function.key", "9107af14-b920-4ff0-a3a9-731a9e3c5187");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_MenuDrag_mvc_controller_GestureMove_SetOpacityJS, "SetOpacity", "GestureMove", {
MenuWidth: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.integerToDecimal(model.variables.menuWidthVar), OS.DataTypes.DataTypes.Decimal),
MoveX: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.integerToDecimal(model.variables.moveXVar), OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v9EAKhn14UC8qRRKaZGr+A", callContext.id);
}

}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:WOfqpg3PuUqBCEEw0yjkyw", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__gestureMove$Action;
}set _gestureMove$Action(value) {this.__gestureMove$Action = value;
}

get _gestureEnd$Action() {if(!(this.hasOwnProperty("__gestureEnd$Action"))) {
this.__gestureEnd$Action = function (offsetXIn, offsetYIn, timeTakenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("GestureEnd", function (span) {
if(span) {
span.setAttribute("code.function", "GestureEnd");
span.setAttribute("outsystems.function.key", "c15a446e-4445-4338-b309-5752aa2fca41");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("GestureEnd");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Private.MenuDrag.GestureEnd$vars"))());
vars.value.offsetXInLocal = offsetXIn;
vars.value.offsetYInLocal = offsetYIn;
vars.value.timeTakenInLocal = timeTakenIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:bkRawUVEOEOzCVdSqi_KQQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.6yvMmU1dr0GDjYLq5ONkAg/ClientActions.bkRawUVEOEOzCVdSqi_KQQ:7DxybZGU9ZxFzuRHECaymQ", "OutSystemsUI", "GestureEnd", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Nb9szY5sDkSte8k7Cdkw_w", callContext.id);
// Set not moving
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ntWE+QAkyESGV1ac4tg2yQ", callContext.id);
// IsMoving = False
model.variables.isMovingVar = false;
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:E6+EwylBjkWPVk3NOzSBwg", callContext.id) && !(model.variables.isMenuHiddenVar))) {
// Just Clicked?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:E_8KbTCux0S11i4VEPZ7Ew", callContext.id) && ((vars.value.offsetXInLocal === 0) && (vars.value.offsetYInLocal === 0)))) {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:H43tK9pZqEai_dULxcUZ6Q", callContext.id) && !(model.variables.isOpenVar))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v9Q8WBCt0kWRdXSIgPTE3A", callContext.id);
return ;

}

} else {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:W4glSSiwt0q5aaQmU1_HNw", callContext.id) && model.variables.backExistsVar)) {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oulysr6grEaPzNqkw8rPug", callContext.id) && model.variables.isRTLVar)) {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FDYvJvkW6UWkZxqdJzU4bg", callContext.id) && !((vars.value.offsetXInLocal < 0)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v9Q8WBCt0kWRdXSIgPTE3A", callContext.id);
return ;

}

} else {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:c4I37pUAH0ma6+Imh4JyDA", callContext.id) && !((vars.value.offsetXInLocal > 0)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v9Q8WBCt0kWRdXSIgPTE3A", callContext.id);
return ;

}

}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8y9IS1HbYEaomAiPX4U14g", callContext.id);
OS.Logger.startActiveSpan("GoBack", function (span) {
if(span) {
span.setAttribute("code.function", "GoBack");
span.setAttribute("outsystems.function.key", "4b482ff3-db51-4660-a898-088f5f8535e2");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_MenuDrag_mvc_controller_GestureEnd_GoBackJS, "GoBack", "GestureEnd", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v9Q8WBCt0kWRdXSIgPTE3A", callContext.id);
return ;

} else {
var block2 = false;
do {
block2 = false;
do {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:LSFuS6slG0mg0_Hc0NqHGg", callContext.id) && model.variables.isOpenVar)) {
// Closed one third?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:oIIyEb6WpEyh+ZzR5WxUYw", callContext.id) && (OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal).lt(OS.BuiltinFunctions.integerToDecimal((-1 * model.variables.menuWidthVar)).div(OS.BuiltinFunctions.integerToDecimal(2))) || OS.BuiltinFunctions.abs(OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal)).div(vars.value.timeTakenInLocal).gt(model.variables.velocityVar)))) {
break;
}

} else {
// Opened two thirds?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:XSNTqhyGEUeD+6xN0erulg", callContext.id) && !((OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal).gt(OS.BuiltinFunctions.integerToDecimal((1 * model.variables.menuWidthVar)).div(OS.BuiltinFunctions.integerToDecimal(2))) || OS.BuiltinFunctions.abs(OS.BuiltinFunctions.integerToDecimal(vars.value.offsetXInLocal)).div(vars.value.timeTakenInLocal).gt(model.variables.velocityVar))))) {
break;
}

}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CXv26staa0yfqLRzpLjTnA", callContext.id);
OS.Logger.startActiveSpan("OpenEnitreMenu", function (span) {
if(span) {
span.setAttribute("code.function", "OpenEnitreMenu");
span.setAttribute("outsystems.function.key", "eaf67b09-5acb-4c6b-9fa8-b473a4b8d39c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_MenuDrag_mvc_controller_GestureEnd_OpenEnitreMenuJS, "OpenEnitreMenu", "GestureEnd", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:4po1esjMfE2XsNie9h82Yg", callContext.id);
// IsOpen = True
model.variables.isOpenVar = true;
// jump to block2
block2 = true;
break;
} while(false)
;
if(block2) {
break;
}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:gG4upwHFvECLiUJ2GTh4sw", callContext.id);
OS.Logger.startActiveSpan("SendMenuToStart", function (span) {
if(span) {
span.setAttribute("code.function", "SendMenuToStart");
span.setAttribute("outsystems.function.key", "a72e6e80-c501-40bc-8b89-4276193878b3");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_MenuDrag_mvc_controller_GestureEnd_SendMenuToStartJS, "SendMenuToStart", "GestureEnd", {
IsRTL: OS.DataConversion.JSNodeParamConverter.to(model.variables.isRTLVar, OS.DataTypes.DataTypes.Boolean),
OffsetX: OS.DataConversion.JSNodeParamConverter.to(vars.value.offsetXInLocal, OS.DataTypes.DataTypes.Integer),
IsOpen: OS.DataConversion.JSNodeParamConverter.to(model.variables.isOpenVar, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Are you dragging on the opposite direction with the menu open
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZdSVsTARsEmfGFJfg8UTfg", callContext.id) && (((vars.value.offsetXInLocal < 0) && !(model.variables.isRTLVar)) || ((vars.value.offsetXInLocal > 0) && model.variables.isRTLVar)))) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:fMjbiLTkbUezqjIAuP6zVQ", callContext.id);
// IsOpen = False
model.variables.isOpenVar = false;
}

} while(false)
;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:t804oRYEA0S7BdariTvw5w", callContext.id);
OS.Logger.startActiveSpan("RemoveTransition", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveTransition");
span.setAttribute("outsystems.function.key", "a138cdb7-0416-4403-bb05-d6ab893bf0e7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_MenuDrag_mvc_controller_GestureEnd_RemoveTransitionJS, "RemoveTransition", "GestureEnd", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v9Q8WBCt0kWRdXSIgPTE3A", callContext.id);
return ;

}

}

}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:bLLUQlLedkywLhcBkLmyxg", callContext.id);
OS.Logger.startActiveSpan("RemoveClasses2", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveClasses2");
span.setAttribute("outsystems.function.key", "42d4b26c-de52-4c76-b02e-170190b9b2c6");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_MenuDrag_mvc_controller_GestureEnd_RemoveClasses2JS, "RemoveClasses2", "GestureEnd", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:v9Q8WBCt0kWRdXSIgPTE3A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:bkRawUVEOEOzCVdSqi_KQQ", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__gestureEnd$Action;
}set _gestureEnd$Action(value) {this.__gestureEnd$Action = value;
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
span.setAttribute("outsystems.function.key", "c17bf31e-03cf-426a-9387-3c55b572d02e");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:HvN7wc8DakKThzxVtXLQLg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.6yvMmU1dr0GDjYLq5ONkAg/ClientActions.HvN7wc8DakKThzxVtXLQLg:BBn44lZVLbKFXH9g8MZJkA", "OutSystemsUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:jzdkju6IfU2_mMPwkb6EAg", callContext.id);
// Set initial conditions
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xAP+oZpHi0e75eFaJizEqg", callContext.id);
// IsOpen = False
model.variables.isOpenVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xAP+oZpHi0e75eFaJizEqg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// MenuWidth = 0
model.variables.menuWidthVar = 0;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xAP+oZpHi0e75eFaJizEqg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// LastX = 0
model.variables.lastXVar = 0;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xAP+oZpHi0e75eFaJizEqg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// LastY = 0
model.variables.lastYVar = 0;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xAP+oZpHi0e75eFaJizEqg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// MoveX = 0
model.variables.moveXVar = 0;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xAP+oZpHi0e75eFaJizEqg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// DragDirection = ""
model.variables.dragDirectionVar = "";
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xAP+oZpHi0e75eFaJizEqg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// PreventDefault = False
model.variables.preventDefaultVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:xAP+oZpHi0e75eFaJizEqg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// FloatingActionsExists = False
model.variables.floatingActionsExistsVar = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:f5_YfPfEX02DuPFyX5rYjQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:HvN7wc8DakKThzxVtXLQLg", callContext.id);
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


updateUI$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("UpdateUI__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateUI");
span.setAttribute("outsystems.function.key", "1ba81c37-e16f-4a2f-a8af-db4c95bd986c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._updateUI$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

gestureStart$Action(xIn, yIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GestureStart__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GestureStart");
span.setAttribute("outsystems.function.key", "2edab965-ca41-4ce5-98d6-11b5a53fbaa5");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._gestureStart$Action, callContext, xIn, yIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

gestureMove$Action(xIn, yIn, offsetXIn, offsetYIn, evtIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GestureMove__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GestureMove");
span.setAttribute("outsystems.function.key", "a6eae758-cf0d-4ab9-8108-4130d328e4cb");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._gestureMove$Action, callContext, xIn, yIn, offsetXIn, offsetYIn, evtIn);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

gestureEnd$Action(offsetXIn, offsetYIn, timeTakenIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GestureEnd__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GestureEnd");
span.setAttribute("outsystems.function.key", "c15a446e-4445-4338-b309-5752aa2fca41");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._gestureEnd$Action, callContext, offsetXIn, offsetYIn, timeTakenIn);
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
span.setAttribute("outsystems.function.key", "c17bf31e-03cf-426a-9387-3c55b572d02e");
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


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:iwiOphx9xsA5b5dLEBsqNQ", "OutSystemsUI", "Private", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6yvMmU1dr0GDjYLq5ONkAg:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.6yvMmU1dr0GDjYLq5ONkAg:nRkGeKgL1w9IkHqJ91zeRg", "OutSystemsUI", "MenuDrag", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6yvMmU1dr0GDjYLq5ONkAg", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/MenuDrag On Initialize");
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
return OutSystemsUIController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables
Controller.registerVariableGroupType("OutSystemsUI.Private.MenuDrag.GestureStart$vars", [{
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
Controller.registerVariableGroupType("OutSystemsUI.Private.MenuDrag.GestureStart$checkMenuOpenJSResult", [{
name: "IsOpen",
attrName: "isOpenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "MenuWidth",
attrName: "menuWidthOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "isBurgerIconVisible",
attrName: "isBurgerIconVisibleOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "isBackIconVisible",
attrName: "isBackIconVisibleOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsMenuHidden",
attrName: "isMenuHiddenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "isRTL",
attrName: "isRTLOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Private.MenuDrag.GestureMove$vars", [{
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
name: "Evt",
attrName: "evtInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Private.MenuDrag.GestureEnd$vars", [{
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
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Private.MenuDrag.mvc$controller.UpdateUI.MoveMenuJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.querySelector('.app-menu-content');

el.style.transform =  "translateX(" + ($parameters.MoveX + $parameters.MenuWidth) + "px)";
el.style.webkitTransform =  "translateX(" + ($parameters.MoveX + $parameters.MenuWidth) + "px)";

requestAnimationFrame($actions.UpdateUI);
};
});

define("OutSystemsUI.Private.MenuDrag.mvc$controller.GestureStart.CheckMenuOpenJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var layoutOpen = document.querySelector('.layout.menu-visible');
var menu = document.querySelector('.layout');
var appMenu = document.querySelector('.app-menu-content');
var isTablet = document.querySelector('body.tablet.landscape');
var isRTL = document.querySelector('.is-rtl');

var burgerIcon = document.querySelector('.app-menu-icon .menu-icon');
var backIcon = document.querySelector('.app-menu-icon.back .menu-back');

if(menu && appMenu) {
    if(!$parameters.BackExists) {
        appMenu.classList.add("no-transition");
    }
    
    if (layoutOpen !== null) {
        $parameters.IsOpen = true;
    }
    
    $parameters.MenuWidth = document.querySelector('.app-menu-content').offsetWidth;
    
     if (burgerIcon !== null && backIcon === null) {
        $parameters.isBurgerIconVisible = true;
    } else if (backIcon !== null) {
        $parameters.isBackIconVisible = true;
    } else if (burgerIcon === null && backIcon === null) {
        $parameters.IsMenuHidden = true;
    }
    
    if(isRTL) {
        $parameters.isRTL = true;
    } 
    
}



};
});

define("OutSystemsUI.Private.MenuDrag.mvc$controller.GestureMove.PreventDefaultWDirectionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Evt.preventDefault();
};
});

define("OutSystemsUI.Private.MenuDrag.mvc$controller.GestureMove.UpdateUIJS", [], function () {
return function ($actions, $roles, $public) {
requestAnimationFrame($actions.UpdateUI);
};
});

define("OutSystemsUI.Private.MenuDrag.mvc$controller.GestureMove.SetOpacityJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var overlay = document.querySelector('.app-menu-overlay');

if(overlay) {
    overlay.classList.add('no-transition');
    
    var percentageBeforeDif = (Math.abs($parameters.MoveX) * 100) / $parameters.MenuWidth;
    var percentage = 100 - percentageBeforeDif;
    
    var newOpacity = percentage.toFixed(0)/100;
    
    if(overlay.style.opacity !== newOpacity && newOpacity.toFixed % 1 !== 0) {
        overlay.style.opacity = newOpacity;
    }
}

};
});

define("OutSystemsUI.Private.MenuDrag.mvc$controller.GestureEnd.RemoveClasses2JS", [], function () {
return function ($actions, $roles, $public) {
var menu = document.querySelector('.layout');
var appMenu = document.querySelector('.app-menu-content');

appMenu.classList.remove("no-transition");
menu.classList.remove("no-transition");
};
});

define("OutSystemsUI.Private.MenuDrag.mvc$controller.GestureEnd.GoBackJS", [], function () {
return function ($actions, $roles, $public) {
window.history.back();
};
});

define("OutSystemsUI.Private.MenuDrag.mvc$controller.GestureEnd.RemoveTransitionJS", [], function () {
return function ($actions, $roles, $public) {
var menu = document.querySelector('.layout');
var appMenu = document.querySelector('.app-menu-content');
var menuBackground = document.querySelector('.app-menu-overlay');

menu.classList.remove('no-transition');
appMenu.classList.remove("no-transition");

if(menuBackground) {
    menuBackground.classList.remove("no-transition");
}


};
});

define("OutSystemsUI.Private.MenuDrag.mvc$controller.GestureEnd.SendMenuToStartJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var menu = document.querySelector('.layout');

if(!$parameters.IsRTL) {
    if($parameters.OffsetX < 0 || !$parameters.IsOpen) {    
        close();
    }
} else {
    if($parameters.OffsetX > 0 || !$parameters.IsOpen) {
        close();
    }
}


function close() {
    var appMenu = document.querySelector('.app-menu-content');
    var menuOverlay = document.querySelector('.app-menu-overlay');

    if(menuOverlay) {
        menuOverlay.style.opacity = "";
    }
    
    appMenu.style.transform =  "";
    appMenu.style.webkitTransform =  "";
    
    menu.classList.remove('menu-visible');
    
    menu.addEventListener("transitionend", OnTransitionEnd, false);
}

function OnTransitionEnd() {
    menu.removeEventListener("transitionend", OnTransitionEnd);
}

};
});

define("OutSystemsUI.Private.MenuDrag.mvc$controller.GestureEnd.OpenEnitreMenuJS", [], function () {
return function ($actions, $roles, $public) {
var el = document.querySelector('.app-menu-content');

el.style.transform =  "";
el.style.webkitTransform =  "";

var menu = document.querySelector('.layout');

menu.classList.add('menu-visible');

var menuOverlay = document.querySelector('.app-menu-overlay');
if(menuOverlay) {
    menuOverlay.style.opacity = "";
}
};
});


define("OutSystemsUI.Private.MenuDrag.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"kh9hK_JVtEO5Sfy_hsCKMQ": {
getter: function (varBag, idService) {
return varBag.moveMenuJSResult.value;
}
},
"iowvN_cr_kOtkjIrO6403Q": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"K1OA_x1_TkiX6zx1URPY2A": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"8vkWOcvrpUm7Vg3BvzbVJQ": {
getter: function (varBag, idService) {
return varBag.checkMenuOpenJSResult.value;
}
},
"3U+nPxzpW02GFAtOaVGzHg": {
getter: function (varBag, idService) {
return varBag.vars.value.xInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"HtcOCmaQ9E6AbHf_QUQn7Q": {
getter: function (varBag, idService) {
return varBag.vars.value.yInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"i5jgMcud9UaqHqfA8viyvg": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"z4lmRzvZ_EqDHFcM1GNQ3g": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"KwDvTY8Ht0CDyPPo6wm_MA": {
getter: function (varBag, idService) {
return varBag.vars.value.evtInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"PvAwayxpPk2MJZQNh9HLig": {
getter: function (varBag, idService) {
return varBag.preventDefaultWDirectionJSResult.value;
}
},
"j9qvg+f1l0C0nC8PIkVwHA": {
getter: function (varBag, idService) {
return varBag.updateUIJSResult.value;
}
},
"FK8HkSC58E+jqXManjxRhw": {
getter: function (varBag, idService) {
return varBag.setOpacityJSResult.value;
}
},
"5t5C5GxFlEyEhHRpd90mRQ": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetXInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"xkDGCH0LekuLHD5_WFkqJA": {
getter: function (varBag, idService) {
return varBag.vars.value.offsetYInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"o0Y5pum0pU+Wos75oogDxg": {
getter: function (varBag, idService) {
return varBag.vars.value.timeTakenInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"bLLUQlLedkywLhcBkLmyxg": {
getter: function (varBag, idService) {
return varBag.removeClasses2JSResult.value;
}
},
"8y9IS1HbYEaomAiPX4U14g": {
getter: function (varBag, idService) {
return varBag.goBackJSResult.value;
}
},
"t804oRYEA0S7BdariTvw5w": {
getter: function (varBag, idService) {
return varBag.removeTransitionJSResult.value;
}
},
"gG4upwHFvECLiUJ2GTh4sw": {
getter: function (varBag, idService) {
return varBag.sendMenuToStartJSResult.value;
}
},
"CXv26staa0yfqLRzpLjTnA": {
getter: function (varBag, idService) {
return varBag.openEnitreMenuJSResult.value;
}
},
"G0e0UPx+f0y7ISRicOL33Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isMovingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Z38iysSh6kidKsPMrIEIEw": {
getter: function (varBag, idService) {
return varBag.model.variables.moveXVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"aZlidrpbMUycZSMffpdSYw": {
getter: function (varBag, idService) {
return varBag.model.variables.menuWidthVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"qxON49PdkE+9n+wJViS6aA": {
getter: function (varBag, idService) {
return varBag.model.variables.isOpenVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0FxOVdnyh0+Ur+DkFjKmsw": {
getter: function (varBag, idService) {
return varBag.model.variables.lastXVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"U1DPN8pkKkqESI80yeY5OA": {
getter: function (varBag, idService) {
return varBag.model.variables.lastYVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"7WyBrEm9hkyT8D9xsPLAhA": {
getter: function (varBag, idService) {
return varBag.model.variables.dragDirectionVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4fnP1sDbgEa_zFAqVc3KQA": {
getter: function (varBag, idService) {
return varBag.model.variables.preventDefaultVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"6vB7Yt8QeEqP44dUWsu89A": {
getter: function (varBag, idService) {
return varBag.model.variables.floatingActionsExistsVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"kf8tm9nfwEqny6jSeG0CHQ": {
getter: function (varBag, idService) {
return varBag.model.variables.burgerMenuExistsVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"oxBkLIDu_0+dfj0AdXB51Q": {
getter: function (varBag, idService) {
return varBag.model.variables.velocityVar;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"JP4yap6x_k+K6wXPez7ahQ": {
getter: function (varBag, idService) {
return varBag.model.variables.backExistsVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"m6fi0yBgLUWhW0hfz_yKMw": {
getter: function (varBag, idService) {
return varBag.model.variables.isMenuHiddenVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+HuZxTTk7EqIZDov9MfyBg": {
getter: function (varBag, idService) {
return varBag.model.variables.isRTLVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xHvNXYRHlkeqoEf3S1dhIg": {
getter: function (varBag, idService) {
return varBag.model.variables.menuIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

define("OutSystemsUI.Private.MenuDrag.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

