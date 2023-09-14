require(["es6-promise", "tslib"], function (es6promise, tslib) {
require(["OutSystems/ClientRuntime/Main", "OutSystemsUI.appDefinition", "OutSystems/ClientRuntime/Debugger"], function (OutSystems, OutSystemsUIAppDefinition, Debugger) {
var OS = OutSystems.Internal;
if(OS.Navigation.ensureRequestSecurity()) {
return;
}

OutSystemsDebugger.initialize().then(function () {
return OS.Application.default.initialize(OutSystemsUIAppDefinition, OS.Interfaces.Application.InitializationType.Full, new OS.Format.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"), new OS.Format.NumberFormatInfo(".", "")).then(function (success) {
function initViewPromise() {
return OS.Flow.promise(function (resolve, reject) {
require(["OutSystems/ReactView/Main"], function (OSView) {
try {OSView.Router.load(OS.Application.default);
resolve();
} catch (error) {
reject(error);
}

});
});
};
function initGlobalExceptionHandler() {
return new Promise(function (resolve) {
OS.Application.default.registerDefaultErrorHandler(function () {
return function (error, callContext) {
return OS.ErrorHandling.defaultErrorHandler(error, callContext);
};
});
resolve();
});
};
if(success) {
return initGlobalExceptionHandler().then(initViewPromise);
}


});
}).catch(function (error) {
OS.ErrorHandling.handleError(error);
});
});
});

