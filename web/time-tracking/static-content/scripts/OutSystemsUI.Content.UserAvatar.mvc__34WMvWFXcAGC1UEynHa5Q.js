define("OutSystemsUI.Content.UserAvatar.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (OutSystems, OutSystemsUIModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Name", "nameIn", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Jonh Doe";
}, false), 
this.attr("_nameInDataFetchStatus", "_nameInDataFetchStatus", "_nameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Image", "imageIn", "Image", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, false), 
this.attr("_imageInDataFetchStatus", "_imageInDataFetchStatus", "_imageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Color", "colorIn", "Color", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUIModel.staticEntities.color.primary;
}, false), 
this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Size", "sizeIn", "Size", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Shape", "shapeIn", "Shape", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUIModel.staticEntities.shape.rounded;
}, false), 
this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsLight", "isLightIn", "IsLight", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isLightInDataFetchStatus", "_isLightInDataFetchStatus", "_isLightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("Name" in inputs) {
this.variables.nameIn = inputs.Name;
if("_nameInDataFetchStatus" in inputs) {
this.variables._nameInDataFetchStatus = inputs._nameInDataFetchStatus;
}

}

if("Image" in inputs) {
this.variables.imageIn = inputs.Image;
if("_imageInDataFetchStatus" in inputs) {
this.variables._imageInDataFetchStatus = inputs._imageInDataFetchStatus;
}

}

if("Color" in inputs) {
this.variables.colorIn = inputs.Color;
if("_colorInDataFetchStatus" in inputs) {
this.variables._colorInDataFetchStatus = inputs._colorInDataFetchStatus;
}

}

if("Size" in inputs) {
this.variables.sizeIn = inputs.Size;
if("_sizeInDataFetchStatus" in inputs) {
this.variables._sizeInDataFetchStatus = inputs._sizeInDataFetchStatus;
}

}

if("Shape" in inputs) {
this.variables.shapeIn = inputs.Shape;
if("_shapeInDataFetchStatus" in inputs) {
this.variables._shapeInDataFetchStatus = inputs._shapeInDataFetchStatus;
}

}

if("IsLight" in inputs) {
this.variables.isLightIn = inputs.IsLight;
if("_isLightInDataFetchStatus" in inputs) {
this.variables._isLightInDataFetchStatus = inputs._isLightInDataFetchStatus;
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

define("OutSystemsUI.Content.UserAvatar.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Content.UserAvatar.mvc$model", "OutSystemsUI.Content.UserAvatar.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Content_UserAvatar_mvc_model, OutSystemsUI_Content_UserAvatar_mvc_controller, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Content.UserAvatar"; }

        static getAttributes() { return {
codeFunction: "UserAvatar",
functionKey: "8fc25ace-aad9-4e38-805d-8882d7d9165a",
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
            return OutSystemsUI_Content_UserAvatar_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Content_UserAvatar_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(OS.DataTypes.areBinaryNulls(model.variables.imageIn, OS.BuiltinFunctions.nullBinary()), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"aria-label": model.getCachedValue(idService.getId("7f6YjdTQxkC4Pxv1mZ0Zag.aria-label"), function () {
return ((OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1", "user initials, ") + OS.BuiltinFunctions.substr(OS.BuiltinFunctions.trim(model.variables.nameIn), 0, 1)) + (((OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(model.variables.nameIn), " ", 0, false, false) > -1)) ? (OS.BuiltinFunctions.substr(OS.BuiltinFunctions.trim(model.variables.nameIn), (OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(model.variables.nameIn), " ", 0, false, false) + 1), 1)) : ("")));
}, function () {
return model.variables.nameIn;
}),
role: "img"
},
style: model.getCachedValue(idService.getId("7f6YjdTQxkC4Pxv1mZ0Zag.Style"), function () {
return ((((((("avatar " + ((((model.variables.sizeIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" avatar-" + model.variables.sizeIn)) : (""))) + " ") + "border-radius-") + model.variables.shapeIn) + ((model.variables.isLightIn) ? ((((((" " + "background-") + model.variables.colorIn) + "-lightest text-") + model.variables.colorIn) + "-darker")) : (((" " + "background-") + model.variables.colorIn)))) + " ") + model.variables.extendedClassIn);
}, function () {
return model.variables.sizeIn;
}, function () {
return model.variables.shapeIn;
}, function () {
return model.variables.isLightIn;
}, function () {
return model.variables.colorIn;
}, function () {
return model.variables.extendedClassIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sizeInDataFetchStatus, model.variables._shapeInDataFetchStatus, model.variables._isLightInDataFetchStatus, model.variables._colorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: model.getCachedValue(idService.getId("+D_RQ3IXnEqBKRHWtTlI+Q.Value"), function () {
return (OS.BuiltinFunctions.substr(OS.BuiltinFunctions.trim(model.variables.nameIn), 0, 1) + (((OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(model.variables.nameIn), " ", 0, false, false) > -1)) ? (OS.BuiltinFunctions.substr(OS.BuiltinFunctions.trim(model.variables.nameIn), (OS.BuiltinFunctions.index(OS.BuiltinFunctions.trim(model.variables.nameIn), " ", 0, false, false) + 1), 1)) : ("")));
}, function () {
return model.variables.nameIn;
}),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._nameInDataFetchStatus)
}))];
}, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
title: model.variables.nameIn
},
imageContent: model.variables.imageIn,
style: model.getCachedValue(idService.getId("e9VXyGkMykejiuHggtOyPw.Style"), function () {
return ((((("avatar" + ((((model.variables.sizeIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" avatar-" + model.variables.sizeIn)) : (""))) + " border-radius-") + model.variables.shapeIn) + " ") + model.variables.extendedClassIn);
}, function () {
return model.variables.sizeIn;
}, function () {
return model.variables.shapeIn;
}, function () {
return model.variables.extendedClassIn;
}),
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._imageInDataFetchStatus),
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sizeInDataFetchStatus, model.variables._shapeInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
})];
}));
        }
    }

    return View;
});
define("OutSystemsUI.Content.UserAvatar.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources", "OutSystemsUI.Content.UserAvatar.mvc$debugger"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Content_UserAvatar_mvc_TranslationsResources, OutSystemsUI_Content_UserAvatar_mvc_Debugger) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Content_UserAvatar_mvc_TranslationsResources);
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
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:I9m14fELdkiW+b3sqQ+k7Q:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q:RQDtRqEMlQlPsuEnW7m2Yg", "OutSystemsUI", "Content", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:zlrCj9mqOE6AXYiC19kWWg:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.zlrCj9mqOE6AXYiC19kWWg:vcvT7o07AIfNu1WWckSdDg", "OutSystemsUI", "UserAvatar", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:zlrCj9mqOE6AXYiC19kWWg", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:I9m14fELdkiW+b3sqQ+k7Q", callContext.id);
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


define("OutSystemsUI.Content.UserAvatar.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"8gCWeGIcXEmB_EByBvONJw": {
getter: function (varBag, idService) {
return varBag.model.variables.nameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EG3uCThYdU6jc9kb7ASuXg": {
getter: function (varBag, idService) {
return varBag.model.variables.imageIn;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"aKpKSlnczU6IjoaRFhUs7w": {
getter: function (varBag, idService) {
return varBag.model.variables.colorIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ae3t7TPEgEufWvSGP3xlog": {
getter: function (varBag, idService) {
return varBag.model.variables.sizeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4fNsuUtYBki1ku3B0r9kUg": {
getter: function (varBag, idService) {
return varBag.model.variables.shapeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_FlGnUSvC0+c+y_C_s7MVw": {
getter: function (varBag, idService) {
return varBag.model.variables.isLightIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"M6s+0TH6l0ukEGSSeMbhIQ": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources", ["exports", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.de-DE", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.fr-CA", "OutSystemsUI.Content.UserAvatar.mvc$translationsResources.pt"], function (exports, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_deDE, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_frCA, OutSystemsUI_Content_UserAvatar_mvc_translationsResources_pt) {
return {
"de-DE": {
"translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_deDE,
"isRTL": false
},
"fr-CA": {
"translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_frCA,
"isRTL": false
},
"pt": {
"translations": OutSystemsUI_Content_UserAvatar_mvc_translationsResources_pt,
"isRTL": false
}
};
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.de-DE", [], function () {
return {
"ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "Benutzerinitialen, "
};
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.fr-CA", [], function () {
return {
"ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "initiales de l\'utilisateur, "
};
});

define("OutSystemsUI.Content.UserAvatar.mvc$translationsResources.pt", [], function () {
return {
"ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "iniciais do utilizador, "
};
});

