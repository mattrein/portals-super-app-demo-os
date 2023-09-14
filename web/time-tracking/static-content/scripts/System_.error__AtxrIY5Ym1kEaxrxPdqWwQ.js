try {require(["es6-promise", "tslib"], function (es6promise, tslib) {
require(["OutSystems/ClientRuntime/Main", "System_.appDefinition"], function (OutSystems, System_AppDefinition) {
var OS = OutSystems.Internal;
OS.ErrorScreen.initializeErrorPage(System_AppDefinition, OS.Application.default);
});
});
} catch (ex) {
console.error(e);
}

