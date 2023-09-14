define("OutSystemsUI.appDefinition", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
return {
environmentKey: "DUMMY_KEY",
environmentName: "DUMMY_NAME",
applicationKey: "8be17f2a-431c-4958-b894-c77b988a7271",
applicationName: "OutSystems UI",
userProviderName: "Users",
debugEnabled: true,
debugUseWebSockets: true,
homeModuleName: "OutSystemsUI",
homeModuleKey: "8be17f2a-431c-4958-b894-c77b988a7271",
homeModuleControllerName: "OutSystemsUI.controller",
homeModuleLanguageResourcesName: "OutSystemsUI.languageResources",
defaultScreenName: "",
defaultTransition: "SlideFromRight",
errorPageConfig: {
showExceptionStack: false
},
isWeb: true,
personalArea: null,
showWatermark: false,
buildServiceVersion: "v17.833.1",
clientRuntimeVersion: "5.96.8"
};
});

