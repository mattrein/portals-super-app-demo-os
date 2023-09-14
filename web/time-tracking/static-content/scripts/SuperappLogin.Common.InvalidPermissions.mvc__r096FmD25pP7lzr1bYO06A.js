define("SuperappLogin.Common.InvalidPermissions.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.Common.Layout.mvc$model", "SuperappLogin.Common.Menu.mvc$model", "SuperappLogin.Common.MenuIcon.mvc$model", "OutSystemsUI.Content.BlankSlate.mvc$model", "SuperappLogin.Common.BottomBar.mvc$model"], function (OutSystems, SuperappLoginModel, SuperappLogin_Common_Layout_mvcModel, SuperappLogin_Common_Menu_mvcModel, SuperappLogin_Common_MenuIcon_mvcModel, OutSystemsUI_Content_BlankSlate_mvcModel, SuperappLogin_Common_BottomBar_mvcModel) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
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
OS.Model.VariablelessViewModel {
static getVariablesRecordConstructor() {
return VariablesRecord;
}

static getWidgetsRecordConstructor() {
return WidgetsRecord;
}

static get hasValidationWidgets() {if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = ((((SuperappLogin_Common_Layout_mvcModel.hasValidationWidgets || SuperappLogin_Common_Menu_mvcModel.hasValidationWidgets) || SuperappLogin_Common_MenuIcon_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_BlankSlate_mvcModel.hasValidationWidgets) || SuperappLogin_Common_BottomBar_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("SuperappLogin.Common.InvalidPermissions.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.InvalidPermissions.mvc$model", "SuperappLogin.Common.InvalidPermissions.mvc$controller", "SuperappLogin.clientVariables", "SuperappLogin.Common.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "SuperappLogin.Common.Menu.mvc$view", "SuperappLogin.Common.MenuIcon.mvc$view", "OutSystemsUI.Content.BlankSlate.mvc$view", "SuperappLogin.Common.BottomBar.mvc$view"], function (OutSystems, SuperappLoginModel, SuperappLoginController, React, OSView, SuperappLogin_Common_InvalidPermissions_mvc_model, SuperappLogin_Common_InvalidPermissions_mvc_controller, SuperappLoginClientVariables, SuperappLogin_Common_Layout_mvc_view, OSWidgets, SuperappLogin_Common_Menu_mvc_view, SuperappLogin_Common_MenuIcon_mvc_view, OutSystemsUI_Content_BlankSlate_mvc_view, SuperappLogin_Common_BottomBar_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "Common.InvalidPermissions"; }

        static getAttributes() { return {
codeFunction: "InvalidPermissions",
functionKey: "a9e90bf3-3a5b-4c95-81d3-58524c8f96d8",
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
            return [SuperappLogin_Common_Layout_mvc_view, SuperappLogin_Common_Menu_mvc_view, SuperappLogin_Common_MenuIcon_mvc_view, OutSystemsUI_Content_BlankSlate_mvc_view, SuperappLogin_Common_BottomBar_mvc_view];
        }

        get modelFactory() {
            return SuperappLogin_Common_InvalidPermissions_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_InvalidPermissions_mvc_controller;
        }

        get title() {
            
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var callContext = controller.callContext();
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;
            

            return "Invalid permissions";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(SuperappLogin_Common_Layout_mvc_view, {
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
navigation: new PlaceholderContent(function () {
return [React.createElement(SuperappLogin_Common_Menu_mvc_view, {
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
headerLeft: new PlaceholderContent(function () {
return [React.createElement(SuperappLogin_Common_MenuIcon_mvc_view, {
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
title: new PlaceholderContent(function () {
return ["Invalid permissions"];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_Content_BlankSlate_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
FullHeight: true
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "lock",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Icon1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return ["You don\'t have the necessary permission to see this screen."];
}),
actions: new PlaceholderContent(function () {
return [$if(((OS.BuiltinFunctions.getUserId()).toString() === OS.BuiltinFunctions.nullTextIdentifier()), false, this, function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
tabIndex: "1"
},
gridProperties: {
classes: "ThemeGrid_Width6"
},
isDefault: false,
onClick: function () {
try {OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/SuperappLogin/Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
} catch (ex) {
if(((ex.name) !== ("RedirectOccurredException"))) {
throw ex;
}

}
;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Go to login")];
}, function () {
return [];
})];
})
},
_dependencies: []
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(SuperappLogin_Common_BottomBar_mvc_view, {
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
uuid: "6",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}));
        }
    }

    return View;
});
define("SuperappLogin.Common.InvalidPermissions.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.InvalidPermissions.mvc$debugger", "SuperappLogin.Common.controller"], function (OutSystems, SuperappLoginModel, SuperappLoginController, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_InvalidPermissions_mvc_Debugger, SuperappLogin_CommonController) {
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


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:nOLMJqktSVokKnWDq+B1LQ", "SuperappLogin", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:8wvpqVs6lUyB01hSTI+W2A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.8wvpqVs6lUyB01hSTI+W2A:iCVWUZ_Xxv49cvar7c9c0A", "SuperappLogin", "InvalidPermissions", "NRNodes.WebScreen", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:8wvpqVs6lUyB01hSTI+W2A", callContext.id);
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

}
return new OS.Controller.ControllerFactory(Controller, SuperappLoginLanguageResources);
});


define("SuperappLogin.Common.InvalidPermissions.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"fTFwwlVeG0isw7oPyjhnEA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Navigation"));
})(varBag.model, idService);
}
},
"G6lRFPS0LU+vbPIH2bPB0A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"Ii3QQX8b2E2FIxMEJuOxxA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"9_UveeekP0SEFAPgBoNYew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"u5PQrQfaB0W+TTd7dOxAhQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"mH919u5pzUmHQLXJMHYutw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"78yioZ9q+EWlzj9tGMC7ZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"H9y7XKtzfU+SB6u2ktbw2Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon1"));
})(varBag.model, idService);
}
},
"FN258jrqp06wNGRh8plyqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"xb4I1OCxa0SBc1LAvsaSJw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Actions"));
})(varBag.model, idService);
}
},
"De06lbS4NEW1QBOYRuPLPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("NotLoggedIn"));
})(varBag.model, idService);
}
},
"hLcc6O_ES062+y8sDwdvZQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

