define("SuperappSDK.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var SuperappSDKModel = exports;
Object.defineProperty(SuperappSDKModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["394d2b7a-5b16-4cbf-8241-790f05c76736"];
}
});

SuperappSDKModel.staticEntities = {};
});

