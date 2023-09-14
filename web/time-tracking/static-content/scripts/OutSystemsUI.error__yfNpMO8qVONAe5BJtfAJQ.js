try {require(["es6-promise", "tslib"], function (es6promise, tslib) {
require(["OutSystems/ClientRuntime/Main", "OutSystemsUI.appDefinition"], function (OutSystems, OutSystemsUIAppDefinition) {
var OS = OutSystems.Internal;
OS.ErrorScreen.initializeErrorPage(OutSystemsUIAppDefinition, OS.Application.default);
});
});
} catch (ex) {
console.error(e);
}

