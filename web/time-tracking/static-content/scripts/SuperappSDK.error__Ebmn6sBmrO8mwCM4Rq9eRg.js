try {require(["es6-promise", "tslib"], function (es6promise, tslib) {
require(["OutSystems/ClientRuntime/Main", "SuperappSDK.appDefinition"], function (OutSystems, SuperappSDKAppDefinition) {
var OS = OutSystems.Internal;
OS.ErrorScreen.initializeErrorPage(SuperappSDKAppDefinition, OS.Application.default);
});
});
} catch (ex) {
console.error(e);
}

