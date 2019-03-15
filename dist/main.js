/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Analyzer/LexicalAnalyzer.ts":
/*!*****************************************!*\
  !*** ./src/Analyzer/LexicalAnalyzer.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LexicalAnalyzer; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");

class LexicalAnalyzer {
    constructor(input) {
        this.setInput(input);
    }
    setInput(input) {
        this.input = input;
    }
    init() {
        this.index = 0;
        this.next();
        this.scan();
    }
    next() {
        if (this.index >= this.input.length) {
            this.look = '\0';
        }
        else {
            this.look = this.input[this.index];
            this.index++;
        }
    }
    scan() {
        while (this.look == ' ' || this.look == '\n') {
            this.next();
        }
        this.token = '';
        this.position = this.index - 1;
        if (this.lookIsNumber()) {
            do {
                this.token += this.look;
                this.next();
            } while (this.lookIsNumber());
            this.kind = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["NUMBER"];
        }
        else if (this.lookIsCharacter()) {
            do {
                this.token += this.look;
                this.next();
            } while ((this.lookIsCharacter()));
            this.kind = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["WORD"];
        }
        else if (this.look != '\0') {
            this.token = this.look;
            this.next();
            this.kind = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["SYMBOL"];
        }
        else {
            this.kind = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["NOTHING"];
        }
    }
    lookIsNumber() {
        let ascii = this.look.charCodeAt(0);
        return ascii > 47 && ascii < 58;
    }
    lookIsCharacter() {
        let ascii = this.look.charCodeAt(0);
        return (ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 123);
    }
}


/***/ }),

/***/ "./src/Compiler.ts":
/*!*************************!*\
  !*** ./src/Compiler.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Compiler; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.ts");

class Compiler {
    constructor(vm) {
        this.vm = vm;
    }
    compile(counter_adr) {
        while (this.analyzer.kind == _utils_constants__WEBPACK_IMPORTED_MODULE_0__["WORD"]) {
            if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["FORWARD"].includes(this.analyzer.token)) {
                this.analyzer.scan();
                this.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_FD"]);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["LEFT"].includes(this.analyzer.token)) {
                this.analyzer.scan();
                this.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_LT"]);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["RIGHT"].includes(this.analyzer.token)) {
                this.analyzer.scan();
                this.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_RT"]);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["REPEAT"].includes(this.analyzer.token)) {
                this.analyzer.scan();
                this.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_SET"]);
                this.poke(counter_adr);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
                this.analyzer.scan();
                let body_adr = this.vm.adr;
                this.compile(counter_adr - 1);
                this.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_LOOP"]);
                this.poke(counter_adr);
                this.poke(body_adr);
                this.analyzer.scan();
            }
            else {
                break;
            }
        }
    }
    reset() {
        this.vm.reset();
    }
    poke(code) {
        this.vm.mem[this.vm.adr] = code;
        this.vm.adr++;
    }
}


/***/ }),

/***/ "./src/Interpreter.ts":
/*!****************************!*\
  !*** ./src/Interpreter.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Interpreter; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.ts");

class Interpreter {
    constructor(analyzer, turtle) {
        this.analyzer = analyzer;
        this.turtle = turtle;
    }
    interpret() {
        while (this.analyzer.kind != _utils_constants__WEBPACK_IMPORTED_MODULE_0__["NOTHING"]) {
            if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["FORWARD"].includes(this.analyzer.token)) {
                this.analyzer.scan();
                this.turtle.forward(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["LEFT"].includes(this.analyzer.token)) {
                this.analyzer.scan();
                this.turtle.left(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["RIGHT"].includes(this.analyzer.token)) {
                this.analyzer.scan();
                this.turtle.right(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["REPEAT"].includes(this.analyzer.token)) {
                this.analyzer.scan();
                let count = parseInt(this.analyzer.token);
                this.analyzer.scan();
                let token = this.analyzer.token;
                this.doCycle(token, count);
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["NUMBER"] == this.analyzer.kind) {
                let count = parseInt(this.analyzer.token);
                this.analyzer.scan();
                let method = this.analyzer.token;
                this.analyzer.scan();
                if (method == _utils_constants__WEBPACK_IMPORTED_MODULE_0__["REPEAT_STAR"]) {
                    let token = this.analyzer.token;
                    this.doCycle(token, count);
                }
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["CLEAR"].includes(this.analyzer.token)) {
                this.turtle.clear();
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].includes(this.analyzer.token)) {
                let rgb = [0, 0, 0];
                for (let i = 0; i < 3; i++) {
                    this.analyzer.scan();
                    rgb[i] = parseInt(this.analyzer.token);
                }
                this.turtle.color(rgb[0], rgb[1], rgb[2]);
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["POINT"].includes(this.analyzer.token)) {
                this.analyzer.scan();
                let r = parseInt(this.analyzer.token);
                this.turtle.point(r);
                this.analyzer.scan();
            }
            else {
                break;
            }
        }
    }
    doCycle(token, count) {
        if (token == '[') {
            this.analyzer.scan();
            console.log(this.analyzer.token);
            let start = this.analyzer.position;
            while (count > 0) {
                this.analyzer.index = start;
                this.analyzer.next();
                this.analyzer.scan();
                this.interpret();
                count -= 1;
            }
        }
        if (token == ']') {
            this.analyzer.scan();
        }
    }
}


/***/ }),

/***/ "./src/SyntacticalTree/Block.ts":
/*!**************************************!*\
  !*** ./src/SyntacticalTree/Block.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Block; });
/* harmony import */ var _Syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Syntax */ "./src/SyntacticalTree/Syntax.ts");

class Block extends _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(...items) {
        super();
        this.items = items;
    }
    add(item) {
        this.items.push(item);
    }
    execute(turtle) {
        this.items.forEach(item => item.execute(turtle));
    }
    generate(vm) {
        this.items.forEach(item => item.generate(vm));
    }
    optimized(vm) {
        this.items.forEach(item => item.optimized(vm));
    }
    translate(depth) {
        let tabs = _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].tabs(depth);
        let res = '';
        this.items.forEach(item => res += `${tabs}${item.translate(depth)}<br>`);
        return res;
    }
}


/***/ }),

/***/ "./src/SyntacticalTree/Const.ts":
/*!**************************************!*\
  !*** ./src/SyntacticalTree/Const.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Const; });
/* harmony import */ var _Syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Syntax */ "./src/SyntacticalTree/Syntax.ts");

class Const extends _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(value) {
        super();
        this.value = value;
    }
    generate(vm) {
        vm.poke(this.value);
    }
    execute(turtle) {
    }
    translate(depth) {
        return `${_Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].tabs(depth)}${this.value}`;
    }
    optimized(vm) {
        this.generate(vm);
    }
}


/***/ }),

/***/ "./src/SyntacticalTree/Fd.ts":
/*!***********************************!*\
  !*** ./src/SyntacticalTree/Fd.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fd; });
/* harmony import */ var _TurtleCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TurtleCommand */ "./src/SyntacticalTree/TurtleCommand.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");


class Fd extends _TurtleCommand__WEBPACK_IMPORTED_MODULE_0__["default"] {
    execute(turtle) {
        turtle.forward(this.param.value);
    }
    generate(vm) {
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_FD"]);
        this.param.generate(vm);
    }
    translate(depth) {
        return `dopredu(${this.param.value});`;
    }
    optimized(vm) {
        this.generate(vm);
    }
}


/***/ }),

/***/ "./src/SyntacticalTree/Lt.ts":
/*!***********************************!*\
  !*** ./src/SyntacticalTree/Lt.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lt; });
/* harmony import */ var _TurtleCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TurtleCommand */ "./src/SyntacticalTree/TurtleCommand.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");


class Lt extends _TurtleCommand__WEBPACK_IMPORTED_MODULE_0__["default"] {
    execute(turtle) {
        turtle.left(this.param.value);
    }
    generate(vm) {
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_LT"]);
        this.param.generate(vm);
    }
    translate(depth) {
        return `dolava(${this.param.value});`;
    }
    optimized(vm) {
        this.generate(vm);
    }
}


/***/ }),

/***/ "./src/SyntacticalTree/Repeat.ts":
/*!***************************************!*\
  !*** ./src/SyntacticalTree/Repeat.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Repeat; });
/* harmony import */ var _Syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Syntax */ "./src/SyntacticalTree/Syntax.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");


class Repeat extends _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(count, body) {
        super();
        this.count = count;
        this.body = body;
    }
    execute(turtle) {
        for (let i = 0; i < this.count.value; i++) {
            this.body.execute(turtle);
        }
    }
    generate(vm) {
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_SET"]);
        vm.poke(_Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr);
        this.count.generate(vm);
        _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr--;
        let loop_body = vm.adr;
        this.body.generate(vm);
        _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr++;
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_LOOP"]);
        vm.poke(_Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr);
        vm.poke(loop_body);
    }
    optimized(vm) {
        if (this.count.value == 0 || this.body.items.length == 0)
            return;
        if (this.count.value == 1 || this.body.items.length == 1) {
            this.body.optimized(vm);
            return;
        }
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_SET"]);
        vm.poke(_Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr);
        this.count.optimized(vm);
        _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr--;
        let loop_body = vm.adr;
        this.body.optimized(vm);
        _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr++;
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_LOOP"]);
        vm.poke(_Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr);
        vm.poke(loop_body);
    }
    translate(depth) {
        let tabs = _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].tabs(depth);
        let iter = _utils_constants__WEBPACK_IMPORTED_MODULE_1__["REPEAT_ABC"][depth];
        return `for (int ${iter} = 0; ${iter} < ${this.count.value}; ${iter}++) {<br>
        ${this.body.translate(depth + 1)}${tabs}}`;
    }
}


/***/ }),

/***/ "./src/SyntacticalTree/Rt.ts":
/*!***********************************!*\
  !*** ./src/SyntacticalTree/Rt.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rt; });
/* harmony import */ var _TurtleCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TurtleCommand */ "./src/SyntacticalTree/TurtleCommand.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");


class Rt extends _TurtleCommand__WEBPACK_IMPORTED_MODULE_0__["default"] {
    execute(turtle) {
        turtle.right(this.param.value);
    }
    generate(vm) {
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_RT"]);
        this.param.generate(vm);
    }
    translate(depth) {
        return `doprava(${this.param.value});`;
    }
    optimized(vm) {
        this.generate(vm);
    }
}


/***/ }),

/***/ "./src/SyntacticalTree/Syntax.ts":
/*!***************************************!*\
  !*** ./src/SyntacticalTree/Syntax.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Syntax; });
class Syntax {
    static tabs(depth) {
        let res = '';
        for (let i = 0; i < depth; i++) {
            res += '&emsp;';
        }
        return res;
    }
}


/***/ }),

/***/ "./src/SyntacticalTree/TurtleCommand.ts":
/*!**********************************************!*\
  !*** ./src/SyntacticalTree/TurtleCommand.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TurtleCommand; });
/* harmony import */ var _Syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Syntax */ "./src/SyntacticalTree/Syntax.ts");

class TurtleCommand extends _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(param) {
        super();
        this.param = param;
    }
}


/***/ }),

/***/ "./src/SyntacticalTree/parser.ts":
/*!***************************************!*\
  !*** ./src/SyntacticalTree/parser.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Block */ "./src/SyntacticalTree/Block.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _Fd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fd */ "./src/SyntacticalTree/Fd.ts");
/* harmony import */ var _Const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Const */ "./src/SyntacticalTree/Const.ts");
/* harmony import */ var _Lt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lt */ "./src/SyntacticalTree/Lt.ts");
/* harmony import */ var _Rt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Rt */ "./src/SyntacticalTree/Rt.ts");
/* harmony import */ var _Repeat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Repeat */ "./src/SyntacticalTree/Repeat.ts");







const parse = (analyzer) => {
    let result = new _Block__WEBPACK_IMPORTED_MODULE_0__["default"]();
    while (analyzer.kind == _utils_constants__WEBPACK_IMPORTED_MODULE_1__["WORD"]) {
        if (_utils_constants__WEBPACK_IMPORTED_MODULE_1__["FORWARD"].includes(analyzer.token)) {
            analyzer.scan();
            result.add(new _Fd__WEBPACK_IMPORTED_MODULE_2__["default"](new _Const__WEBPACK_IMPORTED_MODULE_3__["default"](parseInt(analyzer.token))));
            analyzer.scan();
        }
        else if (_utils_constants__WEBPACK_IMPORTED_MODULE_1__["LEFT"].includes(analyzer.token)) {
            analyzer.scan();
            result.add(new _Lt__WEBPACK_IMPORTED_MODULE_4__["default"](new _Const__WEBPACK_IMPORTED_MODULE_3__["default"](parseInt(analyzer.token))));
            analyzer.scan();
        }
        else if (_utils_constants__WEBPACK_IMPORTED_MODULE_1__["RIGHT"].includes(analyzer.token)) {
            analyzer.scan();
            result.add(new _Rt__WEBPACK_IMPORTED_MODULE_5__["default"](new _Const__WEBPACK_IMPORTED_MODULE_3__["default"](parseInt(analyzer.token))));
            analyzer.scan();
        }
        else if (_utils_constants__WEBPACK_IMPORTED_MODULE_1__["REPEAT"].includes(analyzer.token)) {
            analyzer.scan();
            let n = parseInt(analyzer.token);
            analyzer.scan();
            analyzer.scan();
            result.add(new _Repeat__WEBPACK_IMPORTED_MODULE_6__["default"](new _Const__WEBPACK_IMPORTED_MODULE_3__["default"](n), parse(analyzer)));
            analyzer.scan();
        }
    }
    return result;
};
/* harmony default export */ __webpack_exports__["default"] = (parse);


/***/ }),

/***/ "./src/VirtualMachine.ts":
/*!*******************************!*\
  !*** ./src/VirtualMachine.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VirtualMachine; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.ts");

class VirtualMachine {
    reset() {
        this.pc = 0;
        this.terminated = false;
    }
    init() {
        this.mem = new Array(100);
        this.adr = 0;
    }
    execute(turtle) {
        let index;
        switch (this.mem[this.pc]) {
            case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_FD"]:
                this.pc++;
                turtle.forward(this.mem[this.pc]);
                this.pc++;
                break;
            case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_LT"]:
                this.pc++;
                turtle.left(this.mem[this.pc]);
                this.pc++;
                break;
            case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_RT"]:
                this.pc++;
                turtle.right(this.mem[this.pc]);
                this.pc++;
                break;
            case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_SET"]:
                this.pc++;
                index = this.mem[this.pc];
                this.pc++;
                this.mem[index] = this.mem[this.pc];
                this.pc++;
                break;
            case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_LOOP"]:
                this.pc++;
                index = this.mem[this.pc];
                this.pc++;
                this.mem[index] = this.mem[index] - 1;
                if (this.mem[index] > 0)
                    this.pc = this.mem[this.pc];
                else
                    this.pc++;
                break;
            default:
                this.terminated = true;
        }
    }
    run(turtle) {
        this.reset();
        while (!this.terminated) {
            this.execute(turtle);
        }
    }
    poke(code) {
        this.mem[this.adr] = code;
        this.adr++;
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Turtle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Turtle */ "./src/utils/Turtle.ts");
/* harmony import */ var _Analyzer_LexicalAnalyzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Analyzer/LexicalAnalyzer */ "./src/Analyzer/LexicalAnalyzer.ts");
/* harmony import */ var _Interpreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Interpreter */ "./src/Interpreter.ts");
/* harmony import */ var _VirtualMachine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VirtualMachine */ "./src/VirtualMachine.ts");
/* harmony import */ var _SyntacticalTree_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SyntacticalTree/parser */ "./src/SyntacticalTree/parser.ts");
/* harmony import */ var _Compiler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Compiler */ "./src/Compiler.ts");
/* harmony import */ var _SyntacticalTree_Syntax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SyntacticalTree/Syntax */ "./src/SyntacticalTree/Syntax.ts");







const inputField = document.getElementById('inputField');
const output = document.getElementById('output');
const canvas = document.getElementById("myCanvas");
const turtle = new _utils_Turtle__WEBPACK_IMPORTED_MODULE_0__["default"](canvas.getContext("2d"), canvas.width, canvas.height);
let input = inputField.value;
const vm = new _VirtualMachine__WEBPACK_IMPORTED_MODULE_3__["default"]();
const analyzer = new _Analyzer_LexicalAnalyzer__WEBPACK_IMPORTED_MODULE_1__["default"](input);
const interpreter = new _Interpreter__WEBPACK_IMPORTED_MODULE_2__["default"](analyzer, turtle);
const compiler = new _Compiler__WEBPACK_IMPORTED_MODULE_5__["default"](vm);
inputField.onchange = function () {
    input = inputField.value;
    analyzer.setInput(input);
    turtle.clear();
    main();
};
const main = () => {
    analyzer.init();
    vm.init();
    let program = Object(_SyntacticalTree_parser__WEBPACK_IMPORTED_MODULE_4__["default"])(analyzer);
    _SyntacticalTree_Syntax__WEBPACK_IMPORTED_MODULE_6__["default"].counter_adr = 99;
    program.optimized(vm);
    program.execute(turtle);
    vm.run(turtle);
    output.innerHTML = program.translate(0);
};
main();


/***/ }),

/***/ "./src/utils/Turtle.ts":
/*!*****************************!*\
  !*** ./src/utils/Turtle.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Turtle; });
class Turtle {
    constructor(ctx, width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.ctx = ctx;
        this.init();
    }
    forward(length) {
        this.x = this.x + Math.sin(Turtle.degreeToRadian(this.angle)) * length;
        this.y = this.y + Math.cos(Turtle.degreeToRadian(this.angle)) * length;
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
    }
    backward(length) {
        this.forward(-length);
    }
    left(angle) {
        this.angle += angle;
    }
    right(angle) {
        this.angle -= angle;
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctx.beginPath();
        this.init();
    }
    color(r, g, b) {
        this.ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    }
    point(r) {
        this.ctx.beginPath();
        this.ctx.ellipse(this.x, this.y, r, r, Math.PI / 4, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.moveTo(this.x, this.y);
    }
    init() {
        this.x = this.canvasWidth / 2;
        this.y = this.canvasHeight / 2;
        this.ctx.moveTo(this.x, this.y);
        this.angle = 180;
    }
    static degreeToRadian(angle) {
        return Math.PI / 180 * angle;
    }
}


/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! exports provided: NOTHING, NUMBER, WORD, SYMBOL, FORWARD, LEFT, RIGHT, REPEAT, CLEAR, COLOR, POINT, REPEAT_STAR, REPEAT_ABC, INSTRUCTION_FD, INSTRUCTION_LT, INSTRUCTION_RT, INSTRUCTION_SET, INSTRUCTION_LOOP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTHING", function() { return NOTHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER", function() { return NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORD", function() { return WORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL", function() { return SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return FORWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPEAT", function() { return REPEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR", function() { return CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR", function() { return COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINT", function() { return POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPEAT_STAR", function() { return REPEAT_STAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPEAT_ABC", function() { return REPEAT_ABC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTRUCTION_FD", function() { return INSTRUCTION_FD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTRUCTION_LT", function() { return INSTRUCTION_LT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTRUCTION_RT", function() { return INSTRUCTION_RT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTRUCTION_SET", function() { return INSTRUCTION_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTRUCTION_LOOP", function() { return INSTRUCTION_LOOP; });
const NOTHING = 0;
const NUMBER = 1;
const WORD = 2;
const SYMBOL = 3;
const FORWARD = ['dopredu', 'dp'];
const LEFT = ['vlavo', 'vl'];
const RIGHT = ['vpravo', 'vp'];
const REPEAT = ['opakuj'];
const CLEAR = ['zmaz'];
const COLOR = ['farba'];
const POINT = ['bod'];
const REPEAT_STAR = '*';
const REPEAT_ABC = 'ijklmnopqrstv';
const INSTRUCTION_FD = 1;
const INSTRUCTION_LT = 2;
const INSTRUCTION_RT = 3;
const INSTRUCTION_SET = 4;
const INSTRUCTION_LOOP = 5;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuYWx5emVyL0xleGljYWxBbmFseXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcGlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ludGVycHJldGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TeW50YWN0aWNhbFRyZWUvQmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bnRhY3RpY2FsVHJlZS9Db25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3ludGFjdGljYWxUcmVlL0ZkLnRzIiwid2VicGFjazovLy8uL3NyYy9TeW50YWN0aWNhbFRyZWUvTHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bnRhY3RpY2FsVHJlZS9SZXBlYXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bnRhY3RpY2FsVHJlZS9SdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3ludGFjdGljYWxUcmVlL1N5bnRheC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3ludGFjdGljYWxUcmVlL1R1cnRsZUNvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bnRhY3RpY2FsVHJlZS9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpcnR1YWxNYWNoaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9UdXJ0bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFF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QUFFM0MsTUFBTSxjQUFjLEdBQVcsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sY0FBYyxHQUFXLENBQUMsQ0FBQztBQUNqQyxNQUFNLGNBQWMsR0FBVyxDQUFDLENBQUM7QUFDakMsTUFBTSxlQUFlLEdBQVcsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sZ0JBQWdCLEdBQVcsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExleGljYWxBbmFseXplciB7XHJcbiAgICBpbnB1dDogc3RyaW5nO1xyXG5cclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBsb29rOiBzdHJpbmc7XHJcblxyXG4gICAgdG9rZW46IHN0cmluZztcclxuICAgIGtpbmQ6IG51bWJlcjtcclxuICAgIHBvc2l0aW9uOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2V0SW5wdXQoaW5wdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElucHV0KGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB0aGlzLnNjYW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMuaW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9vayA9ICdcXDAnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb29rID0gdGhpcy5pbnB1dFt0aGlzLmluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY2FuKCk6IHZvaWQge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmxvb2sgPT0gJyAnIHx8IHRoaXMubG9vayA9PSAnXFxuJykge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b2tlbiA9ICcnO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLmluZGV4IC0gMTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9va0lzTnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiArPSB0aGlzLmxvb2s7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5sb29rSXNOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgIHRoaXMua2luZCA9IGNvbnN0YW50cy5OVU1CRVI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvb2tJc0NoYXJhY3RlcigpKSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gKz0gdGhpcy5sb29rO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKCh0aGlzLmxvb2tJc0NoYXJhY3RlcigpKSk7XHJcbiAgICAgICAgICAgIHRoaXMua2luZCA9IGNvbnN0YW50cy5XT1JEO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb29rICE9ICdcXDAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmxvb2s7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB0aGlzLmtpbmQgPSBjb25zdGFudHMuU1lNQk9MO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMua2luZCA9IGNvbnN0YW50cy5OT1RISU5HO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvb2tJc051bWJlcigpIHtcclxuICAgICAgICBsZXQgYXNjaWkgPSB0aGlzLmxvb2suY2hhckNvZGVBdCgwKTtcclxuICAgICAgICByZXR1cm4gYXNjaWkgPiA0NyAmJiBhc2NpaSA8IDU4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9va0lzQ2hhcmFjdGVyKCkge1xyXG4gICAgICAgIGxldCBhc2NpaSA9IHRoaXMubG9vay5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIHJldHVybiAoYXNjaWkgPiA2NCAmJiBhc2NpaSA8IDkxKSB8fCAoYXNjaWkgPiA5NiAmJiBhc2NpaSA8IDEyMyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTGV4aWNhbEFuYWx5emVyIGZyb20gXCIuL0FuYWx5emVyL0xleGljYWxBbmFseXplclwiO1xyXG5pbXBvcnQge1xyXG4gICAgRk9SV0FSRCxcclxuICAgIElOU1RSVUNUSU9OX0ZELFxyXG4gICAgSU5TVFJVQ1RJT05fTE9PUCxcclxuICAgIElOU1RSVUNUSU9OX0xULFxyXG4gICAgSU5TVFJVQ1RJT05fUlQsXHJcbiAgICBJTlNUUlVDVElPTl9TRVQsXHJcbiAgICBMRUZULCBSRVBFQVQsIFJJR0hULCBXT1JEXHJcbn0gZnJvbSBcIi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBWaXJ0dWFsTWFjaGluZSBmcm9tIFwiLi9WaXJ0dWFsTWFjaGluZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGlsZXIge1xyXG4gICAgYW5hbHl6ZXI6IExleGljYWxBbmFseXplcjtcclxuICAgIHZtOiBWaXJ0dWFsTWFjaGluZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2bTogVmlydHVhbE1hY2hpbmUpIHtcclxuICAgICAgICB0aGlzLnZtID0gdm07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZShjb3VudGVyX2FkcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYW5hbHl6ZXIua2luZCA9PSBXT1JEKSB7XHJcbiAgICAgICAgICAgIGlmIChGT1JXQVJELmluY2x1ZGVzKHRoaXMuYW5hbHl6ZXIudG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9rZShJTlNUUlVDVElPTl9GRCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBva2UocGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTEVGVC5pbmNsdWRlcyh0aGlzLmFuYWx5emVyLnRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBva2UoSU5TVFJVQ1RJT05fTFQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlKHBhcnNlSW50KHRoaXMuYW5hbHl6ZXIudG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFJJR0hULmluY2x1ZGVzKHRoaXMuYW5hbHl6ZXIudG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9rZShJTlNUUlVDVElPTl9SVCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBva2UocGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUkVQRUFULmluY2x1ZGVzKHRoaXMuYW5hbHl6ZXIudG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9rZShJTlNUUlVDVElPTl9TRVQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlKGNvdW50ZXJfYWRyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9rZShwYXJzZUludCh0aGlzLmFuYWx5emVyLnRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvZHlfYWRyID0gdGhpcy52bS5hZHI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBpbGUoY291bnRlcl9hZHIgLSAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9rZShJTlNUUlVDVElPTl9MT09QKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9rZShjb3VudGVyX2Fkcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBva2UoYm9keV9hZHIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnZtLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9rZShjb2RlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZtLm1lbVt0aGlzLnZtLmFkcl0gPSBjb2RlO1xyXG4gICAgICAgIHRoaXMudm0uYWRyKys7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IExleGljYWxBbmFseXplciBmcm9tICcuL0FuYWx5emVyL0xleGljYWxBbmFseXplcidcclxuaW1wb3J0IFR1cnRsZSBmcm9tICcuL3V0aWxzL1R1cnRsZSc7XHJcbmltcG9ydCB7Q0xFQVIsIENPTE9SLCBGT1JXQVJELCBMRUZULCBOT1RISU5HLCBOVU1CRVIsIFBPSU5ULCBSRVBFQVQsIFJFUEVBVF9TVEFSLCBSSUdIVH0gZnJvbSBcIi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcnByZXRlciB7XHJcbiAgICBhbmFseXplcjogTGV4aWNhbEFuYWx5emVyO1xyXG4gICAgdHVydGxlOiBUdXJ0bGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYW5hbHl6ZXI6IExleGljYWxBbmFseXplciwgdHVydGxlOiBUdXJ0bGUpIHtcclxuICAgICAgICB0aGlzLmFuYWx5emVyID0gYW5hbHl6ZXI7XHJcbiAgICAgICAgdGhpcy50dXJ0bGUgPSB0dXJ0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJwcmV0KCk6IHZvaWQge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmFuYWx5emVyLmtpbmQgIT0gTk9USElORykge1xyXG4gICAgICAgICAgICBpZiAoRk9SV0FSRC5pbmNsdWRlcyh0aGlzLmFuYWx5emVyLnRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1cnRsZS5mb3J3YXJkKHBhcnNlSW50KHRoaXMuYW5hbHl6ZXIudG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChMRUZULmluY2x1ZGVzKHRoaXMuYW5hbHl6ZXIudG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHVydGxlLmxlZnQocGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFJJR0hULmluY2x1ZGVzKHRoaXMuYW5hbHl6ZXIudG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHVydGxlLnJpZ2h0KHBhcnNlSW50KHRoaXMuYW5hbHl6ZXIudG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChSRVBFQVQuaW5jbHVkZXModGhpcy5hbmFseXplci50b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSBwYXJzZUludCh0aGlzLmFuYWx5emVyLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5hbmFseXplci50b2tlbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9DeWNsZSh0b2tlbiwgY291bnQpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChOVU1CRVIgPT0gdGhpcy5hbmFseXplci5raW5kKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IHBhcnNlSW50KHRoaXMuYW5hbHl6ZXIudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWV0aG9kOiBzdHJpbmcgPSB0aGlzLmFuYWx5emVyLnRva2VuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kID09IFJFUEVBVF9TVEFSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5hbmFseXplci50b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvQ3ljbGUodG9rZW4sIGNvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQ0xFQVIuaW5jbHVkZXModGhpcy5hbmFseXplci50b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHVydGxlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQ09MT1IuaW5jbHVkZXModGhpcy5hbmFseXplci50b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZ2IgPSBbMCwgMCwgMF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KHRoaXMuYW5hbHl6ZXIudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50dXJ0bGUuY29sb3IocmdiWzBdLCByZ2JbMV0sIHJnYlsyXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUE9JTlQuaW5jbHVkZXModGhpcy5hbmFseXplci50b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHI6IG51bWJlciA9IHBhcnNlSW50KHRoaXMuYW5hbHl6ZXIudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50dXJ0bGUucG9pbnQocik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkb0N5Y2xlKHRva2VuOiBzdHJpbmcsIGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodG9rZW4gPT0gJ1snKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFuYWx5emVyLnRva2VuKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gdGhpcy5hbmFseXplci5wb3NpdGlvbjtcclxuICAgICAgICAgICAgd2hpbGUgKGNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5pbmRleCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJwcmV0KCk7XHJcbiAgICAgICAgICAgICAgICBjb3VudCAtPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2tlbiA9PSAnXScpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBTeW50YXggZnJvbSBcIi4vU3ludGF4XCI7XHJcbmltcG9ydCBWaXJ0dWFsTWFjaGluZSBmcm9tIFwiLi4vVmlydHVhbE1hY2hpbmVcIjtcclxuaW1wb3J0IFR1cnRsZSBmcm9tIFwiLi4vdXRpbHMvVHVydGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9jayBleHRlbmRzIFN5bnRheCB7XHJcbiAgICBpdGVtczogU3ludGF4W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uaXRlbXM6IFN5bnRheFtdKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKGl0ZW06IFN5bnRheCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKHR1cnRsZTpUdXJ0bGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmV4ZWN1dGUodHVydGxlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGUodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5nZW5lcmF0ZSh2bSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGltaXplZCh2bTogVmlydHVhbE1hY2hpbmUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLm9wdGltaXplZCh2bSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zbGF0ZShkZXB0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdGFicyA9IFN5bnRheC50YWJzKGRlcHRoKTtcclxuICAgICAgICBsZXQgcmVzID0gJyc7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gcmVzICs9IGAke3RhYnN9JHtpdGVtLnRyYW5zbGF0ZShkZXB0aCl9PGJyPmApO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU3ludGF4IGZyb20gXCIuL1N5bnRheFwiO1xyXG5pbXBvcnQgVmlydHVhbE1hY2hpbmUgZnJvbSBcIi4uL1ZpcnR1YWxNYWNoaW5lXCI7XHJcbmltcG9ydCBUdXJ0bGUgZnJvbSBcIi4uL3V0aWxzL1R1cnRsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3QgZXh0ZW5kcyBTeW50YXgge1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGUodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZCB7XHJcbiAgICAgICAgdm0ucG9rZSh0aGlzLnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUodHVydGxlOlR1cnRsZSk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zbGF0ZShkZXB0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCR7U3ludGF4LnRhYnMoZGVwdGgpfSR7dGhpcy52YWx1ZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGltaXplZCh2bTogVmlydHVhbE1hY2hpbmUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlKHZtKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgVHVydGxlQ29tbWFuZCBmcm9tIFwiLi9UdXJ0bGVDb21tYW5kXCI7XHJcbmltcG9ydCB7SU5TVFJVQ1RJT05fRkR9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IFZpcnR1YWxNYWNoaW5lIGZyb20gXCIuLi9WaXJ0dWFsTWFjaGluZVwiO1xyXG5pbXBvcnQgVHVydGxlIGZyb20gXCIuLi91dGlscy9UdXJ0bGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZkIGV4dGVuZHMgVHVydGxlQ29tbWFuZCB7XHJcbiAgICBleGVjdXRlKHR1cnRsZTpUdXJ0bGUpOiB2b2lkIHtcclxuICAgICAgICB0dXJ0bGUuZm9yd2FyZCh0aGlzLnBhcmFtLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZSh2bTogVmlydHVhbE1hY2hpbmUpOiB2b2lkIHtcclxuICAgICAgICB2bS5wb2tlKElOU1RSVUNUSU9OX0ZEKTtcclxuICAgICAgICB0aGlzLnBhcmFtLmdlbmVyYXRlKHZtKTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2xhdGUoZGVwdGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBkb3ByZWR1KCR7dGhpcy5wYXJhbS52YWx1ZX0pO2BcclxuICAgIH1cclxuXHJcbiAgICBvcHRpbWl6ZWQodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZSh2bSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFR1cnRsZUNvbW1hbmQgZnJvbSBcIi4vVHVydGxlQ29tbWFuZFwiO1xyXG5pbXBvcnQge0lOU1RSVUNUSU9OX0xUfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBWaXJ0dWFsTWFjaGluZSBmcm9tIFwiLi4vVmlydHVhbE1hY2hpbmVcIjtcclxuaW1wb3J0IFR1cnRsZSBmcm9tIFwiLi4vdXRpbHMvVHVydGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMdCBleHRlbmRzIFR1cnRsZUNvbW1hbmQge1xyXG4gICAgZXhlY3V0ZSh0dXJ0bGU6VHVydGxlKTogdm9pZCB7XHJcbiAgICAgICAgdHVydGxlLmxlZnQodGhpcy5wYXJhbS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGUodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZCB7XHJcbiAgICAgICAgdm0ucG9rZShJTlNUUlVDVElPTl9MVCk7XHJcbiAgICAgICAgdGhpcy5wYXJhbS5nZW5lcmF0ZSh2bSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNsYXRlKGRlcHRoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgZG9sYXZhKCR7dGhpcy5wYXJhbS52YWx1ZX0pO2BcclxuICAgIH1cclxuXHJcbiAgICBvcHRpbWl6ZWQodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZSh2bSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IENvbnN0IGZyb20gXCIuL0NvbnN0XCI7XHJcbmltcG9ydCBCbG9jayBmcm9tIFwiLi9CbG9ja1wiO1xyXG5pbXBvcnQgU3ludGF4IGZyb20gXCIuL1N5bnRheFwiO1xyXG5pbXBvcnQgVmlydHVhbE1hY2hpbmUgZnJvbSBcIi4uL1ZpcnR1YWxNYWNoaW5lXCI7XHJcbmltcG9ydCB7SU5TVFJVQ1RJT05fTE9PUCwgSU5TVFJVQ1RJT05fU0VULCBSRVBFQVRfQUJDfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBUdXJ0bGUgZnJvbSBcIi4uL3V0aWxzL1R1cnRsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwZWF0IGV4dGVuZHMgU3ludGF4IHtcclxuICAgIGNvdW50OiBDb25zdDtcclxuICAgIGJvZHk6IEJsb2NrO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvdW50OiBDb25zdCwgYm9keTogQmxvY2spIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUodHVydGxlOlR1cnRsZSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudC52YWx1ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS5leGVjdXRlKHR1cnRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlKHZtOiBWaXJ0dWFsTWFjaGluZSk6IHZvaWQge1xyXG4gICAgICAgIHZtLnBva2UoSU5TVFJVQ1RJT05fU0VUKTtcclxuICAgICAgICB2bS5wb2tlKFN5bnRheC5jb3VudGVyX2Fkcik7XHJcbiAgICAgICAgdGhpcy5jb3VudC5nZW5lcmF0ZSh2bSk7XHJcbiAgICAgICAgU3ludGF4LmNvdW50ZXJfYWRyLS07XHJcbiAgICAgICAgbGV0IGxvb3BfYm9keSA9IHZtLmFkcjtcclxuICAgICAgICB0aGlzLmJvZHkuZ2VuZXJhdGUodm0pO1xyXG4gICAgICAgIFN5bnRheC5jb3VudGVyX2FkcisrO1xyXG4gICAgICAgIHZtLnBva2UoSU5TVFJVQ1RJT05fTE9PUCk7XHJcbiAgICAgICAgdm0ucG9rZShTeW50YXguY291bnRlcl9hZHIpO1xyXG4gICAgICAgIHZtLnBva2UobG9vcF9ib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBvcHRpbWl6ZWQodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnQudmFsdWUgPT0gMCB8fCB0aGlzLmJvZHkuaXRlbXMubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5jb3VudC52YWx1ZSA9PSAxIHx8IHRoaXMuYm9keS5pdGVtcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkub3B0aW1pemVkKHZtKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2bS5wb2tlKElOU1RSVUNUSU9OX1NFVCk7XHJcbiAgICAgICAgdm0ucG9rZShTeW50YXguY291bnRlcl9hZHIpO1xyXG4gICAgICAgIHRoaXMuY291bnQub3B0aW1pemVkKHZtKTtcclxuICAgICAgICBTeW50YXguY291bnRlcl9hZHItLTtcclxuICAgICAgICBsZXQgbG9vcF9ib2R5ID0gdm0uYWRyO1xyXG4gICAgICAgIHRoaXMuYm9keS5vcHRpbWl6ZWQodm0pO1xyXG4gICAgICAgIFN5bnRheC5jb3VudGVyX2FkcisrO1xyXG4gICAgICAgIHZtLnBva2UoSU5TVFJVQ1RJT05fTE9PUCk7XHJcbiAgICAgICAgdm0ucG9rZShTeW50YXguY291bnRlcl9hZHIpO1xyXG4gICAgICAgIHZtLnBva2UobG9vcF9ib2R5KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNsYXRlKGRlcHRoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB0YWJzID0gU3ludGF4LnRhYnMoZGVwdGgpO1xyXG4gICAgICAgIGxldCBpdGVyID0gUkVQRUFUX0FCQ1tkZXB0aF07XHJcbiAgICAgICAgcmV0dXJuIGBmb3IgKGludCAke2l0ZXJ9ID0gMDsgJHtpdGVyfSA8ICR7dGhpcy5jb3VudC52YWx1ZX07ICR7aXRlcn0rKykgezxicj5cclxuICAgICAgICAke3RoaXMuYm9keS50cmFuc2xhdGUoZGVwdGggKyAxKX0ke3RhYnN9fWBcclxuICAgIH1cclxufSIsImltcG9ydCBUdXJ0bGVDb21tYW5kIGZyb20gXCIuL1R1cnRsZUNvbW1hbmRcIjtcclxuaW1wb3J0IHtJTlNUUlVDVElPTl9SVH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgVmlydHVhbE1hY2hpbmUgZnJvbSBcIi4uL1ZpcnR1YWxNYWNoaW5lXCI7XHJcbmltcG9ydCBUdXJ0bGUgZnJvbSBcIi4uL3V0aWxzL1R1cnRsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnQgZXh0ZW5kcyBUdXJ0bGVDb21tYW5kIHtcclxuICAgIGV4ZWN1dGUodHVydGxlOlR1cnRsZSk6IHZvaWQge1xyXG4gICAgICAgIHR1cnRsZS5yaWdodCh0aGlzLnBhcmFtLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZSh2bTogVmlydHVhbE1hY2hpbmUpOiB2b2lkIHtcclxuICAgICAgICB2bS5wb2tlKElOU1RSVUNUSU9OX1JUKTtcclxuICAgICAgICB0aGlzLnBhcmFtLmdlbmVyYXRlKHZtKTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2xhdGUoZGVwdGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBkb3ByYXZhKCR7dGhpcy5wYXJhbS52YWx1ZX0pO2BcclxuICAgIH1cclxuXHJcbiAgICBvcHRpbWl6ZWQodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZSh2bSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFZpcnR1YWxNYWNoaW5lIGZyb20gXCIuLi9WaXJ0dWFsTWFjaGluZVwiO1xyXG5pbXBvcnQgVHVydGxlIGZyb20gXCIuLi91dGlscy9UdXJ0bGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFN5bnRheCB7XHJcbiAgICBzdGF0aWMgY291bnRlcl9hZHI6IG51bWJlcjtcclxuXHJcbiAgICBhYnN0cmFjdCBleGVjdXRlKHR1cnRsZTpUdXJ0bGUpOiB2b2lkXHJcblxyXG4gICAgYWJzdHJhY3QgZ2VuZXJhdGUodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZFxyXG5cclxuICAgIGFic3RyYWN0IG9wdGltaXplZCh2bTogVmlydHVhbE1hY2hpbmUpOiB2b2lkXHJcblxyXG4gICAgYWJzdHJhY3QgdHJhbnNsYXRlKGRlcHRoOiBudW1iZXIpOiBzdHJpbmdcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIHRhYnMoZGVwdGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJlcyA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVwdGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXMgKz0gJyZlbXNwOyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU3ludGF4IGZyb20gXCIuL1N5bnRheFwiO1xyXG5pbXBvcnQgQ29uc3QgZnJvbSBcIi4vQ29uc3RcIjtcclxuaW1wb3J0IFZpcnR1YWxNYWNoaW5lIGZyb20gXCIuLi9WaXJ0dWFsTWFjaGluZVwiO1xyXG5pbXBvcnQgVHVydGxlIGZyb20gXCIuLi91dGlscy9UdXJ0bGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFR1cnRsZUNvbW1hbmQgZXh0ZW5kcyBTeW50YXgge1xyXG4gICAgcGFyYW06IENvbnN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtOiBDb25zdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYXJhbSA9IHBhcmFtO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGV4ZWN1dGUodHVydGxlOlR1cnRsZSk6IHZvaWRcclxuXHJcbiAgICBhYnN0cmFjdCBnZW5lcmF0ZSh2bTogVmlydHVhbE1hY2hpbmUpOiB2b2lkXHJcblxyXG4gICAgYWJzdHJhY3QgdHJhbnNsYXRlKGRlcHRoOiBudW1iZXIpOiBzdHJpbmdcclxuXHJcbiAgICBhYnN0cmFjdCBvcHRpbWl6ZWQodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZFxyXG5cclxufSIsImltcG9ydCBCbG9jayBmcm9tIFwiLi9CbG9ja1wiO1xyXG5pbXBvcnQgTGV4aWNhbEFuYWx5emVyIGZyb20gXCIuLi9BbmFseXplci9MZXhpY2FsQW5hbHl6ZXJcIjtcclxuaW1wb3J0IHtGT1JXQVJELCBMRUZULCBSRVBFQVQsIFJJR0hULCBXT1JEfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBGZCBmcm9tIFwiLi9GZFwiO1xyXG5pbXBvcnQgQ29uc3QgZnJvbSBcIi4vQ29uc3RcIjtcclxuaW1wb3J0IEx0IGZyb20gXCIuL0x0XCI7XHJcbmltcG9ydCBSdCBmcm9tIFwiLi9SdFwiO1xyXG5pbXBvcnQgUmVwZWF0IGZyb20gXCIuL1JlcGVhdFwiO1xyXG5cclxuY29uc3QgcGFyc2UgPSAoYW5hbHl6ZXI6IExleGljYWxBbmFseXplcik6IEJsb2NrID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBuZXcgQmxvY2soKTtcclxuICAgIHdoaWxlIChhbmFseXplci5raW5kID09IFdPUkQpIHtcclxuICAgICAgICBpZiAoRk9SV0FSRC5pbmNsdWRlcyhhbmFseXplci50b2tlbikpIHtcclxuICAgICAgICAgICAgYW5hbHl6ZXIuc2NhbigpO1xyXG4gICAgICAgICAgICByZXN1bHQuYWRkKG5ldyBGZChuZXcgQ29uc3QocGFyc2VJbnQoYW5hbHl6ZXIudG9rZW4pKSkpO1xyXG4gICAgICAgICAgICBhbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChMRUZULmluY2x1ZGVzKGFuYWx5emVyLnRva2VuKSkge1xyXG4gICAgICAgICAgICBhbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hZGQobmV3IEx0KG5ldyBDb25zdChwYXJzZUludChhbmFseXplci50b2tlbikpKSk7XHJcbiAgICAgICAgICAgIGFuYWx5emVyLnNjYW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFJJR0hULmluY2x1ZGVzKGFuYWx5emVyLnRva2VuKSkge1xyXG4gICAgICAgICAgICBhbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hZGQobmV3IFJ0KG5ldyBDb25zdChwYXJzZUludChhbmFseXplci50b2tlbikpKSk7XHJcbiAgICAgICAgICAgIGFuYWx5emVyLnNjYW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFJFUEVBVC5pbmNsdWRlcyhhbmFseXplci50b2tlbikpIHtcclxuICAgICAgICAgICAgYW5hbHl6ZXIuc2NhbigpO1xyXG4gICAgICAgICAgICBsZXQgbiA9IHBhcnNlSW50KGFuYWx5emVyLnRva2VuKTtcclxuICAgICAgICAgICAgYW5hbHl6ZXIuc2NhbigpO1xyXG4gICAgICAgICAgICBhbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hZGQobmV3IFJlcGVhdChuZXcgQ29uc3QobiksIHBhcnNlKGFuYWx5emVyKSkpO1xyXG4gICAgICAgICAgICBhbmFseXplci5zY2FuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcnNlO1xyXG4iLCJpbXBvcnQge0lOU1RSVUNUSU9OX0ZELCBJTlNUUlVDVElPTl9MT09QLCBJTlNUUlVDVElPTl9MVCwgSU5TVFJVQ1RJT05fUlQsIElOU1RSVUNUSU9OX1NFVH0gZnJvbSBcIi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBUdXJ0bGUgZnJvbSBcIi4vdXRpbHMvVHVydGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXJ0dWFsTWFjaGluZSB7XHJcbiAgICBtZW06IG51bWJlcltdO1xyXG4gICAgcGM6IG51bWJlcjtcclxuICAgIHRlcm1pbmF0ZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgYWRyOiBudW1iZXI7XHJcblxyXG4gICAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYyA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXJtaW5hdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lbSA9IG5ldyBBcnJheSgxMDApO1xyXG4gICAgICAgIHRoaXMuYWRyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKHR1cnRsZTogVHVydGxlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLm1lbVt0aGlzLnBjXSkge1xyXG4gICAgICAgICAgICBjYXNlIElOU1RSVUNUSU9OX0ZEOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xyXG4gICAgICAgICAgICAgICAgdHVydGxlLmZvcndhcmQodGhpcy5tZW1bdGhpcy5wY10pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSU5TVFJVQ1RJT05fTFQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBjKys7XHJcbiAgICAgICAgICAgICAgICB0dXJ0bGUubGVmdCh0aGlzLm1lbVt0aGlzLnBjXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBjKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJTlNUUlVDVElPTl9SVDpcclxuICAgICAgICAgICAgICAgIHRoaXMucGMrKztcclxuICAgICAgICAgICAgICAgIHR1cnRsZS5yaWdodCh0aGlzLm1lbVt0aGlzLnBjXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBjKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJTlNUUlVDVElPTl9TRVQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBjKys7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMubWVtW3RoaXMucGNdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW1baW5kZXhdID0gdGhpcy5tZW1bdGhpcy5wY107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBjKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJTlNUUlVDVElPTl9MT09QOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLm1lbVt0aGlzLnBjXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGMrKztcclxuICAgICAgICAgICAgICAgIHRoaXMubWVtW2luZGV4XSA9IHRoaXMubWVtW2luZGV4XSAtIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tZW1baW5kZXhdID4gMCkgdGhpcy5wYyA9IHRoaXMubWVtW3RoaXMucGNdO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLnBjKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMudGVybWluYXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBydW4odHVydGxlOiBUdXJ0bGUpIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLnRlcm1pbmF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHR1cnRsZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcG9rZShjb2RlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lbVt0aGlzLmFkcl0gPSBjb2RlO1xyXG4gICAgICAgIHRoaXMuYWRyKys7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVHVydGxlIGZyb20gXCIuL3V0aWxzL1R1cnRsZVwiO1xyXG5pbXBvcnQgTGV4aWNhbEFuYWx5emVyIGZyb20gXCIuL0FuYWx5emVyL0xleGljYWxBbmFseXplclwiO1xyXG5pbXBvcnQgSW50ZXJwcmV0ZXIgZnJvbSBcIi4vSW50ZXJwcmV0ZXJcIjtcclxuaW1wb3J0IFZpcnR1YWxNYWNoaW5lIGZyb20gXCIuL1ZpcnR1YWxNYWNoaW5lXCI7XHJcbmltcG9ydCBwYXJzZSBmcm9tIFwiLi9TeW50YWN0aWNhbFRyZWUvcGFyc2VyXCI7XHJcbmltcG9ydCBDb21waWxlciBmcm9tIFwiLi9Db21waWxlclwiO1xyXG5pbXBvcnQgU3ludGF4IGZyb20gXCIuL1N5bnRhY3RpY2FsVHJlZS9TeW50YXhcIjtcclxuXHJcbmNvbnN0IGlucHV0RmllbGQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RmllbGQnKTtcclxuY29uc3Qgb3V0cHV0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKTtcclxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xyXG5jb25zdCB0dXJ0bGUgPSBuZXcgVHVydGxlKGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG5sZXQgaW5wdXQ6IHN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD5pbnB1dEZpZWxkKS52YWx1ZTtcclxuXHJcbmNvbnN0IHZtID0gbmV3IFZpcnR1YWxNYWNoaW5lKCk7XHJcbmNvbnN0IGFuYWx5emVyOiBMZXhpY2FsQW5hbHl6ZXIgPSBuZXcgTGV4aWNhbEFuYWx5emVyKGlucHV0KTtcclxuY29uc3QgaW50ZXJwcmV0ZXIgPSBuZXcgSW50ZXJwcmV0ZXIoYW5hbHl6ZXIsIHR1cnRsZSk7XHJcbmNvbnN0IGNvbXBpbGVyID0gbmV3IENvbXBpbGVyKHZtKTtcclxuXHJcbig8SFRNTElucHV0RWxlbWVudD5pbnB1dEZpZWxkKS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlucHV0ID0gKDxIVE1MSW5wdXRFbGVtZW50PmlucHV0RmllbGQpLnZhbHVlO1xyXG4gICAgYW5hbHl6ZXIuc2V0SW5wdXQoaW5wdXQpO1xyXG4gICAgdHVydGxlLmNsZWFyKCk7XHJcbiAgICBtYWluKCk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgbWFpbiA9ICgpOiB2b2lkID0+IHtcclxuICAgIGFuYWx5emVyLmluaXQoKTtcclxuICAgIHZtLmluaXQoKTtcclxuICAgIGxldCBwcm9ncmFtID0gcGFyc2UoYW5hbHl6ZXIpO1xyXG4gICAgU3ludGF4LmNvdW50ZXJfYWRyID0gOTk7XHJcblxyXG4gICAgcHJvZ3JhbS5vcHRpbWl6ZWQodm0pO1xyXG4gICAgcHJvZ3JhbS5leGVjdXRlKHR1cnRsZSk7XHJcbiAgICB2bS5ydW4odHVydGxlKTtcclxuXHJcbiAgICBvdXRwdXQuaW5uZXJIVE1MID0gcHJvZ3JhbS50cmFuc2xhdGUoMCk7XHJcbn07XHJcblxyXG5tYWluKCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHVydGxlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzV2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgYW5nbGU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcndhcmQobGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnggKyBNYXRoLnNpbihUdXJ0bGUuZGVncmVlVG9SYWRpYW4odGhpcy5hbmdsZSkpICogbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMueSArIE1hdGguY29zKFR1cnRsZS5kZWdyZWVUb1JhZGlhbih0aGlzLmFuZ2xlKSkgKiBsZW5ndGg7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFja3dhcmQobGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZvcndhcmQoLWxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVmdChhbmdsZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hbmdsZSArPSBhbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICByaWdodChhbmdsZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hbmdsZSAtPSBhbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbG9yKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xyXG4gICAgfVxyXG5cclxuICAgIHBvaW50KHI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy54LCB0aGlzLnksIHIsIHIsIE1hdGguUEkgLyA0LCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jYW52YXNXaWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXNIZWlnaHQgLyAyO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IDE4MDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVncmVlVG9SYWRpYW4oYW5nbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguUEkgLyAxODAgKiBhbmdsZVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IE5PVEhJTkc6IG51bWJlciA9IDA7XHJcbmV4cG9ydCBjb25zdCBOVU1CRVI6IG51bWJlciA9IDE7XHJcbmV4cG9ydCBjb25zdCBXT1JEOiBudW1iZXIgPSAyO1xyXG5leHBvcnQgY29uc3QgU1lNQk9MOiBudW1iZXIgPSAzO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPUldBUkQ6IHN0cmluZ1tdID0gWydkb3ByZWR1JywgJ2RwJ107XHJcbmV4cG9ydCBjb25zdCBMRUZUOiBzdHJpbmdbXSA9IFsndmxhdm8nLCAndmwnXTtcclxuZXhwb3J0IGNvbnN0IFJJR0hUOiBzdHJpbmdbXSA9IFsndnByYXZvJywgJ3ZwJ107XHJcbmV4cG9ydCBjb25zdCBSRVBFQVQ6IHN0cmluZ1tdID0gWydvcGFrdWonXTtcclxuZXhwb3J0IGNvbnN0IENMRUFSOiBzdHJpbmdbXSA9IFsnem1heiddO1xyXG5leHBvcnQgY29uc3QgQ09MT1I6IHN0cmluZ1tdID0gWydmYXJiYSddO1xyXG5leHBvcnQgY29uc3QgUE9JTlQ6IHN0cmluZ1tdID0gWydib2QnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVBFQVRfU1RBUjogc3RyaW5nID0gJyonO1xyXG5leHBvcnQgY29uc3QgUkVQRUFUX0FCQzogc3RyaW5nID0gJ2lqa2xtbm9wcXJzdHYnO1xyXG5cclxuZXhwb3J0IGNvbnN0IElOU1RSVUNUSU9OX0ZEOiBudW1iZXIgPSAxO1xyXG5leHBvcnQgY29uc3QgSU5TVFJVQ1RJT05fTFQ6IG51bWJlciA9IDI7XHJcbmV4cG9ydCBjb25zdCBJTlNUUlVDVElPTl9SVDogbnVtYmVyID0gMztcclxuZXhwb3J0IGNvbnN0IElOU1RSVUNUSU9OX1NFVDogbnVtYmVyID0gNDtcclxuZXhwb3J0IGNvbnN0IElOU1RSVUNUSU9OX0xPT1A6IG51bWJlciA9IDU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=