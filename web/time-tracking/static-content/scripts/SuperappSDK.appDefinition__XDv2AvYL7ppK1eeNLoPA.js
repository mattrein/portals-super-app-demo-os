define("SuperappSDK.appDefinition", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
return {
environmentKey: "DUMMY_KEY",
environmentName: "DUMMY_NAME",
applicationKey: "394d2b7a-5b16-4cbf-8241-790f05c76736",
applicationName: "SuperappSDK",
userProviderName: "Users",
debugEnabled: true,
debugUseWebSockets: true,
homeModuleName: "SuperappSDK",
homeModuleKey: "394d2b7a-5b16-4cbf-8241-790f05c76736",
homeModuleControllerName: "SuperappSDK.controller",
homeModuleLanguageResourcesName: "SuperappSDK.languageResources",
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

