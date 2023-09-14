define("SuperappLogin.model$RC_9589ecc0629788c2aca6b47bcbae782c", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_9589ecc0629788c2aca6b47bcbae782cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Space", "spaceAttr", "Space", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord());
}, true, OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_9589ecc0629788c2aca6b47bcbae782c(new RC_9589ecc0629788c2aca6b47bcbae782c.RecordClass({
spaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_9589ecc0629788c2aca6b47bcbae782c = RC_9589ecc0629788c2aca6b47bcbae782cInner;

RC_9589ecc0629788c2aca6b47bcbae782cInner._isAnonymousRecord = true;
RC_9589ecc0629788c2aca6b47bcbae782cInner.UniqueId = "9589ecc0-6297-88c2-aca6-b47bcbae782c";
var RC_9589ecc0629788c2aca6b47bcbae782c = RC_9589ecc0629788c2aca6b47bcbae782cInner;
RC_9589ecc0629788c2aca6b47bcbae782c.init();
}
});

define("SuperappLogin.model$RL_021cf4e3f37562560ed722ed4a5446c1", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_9589ecc0629788c2aca6b47bcbae782c"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_021cf4e3f37562560ed722ed4a5446c1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_9589ecc0629788c2aca6b47bcbae782c;
}

}

SuperappLoginModel.RL_021cf4e3f37562560ed722ed4a5446c1 = RL_021cf4e3f37562560ed722ed4a5446c1;

});

define("SuperappLogin.model$RL_024c65775fda4a7c95336ab422a752c4", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_1e2af88601c0491260411e1369eb104cEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_024c65775fda4a7c95336ab422a752c4 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_1e2af88601c0491260411e1369eb104cEntityRecord;
}

}

SuperappLoginModel.RL_024c65775fda4a7c95336ab422a752c4 = RL_024c65775fda4a7c95336ab422a752c4;

});

define("SuperappLogin.model$RL_028be7f802152b5f25a868ed964b5ea2", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_8d4f783227026ce93d50126c7f028443EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_028be7f802152b5f25a868ed964b5ea2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_8d4f783227026ce93d50126c7f028443EntityRecord;
}

}

SuperappLoginModel.RL_028be7f802152b5f25a868ed964b5ea2 = RL_028be7f802152b5f25a868ed964b5ea2;

});

define("SuperappLogin.model$RC_fb5d22b1003cff234a588ab54b5367f0", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_fb5d22b1003cff234a588ab54b5367f0Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("CarouselDirection", "carouselDirectionAttr", "CarouselDirection", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord());
}, true, OutSystemsUIModel.EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_fb5d22b1003cff234a588ab54b5367f0(new RC_fb5d22b1003cff234a588ab54b5367f0.RecordClass({
carouselDirectionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_fb5d22b1003cff234a588ab54b5367f0 = RC_fb5d22b1003cff234a588ab54b5367f0Inner;

RC_fb5d22b1003cff234a588ab54b5367f0Inner._isAnonymousRecord = true;
RC_fb5d22b1003cff234a588ab54b5367f0Inner.UniqueId = "fb5d22b1-003c-ff23-4a58-8ab54b5367f0";
var RC_fb5d22b1003cff234a588ab54b5367f0 = RC_fb5d22b1003cff234a588ab54b5367f0Inner;
RC_fb5d22b1003cff234a588ab54b5367f0.init();
}
});

define("SuperappLogin.model$RL_02cff45c25b99caaf51dba44a0e0b754", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_fb5d22b1003cff234a588ab54b5367f0"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_02cff45c25b99caaf51dba44a0e0b754 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_fb5d22b1003cff234a588ab54b5367f0;
}

}

SuperappLoginModel.RL_02cff45c25b99caaf51dba44a0e0b754 = RL_02cff45c25b99caaf51dba44a0e0b754;

});

define("SuperappLogin.model$RC_070998dc6b3dc951b52d8108550fe380", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_50814454e481dd1773c2250bc248da5eEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_070998dc6b3dc951b52d8108550fe380Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Direction", "directionAttr", "Direction", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_50814454e481dd1773c2250bc248da5eEntityRecord());
}, true, OutSystemsUIModel.EN_50814454e481dd1773c2250bc248da5eEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_070998dc6b3dc951b52d8108550fe380(new RC_070998dc6b3dc951b52d8108550fe380.RecordClass({
directionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_070998dc6b3dc951b52d8108550fe380 = RC_070998dc6b3dc951b52d8108550fe380Inner;

RC_070998dc6b3dc951b52d8108550fe380Inner._isAnonymousRecord = true;
RC_070998dc6b3dc951b52d8108550fe380Inner.UniqueId = "070998dc-6b3d-c951-b52d-8108550fe380";
var RC_070998dc6b3dc951b52d8108550fe380 = RC_070998dc6b3dc951b52d8108550fe380Inner;
RC_070998dc6b3dc951b52d8108550fe380.init();
}
});

define("SuperappLogin.model$RC_210f541f43ec6384ba59bfd8fe4b8837", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_210f541f43ec6384ba59bfd8fe4b8837Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DatePickerWeekDay", "datePickerWeekDayAttr", "DatePickerWeekDay", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord());
}, true, OutSystemsUIModel.EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_210f541f43ec6384ba59bfd8fe4b8837(new RC_210f541f43ec6384ba59bfd8fe4b8837.RecordClass({
datePickerWeekDayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_210f541f43ec6384ba59bfd8fe4b8837 = RC_210f541f43ec6384ba59bfd8fe4b8837Inner;

RC_210f541f43ec6384ba59bfd8fe4b8837Inner._isAnonymousRecord = true;
RC_210f541f43ec6384ba59bfd8fe4b8837Inner.UniqueId = "210f541f-43ec-6384-ba59-bfd8fe4b8837";
var RC_210f541f43ec6384ba59bfd8fe4b8837 = RC_210f541f43ec6384ba59bfd8fe4b8837Inner;
RC_210f541f43ec6384ba59bfd8fe4b8837.init();
}
});

define("SuperappLogin.model$RL_073741b4a94a52714ff12683c5a2ca93", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_210f541f43ec6384ba59bfd8fe4b8837"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_073741b4a94a52714ff12683c5a2ca93 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_210f541f43ec6384ba59bfd8fe4b8837;
}

}

SuperappLoginModel.RL_073741b4a94a52714ff12683c5a2ca93 = RL_073741b4a94a52714ff12683c5a2ca93;

});

define("SuperappLogin.model$RC_0a89eeb60fa1f44b6316ca69b462007b", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_d11562be18a7e40ca777aa336c946163EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_0a89eeb60fa1f44b6316ca69b462007bInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_d11562be18a7e40ca777aa336c946163EntityRecord());
}, true, OutSystemsUIModel.EN_d11562be18a7e40ca777aa336c946163EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_0a89eeb60fa1f44b6316ca69b462007b(new RC_0a89eeb60fa1f44b6316ca69b462007b.RecordClass({
shapeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_0a89eeb60fa1f44b6316ca69b462007b = RC_0a89eeb60fa1f44b6316ca69b462007bInner;

RC_0a89eeb60fa1f44b6316ca69b462007bInner._isAnonymousRecord = true;
RC_0a89eeb60fa1f44b6316ca69b462007bInner.UniqueId = "0a89eeb6-0fa1-f44b-6316-ca69b462007b";
var RC_0a89eeb60fa1f44b6316ca69b462007b = RC_0a89eeb60fa1f44b6316ca69b462007bInner;
RC_0a89eeb60fa1f44b6316ca69b462007b.init();
}
});

define("SuperappLogin.model$RC_0d776a4e191faf321030d5ce57aa4167", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_7441573ccf264d27ef548a39a846bd68EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_0d776a4e191faf321030d5ce57aa4167Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Steps", "stepsAttr", "Steps", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_7441573ccf264d27ef548a39a846bd68EntityRecord());
}, true, OutSystemsUIModel.EN_7441573ccf264d27ef548a39a846bd68EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_0d776a4e191faf321030d5ce57aa4167(new RC_0d776a4e191faf321030d5ce57aa4167.RecordClass({
stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_0d776a4e191faf321030d5ce57aa4167 = RC_0d776a4e191faf321030d5ce57aa4167Inner;

RC_0d776a4e191faf321030d5ce57aa4167Inner._isAnonymousRecord = true;
RC_0d776a4e191faf321030d5ce57aa4167Inner.UniqueId = "0d776a4e-191f-af32-1030-d5ce57aa4167";
var RC_0d776a4e191faf321030d5ce57aa4167 = RC_0d776a4e191faf321030d5ce57aa4167Inner;
RC_0d776a4e191faf321030d5ce57aa4167.init();
}
});

define("SuperappLogin.model$RL_b290214900b73d49f11f1fe32c57a145", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_841c1f1485f51831db9f4b37a6d551d5Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_b290214900b73d49f11f1fe32c57a145 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_841c1f1485f51831db9f4b37a6d551d5Structure;
}

}

SuperappLoginModel.RL_b290214900b73d49f11f1fe32c57a145 = RL_b290214900b73d49f11f1fe32c57a145;

});

define("SuperappLogin.model$RC_1310596a4ac4ae2b0319b38dd9472639", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_af087c80f6ec63e7de4ff7926f7da7d0Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_1310596a4ac4ae2b0319b38dd9472639Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("NoUiSliderConfigs", "noUiSliderConfigsAttr", "NoUiSliderConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_af087c80f6ec63e7de4ff7926f7da7d0Structure());
}, true, OutSystemsUIModel.ST_af087c80f6ec63e7de4ff7926f7da7d0Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1310596a4ac4ae2b0319b38dd9472639(new RC_1310596a4ac4ae2b0319b38dd9472639.RecordClass({
noUiSliderConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_1310596a4ac4ae2b0319b38dd9472639 = RC_1310596a4ac4ae2b0319b38dd9472639Inner;

RC_1310596a4ac4ae2b0319b38dd9472639Inner._isAnonymousRecord = true;
RC_1310596a4ac4ae2b0319b38dd9472639Inner.UniqueId = "1310596a-4ac4-ae2b-0319-b38dd9472639";
var RC_1310596a4ac4ae2b0319b38dd9472639 = RC_1310596a4ac4ae2b0319b38dd9472639Inner;
RC_1310596a4ac4ae2b0319b38dd9472639.init();
}
});

define("SuperappLogin.model$RC_f9a589fe5b81c3bda7db0e574d5d11fb", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$UserLoginResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_f9a589fe5b81c3bda7db0e574d5d11fbInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UserLoginResult", "userLoginResultAttr", "UserLoginResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UserLoginResultRec());
}, true, OS.SystemStructures.UserLoginResultRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_f9a589fe5b81c3bda7db0e574d5d11fb(new RC_f9a589fe5b81c3bda7db0e574d5d11fb.RecordClass({
userLoginResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_f9a589fe5b81c3bda7db0e574d5d11fb = RC_f9a589fe5b81c3bda7db0e574d5d11fbInner;

RC_f9a589fe5b81c3bda7db0e574d5d11fbInner._isAnonymousRecord = true;
RC_f9a589fe5b81c3bda7db0e574d5d11fbInner.UniqueId = "f9a589fe-5b81-c3bd-a7db-0e574d5d11fb";
var RC_f9a589fe5b81c3bda7db0e574d5d11fb = RC_f9a589fe5b81c3bda7db0e574d5d11fbInner;
RC_f9a589fe5b81c3bda7db0e574d5d11fb.init();
}
});

define("SuperappLogin.model$RL_137c1fde2390fc7845ae92a0265be990", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_f9a589fe5b81c3bda7db0e574d5d11fb"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_137c1fde2390fc7845ae92a0265be990 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_f9a589fe5b81c3bda7db0e574d5d11fb;
}

}

SuperappLoginModel.RL_137c1fde2390fc7845ae92a0265be990 = RL_137c1fde2390fc7845ae92a0265be990;

});

define("SuperappLogin.model$RC_78b6d6ed7d52800a8a68e7d796ec6850", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_78b6d6ed7d52800a8a68e7d796ec6850Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord());
}, true, OutSystemsUIModel.EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_78b6d6ed7d52800a8a68e7d796ec6850(new RC_78b6d6ed7d52800a8a68e7d796ec6850.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_78b6d6ed7d52800a8a68e7d796ec6850 = RC_78b6d6ed7d52800a8a68e7d796ec6850Inner;

RC_78b6d6ed7d52800a8a68e7d796ec6850Inner._isAnonymousRecord = true;
RC_78b6d6ed7d52800a8a68e7d796ec6850Inner.UniqueId = "78b6d6ed-7d52-800a-8a68-e7d796ec6850";
var RC_78b6d6ed7d52800a8a68e7d796ec6850 = RC_78b6d6ed7d52800a8a68e7d796ec6850Inner;
RC_78b6d6ed7d52800a8a68e7d796ec6850.init();
}
});

define("SuperappLogin.model$RL_13dce2cada552f2b003eedebc4cfbf64", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_78b6d6ed7d52800a8a68e7d796ec6850"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_13dce2cada552f2b003eedebc4cfbf64 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_78b6d6ed7d52800a8a68e7d796ec6850;
}

}

SuperappLoginModel.RL_13dce2cada552f2b003eedebc4cfbf64 = RL_13dce2cada552f2b003eedebc4cfbf64;

});

define("SuperappLogin.model$RC_79f003baa030e546826ed42c3962f582", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$UserInfoRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_79f003baa030e546826ed42c3962f582Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UserInfo", "userInfoAttr", "UserInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UserInfoRec());
}, true, OS.SystemStructures.UserInfoRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_79f003baa030e546826ed42c3962f582(new RC_79f003baa030e546826ed42c3962f582.RecordClass({
userInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_79f003baa030e546826ed42c3962f582 = RC_79f003baa030e546826ed42c3962f582Inner;

RC_79f003baa030e546826ed42c3962f582Inner._isAnonymousRecord = true;
RC_79f003baa030e546826ed42c3962f582Inner.UniqueId = "79f003ba-a030-e546-826e-d42c3962f582";
var RC_79f003baa030e546826ed42c3962f582 = RC_79f003baa030e546826ed42c3962f582Inner;
RC_79f003baa030e546826ed42c3962f582.init();
}
});

define("SuperappLogin.model$RL_1503951706c05a1675ae923dc239c757", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_79f003baa030e546826ed42c3962f582"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_1503951706c05a1675ae923dc239c757 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_79f003baa030e546826ed42c3962f582;
}

}

SuperappLoginModel.RL_1503951706c05a1675ae923dc239c757 = RL_1503951706c05a1675ae923dc239c757;

});

define("SuperappLogin.model$RL_157fced35d515bf7b615f06f3ed59864", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_157fced35d515bf7b615f06f3ed59864 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord;
}

}

SuperappLoginModel.RL_157fced35d515bf7b615f06f3ed59864 = RL_157fced35d515bf7b615f06f3ed59864;

});

define("SuperappLogin.model$RC_1583be5d90a94b6a73170ffa868eecc5", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_1583be5d90a94b6a73170ffa868eecc5Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DeviceResponsive", "deviceResponsiveAttr", "DeviceResponsive", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord());
}, true, OutSystemsUIModel.EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1583be5d90a94b6a73170ffa868eecc5(new RC_1583be5d90a94b6a73170ffa868eecc5.RecordClass({
deviceResponsiveAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_1583be5d90a94b6a73170ffa868eecc5 = RC_1583be5d90a94b6a73170ffa868eecc5Inner;

RC_1583be5d90a94b6a73170ffa868eecc5Inner._isAnonymousRecord = true;
RC_1583be5d90a94b6a73170ffa868eecc5Inner.UniqueId = "1583be5d-90a9-4b6a-7317-0ffa868eecc5";
var RC_1583be5d90a94b6a73170ffa868eecc5 = RC_1583be5d90a94b6a73170ffa868eecc5Inner;
RC_1583be5d90a94b6a73170ffa868eecc5.init();
}
});

define("SuperappLogin.model$RC_3ba1d238c8e0f0c3e875fb37f0381cc6", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_8d4f783227026ce93d50126c7f028443EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Orientation", "orientationAttr", "Orientation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_8d4f783227026ce93d50126c7f028443EntityRecord());
}, true, OutSystemsUIModel.EN_8d4f783227026ce93d50126c7f028443EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3ba1d238c8e0f0c3e875fb37f0381cc6(new RC_3ba1d238c8e0f0c3e875fb37f0381cc6.RecordClass({
orientationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_3ba1d238c8e0f0c3e875fb37f0381cc6 = RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner;

RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner._isAnonymousRecord = true;
RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner.UniqueId = "3ba1d238-c8e0-f0c3-e875-fb37f0381cc6";
var RC_3ba1d238c8e0f0c3e875fb37f0381cc6 = RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner;
RC_3ba1d238c8e0f0c3e875fb37f0381cc6.init();
}
});

define("SuperappLogin.model$RL_1608d9419ce68c1bc879636bc5f915cc", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_3ba1d238c8e0f0c3e875fb37f0381cc6"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_1608d9419ce68c1bc879636bc5f915cc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_3ba1d238c8e0f0c3e875fb37f0381cc6;
}

}

SuperappLoginModel.RL_1608d9419ce68c1bc879636bc5f915cc = RL_1608d9419ce68c1bc879636bc5f915cc;

});

define("SuperappLogin.model$RL_19efe67c3ea3fa4b4b07aaa801b42f8c", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_52e55d60c515b6016f81404afb220594EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_19efe67c3ea3fa4b4b07aaa801b42f8c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord;
}

}

SuperappLoginModel.RL_19efe67c3ea3fa4b4b07aaa801b42f8c = RL_19efe67c3ea3fa4b4b07aaa801b42f8c;

});

define("SuperappLogin.model$RC_c6831d06e579de4edbcf59e128b60b13", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_c3a2475ae6370a2f746040280495b4a2EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_c6831d06e579de4edbcf59e128b60b13Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_c3a2475ae6370a2f746040280495b4a2EntityRecord());
}, true, OutSystemsUIModel.EN_c3a2475ae6370a2f746040280495b4a2EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_c6831d06e579de4edbcf59e128b60b13(new RC_c6831d06e579de4edbcf59e128b60b13.RecordClass({
autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_c6831d06e579de4edbcf59e128b60b13 = RC_c6831d06e579de4edbcf59e128b60b13Inner;

RC_c6831d06e579de4edbcf59e128b60b13Inner._isAnonymousRecord = true;
RC_c6831d06e579de4edbcf59e128b60b13Inner.UniqueId = "c6831d06-e579-de4e-dbcf-59e128b60b13";
var RC_c6831d06e579de4edbcf59e128b60b13 = RC_c6831d06e579de4edbcf59e128b60b13Inner;
RC_c6831d06e579de4edbcf59e128b60b13.init();
}
});

define("SuperappLogin.model$RL_1a211c52d9450d4da06f34c1b8aa3b76", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_c6831d06e579de4edbcf59e128b60b13"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_1a211c52d9450d4da06f34c1b8aa3b76 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_c6831d06e579de4edbcf59e128b60b13;
}

}

SuperappLoginModel.RL_1a211c52d9450d4da06f34c1b8aa3b76 = RL_1a211c52d9450d4da06f34c1b8aa3b76;

});

define("SuperappLogin.model$RC_1ba3db8c7175cd095b4f1a36c3a1e53d", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$FinishResetPasswordFailureReasonRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FinishResetPasswordFailureReason", "finishResetPasswordFailureReasonAttr", "FinishResetPasswordFailureReason", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.FinishResetPasswordFailureReasonRec());
}, true, OS.SystemStructures.FinishResetPasswordFailureReasonRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1ba3db8c7175cd095b4f1a36c3a1e53d(new RC_1ba3db8c7175cd095b4f1a36c3a1e53d.RecordClass({
finishResetPasswordFailureReasonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_1ba3db8c7175cd095b4f1a36c3a1e53d = RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner;

RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner._isAnonymousRecord = true;
RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner.UniqueId = "1ba3db8c-7175-cd09-5b4f-1a36c3a1e53d";
var RC_1ba3db8c7175cd095b4f1a36c3a1e53d = RC_1ba3db8c7175cd095b4f1a36c3a1e53dInner;
RC_1ba3db8c7175cd095b4f1a36c3a1e53d.init();
}
});

define("SuperappLogin.model$RC_1ea63146d7f1d969afc206832e751192", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_1e2af88601c0491260411e1369eb104cEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_1ea63146d7f1d969afc206832e751192Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("BooleanTypes", "booleanTypesAttr", "BooleanTypes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_1e2af88601c0491260411e1369eb104cEntityRecord());
}, true, OutSystemsUIModel.EN_1e2af88601c0491260411e1369eb104cEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_1ea63146d7f1d969afc206832e751192(new RC_1ea63146d7f1d969afc206832e751192.RecordClass({
booleanTypesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_1ea63146d7f1d969afc206832e751192 = RC_1ea63146d7f1d969afc206832e751192Inner;

RC_1ea63146d7f1d969afc206832e751192Inner._isAnonymousRecord = true;
RC_1ea63146d7f1d969afc206832e751192Inner.UniqueId = "1ea63146-d7f1-d969-afc2-06832e751192";
var RC_1ea63146d7f1d969afc206832e751192 = RC_1ea63146d7f1d969afc206832e751192Inner;
RC_1ea63146d7f1d969afc206832e751192.init();
}
});

define("SuperappLogin.model$RC_bd573fb2cb521691dc6a8c4b02eeb054", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$UpdateUserResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_bd573fb2cb521691dc6a8c4b02eeb054Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UpdateUserResult", "updateUserResultAttr", "UpdateUserResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UpdateUserResultRec());
}, true, OS.SystemStructures.UpdateUserResultRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_bd573fb2cb521691dc6a8c4b02eeb054(new RC_bd573fb2cb521691dc6a8c4b02eeb054.RecordClass({
updateUserResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_bd573fb2cb521691dc6a8c4b02eeb054 = RC_bd573fb2cb521691dc6a8c4b02eeb054Inner;

RC_bd573fb2cb521691dc6a8c4b02eeb054Inner._isAnonymousRecord = true;
RC_bd573fb2cb521691dc6a8c4b02eeb054Inner.UniqueId = "bd573fb2-cb52-1691-dc6a-8c4b02eeb054";
var RC_bd573fb2cb521691dc6a8c4b02eeb054 = RC_bd573fb2cb521691dc6a8c4b02eeb054Inner;
RC_bd573fb2cb521691dc6a8c4b02eeb054.init();
}
});

define("SuperappLogin.model$RL_201410915258bdd92387bbd4bec2a7bb", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_bd573fb2cb521691dc6a8c4b02eeb054"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_201410915258bdd92387bbd4bec2a7bb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_bd573fb2cb521691dc6a8c4b02eeb054;
}

}

SuperappLoginModel.RL_201410915258bdd92387bbd4bec2a7bb = RL_201410915258bdd92387bbd4bec2a7bb;

});

define("SuperappLogin.model$RL_230328260e3d7a695b9562201483a549", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_230328260e3d7a695b9562201483a549 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord;
}

}

SuperappLoginModel.RL_230328260e3d7a695b9562201483a549 = RL_230328260e3d7a695b9562201483a549;

});

define("SuperappLogin.model$RL_2434a812d9c1801fbc8d36150d23329c", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_af087c80f6ec63e7de4ff7926f7da7d0Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_2434a812d9c1801fbc8d36150d23329c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_af087c80f6ec63e7de4ff7926f7da7d0Structure;
}

}

SuperappLoginModel.RL_2434a812d9c1801fbc8d36150d23329c = RL_2434a812d9c1801fbc8d36150d23329c;

});

define("SuperappLogin.model$RC_261685da2c799bcc3b4873485e008694", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_261685da2c799bcc3b4873485e008694Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord());
}, true, OutSystemsUIModel.EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_261685da2c799bcc3b4873485e008694(new RC_261685da2c799bcc3b4873485e008694.RecordClass({
breakColumnsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_261685da2c799bcc3b4873485e008694 = RC_261685da2c799bcc3b4873485e008694Inner;

RC_261685da2c799bcc3b4873485e008694Inner._isAnonymousRecord = true;
RC_261685da2c799bcc3b4873485e008694Inner.UniqueId = "261685da-2c79-9bcc-3b48-73485e008694";
var RC_261685da2c799bcc3b4873485e008694 = RC_261685da2c799bcc3b4873485e008694Inner;
RC_261685da2c799bcc3b4873485e008694.init();
}
});

define("SuperappLogin.model$RC_ca426fec0751e5b6dcf015e9fdc2120e", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_ca426fec0751e5b6dcf015e9fdc2120eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord());
}, true, OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ca426fec0751e5b6dcf015e9fdc2120e(new RC_ca426fec0751e5b6dcf015e9fdc2120e.RecordClass({
sizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_ca426fec0751e5b6dcf015e9fdc2120e = RC_ca426fec0751e5b6dcf015e9fdc2120eInner;

RC_ca426fec0751e5b6dcf015e9fdc2120eInner._isAnonymousRecord = true;
RC_ca426fec0751e5b6dcf015e9fdc2120eInner.UniqueId = "ca426fec-0751-e5b6-dcf0-15e9fdc2120e";
var RC_ca426fec0751e5b6dcf015e9fdc2120e = RC_ca426fec0751e5b6dcf015e9fdc2120eInner;
RC_ca426fec0751e5b6dcf015e9fdc2120e.init();
}
});

define("SuperappLogin.model$RL_27a81319ef1cef112a91632cbf388562", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_ca426fec0751e5b6dcf015e9fdc2120e"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_27a81319ef1cef112a91632cbf388562 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_ca426fec0751e5b6dcf015e9fdc2120e;
}

}

SuperappLoginModel.RL_27a81319ef1cef112a91632cbf388562 = RL_27a81319ef1cef112a91632cbf388562;

});

define("SuperappLogin.model$RC_27b5a164e828de9b90686831c7908b4a", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_27b5a164e828de9b90686831c7908b4aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_b7d405ca4407e572da091e54d07e3bd1Structure());
}, true, OutSystemsUIModel.ST_b7d405ca4407e572da091e54d07e3bd1Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_27b5a164e828de9b90686831c7908b4a(new RC_27b5a164e828de9b90686831c7908b4a.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_27b5a164e828de9b90686831c7908b4a = RC_27b5a164e828de9b90686831c7908b4aInner;

RC_27b5a164e828de9b90686831c7908b4aInner._isAnonymousRecord = true;
RC_27b5a164e828de9b90686831c7908b4aInner.UniqueId = "27b5a164-e828-de9b-9068-6831c7908b4a";
var RC_27b5a164e828de9b90686831c7908b4a = RC_27b5a164e828de9b90686831c7908b4aInner;
RC_27b5a164e828de9b90686831c7908b4a.init();
}
});

define("SuperappLogin.model$AttachmentRec", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class AttachmentRecInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FileName", "fileNameAttr", "FileName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FileContent", "fileContentAttr", "FileContent", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("MimeType", "mimeTypeAttr", "MimeType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

SuperappLoginModel.AttachmentRec = AttachmentRecInner;

var AttachmentRec = AttachmentRecInner;
AttachmentRec.init();
}
});

define("SuperappLogin.model$RC_2ac88c51f2d9ed908454e6a06ffe188e", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_2ac88c51f2d9ed908454e6a06ffe188eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DropdownOptionalConfigs", "dropdownOptionalConfigsAttr", "DropdownOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure());
}, true, OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_2ac88c51f2d9ed908454e6a06ffe188e(new RC_2ac88c51f2d9ed908454e6a06ffe188e.RecordClass({
dropdownOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_2ac88c51f2d9ed908454e6a06ffe188e = RC_2ac88c51f2d9ed908454e6a06ffe188eInner;

RC_2ac88c51f2d9ed908454e6a06ffe188eInner._isAnonymousRecord = true;
RC_2ac88c51f2d9ed908454e6a06ffe188eInner.UniqueId = "2ac88c51-f2d9-ed90-8454-e6a06ffe188e";
var RC_2ac88c51f2d9ed908454e6a06ffe188e = RC_2ac88c51f2d9ed908454e6a06ffe188eInner;
RC_2ac88c51f2d9ed908454e6a06ffe188e.init();
}
});

define("SuperappLogin.model$RC_63c659b6dc554b0b4f81d60382bf5fd6", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_63c659b6dc554b0b4f81d60382bf5fd6Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("MessageStatus", "messageStatusAttr", "MessageStatus", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord());
}, true, OutSystemsUIModel.EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_63c659b6dc554b0b4f81d60382bf5fd6(new RC_63c659b6dc554b0b4f81d60382bf5fd6.RecordClass({
messageStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_63c659b6dc554b0b4f81d60382bf5fd6 = RC_63c659b6dc554b0b4f81d60382bf5fd6Inner;

RC_63c659b6dc554b0b4f81d60382bf5fd6Inner._isAnonymousRecord = true;
RC_63c659b6dc554b0b4f81d60382bf5fd6Inner.UniqueId = "63c659b6-dc55-4b0b-4f81-d60382bf5fd6";
var RC_63c659b6dc554b0b4f81d60382bf5fd6 = RC_63c659b6dc554b0b4f81d60382bf5fd6Inner;
RC_63c659b6dc554b0b4f81d60382bf5fd6.init();
}
});

define("SuperappLogin.model$RL_2c7706a8fd91e45cb8a8b97418bcf4d0", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_63c659b6dc554b0b4f81d60382bf5fd6"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_2c7706a8fd91e45cb8a8b97418bcf4d0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_63c659b6dc554b0b4f81d60382bf5fd6;
}

}

SuperappLoginModel.RL_2c7706a8fd91e45cb8a8b97418bcf4d0 = RL_2c7706a8fd91e45cb8a8b97418bcf4d0;

});

define("SuperappLogin.model$RC_954cd1231210e70f33f184017bf580ac", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_f43f179caddf7f7b68b18272d67285d6EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_954cd1231210e70f33f184017bf580acInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_f43f179caddf7f7b68b18272d67285d6EntityRecord());
}, true, OutSystemsUIModel.EN_f43f179caddf7f7b68b18272d67285d6EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_954cd1231210e70f33f184017bf580ac(new RC_954cd1231210e70f33f184017bf580ac.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_954cd1231210e70f33f184017bf580ac = RC_954cd1231210e70f33f184017bf580acInner;

RC_954cd1231210e70f33f184017bf580acInner._isAnonymousRecord = true;
RC_954cd1231210e70f33f184017bf580acInner.UniqueId = "954cd123-1210-e70f-33f1-84017bf580ac";
var RC_954cd1231210e70f33f184017bf580ac = RC_954cd1231210e70f33f184017bf580acInner;
RC_954cd1231210e70f33f184017bf580ac.init();
}
});

define("SuperappLogin.model$RL_2cadeb0c6f7df3cfbe06d89edb556615", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_954cd1231210e70f33f184017bf580ac"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_2cadeb0c6f7df3cfbe06d89edb556615 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_954cd1231210e70f33f184017bf580ac;
}

}

SuperappLoginModel.RL_2cadeb0c6f7df3cfbe06d89edb556615 = RL_2cadeb0c6f7df3cfbe06d89edb556615;

});

define("SuperappLogin.model$RC_310dae2b4d3a1f1ded7570a6ee74f16e", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_310dae2b4d3a1f1ded7570a6ee74f16eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DatePickerRangeOptionalConfigs", "datePickerRangeOptionalConfigsAttr", "DatePickerRangeOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure());
}, true, OutSystemsUIModel.ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_310dae2b4d3a1f1ded7570a6ee74f16e(new RC_310dae2b4d3a1f1ded7570a6ee74f16e.RecordClass({
datePickerRangeOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_310dae2b4d3a1f1ded7570a6ee74f16e = RC_310dae2b4d3a1f1ded7570a6ee74f16eInner;

RC_310dae2b4d3a1f1ded7570a6ee74f16eInner._isAnonymousRecord = true;
RC_310dae2b4d3a1f1ded7570a6ee74f16eInner.UniqueId = "310dae2b-4d3a-1f1d-ed75-70a6ee74f16e";
var RC_310dae2b4d3a1f1ded7570a6ee74f16e = RC_310dae2b4d3a1f1ded7570a6ee74f16eInner;
RC_310dae2b4d3a1f1ded7570a6ee74f16e.init();
}
});

define("SuperappLogin.model$RC_4d01ba747615bc6dc01c586f0b43450a", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_34444d0742578c128ebc8b2594439346Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_4d01ba747615bc6dc01c586f0b43450aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DropdownTagsOptionalConfigs", "dropdownTagsOptionalConfigsAttr", "DropdownTagsOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_34444d0742578c128ebc8b2594439346Structure());
}, true, OutSystemsUIModel.ST_34444d0742578c128ebc8b2594439346Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4d01ba747615bc6dc01c586f0b43450a(new RC_4d01ba747615bc6dc01c586f0b43450a.RecordClass({
dropdownTagsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_4d01ba747615bc6dc01c586f0b43450a = RC_4d01ba747615bc6dc01c586f0b43450aInner;

RC_4d01ba747615bc6dc01c586f0b43450aInner._isAnonymousRecord = true;
RC_4d01ba747615bc6dc01c586f0b43450aInner.UniqueId = "4d01ba74-7615-bc6d-c01c-586f0b43450a";
var RC_4d01ba747615bc6dc01c586f0b43450a = RC_4d01ba747615bc6dc01c586f0b43450aInner;
RC_4d01ba747615bc6dc01c586f0b43450a.init();
}
});

define("SuperappLogin.model$RL_3168a7a1678dfe8f6720ee5fb1eb68a1", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_4d01ba747615bc6dc01c586f0b43450a"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_3168a7a1678dfe8f6720ee5fb1eb68a1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_4d01ba747615bc6dc01c586f0b43450a;
}

}

SuperappLoginModel.RL_3168a7a1678dfe8f6720ee5fb1eb68a1 = RL_3168a7a1678dfe8f6720ee5fb1eb68a1;

});

define("SuperappLogin.model$RL_31d7615454c0155a64f826d4e0cf4cb5", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$FinishResetPasswordFailureReasonRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_31d7615454c0155a64f826d4e0cf4cb5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.FinishResetPasswordFailureReasonRec;
}

}

SuperappLoginModel.RL_31d7615454c0155a64f826d4e0cf4cb5 = RL_31d7615454c0155a64f826d4e0cf4cb5;

});

define("SuperappLogin.model$RC_327e36bc408edd046ca40df8a4e734bb", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_327e36bc408edd046ca40df8a4e734bbInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DatePickerOptionalConfigs", "datePickerOptionalConfigsAttr", "DatePickerOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure());
}, true, OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_327e36bc408edd046ca40df8a4e734bb(new RC_327e36bc408edd046ca40df8a4e734bb.RecordClass({
datePickerOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_327e36bc408edd046ca40df8a4e734bb = RC_327e36bc408edd046ca40df8a4e734bbInner;

RC_327e36bc408edd046ca40df8a4e734bbInner._isAnonymousRecord = true;
RC_327e36bc408edd046ca40df8a4e734bbInner.UniqueId = "327e36bc-408e-dd04-6ca4-0df8a4e734bb";
var RC_327e36bc408edd046ca40df8a4e734bb = RC_327e36bc408edd046ca40df8a4e734bbInner;
RC_327e36bc408edd046ca40df8a4e734bb.init();
}
});

define("SuperappLogin.model$RL_3325417b3e1ae27173e1161b12a2b345", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_92679525739afa328c09890d25f5ac45EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_3325417b3e1ae27173e1161b12a2b345 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_92679525739afa328c09890d25f5ac45EntityRecord;
}

}

SuperappLoginModel.RL_3325417b3e1ae27173e1161b12a2b345 = RL_3325417b3e1ae27173e1161b12a2b345;

});

define("SuperappLogin.model$RC_3554b1e2806a5b827c457cdecc492d4a", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_3554b1e2806a5b827c457cdecc492d4aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ProgressBarOptionalConfigs", "progressBarOptionalConfigsAttr", "ProgressBarOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure());
}, true, OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3554b1e2806a5b827c457cdecc492d4a(new RC_3554b1e2806a5b827c457cdecc492d4a.RecordClass({
progressBarOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_3554b1e2806a5b827c457cdecc492d4a = RC_3554b1e2806a5b827c457cdecc492d4aInner;

RC_3554b1e2806a5b827c457cdecc492d4aInner._isAnonymousRecord = true;
RC_3554b1e2806a5b827c457cdecc492d4aInner.UniqueId = "3554b1e2-806a-5b82-7c45-7cdecc492d4a";
var RC_3554b1e2806a5b827c457cdecc492d4a = RC_3554b1e2806a5b827c457cdecc492d4aInner;
RC_3554b1e2806a5b827c457cdecc492d4a.init();
}
});

define("SuperappLogin.model$RL_362950b7d5d9798e12950648533599a1", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_362950b7d5d9798e12950648533599a1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord;
}

}

SuperappLoginModel.RL_362950b7d5d9798e12950648533599a1 = RL_362950b7d5d9798e12950648533599a1;

});

define("SuperappLogin.model$RL_36d4d7e2109bafadf398450826580bed", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$UpdateUserResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_36d4d7e2109bafadf398450826580bed extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.UpdateUserResultRec;
}

}

SuperappLoginModel.RL_36d4d7e2109bafadf398450826580bed = RL_36d4d7e2109bafadf398450826580bed;

});

define("SuperappLogin.model$RC_373fec8a2329a8b1ecd55cf717893131", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_59aacee1cb91627a0f497366b24e4500EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_373fec8a2329a8b1ecd55cf717893131Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("CarouselNavigation", "carouselNavigationAttr", "CarouselNavigation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_59aacee1cb91627a0f497366b24e4500EntityRecord());
}, true, OutSystemsUIModel.EN_59aacee1cb91627a0f497366b24e4500EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_373fec8a2329a8b1ecd55cf717893131(new RC_373fec8a2329a8b1ecd55cf717893131.RecordClass({
carouselNavigationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_373fec8a2329a8b1ecd55cf717893131 = RC_373fec8a2329a8b1ecd55cf717893131Inner;

RC_373fec8a2329a8b1ecd55cf717893131Inner._isAnonymousRecord = true;
RC_373fec8a2329a8b1ecd55cf717893131Inner.UniqueId = "373fec8a-2329-a8b1-ecd5-5cf717893131";
var RC_373fec8a2329a8b1ecd55cf717893131 = RC_373fec8a2329a8b1ecd55cf717893131Inner;
RC_373fec8a2329a8b1ecd55cf717893131.init();
}
});

define("SuperappLogin.model$RL_3b8feaa11cc930133dbb7eecb085b527", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$UserLoginFailureReasonRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_3b8feaa11cc930133dbb7eecb085b527 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.UserLoginFailureReasonRec;
}

}

SuperappLoginModel.RL_3b8feaa11cc930133dbb7eecb085b527 = RL_3b8feaa11cc930133dbb7eecb085b527;

});

define("SuperappLogin.model$RC_3bbfc6c91fcd8a2dd97847564be30682", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_f9178b4aae1879ea388b92402c64db4cEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_3bbfc6c91fcd8a2dd97847564be30682Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("IdentityProvider", "identityProviderAttr", "IdentityProvider", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_f9178b4aae1879ea388b92402c64db4cEntityRecord());
}, true, OutSystemsUIModel.EN_f9178b4aae1879ea388b92402c64db4cEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3bbfc6c91fcd8a2dd97847564be30682(new RC_3bbfc6c91fcd8a2dd97847564be30682.RecordClass({
identityProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_3bbfc6c91fcd8a2dd97847564be30682 = RC_3bbfc6c91fcd8a2dd97847564be30682Inner;

RC_3bbfc6c91fcd8a2dd97847564be30682Inner._isAnonymousRecord = true;
RC_3bbfc6c91fcd8a2dd97847564be30682Inner.UniqueId = "3bbfc6c9-1fcd-8a2d-d978-47564be30682";
var RC_3bbfc6c91fcd8a2dd97847564be30682 = RC_3bbfc6c91fcd8a2dd97847564be30682Inner;
RC_3bbfc6c91fcd8a2dd97847564be30682.init();
}
});

define("SuperappLogin.model$RL_3cfea1a1e933b75750f570ea368d3da2", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_3cfea1a1e933b75750f570ea368d3da2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure;
}

}

SuperappLoginModel.RL_3cfea1a1e933b75750f570ea368d3da2 = RL_3cfea1a1e933b75750f570ea368d3da2;

});

define("SuperappLogin.model$RC_3d7c5be4055c8fe2c227afc40d8dee2f", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_3d7c5be4055c8fe2c227afc40d8dee2fInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ScrollbarStyle", "scrollbarStyleAttr", "ScrollbarStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord());
}, true, OutSystemsUIModel.EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3d7c5be4055c8fe2c227afc40d8dee2f(new RC_3d7c5be4055c8fe2c227afc40d8dee2f.RecordClass({
scrollbarStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_3d7c5be4055c8fe2c227afc40d8dee2f = RC_3d7c5be4055c8fe2c227afc40d8dee2fInner;

RC_3d7c5be4055c8fe2c227afc40d8dee2fInner._isAnonymousRecord = true;
RC_3d7c5be4055c8fe2c227afc40d8dee2fInner.UniqueId = "3d7c5be4-055c-8fe2-c227-afc40d8dee2f";
var RC_3d7c5be4055c8fe2c227afc40d8dee2f = RC_3d7c5be4055c8fe2c227afc40d8dee2fInner;
RC_3d7c5be4055c8fe2c227afc40d8dee2f.init();
}
});

define("SuperappLogin.model$RC_9817a5747e4b09aa3a6a7eb35ce9f66e", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$FinishResetPasswordResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FinishResetPasswordResult", "finishResetPasswordResultAttr", "FinishResetPasswordResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.FinishResetPasswordResultRec());
}, true, OS.SystemStructures.FinishResetPasswordResultRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_9817a5747e4b09aa3a6a7eb35ce9f66e(new RC_9817a5747e4b09aa3a6a7eb35ce9f66e.RecordClass({
finishResetPasswordResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_9817a5747e4b09aa3a6a7eb35ce9f66e = RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner;

RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner._isAnonymousRecord = true;
RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner.UniqueId = "9817a574-7e4b-09aa-3a6a-7eb35ce9f66e";
var RC_9817a5747e4b09aa3a6a7eb35ce9f66e = RC_9817a5747e4b09aa3a6a7eb35ce9f66eInner;
RC_9817a5747e4b09aa3a6a7eb35ce9f66e.init();
}
});

define("SuperappLogin.model$RL_3f7b36d8bbcf12054b7e2f49497f214f", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_9817a5747e4b09aa3a6a7eb35ce9f66e"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_3f7b36d8bbcf12054b7e2f49497f214f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_9817a5747e4b09aa3a6a7eb35ce9f66e;
}

}

SuperappLoginModel.RL_3f7b36d8bbcf12054b7e2f49497f214f = RL_3f7b36d8bbcf12054b7e2f49497f214f;

});

define("SuperappLogin.model$RC_3fbb4babd0ba48852fecc04be37d3c0e", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_841c1f1485f51831db9f4b37a6d551d5Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_3fbb4babd0ba48852fecc04be37d3c0eInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("NoUiSliderConfigs_Range", "noUiSliderConfigs_RangeAttr", "NoUiSliderConfigs_Range", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_841c1f1485f51831db9f4b37a6d551d5Structure());
}, true, OutSystemsUIModel.ST_841c1f1485f51831db9f4b37a6d551d5Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_3fbb4babd0ba48852fecc04be37d3c0e(new RC_3fbb4babd0ba48852fecc04be37d3c0e.RecordClass({
noUiSliderConfigs_RangeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_3fbb4babd0ba48852fecc04be37d3c0e = RC_3fbb4babd0ba48852fecc04be37d3c0eInner;

RC_3fbb4babd0ba48852fecc04be37d3c0eInner._isAnonymousRecord = true;
RC_3fbb4babd0ba48852fecc04be37d3c0eInner.UniqueId = "3fbb4bab-d0ba-4885-2fec-c04be37d3c0e";
var RC_3fbb4babd0ba48852fecc04be37d3c0e = RC_3fbb4babd0ba48852fecc04be37d3c0eInner;
RC_3fbb4babd0ba48852fecc04be37d3c0e.init();
}
});

define("SuperappLogin.model$RC_4028c83435ff8f3fa19c27e5a3252dd5", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_4028c83435ff8f3fa19c27e5a3252dd5Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("CarouselOptionalConfigs", "carouselOptionalConfigsAttr", "CarouselOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure());
}, true, OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4028c83435ff8f3fa19c27e5a3252dd5(new RC_4028c83435ff8f3fa19c27e5a3252dd5.RecordClass({
carouselOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_4028c83435ff8f3fa19c27e5a3252dd5 = RC_4028c83435ff8f3fa19c27e5a3252dd5Inner;

RC_4028c83435ff8f3fa19c27e5a3252dd5Inner._isAnonymousRecord = true;
RC_4028c83435ff8f3fa19c27e5a3252dd5Inner.UniqueId = "4028c834-35ff-8f3f-a19c-27e5a3252dd5";
var RC_4028c83435ff8f3fa19c27e5a3252dd5 = RC_4028c83435ff8f3fa19c27e5a3252dd5Inner;
RC_4028c83435ff8f3fa19c27e5a3252dd5.init();
}
});

define("SuperappLogin.model$RC_73fae6920f82113320dccc89ef073c01", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_73fae6920f82113320dccc89ef073c01Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AccordionIconType", "accordionIconTypeAttr", "AccordionIconType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord());
}, true, OutSystemsUIModel.EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_73fae6920f82113320dccc89ef073c01(new RC_73fae6920f82113320dccc89ef073c01.RecordClass({
accordionIconTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_73fae6920f82113320dccc89ef073c01 = RC_73fae6920f82113320dccc89ef073c01Inner;

RC_73fae6920f82113320dccc89ef073c01Inner._isAnonymousRecord = true;
RC_73fae6920f82113320dccc89ef073c01Inner.UniqueId = "73fae692-0f82-1133-20dc-cc89ef073c01";
var RC_73fae6920f82113320dccc89ef073c01 = RC_73fae6920f82113320dccc89ef073c01Inner;
RC_73fae6920f82113320dccc89ef073c01.init();
}
});

define("SuperappLogin.model$RL_452bae0381b3504e486b471d2123e658", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_73fae6920f82113320dccc89ef073c01"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_452bae0381b3504e486b471d2123e658 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_73fae6920f82113320dccc89ef073c01;
}

}

SuperappLoginModel.RL_452bae0381b3504e486b471d2123e658 = RL_452bae0381b3504e486b471d2123e658;

});

define("SuperappLogin.model$RL_4645896d20bae069726fdb473c154d2d", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_2ac88c51f2d9ed908454e6a06ffe188e"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_4645896d20bae069726fdb473c154d2d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_2ac88c51f2d9ed908454e6a06ffe188e;
}

}

SuperappLoginModel.RL_4645896d20bae069726fdb473c154d2d = RL_4645896d20bae069726fdb473c154d2d;

});

define("SuperappLogin.model$RL_47595c6744be14d2bd677fd05324180f", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_1ba3db8c7175cd095b4f1a36c3a1e53d"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_47595c6744be14d2bd677fd05324180f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_1ba3db8c7175cd095b4f1a36c3a1e53d;
}

}

SuperappLoginModel.RL_47595c6744be14d2bd677fd05324180f = RL_47595c6744be14d2bd677fd05324180f;

});

define("SuperappLogin.model$RL_478659cf4d50eb426ae425e9399ed35f", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_478659cf4d50eb426ae425e9399ed35f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_b7d405ca4407e572da091e54d07e3bd1Structure;
}

}

SuperappLoginModel.RL_478659cf4d50eb426ae425e9399ed35f = RL_478659cf4d50eb426ae425e9399ed35f;

});

define("SuperappLogin.model$RC_f3c2b7b3f72abb115f72c934f4368624", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_14b00646f6cd842655571448758d0a23Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_f3c2b7b3f72abb115f72c934f4368624Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("FlatpickrConfigs", "flatpickrConfigsAttr", "FlatpickrConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_14b00646f6cd842655571448758d0a23Structure());
}, true, OutSystemsUIModel.ST_14b00646f6cd842655571448758d0a23Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_f3c2b7b3f72abb115f72c934f4368624(new RC_f3c2b7b3f72abb115f72c934f4368624.RecordClass({
flatpickrConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_f3c2b7b3f72abb115f72c934f4368624 = RC_f3c2b7b3f72abb115f72c934f4368624Inner;

RC_f3c2b7b3f72abb115f72c934f4368624Inner._isAnonymousRecord = true;
RC_f3c2b7b3f72abb115f72c934f4368624Inner.UniqueId = "f3c2b7b3-f72a-bb11-5f72-c934f4368624";
var RC_f3c2b7b3f72abb115f72c934f4368624 = RC_f3c2b7b3f72abb115f72c934f4368624Inner;
RC_f3c2b7b3f72abb115f72c934f4368624.init();
}
});

define("SuperappLogin.model$RL_47cfc8da94abd6a57dcb42f40bcbe06e", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_f3c2b7b3f72abb115f72c934f4368624"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_47cfc8da94abd6a57dcb42f40bcbe06e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_f3c2b7b3f72abb115f72c934f4368624;
}

}

SuperappLoginModel.RL_47cfc8da94abd6a57dcb42f40bcbe06e = RL_47cfc8da94abd6a57dcb42f40bcbe06e;

});

define("SuperappLogin.model$RC_4835a3b0a2d4ab28e154f8a8831a00ef", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_5c08eaa15b890a2d617cabe547c34f0bStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_4835a3b0a2d4ab28e154f8a8831a00efInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("MonthYear", "monthYearAttr", "MonthYear", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure());
}, true, OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4835a3b0a2d4ab28e154f8a8831a00ef(new RC_4835a3b0a2d4ab28e154f8a8831a00ef.RecordClass({
monthYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_4835a3b0a2d4ab28e154f8a8831a00ef = RC_4835a3b0a2d4ab28e154f8a8831a00efInner;

RC_4835a3b0a2d4ab28e154f8a8831a00efInner._isAnonymousRecord = true;
RC_4835a3b0a2d4ab28e154f8a8831a00efInner.UniqueId = "4835a3b0-a2d4-ab28-e154-f8a8831a00ef";
var RC_4835a3b0a2d4ab28e154f8a8831a00ef = RC_4835a3b0a2d4ab28e154f8a8831a00efInner;
RC_4835a3b0a2d4ab28e154f8a8831a00ef.init();
}
});

define("SuperappLogin.model$RL_4aa1509142da7c0b9e4be414c8f7c6f5", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_f43f179caddf7f7b68b18272d67285d6EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_4aa1509142da7c0b9e4be414c8f7c6f5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_f43f179caddf7f7b68b18272d67285d6EntityRecord;
}

}

SuperappLoginModel.RL_4aa1509142da7c0b9e4be414c8f7c6f5 = RL_4aa1509142da7c0b9e4be414c8f7c6f5;

});

define("SuperappLogin.model$RL_4ac7560fd222f165e8fbfd92d25d984e", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_b4e36c9529d7446e086560192df48d7cEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_4ac7560fd222f165e8fbfd92d25d984e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_b4e36c9529d7446e086560192df48d7cEntityRecord;
}

}

SuperappLoginModel.RL_4ac7560fd222f165e8fbfd92d25d984e = RL_4ac7560fd222f165e8fbfd92d25d984e;

});

define("SuperappLogin.model$RL_4d556c695c13b2c308f888cfb68cea19", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_4d556c695c13b2c308f888cfb68cea19 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure;
}

}

SuperappLoginModel.RL_4d556c695c13b2c308f888cfb68cea19 = RL_4d556c695c13b2c308f888cfb68cea19;

});

define("SuperappLogin.model$RC_4d77cfdd567b208680377834fc8205a2", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$PasswordComplexityPolicyRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_4d77cfdd567b208680377834fc8205a2Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyAttr", "PasswordComplexityPolicy", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.PasswordComplexityPolicyRec());
}, true, OS.SystemStructures.PasswordComplexityPolicyRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4d77cfdd567b208680377834fc8205a2(new RC_4d77cfdd567b208680377834fc8205a2.RecordClass({
passwordComplexityPolicyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_4d77cfdd567b208680377834fc8205a2 = RC_4d77cfdd567b208680377834fc8205a2Inner;

RC_4d77cfdd567b208680377834fc8205a2Inner._isAnonymousRecord = true;
RC_4d77cfdd567b208680377834fc8205a2Inner.UniqueId = "4d77cfdd-567b-2086-8037-7834fc8205a2";
var RC_4d77cfdd567b208680377834fc8205a2 = RC_4d77cfdd567b208680377834fc8205a2Inner;
RC_4d77cfdd567b208680377834fc8205a2.init();
}
});

define("SuperappLogin.model$RL_4e4931d865c8789e9e6ef1d8540ae228", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$StartResetPasswordResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_4e4931d865c8789e9e6ef1d8540ae228 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.StartResetPasswordResultRec;
}

}

SuperappLoginModel.RL_4e4931d865c8789e9e6ef1d8540ae228 = RL_4e4931d865c8789e9e6ef1d8540ae228;

});

define("SuperappLogin.model$RL_4e7296c1aceb3bd3dd9793888e254d07", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_4e7296c1aceb3bd3dd9793888e254d07 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord;
}

}

SuperappLoginModel.RL_4e7296c1aceb3bd3dd9793888e254d07 = RL_4e7296c1aceb3bd3dd9793888e254d07;

});

define("SuperappLogin.model$RL_4f6dde27a1d6ecd82e9d6a4d041d32f3", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_261685da2c799bcc3b4873485e008694"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_4f6dde27a1d6ecd82e9d6a4d041d32f3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_261685da2c799bcc3b4873485e008694;
}

}

SuperappLoginModel.RL_4f6dde27a1d6ecd82e9d6a4d041d32f3 = RL_4f6dde27a1d6ecd82e9d6a4d041d32f3;

});

define("SuperappLogin.model$RC_4fc16da695108ad1b034b7256ffa868d", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_7167810326c75456a7ce120ed2dbd76bStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_4fc16da695108ad1b034b7256ffa868dInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("RangeSliderOptionalConfigs", "rangeSliderOptionalConfigsAttr", "RangeSliderOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_7167810326c75456a7ce120ed2dbd76bStructure());
}, true, OutSystemsUIModel.ST_7167810326c75456a7ce120ed2dbd76bStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_4fc16da695108ad1b034b7256ffa868d(new RC_4fc16da695108ad1b034b7256ffa868d.RecordClass({
rangeSliderOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_4fc16da695108ad1b034b7256ffa868d = RC_4fc16da695108ad1b034b7256ffa868dInner;

RC_4fc16da695108ad1b034b7256ffa868dInner._isAnonymousRecord = true;
RC_4fc16da695108ad1b034b7256ffa868dInner.UniqueId = "4fc16da6-9510-8ad1-b034-b7256ffa868d";
var RC_4fc16da695108ad1b034b7256ffa868d = RC_4fc16da695108ad1b034b7256ffa868dInner;
RC_4fc16da695108ad1b034b7256ffa868d.init();
}
});

define("SuperappLogin.model$RL_4feb2fb00f9cd7e5ee8abc58513e6f4d", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_373fec8a2329a8b1ecd55cf717893131"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_4feb2fb00f9cd7e5ee8abc58513e6f4d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_373fec8a2329a8b1ecd55cf717893131;
}

}

SuperappLoginModel.RL_4feb2fb00f9cd7e5ee8abc58513e6f4d = RL_4feb2fb00f9cd7e5ee8abc58513e6f4d;

});

define("SuperappLogin.model$RL_505eb79092b88d8c5112cf252cbfabf9", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_1310596a4ac4ae2b0319b38dd9472639"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_505eb79092b88d8c5112cf252cbfabf9 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_1310596a4ac4ae2b0319b38dd9472639;
}

}

SuperappLoginModel.RL_505eb79092b88d8c5112cf252cbfabf9 = RL_505eb79092b88d8c5112cf252cbfabf9;

});

define("SuperappLogin.model$RL_50d3e0774fce43a1ce1cf3a9009855f8", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_50d3e0774fce43a1ce1cf3a9009855f8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure;
}

}

SuperappLoginModel.RL_50d3e0774fce43a1ce1cf3a9009855f8 = RL_50d3e0774fce43a1ce1cf3a9009855f8;

});

define("SuperappLogin.model$RC_51b1c15949308af5f9b2dba7043d5ae6", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_b4e36c9529d7446e086560192df48d7cEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_51b1c15949308af5f9b2dba7043d5ae6Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DatePickerTimeFormat", "datePickerTimeFormatAttr", "DatePickerTimeFormat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_b4e36c9529d7446e086560192df48d7cEntityRecord());
}, true, OutSystemsUIModel.EN_b4e36c9529d7446e086560192df48d7cEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_51b1c15949308af5f9b2dba7043d5ae6(new RC_51b1c15949308af5f9b2dba7043d5ae6.RecordClass({
datePickerTimeFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_51b1c15949308af5f9b2dba7043d5ae6 = RC_51b1c15949308af5f9b2dba7043d5ae6Inner;

RC_51b1c15949308af5f9b2dba7043d5ae6Inner._isAnonymousRecord = true;
RC_51b1c15949308af5f9b2dba7043d5ae6Inner.UniqueId = "51b1c159-4930-8af5-f9b2-dba7043d5ae6";
var RC_51b1c15949308af5f9b2dba7043d5ae6 = RC_51b1c15949308af5f9b2dba7043d5ae6Inner;
RC_51b1c15949308af5f9b2dba7043d5ae6.init();
}
});

define("SuperappLogin.model$RC_53d491417faf149f9fb8a0dda9c12d06", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$ChangePasswordResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_53d491417faf149f9fb8a0dda9c12d06Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ChangePasswordResult", "changePasswordResultAttr", "ChangePasswordResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.ChangePasswordResultRec());
}, true, OS.SystemStructures.ChangePasswordResultRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_53d491417faf149f9fb8a0dda9c12d06(new RC_53d491417faf149f9fb8a0dda9c12d06.RecordClass({
changePasswordResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_53d491417faf149f9fb8a0dda9c12d06 = RC_53d491417faf149f9fb8a0dda9c12d06Inner;

RC_53d491417faf149f9fb8a0dda9c12d06Inner._isAnonymousRecord = true;
RC_53d491417faf149f9fb8a0dda9c12d06Inner.UniqueId = "53d49141-7faf-149f-9fb8-a0dda9c12d06";
var RC_53d491417faf149f9fb8a0dda9c12d06 = RC_53d491417faf149f9fb8a0dda9c12d06Inner;
RC_53d491417faf149f9fb8a0dda9c12d06.init();
}
});

define("SuperappLogin.model$RL_549974f3b4457a3de60891ae7d23d2bc", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_d11562be18a7e40ca777aa336c946163EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_549974f3b4457a3de60891ae7d23d2bc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_d11562be18a7e40ca777aa336c946163EntityRecord;
}

}

SuperappLoginModel.RL_549974f3b4457a3de60891ae7d23d2bc = RL_549974f3b4457a3de60891ae7d23d2bc;

});

define("SuperappLogin.model$RL_54fab648630d41e343fad35c1143481d", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$UserInfoRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_54fab648630d41e343fad35c1143481d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.UserInfoRec;
}

}

SuperappLoginModel.RL_54fab648630d41e343fad35c1143481d = RL_54fab648630d41e343fad35c1143481d;

});

define("SuperappLogin.model$RC_56805fdef6332e01f13c0f9217357dbc", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_56805fdef6332e01f13c0f9217357dbcInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DropdownItem", "dropdownItemAttr", "DropdownItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure());
}, true, OutSystemsUIModel.ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_56805fdef6332e01f13c0f9217357dbc(new RC_56805fdef6332e01f13c0f9217357dbc.RecordClass({
dropdownItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_56805fdef6332e01f13c0f9217357dbc = RC_56805fdef6332e01f13c0f9217357dbcInner;

RC_56805fdef6332e01f13c0f9217357dbcInner._isAnonymousRecord = true;
RC_56805fdef6332e01f13c0f9217357dbcInner.UniqueId = "56805fde-f633-2e01-f13c-0f9217357dbc";
var RC_56805fdef6332e01f13c0f9217357dbc = RC_56805fdef6332e01f13c0f9217357dbcInner;
RC_56805fdef6332e01f13c0f9217357dbc.init();
}
});

define("SuperappLogin.model$RC_5f28219a5e30fb90023fcbc295513e7c", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_5d1279724e719322292e34ef3c5500a0EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_5f28219a5e30fb90023fcbc295513e7cInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord());
}, true, OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_5f28219a5e30fb90023fcbc295513e7c(new RC_5f28219a5e30fb90023fcbc295513e7c.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_5f28219a5e30fb90023fcbc295513e7c = RC_5f28219a5e30fb90023fcbc295513e7cInner;

RC_5f28219a5e30fb90023fcbc295513e7cInner._isAnonymousRecord = true;
RC_5f28219a5e30fb90023fcbc295513e7cInner.UniqueId = "5f28219a-5e30-fb90-023f-cbc295513e7c";
var RC_5f28219a5e30fb90023fcbc295513e7c = RC_5f28219a5e30fb90023fcbc295513e7cInner;
RC_5f28219a5e30fb90023fcbc295513e7c.init();
}
});

define("SuperappLogin.model$RL_5ba41fd2555db2daaba8da89df34a9b8", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_5f28219a5e30fb90023fcbc295513e7c"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_5ba41fd2555db2daaba8da89df34a9b8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_5f28219a5e30fb90023fcbc295513e7c;
}

}

SuperappLoginModel.RL_5ba41fd2555db2daaba8da89df34a9b8 = RL_5ba41fd2555db2daaba8da89df34a9b8;

});

define("SuperappLogin.model$RC_5d4c0a98b9773e489e7e27bfe5360793", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$UpdateUserFailureReasonRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_5d4c0a98b9773e489e7e27bfe5360793Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UpdateUserFailureReason", "updateUserFailureReasonAttr", "UpdateUserFailureReason", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UpdateUserFailureReasonRec());
}, true, OS.SystemStructures.UpdateUserFailureReasonRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_5d4c0a98b9773e489e7e27bfe5360793(new RC_5d4c0a98b9773e489e7e27bfe5360793.RecordClass({
updateUserFailureReasonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_5d4c0a98b9773e489e7e27bfe5360793 = RC_5d4c0a98b9773e489e7e27bfe5360793Inner;

RC_5d4c0a98b9773e489e7e27bfe5360793Inner._isAnonymousRecord = true;
RC_5d4c0a98b9773e489e7e27bfe5360793Inner.UniqueId = "5d4c0a98-b977-3e48-9e7e-27bfe5360793";
var RC_5d4c0a98b9773e489e7e27bfe5360793 = RC_5d4c0a98b9773e489e7e27bfe5360793Inner;
RC_5d4c0a98b9773e489e7e27bfe5360793.init();
}
});

define("SuperappLogin.model$RL_5f1eb42ec5e25a70109aeb71587a7f0b", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_b96c67f06fdfae580256b7081d85460dStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_5f1eb42ec5e25a70109aeb71587a7f0b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_b96c67f06fdfae580256b7081d85460dStructure;
}

}

SuperappLoginModel.RL_5f1eb42ec5e25a70109aeb71587a7f0b = RL_5f1eb42ec5e25a70109aeb71587a7f0b;

});

define("SuperappLogin.model$RC_646e6c02297b69c2ac8936bd87cff545", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_eb161a8909408fbd30eac1833398f018Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_646e6c02297b69c2ac8936bd87cff545Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ProgressCircleOptionalConfigs", "progressCircleOptionalConfigsAttr", "ProgressCircleOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_eb161a8909408fbd30eac1833398f018Structure());
}, true, OutSystemsUIModel.ST_eb161a8909408fbd30eac1833398f018Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_646e6c02297b69c2ac8936bd87cff545(new RC_646e6c02297b69c2ac8936bd87cff545.RecordClass({
progressCircleOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_646e6c02297b69c2ac8936bd87cff545 = RC_646e6c02297b69c2ac8936bd87cff545Inner;

RC_646e6c02297b69c2ac8936bd87cff545Inner._isAnonymousRecord = true;
RC_646e6c02297b69c2ac8936bd87cff545Inner.UniqueId = "646e6c02-297b-69c2-ac89-36bd87cff545";
var RC_646e6c02297b69c2ac8936bd87cff545 = RC_646e6c02297b69c2ac8936bd87cff545Inner;
RC_646e6c02297b69c2ac8936bd87cff545.init();
}
});

define("SuperappLogin.model$RC_ab84a98a3ac9de80e9278e5b21681a23", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_52e55d60c515b6016f81404afb220594EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_ab84a98a3ac9de80e9278e5b21681a23Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Trigger", "triggerAttr", "Trigger", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord());
}, true, OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ab84a98a3ac9de80e9278e5b21681a23(new RC_ab84a98a3ac9de80e9278e5b21681a23.RecordClass({
triggerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_ab84a98a3ac9de80e9278e5b21681a23 = RC_ab84a98a3ac9de80e9278e5b21681a23Inner;

RC_ab84a98a3ac9de80e9278e5b21681a23Inner._isAnonymousRecord = true;
RC_ab84a98a3ac9de80e9278e5b21681a23Inner.UniqueId = "ab84a98a-3ac9-de80-e927-8e5b21681a23";
var RC_ab84a98a3ac9de80e9278e5b21681a23 = RC_ab84a98a3ac9de80e9278e5b21681a23Inner;
RC_ab84a98a3ac9de80e9278e5b21681a23.init();
}
});

define("SuperappLogin.model$RL_6534465d8eaff1ed770420b9742876dc", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_ab84a98a3ac9de80e9278e5b21681a23"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_6534465d8eaff1ed770420b9742876dc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_ab84a98a3ac9de80e9278e5b21681a23;
}

}

SuperappLoginModel.RL_6534465d8eaff1ed770420b9742876dc = RL_6534465d8eaff1ed770420b9742876dc;

});

define("SuperappLogin.model$RL_65b4601c7246ad02da4e6c18fe619d03", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_65b4601c7246ad02da4e6c18fe619d03 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord;
}

}

SuperappLoginModel.RL_65b4601c7246ad02da4e6c18fe619d03 = RL_65b4601c7246ad02da4e6c18fe619d03;

});

define("SuperappLogin.model$RL_662f9a01faab4debe4196401f9ed4c71", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_310dae2b4d3a1f1ded7570a6ee74f16e"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_662f9a01faab4debe4196401f9ed4c71 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_310dae2b4d3a1f1ded7570a6ee74f16e;
}

}

SuperappLoginModel.RL_662f9a01faab4debe4196401f9ed4c71 = RL_662f9a01faab4debe4196401f9ed4c71;

});

define("SuperappLogin.model$RL_67211e5ef9090bf1006a3e1da6767024", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_67211e5ef9090bf1006a3e1da6767024 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord;
}

}

SuperappLoginModel.RL_67211e5ef9090bf1006a3e1da6767024 = RL_67211e5ef9090bf1006a3e1da6767024;

});

define("SuperappLogin.model$RC_673cc0a63dbc3f5836f7732ba0712544", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_ac6f62956e278d5390a5f27c607338d0EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_673cc0a63dbc3f5836f7732ba0712544Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DatePickerLanguage", "datePickerLanguageAttr", "DatePickerLanguage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_ac6f62956e278d5390a5f27c607338d0EntityRecord());
}, true, OutSystemsUIModel.EN_ac6f62956e278d5390a5f27c607338d0EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_673cc0a63dbc3f5836f7732ba0712544(new RC_673cc0a63dbc3f5836f7732ba0712544.RecordClass({
datePickerLanguageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_673cc0a63dbc3f5836f7732ba0712544 = RC_673cc0a63dbc3f5836f7732ba0712544Inner;

RC_673cc0a63dbc3f5836f7732ba0712544Inner._isAnonymousRecord = true;
RC_673cc0a63dbc3f5836f7732ba0712544Inner.UniqueId = "673cc0a6-3dbc-3f58-36f7-732ba0712544";
var RC_673cc0a63dbc3f5836f7732ba0712544 = RC_673cc0a63dbc3f5836f7732ba0712544Inner;
RC_673cc0a63dbc3f5836f7732ba0712544.init();
}
});

define("SuperappLogin.model$RL_6753b1849ff4bc19e62c553317f17751", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_0a89eeb60fa1f44b6316ca69b462007b"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_6753b1849ff4bc19e62c553317f17751 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_0a89eeb60fa1f44b6316ca69b462007b;
}

}

SuperappLoginModel.RL_6753b1849ff4bc19e62c553317f17751 = RL_6753b1849ff4bc19e62c553317f17751;

});

define("SuperappLogin.model$RL_68be9dd68c0e161ac2c65c1092c999e6", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$FinishResetPasswordResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_68be9dd68c0e161ac2c65c1092c999e6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.FinishResetPasswordResultRec;
}

}

SuperappLoginModel.RL_68be9dd68c0e161ac2c65c1092c999e6 = RL_68be9dd68c0e161ac2c65c1092c999e6;

});

define("SuperappLogin.model$RC_abb6a3eba8583e4ab0625de8f38fb719", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_0262e6910ebecc922f633b08db78d688Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_abb6a3eba8583e4ab0625de8f38fb719Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DeviceConfiguration", "deviceConfigurationAttr", "DeviceConfiguration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_0262e6910ebecc922f633b08db78d688Structure());
}, true, OutSystemsUIModel.ST_0262e6910ebecc922f633b08db78d688Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_abb6a3eba8583e4ab0625de8f38fb719(new RC_abb6a3eba8583e4ab0625de8f38fb719.RecordClass({
deviceConfigurationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_abb6a3eba8583e4ab0625de8f38fb719 = RC_abb6a3eba8583e4ab0625de8f38fb719Inner;

RC_abb6a3eba8583e4ab0625de8f38fb719Inner._isAnonymousRecord = true;
RC_abb6a3eba8583e4ab0625de8f38fb719Inner.UniqueId = "abb6a3eb-a858-3e4a-b062-5de8f38fb719";
var RC_abb6a3eba8583e4ab0625de8f38fb719 = RC_abb6a3eba8583e4ab0625de8f38fb719Inner;
RC_abb6a3eba8583e4ab0625de8f38fb719.init();
}
});

define("SuperappLogin.model$RL_703668b187ab39de3436f6485526e12a", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_abb6a3eba8583e4ab0625de8f38fb719"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_703668b187ab39de3436f6485526e12a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_abb6a3eba8583e4ab0625de8f38fb719;
}

}

SuperappLoginModel.RL_703668b187ab39de3436f6485526e12a = RL_703668b187ab39de3436f6485526e12a;

});

define("SuperappLogin.model$RL_718bfa5485b42466fae8f4ad1fc16180", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_718bfa5485b42466fae8f4ad1fc16180 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord;
}

}

SuperappLoginModel.RL_718bfa5485b42466fae8f4ad1fc16180 = RL_718bfa5485b42466fae8f4ad1fc16180;

});

define("SuperappLogin.model$RC_967cb65710fd1a346ebf0b0d8dbea56b", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_92679525739afa328c09890d25f5ac45EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_967cb65710fd1a346ebf0b0d8dbea56bInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("StackedCardsPosition", "stackedCardsPositionAttr", "StackedCardsPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_92679525739afa328c09890d25f5ac45EntityRecord());
}, true, OutSystemsUIModel.EN_92679525739afa328c09890d25f5ac45EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_967cb65710fd1a346ebf0b0d8dbea56b(new RC_967cb65710fd1a346ebf0b0d8dbea56b.RecordClass({
stackedCardsPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_967cb65710fd1a346ebf0b0d8dbea56b = RC_967cb65710fd1a346ebf0b0d8dbea56bInner;

RC_967cb65710fd1a346ebf0b0d8dbea56bInner._isAnonymousRecord = true;
RC_967cb65710fd1a346ebf0b0d8dbea56bInner.UniqueId = "967cb657-10fd-1a34-6ebf-0b0d8dbea56b";
var RC_967cb65710fd1a346ebf0b0d8dbea56b = RC_967cb65710fd1a346ebf0b0d8dbea56bInner;
RC_967cb65710fd1a346ebf0b0d8dbea56b.init();
}
});

define("SuperappLogin.model$RL_73c285d01c2c56407f6a3b6c7863f99b", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_967cb65710fd1a346ebf0b0d8dbea56b"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_73c285d01c2c56407f6a3b6c7863f99b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_967cb65710fd1a346ebf0b0d8dbea56b;
}

}

SuperappLoginModel.RL_73c285d01c2c56407f6a3b6c7863f99b = RL_73c285d01c2c56407f6a3b6c7863f99b;

});

define("SuperappLogin.model$RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_71bc196daedd9ac0648bfd56a713859dStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("MonthOrderYear", "monthOrderYearAttr", "MonthOrderYear", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_71bc196daedd9ac0648bfd56a713859dStructure());
}, true, OutSystemsUIModel.ST_71bc196daedd9ac0648bfd56a713859dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1(new RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1.RecordClass({
monthOrderYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1 = RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner;

RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner._isAnonymousRecord = true;
RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner.UniqueId = "e14f3c77-ad4f-7c2d-7fca-d14fc0ab9bf1";
var RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1 = RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner;
RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1.init();
}
});

define("SuperappLogin.model$RL_7682dd80718b550d6c5a921d5990d04e", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_7682dd80718b550d6c5a921d5990d04e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1;
}

}

SuperappLoginModel.RL_7682dd80718b550d6c5a921d5990d04e = RL_7682dd80718b550d6c5a921d5990d04e;

});

define("SuperappLogin.model$RL_78373738575ac72ef55dea9c617c7d1f", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_50814454e481dd1773c2250bc248da5eEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_78373738575ac72ef55dea9c617c7d1f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_50814454e481dd1773c2250bc248da5eEntityRecord;
}

}

SuperappLoginModel.RL_78373738575ac72ef55dea9c617c7d1f = RL_78373738575ac72ef55dea9c617c7d1f;

});

define("SuperappLogin.model$RL_7afe2e3802b1138fe7c019f238334de4", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_1583be5d90a94b6a73170ffa868eecc5"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_7afe2e3802b1138fe7c019f238334de4 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_1583be5d90a94b6a73170ffa868eecc5;
}

}

SuperappLoginModel.RL_7afe2e3802b1138fe7c019f238334de4 = RL_7afe2e3802b1138fe7c019f238334de4;

});

define("SuperappLogin.model$RL_7c155d6f9991d43524221e40a2ecb02b", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_59aacee1cb91627a0f497366b24e4500EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_7c155d6f9991d43524221e40a2ecb02b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_59aacee1cb91627a0f497366b24e4500EntityRecord;
}

}

SuperappLoginModel.RL_7c155d6f9991d43524221e40a2ecb02b = RL_7c155d6f9991d43524221e40a2ecb02b;

});

define("SuperappLogin.model$RC_e5ad8f04c38047441643c6868992c277", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_09173c1b0f41f719b9efd6430c2e737dStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_e5ad8f04c38047441643c6868992c277Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("NotificationOptionalConfigs", "notificationOptionalConfigsAttr", "NotificationOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_09173c1b0f41f719b9efd6430c2e737dStructure());
}, true, OutSystemsUIModel.ST_09173c1b0f41f719b9efd6430c2e737dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e5ad8f04c38047441643c6868992c277(new RC_e5ad8f04c38047441643c6868992c277.RecordClass({
notificationOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_e5ad8f04c38047441643c6868992c277 = RC_e5ad8f04c38047441643c6868992c277Inner;

RC_e5ad8f04c38047441643c6868992c277Inner._isAnonymousRecord = true;
RC_e5ad8f04c38047441643c6868992c277Inner.UniqueId = "e5ad8f04-c380-4744-1643-c6868992c277";
var RC_e5ad8f04c38047441643c6868992c277 = RC_e5ad8f04c38047441643c6868992c277Inner;
RC_e5ad8f04c38047441643c6868992c277.init();
}
});

define("SuperappLogin.model$RL_7d09eb138f7abf181049d020e739a58f", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_e5ad8f04c38047441643c6868992c277"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_7d09eb138f7abf181049d020e739a58f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_e5ad8f04c38047441643c6868992c277;
}

}

SuperappLoginModel.RL_7d09eb138f7abf181049d020e739a58f = RL_7d09eb138f7abf181049d020e739a58f;

});

define("SuperappLogin.model$RL_806e82a94733d0af9e43960265151f80", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_806e82a94733d0af9e43960265151f80 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure;
}

}

SuperappLoginModel.RL_806e82a94733d0af9e43960265151f80 = RL_806e82a94733d0af9e43960265151f80;

});

define("SuperappLogin.model$RL_80cc885cccb8696830df8ec337645f92", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_4fc16da695108ad1b034b7256ffa868d"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_80cc885cccb8696830df8ec337645f92 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_4fc16da695108ad1b034b7256ffa868d;
}

}

SuperappLoginModel.RL_80cc885cccb8696830df8ec337645f92 = RL_80cc885cccb8696830df8ec337645f92;

});

define("SuperappLogin.model$RC_ced013358a82a813f1d9a5108f17ce79", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$ENUserEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_ced013358a82a813f1d9a5108f17ce79Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new System_Model.ENUserEntityRecord());
}, true, System_Model.ENUserEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ced013358a82a813f1d9a5108f17ce79(new RC_ced013358a82a813f1d9a5108f17ce79.RecordClass({
userAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_ced013358a82a813f1d9a5108f17ce79 = RC_ced013358a82a813f1d9a5108f17ce79Inner;

RC_ced013358a82a813f1d9a5108f17ce79Inner._isAnonymousRecord = true;
RC_ced013358a82a813f1d9a5108f17ce79Inner.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
var RC_ced013358a82a813f1d9a5108f17ce79 = RC_ced013358a82a813f1d9a5108f17ce79Inner;
RC_ced013358a82a813f1d9a5108f17ce79.init();
}
});

define("SuperappLogin.model$RL_8430333e95ceffc00def96d8abb01f75", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_ced013358a82a813f1d9a5108f17ce79"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_8430333e95ceffc00def96d8abb01f75 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_ced013358a82a813f1d9a5108f17ce79;
}

}

SuperappLoginModel.RL_8430333e95ceffc00def96d8abb01f75 = RL_8430333e95ceffc00def96d8abb01f75;

});

define("SuperappLogin.model$RL_843bbe6b5508d5a1ce4c6547db1f1385", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_34444d0742578c128ebc8b2594439346Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_843bbe6b5508d5a1ce4c6547db1f1385 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_34444d0742578c128ebc8b2594439346Structure;
}

}

SuperappLoginModel.RL_843bbe6b5508d5a1ce4c6547db1f1385 = RL_843bbe6b5508d5a1ce4c6547db1f1385;

});

define("SuperappLogin.model$RC_87351e3b0fa2ca59cf6c6749c6405006", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_87351e3b0fa2ca59cf6c6749c6405006Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord());
}, true, OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_87351e3b0fa2ca59cf6c6749c6405006(new RC_87351e3b0fa2ca59cf6c6749c6405006.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_87351e3b0fa2ca59cf6c6749c6405006 = RC_87351e3b0fa2ca59cf6c6749c6405006Inner;

RC_87351e3b0fa2ca59cf6c6749c6405006Inner._isAnonymousRecord = true;
RC_87351e3b0fa2ca59cf6c6749c6405006Inner.UniqueId = "87351e3b-0fa2-ca59-cf6c-6749c6405006";
var RC_87351e3b0fa2ca59cf6c6749c6405006 = RC_87351e3b0fa2ca59cf6c6749c6405006Inner;
RC_87351e3b0fa2ca59cf6c6749c6405006.init();
}
});

define("SuperappLogin.model$RL_8add23b891a53c086b7017fd4cdd211b", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_8add23b891a53c086b7017fd4cdd211b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord;
}

}

SuperappLoginModel.RL_8add23b891a53c086b7017fd4cdd211b = RL_8add23b891a53c086b7017fd4cdd211b;

});

define("SuperappLogin.model$RL_8b34cec2d3a4e3170e329009c7e2bef8", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$UpdateUserFailureReasonRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_8b34cec2d3a4e3170e329009c7e2bef8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.UpdateUserFailureReasonRec;
}

}

SuperappLoginModel.RL_8b34cec2d3a4e3170e329009c7e2bef8 = RL_8b34cec2d3a4e3170e329009c7e2bef8;

});

define("SuperappLogin.model$RC_8f8c9b77bcc0996564febb7d38ea930a", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$StartResetPasswordResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_8f8c9b77bcc0996564febb7d38ea930aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("StartResetPasswordResult", "startResetPasswordResultAttr", "StartResetPasswordResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.StartResetPasswordResultRec());
}, true, OS.SystemStructures.StartResetPasswordResultRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_8f8c9b77bcc0996564febb7d38ea930a(new RC_8f8c9b77bcc0996564febb7d38ea930a.RecordClass({
startResetPasswordResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_8f8c9b77bcc0996564febb7d38ea930a = RC_8f8c9b77bcc0996564febb7d38ea930aInner;

RC_8f8c9b77bcc0996564febb7d38ea930aInner._isAnonymousRecord = true;
RC_8f8c9b77bcc0996564febb7d38ea930aInner.UniqueId = "8f8c9b77-bcc0-9965-64fe-bb7d38ea930a";
var RC_8f8c9b77bcc0996564febb7d38ea930a = RC_8f8c9b77bcc0996564febb7d38ea930aInner;
RC_8f8c9b77bcc0996564febb7d38ea930a.init();
}
});

define("SuperappLogin.model$RL_8c6f3d2b086b4a75242a7e7c084f1692", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_8f8c9b77bcc0996564febb7d38ea930a"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_8c6f3d2b086b4a75242a7e7c084f1692 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_8f8c9b77bcc0996564febb7d38ea930a;
}

}

SuperappLoginModel.RL_8c6f3d2b086b4a75242a7e7c084f1692 = RL_8c6f3d2b086b4a75242a7e7c084f1692;

});

define("SuperappLogin.model$RL_8e0fc5c9e799d27970a97b6552ea83ed", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_1ea63146d7f1d969afc206832e751192"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_8e0fc5c9e799d27970a97b6552ea83ed extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_1ea63146d7f1d969afc206832e751192;
}

}

SuperappLoginModel.RL_8e0fc5c9e799d27970a97b6552ea83ed = RL_8e0fc5c9e799d27970a97b6552ea83ed;

});

define("SuperappLogin.model$RL_8f663be7596d4724f6146bc0b1d8cb69", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_5c08eaa15b890a2d617cabe547c34f0bStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_8f663be7596d4724f6146bc0b1d8cb69 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure;
}

}

SuperappLoginModel.RL_8f663be7596d4724f6146bc0b1d8cb69 = RL_8f663be7596d4724f6146bc0b1d8cb69;

});

define("SuperappLogin.model$RL_9155b46cc5c187efb7cc10c67b592005", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_4028c83435ff8f3fa19c27e5a3252dd5"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_9155b46cc5c187efb7cc10c67b592005 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_4028c83435ff8f3fa19c27e5a3252dd5;
}

}

SuperappLoginModel.RL_9155b46cc5c187efb7cc10c67b592005 = RL_9155b46cc5c187efb7cc10c67b592005;

});

define("SuperappLogin.model$RL_919d8bc896529858c8cc8f0f3e5cb019", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_4d77cfdd567b208680377834fc8205a2"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_919d8bc896529858c8cc8f0f3e5cb019 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_4d77cfdd567b208680377834fc8205a2;
}

}

SuperappLoginModel.RL_919d8bc896529858c8cc8f0f3e5cb019 = RL_919d8bc896529858c8cc8f0f3e5cb019;

});

define("SuperappLogin.model$RL_9797ec0d56ee4ca8b93bd458944f1a08", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_646e6c02297b69c2ac8936bd87cff545"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_9797ec0d56ee4ca8b93bd458944f1a08 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_646e6c02297b69c2ac8936bd87cff545;
}

}

SuperappLoginModel.RL_9797ec0d56ee4ca8b93bd458944f1a08 = RL_9797ec0d56ee4ca8b93bd458944f1a08;

});

define("SuperappLogin.model$RC_ab72f035aa34ddb5ec313dc02adb1f18", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_ab72f035aa34ddb5ec313dc02adb1f18Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AccordionIconPosition", "accordionIconPositionAttr", "AccordionIconPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord());
}, true, OutSystemsUIModel.EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_ab72f035aa34ddb5ec313dc02adb1f18(new RC_ab72f035aa34ddb5ec313dc02adb1f18.RecordClass({
accordionIconPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_ab72f035aa34ddb5ec313dc02adb1f18 = RC_ab72f035aa34ddb5ec313dc02adb1f18Inner;

RC_ab72f035aa34ddb5ec313dc02adb1f18Inner._isAnonymousRecord = true;
RC_ab72f035aa34ddb5ec313dc02adb1f18Inner.UniqueId = "ab72f035-aa34-ddb5-ec31-3dc02adb1f18";
var RC_ab72f035aa34ddb5ec313dc02adb1f18 = RC_ab72f035aa34ddb5ec313dc02adb1f18Inner;
RC_ab72f035aa34ddb5ec313dc02adb1f18.init();
}
});

define("SuperappLogin.model$RL_996fbee06ca423494c6785889a54264f", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_ab72f035aa34ddb5ec313dc02adb1f18"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_996fbee06ca423494c6785889a54264f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_ab72f035aa34ddb5ec313dc02adb1f18;
}

}

SuperappLoginModel.RL_996fbee06ca423494c6785889a54264f = RL_996fbee06ca423494c6785889a54264f;

});

define("SuperappLogin.model$RL_9ab59cf1963fbe94eddb7ebb18232c35", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$UserUpdateInfoRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_9ab59cf1963fbe94eddb7ebb18232c35 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.UserUpdateInfoRec;
}

}

SuperappLoginModel.RL_9ab59cf1963fbe94eddb7ebb18232c35 = RL_9ab59cf1963fbe94eddb7ebb18232c35;

});

define("SuperappLogin.model$RL_9af508c2bc49a313fc433219cb3052d0", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_14b00646f6cd842655571448758d0a23Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_9af508c2bc49a313fc433219cb3052d0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_14b00646f6cd842655571448758d0a23Structure;
}

}

SuperappLoginModel.RL_9af508c2bc49a313fc433219cb3052d0 = RL_9af508c2bc49a313fc433219cb3052d0;

});

define("SuperappLogin.model$RL_9bba1220f91628d35d17687902f382ad", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_5d4c0a98b9773e489e7e27bfe5360793"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_9bba1220f91628d35d17687902f382ad extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_5d4c0a98b9773e489e7e27bfe5360793;
}

}

SuperappLoginModel.RL_9bba1220f91628d35d17687902f382ad = RL_9bba1220f91628d35d17687902f382ad;

});

define("SuperappLogin.model$RL_9c28fba2ad5d9bbe6b5a769d4094590b", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_3554b1e2806a5b827c457cdecc492d4a"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_9c28fba2ad5d9bbe6b5a769d4094590b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_3554b1e2806a5b827c457cdecc492d4a;
}

}

SuperappLoginModel.RL_9c28fba2ad5d9bbe6b5a769d4094590b = RL_9c28fba2ad5d9bbe6b5a769d4094590b;

});

define("SuperappLogin.model$RC_9ca6a18cc49ca7246c44c0f7c2cef62a", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Alert", "alertAttr", "Alert", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord());
}, true, OutSystemsUIModel.EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_9ca6a18cc49ca7246c44c0f7c2cef62a(new RC_9ca6a18cc49ca7246c44c0f7c2cef62a.RecordClass({
alertAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_9ca6a18cc49ca7246c44c0f7c2cef62a = RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner;

RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner._isAnonymousRecord = true;
RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner.UniqueId = "9ca6a18c-c49c-a724-6c44-c0f7c2cef62a";
var RC_9ca6a18cc49ca7246c44c0f7c2cef62a = RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner;
RC_9ca6a18cc49ca7246c44c0f7c2cef62a.init();
}
});

define("SuperappLogin.model$RC_b7283e2c6e9c6bcb5286d1ae04959554", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_b7283e2c6e9c6bcb5286d1ae04959554Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("TabsOptionalConfigs", "tabsOptionalConfigsAttr", "TabsOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_e3f9af4171d5e4a41700770295d05c77Structure());
}, true, OutSystemsUIModel.ST_e3f9af4171d5e4a41700770295d05c77Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_b7283e2c6e9c6bcb5286d1ae04959554(new RC_b7283e2c6e9c6bcb5286d1ae04959554.RecordClass({
tabsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_b7283e2c6e9c6bcb5286d1ae04959554 = RC_b7283e2c6e9c6bcb5286d1ae04959554Inner;

RC_b7283e2c6e9c6bcb5286d1ae04959554Inner._isAnonymousRecord = true;
RC_b7283e2c6e9c6bcb5286d1ae04959554Inner.UniqueId = "b7283e2c-6e9c-6bcb-5286-d1ae04959554";
var RC_b7283e2c6e9c6bcb5286d1ae04959554 = RC_b7283e2c6e9c6bcb5286d1ae04959554Inner;
RC_b7283e2c6e9c6bcb5286d1ae04959554.init();
}
});

define("SuperappLogin.model$RL_9e12f04bf3ce19087cbbf62097a9932a", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_b7283e2c6e9c6bcb5286d1ae04959554"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_9e12f04bf3ce19087cbbf62097a9932a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_b7283e2c6e9c6bcb5286d1ae04959554;
}

}

SuperappLoginModel.RL_9e12f04bf3ce19087cbbf62097a9932a = RL_9e12f04bf3ce19087cbbf62097a9932a;

});

define("SuperappLogin.model$RL_9e8eb507fc82c7005600a2499b6a668c", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_87351e3b0fa2ca59cf6c6749c6405006"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_9e8eb507fc82c7005600a2499b6a668c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_87351e3b0fa2ca59cf6c6749c6405006;
}

}

SuperappLoginModel.RL_9e8eb507fc82c7005600a2499b6a668c = RL_9e8eb507fc82c7005600a2499b6a668c;

});

define("SuperappLogin.model$BasicTypeList<string>", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class TextList extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.DataTypes.DataTypes.Text;
}

}

SuperappLoginModel.TextList = TextList;

});

define("SuperappLogin.model$RC_a34c029579f872c2fbb90741544ea7c6", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_a34c029579f872c2fbb90741544ea7c6Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("VirtualSelectConfigs", "virtualSelectConfigsAttr", "VirtualSelectConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure());
}, true, OutSystemsUIModel.ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a34c029579f872c2fbb90741544ea7c6(new RC_a34c029579f872c2fbb90741544ea7c6.RecordClass({
virtualSelectConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_a34c029579f872c2fbb90741544ea7c6 = RC_a34c029579f872c2fbb90741544ea7c6Inner;

RC_a34c029579f872c2fbb90741544ea7c6Inner._isAnonymousRecord = true;
RC_a34c029579f872c2fbb90741544ea7c6Inner.UniqueId = "a34c0295-79f8-72c2-fbb9-0741544ea7c6";
var RC_a34c029579f872c2fbb90741544ea7c6 = RC_a34c029579f872c2fbb90741544ea7c6Inner;
RC_a34c029579f872c2fbb90741544ea7c6.init();
}
});

define("SuperappLogin.model$RL_a3746675e7afa0a411750081849db606", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_a3746675e7afa0a411750081849db606 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord;
}

}

SuperappLoginModel.RL_a3746675e7afa0a411750081849db606 = RL_a3746675e7afa0a411750081849db606;

});

define("SuperappLogin.model$RC_e092deacf9bc8885dd34714ac00f33e4", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_5be8b31925746693c09b3f64c4898006EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_e092deacf9bc8885dd34714ac00f33e4Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Month", "monthAttr", "Month", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_5be8b31925746693c09b3f64c4898006EntityRecord());
}, true, OutSystemsUIModel.EN_5be8b31925746693c09b3f64c4898006EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e092deacf9bc8885dd34714ac00f33e4(new RC_e092deacf9bc8885dd34714ac00f33e4.RecordClass({
monthAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_e092deacf9bc8885dd34714ac00f33e4 = RC_e092deacf9bc8885dd34714ac00f33e4Inner;

RC_e092deacf9bc8885dd34714ac00f33e4Inner._isAnonymousRecord = true;
RC_e092deacf9bc8885dd34714ac00f33e4Inner.UniqueId = "e092deac-f9bc-8885-dd34-714ac00f33e4";
var RC_e092deacf9bc8885dd34714ac00f33e4 = RC_e092deacf9bc8885dd34714ac00f33e4Inner;
RC_e092deacf9bc8885dd34714ac00f33e4.init();
}
});

define("SuperappLogin.model$RL_a48ae6e6aedeec60d7b351d47494aa56", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_e092deacf9bc8885dd34714ac00f33e4"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_a48ae6e6aedeec60d7b351d47494aa56 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_e092deacf9bc8885dd34714ac00f33e4;
}

}

SuperappLoginModel.RL_a48ae6e6aedeec60d7b351d47494aa56 = RL_a48ae6e6aedeec60d7b351d47494aa56;

});

define("SuperappLogin.model$RC_a5018402fa6c90c5e826e54b2748cedc", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_a5018402fa6c90c5e826e54b2748cedcInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("GutterSize", "gutterSizeAttr", "GutterSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord());
}, true, OutSystemsUIModel.EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a5018402fa6c90c5e826e54b2748cedc(new RC_a5018402fa6c90c5e826e54b2748cedc.RecordClass({
gutterSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_a5018402fa6c90c5e826e54b2748cedc = RC_a5018402fa6c90c5e826e54b2748cedcInner;

RC_a5018402fa6c90c5e826e54b2748cedcInner._isAnonymousRecord = true;
RC_a5018402fa6c90c5e826e54b2748cedcInner.UniqueId = "a5018402-fa6c-90c5-e826-e54b2748cedc";
var RC_a5018402fa6c90c5e826e54b2748cedc = RC_a5018402fa6c90c5e826e54b2748cedcInner;
RC_a5018402fa6c90c5e826e54b2748cedc.init();
}
});

define("SuperappLogin.model$RC_a582d84634a30a3a3b1e61cbfd3db9de", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$UserUpdateInfoRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_a582d84634a30a3a3b1e61cbfd3db9deInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UserUpdateInfo", "userUpdateInfoAttr", "UserUpdateInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UserUpdateInfoRec());
}, true, OS.SystemStructures.UserUpdateInfoRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a582d84634a30a3a3b1e61cbfd3db9de(new RC_a582d84634a30a3a3b1e61cbfd3db9de.RecordClass({
userUpdateInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_a582d84634a30a3a3b1e61cbfd3db9de = RC_a582d84634a30a3a3b1e61cbfd3db9deInner;

RC_a582d84634a30a3a3b1e61cbfd3db9deInner._isAnonymousRecord = true;
RC_a582d84634a30a3a3b1e61cbfd3db9deInner.UniqueId = "a582d846-34a3-0a3a-3b1e-61cbfd3db9de";
var RC_a582d84634a30a3a3b1e61cbfd3db9de = RC_a582d84634a30a3a3b1e61cbfd3db9deInner;
RC_a582d84634a30a3a3b1e61cbfd3db9de.init();
}
});

define("SuperappLogin.model$RL_a5b6b975942e234f0350205b728240be", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_a582d84634a30a3a3b1e61cbfd3db9de"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_a5b6b975942e234f0350205b728240be extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_a582d84634a30a3a3b1e61cbfd3db9de;
}

}

SuperappLoginModel.RL_a5b6b975942e234f0350205b728240be = RL_a5b6b975942e234f0350205b728240be;

});

define("SuperappLogin.model$RL_a60626c1780bfe250dcef75d5dfa5fd1", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$ChangePasswordFailureReasonRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_a60626c1780bfe250dcef75d5dfa5fd1 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.ChangePasswordFailureReasonRec;
}

}

SuperappLoginModel.RL_a60626c1780bfe250dcef75d5dfa5fd1 = RL_a60626c1780bfe250dcef75d5dfa5fd1;

});

define("SuperappLogin.model$RC_a784fb81632458d6690327bfa77675d9", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_3fe78d74e319e2ce842fd51dd2d67caaStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_a784fb81632458d6690327bfa77675d9Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("SplideConfigs", "splideConfigsAttr", "SplideConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_3fe78d74e319e2ce842fd51dd2d67caaStructure());
}, true, OutSystemsUIModel.ST_3fe78d74e319e2ce842fd51dd2d67caaStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_a784fb81632458d6690327bfa77675d9(new RC_a784fb81632458d6690327bfa77675d9.RecordClass({
splideConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_a784fb81632458d6690327bfa77675d9 = RC_a784fb81632458d6690327bfa77675d9Inner;

RC_a784fb81632458d6690327bfa77675d9Inner._isAnonymousRecord = true;
RC_a784fb81632458d6690327bfa77675d9Inner.UniqueId = "a784fb81-6324-58d6-6903-27bfa77675d9";
var RC_a784fb81632458d6690327bfa77675d9 = RC_a784fb81632458d6690327bfa77675d9Inner;
RC_a784fb81632458d6690327bfa77675d9.init();
}
});

define("SuperappLogin.model$RL_acf3198d7827e501ece64b7f57e6f374", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_3fbb4babd0ba48852fecc04be37d3c0e"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_acf3198d7827e501ece64b7f57e6f374 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_3fbb4babd0ba48852fecc04be37d3c0e;
}

}

SuperappLoginModel.RL_acf3198d7827e501ece64b7f57e6f374 = RL_acf3198d7827e501ece64b7f57e6f374;

});

define("SuperappLogin.model$RL_adbfc30c899ef88f92a4ffb0fe1c08d9", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_adbfc30c899ef88f92a4ffb0fe1c08d9 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord;
}

}

SuperappLoginModel.RL_adbfc30c899ef88f92a4ffb0fe1c08d9 = RL_adbfc30c899ef88f92a4ffb0fe1c08d9;

});

define("SuperappLogin.model$RL_af071f8b45f2932e1364f15bc3e90819", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_af071f8b45f2932e1364f15bc3e90819 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord;
}

}

SuperappLoginModel.RL_af071f8b45f2932e1364f15bc3e90819 = RL_af071f8b45f2932e1364f15bc3e90819;

});

define("SuperappLogin.model$RL_af7f649b9a00c07af59590b0760c28af", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_0262e6910ebecc922f633b08db78d688Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_af7f649b9a00c07af59590b0760c28af extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_0262e6910ebecc922f633b08db78d688Structure;
}

}

SuperappLoginModel.RL_af7f649b9a00c07af59590b0760c28af = RL_af7f649b9a00c07af59590b0760c28af;

});

define("SuperappLogin.model$RC_e03a49308bfaca02257d451178bbf041", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_e03a49308bfaca02257d451178bbf041Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("DropdownOption", "dropdownOptionAttr", "DropdownOption", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure());
}, true, OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e03a49308bfaca02257d451178bbf041(new RC_e03a49308bfaca02257d451178bbf041.RecordClass({
dropdownOptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_e03a49308bfaca02257d451178bbf041 = RC_e03a49308bfaca02257d451178bbf041Inner;

RC_e03a49308bfaca02257d451178bbf041Inner._isAnonymousRecord = true;
RC_e03a49308bfaca02257d451178bbf041Inner.UniqueId = "e03a4930-8bfa-ca02-257d-451178bbf041";
var RC_e03a49308bfaca02257d451178bbf041 = RC_e03a49308bfaca02257d451178bbf041Inner;
RC_e03a49308bfaca02257d451178bbf041.init();
}
});

define("SuperappLogin.model$RL_b17522b541f7e019c0443ba6658c825f", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_e03a49308bfaca02257d451178bbf041"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_b17522b541f7e019c0443ba6658c825f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_e03a49308bfaca02257d451178bbf041;
}

}

SuperappLoginModel.RL_b17522b541f7e019c0443ba6658c825f = RL_b17522b541f7e019c0443ba6658c825f;

});

define("SuperappLogin.model$RC_b6adbbf4e08bad2975a6f8f796279b71", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_b6adbbf4e08bad2975a6f8f796279b71Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord());
}, true, OutSystemsUIModel.EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_b6adbbf4e08bad2975a6f8f796279b71(new RC_b6adbbf4e08bad2975a6f8f796279b71.RecordClass({
columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_b6adbbf4e08bad2975a6f8f796279b71 = RC_b6adbbf4e08bad2975a6f8f796279b71Inner;

RC_b6adbbf4e08bad2975a6f8f796279b71Inner._isAnonymousRecord = true;
RC_b6adbbf4e08bad2975a6f8f796279b71Inner.UniqueId = "b6adbbf4-e08b-ad29-75a6-f8f796279b71";
var RC_b6adbbf4e08bad2975a6f8f796279b71 = RC_b6adbbf4e08bad2975a6f8f796279b71Inner;
RC_b6adbbf4e08bad2975a6f8f796279b71.init();
}
});

define("SuperappLogin.model$RL_b2003a063523641b68ecff9e50755bc3", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_b6adbbf4e08bad2975a6f8f796279b71"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_b2003a063523641b68ecff9e50755bc3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_b6adbbf4e08bad2975a6f8f796279b71;
}

}

SuperappLoginModel.RL_b2003a063523641b68ecff9e50755bc3 = RL_b2003a063523641b68ecff9e50755bc3;

});

define("SuperappLogin.model$RC_b27f0b968b0f7cea61506ac9d6ee7c27", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$PasswordValidationResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PasswordValidationResult", "passwordValidationResultAttr", "PasswordValidationResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.PasswordValidationResultRec());
}, true, OS.SystemStructures.PasswordValidationResultRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_b27f0b968b0f7cea61506ac9d6ee7c27(new RC_b27f0b968b0f7cea61506ac9d6ee7c27.RecordClass({
passwordValidationResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_b27f0b968b0f7cea61506ac9d6ee7c27 = RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner;

RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner._isAnonymousRecord = true;
RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner.UniqueId = "b27f0b96-8b0f-7cea-6150-6ac9d6ee7c27";
var RC_b27f0b968b0f7cea61506ac9d6ee7c27 = RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner;
RC_b27f0b968b0f7cea61506ac9d6ee7c27.init();
}
});

define("SuperappLogin.model$RL_b399fd74f6375cee8461023a74406333", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_3bbfc6c91fcd8a2dd97847564be30682"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_b399fd74f6375cee8461023a74406333 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_3bbfc6c91fcd8a2dd97847564be30682;
}

}

SuperappLoginModel.RL_b399fd74f6375cee8461023a74406333 = RL_b399fd74f6375cee8461023a74406333;

});

define("SuperappLogin.model$RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_e3f9af4171d5e4a41700770295d05c77Structure;
}

}

SuperappLoginModel.RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc = RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc;

});

define("SuperappLogin.model$RL_b693780c9c2e91ec100b6cde72ab3ad5", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_f9178b4aae1879ea388b92402c64db4cEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_b693780c9c2e91ec100b6cde72ab3ad5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_f9178b4aae1879ea388b92402c64db4cEntityRecord;
}

}

SuperappLoginModel.RL_b693780c9c2e91ec100b6cde72ab3ad5 = RL_b693780c9c2e91ec100b6cde72ab3ad5;

});

define("SuperappLogin.model$RC_e5c662d406f83f7f791bd7e5c8b0c543", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$ChangePasswordFailureReasonRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_e5c662d406f83f7f791bd7e5c8b0c543Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("ChangePasswordFailureReason", "changePasswordFailureReasonAttr", "ChangePasswordFailureReason", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.ChangePasswordFailureReasonRec());
}, true, OS.SystemStructures.ChangePasswordFailureReasonRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e5c662d406f83f7f791bd7e5c8b0c543(new RC_e5c662d406f83f7f791bd7e5c8b0c543.RecordClass({
changePasswordFailureReasonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_e5c662d406f83f7f791bd7e5c8b0c543 = RC_e5c662d406f83f7f791bd7e5c8b0c543Inner;

RC_e5c662d406f83f7f791bd7e5c8b0c543Inner._isAnonymousRecord = true;
RC_e5c662d406f83f7f791bd7e5c8b0c543Inner.UniqueId = "e5c662d4-06f8-3f7f-791b-d7e5c8b0c543";
var RC_e5c662d406f83f7f791bd7e5c8b0c543 = RC_e5c662d406f83f7f791bd7e5c8b0c543Inner;
RC_e5c662d406f83f7f791bd7e5c8b0c543.init();
}
});

define("SuperappLogin.model$RL_b6f4bbf36a4770c53788c60d2b555d3c", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_e5c662d406f83f7f791bd7e5c8b0c543"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_b6f4bbf36a4770c53788c60d2b555d3c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_e5c662d406f83f7f791bd7e5c8b0c543;
}

}

SuperappLoginModel.RL_b6f4bbf36a4770c53788c60d2b555d3c = RL_b6f4bbf36a4770c53788c60d2b555d3c;

});

define("SuperappLogin.model$RL_b81a693ea5fe206cf847a51f9be40beb", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_a784fb81632458d6690327bfa77675d9"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_b81a693ea5fe206cf847a51f9be40beb extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_a784fb81632458d6690327bfa77675d9;
}

}

SuperappLoginModel.RL_b81a693ea5fe206cf847a51f9be40beb = RL_b81a693ea5fe206cf847a51f9be40beb;

});

define("SuperappLogin.model$RL_bb23cfabef259372d4ccc6deba43b63b", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_bb23cfabef259372d4ccc6deba43b63b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure;
}

}

SuperappLoginModel.RL_bb23cfabef259372d4ccc6deba43b63b = RL_bb23cfabef259372d4ccc6deba43b63b;

});

define("SuperappLogin.model$RC_bb80a04f7ea6a5bb3d33db9b2bca4c88", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_b96c67f06fdfae580256b7081d85460dStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("TimePickerOptionalConfigs", "timePickerOptionalConfigsAttr", "TimePickerOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_b96c67f06fdfae580256b7081d85460dStructure());
}, true, OutSystemsUIModel.ST_b96c67f06fdfae580256b7081d85460dStructure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_bb80a04f7ea6a5bb3d33db9b2bca4c88(new RC_bb80a04f7ea6a5bb3d33db9b2bca4c88.RecordClass({
timePickerOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_bb80a04f7ea6a5bb3d33db9b2bca4c88 = RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner;

RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner._isAnonymousRecord = true;
RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner.UniqueId = "bb80a04f-7ea6-a5bb-3d33-db9b2bca4c88";
var RC_bb80a04f7ea6a5bb3d33db9b2bca4c88 = RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner;
RC_bb80a04f7ea6a5bb3d33db9b2bca4c88.init();
}
});

define("SuperappLogin.model$RL_bd4587648373bf4d3e2c5fb636046bee", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_327e36bc408edd046ca40df8a4e734bb"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_bd4587648373bf4d3e2c5fb636046bee extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_327e36bc408edd046ca40df8a4e734bb;
}

}

SuperappLoginModel.RL_bd4587648373bf4d3e2c5fb636046bee = RL_bd4587648373bf4d3e2c5fb636046bee;

});

define("SuperappLogin.model$RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_27b5a164e828de9b90686831c7908b4a"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_27b5a164e828de9b90686831c7908b4a;
}

}

SuperappLoginModel.RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f = RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f;

});

define("SuperappLogin.model$RL_bfe5e088b2f6df6ae697d4a263069bca", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$UserLoginResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_bfe5e088b2f6df6ae697d4a263069bca extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.UserLoginResultRec;
}

}

SuperappLoginModel.RL_bfe5e088b2f6df6ae697d4a263069bca = RL_bfe5e088b2f6df6ae697d4a263069bca;

});

define("SuperappLogin.model$RL_c0f17d75c546075264f5d075e00ba65b", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_c0f17d75c546075264f5d075e00ba65b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure;
}

}

SuperappLoginModel.RL_c0f17d75c546075264f5d075e00ba65b = RL_c0f17d75c546075264f5d075e00ba65b;

});

define("SuperappLogin.model$RL_c485f9f483418f5379953cdc77acac73", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_a34c029579f872c2fbb90741544ea7c6"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_c485f9f483418f5379953cdc77acac73 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_a34c029579f872c2fbb90741544ea7c6;
}

}

SuperappLoginModel.RL_c485f9f483418f5379953cdc77acac73 = RL_c485f9f483418f5379953cdc77acac73;

});

define("SuperappLogin.model$RL_c542301ba033767f97d37c7ac8f0f71c", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_71bc196daedd9ac0648bfd56a713859dStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_c542301ba033767f97d37c7ac8f0f71c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_71bc196daedd9ac0648bfd56a713859dStructure;
}

}

SuperappLoginModel.RL_c542301ba033767f97d37c7ac8f0f71c = RL_c542301ba033767f97d37c7ac8f0f71c;

});

define("SuperappLogin.model$RL_c564b1e63d41953ea9734fb248f40109", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_51b1c15949308af5f9b2dba7043d5ae6"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_c564b1e63d41953ea9734fb248f40109 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_51b1c15949308af5f9b2dba7043d5ae6;
}

}

SuperappLoginModel.RL_c564b1e63d41953ea9734fb248f40109 = RL_c564b1e63d41953ea9734fb248f40109;

});

define("SuperappLogin.model$RL_c58ca0a921eee43537149b3c5b7a13e2", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_eb161a8909408fbd30eac1833398f018Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_c58ca0a921eee43537149b3c5b7a13e2 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_eb161a8909408fbd30eac1833398f018Structure;
}

}

SuperappLoginModel.RL_c58ca0a921eee43537149b3c5b7a13e2 = RL_c58ca0a921eee43537149b3c5b7a13e2;

});

define("SuperappLogin.model$RL_c70c6fbde641bc249181616cec2cfcdf", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_7167810326c75456a7ce120ed2dbd76bStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_c70c6fbde641bc249181616cec2cfcdf extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_7167810326c75456a7ce120ed2dbd76bStructure;
}

}

SuperappLoginModel.RL_c70c6fbde641bc249181616cec2cfcdf = RL_c70c6fbde641bc249181616cec2cfcdf;

});

define("SuperappLogin.model$RL_ca4befaa7d5de5d9bbcd4bf59c44b15c", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_b27f0b968b0f7cea61506ac9d6ee7c27"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_ca4befaa7d5de5d9bbcd4bf59c44b15c extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_b27f0b968b0f7cea61506ac9d6ee7c27;
}

}

SuperappLoginModel.RL_ca4befaa7d5de5d9bbcd4bf59c44b15c = RL_ca4befaa7d5de5d9bbcd4bf59c44b15c;

});

define("SuperappLogin.model$RL_cbac71e3b2383e8c0c384139f6b34f78", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_7441573ccf264d27ef548a39a846bd68EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_cbac71e3b2383e8c0c384139f6b34f78 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_7441573ccf264d27ef548a39a846bd68EntityRecord;
}

}

SuperappLoginModel.RL_cbac71e3b2383e8c0c384139f6b34f78 = RL_cbac71e3b2383e8c0c384139f6b34f78;

});

define("SuperappLogin.model$RL_cee89322b70b4f0970ccb596bcdde503", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_3fe78d74e319e2ce842fd51dd2d67caaStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_cee89322b70b4f0970ccb596bcdde503 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_3fe78d74e319e2ce842fd51dd2d67caaStructure;
}

}

SuperappLoginModel.RL_cee89322b70b4f0970ccb596bcdde503 = RL_cee89322b70b4f0970ccb596bcdde503;

});

define("SuperappLogin.model$RL_cfb818c964fb3ae8dde06e9177a0c998", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_cfb818c964fb3ae8dde06e9177a0c998 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure;
}

}

SuperappLoginModel.RL_cfb818c964fb3ae8dde06e9177a0c998 = RL_cfb818c964fb3ae8dde06e9177a0c998;

});

define("SuperappLogin.model$RC_d15ba8cc56cc5ee58bd8acaffd974239", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_d15ba8cc56cc5ee58bd8acaffd974239Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Speed", "speedAttr", "Speed", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord());
}, true, OutSystemsUIModel.EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_d15ba8cc56cc5ee58bd8acaffd974239(new RC_d15ba8cc56cc5ee58bd8acaffd974239.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_d15ba8cc56cc5ee58bd8acaffd974239 = RC_d15ba8cc56cc5ee58bd8acaffd974239Inner;

RC_d15ba8cc56cc5ee58bd8acaffd974239Inner._isAnonymousRecord = true;
RC_d15ba8cc56cc5ee58bd8acaffd974239Inner.UniqueId = "d15ba8cc-56cc-5ee5-8bd8-acaffd974239";
var RC_d15ba8cc56cc5ee58bd8acaffd974239 = RC_d15ba8cc56cc5ee58bd8acaffd974239Inner;
RC_d15ba8cc56cc5ee58bd8acaffd974239.init();
}
});

define("SuperappLogin.model$RL_d1ce957a73e235b2c1f9383b50c6c777", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_d1ce957a73e235b2c1f9383b50c6c777 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord;
}

}

SuperappLoginModel.RL_d1ce957a73e235b2c1f9383b50c6c777 = RL_d1ce957a73e235b2c1f9383b50c6c777;

});

define("SuperappLogin.model$RL_d1ec4133b9c9274ea17a14b497f44d93", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_c1e622743b79c1510fd62a0adf89686bEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_d1ec4133b9c9274ea17a14b497f44d93 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_c1e622743b79c1510fd62a0adf89686bEntityRecord;
}

}

SuperappLoginModel.RL_d1ec4133b9c9274ea17a14b497f44d93 = RL_d1ec4133b9c9274ea17a14b497f44d93;

});

define("SuperappLogin.model$RL_d24415aae8bc2d864868eb4166823bd0", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_d24415aae8bc2d864868eb4166823bd0 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord;
}

}

SuperappLoginModel.RL_d24415aae8bc2d864868eb4166823bd0 = RL_d24415aae8bc2d864868eb4166823bd0;

});

define("SuperappLogin.model$RL_d28765f0509bd8278495bc8b55d5a50e", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_d28765f0509bd8278495bc8b55d5a50e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord;
}

}

SuperappLoginModel.RL_d28765f0509bd8278495bc8b55d5a50e = RL_d28765f0509bd8278495bc8b55d5a50e;

});

define("SuperappLogin.model$RL_d2c71de812e44763974172e04508cef5", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_d2c71de812e44763974172e04508cef5 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord;
}

}

SuperappLoginModel.RL_d2c71de812e44763974172e04508cef5 = RL_d2c71de812e44763974172e04508cef5;

});

define("SuperappLogin.model$RL_d656c399e70b60822640f73b89cbc71f", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_ac6f62956e278d5390a5f27c607338d0EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_d656c399e70b60822640f73b89cbc71f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_ac6f62956e278d5390a5f27c607338d0EntityRecord;
}

}

SuperappLoginModel.RL_d656c399e70b60822640f73b89cbc71f = RL_d656c399e70b60822640f73b89cbc71f;

});

define("SuperappLogin.model$RL_d689c0ceaaa6201af233ffc179beef2f", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_09173c1b0f41f719b9efd6430c2e737dStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_d689c0ceaaa6201af233ffc179beef2f extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_09173c1b0f41f719b9efd6430c2e737dStructure;
}

}

SuperappLoginModel.RL_d689c0ceaaa6201af233ffc179beef2f = RL_d689c0ceaaa6201af233ffc179beef2f;

});

define("SuperappLogin.model$RL_d7cde0d346486a854aee07525f121a90", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_5d1279724e719322292e34ef3c5500a0EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_d7cde0d346486a854aee07525f121a90 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord;
}

}

SuperappLoginModel.RL_d7cde0d346486a854aee07525f121a90 = RL_d7cde0d346486a854aee07525f121a90;

});

define("SuperappLogin.model$RL_d8959d4c81c965e073d03471f545ed85", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_56805fdef6332e01f13c0f9217357dbc"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_d8959d4c81c965e073d03471f545ed85 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_56805fdef6332e01f13c0f9217357dbc;
}

}

SuperappLoginModel.RL_d8959d4c81c965e073d03471f545ed85 = RL_d8959d4c81c965e073d03471f545ed85;

});

define("SuperappLogin.model$RC_dac62773434cf92b52368fd089bbfc2a", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_dac62773434cf92b52368fd089bbfc2aInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("CarouselItems", "carouselItemsAttr", "CarouselItems", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_660adb7a9db48bff1b12c6e03515b415Structure());
}, true, OutSystemsUIModel.ST_660adb7a9db48bff1b12c6e03515b415Structure)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_dac62773434cf92b52368fd089bbfc2a(new RC_dac62773434cf92b52368fd089bbfc2a.RecordClass({
carouselItemsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_dac62773434cf92b52368fd089bbfc2a = RC_dac62773434cf92b52368fd089bbfc2aInner;

RC_dac62773434cf92b52368fd089bbfc2aInner._isAnonymousRecord = true;
RC_dac62773434cf92b52368fd089bbfc2aInner.UniqueId = "dac62773-434c-f92b-5236-8fd089bbfc2a";
var RC_dac62773434cf92b52368fd089bbfc2a = RC_dac62773434cf92b52368fd089bbfc2aInner;
RC_dac62773434cf92b52368fd089bbfc2a.init();
}
});

define("SuperappLogin.model$RL_dce031541ffd7ddb60ff42662d8a6be6", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_c3a2475ae6370a2f746040280495b4a2EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_dce031541ffd7ddb60ff42662d8a6be6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_c3a2475ae6370a2f746040280495b4a2EntityRecord;
}

}

SuperappLoginModel.RL_dce031541ffd7ddb60ff42662d8a6be6 = RL_dce031541ffd7ddb60ff42662d8a6be6;

});

define("SuperappLogin.model$RC_e3607d6b92545e5793fbeb99fc16b7e7", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_c1e622743b79c1510fd62a0adf89686bEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_e3607d6b92545e5793fbeb99fc16b7e7Inner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_c1e622743b79c1510fd62a0adf89686bEntityRecord());
}, true, OutSystemsUIModel.EN_c1e622743b79c1510fd62a0adf89686bEntityRecord)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_e3607d6b92545e5793fbeb99fc16b7e7(new RC_e3607d6b92545e5793fbeb99fc16b7e7.RecordClass({
sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_e3607d6b92545e5793fbeb99fc16b7e7 = RC_e3607d6b92545e5793fbeb99fc16b7e7Inner;

RC_e3607d6b92545e5793fbeb99fc16b7e7Inner._isAnonymousRecord = true;
RC_e3607d6b92545e5793fbeb99fc16b7e7Inner.UniqueId = "e3607d6b-9254-5e57-93fb-eb99fc16b7e7";
var RC_e3607d6b92545e5793fbeb99fc16b7e7 = RC_e3607d6b92545e5793fbeb99fc16b7e7Inner;
RC_e3607d6b92545e5793fbeb99fc16b7e7.init();
}
});

define("SuperappLogin.model$RL_e42632965fbacac756c3d935f97df7a8", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_dac62773434cf92b52368fd089bbfc2a"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_e42632965fbacac756c3d935f97df7a8 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_dac62773434cf92b52368fd089bbfc2a;
}

}

SuperappLoginModel.RL_e42632965fbacac756c3d935f97df7a8 = RL_e42632965fbacac756c3d935f97df7a8;

});

define("SuperappLogin.model$RL_e57523dcca7e6d3766c4721a0ef109ee", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$PasswordValidationResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_e57523dcca7e6d3766c4721a0ef109ee extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.PasswordValidationResultRec;
}

}

SuperappLoginModel.RL_e57523dcca7e6d3766c4721a0ef109ee = RL_e57523dcca7e6d3766c4721a0ef109ee;

});

define("SuperappLogin.model$RL_e8445d61f812c92de860d050e73a5e29", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_e8445d61f812c92de860d050e73a5e29 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord;
}

}

SuperappLoginModel.RL_e8445d61f812c92de860d050e73a5e29 = RL_e8445d61f812c92de860d050e73a5e29;

});

define("SuperappLogin.model$RL_eaefbf6dde0f7f83dd46a12f58dd150a", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_0d776a4e191faf321030d5ce57aa4167"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_eaefbf6dde0f7f83dd46a12f58dd150a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_0d776a4e191faf321030d5ce57aa4167;
}

}

SuperappLoginModel.RL_eaefbf6dde0f7f83dd46a12f58dd150a = RL_eaefbf6dde0f7f83dd46a12f58dd150a;

});

define("SuperappLogin.model$RL_eafe76043375465a898a3d00608f23b6", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_673cc0a63dbc3f5836f7732ba0712544"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_eafe76043375465a898a3d00608f23b6 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_673cc0a63dbc3f5836f7732ba0712544;
}

}

SuperappLoginModel.RL_eafe76043375465a898a3d00608f23b6 = RL_eafe76043375465a898a3d00608f23b6;

});

define("SuperappLogin.model$RL_f07d4ee6d8af2ad822d0947b26fdf6f3", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_53d491417faf149f9fb8a0dda9c12d06"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_f07d4ee6d8af2ad822d0947b26fdf6f3 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_53d491417faf149f9fb8a0dda9c12d06;
}

}

SuperappLoginModel.RL_f07d4ee6d8af2ad822d0947b26fdf6f3 = RL_f07d4ee6d8af2ad822d0947b26fdf6f3;

});

define("SuperappLogin.model$RL_f115a666c5540eef6697d9968af9fe8e", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_a5018402fa6c90c5e826e54b2748cedc"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_f115a666c5540eef6697d9968af9fe8e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_a5018402fa6c90c5e826e54b2748cedc;
}

}

SuperappLoginModel.RL_f115a666c5540eef6697d9968af9fe8e = RL_f115a666c5540eef6697d9968af9fe8e;

});

define("SuperappLogin.model$RL_f1db162aca08aae7be68b7aedc571752", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_e3607d6b92545e5793fbeb99fc16b7e7"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_f1db162aca08aae7be68b7aedc571752 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_e3607d6b92545e5793fbeb99fc16b7e7;
}

}

SuperappLoginModel.RL_f1db162aca08aae7be68b7aedc571752 = RL_f1db162aca08aae7be68b7aedc571752;

});

define("SuperappLogin.model$RLUserList", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$ENUserEntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RLUserList extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return System_Model.ENUserEntityRecord;
}

}

SuperappLoginModel.RLUserList = RLUserList;

});

define("SuperappLogin.model$RL_f50879d0da007880fcd304f3378f0a9e", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$PasswordComplexityPolicyRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_f50879d0da007880fcd304f3378f0a9e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.PasswordComplexityPolicyRec;
}

}

SuperappLoginModel.RL_f50879d0da007880fcd304f3378f0a9e = RL_f50879d0da007880fcd304f3378f0a9e;

});

define("SuperappLogin.model$RL_f51d1b2f3972179080ca5027bc7c8f43", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_9ca6a18cc49ca7246c44c0f7c2cef62a"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_f51d1b2f3972179080ca5027bc7c8f43 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_9ca6a18cc49ca7246c44c0f7c2cef62a;
}

}

SuperappLoginModel.RL_f51d1b2f3972179080ca5027bc7c8f43 = RL_f51d1b2f3972179080ca5027bc7c8f43;

});

define("SuperappLogin.model$RL_f523c7921013f0781080fba3bca3beb7", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_d15ba8cc56cc5ee58bd8acaffd974239"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_f523c7921013f0781080fba3bca3beb7 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_d15ba8cc56cc5ee58bd8acaffd974239;
}

}

SuperappLoginModel.RL_f523c7921013f0781080fba3bca3beb7 = RL_f523c7921013f0781080fba3bca3beb7;

});

define("SuperappLogin.model$RC_f61c868ef053db94121ce89ee15a14fe", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$UserLoginFailureReasonRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
{class RC_f61c868ef053db94121ce89ee15a14feInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("UserLoginFailureReason", "userLoginFailureReasonAttr", "UserLoginFailureReason", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.UserLoginFailureReasonRec());
}, true, OS.SystemStructures.UserLoginFailureReasonRec)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

static fromStructure(str) {
return new RC_f61c868ef053db94121ce89ee15a14fe(new RC_f61c868ef053db94121ce89ee15a14fe.RecordClass({
userLoginFailureReasonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
}

}

SuperappLoginModel.RC_f61c868ef053db94121ce89ee15a14fe = RC_f61c868ef053db94121ce89ee15a14feInner;

RC_f61c868ef053db94121ce89ee15a14feInner._isAnonymousRecord = true;
RC_f61c868ef053db94121ce89ee15a14feInner.UniqueId = "f61c868e-f053-db94-121c-e89ee15a14fe";
var RC_f61c868ef053db94121ce89ee15a14fe = RC_f61c868ef053db94121ce89ee15a14feInner;
RC_f61c868ef053db94121ce89ee15a14fe.init();
}
});

define("SuperappLogin.model$RL_f6b054c71a69c2b6a6022397c94198cd", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_bb80a04f7ea6a5bb3d33db9b2bca4c88"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_f6b054c71a69c2b6a6022397c94198cd extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_bb80a04f7ea6a5bb3d33db9b2bca4c88;
}

}

SuperappLoginModel.RL_f6b054c71a69c2b6a6022397c94198cd = RL_f6b054c71a69c2b6a6022397c94198cd;

});

define("SuperappLogin.model$RL_f6bc0d68163ce9d4c64ce162194bde5e", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_070998dc6b3dc951b52d8108550fe380"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_f6bc0d68163ce9d4c64ce162194bde5e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_070998dc6b3dc951b52d8108550fe380;
}

}

SuperappLoginModel.RL_f6bc0d68163ce9d4c64ce162194bde5e = RL_f6bc0d68163ce9d4c64ce162194bde5e;

});

define("SuperappLogin.model$RL_f895ce68953fdb97b2f37d55699f4e66", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_4835a3b0a2d4ab28e154f8a8831a00ef"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_f895ce68953fdb97b2f37d55699f4e66 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_4835a3b0a2d4ab28e154f8a8831a00ef;
}

}

SuperappLoginModel.RL_f895ce68953fdb97b2f37d55699f4e66 = RL_f895ce68953fdb97b2f37d55699f4e66;

});

define("SuperappLogin.model$RL_f90829e8248d7dd911b648b9522ef82a", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$EN_5be8b31925746693c09b3f64c4898006EntityRecord", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_f90829e8248d7dd911b648b9522ef82a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.EN_5be8b31925746693c09b3f64c4898006EntityRecord;
}

}

SuperappLoginModel.RL_f90829e8248d7dd911b648b9522ef82a = RL_f90829e8248d7dd911b648b9522ef82a;

});

define("SuperappLogin.model$RL_f9624ab6e814fdb86dd00a59d573aa8e", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_f9624ab6e814fdb86dd00a59d573aa8e extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_660adb7a9db48bff1b12c6e03515b415Structure;
}

}

SuperappLoginModel.RL_f9624ab6e814fdb86dd00a59d573aa8e = RL_f9624ab6e814fdb86dd00a59d573aa8e;

});

define("SuperappLogin.model$RL_fbc9fc52e3cef45822e06efc69df5a4a", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_f61c868ef053db94121ce89ee15a14fe"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_fbc9fc52e3cef45822e06efc69df5a4a extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_f61c868ef053db94121ce89ee15a14fe;
}

}

SuperappLoginModel.RL_fbc9fc52e3cef45822e06efc69df5a4a = RL_fbc9fc52e3cef45822e06efc69df5a4a;

});

define("SuperappLogin.model$RL_fc9a0541e530960ed38d7662d5b2141b", ["exports", "OutSystems/ClientRuntime/Main", "System_.model", "SuperappLogin.model", "System_.model$ChangePasswordResultRec", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$System_"], function (exports, OutSystems, System_Model, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_fc9a0541e530960ed38d7662d5b2141b extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OS.SystemStructures.ChangePasswordResultRec;
}

}

SuperappLoginModel.RL_fc9a0541e530960ed38d7662d5b2141b = RL_fc9a0541e530960ed38d7662d5b2141b;

});

define("SuperappLogin.model$RL_fea339219699b0d78ea5a0c4450d0c70", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "SuperappLogin.model", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", "SuperappLogin.referencesHealth", "SuperappLogin.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_fea339219699b0d78ea5a0c4450d0c70 extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure;
}

}

SuperappLoginModel.RL_fea339219699b0d78ea5a0c4450d0c70 = RL_fea339219699b0d78ea5a0c4450d0c70;

});

define("SuperappLogin.model$RL_ff5ba20b0d42d4170d7b63779346dc5d", ["exports", "OutSystems/ClientRuntime/Main", "SuperappLogin.model", "SuperappLogin.model$RC_3d7c5be4055c8fe2c227afc40d8dee2f"], function (exports, OutSystems, SuperappLoginModel) {
var OS = OutSystems.Internal;
class RL_ff5ba20b0d42d4170d7b63779346dc5d extends 
OS.DataTypes.GenericRecordList {
static getItemType() {
return SuperappLoginModel.RC_3d7c5be4055c8fe2c227afc40d8dee2f;
}

}

SuperappLoginModel.RL_ff5ba20b0d42d4170d7b63779346dc5d = RL_ff5ba20b0d42d4170d7b63779346dc5d;

});

define("SuperappLogin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var SuperappLoginModel = exports;
Object.defineProperty(SuperappLoginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["ac9120c0-4d8d-40f9-b43a-8cdf631e4a8f"];
}
});

SuperappLoginModel.staticEntities = {};
SuperappLoginModel.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.animationType, "topToBottom", {
get: function () {
return "top-to-bottom";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.animationType, "bounce", {
get: function () {
return "bounce";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.animationType, "fadeIn", {
get: function () {
return "fade-in";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.animationType, "scaleDown", {
get: function () {
return "scale-down";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.animationType, "scale", {
get: function () {
return "scale";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.animationType, "spinner", {
get: function () {
return "spinner";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.animationType, "bottomToTop", {
get: function () {
return "bottom-to-top";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.animationType, "rightToLeft", {
get: function () {
return "right-to-left";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.animationType, "leftToRight", {
get: function () {
return "left-to-right";
}
});

SuperappLoginModel.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.speed, "fast", {
get: function () {
return "fast";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.speed, "normal", {
get: function () {
return "normal";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.speed, "slow", {
get: function () {
return "slow";
}
});

SuperappLoginModel.staticEntities.sideMenuBehavior = {};
var getSideMenuBehaviorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["11a5937b-e94d-4250-99a8-9c8358d3d965"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.sideMenuBehavior, "visible", {
get: function () {
return "aside-visible";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.sideMenuBehavior, "expandable", {
get: function () {
return "aside-expandable";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.sideMenuBehavior, "overlay", {
get: function () {
return "aside-overlay";
}
});

SuperappLoginModel.staticEntities.size = {};
var getSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["1ac110b4-8964-470b-a6b2-81ae4a6b5bde"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.size, "medium", {
get: function () {
return "medium";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.size, "small", {
get: function () {
return "small";
}
});

SuperappLoginModel.staticEntities.deviceResponsive = {};
var getDeviceResponsiveRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["29468e1d-a25a-42c3-bf53-b232accc150d"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.deviceResponsive, "desktopAndTablet", {
get: function () {
return "DesktopAndTablet";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.deviceResponsive, "tabletOnly", {
get: function () {
return "TabletOnly";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.deviceResponsive, "allDevices", {
get: function () {
return "AllDevices";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.deviceResponsive, "phoneOnly", {
get: function () {
return "PhoneOnly";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.deviceResponsive, "tabletAndPhone", {
get: function () {
return "TabletAndPhone";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.deviceResponsive, "desktopOnly", {
get: function () {
return "DesktopOnly";
}
});

SuperappLoginModel.staticEntities.gutterSize = {};
var getGutterSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["2e81a1e8-4fa4-4bd0-a945-65352999b0be"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.gutterSize, "xXLarge", {
get: function () {
return "gutter-xxl";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.gutterSize, "medium", {
get: function () {
return "gutter-m";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.gutterSize, "none", {
get: function () {
return "gutter-none";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.gutterSize, "extraLarge", {
get: function () {
return "gutter-xl";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.gutterSize, "small", {
get: function () {
return "gutter-s";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.gutterSize, "large", {
get: function () {
return "gutter-l";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.gutterSize, "base", {
get: function () {
return "gutter-base";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.gutterSize, "extraSmall", {
get: function () {
return "gutter-xs";
}
});

SuperappLoginModel.staticEntities.month = {};
var getMonthRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["33d9b724-a0b1-4b0a-91fb-272143c44a85"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.month, "june", {
get: function () {
return "June";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.month, "march", {
get: function () {
return "March";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.month, "december", {
get: function () {
return "December";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.month, "february", {
get: function () {
return "February";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.month, "may", {
get: function () {
return "May";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.month, "april", {
get: function () {
return "April";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.month, "november", {
get: function () {
return "November";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.month, "august", {
get: function () {
return "August";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.month, "january", {
get: function () {
return "January";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.month, "july", {
get: function () {
return "July";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.month, "september", {
get: function () {
return "September";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.month, "october", {
get: function () {
return "October";
}
});

SuperappLoginModel.staticEntities.datePickerLanguage = {};
var getDatePickerLanguageRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["45402ee4-73bf-42a2-b5f8-371ae940bf4f"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "japanese", {
get: function () {
return "ja";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "dutchFlemish", {
get: function () {
return "nl";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "czech", {
get: function () {
return "cs";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "indonesian", {
get: function () {
return "id";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "punjabiPanjabi", {
get: function () {
return "pa";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "latvian", {
get: function () {
return "lv";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "chinese", {
get: function () {
return "zh";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "polish", {
get: function () {
return "pl";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "estonian", {
get: function () {
return "et";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "catalanValencian", {
get: function () {
return "ca";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "malay", {
get: function () {
return "ms";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "slovak", {
get: function () {
return "sk";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "sinhalaSinhalese", {
get: function () {
return "si";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "danish", {
get: function () {
return "da";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "english", {
get: function () {
return "en";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "hungarian", {
get: function () {
return "hu";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "norwegianNynorsk", {
get: function () {
return "nn";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "norwegianBokmal", {
get: function () {
return "nb";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "arabic", {
get: function () {
return "ar";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "faroese", {
get: function () {
return "fo";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "centralKhmer", {
get: function () {
return "km";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "romanianMoldavianMoldovan", {
get: function () {
return "ro";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "chineseTraditional", {
get: function () {
return "zh_tw";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "norwegian", {
get: function () {
return "no";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "esperanto", {
get: function () {
return "eo";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "croatian", {
get: function () {
return "hr";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "albanian", {
get: function () {
return "sq";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "korean", {
get: function () {
return "ko";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "thai", {
get: function () {
return "th";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "mongolian", {
get: function () {
return "mn";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "spanishCastilian", {
get: function () {
return "es";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "slovenian", {
get: function () {
return "sl";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "vietnamese", {
get: function () {
return "vi";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "bosnian", {
get: function () {
return "bs";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "french", {
get: function () {
return "fr";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "turkish", {
get: function () {
return "tr";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "russian", {
get: function () {
return "ru";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "serbian", {
get: function () {
return "sr";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "lithuanian", {
get: function () {
return "lt";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "portuguese", {
get: function () {
return "pt";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "hebrew", {
get: function () {
return "he";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "uzbek", {
get: function () {
return "uz";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "burmese", {
get: function () {
return "my";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "italian", {
get: function () {
return "it";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "georgian", {
get: function () {
return "ka";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "swedish", {
get: function () {
return "sv";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "azerbaijani", {
get: function () {
return "az";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "hindi", {
get: function () {
return "hi";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "bulgarian", {
get: function () {
return "bg";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "finnish", {
get: function () {
return "fi";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "persian", {
get: function () {
return "fa";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "armenian", {
get: function () {
return "hy";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "german", {
get: function () {
return "de";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "belarusian", {
get: function () {
return "be";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "welsh", {
get: function () {
return "cy";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "ukrainian", {
get: function () {
return "uk";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "bengali", {
get: function () {
return "bn";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerLanguage, "macedonian", {
get: function () {
return "mk";
}
});

SuperappLoginModel.staticEntities.orientation = {};
var getOrientationRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["4d71f824-a563-4f63-8c76-626e4e0bdddb"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.orientation, "horizontal", {
get: function () {
return "horizontal";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.orientation, "vertical", {
get: function () {
return "vertical";
}
});

SuperappLoginModel.staticEntities.datePickerTimeFormat = {};
var getDatePickerTimeFormatRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["55e54b1a-0efe-4bef-ae10-c2769129634d"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.datePickerTimeFormat, "disabled", {
get: function () {
return "disabled";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerTimeFormat, "time24hFormat", {
get: function () {
return "24";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerTimeFormat, "time12hFormat", {
get: function () {
return "12";
}
});

SuperappLoginModel.staticEntities.accordionIconType = {};
var getAccordionIconTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["635cc1de-f6de-4b65-baf1-c661bc518266"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.accordionIconType, "custom", {
get: function () {
return "Custom";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.accordionIconType, "plusMinus", {
get: function () {
return "PlusMinus";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.accordionIconType, "caret", {
get: function () {
return "Caret";
}
});

SuperappLoginModel.staticEntities.direction = {};
var getDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["67628086-7f8b-4f84-a978-a9d3f547969c"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.direction, "left", {
get: function () {
return "left";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.direction, "right", {
get: function () {
return "right";
}
});

SuperappLoginModel.staticEntities.breakColumns = {};
var getBreakColumnsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["68f74593-a5c4-4e65-858b-f44211eaf122"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.breakColumns, "none", {
get: function () {
return "break-none";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.breakColumns, "first", {
get: function () {
return "break-first";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.breakColumns, "all", {
get: function () {
return "break-all";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.breakColumns, "middle", {
get: function () {
return "break-middle";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.breakColumns, "last", {
get: function () {
return "break-last";
}
});

SuperappLoginModel.staticEntities.shape = {};
var getShapeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.shape, "sharp", {
get: function () {
return "none";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.shape, "softRounded", {
get: function () {
return "soft";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.shape, "rounded", {
get: function () {
return "rounded";
}
});

SuperappLoginModel.staticEntities.stackedCardsPosition = {};
var getStackedCardsPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["71865eb4-55fe-40a5-bc7f-45b005a3a0b5"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.stackedCardsPosition, "bottom", {
get: function () {
return "Bottom";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.stackedCardsPosition, "top", {
get: function () {
return "Top";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.stackedCardsPosition, "none", {
get: function () {
return "None";
}
});

SuperappLoginModel.staticEntities.carouselDirection = {};
var getCarouselDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["71cbe266-f7c5-42fb-beae-76bc325d99ea"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.carouselDirection, "rightToLeft", {
get: function () {
return "RightToLeft";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.carouselDirection, "leftToRight", {
get: function () {
return "LeftToRight";
}
});

SuperappLoginModel.staticEntities.autoplay = {};
var getAutoplayRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["82aa58b4-8bbb-4d19-92b6-2944affad02c"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.autoplay, "disabled", {
get: function () {
return "disabled";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.autoplay, "slow", {
get: function () {
return "slow";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.autoplay, "fast", {
get: function () {
return "fast";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.autoplay, "normal", {
get: function () {
return "normal";
}
});

SuperappLoginModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.position, "top", {
get: function () {
return "top";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.position, "left", {
get: function () {
return "left";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.position, "bottomRight", {
get: function () {
return "bottom-right";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.position, "bottomLeft", {
get: function () {
return "bottom-left";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.position, "right", {
get: function () {
return "right";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.position, "topLeft", {
get: function () {
return "top-left";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.position, "topRight", {
get: function () {
return "top-right";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.position, "center", {
get: function () {
return "center";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.position, "bottom", {
get: function () {
return "bottom";
}
});

SuperappLoginModel.staticEntities.identityProvider = {};
var getIdentityProviderRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8ad07004-49d8-42d6-93d1-73727c698b14"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.identityProvider, "facebook", {
get: function () {
return "facebook";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.identityProvider, "google", {
get: function () {
return "google";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.identityProvider, "apple", {
get: function () {
return "apple";
}
});

SuperappLoginModel.staticEntities.trigger = {};
var getTriggerRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8f0912ba-c626-4795-90a6-5311e2b970cb"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.trigger, "onClick", {
get: function () {
return "onclick";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.trigger, "onHover", {
get: function () {
return "onhover";
}
});

SuperappLoginModel.staticEntities.space = {};
var getSpaceRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.space, "large", {
get: function () {
return "l";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.space, "medium", {
get: function () {
return "m";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.space, "xXLarge", {
get: function () {
return "xxl";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.space, "extraSmall", {
get: function () {
return "xs";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.space, "small", {
get: function () {
return "s";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.space, "base", {
get: function () {
return "base";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.space, "extraLarge", {
get: function () {
return "xl";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.space, "none", {
get: function () {
return "none";
}
});

SuperappLoginModel.staticEntities.alert = {};
var getAlertRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["924486c0-dd9a-46ea-ad74-2cf9ac0c84d9"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.alert, "success", {
get: function () {
return "alert-success";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.alert, "error", {
get: function () {
return "alert-error";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.alert, "info", {
get: function () {
return "alert-info";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.alert, "warning", {
get: function () {
return "alert-warning";
}
});

SuperappLoginModel.staticEntities.booleanTypes = {};
var getBooleanTypesRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9882c8fc-0dd6-492e-b6b9-7a68059ecc06"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.booleanTypes, "true", {
get: function () {
return "true";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.booleanTypes, "unset", {
get: function () {
return "unset";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.booleanTypes, "false", {
get: function () {
return "false";
}
});

SuperappLoginModel.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.menuAction, "menu", {
get: function () {
return "Menu";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.menuAction, "auto", {
get: function () {
return "Auto";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.menuAction, "hidden", {
get: function () {
return "Hidden";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.menuAction, "back", {
get: function () {
return "Back";
}
});

SuperappLoginModel.staticEntities.accordionIconPosition = {};
var getAccordionIconPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["a848db2d-fe6c-4df1-8c10-8bdb3c2e948a"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.accordionIconPosition, "left", {
get: function () {
return "left";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.accordionIconPosition, "right", {
get: function () {
return "right";
}
});

SuperappLoginModel.staticEntities.messageStatus = {};
var getMessageStatusRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c1015fc0-c81c-40cc-a046-bf99cf21a280"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.messageStatus, "hidden", {
get: function () {
return "Hidden";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.messageStatus, "read", {
get: function () {
return "Read";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.messageStatus, "sent", {
get: function () {
return "Sent";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.messageStatus, "received", {
get: function () {
return "Received";
}
});

SuperappLoginModel.staticEntities.scrollbarStyle = {};
var getScrollbarStyleRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c3d6dfea-6da2-468a-80e4-5ce668d43f70"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.scrollbarStyle, "none", {
get: function () {
return "none";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.scrollbarStyle, "default", {
get: function () {
return "default";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.scrollbarStyle, "compact", {
get: function () {
return "compact";
}
});

SuperappLoginModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.color, "neutral9", {
get: function () {
return "neutral-9";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "grape", {
get: function () {
return "grape";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "neutral7", {
get: function () {
return "neutral-7";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "neutral10", {
get: function () {
return "neutral-10";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "teal", {
get: function () {
return "teal";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "primary", {
get: function () {
return "primary";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "neutral4", {
get: function () {
return "neutral-4";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "neutral8", {
get: function () {
return "neutral-8";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "indigo", {
get: function () {
return "indigo";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "orange", {
get: function () {
return "orange";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "lime", {
get: function () {
return "lime";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "cyan", {
get: function () {
return "cyan";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "secondary", {
get: function () {
return "secondary";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "neutral6", {
get: function () {
return "neutral-6";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "yellow", {
get: function () {
return "yellow";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "neutral2", {
get: function () {
return "neutral-2";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "neutral1", {
get: function () {
return "neutral-1";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "neutral3", {
get: function () {
return "neutral-3";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "transparent", {
get: function () {
return "transparent";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "violet", {
get: function () {
return "violet";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "blue", {
get: function () {
return "blue";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "neutral5", {
get: function () {
return "neutral-5";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "red", {
get: function () {
return "red";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "pink", {
get: function () {
return "pink";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "green", {
get: function () {
return "green";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.color, "neutral0", {
get: function () {
return "neutral-0";
}
});

SuperappLoginModel.staticEntities.columnBreak = {};
var getColumnBreakRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cce6ac21-942a-492f-8b46-64c5e6ea057b"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.columnBreak, "breakMiddle", {
get: function () {
return "break-middle";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.columnBreak, "breakAll", {
get: function () {
return "break-all";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.columnBreak, "breakNone", {
get: function () {
return "break-none";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.columnBreak, "breakLast", {
get: function () {
return "break-last";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.columnBreak, "breakFirst", {
get: function () {
return "break-first";
}
});

SuperappLoginModel.staticEntities.steps = {};
var getStepsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["e4dd8e9f-a620-4df5-b619-9b8a771be5a3"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.steps, "next", {
get: function () {
return "next";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.steps, "past", {
get: function () {
return "past";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.steps, "active", {
get: function () {
return "active";
}
});

SuperappLoginModel.staticEntities.carouselNavigation = {};
var getCarouselNavigationRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["ee3aefc9-e437-49fb-86a2-0c2d0656ed43"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.carouselNavigation, "dots", {
get: function () {
return "dots";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.carouselNavigation, "none", {
get: function () {
return "none";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.carouselNavigation, "arrows", {
get: function () {
return "arrows";
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.carouselNavigation, "both", {
get: function () {
return "both";
}
});

SuperappLoginModel.staticEntities.datePickerWeekDay = {};
var getDatePickerWeekDayRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["fd4ed0ba-1ab9-4a3e-a2b1-18f41793be2d"][record];
};
Object.defineProperty(SuperappLoginModel.staticEntities.datePickerWeekDay, "monday", {
get: function () {
return 1;
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerWeekDay, "saturday", {
get: function () {
return 6;
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerWeekDay, "sunday", {
get: function () {
return 0;
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerWeekDay, "friday", {
get: function () {
return 5;
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerWeekDay, "tuesday", {
get: function () {
return 2;
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerWeekDay, "thursday", {
get: function () {
return 4;
}
});

Object.defineProperty(SuperappLoginModel.staticEntities.datePickerWeekDay, "wednesday", {
get: function () {
return 3;
}
});

});

