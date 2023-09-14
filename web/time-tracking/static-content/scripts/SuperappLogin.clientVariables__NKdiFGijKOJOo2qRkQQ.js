define("SuperappLogin.clientVariables", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
var clientVarsService;
class ClientVariables {
constructor() {
clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
}

getLastURL() {
return clientVarsService.getVariable("LastURL", "SuperappLogin", OS.DataTypes.DataTypes.Text);
}

setLastURL(value) {
return clientVarsService.setVariable("LastURL", "SuperappLogin", OS.DataTypes.DataTypes.Text, value);
}

getUserPhotoURL() {
return clientVarsService.getVariable("UserPhotoURL", "SuperappLogin", OS.DataTypes.DataTypes.Text);
}

setUserPhotoURL(value) {
return clientVarsService.setVariable("UserPhotoURL", "SuperappLogin", OS.DataTypes.DataTypes.Text, value);
}

getUserName() {
return clientVarsService.getVariable("UserName", "SuperappLogin", OS.DataTypes.DataTypes.Text);
}

setUserName(value) {
return clientVarsService.setVariable("UserName", "SuperappLogin", OS.DataTypes.DataTypes.Text, value);
}

serialize() {
return {
LastURL: OS.DataConversion.ServerDataConverter.to(this.getLastURL(), OS.DataTypes.DataTypes.Text),
UserPhotoURL: OS.DataConversion.ServerDataConverter.to(this.getUserPhotoURL(), OS.DataTypes.DataTypes.Text),
UserName: OS.DataConversion.ServerDataConverter.to(this.getUserName(), OS.DataTypes.DataTypes.Text)
};
}

}

return new ClientVariables();
});

