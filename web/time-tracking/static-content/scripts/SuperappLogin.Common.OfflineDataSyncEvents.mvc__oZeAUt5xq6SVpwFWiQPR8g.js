define("SuperappLogin.Common.OfflineDataSyncEvents.mvc$model", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.controller", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$model", "SuperappLogin.controller$OfflineDataSyncConfiguration", "OutSystemsUI.controller$ConfigureOfflineDataSync", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$EndOfflineDataSync", "SuperappLogin.controller$OfflineDataSync"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIController, OutSystemsUI_Private_OfflineDataSyncCore_mvcModel) {
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
Model._hasValidationWidgetsValue = OutSystemsUI_Private_OfflineDataSyncCore_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("SuperappLogin.Common.OfflineDataSyncEvents.mvc$view", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.controller", "react", "OutSystems/ReactView/Main", "SuperappLogin.Common.OfflineDataSyncEvents.mvc$model", "SuperappLogin.Common.OfflineDataSyncEvents.mvc$controller", "SuperappLogin.clientVariables", "OutSystemsUI.Private.OfflineDataSyncCore.mvc$view", "OutSystems/ReactWidgets/Main", "SuperappLogin.controller$OfflineDataSyncConfiguration", "OutSystemsUI.controller$ConfigureOfflineDataSync", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$EndOfflineDataSync", "SuperappLogin.controller$OfflineDataSync"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIController, React, OSView, SuperappLogin_Common_OfflineDataSyncEvents_mvc_model, SuperappLogin_Common_OfflineDataSyncEvents_mvc_controller, SuperappLoginClientVariables, OutSystemsUI_Private_OfflineDataSyncCore_mvc_view, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Common.OfflineDataSyncEvents"; }

        static getAttributes() { return {
codeFunction: "OfflineDataSyncEvents",
functionKey: "9d1ec5a1-8b31-4638-9e6b-5317ee9f1500",
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
            return [OutSystemsUI_Private_OfflineDataSyncCore_mvc_view];
        }

        get modelFactory() {
            return SuperappLogin_Common_OfflineDataSyncEvents_mvc_model;
        }

        get controllerFactory() {
            return SuperappLogin_Common_OfflineDataSyncEvents_mvc_controller;
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
return [React.createElement(OutSystemsUI_Private_OfflineDataSyncCore_mvc_view, {
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
},
onConfigure$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/OfflineDataSyncCore OnConfigure");
controller.onConfigure$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onSyncComplete$Action: function (syncUnitIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/OfflineDataSyncCore OnSyncComplete");
return controller.actionHandler_OnSyncCompleteTrigger$Action(syncUnitIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onSyncError$Action: function (syncUnitIn, errorMessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/OfflineDataSyncCore OnSyncError");
return controller.actionHandler_OnSyncErrorTrigger$Action(errorMessageIn, syncUnitIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onSync$Action: function (syncUnitIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/OfflineDataSyncCore OnSync");
return controller.onSync$Action(syncUnitIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onSyncStart$Action: function (syncUnitIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/OfflineDataSyncCore OnSyncStart");
return controller.actionHandler_OnSyncStartTrigger$Action(syncUnitIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
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
define("SuperappLogin.Common.OfflineDataSyncEvents.mvc$controller", ["OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "OutSystemsUI.controller", "SuperappLogin.languageResources", "SuperappLogin.clientVariables", "SuperappLogin.Common.OfflineDataSyncEvents.mvc$debugger", "SuperappLogin.controller$OfflineDataSyncConfiguration", "OutSystemsUI.controller$ConfigureOfflineDataSync", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$EndOfflineDataSync", "SuperappLogin.controller$OfflineDataSync"], function (OutSystems, SuperappLoginModel, SuperappLoginController, OutSystemsUIController, SuperappLoginLanguageResources, SuperappLoginClientVariables, SuperappLogin_Common_OfflineDataSyncEvents_mvc_Debugger) {
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
get _onConfigure$Action() {if(!(this.hasOwnProperty("__onConfigure$Action"))) {
this.__onConfigure$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnConfigure", function (span) {
if(span) {
span.setAttribute("code.function", "OnConfigure");
span.setAttribute("outsystems.function.key", "49e58926-0b51-4082-a770-42a3c0aeb040");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnConfigure");
callContext = controller.callContext(callContext);
var offlineDataSyncConfigurationVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.offlineDataSyncConfigurationVar = offlineDataSyncConfigurationVar;
try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:JonlSVELgkCncEKjwK6wQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ocUenTGLOEaea1MX7p8VAA/ClientActions.JonlSVELgkCncEKjwK6wQA:ANcKdaBVLf3S9DzVgE4h4g", "SuperappLogin", "OnConfigure", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:0FU2892Sr0W7xE3R5JpbEg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:R1deubojZ0GAYWB4g_vd5Q", callContext.id);
// Execute Action: OfflineDataSyncConfiguration
offlineDataSyncConfigurationVar.value = SuperappLoginController.default.offlineDataSyncConfiguration$Action(callContext);

OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:oRJTxJxG90+lPByuI8vBSg", callContext.id);
// Execute Action: ConfigureOfflineDataSync
OutSystemsUIController.default.configureOfflineDataSync$Action(offlineDataSyncConfigurationVar.value.syncOnOnlineOut, offlineDataSyncConfigurationVar.value.syncOnResumeOut, offlineDataSyncConfigurationVar.value.retryOnErrorOut, offlineDataSyncConfigurationVar.value.retryIntervalInSecondsOut, callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:nUTWzH78YEibqPE+f+Opnw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:JonlSVELgkCncEKjwK6wQA", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onConfigure$Action;
}set _onConfigure$Action(value) {this.__onConfigure$Action = value;
}

get _onSync$Action() {if(!(this.hasOwnProperty("__onSync$Action"))) {
this.__onSync$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnSync", function (span) {
if(span) {
span.setAttribute("code.function", "OnSync");
span.setAttribute("outsystems.function.key", "7b42b17a-5bff-4c93-97ae-681d0bdb1107");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnSync");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.Common.OfflineDataSyncEvents.OnSync$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.securityExceptionVar = securityExceptionVar;
varBag.allExceptionsVar = allExceptionsVar;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:erFCe_9bk0yXrmgdC9sRBw:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ocUenTGLOEaea1MX7p8VAA/ClientActions.erFCe_9bk0yXrmgdC9sRBw:lDvqcDtT7uBEvYOHyPD3JA", "SuperappLogin", "OnSync", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:VgQg1gRiqkCNkw2YtBrw3A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:6N4lZOClwkyil1pFrSKfgw", callContext.id);
// Execute Action: DoOfflineDataSync
model.flush();
return SuperappLoginController.default.offlineDataSync$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:4YUeVwNGoUqSBB6ZwRIifA", callContext.id);
// Execute Action: EndWithSuccess
OutSystemsUIController.default.endOfflineDataSync$Action(false, "", false, callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:UxqGI78eFEqek+AtnLhh4w", callContext.id);
});
}).catch(function (ex) {
OS.Logger.debug("OfflineDataSyncEvents.OnSync", OS.Exceptions.getMessage(ex));
// Handle Error: SecurityException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
OS.Logger.error(null, ex, null, null, 1);
securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(securityExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Logger.startActiveSpan("SecurityException", function (span) {
if(span) {
span.setAttribute("code.function", "SecurityException");
span.setAttribute("outsystems.function.key", "e44fad80-10dc-4763-a7a0-73588803e1f9");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

return OS.Flow.tryFinally(function () {
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:gK1P5NwQY0enoHNYiAPh+Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:UGV6xgbyy0iuwtlBeMBprg", callContext.id);
// Execute Action: EndWithSecurityError
OutSystemsUIController.default.endOfflineDataSync$Action(true, securityExceptionVar.value.exceptionMessageAttr, false, callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:UxqGI78eFEqek+AtnLhh4w", callContext.id);
return OS.Flow.returnAsync();

});
}, function () {
if(span) {
span.end();
}

});
}, 1);
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex, null, null, 1);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Logger.startActiveSpan("AllExceptions", function (span) {
if(span) {
span.setAttribute("code.function", "AllExceptions");
span.setAttribute("outsystems.function.key", "fc7dbf0f-0174-498a-9bfc-505d11ab7858");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

return OS.Flow.tryFinally(function () {
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:D799_HQBikmb_FBdEat4WA", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:0aQjMmjzPk2T7ptl8Tfg_w", callContext.id);
// Execute Action: EndWithError
OutSystemsUIController.default.endOfflineDataSync$Action(true, allExceptionsVar.value.exceptionMessageAttr, true, callContext);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:UxqGI78eFEqek+AtnLhh4w", callContext.id);
return OS.Flow.returnAsync();

});
}, function () {
if(span) {
span.end();
}

});
}, 1);
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:erFCe_9bk0yXrmgdC9sRBw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:erFCe_9bk0yXrmgdC9sRBw", callContext.id);
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

return this.__onSync$Action;
}set _onSync$Action(value) {this.__onSync$Action = value;
}

get _actionHandler_OnSyncCompleteTrigger$Action() {if(!(this.hasOwnProperty("__actionHandler_OnSyncCompleteTrigger$Action"))) {
this.__actionHandler_OnSyncCompleteTrigger$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("ActionHandler_OnSyncCompleteTrigger", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnSyncCompleteTrigger");
span.setAttribute("outsystems.function.key", "91eef3cb-10d8-49c8-acc7-41aeae1d9fff");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("ActionHandler_OnSyncCompleteTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.Common.OfflineDataSyncEvents.ActionHandler_OnSyncCompleteTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:y_PukdgQyEmsx0Gurh2f_w:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ocUenTGLOEaea1MX7p8VAA/ClientActions.y_PukdgQyEmsx0Gurh2f_w:e0T3Or12cjYs4ztNwjLIjA", "SuperappLogin", "ActionHandler_OnSyncCompleteTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:f9qqYDg_Dk2f0YjWcBEtZw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Py_yozqZ4Eul3A7NumDn6g", callContext.id);
// Trigger Event: OnSyncComplete
return controller.onSyncComplete$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:lrDjJYBEEkqFt8OGQIZSeA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:y_PukdgQyEmsx0Gurh2f_w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:y_PukdgQyEmsx0Gurh2f_w", callContext.id);
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

return this.__actionHandler_OnSyncCompleteTrigger$Action;
}set _actionHandler_OnSyncCompleteTrigger$Action(value) {this.__actionHandler_OnSyncCompleteTrigger$Action = value;
}

get _actionHandler_OnSyncStartTrigger$Action() {if(!(this.hasOwnProperty("__actionHandler_OnSyncStartTrigger$Action"))) {
this.__actionHandler_OnSyncStartTrigger$Action = function (syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("ActionHandler_OnSyncStartTrigger", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnSyncStartTrigger");
span.setAttribute("outsystems.function.key", "b4311384-3499-4a7e-82f3-337e98c53d38");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("ActionHandler_OnSyncStartTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.Common.OfflineDataSyncEvents.ActionHandler_OnSyncStartTrigger$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:hBMxtJk0fkqC8zN+mMU9OA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ocUenTGLOEaea1MX7p8VAA/ClientActions.hBMxtJk0fkqC8zN+mMU9OA:HUt3MJsYT_QcjHjWa7ZTWg", "SuperappLogin", "ActionHandler_OnSyncStartTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:FH9G1eeneEmzaeSYyHwHlg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:NuCDWeCbWECgLva7aEtSHw", callContext.id);
// Trigger Event: OnSyncStart
return controller.onSyncStart$Action(vars.value.syncUnitInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:JdkCxTUkNk2Afo_kHKO66g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:hBMxtJk0fkqC8zN+mMU9OA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:hBMxtJk0fkqC8zN+mMU9OA", callContext.id);
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

return this.__actionHandler_OnSyncStartTrigger$Action;
}set _actionHandler_OnSyncStartTrigger$Action(value) {this.__actionHandler_OnSyncStartTrigger$Action = value;
}

get _actionHandler_OnSyncErrorTrigger$Action() {if(!(this.hasOwnProperty("__actionHandler_OnSyncErrorTrigger$Action"))) {
this.__actionHandler_OnSyncErrorTrigger$Action = function (errorMessageIn, syncUnitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("ActionHandler_OnSyncErrorTrigger", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnSyncErrorTrigger");
span.setAttribute("outsystems.function.key", "f84ad783-f682-4615-8a91-8608b132c87e");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("ActionHandler_OnSyncErrorTrigger");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SuperappLogin.Common.OfflineDataSyncEvents.ActionHandler_OnSyncErrorTrigger$vars"))());
vars.value.errorMessageInLocal = errorMessageIn;
vars.value.syncUnitInLocal = syncUnitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:g9dK+IL2FUaKkYYIsTLIfg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ocUenTGLOEaea1MX7p8VAA/ClientActions.g9dK+IL2FUaKkYYIsTLIfg:lsogeayj_HvU22siERvpsg", "SuperappLogin", "ActionHandler_OnSyncErrorTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:vJjXnxJYKE2derWXcBmY_g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:c_djV9dR502J8LJl3iu9Hw", callContext.id);
// Trigger Event: OnSyncError
return controller.onSyncError$Action(vars.value.syncUnitInLocal, vars.value.errorMessageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:HQmm4Mf7qUqTRqtbdTFQCA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:g9dK+IL2FUaKkYYIsTLIfg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:g9dK+IL2FUaKkYYIsTLIfg", callContext.id);
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

return this.__actionHandler_OnSyncErrorTrigger$Action;
}set _actionHandler_OnSyncErrorTrigger$Action(value) {this.__actionHandler_OnSyncErrorTrigger$Action = value;
}


onConfigure$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnConfigure__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnConfigure");
span.setAttribute("outsystems.function.key", "49e58926-0b51-4082-a770-42a3c0aeb040");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onConfigure$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onSync$Action(syncUnitIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnSync__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnSync");
span.setAttribute("outsystems.function.key", "7b42b17a-5bff-4c93-97ae-681d0bdb1107");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onSync$Action, callContext, syncUnitIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

actionHandler_OnSyncCompleteTrigger$Action(syncUnitIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ActionHandler_OnSyncCompleteTrigger__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnSyncCompleteTrigger");
span.setAttribute("outsystems.function.key", "91eef3cb-10d8-49c8-acc7-41aeae1d9fff");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncCompleteTrigger$Action, callContext, syncUnitIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

actionHandler_OnSyncStartTrigger$Action(syncUnitIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ActionHandler_OnSyncStartTrigger__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnSyncStartTrigger");
span.setAttribute("outsystems.function.key", "b4311384-3499-4a7e-82f3-337e98c53d38");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncStartTrigger$Action, callContext, syncUnitIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

actionHandler_OnSyncErrorTrigger$Action(errorMessageIn, syncUnitIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ActionHandler_OnSyncErrorTrigger__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ActionHandler_OnSyncErrorTrigger");
span.setAttribute("outsystems.function.key", "f84ad783-f682-4615-8a91-8608b132c87e");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._actionHandler_OnSyncErrorTrigger$Action, callContext, errorMessageIn, syncUnitIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

get onSyncComplete$Action() {if(!(this.hasOwnProperty("_onSyncComplete$Action"))) {
this._onSyncComplete$Action = function () {
return Promise.resolve();
};
}

return this._onSyncComplete$Action;
}set onSyncComplete$Action(value) {this._onSyncComplete$Action = value;
}

get onSyncStart$Action() {if(!(this.hasOwnProperty("_onSyncStart$Action"))) {
this._onSyncStart$Action = function () {
return Promise.resolve();
};
}

return this._onSyncStart$Action;
}set onSyncStart$Action(value) {this._onSyncStart$Action = value;
}

get onSyncError$Action() {if(!(this.hasOwnProperty("_onSyncError$Action"))) {
this._onSyncError$Action = function () {
return Promise.resolve();
};
}

return this._onSyncError$Action;
}set onSyncError$Action(value) {this._onSyncError$Action = value;
}


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:nOLMJqktSVokKnWDq+B1LQ", "SuperappLogin", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:ocUenTGLOEaea1MX7p8VAA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.ocUenTGLOEaea1MX7p8VAA:SqVF2DAArrpnKuBEgsoBzw", "SuperappLogin", "OfflineDataSyncEvents", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:ocUenTGLOEaea1MX7p8VAA", callContext.id);
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
Controller.registerVariableGroupType("SuperappLogin.Common.OfflineDataSyncEvents.OnSync$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("SuperappLogin.Common.OfflineDataSyncEvents.ActionHandler_OnSyncCompleteTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("SuperappLogin.Common.OfflineDataSyncEvents.ActionHandler_OnSyncStartTrigger$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("SuperappLogin.Common.OfflineDataSyncEvents.ActionHandler_OnSyncErrorTrigger$vars", [{
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, SuperappLoginLanguageResources);
});


define("SuperappLogin.Common.OfflineDataSyncEvents.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"R1deubojZ0GAYWB4g_vd5Q": {
getter: function (varBag, idService) {
return varBag.offlineDataSyncConfigurationVar.value;
}
},
"TO8C6xJk+ESkOnSbTsQ_VA": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gK1P5NwQY0enoHNYiAPh+Q": {
getter: function (varBag, idService) {
return varBag.securityExceptionVar.value;
}
},
"D799_HQBikmb_FBdEat4WA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"jNmjNj7SQUG_Fnu+IEf21w": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KXkHOFMlCUiub9_nsCMgHw": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"I4vQBxztKUe3vaGRm7xjHA": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3BPbwpgXEk+FYKddeQdTeg": {
getter: function (varBag, idService) {
return varBag.vars.value.syncUnitInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

