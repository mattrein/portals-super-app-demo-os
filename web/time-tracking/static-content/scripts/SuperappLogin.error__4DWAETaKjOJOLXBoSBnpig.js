try {require(["es6-promise", "tslib"], function (es6promise, tslib) {
require(["OutSystems/ClientRuntime/Main", "SuperappLogin.appDefinition"], function (OutSystems, SuperappLoginAppDefinition) {
var OS = OutSystems.Internal;
OS.ErrorScreen.initializeErrorPage(SuperappLoginAppDefinition, OS.Application.default);
});
});
} catch (ex) {
console.error(e);
}

