define("OutSystemsUI.Private.PullToRefresh.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model"], function (OutSystems, OutSystemsUIModel) {
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

static get hasValidationWidgets() {return false;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Private.PullToRefresh.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Private.PullToRefresh.mvc$model", "OutSystemsUI.Private.PullToRefresh.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Private_PullToRefresh_mvc_model, OutSystemsUI_Private_PullToRefresh_mvc_controller, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Private.PullToRefresh"; }

        static getAttributes() { return {
codeFunction: "PullToRefresh",
functionKey: "760c25d0-962f-4127-8268-dabb167dce11",
functionOwnerName: "OutSystemsUI",
functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return ["scripts/OutSystemsUI.PullToRefresh.js", "scripts/OutSystemsUI.OutSystemsUI.js"];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Private_PullToRefresh_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Private_PullToRefresh_mvc_controller;
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pull-to-refresh",
visible: true,
_idProps: {
service: idService,
name: "ptr"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "genericon",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "angle-down",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Arrow"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pull-to-refresh-loading",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "spinner",
iconSize: /*FontSize*/ 0,
style: "icon fa-spin",
visible: true,
_idProps: {
service: idService,
name: "Spinner"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}));
        }
    }

    return View;
});
define("OutSystemsUI.Private.PullToRefresh.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Private.PullToRefresh.mvc$translationsResources", "OutSystemsUI.Private.PullToRefresh.mvc$debugger", "OutSystemsUI.Private.PullToRefresh.mvc$controller.OnDestroy.ClearEventListenerJS", "OutSystemsUI.Private.PullToRefresh.mvc$controller.OnReady.initJS"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Private_PullToRefresh_mvc_TranslationsResources, OutSystemsUI_Private_PullToRefresh_mvc_Debugger, OutSystemsUI_Private_PullToRefresh_mvc_controller_OnDestroy_ClearEventListenerJS, OutSystemsUI_Private_PullToRefresh_mvc_controller_OnReady_initJS) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Private_PullToRefresh_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {
triggerOnContentPull$Action: function () {
return controller.executeActionInsideJSNode(controller._triggerOnContentPull$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnContentPull");
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
get _triggerOnContentPull$Action() {if(!(this.hasOwnProperty("__triggerOnContentPull$Action"))) {
this.__triggerOnContentPull$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("TriggerOnContentPull", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOnContentPull");
span.setAttribute("outsystems.function.key", "0d5a49ff-7ffe-43fe-8986-f235ff8db87b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("TriggerOnContentPull");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_0laDf5__kOJhvI1_424ew:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ/ClientActions._0laDf5__kOJhvI1_424ew:62xX60XwbzUg5vgJQxlB5g", "OutSystemsUI", "TriggerOnContentPull", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:mWp1Yc50+EGwUCjACJDJqw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:HKmP3qs4C0mcJnkn9rORgg", callContext.id);
// Trigger Event: OnContentPull
return controller.onContentPull$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:TMRCSW785EauzqrECk23lg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_0laDf5__kOJhvI1_424ew", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_0laDf5__kOJhvI1_424ew", callContext.id);
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

return this.__triggerOnContentPull$Action;
}set _triggerOnContentPull$Action(value) {this.__triggerOnContentPull$Action = value;
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
span.setAttribute("outsystems.function.key", "309272ea-0708-4e6a-bcc0-ed98f72eb8dd");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:6nKSMAgHak68wO2Y9y643Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ/ClientActions.6nKSMAgHak68wO2Y9y643Q:IUMLpJbEbntAEiZd6S+tVg", "OutSystemsUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:KqoO6JGhCU62OAwlzzMyRQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:sUIZe8xHJ0SExQnX3vUkyw", callContext.id);
OS.Logger.startActiveSpan("ClearEventListener", function (span) {
if(span) {
span.setAttribute("code.function", "ClearEventListener");
span.setAttribute("outsystems.function.key", "7b1942b1-47cc-4427-84c5-09d7def524cb");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_PullToRefresh_mvc_controller_OnDestroy_ClearEventListenerJS, "ClearEventListener", "OnDestroy", null, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:6KZmFGBufESndoXJplFdtA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:6nKSMAgHak68wO2Y9y643Q", callContext.id);
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
span.setAttribute("outsystems.function.key", "b1e7a8c6-6b93-4a7a-9c2e-7861d47a4dd7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:xqjnsZNrekqcLnhh1HpN1w:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ/ClientActions.xqjnsZNrekqcLnhh1HpN1w:UKB89aiRdgOCDCJBwQTyNQ", "OutSystemsUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Ym7afnt11EeUcgyMBl3Bfw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:r+qiFkF9g0uPjRnDkwAnpA", callContext.id);
OS.Logger.startActiveSpan("init", function (span) {
if(span) {
span.setAttribute("code.function", "init");
span.setAttribute("outsystems.function.key", "16a2eaaf-7d41-4b83-8f8d-19c3930027a4");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Private_PullToRefresh_mvc_controller_OnReady_initJS, "init", "OnReady", {
PullToRefreshContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("ptr"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
TriggerOnContentPull: controller.clientActionProxies.triggerOnContentPull$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NnkT8par+UuiklF6LXV4uQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:xqjnsZNrekqcLnhh1HpN1w", callContext.id);
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


triggerOnContentPull$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("TriggerOnContentPull__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "TriggerOnContentPull");
span.setAttribute("outsystems.function.key", "0d5a49ff-7ffe-43fe-8986-f235ff8db87b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._triggerOnContentPull$Action, callContext);
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
span.setAttribute("outsystems.function.key", "309272ea-0708-4e6a-bcc0-ed98f72eb8dd");
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
span.setAttribute("outsystems.function.key", "b1e7a8c6-6b93-4a7a-9c2e-7861d47a4dd7");
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

get onContentPull$Action() {if(!(this.hasOwnProperty("_onContentPull$Action"))) {
this._onContentPull$Action = function () {
return Promise.resolve();
};
}

return this._onContentPull$Action;
}set onContentPull$Action(value) {this._onContentPull$Action = value;
}


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q:iwiOphx9xsA5b5dLEBsqNQ", "OutSystemsUI", "Private", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:0CUMdi+WJ0GCaNq7Fn3OEQ:/NRWebFlows.IUOdI7QmkEyzLmZAA68__Q/NodesShownInESpaceTree.0CUMdi+WJ0GCaNq7Fn3OEQ:h0Xe5vRJCGd78CBMW9pR5A", "OutSystemsUI", "PullToRefresh", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:0CUMdi+WJ0GCaNq7Fn3OEQ", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:IUOdI7QmkEyzLmZAA68__Q", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/PullToRefresh On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Private/PullToRefresh On Destroy");
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

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Private.PullToRefresh.mvc$controller.OnDestroy.ClearEventListenerJS", [], function () {
return function ($actions, $roles, $public) {
WebPullToRefresh.destroy();
};
});

define("OutSystemsUI.Private.PullToRefresh.mvc$controller.OnReady.initJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var loadingFunction = function() {
    return new Promise( function( resolve, reject ) {
        setTimeout(function(){
            $actions.TriggerOnContentPull();
        }, 1000)
        resolve();
    } );
};

WebPullToRefresh.init( {
    // Pointer to function that does the loading and returns a promise
    loadingFunction: loadingFunction,
        
    // Element holding dragable content area
    contentEl: document.querySelector('.content') , 

    // Element holding pull to refresh loading area
    ptrEl: document.getElementById( $parameters.PullToRefreshContainerId ),
        
    // Element that contains the scroll bar; leave null if no container with overflow exists
    scrollEl: document.querySelector('.content'),
        
    // Number of pixels of panning until refresh 
    distanceToRefresh: 40,
        
    // Dragging resistance level
    resistance: 2.5
});
};
});


define("OutSystemsUI.Private.PullToRefresh.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"sUIZe8xHJ0SExQnX3vUkyw": {
getter: function (varBag, idService) {
return varBag.clearEventListenerJSResult.value;
}
},
"r+qiFkF9g0uPjRnDkwAnpA": {
getter: function (varBag, idService) {
return varBag.initJSResult.value;
}
},
"_38ICwXsa0KJTcoPIIcIkQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ptr"));
})(varBag.model, idService);
}
},
"X7xBlRUizUivZdrWXuBz9w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Arrow"));
})(varBag.model, idService);
}
},
"fmHWAkK9CEG6fwehAe9_JQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Spinner"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

define("OutSystemsUI.Private.PullToRefresh.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

