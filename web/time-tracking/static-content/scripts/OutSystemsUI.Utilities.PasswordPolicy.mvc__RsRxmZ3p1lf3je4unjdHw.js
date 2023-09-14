define("OutSystemsUI.Utilities.PasswordPolicy.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "System_.model", "System_.model$PasswordComplexityPolicyRec", "OutSystemsUI.referencesHealth", "OutSystemsUI.referencesHealth$System_", "System_.model$PasswordValidationResultRec"], function (OutSystems, OutSystemsUIModel, System_Model) {
var OS = OutSystems.Internal;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.PasswordComplexityPolicyRec());
}, false, OS.SystemStructures.PasswordComplexityPolicyRec), 
this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.PasswordValidationResultRec());
}, false, OS.SystemStructures.PasswordValidationResultRec), 
this.attr("IsValidPassword", "isValidPasswordVar", "IsValidPassword", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Password", "passwordIn", "Password", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

var VariablesRecord = VariablesRecordInner;
VariablesRecord.init();
}
class WidgetsRecord extends 
OS.Model.BaseWidgetRecordMap {
static getWidgetsType() {
return {};
}

}

class Model extends 
OS.Model.BaseViewModel {
static getVariablesRecordConstructor() {
return VariablesRecord;
}

static getWidgetsRecordConstructor() {
return WidgetsRecord;
}

static get hasValidationWidgets() {return false;
}
setInputs(inputs) {
if("Password" in inputs) {
this.variables.passwordIn = inputs.Password;
if("_passwordInDataFetchStatus" in inputs) {
this.variables._passwordInDataFetchStatus = inputs._passwordInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "System_.model", "react", "OutSystems/ReactView/Main", "OutSystemsUI.Utilities.PasswordPolicy.mvc$model", "OutSystemsUI.Utilities.PasswordPolicy.mvc$controller", "OutSystems/ReactWidgets/Main", "System_.model$PasswordComplexityPolicyRec", "OutSystemsUI.referencesHealth", "OutSystemsUI.referencesHealth$System_", "System_.model$PasswordValidationResultRec"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, System_Model, React, OSView, OutSystemsUI_Utilities_PasswordPolicy_mvc_model, OutSystemsUI_Utilities_PasswordPolicy_mvc_controller, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Utilities.PasswordPolicy"; }

        static getAttributes() { return {
codeFunction: "PasswordPolicy",
functionKey: "98f4a100-e907-494e-8fc0-7cc17fefb0e0",
functionOwnerName: "OutSystemsUI",
functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return ["scripts/OutSystemsUI.OutSystemsUI.js"];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Utilities_PasswordPolicy_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Utilities_PasswordPolicy_mvc_controller;
        }

        get title() {
            

            return "";
        }

        internalRender() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), $if((((((model.variables.passwordComplexityPolicyVar.minimumLengthAttr > 0) || model.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr) || model.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr) || model.variables.passwordComplexityPolicyVar.numberRequiredAttr) || model.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-xs",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(!(model.variables.isValidPasswordVar), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Your password must contain:"), $if(model.variables.passwordComplexityPolicyVar.numberRequiredAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("_q87RRvrVECu3VaTIzJ6sQ.Style"), function () {
return ((model.variables.passwordValidationResultVar.missingMinimumLengthAttr) ? ("") : ("text-green-darker"));
}, function () {
return model.variables.passwordValidationResultVar.missingMinimumLengthAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.passwordValidationResultVar.missingMinimumLengthAttr, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "times-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, "At least ", React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0"
},
value: (model.variables.passwordComplexityPolicyVar.minimumLengthAttr).toString(),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}), " characters"))];
}, function () {
return [];
}), $if(model.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("3fhhgmONGE+VgKcBnDfW3w.Style"), function () {
return ((model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr) ? ("") : ("text-green-darker"));
}, function () {
return model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "times-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, "1 uppercase letter"))];
}, function () {
return [];
}), $if(model.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("YMZJeUWYikyuvTBV7uNuEw.Style"), function () {
return ((model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr) ? ("") : ("text-green-darker"));
}, function () {
return model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "times-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, "1 lowercase letter"))];
}, function () {
return [];
}), $if(model.variables.passwordComplexityPolicyVar.numberRequiredAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("BnVnJwyZOEu3kAkpa+cA1g.Style"), function () {
return ((model.variables.passwordValidationResultVar.missingNumberAttr) ? ("") : ("text-green-darker"));
}, function () {
return model.variables.passwordValidationResultVar.missingNumberAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.passwordValidationResultVar.missingNumberAttr, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "times-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, "1 number"))];
}, function () {
return [];
}), $if(model.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("0D56A2_eCk2_XxCpklQYGg.Style"), function () {
return ((model.variables.passwordValidationResultVar.missingSpecialCharacterAttr) ? ("") : ("text-green-darker"));
}, function () {
return model.variables.passwordValidationResultVar.missingSpecialCharacterAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.passwordValidationResultVar.missingSpecialCharacterAttr, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "times-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, "1 special character (ex: !, @, #, $, %)"))];
}, function () {
return [];
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-green-darker",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s",
text: ["Great! Your password meets all the requirements."],
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}))];
}, function () {
return [];
}));
        }
    }

    return View;
});
define("OutSystemsUI.Utilities.PasswordPolicy.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "OutSystemsUI.controller", "System_.model", "OutSystemsUI.languageResources", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources", "OutSystemsUI.Utilities.PasswordPolicy.mvc$debugger", "System_.model$PasswordComplexityPolicyRec", "OutSystemsUI.referencesHealth", "OutSystemsUI.referencesHealth$System_", "System_.model$PasswordValidationResultRec"], function (OutSystems, OutSystemsUIModel, OutSystemsUIController, System_Model, OutSystemsUILanguageResources, OutSystemsUI_Utilities_PasswordPolicy_mvc_TranslationsResources, OutSystemsUI_Utilities_PasswordPolicy_mvc_Debugger) {
var OS = OutSystems.Internal;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Utilities_PasswordPolicy_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}

// Server Actions - Methods

// Aggregates and Data Actions

get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = [];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _onInitialize$Action() {if(!(this.hasOwnProperty("__onInitialize$Action"))) {
this.__onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnInitialize", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "0800c9f1-0d86-48cf-adb4-2a7ba6216122");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var getPasswordComplexityPolicyVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getPasswordComplexityPolicyVar = getPasswordComplexityPolicyVar;
try {OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:8ckACIYNz0ittCp7piFhIg:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.AKH0mAfpTkmPwHzBf++w4A/ClientActions.8ckACIYNz0ittCp7piFhIg:_rSZ0YvCNb0itv6h6VLfNg", "OutSystemsUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:g48CGlZ3SEqA2GmcYgaK2A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:qlDysp7gn0SrdDUyhItp9A", callContext.id);
// Execute Action: GetPasswordComplexityPolicy
getPasswordComplexityPolicyVar.value = OS.SystemActions.getPasswordComplexityPolicy(callContext);

// Set initial values
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NTqX_S91WEuJh5Iir0zH0Q", callContext.id);
// PasswordComplexityPolicy = GetPasswordComplexityPolicy.PasswordComplexityPolicy
model.variables.passwordComplexityPolicyVar = getPasswordComplexityPolicyVar.value.passwordComplexityPolicyOut;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NTqX_S91WEuJh5Iir0zH0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PasswordValidationResult.IsValid = False
model.variables.passwordValidationResultVar.isValidAttr = false;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NTqX_S91WEuJh5Iir0zH0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PasswordValidationResult.MissingLowerCaseLetter = True
model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NTqX_S91WEuJh5Iir0zH0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// PasswordValidationResult.MissingMinimumLength = True
model.variables.passwordValidationResultVar.missingMinimumLengthAttr = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NTqX_S91WEuJh5Iir0zH0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// PasswordValidationResult.MissingUpperCaseLetter = True
model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NTqX_S91WEuJh5Iir0zH0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// PasswordValidationResult.MissingNumber = True
model.variables.passwordValidationResultVar.missingNumberAttr = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:NTqX_S91WEuJh5Iir0zH0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// PasswordValidationResult.MissingSpecialCharacter = True
model.variables.passwordValidationResultVar.missingSpecialCharacterAttr = true;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JFiYxI10NEusNysCtuiu5A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:8ckACIYNz0ittCp7piFhIg", callContext.id);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onInitialize$Action;
}set _onInitialize$Action(value) {this.__onInitialize$Action = value;
}

get _onParametersChanged$Action() {if(!(this.hasOwnProperty("__onParametersChanged$Action"))) {
this.__onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
return OS.Logger.startActiveSpan("OnParametersChanged", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "7f9bf3e7-8c2a-4fe7-b221-5485b960ba25");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var validatePasswordComplexityVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.validatePasswordComplexityVar = validatePasswordComplexityVar;
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:5_ObfyqM50+yIVSFuWC6JQ:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.AKH0mAfpTkmPwHzBf++w4A/ClientActions.5_ObfyqM50+yIVSFuWC6JQ:sQKjoz_yCkEOy027zR5e7A", "OutSystemsUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:GtST+uE6B0+Ecy6mrToxLQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:FrCsUC+oikqvfjRtOXOq2Q", callContext.id);
// Execute Action: ValidatePasswordComplexity
validatePasswordComplexityVar.value = OS.SystemActions.validatePasswordComplexity(model.variables.passwordIn, callContext);

// PasswordValidationResult
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lKA18sw6lUi+kpkTzBuJaQ", callContext.id);
// PasswordValidationResult.IsValid = ValidatePasswordComplexity.PasswordValidationResult.IsValid
model.variables.passwordValidationResultVar.isValidAttr = validatePasswordComplexityVar.value.passwordValidationResultOut.isValidAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lKA18sw6lUi+kpkTzBuJaQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PasswordValidationResult.MissingLowerCaseLetter = ValidatePasswordComplexity.PasswordValidationResult.MissingLowerCaseLetter
model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = validatePasswordComplexityVar.value.passwordValidationResultOut.missingLowerCaseLetterAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lKA18sw6lUi+kpkTzBuJaQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PasswordValidationResult.MissingMinimumLength = ValidatePasswordComplexity.PasswordValidationResult.MissingMinimumLength
model.variables.passwordValidationResultVar.missingMinimumLengthAttr = validatePasswordComplexityVar.value.passwordValidationResultOut.missingMinimumLengthAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lKA18sw6lUi+kpkTzBuJaQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// PasswordValidationResult.MissingUpperCaseLetter = ValidatePasswordComplexity.PasswordValidationResult.MissingUpperCaseLetter
model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = validatePasswordComplexityVar.value.passwordValidationResultOut.missingUpperCaseLetterAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lKA18sw6lUi+kpkTzBuJaQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// PasswordValidationResult.MissingNumber = ValidatePasswordComplexity.PasswordValidationResult.MissingNumber
model.variables.passwordValidationResultVar.missingNumberAttr = validatePasswordComplexityVar.value.passwordValidationResultOut.missingNumberAttr;
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:lKA18sw6lUi+kpkTzBuJaQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// PasswordValidationResult.MissingSpecialCharacter = ValidatePasswordComplexity.PasswordValidationResult.MissingSpecialCharacter
model.variables.passwordValidationResultVar.missingSpecialCharacterAttr = validatePasswordComplexityVar.value.passwordValidationResultOut.missingSpecialCharacterAttr;
// Is valid?
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:CV5CANjkxUy+2tDvmogxTw", callContext.id) && validatePasswordComplexityVar.value.passwordValidationResultOut.isValidAttr)) {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:Lx4lHaiWzk6N_EM29v1hfw", callContext.id) && model.variables.isValidPasswordVar)) {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JTT0ANTI4EmofVv1T0MEZg", callContext.id);
return OS.Flow.returnAsync();

} else {
// Set as valid
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:ZUuRZmztlkuvgskSomNL1Q", callContext.id);
// IsValidPassword = True
model.variables.isValidPasswordVar = true;
}

} else {
if((OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:AurAmt0jEEu26dkn8wXZrg", callContext.id) && model.variables.isValidPasswordVar)) {
// Set as invalid
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:aEqVVO1b1UiIasUsc0JsIQ", callContext.id);
// IsValidPassword = False
model.variables.isValidPasswordVar = false;
} else {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JTT0ANTI4EmofVv1T0MEZg", callContext.id);
return OS.Flow.returnAsync();

}

}

OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:8n3GQGywrkCI8deXdwjWVw", callContext.id);
// Trigger Event: Compliant
return controller.compliant$Action(validatePasswordComplexityVar.value.passwordValidationResultOut.isValidAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Kn_hixxDWEm4lMd7mIpycQ:JTT0ANTI4EmofVv1T0MEZg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:5_ObfyqM50+yIVSFuWC6JQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:5_ObfyqM50+yIVSFuWC6JQ", callContext.id);
throw ex;

});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__onParametersChanged$Action;
}set _onParametersChanged$Action(value) {this.__onParametersChanged$Action = value;
}


onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "0800c9f1-0d86-48cf-adb4-2a7ba6216122");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onParametersChanged$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "7f9bf3e7-8c2a-4fe7-b221-5485b960ba25");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

get compliant$Action() {if(!(this.hasOwnProperty("_compliant$Action"))) {
this._compliant$Action = function () {
return Promise.resolve();
};
}

return this._compliant$Action;
}set compliant$Action(value) {this._compliant$Action = value;
}


// Event Handler Actions
get pushDebuggerContext() {if(!(this.hasOwnProperty("_pushDebuggerContext"))) {
this._pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw:H+UJ8W9I8hc71hqLkfsPOw", "OutSystemsUI", "Utilities", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Kn_hixxDWEm4lMd7mIpycQ:AKH0mAfpTkmPwHzBf++w4A:/NRWebFlows._j+WNB+Er0ymD9g1Fl+Pmw/NodesShownInESpaceTree.AKH0mAfpTkmPwHzBf++w4A:f0V4izmyL5Mt5LXMUS1vXA", "OutSystemsUI", "PasswordPolicy", "NRNodes.WebBlock", callContext.id, varBag);
};
}

return this._pushDebuggerContext;
}set pushDebuggerContext(value) {this._pushDebuggerContext = value;
}

get popDebuggerContext() {if(!(this.hasOwnProperty("_popDebuggerContext"))) {
this._popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:AKH0mAfpTkmPwHzBf++w4A", callContext.id);
OutSystemsDebugger.pop("Kn_hixxDWEm4lMd7mIpycQ:_j+WNB+Er0ymD9g1Fl+Pmw", callContext.id);
};
}

return this._popDebuggerContext;
}set popDebuggerContext(value) {this._popDebuggerContext = value;
}

get onInitializeEventHandler() {if(!(this.hasOwnProperty("_onInitializeEventHandler"))) {
this._onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/PasswordPolicy On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
}

return this._onInitializeEventHandler;
}set onInitializeEventHandler(value) {this._onInitializeEventHandler = value;
}

get onReadyEventHandler() {if(!(this.hasOwnProperty("_onReadyEventHandler"))) {
this._onReadyEventHandler = null;
}

return this._onReadyEventHandler;
}set onReadyEventHandler(value) {this._onReadyEventHandler = value;
}

get onRenderEventHandler() {if(!(this.hasOwnProperty("_onRenderEventHandler"))) {
this._onRenderEventHandler = null;
}

return this._onRenderEventHandler;
}set onRenderEventHandler(value) {this._onRenderEventHandler = value;
}

get onDestroyEventHandler() {if(!(this.hasOwnProperty("_onDestroyEventHandler"))) {
this._onDestroyEventHandler = null;
}

return this._onDestroyEventHandler;
}set onDestroyEventHandler(value) {this._onDestroyEventHandler = value;
}

get onParametersChangedEventHandler() {if(!(this.hasOwnProperty("_onParametersChangedEventHandler"))) {
this._onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utilities/PasswordPolicy On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
}

return this._onParametersChangedEventHandler;
}set onParametersChangedEventHandler(value) {this._onParametersChangedEventHandler = value;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex) {
return controller.handleError(ex);
};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

static checkPermissions() {
}

getDefaultTimeout() {
return OutSystemsUIController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});


define("OutSystemsUI.Utilities.PasswordPolicy.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"qlDysp7gn0SrdDUyhItp9A": {
getter: function (varBag, idService) {
return varBag.getPasswordComplexityPolicyVar.value;
}
},
"FrCsUC+oikqvfjRtOXOq2Q": {
getter: function (varBag, idService) {
return varBag.validatePasswordComplexityVar.value;
}
},
"BwmMyBW38k6PL6i1u1q46w": {
getter: function (varBag, idService) {
return varBag.model.variables.passwordComplexityPolicyVar;
}
},
"WcUVdQZgkUmK5w8ArYiZBA": {
getter: function (varBag, idService) {
return varBag.model.variables.passwordValidationResultVar;
}
},
"9rOLrPrPBUKnYS+Pc6Ts2w": {
getter: function (varBag, idService) {
return varBag.model.variables.isValidPasswordVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"c9derffUrEGBHcI5Alp0WQ": {
getter: function (varBag, idService) {
return varBag.model.variables.passwordIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JzKvR+LI_0+ltDGZTYyKjA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasPolicyDefined"));
})(varBag.model, idService);
}
},
"cWf8NU8Dc0+c__a1JU3tUw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ValidPassword"));
})(varBag.model, idService);
}
},
"tZ0ksw_QA0yUun5jPWyi5w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("NumberRequired"));
})(varBag.model, idService);
}
},
"cjvpT6kBpkaK7KRqQiQYkA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MissingMinimumLength"));
})(varBag.model, idService);
}
},
"_WLifpIhCUK82cgK7nBOZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("UpperCaseLetterRequired"));
})(varBag.model, idService);
}
},
"BSICCaNpPUKJqoyxpKELwQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MissingUpperCaseLetter"));
})(varBag.model, idService);
}
},
"BSKun8WYV0W+JXiWjkhNBA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LowerCaseLetterRequired"));
})(varBag.model, idService);
}
},
"4+ty6t3yIEOcNgxMy9hpGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MissingLowerCaseLetter"));
})(varBag.model, idService);
}
},
"fv6rypVc8EOKhd8NN14vMg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MinimumNumberRequired"));
})(varBag.model, idService);
}
},
"aPmaXxKXd0WTr+sPytErMA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MissingNumber"));
})(varBag.model, idService);
}
},
"_Q1AH8+zU0qoYF_6iqgd+A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SpecialCharacterRequired"));
})(varBag.model, idService);
}
},
"auQqNsWuIUOwzUunb85s3Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MissingSpecialCharacter"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

