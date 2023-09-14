define('OutSystems/ClientRuntime/modules/Injector/Injector',["require", "exports", "../../Logger"], function (require, exports, Logger) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolve = exports.removeRegistrationListener = exports.addRegistrationListener = exports.unregister = exports.register = void 0;
    const INJECTOR_MODULE_NAME = "Injector";
    const registered = {};
    const registrationHandlers = {};
    function register(service, implementation) {
        try {
            Logger.debug(INJECTOR_MODULE_NAME, `Registering ${service} service`);
            const serviceImplementation = implementation();
            registered[service] = serviceImplementation;
            if (service in registrationHandlers) {
                registrationHandlers[service].forEach((handler) => handler(service, serviceImplementation));
            }
            return true;
        }
        catch (error) {
            Logger.warning(INJECTOR_MODULE_NAME, `Failed to initialize ${service} service: ${error}`);
            return false;
        }
    }
    exports.register = register;
    function unregister(service) {
        delete registered[service];
    }
    exports.unregister = unregister;
    function addRegistrationListener(service, handler) {
        if (service in registrationHandlers) {
            registrationHandlers[service].push(handler);
        }
        else {
            registrationHandlers[service] = [handler];
        }
    }
    exports.addRegistrationListener = addRegistrationListener;
    function removeRegistrationListener(service, handler) {
        if (service in registrationHandlers) {
            registrationHandlers[service] = registrationHandlers[service].filter((h) => h !== handler);
        }
    }
    exports.removeRegistrationListener = removeRegistrationListener;
    function resolve(service) {
        return registered[service];
    }
    exports.resolve = resolve;
    const injectorImpl = {
        register: register,
        unregister: unregister,
        resolve: resolve,
        addRegistrationListener: addRegistrationListener,
        removeRegistrationListener: removeRegistrationListener,
    };
    exports.default = injectorImpl;
});
// All licensing information regarding this source code can be found in the LICENSES.txt file.
//# sourceMappingURL=Debugger.js.map?ts=1692867686181
define('OutSystems/ClientRuntime/modules/Injector/KnownServices',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceNames = void 0;
    var ServiceNames;
    (function (ServiceNames) {
        ServiceNames["DeviceHelperClassProvider"] = "DeviceHelperClassProvider";
        ServiceNames["ClientVariablesService"] = "ClientVariablesService";
        ServiceNames["TranslationsService"] = "TranslationsService";
        ServiceNames["LocaleService"] = "LocaleService";
        ServiceNames["EntityService"] = "EntityService";
        ServiceNames["GlobalExceptionHandler"] = "GlobalExceptionHandler";
        ServiceNames["SettingsManager"] = "SettingsManager";
        ServiceNames["AuthConfigsManager"] = "AuthConfigsManager";
        ServiceNames["Auth"] = "Auth";
        ServiceNames["HttpClient"] = "HttpClient";
        ServiceNames["UnauthenticatedHttpClient"] = "UnauthenticatedHttpClient";
        ServiceNames["DebuggerHttpClient"] = "DebuggerHttpClient";
        ServiceNames["NonDebuggerHttpClient"] = "NonDebuggerHttpClient";
        ServiceNames["NativeStatus"] = "NativeStatus";
        ServiceNames["LifecycleEventsManager"] = "LifecycleEventsManager";
        ServiceNames["Debugger"] = "Debugger";
        ServiceNames["InstrumentationFactory"] = "InstrumentationFactory";
    })(ServiceNames = exports.ServiceNames || (exports.ServiceNames = {}));
});
//# sourceMappingURL=KnownServices.js.map;
define('OutSystems/ClientRuntime/RuntimeDebuggerAPI',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BreakpointType = void 0;
    var BreakpointType;
    (function (BreakpointType) {
        BreakpointType[BreakpointType["Normal"] = 0] = "Normal";
        BreakpointType[BreakpointType["AtFunctionReturn"] = 1] = "AtFunctionReturn";
        BreakpointType[BreakpointType["BetweenAssignments"] = 2] = "BetweenAssignments";
    })(BreakpointType = exports.BreakpointType || (exports.BreakpointType = {}));
});
//# sourceMappingURL=RuntimeDebuggerAPI.js.map;
define('OutSystems/ClientRuntime/VersionDefinition',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toObject = exports.getPackageVersion = exports.registerPackage = exports.clientRuntimeKey = void 0;
    const versions = new Map();
    exports.clientRuntimeKey = "Client Runtime Packages";
    let cacheResult;
    function registerPackage(project, version) {
        cacheResult = null;
        versions.set(project, version);
    }
    exports.registerPackage = registerPackage;
    const getPackageVersion = ({ versionsMap = versions, packageKey, }) => {
        var _a;
        return (_a = versionsMap === null || versionsMap === void 0 ? void 0 : versionsMap.get(packageKey)) !== null && _a !== void 0 ? _a : null;
    };
    exports.getPackageVersion = getPackageVersion;
    function toObject() {
        if (!cacheResult) {
            const result = { "Client Runtime Packages": "" };
            versions.forEach((version, project) => {
                if (version && project) {
                    result[exports.clientRuntimeKey] += `${project}= ${version};`;
                }
            });
            cacheResult = result;
        }
        return cacheResult;
    }
    exports.toObject = toObject;
});
//# sourceMappingURL=VersionDefinition.js.map;
define('OutSystems/ClientRuntime/Debugger',["require", "exports", "./DataTypes", "./Exceptions", "./Logger", "./Model", "./modules/Injector/Injector", "./modules/Injector/KnownServices", "./Navigation", "./RuntimeDebuggerAPI", "./VersionDefinition"], function (require, exports, DataTypes_1, Exceptions, Logger, Model_1, Injector_1, KnownServices_1, Navigation, RuntimeDebuggerAPI_1, VersionDefinition) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Version = exports.DebuggerDataConverter = exports.DebuggerBase = exports.ThreadState = exports.LocalState = exports.DebugCommand = exports.BreakpointId = exports.InitializationStatus = exports.CommandType = void 0;
    const HEADER_KEYS = {
        CallContextId: "ccid",
        DebugStop: "dbg-stop",
        DebugBreakpointId: "dbg-bkp",
    };
    var CommandType;
    (function (CommandType) {
        CommandType[CommandType["StepOver"] = 0] = "StepOver";
        CommandType[CommandType["StepInto"] = 1] = "StepInto";
        CommandType[CommandType["StepOut"] = 2] = "StepOut";
        CommandType[CommandType["Continue"] = 3] = "Continue";
        CommandType[CommandType["ContinueToHere"] = 4] = "ContinueToHere";
        CommandType[CommandType["None"] = 5] = "None";
    })(CommandType = exports.CommandType || (exports.CommandType = {}));
    var InitializationStatus;
    (function (InitializationStatus) {
        InitializationStatus[InitializationStatus["Unprepared"] = 0] = "Unprepared";
        InitializationStatus[InitializationStatus["WaitingForClient"] = 1] = "WaitingForClient";
        InitializationStatus[InitializationStatus["Prepared"] = 2] = "Prepared";
    })(InitializationStatus = exports.InitializationStatus || (exports.InitializationStatus = {}));
    class BreakpointId {
        constructor(moduleKey = null, objectKey = null, compoundKey = null, debuggerHash = null) {
            this.moduleKey = moduleKey;
            this.objectKey = objectKey;
            this.compoundKey = compoundKey;
            this.debuggerHash = debuggerHash;
        }
        init(breakpointIdStr) {
            if (!breakpointIdStr) {
                return;
            }
            const parts = breakpointIdStr.split(BreakpointId.SeparatorChar);
            this.moduleKey = parts[0];
            this.objectKey = parts[1];
            this.compoundKey = parts.length > 2 && parts[2] ? parts[2] : null;
            this.debuggerHash = parts.length > 3 && parts[3] ? parts[3] : null;
        }
        static parse(breakpointIdStr) {
            if (!breakpointIdStr) {
                return null;
            }
            try {
                const breakpoint = new BreakpointId();
                breakpoint.init(breakpointIdStr);
                return breakpoint;
            }
            catch (error) {
                return null;
            }
        }
        equals(b1) {
            if (!b1) {
                return false;
            }
            return b1.moduleKey === this.moduleKey && b1.objectKey === this.objectKey;
        }
        toString(fullKey = false) {
            var _a;
            if (!fullKey) {
                return this.moduleKey + BreakpointId.SeparatorChar + ((_a = this.objectKey) !== null && _a !== void 0 ? _a : "");
            }
            else {
                return (this.moduleKey +
                    BreakpointId.SeparatorChar +
                    (this.objectKey || "") +
                    BreakpointId.SeparatorChar +
                    (this.compoundKey || "") +
                    BreakpointId.SeparatorChar +
                    (this.debuggerHash || ""));
            }
        }
    }
    BreakpointId.SeparatorChar = ":";
    exports.BreakpointId = BreakpointId;
    class DebugCommand {
        constructor(_commandType = CommandType.None, _stackLevel = -1) {
            this._commandType = _commandType;
            this._stackLevel = _stackLevel;
        }
        resetCommandState() {
            this._commandType = CommandType.None;
            this._stackLevel = -1;
        }
        get commandType() {
            return this._commandType;
        }
        set commandType(stepType) {
            this._commandType = stepType;
        }
        get stackLevel() {
            return this._stackLevel;
        }
        set stackLevel(stackLevel) {
            this._stackLevel = stackLevel;
        }
    }
    exports.DebugCommand = DebugCommand;
    class LocalState {
        constructor(elementKey, moduleName, elementName, elementType, varBag) {
            this.elementKey = elementKey;
            this.moduleName = moduleName;
            this.elementName = elementName;
            this.elementType = elementType;
            this.varBag = varBag;
            this.currentBreakpoint = null;
            this.previousBreakpoint = null;
            this.breakpointType = null;
            this.extraInfo = null;
            this.functionLeft = "";
        }
        refreshLocalState(currentBreakpoint, breakpointType, extraInfo) {
            this.previousBreakpoint = this.currentBreakpoint;
            this.currentBreakpoint = currentBreakpoint;
            this.breakpointType = breakpointType;
            this.extraInfo = extraInfo;
        }
    }
    exports.LocalState = LocalState;
    class ThreadState {
        constructor() {
            this.callStack = new Array();
            this._command = new DebugCommand();
            this._continueToHereBreakpoint = undefined;
            this._stopImmediately = false;
        }
        pushCallOnStack(elementKey, moduleName, elementName, elementType, varBag) {
            this.callStack.push(new LocalState(elementKey, moduleName, elementName, elementType, varBag));
        }
        popCallOnStack() {
            const lastState = this.callStack.pop();
            const peekLastCallOnStack = this.peekLastCallOnStack();
            if (this.callStack.length > 0 && peekLastCallOnStack) {
                peekLastCallOnStack.functionLeft = lastState === null || lastState === void 0 ? void 0 : lastState.elementName;
            }
            return lastState;
        }
        peekLastCallOnStack() {
            if (this.callStack.length <= 0) {
                return;
            }
            return this.callStack[this.callStack.length - 1];
        }
        getCallOnStack(position) {
            if (position < 0 || position >= this.callStack.length) {
                debugMessage("The received stack level is not valid. Received '" +
                    position +
                    "', current thread stack length '" +
                    this.callStack.length +
                    "'");
                return;
            }
            return this.callStack[position];
        }
        refreshLastCallOnStack(currentBreakpoint, breakpointType, extraInfo) {
            var _a;
            (_a = this.peekLastCallOnStack()) === null || _a === void 0 ? void 0 : _a.refreshLocalState(currentBreakpoint, breakpointType, extraInfo);
        }
        set command(command) {
            this._command = command;
        }
        get command() {
            return this._command;
        }
        get stackLevel() {
            return this.callStack.length;
        }
        get stopImmediately() {
            return this._stopImmediately;
        }
        set stopImmediately(value) {
            this._stopImmediately = value || false;
        }
        get continueToBreakpoint() {
            return this._continueToHereBreakpoint;
        }
        set continueToBreakpoint(value) {
            this._continueToHereBreakpoint = value;
        }
        get threadStartName() {
            return this._threadStartName || "";
        }
        set threadStartName(value) {
            this._threadStartName = value;
        }
        getThreadStack() {
            return this.callStack.map((localState) => {
                var _a;
                return {
                    currentBreakpoint: localState.currentBreakpoint !== null && localState.currentBreakpoint !== undefined
                        ? localState.currentBreakpoint.toString(true)
                        : null,
                    previousBreakpoint: localState.previousBreakpoint !== null && localState.previousBreakpoint !== undefined
                        ? localState.previousBreakpoint.toString(true)
                        : null,
                    breakpointType: (_a = localState.breakpointType) !== null && _a !== void 0 ? _a : RuntimeDebuggerAPI_1.BreakpointType.Normal,
                    extraInfo: localState.extraInfo,
                    elementKey: localState.elementKey !== null && localState.elementKey !== undefined
                        ? localState.elementKey.toString(true)
                        : null,
                    elementName: localState.elementName,
                    elementType: localState.elementType,
                    functionLeft: localState.functionLeft,
                    moduleName: localState.moduleName,
                };
            });
        }
    }
    exports.ThreadState = ThreadState;
    function debugMessage(message) {
        Logger.debug("Debugger", message);
    }
    const Indexer = /^([0-9]+)$/;
    const UnsuportedIndexer = /\[[^\]]*[^0-9\]]+[^\]]*\]/;
    const FunctionReturnVariablePath = "$return";
    class DebuggerBase {
        constructor() {
            this.isInSession = false;
            this.breakpoints = new Map();
            this.callContexts = new Map();
            this.initializationStatus = InitializationStatus.Unprepared;
            this._pauseOnAllExceptions = false;
            this.exceptionsMap = new Map();
            this.pausedOnAnException = false;
            this.allowedModules = new Map();
        }
        get BreakpointType() {
            return RuntimeDebuggerAPI_1.BreakpointType;
        }
        isPausedOnException() {
            return this.pausedOnAnException;
        }
        get version() {
            return 3;
        }
        isSessionActive() {
            return this.isInSession;
        }
        startSession() {
            if (this.isInSession) {
                debugMessage("Debugger is already in session");
                return;
            }
            if (this.pendingInitializationHandler) {
                this.initializationStatus = InitializationStatus.Prepared;
                this.pendingInitializationHandler();
                this.pendingInitializationHandler = null;
            }
            this.isInSession = true;
            const debuggerHttpClient = Injector_1.default.resolve(KnownServices_1.ServiceNames.DebuggerHttpClient);
            if (debuggerHttpClient) {
                Injector_1.default.register(KnownServices_1.ServiceNames.HttpClient, () => debuggerHttpClient);
            }
        }
        endSession() {
            if (!this.isInSession) {
                debugMessage("Can't end an nonexisting session");
                return;
            }
            this.isInSession = false;
            const nonDebuggerHttpClient = Injector_1.default.resolve(KnownServices_1.ServiceNames.NonDebuggerHttpClient);
            if (nonDebuggerHttpClient) {
                Injector_1.default.register(KnownServices_1.ServiceNames.HttpClient, () => nonDebuggerHttpClient);
            }
        }
        addBreakpoint(breakpointId) {
            if (BreakpointId.parse(breakpointId) === null) {
                debugMessage(`Cannot convert '${breakpointId}' to a BreakpointId`);
                return;
            }
            if (this.breakpoints.get(breakpointId)) {
                debugMessage(`Breakpoint with id '${breakpointId}' already registered`);
                return;
            }
            this.breakpoints.set(breakpointId, true);
        }
        addBreakpoints(breakpointIds) {
            breakpointIds.forEach((bi) => this.addBreakpoint(bi));
        }
        allowBreakpointsFromModule(key) {
            if (this.allowedModules.get(key)) {
                debugMessage(`Application with key '${key}' is already allowed`);
                return;
            }
            this.allowedModules.set(key, true);
        }
        removeBreakpoint(breakpointId) {
            if (BreakpointId.parse(breakpointId) === null) {
                debugMessage(`Cannot convert '${breakpointId}' to a BreakpointId`);
                return;
            }
            if (!this.breakpoints.delete(breakpointId)) {
                debugMessage(`Breakpoint with id '${breakpointId}'  isn't registered`);
            }
        }
        clearBreakpoints() {
            this.breakpoints.clear();
        }
        push(breakpointIdStr, moduleName, elementName, elementType, callContextId, varBag) {
            if (!this.isInSession) {
                return;
            }
            const breakpointId = BreakpointId.parse(breakpointIdStr);
            if (!breakpointId) {
                debugMessage(`Error when parsing breakpointId '${breakpointIdStr}'`);
                return;
            }
            let threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                threadState = new ThreadState();
                this.callContexts.set(callContextId, threadState);
            }
            threadState.pushCallOnStack(breakpointId, moduleName, elementName, elementType, varBag);
        }
        pop(breakpointIdStr, callContextId) {
            if (!this.isInSession) {
                return;
            }
            const breakpointId = BreakpointId.parse(breakpointIdStr);
            if (!breakpointId) {
                debugMessage(`Error when parsing breakpointId '${breakpointIdStr}'`);
                return;
            }
            const threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                debugMessage(`There is no action to end to callContextId '${callContextId.toString()}'`);
                return;
            }
            const lastVal = threadState.peekLastCallOnStack();
            if (!(lastVal === null || lastVal === void 0 ? void 0 : lastVal.elementKey.equals(breakpointId))) {
                debugMessage(`Action to end didn't match to current running action. Running action key: '${lastVal === null || lastVal === void 0 ? void 0 : lastVal.elementKey.toString()}', tried to end: '${breakpointId.toString()}'`);
                return;
            }
            threadState.popCallOnStack();
            if (threadState.stackLevel <= 0) {
                this.callContexts.delete(callContextId);
                this.exceptionsMap.delete(callContextId);
            }
        }
        stepInto(callContextId) {
            this.fillCommandByCallContextId(callContextId, CommandType.StepInto);
        }
        stepOver(callContextId) {
            this.fillCommandByCallContextId(callContextId, CommandType.StepOver);
        }
        stepOut(callContextId) {
            this.fillCommandByCallContextId(callContextId, CommandType.StepOut);
        }
        continue(callContextId) {
            this.fillCommandByCallContextId(callContextId, CommandType.Continue);
        }
        continueToHere(breakpointIdStr, callContextId) {
            const breakpointId = BreakpointId.parse(breakpointIdStr);
            if (!breakpointId) {
                debugMessage(`Error when parsing breakpointId '${breakpointIdStr}'`);
                return;
            }
            this.fillCommandByCallContextId(callContextId, CommandType.ContinueToHere);
            const threadState = this.callContexts.get(callContextId);
            if (threadState) {
                threadState.continueToBreakpoint = breakpointId;
            }
        }
        pauseOnAllExceptions(isEnabled) {
            this._pauseOnAllExceptions = isEnabled;
        }
        fillCommandByCallContextId(callContextId, commandType) {
            if (!this.isInSession) {
                debugMessage("Cannot preform debug actions out of a session context");
                return;
            }
            const threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                debugMessage(`No match for callContextId '${callContextId}'`);
                return;
            }
            threadState.command.commandType = commandType;
            threadState.command.stackLevel = threadState.stackLevel;
        }
        handleFunctionCall(functionCaller, resultType, callContextId) {
            var _a;
            const value = functionCaller();
            if (!this.isInSession) {
                return value;
            }
            const threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                debugMessage(`There is no callContext registered with Id '${callContextId}'`);
                return value;
            }
            const localState = threadState.getCallOnStack(threadState.stackLevel - 1);
            const breakpoint = (_a = localState === null || localState === void 0 ? void 0 : localState.currentBreakpoint) !== null && _a !== void 0 ? _a : localState === null || localState === void 0 ? void 0 : localState.elementKey;
            if (breakpoint) {
                this.handleBreakpoint(breakpoint.toString(true), callContextId, RuntimeDebuggerAPI_1.BreakpointType.AtFunctionReturn, DebuggerDataConverter.to(value, localState === null || localState === void 0 ? void 0 : localState.varBag.callContext, null, null, resultType));
            }
            return value;
        }
        handleBreakpoint(breakpointIdStr, callContextId, breakpointType = RuntimeDebuggerAPI_1.BreakpointType.Normal, extraInfo) {
            if (!this.isInSession) {
                return true;
            }
            const breakpointId = BreakpointId.parse(breakpointIdStr);
            if (!breakpointId) {
                debugMessage(`Error when parsing breakpointId '${breakpointIdStr}'`);
                return true;
            }
            const threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                debugMessage(`Trying to handle breakpoint with id '${breakpointIdStr}', 
                but there is no callContext registered with Id '${callContextId}'`);
                return true;
            }
            threadState.refreshLastCallOnStack(breakpointId, breakpointType, extraInfo);
            if (!this.allowedModules.get(breakpointId.moduleKey)) {
                Logger.debug("Debugger", `Skipping breakpoint '${breakpointIdStr}' because breakpoints from app with key '${breakpointId.moduleKey}' are to be ignored.`);
                return true;
            }
            if (threadState.stopImmediately ||
                (this.breakpoints.get(breakpointIdStr) &&
                    threadState.command.commandType !== CommandType.ContinueToHere &&
                    breakpointType === RuntimeDebuggerAPI_1.BreakpointType.Normal)) {
                threadState.stopImmediately = false;
                this.resetStateAndCallDebugger(threadState, callContextId);
                return true;
            }
            switch (threadState.command.commandType) {
                case CommandType.StepInto:
                    this.resetStateAndCallDebugger(threadState, callContextId);
                    break;
                case CommandType.StepOut:
                    if (threadState.stackLevel < threadState.command.stackLevel) {
                        this.resetStateAndCallDebugger(threadState, callContextId);
                    }
                    break;
                case CommandType.StepOver:
                    if (threadState.stackLevel <= threadState.command.stackLevel &&
                        breakpointType === RuntimeDebuggerAPI_1.BreakpointType.Normal) {
                        this.resetStateAndCallDebugger(threadState, callContextId);
                    }
                    break;
                case CommandType.ContinueToHere:
                    if (breakpointId.equals(threadState.continueToBreakpoint) && breakpointType === RuntimeDebuggerAPI_1.BreakpointType.Normal) {
                        threadState.continueToBreakpoint = undefined;
                        this.resetStateAndCallDebugger(threadState, callContextId);
                    }
                    break;
                default:
                    break;
            }
            return true;
        }
        resetStateAndCallDebugger(threadState, callContextId) {
            threadState.command.resetCommandState();
            this.callDebugger(callContextId);
        }
        handleException(error, callContextId) {
            if (!this.isInSession) {
                return;
            }
            if (Exceptions.isSystem(error)) {
                return;
            }
            const threadState = this.callContexts.get(callContextId);
            const errorMessage = Exceptions.getMessage(error);
            if (!threadState) {
                debugMessage(`Trying to handle Exception with message '${errorMessage}', but there is no callContext registered with Id '${callContextId}'`);
                return;
            }
            const registeredError = this.exceptionsMap.get(callContextId);
            if (error === registeredError) {
                return;
            }
            this.exceptionsMap.set(callContextId, error);
            if (this._pauseOnAllExceptions) {
                this.pausedOnAnException = true;
                try {
                    this.callDebugger(callContextId);
                }
                finally {
                    this.pausedOnAnException = false;
                }
            }
        }
        getExceptionMessage(callContextId) {
            const threadState = this.getThreadState(callContextId);
            if (!threadState) {
                return;
            }
            const exception = this.exceptionsMap.get(callContextId);
            if (exception === undefined) {
                debugMessage(`There is no Exception associated to callContext with Id '${callContextId}'`);
                return;
            }
            return Exceptions.getMessage(exception);
        }
        getThreadState(callContextId) {
            if (!this.isInSession) {
                debugMessage("Cannot perform debug actions out of a session context");
                return;
            }
            const threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                debugMessage(`There is no callContext registered with Id '${callContextId}'`);
                return;
            }
            return threadState;
        }
        getThreadStack(callContextId) {
            const threadState = this.getThreadState(callContextId);
            if (threadState) {
                return threadState.getThreadStack();
            }
        }
        parse(breakpointIdStr) {
            return BreakpointId.parse(breakpointIdStr);
        }
        initialize(waitForClient) {
            switch (this.initializationStatus) {
                case InitializationStatus.WaitingForClient:
                    return Promise.reject("Debugger already waiting for client initialization");
                case InitializationStatus.Prepared:
                    return Promise.reject("Debugger already initialized");
                default:
                    break;
            }
            if (waitForClient === undefined) {
                waitForClient = !!Navigation.getSearchParameterValue("_waitForClient");
            }
            Injector_1.default.register(KnownServices_1.ServiceNames.Debugger, () => this);
            return new Promise((resolve, reject) => {
                if (waitForClient && !this.isInSession) {
                    this.initializationStatus = InitializationStatus.WaitingForClient;
                    this.pendingInitializationHandler = resolve;
                }
                else {
                    this.initializationStatus = InitializationStatus.Prepared;
                    resolve();
                }
            });
        }
        registerMetaInfo(variablesMapping) {
            if (!this.metaInfoMap) {
                this.metaInfoMap = new Map();
            }
            for (const variableKey in variablesMapping) {
                if (variablesMapping.hasOwnProperty(variableKey) && !this.metaInfoMap.get(variableKey)) {
                    this.metaInfoMap.set(variableKey, variablesMapping[variableKey]);
                }
            }
        }
        getRuntimeExpression(variableKey, actionKey) {
            if (!this.metaInfoMap) {
                debugMessage("MetaInfo not registered yet.");
                return;
            }
            const runtimeVariable = this.metaInfoMap.get(variableKey);
            if (!runtimeVariable) {
                debugMessage(`There is no mapping defined for variable with the key '${variableKey}', that was evaluated in the context of the action with the key '${actionKey}'.`);
                return;
            }
            return runtimeVariable;
        }
        innerEvaluateVariable(callContextId, stackLevel, actionKey, variableKey) {
            const threadState = this.getThreadState(callContextId);
            if (!threadState) {
                return;
            }
            const localState = threadState.getCallOnStack(stackLevel);
            if (!localState) {
                return;
            }
            const runtimeVariable = this.getRuntimeExpression(variableKey, actionKey);
            if (!runtimeVariable) {
                debugMessage(`Failed to get runtime variable expression. CallContextId '${callContextId}', stackLevel '${stackLevel}'`);
                return;
            }
            let result = undefined;
            try {
                result = runtimeVariable.getter(localState.varBag, localState.varBag.idService);
            }
            catch (e) {
            }
            finally {
                if (result === undefined) {
                    debugMessage(`Couldn't evaluate variable with key '${variableKey}', that was evaluated in the context of the action with key: '${actionKey}' stackLevel: '${stackLevel}' callContextId: '${callContextId}'.`);
                }
            }
            return result;
        }
        splitPath(path) {
            if (UnsuportedIndexer.test(path)) {
                return undefined;
            }
            return !!path
                ? path
                    .split(/[.\[\]]/)
                    .filter((s) => s !== "")
                    .slice(1)
                : undefined;
        }
        evaluateVariable(callContextId, stackLevel, actionKey, variableKey, path, depth) {
            if (variableKey === "" && path === FunctionReturnVariablePath) {
                const threadState = this.getThreadState(callContextId);
                if (!threadState) {
                    return;
                }
                const localState = threadState.getCallOnStack(stackLevel);
                if (!localState) {
                    return;
                }
                return localState.extraInfo;
            }
            const result = this.innerEvaluateVariable(callContextId, stackLevel, actionKey, variableKey);
            if (result === undefined) {
                return;
            }
            if (UnsuportedIndexer.test(path)) {
                return undefined;
            }
            const threadState = this.callContexts.get(callContextId);
            const localState = threadState === null || threadState === void 0 ? void 0 : threadState.getCallOnStack(stackLevel);
            const runtimeVariable = this.getRuntimeExpression(variableKey, actionKey);
            const pathArray = this.splitPath(path);
            return DebuggerDataConverter.to(result, localState === null || localState === void 0 ? void 0 : localState.varBag.callContext, pathArray, depth, runtimeVariable === null || runtimeVariable === void 0 ? void 0 : runtimeVariable.dataType);
        }
        getRequestHeaders(callContextId) {
            if (!this.isInSession) {
                return;
            }
            const threadState = this.callContexts.get(callContextId);
            if (!threadState) {
                debugMessage(`There is no callContext registered with Id '${callContextId}'`);
                return;
            }
            const headers = {};
            headers[HEADER_KEYS.CallContextId] = String(callContextId);
            const cmd = threadState.command;
            if (cmd && cmd.commandType === CommandType.StepInto) {
                headers[HEADER_KEYS.DebugStop] = "true";
            }
            else if (threadState.continueToBreakpoint && cmd.commandType === CommandType.ContinueToHere) {
                headers[HEADER_KEYS.DebugBreakpointId] = String(threadState.continueToBreakpoint);
            }
            return headers;
        }
        lookupCaseInsensitive(responseHeaders, header) {
            const targetHeader = header.toLowerCase();
            const newHeaderKey = Object.keys(responseHeaders).find((key) => key.toLowerCase() === targetHeader);
            return newHeaderKey ? responseHeaders[newHeaderKey] : undefined;
        }
        processResponseHeaders(callContextId, headers) {
            if (!this.isInSession) {
                return;
            }
            const threadState = this.getThreadState(callContextId);
            if (headers && threadState) {
                if ((this.lookupCaseInsensitive(headers, HEADER_KEYS.DebugStop) || "").toLowerCase() === "true") {
                    threadState.stopImmediately = true;
                }
                else if (this.lookupCaseInsensitive(headers, HEADER_KEYS.DebugBreakpointId)) {
                    const id = this.lookupCaseInsensitive(headers, HEADER_KEYS.DebugBreakpointId);
                    threadState.command.commandType = CommandType.ContinueToHere;
                    threadState.continueToBreakpoint = BreakpointId.parse(id);
                }
                else if (threadState.command.commandType === CommandType.StepInto) {
                    threadState.command.commandType = CommandType.Continue;
                }
            }
        }
        getThreadStartName(callContextId) {
            var _a;
            return (_a = this.getThreadState(callContextId)) === null || _a === void 0 ? void 0 : _a.threadStartName;
        }
        setThreadStartName(callContextId, threadStartName) {
            if (!this.isInSession) {
                return;
            }
            if (!this.callContexts) {
                debugMessage("No call context dictionary initialized yet");
                return;
            }
            if (!this.callContexts.get(callContextId)) {
                debugMessage("No thread state for this context id");
                return;
            }
            const callContext = this.callContexts.get(callContextId);
            if (callContext) {
                callContext.threadStartName = threadStartName;
            }
        }
    }
    exports.DebuggerBase = DebuggerBase;
    class RuntimeDebugger extends DebuggerBase {
        callDebugger(callContextId) {
            debugger;
        }
    }
    var DebuggerDataConverter;
    (function (DebuggerDataConverter) {
        const DataFetchStatusProp = "DataFetchStatus";
        const IsDataFetchedProp = "IsDataFetched";
        const HasFetchErrorProp = "HasFetchError";
        function to(value, callContext, path, depth = -1, dataType) {
            const nextDepth = Math.max(-1, (depth !== null && depth !== void 0 ? depth : 0) - 1);
            if (value instanceof DataTypes_1.GenericRecord) {
                const record = value;
                let attributes = record.getAttributes();
                if (path && path.length > 0) {
                    const currentPath = path[0];
                    path = path.slice(1);
                    if (value instanceof Model_1.DataSourceRecord) {
                        const dataSource = value;
                        if (currentPath === "HasFetchError") {
                            return to(dataSource.hasFetchErrorAttr, callContext, path, depth, DataTypes_1.DataTypes.Boolean);
                        }
                        else if (currentPath === "IsDataFetched") {
                            return to(dataSource.isDataFetchedAttr, callContext, path, depth, DataTypes_1.DataTypes.Boolean);
                        }
                    }
                    attributes = attributes.filter((attr) => attr.name === currentPath);
                    if (attributes.length === 0) {
                        debugMessage(`No attribute matching the given path '${currentPath}'.`);
                        return;
                    }
                    else {
                        const attr = attributes[0];
                        return to(record[attr.attrName], callContext, path, depth, attr.dataType);
                    }
                }
                if (depth === 0) {
                    return buildValueTypeObject(null, DataTypes_1.DataTypes.Record);
                }
                const result = {};
                for (const attr of attributes) {
                    result[attr.name] = to(record[attr.attrName], callContext, path, nextDepth, attr.dataType);
                }
                if (value instanceof Model_1.DataSourceRecord) {
                    const dataSource = value;
                    delete result[DataFetchStatusProp];
                    result[IsDataFetchedProp] = to(dataSource.isDataFetchedAttr, callContext, path, depth, DataTypes_1.DataTypes.Boolean);
                    result[HasFetchErrorProp] = to(dataSource.hasFetchErrorAttr, callContext, path, depth, DataTypes_1.DataTypes.Boolean);
                }
                return buildValueTypeObject(result, DataTypes_1.DataTypes.Record);
            }
            else if (value instanceof DataTypes_1.List) {
                const list = value;
                let listItemType = undefined;
                const getItemTypeFunc = list.constructor.getItemType;
                if (getItemTypeFunc) {
                    listItemType = list.constructor.getItemType();
                }
                const iterationContext = callContext.iterationContext;
                const rowNumber = iterationContext.getCurrentRowNumber(list);
                if (path && path.length > 0) {
                    const currentPath = path[0];
                    path = path.slice(1);
                    if (currentPath === "CurrentRowNumber") {
                        return to(rowNumber, callContext, path, depth, DataTypes_1.DataTypes.Integer);
                    }
                    else if (currentPath === "Current") {
                        return to(list.isEmpty ? list.emptyListItem : list.getItem(rowNumber), callContext, path, depth, listItemType);
                    }
                    else if (currentPath === "Empty") {
                        return to(list.isEmpty, callContext, path, depth, DataTypes_1.DataTypes.Boolean);
                    }
                    else if (currentPath === "Length") {
                        return to(list.length, callContext, path, depth, DataTypes_1.DataTypes.Integer);
                    }
                    else {
                        const indexerResult = Indexer.exec(currentPath);
                        if (indexerResult) {
                            const resultInNumber = parseInt(indexerResult[1], 10);
                            if (resultInNumber >= 0 && resultInNumber < list.length) {
                                return to(list.getItem(resultInNumber), callContext, path, depth, listItemType);
                            }
                            debugMessage(`Index out of bounds '${resultInNumber}'.`);
                            return;
                        }
                        else {
                            debugMessage(`No '${currentPath}' attribute on Type 'List'.`);
                            return;
                        }
                    }
                }
                if (depth === 0) {
                    return buildValueTypeObject(null, DataTypes_1.DataTypes.RecordList);
                }
                const result = {
                    CurrentRowNumber: to(rowNumber, callContext, path, nextDepth, DataTypes_1.DataTypes.Integer),
                    Current: to(list.isEmpty ? list.emptyListItem : list.getItem(rowNumber), callContext, path, nextDepth, listItemType),
                    Empty: to(list.isEmpty, callContext, path, nextDepth, DataTypes_1.DataTypes.Boolean),
                    Length: to(list.length, callContext, path, nextDepth, DataTypes_1.DataTypes.Integer),
                };
                for (let i = 0; i < list.length; i++) {
                    result["[" + i + "]"] = to(list.getItem(i), callContext, path, nextDepth, listItemType);
                }
                return buildValueTypeObject(result, DataTypes_1.DataTypes.RecordList);
            }
            else if (value instanceof Model_1.WidgetRecord) {
                if (depth === 0) {
                    return buildValueTypeObject(null, DataTypes_1.DataTypes.Record);
                }
                const record = value;
                if (path && path.length > 0) {
                    const currentPath = path[0];
                    path = path.slice(1);
                    if (currentPath === "Id") {
                        return to(record.idAttr, callContext, path, depth, DataTypes_1.DataTypes.Text);
                    }
                    else if (record instanceof Model_1.ValidationWidgetRecord) {
                        if (currentPath === "Valid") {
                            return to(record.validAttr, callContext, path, depth, DataTypes_1.DataTypes.Boolean);
                        }
                        else if (currentPath === "ValidationMessage") {
                            return to(record.validationMessageAttr, callContext, path, depth, DataTypes_1.DataTypes.Text);
                        }
                    }
                    debugMessage(`No attribute matching the given path '${currentPath}'.`);
                    return;
                }
                const result = {
                    Id: to(record.idAttr, callContext, path, nextDepth, DataTypes_1.DataTypes.Text),
                };
                if (record instanceof Model_1.ValidationWidgetRecord) {
                    result.Valid = to(record.validAttr, callContext, path, nextDepth, DataTypes_1.DataTypes.Boolean);
                    result.ValidationMessage = to(record.validationMessageAttr, callContext, path, nextDepth, DataTypes_1.DataTypes.Text);
                }
                return buildValueTypeObject(result, DataTypes_1.DataTypes.Record);
            }
            else if (dataType !== undefined) {
                if (path && path.length > 0) {
                    debugMessage(`Cannot perform a inner evaluation to a Basic Type. Trying to evaluate '${path[0]}' for a variable of type '${DataTypes_1.DataTypes[dataType]}'.`);
                    return;
                }
                return basicTypeToDebuggerData(value, dataType);
            }
            else {
                debugMessage(`Variable Type didn't match any case. ${typeof value}`);
                return;
            }
        }
        DebuggerDataConverter.to = to;
        function basicTypeToDebuggerData(value, dataType) {
            switch (dataType) {
                case DataTypes_1.DataTypes.Integer:
                case DataTypes_1.DataTypes.Text:
                case DataTypes_1.DataTypes.PhoneNumber:
                case DataTypes_1.DataTypes.Email:
                case DataTypes_1.DataTypes.Boolean:
                    return buildValueTypeObject(value, dataType);
                case DataTypes_1.DataTypes.LongInteger:
                case DataTypes_1.DataTypes.Decimal:
                case DataTypes_1.DataTypes.Currency:
                    return buildValueTypeObject(value.toString(), dataType);
                case DataTypes_1.DataTypes.Date:
                    return buildValueTypeObject(value.toISODate(), dataType);
                case DataTypes_1.DataTypes.DateTime:
                    return buildValueTypeObject(value.toString(), dataType);
                case DataTypes_1.DataTypes.Time:
                    return buildValueTypeObject(value.toISOTime(), dataType);
                case DataTypes_1.DataTypes.BinaryData:
                    return buildValueTypeObject(value.length, dataType);
                case DataTypes_1.DataTypes.Object:
                    return buildValueTypeObject(null, dataType);
                case DataTypes_1.DataTypes.Record:
                    debugMessage("Record is not a basic type");
                    return;
                case DataTypes_1.DataTypes.RecordList:
                    debugMessage("RecordList is not a basic type");
                    return;
                default:
                    debugMessage(`Unknown data type ${dataType}`);
                    return;
            }
        }
        function buildValueTypeObject(value, dataType) {
            if (value === undefined) {
                value = null;
            }
            return {
                value,
                type: DataTypes_1.DataTypes[dataType],
            };
        }
    })(DebuggerDataConverter = exports.DebuggerDataConverter || (exports.DebuggerDataConverter = {}));
    exports.Version = "5.95.5";
    VersionDefinition.registerPackage("client-runtime-core", exports.Version);
    const globalObj = typeof window !== "undefined" ? window : global;
    globalObj.OutSystemsDebugger = new RuntimeDebugger();
});
//# sourceMappingURL=Debugger.js.map;
