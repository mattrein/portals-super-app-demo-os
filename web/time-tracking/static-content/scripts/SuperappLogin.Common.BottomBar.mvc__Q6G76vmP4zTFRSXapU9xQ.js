define("SuperappLogin.Common.BottomBar.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetBottomBarActiveElement"], function (OutSystems, SuperappLoginModel, OutSystemsUIModel, OutSystemsUIController) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ActiveItem", "activeItemIn", "ActiveItem", true, false, OS.DataTypes.DataTypes.Integer, function () {
return -1;
}, false), 
this.attr("_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("ActiveItem" in inputs) {
this.variables.activeItemIn = inputs.ActiveItem;
if("_activeItemInDataFetchStatus" in inputs) {
this.variables._activeItemInDataFetchStatus = inputs._activeItemInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("SuperappLogin.Common.BottomBar.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.BottomBar.mvc$model", "SuperappLogin.Common.BottomBar.mvc$controller", "SuperappLogin.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetBottomBarActiveElement"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIModel, OutSystemsUIController, React, OSView, SuperappLogin_Common_BottomBar_mvc_model, SuperappLogin_Common_BottomBar_mvc_controller, SuperappLoginClientVariables, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Common.BottomBar"; }

        static getAttributes() { return {
codeFunction: "BottomBar",
functionKey: "32cd2c75-4833-494b-8d7e-f6adb23de3d0",
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
            return SuperappLogin_Common_BottomBar_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_BottomBar_mvc_controller;
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
style: "bottom-bar-wrapper",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-bar ph",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        }
    }

    return View;
});
define("SuperappLogin.Common.BottomBar.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.BottomBar.mvc$debugger", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetBottomBarActiveElement"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIModel, OutSystemsUIController, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_BottomBar_mvc_Debugger) {
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
span.setAttribute("outsystems.function.key", "bd83c985-6b7f-4830-af5b-b9c2f9d45066");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var setBottomBarActiveElementVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.setBottomBarActiveElementVar = setBottomBarActiveElementVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:hcmDvX9rMEivW7nC+dRQZg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.dSzNMjNIS0mNfvatsj3j0A/ClientActions.hcmDvX9rMEivW7nC+dRQZg:Lz7RzYOKxauaKMe2tOpjRw", "SuperappLogin", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:pv9S9iYb6EmpKH1mPLQCJQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:awZKEZVzKkGiiRC3DK0lpA", callContext.id);
// Execute Action: SetBottomBarActiveElement
setBottomBarActiveElementVar.value = OutSystemsUIController.default.setBottomBarActiveElement$Action(model.variables.activeItemIn, callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:bJ3mOy806UmCxhFWu+oqVQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:hcmDvX9rMEivW7nC+dRQZg", callContext.id);
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


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "bd83c985-6b7f-4830-af5b-b9c2f9d45066");
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


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:nOLMJqktSVokKnWDq+B1LQ", "SuperappLogin", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:dSzNMjNIS0mNfvatsj3j0A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.dSzNMjNIS0mNfvatsj3j0A:_z4rSYk+Rb29k_9cxo2O9A", "SuperappLogin", "BottomBar", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:dSzNMjNIS0mNfvatsj3j0A", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Common/BottomBar On Ready");
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

}
return new OS.Controller.ControllerFactory(Controller, SuperappLoginLanguageResources);
});


define("SuperappLogin.Common.BottomBar.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"awZKEZVzKkGiiRC3DK0lpA": {
getter: function (varBag, idService) {
return varBag.setBottomBarActiveElementVar.value;
}
},
"lLKWeUj6uUqBTToFg1P84w": {
getter: function (varBag, idService) {
return varBag.model.variables.activeItemIn;
},
dataType: OS.DataTypes.DataTypes.Integer
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

