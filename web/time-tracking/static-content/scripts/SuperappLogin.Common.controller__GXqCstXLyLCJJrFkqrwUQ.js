define("SuperappLogin.Common.controller", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.controller", "SuperappLogin.clientVariables", "SuperappLogin.Common.controller$debugger"], function (exports, OutSystems, SuperappLoginModel, SuperappLoginController, SuperappLoginClientVariables, SuperappLogin_Common_Controller_debugger) {
var OS = OutSystems.Internal;
var SuperappLogin_CommonController = exports;
class Controller extends 
OS.Controller.BaseController {
getDefaultTimeout() {
return SuperappLoginController.default.defaultTimeout;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex, callContext) {
var varBag = {};
var controller = this.controller;
return OS.Logger.startActiveSpan("OnException", function (span) {
if(span) {
span.setAttribute("code.function", "OnException");
span.setAttribute("outsystems.function.key", "5b7ee6d1-9274-4f56-8225-cc355f8f0f40.#FlowExceptionHandler");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

try {var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var dataBaseExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.allExceptionsVar = allExceptionsVar;
varBag.dataBaseExceptionVar = dataBaseExceptionVar;
varBag.communicationExceptionVar = communicationExceptionVar;
varBag.securityExceptionVar = securityExceptionVar;
OS.Logger.debug("Common.OnException", OS.Exceptions.getMessage(ex));
if(OS.ErrorHandling.ignoreError(ex, callContext)) {
return OS.ErrorHandling.IGNORED_ERROR_RESULT;
}

try {OutSystemsDebugger.push("wCCRrI1N+UC0OozfYx5Kjw:0eZ+W3SSVk+CJcw1X48PQA.#FlowExceptionHandler:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/FlowExceptionHandler:8mqqfe2Sw2BKlMkzw4RbwQ", "SuperappLogin", "OnException", "NRFlows.FlowExceptionHandlingFlow", callContext.id, varBag);
OS.Logger.debug("Common.OnException", OS.Exceptions.getMessage(ex));
// Handle Error: DataBaseException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.DataBaseException)) {
OS.Logger.error(null, ex, null, null, 1);
dataBaseExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Logger.startActiveSpan("DataBaseException", function (span) {
if(span) {
span.setAttribute("code.function", "DataBaseException");
span.setAttribute("outsystems.function.key", "41b4362f-8227-445b-98d1-c5388d9c371f");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

try {OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Lza0QSeCW0SY0cU4jZw3Hw", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:fCn+EVTncE++I5ufKt+FVg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("There was a problem with the database request. Please contact the administrator", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:bCgcB6o6x0iCwomfyv1kvQ", callContext.id);
return ;

} finally {
if(span) {
span.end();
}

}

}, 1);
}

// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex, null, null, 1);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Logger.startActiveSpan("CommunicationException", function (span) {
if(span) {
span.setAttribute("code.function", "CommunicationException");
span.setAttribute("outsystems.function.key", "96cbad0c-d2bb-4511-99ca-5ec00397bc4b");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

try {OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:DK3LlrvSEUWZyl7AA5e8Sw", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:KsUf5c+Xf0iU+KoOZfRKuQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("There was a problem communicating with the server. Please try again or contact your administrator", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:bCgcB6o6x0iCwomfyv1kvQ", callContext.id);
return ;

} finally {
if(span) {
span.end();
}

}

}, 1);
}

// Handle Error: SecurityException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Logger.startActiveSpan("SecurityException", function (span) {
if(span) {
span.setAttribute("code.function", "SecurityException");
span.setAttribute("outsystems.function.key", "d8ebfc26-f18d-481a-bf4f-13c453253783");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

try {OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:Jvzr2I3xGki_TxPEUyU3gw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:LYwo+iwL6EGQCSbhalO9GQ", callContext.id) && (((OS.BuiltinFunctions.getUserId()).toString()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:VlH5r5kXNUSKtR_vby7rbA", callContext.id);
// Destination: /SuperappLogin/InvalidPermissions
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/SuperappLogin/InvalidPermissions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
// LastRequest
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:aUn528gmOESm4oS9gkJjFQ", callContext.id);
// LastURL = GetBookmarkableURL
SuperappLoginClientVariables.setLastURL(OS.BuiltinFunctions.getBookmarkableURL());
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:7YVKHJBp+0+StJdBPzZy0A", callContext.id);
// Destination: /SuperappLogin/Login
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/SuperappLogin/Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex, null, null, 1);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Logger.startActiveSpan("AllExceptions", function (span) {
if(span) {
span.setAttribute("code.function", "AllExceptions");
span.setAttribute("outsystems.function.key", "2dcc0525-e54e-43f0-94b4-89e1e54280db");
span.setAttribute("outsystems.function.owner.name", "SuperappLogin");
span.setAttribute("outsystems.function.owner.key", "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f");
span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
}

try {OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:JQXMLU7l8EOUtInh5UKA2w", callContext.id);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:udS7ULvmekaJ6jj8XEK6xQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("There was a problem. Please contact the administrator", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("wCCRrI1N+UC0OozfYx5Kjw:bCgcB6o6x0iCwomfyv1kvQ", callContext.id);
return ;

} finally {
if(span) {
span.end();
}

}

}, 1);
}

throw ex;
} catch (unhandledEx) {
OS.Logger.debug("Common.OnException", OS.Exceptions.getMessage(ex));
return OS.ErrorHandling.defaultErrorHandler(unhandledEx, callContext);
} finally {
OutSystemsDebugger.pop("wCCRrI1N+UC0OozfYx5Kjw:0eZ+W3SSVk+CJcw1X48PQA.#FlowExceptionHandler", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);


};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

}



SuperappLogin_CommonController.default = new Controller();
});


define("SuperappLogin.Common.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"JQXMLU7l8EOUtInh5UKA2w": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"Lza0QSeCW0SY0cU4jZw3Hw": {
getter: function (varBag, idService) {
return varBag.dataBaseExceptionVar.value;
}
},
"DK3LlrvSEUWZyl7AA5e8Sw": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"Jvzr2I3xGki_TxPEUyU3gw": {
getter: function (varBag, idService) {
return varBag.securityExceptionVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

