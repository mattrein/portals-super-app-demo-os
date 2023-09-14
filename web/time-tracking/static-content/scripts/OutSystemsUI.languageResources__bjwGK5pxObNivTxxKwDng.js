define("OutSystemsUI.languageResources", ["OutSystems/ClientRuntime/Main", "OutSystemsUI.languageResources.translationsResources"], function (OutSystems, OutSystemsUILanguageResources_translationsResources) {
var OS = OutSystems.Internal;
class MessagesProvider extends 
OS.LanguageResources.BaseMessagesProvider {
constructor(translationResources) {
super(translationResources);
this.setMessage("Validation.Mandatory", "Required field!");
this.setMessage("Validation.Integer", "Integer expected!");
this.setMessage("Validation.LongInteger", "Integer expected!");
this.setMessage("Validation.Decimal", "Decimal expected!");
this.setMessage("Validation.Currency", "Currency expected!");
this.setMessage("Validation.Date", "Date expected!");
this.setMessage("Validation.Time", "Time expected!");
this.setMessage("Validation.DateTime", "DateTime expected!");
this.setMessage("Validation.Text", "Text expected!");
this.setMessage("Validation.PhoneNumber", "Phone Number expected!");
this.setMessage("Validation.Email", "Email expected!");
this.setMessage("UpgradeComplete", "Your application has been updated to the latest version.");
this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app.");
this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app.");
this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost.");
this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update.");
this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.");
}

}

return new MessagesProvider(OutSystemsUILanguageResources_translationsResources);
});

define("OutSystemsUI.languageResources.translationsResources", ["exports", "OutSystemsUI.languageResources.translationsResources.pt"], function (exports, OutSystemsUI_languageResources_translationsResources_pt) {
return {
"pt": {
"translations": OutSystemsUI_languageResources_translationsResources_pt,
"isRTL": false
}
};
});

define("OutSystemsUI.languageResources.translationsResources.pt", [], function () {
return {
"Validation.Currency": "Formato de moeda esperado!",
"Validation.DateTime": "Formato de data e hora esperado!",
"Validation.Date": "Formato de Data esperada!",
"Validation.Decimal": "Formato decimal esperado!",
"Validation.Email": "Formato de email esperado!",
"Validation.Integer": "Formato de número esperado!",
"Validation.LongInteger": "Formato de número esperado!",
"Validation.Mandatory": "Campo obrigatório!",
"Kn_hixxDWEm4lMd7mIpycQ#NumericPasswordValidatorMsg": "Formato password numérica esperado!",
"Validation.PhoneNumber": "Formato de número de telefone esperado!",
"Validation.Text": "Formato de texto esperado!",
"Validation.Time": "Formato de hora esperado!",
"UpgradeComplete": "A sua aplicação foi actualizada para a versão mais recente.",
"AppInitError.Generic": "Ocorreu um erro ao tentar actualizar a sua aplicação. Se quiser tentar novamente, reinicie a aplicação.",
"AppInitError.DataModel": "Ocorreu um erro ao tentar actualizar a sua aplicação. Se quiser tentar novamente, reinicie a aplicação. Se o problema persistir, você pode reinstalar a aplicação, mas os dados locais serão apagados.",
"AppInitError.Resources": "Ocorreu um erro ao tentar actualizar a sua aplicação. Se quiser tentar novamente, reinicie a aplicação.",
"UpgradeRequiredDataLoss": "A sua aplicação precisa de ser actualizada (os seus dados não salvos, serão perdidos). Toque aqui para actualizar.",
"UpgradeRequired": "A sua aplicação necessita de actualizar. Toque aqui para actualizar."
};
});

