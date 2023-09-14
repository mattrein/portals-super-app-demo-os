define("OutSystemsUI.Interaction.Animate.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AnimationType", "animationTypeIn", "AnimationType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_animationTypeInDataFetchStatus", "_animationTypeInDataFetchStatus", "_animationTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Delay", "delayIn", "Delay", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_delayInDataFetchStatus", "_delayInDataFetchStatus", "_delayInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Speed", "speedIn", "Speed", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_speedInDataFetchStatus", "_speedInDataFetchStatus", "_speedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("AnimationType" in inputs) {
this.variables.animationTypeIn = inputs.AnimationType;
if("_animationTypeInDataFetchStatus" in inputs) {
this.variables._animationTypeInDataFetchStatus = inputs._animationTypeInDataFetchStatus;
}

}

if("Delay" in inputs) {
this.variables.delayIn = inputs.Delay;
if("_delayInDataFetchStatus" in inputs) {
this.variables._delayInDataFetchStatus = inputs._delayInDataFetchStatus;
}

}

if("Speed" in inputs) {
this.variables.speedIn = inputs.Speed;
if("_speedInDataFetchStatus" in inputs) {
this.variables._speedInDataFetchStatus = inputs._speedInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Interaction.Animate.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Interaction.Animate.mvc$model", "OutSystemsUI.Interaction.Animate.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Interaction_Animate_mvc_model, OutSystemsUI_Interaction_Animate_mvc_controller, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Interaction.Animate"; }

        static getAttributes() { return {
codeFunction: "Animate",
functionKey: "071b5238-628d-49bd-ae22-a392fceff908",
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
            return OutSystemsUI_Interaction_Animate_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Interaction_Animate_mvc_controller;
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
content: _this.props.placeholders.content,
extendedProperties: {
style: ((((("-webkit-animation-delay: " + (model.variables.delayIn).toString()) + "ms;") + "animation-delay: ") + (model.variables.delayIn).toString()) + "ms;")
},
style: model.getCachedValue(idService.getId("Content.Style"), function () {
return ("animate" + ((false) ? ("") : ((((" " + model.variables.animationTypeIn) + " ") + model.variables.speedIn))));
}, function () {
return model.variables.animationTypeIn;
}, function () {
return model.variables.speedIn;
}),
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._animationTypeInDataFetchStatus, model.variables._speedInDataFetchStatus)
}));
        }
    }

    return View;
});
define("OutSystemsUI.Interaction.Animate.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Interaction.Animate.mvc$translationsResources", "OutSystemsUI.Interaction.Animate.mvc$debugger"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Interaction_Animate_mvc_TranslationsResources, OutSystemsUI_Interaction_Animate_mvc_Debugger) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Interaction_Animate_mvc_TranslationsResources);
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


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:qQS9OZYcu0SRmBsR92a4Og:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og:y1r3Jgqc5sh2EC22jkSk3g", "OutSystemsUI", "Interaction", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:OFIbB41ivUmuIqOS_O_5CA:/NRWebFlows.qQS9OZYcu0SRmBsR92a4Og/NodesShownInESpaceTree.OFIbB41ivUmuIqOS_O_5CA:+Z_9zqSSNmWrvmvJgOPD2g", "OutSystemsUI", "Animate", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:OFIbB41ivUmuIqOS_O_5CA", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:qQS9OZYcu0SRmBsR92a4Og", callContext.id);
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

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});


define("OutSystemsUI.Interaction.Animate.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"6eW3JEqQxEm4wvoIBw+Tzg": {
getter: function (varBag, idService) {
return varBag.model.variables.animationTypeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"B7ChOCRKyEuyyIt1fFAVZQ": {
getter: function (varBag, idService) {
return varBag.model.variables.delayIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"9Obsqp5AhkyAgyFWM8M84g": {
getter: function (varBag, idService) {
return varBag.model.variables.speedIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2l4hsyjgbEmqz33gwYnyDQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

define("OutSystemsUI.Interaction.Animate.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

