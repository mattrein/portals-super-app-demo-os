define("SuperappLogin.appDefinition", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
return {
environmentKey: "DUMMY_KEY",
environmentName: "DUMMY_NAME",
applicationKey: "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f",
applicationName: "Superapp Login",
userProviderName: "Users",
debugEnabled: true,
debugUseWebSockets: true,
homeModuleName: "SuperappLogin",
homeModuleKey: "ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f",
homeModuleControllerName: "SuperappLogin.controller",
homeModuleLanguageResourcesName: "SuperappLogin.languageResources",
defaultScreenName: "Screen1",
defaultTransition: "SlideFromRight",
errorPageConfig: {
showExceptionStack: false
},
isWeb: false,
personalArea: null,
showWatermark: false,
buildServiceVersion: "v17.833.1",
clientRuntimeVersion: "5.96.8"
};
});

