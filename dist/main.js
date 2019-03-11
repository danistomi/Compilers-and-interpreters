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
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");

var LexicalAnalyzer = /** @class */ (function () {
    function LexicalAnalyzer(input) {
        this.setInput(input);
    }
    LexicalAnalyzer.prototype.setInput = function (input) {
        this.input = input;
    };
    LexicalAnalyzer.prototype.init = function () {
        this.index = 0;
        this.next();
        this.scan();
    };
    LexicalAnalyzer.prototype.next = function () {
        if (this.index >= this.input.length) {
            this.look = '\0';
        }
        else {
            this.look = this.input[this.index];
            this.index++;
        }
    };
    LexicalAnalyzer.prototype.scan = function () {
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
    };
    LexicalAnalyzer.prototype.lookIsNumber = function () {
        var ascii = this.look.charCodeAt(0);
        return ascii > 47 && ascii < 58;
    };
    LexicalAnalyzer.prototype.lookIsCharacter = function () {
        var ascii = this.look.charCodeAt(0);
        return (ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 123);
    };
    return LexicalAnalyzer;
}());
/* harmony default export */ __webpack_exports__["default"] = (LexicalAnalyzer);


/***/ }),

/***/ "./src/Compiler.ts":
/*!*************************!*\
  !*** ./src/Compiler.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.ts");

var Compiler = /** @class */ (function () {
    function Compiler(vm) {
        this.vm = vm;
    }
    Compiler.prototype.compile = function (counter_adr) {
        while (this.analyzer.kind == _utils_constants__WEBPACK_IMPORTED_MODULE_0__["WORD"]) {
            if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["FORWARD"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_FD"]);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["LEFT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_LT"]);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["RIGHT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_RT"]);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["REPEAT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_SET"]);
                this.poke(counter_adr);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
                this.analyzer.scan();
                var body_adr = this.vm.adr;
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
    };
    Compiler.prototype.reset = function () {
        this.vm.reset();
    };
    Compiler.prototype.poke = function (code) {
        this.vm.mem[this.vm.adr] = code;
        this.vm.adr++;
    };
    return Compiler;
}());
/* harmony default export */ __webpack_exports__["default"] = (Compiler);


/***/ }),

/***/ "./src/Interpreter.ts":
/*!****************************!*\
  !*** ./src/Interpreter.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.ts");

var Interpreter = /** @class */ (function () {
    function Interpreter(analyzer, turtle) {
        this.analyzer = analyzer;
        this.turtle = turtle;
    }
    Interpreter.prototype.interpret = function () {
        while (this.analyzer.kind != _utils_constants__WEBPACK_IMPORTED_MODULE_0__["NOTHING"]) {
            if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["FORWARD"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.turtle.forward(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["LEFT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.turtle.left(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["RIGHT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.turtle.right(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["REPEAT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                var count = parseInt(this.analyzer.token);
                this.analyzer.scan();
                var token = this.analyzer.token;
                this.doCycle(token, count);
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["NUMBER"] == this.analyzer.kind) {
                var count = parseInt(this.analyzer.token);
                this.analyzer.scan();
                var method = this.analyzer.token;
                this.analyzer.scan();
                if (method == _utils_constants__WEBPACK_IMPORTED_MODULE_0__["REPEAT_STAR"]) {
                    var token = this.analyzer.token;
                    this.doCycle(token, count);
                }
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["CLEAR"].indexOf(this.analyzer.token) != -1) {
                this.turtle.clear();
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].indexOf(this.analyzer.token) != -1) {
                var rgb = [0, 0, 0];
                for (var i = 0; i < 3; i++) {
                    this.analyzer.scan();
                    rgb[i] = parseInt(this.analyzer.token);
                }
                this.turtle.color(rgb[0], rgb[1], rgb[2]);
                this.analyzer.scan();
            }
            else if (_utils_constants__WEBPACK_IMPORTED_MODULE_0__["POINT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                var r = parseInt(this.analyzer.token);
                this.turtle.point(r);
                this.analyzer.scan();
            }
            else {
                break;
            }
        }
    };
    Interpreter.prototype.doCycle = function (token, count) {
        if (token == '[') {
            this.analyzer.scan();
            console.log(this.analyzer.token);
            var start = this.analyzer.position;
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
    };
    return Interpreter;
}());
/* harmony default export */ __webpack_exports__["default"] = (Interpreter);


/***/ }),

/***/ "./src/SyntacticalTree/Block.ts":
/*!**************************************!*\
  !*** ./src/SyntacticalTree/Block.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Syntax */ "./src/SyntacticalTree/Syntax.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.items = items;
        return _this;
    }
    Block.prototype.add = function (item) {
        this.items.push(item);
    };
    Block.prototype.execute = function (turtle) {
        this.items.forEach(function (item) { return item.execute(turtle); });
    };
    Block.prototype.generate = function (vm) {
        this.items.forEach(function (item) { return item.generate(vm); });
    };
    Block.prototype.optimized = function (vm) {
        this.items.forEach(function (item) { return item.optimized(vm); });
    };
    Block.prototype.translate = function (depth) {
        var tabs = _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].tabs(depth);
        var res = '';
        this.items.forEach(function (item) { return res += "" + tabs + item.translate(depth) + "<br>"; });
        return res;
    };
    return Block;
}(_Syntax__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Block);


/***/ }),

/***/ "./src/SyntacticalTree/Const.ts":
/*!**************************************!*\
  !*** ./src/SyntacticalTree/Const.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Syntax */ "./src/SyntacticalTree/Syntax.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Const = /** @class */ (function (_super) {
    __extends(Const, _super);
    function Const(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    Const.prototype.generate = function (vm) {
        vm.poke(this.value);
    };
    Const.prototype.execute = function (turtle) {
    };
    Const.prototype.translate = function (depth) {
        return "" + _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].tabs(depth) + this.value;
    };
    Const.prototype.optimized = function (vm) {
        this.generate(vm);
    };
    return Const;
}(_Syntax__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Const);


/***/ }),

/***/ "./src/SyntacticalTree/Fd.ts":
/*!***********************************!*\
  !*** ./src/SyntacticalTree/Fd.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TurtleCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TurtleCommand */ "./src/SyntacticalTree/TurtleCommand.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Fd = /** @class */ (function (_super) {
    __extends(Fd, _super);
    function Fd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fd.prototype.execute = function (turtle) {
        turtle.forward(this.param.value);
    };
    Fd.prototype.generate = function (vm) {
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_FD"]);
        this.param.generate(vm);
    };
    Fd.prototype.translate = function (depth) {
        return "dopredu(" + this.param.value + ");";
    };
    Fd.prototype.optimized = function (vm) {
        this.generate(vm);
    };
    return Fd;
}(_TurtleCommand__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Fd);


/***/ }),

/***/ "./src/SyntacticalTree/Lt.ts":
/*!***********************************!*\
  !*** ./src/SyntacticalTree/Lt.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TurtleCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TurtleCommand */ "./src/SyntacticalTree/TurtleCommand.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Lt = /** @class */ (function (_super) {
    __extends(Lt, _super);
    function Lt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lt.prototype.execute = function (turtle) {
        turtle.left(this.param.value);
    };
    Lt.prototype.generate = function (vm) {
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_LT"]);
        this.param.generate(vm);
    };
    Lt.prototype.translate = function (depth) {
        return "dolava(" + this.param.value + ");";
    };
    Lt.prototype.optimized = function (vm) {
        this.generate(vm);
    };
    return Lt;
}(_TurtleCommand__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Lt);


/***/ }),

/***/ "./src/SyntacticalTree/Repeat.ts":
/*!***************************************!*\
  !*** ./src/SyntacticalTree/Repeat.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Syntax */ "./src/SyntacticalTree/Syntax.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Repeat = /** @class */ (function (_super) {
    __extends(Repeat, _super);
    function Repeat(count, body) {
        var _this = _super.call(this) || this;
        _this.count = count;
        _this.body = body;
        return _this;
    }
    Repeat.prototype.execute = function (turtle) {
        for (var i = 0; i < this.count.value; i++) {
            this.body.execute(turtle);
        }
    };
    Repeat.prototype.generate = function (vm) {
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_SET"]);
        vm.poke(_Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr);
        this.count.generate(vm);
        _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr--;
        var loop_body = vm.adr;
        this.body.generate(vm);
        _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr++;
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_LOOP"]);
        vm.poke(_Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr);
        vm.poke(loop_body);
    };
    Repeat.prototype.optimized = function (vm) {
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
        var loop_body = vm.adr;
        this.body.optimized(vm);
        _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr++;
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_LOOP"]);
        vm.poke(_Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].counter_adr);
        vm.poke(loop_body);
    };
    Repeat.prototype.translate = function (depth) {
        var tabs = _Syntax__WEBPACK_IMPORTED_MODULE_0__["default"].tabs(depth);
        var iter = _utils_constants__WEBPACK_IMPORTED_MODULE_1__["REPEAT_ABC"][depth];
        return "for (int " + iter + " = 0; " + iter + " < " + this.count.value + "; " + iter + "++) {<br>\n        " + this.body.translate(depth + 1) + tabs + "}";
    };
    return Repeat;
}(_Syntax__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Repeat);


/***/ }),

/***/ "./src/SyntacticalTree/Rt.ts":
/*!***********************************!*\
  !*** ./src/SyntacticalTree/Rt.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TurtleCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TurtleCommand */ "./src/SyntacticalTree/TurtleCommand.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Rt = /** @class */ (function (_super) {
    __extends(Rt, _super);
    function Rt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rt.prototype.execute = function (turtle) {
        turtle.right(this.param.value);
    };
    Rt.prototype.generate = function (vm) {
        vm.poke(_utils_constants__WEBPACK_IMPORTED_MODULE_1__["INSTRUCTION_RT"]);
        this.param.generate(vm);
    };
    Rt.prototype.translate = function (depth) {
        return "doprava(" + this.param.value + ");";
    };
    Rt.prototype.optimized = function (vm) {
        this.generate(vm);
    };
    return Rt;
}(_TurtleCommand__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Rt);


/***/ }),

/***/ "./src/SyntacticalTree/Syntax.ts":
/*!***************************************!*\
  !*** ./src/SyntacticalTree/Syntax.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Syntax = /** @class */ (function () {
    function Syntax() {
    }
    Syntax.tabs = function (depth) {
        var res = '';
        for (var i = 0; i < depth; i++) {
            res += '&emsp;';
        }
        return res;
    };
    return Syntax;
}());
/* harmony default export */ __webpack_exports__["default"] = (Syntax);


/***/ }),

/***/ "./src/SyntacticalTree/TurtleCommand.ts":
/*!**********************************************!*\
  !*** ./src/SyntacticalTree/TurtleCommand.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Syntax */ "./src/SyntacticalTree/Syntax.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TurtleCommand = /** @class */ (function (_super) {
    __extends(TurtleCommand, _super);
    function TurtleCommand(param) {
        var _this = _super.call(this) || this;
        _this.param = param;
        return _this;
    }
    return TurtleCommand;
}(_Syntax__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TurtleCommand);


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







var parse = function (analyzer) {
    var result = new _Block__WEBPACK_IMPORTED_MODULE_0__["default"]();
    while (analyzer.kind == _utils_constants__WEBPACK_IMPORTED_MODULE_1__["WORD"]) {
        if (_utils_constants__WEBPACK_IMPORTED_MODULE_1__["FORWARD"].indexOf(analyzer.token) != -1) {
            analyzer.scan();
            result.add(new _Fd__WEBPACK_IMPORTED_MODULE_2__["default"](new _Const__WEBPACK_IMPORTED_MODULE_3__["default"](parseInt(analyzer.token))));
            analyzer.scan();
        }
        else if (_utils_constants__WEBPACK_IMPORTED_MODULE_1__["LEFT"].indexOf(analyzer.token) != -1) {
            analyzer.scan();
            result.add(new _Lt__WEBPACK_IMPORTED_MODULE_4__["default"](new _Const__WEBPACK_IMPORTED_MODULE_3__["default"](parseInt(analyzer.token))));
            analyzer.scan();
        }
        else if (_utils_constants__WEBPACK_IMPORTED_MODULE_1__["RIGHT"].indexOf(analyzer.token) != -1) {
            analyzer.scan();
            result.add(new _Rt__WEBPACK_IMPORTED_MODULE_5__["default"](new _Const__WEBPACK_IMPORTED_MODULE_3__["default"](parseInt(analyzer.token))));
            analyzer.scan();
        }
        else if (_utils_constants__WEBPACK_IMPORTED_MODULE_1__["REPEAT"].indexOf(analyzer.token) != -1) {
            analyzer.scan();
            var n = parseInt(analyzer.token);
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
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.ts");

var VirtualMachine = /** @class */ (function () {
    function VirtualMachine() {
    }
    VirtualMachine.prototype.reset = function () {
        this.pc = 0;
        this.terminated = false;
    };
    VirtualMachine.prototype.init = function () {
        this.mem = new Array(100);
        this.adr = 0;
    };
    VirtualMachine.prototype.execute = function (turtle) {
        var index;
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
    };
    VirtualMachine.prototype.run = function (turtle) {
        this.reset();
        while (!this.terminated) {
            this.execute(turtle);
        }
    };
    VirtualMachine.prototype.poke = function (code) {
        this.mem[this.adr] = code;
        this.adr++;
    };
    return VirtualMachine;
}());
/* harmony default export */ __webpack_exports__["default"] = (VirtualMachine);


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







var inputField = document.getElementById('inputField');
var output = document.getElementById('output');
var canvas = document.getElementById("myCanvas");
var turtle = new _utils_Turtle__WEBPACK_IMPORTED_MODULE_0__["default"](canvas.getContext("2d"), canvas.width, canvas.height);
var input = inputField.value;
var vm = new _VirtualMachine__WEBPACK_IMPORTED_MODULE_3__["default"]();
var analyzer = new _Analyzer_LexicalAnalyzer__WEBPACK_IMPORTED_MODULE_1__["default"](input);
var interpreter = new _Interpreter__WEBPACK_IMPORTED_MODULE_2__["default"](analyzer, turtle);
var compiler = new _Compiler__WEBPACK_IMPORTED_MODULE_5__["default"](vm);
inputField.onchange = function () {
    input = inputField.value;
    analyzer.setInput(input);
    turtle.clear();
    main();
};
var main = function () {
    analyzer.init();
    vm.init();
    var program = Object(_SyntacticalTree_parser__WEBPACK_IMPORTED_MODULE_4__["default"])(analyzer);
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
var Turtle = /** @class */ (function () {
    function Turtle(ctx, width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.ctx = ctx;
        this.init();
    }
    Turtle.prototype.forward = function (length) {
        this.x = this.x + Math.sin(Turtle.degreeToRadian(this.angle)) * length;
        this.y = this.y + Math.cos(Turtle.degreeToRadian(this.angle)) * length;
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
    };
    Turtle.prototype.backward = function (length) {
        this.forward(-length);
    };
    Turtle.prototype.left = function (angle) {
        this.angle += angle;
    };
    Turtle.prototype.right = function (angle) {
        this.angle -= angle;
    };
    Turtle.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctx.beginPath();
        this.init();
    };
    Turtle.prototype.color = function (r, g, b) {
        this.ctx.strokeStyle = "rgb(" + r + ", " + g + ", " + b + ")";
        this.ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
    };
    Turtle.prototype.point = function (r) {
        this.ctx.beginPath();
        this.ctx.ellipse(this.x, this.y, r, r, Math.PI / 4, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.moveTo(this.x, this.y);
    };
    Turtle.prototype.init = function () {
        this.x = this.canvasWidth / 2;
        this.y = this.canvasHeight / 2;
        this.ctx.moveTo(this.x, this.y);
        this.angle = 180;
    };
    Turtle.degreeToRadian = function (angle) {
        return Math.PI / 180 * angle;
    };
    return Turtle;
}());
/* harmony default export */ __webpack_exports__["default"] = (Turtle);


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
var NOTHING = 0;
var NUMBER = 1;
var WORD = 2;
var SYMBOL = 3;
var FORWARD = ['dopredu', 'dp'];
var LEFT = ['vlavo', 'vl'];
var RIGHT = ['vpravo', 'vp'];
var REPEAT = ['opakuj'];
var CLEAR = ['zmaz'];
var COLOR = ['farba'];
var POINT = ['bod'];
var REPEAT_STAR = '*';
var REPEAT_ABC = 'ijklmnopqrstv';
var INSTRUCTION_FD = 1;
var INSTRUCTION_LT = 2;
var INSTRUCTION_RT = 3;
var INSTRUCTION_SET = 4;
var INSTRUCTION_LOOP = 5;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuYWx5emVyL0xleGljYWxBbmFseXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcGlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ludGVycHJldGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TeW50YWN0aWNhbFRyZWUvQmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bnRhY3RpY2FsVHJlZS9Db25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3ludGFjdGljYWxUcmVlL0ZkLnRzIiwid2VicGFjazovLy8uL3NyYy9TeW50YWN0aWNhbFRyZWUvTHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bnRhY3RpY2FsVHJlZS9SZXBlYXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bnRhY3RpY2FsVHJlZS9SdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3ludGFjdGljYWxUcmVlL1N5bnRheC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3ludGFjdGljYWxUcmVlL1R1cnRsZUNvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N5bnRhY3RpY2FsVHJlZS9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpcnR1YWxNYWNoaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9UdXJ0bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFF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LGNBQWMsR0FBVyxDQUFDLENBQUM7QUFDakMsSUFBTSxlQUFlLEdBQVcsQ0FBQyxDQUFDO0FBQ2xDLElBQU0sZ0JBQWdCLEdBQVcsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV4aWNhbEFuYWx5emVyIHtcbiAgICBpbnB1dDogc3RyaW5nO1xuXG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBsb29rOiBzdHJpbmc7XG5cbiAgICB0b2tlbjogc3RyaW5nO1xuICAgIGtpbmQ6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaW5wdXQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNldElucHV0KGlucHV0KTtcbiAgICB9XG5cbiAgICBzZXRJbnB1dChpbnB1dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHRoaXMuc2NhbigpO1xuICAgIH1cblxuICAgIG5leHQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMuaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmxvb2sgPSAnXFwwJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb29rID0gdGhpcy5pbnB1dFt0aGlzLmluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjYW4oKTogdm9pZCB7XG4gICAgICAgIHdoaWxlICh0aGlzLmxvb2sgPT0gJyAnIHx8IHRoaXMubG9vayA9PSAnXFxuJykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9rZW4gPSAnJztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuaW5kZXggLSAxO1xuXG4gICAgICAgIGlmICh0aGlzLmxvb2tJc051bWJlcigpKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbiArPSB0aGlzLmxvb2s7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmxvb2tJc051bWJlcigpKTtcbiAgICAgICAgICAgIHRoaXMua2luZCA9IGNvbnN0YW50cy5OVU1CRVI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb29rSXNDaGFyYWN0ZXIoKSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gKz0gdGhpcy5sb29rO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfSB3aGlsZSAoKHRoaXMubG9va0lzQ2hhcmFjdGVyKCkpKTtcbiAgICAgICAgICAgIHRoaXMua2luZCA9IGNvbnN0YW50cy5XT1JEO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9vayAhPSAnXFwwJykge1xuICAgICAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMubG9vaztcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgdGhpcy5raW5kID0gY29uc3RhbnRzLlNZTUJPTDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua2luZCA9IGNvbnN0YW50cy5OT1RISU5HO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb29rSXNOdW1iZXIoKSB7XG4gICAgICAgIGxldCBhc2NpaSA9IHRoaXMubG9vay5jaGFyQ29kZUF0KDApO1xuICAgICAgICByZXR1cm4gYXNjaWkgPiA0NyAmJiBhc2NpaSA8IDU4O1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9va0lzQ2hhcmFjdGVyKCkge1xuICAgICAgICBsZXQgYXNjaWkgPSB0aGlzLmxvb2suY2hhckNvZGVBdCgwKTtcbiAgICAgICAgcmV0dXJuIChhc2NpaSA+IDY0ICYmIGFzY2lpIDwgOTEpIHx8IChhc2NpaSA+IDk2ICYmIGFzY2lpIDwgMTIzKTtcbiAgICB9XG59IiwiaW1wb3J0IExleGljYWxBbmFseXplciBmcm9tIFwiLi9BbmFseXplci9MZXhpY2FsQW5hbHl6ZXJcIjtcbmltcG9ydCB7XG4gICAgRk9SV0FSRCxcbiAgICBJTlNUUlVDVElPTl9GRCxcbiAgICBJTlNUUlVDVElPTl9MT09QLFxuICAgIElOU1RSVUNUSU9OX0xULFxuICAgIElOU1RSVUNUSU9OX1JULFxuICAgIElOU1RSVUNUSU9OX1NFVCxcbiAgICBMRUZULCBSRVBFQVQsIFJJR0hULCBXT1JEXG59IGZyb20gXCIuL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IFZpcnR1YWxNYWNoaW5lIGZyb20gXCIuL1ZpcnR1YWxNYWNoaW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBpbGVyIHtcbiAgICBhbmFseXplcjogTGV4aWNhbEFuYWx5emVyO1xuICAgIHZtOiBWaXJ0dWFsTWFjaGluZTtcblxuICAgIGNvbnN0cnVjdG9yKHZtOiBWaXJ0dWFsTWFjaGluZSkge1xuICAgICAgICB0aGlzLnZtID0gdm07XG4gICAgfVxuXG4gICAgY29tcGlsZShjb3VudGVyX2FkcjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHdoaWxlICh0aGlzLmFuYWx5emVyLmtpbmQgPT0gV09SRCkge1xuICAgICAgICAgICAgaWYgKEZPUldBUkQuaW5kZXhPZih0aGlzLmFuYWx5emVyLnRva2VuKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9rZShJTlNUUlVDVElPTl9GRCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlKHBhcnNlSW50KHRoaXMuYW5hbHl6ZXIudG9rZW4pKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTEVGVC5pbmRleE9mKHRoaXMuYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlKElOU1RSVUNUSU9OX0xUKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBva2UocGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbikpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChSSUdIVC5pbmRleE9mKHRoaXMuYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlKElOU1RSVUNUSU9OX1JUKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBva2UocGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbikpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChSRVBFQVQuaW5kZXhPZih0aGlzLmFuYWx5emVyLnRva2VuKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9rZShJTlNUUlVDVElPTl9TRVQpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9rZShjb3VudGVyX2Fkcik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlKHBhcnNlSW50KHRoaXMuYW5hbHl6ZXIudG9rZW4pKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgICAgICBsZXQgYm9keV9hZHIgPSB0aGlzLnZtLmFkcjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBpbGUoY291bnRlcl9hZHIgLSAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBva2UoSU5TVFJVQ1RJT05fTE9PUCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlKGNvdW50ZXJfYWRyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBva2UoYm9keV9hZHIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnZtLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcG9rZShjb2RlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52bS5tZW1bdGhpcy52bS5hZHJdID0gY29kZTtcbiAgICAgICAgdGhpcy52bS5hZHIrKztcbiAgICB9XG59IiwiaW1wb3J0IExleGljYWxBbmFseXplciBmcm9tICcuL0FuYWx5emVyL0xleGljYWxBbmFseXplcidcbmltcG9ydCBUdXJ0bGUgZnJvbSAnLi91dGlscy9UdXJ0bGUnO1xuaW1wb3J0IHtDTEVBUiwgQ09MT1IsIEZPUldBUkQsIExFRlQsIE5PVEhJTkcsIE5VTUJFUiwgUE9JTlQsIFJFUEVBVCwgUkVQRUFUX1NUQVIsIFJJR0hUfSBmcm9tIFwiLi91dGlscy9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJwcmV0ZXIge1xuICAgIGFuYWx5emVyOiBMZXhpY2FsQW5hbHl6ZXI7XG4gICAgdHVydGxlOiBUdXJ0bGU7XG5cbiAgICBjb25zdHJ1Y3RvcihhbmFseXplcjogTGV4aWNhbEFuYWx5emVyLCB0dXJ0bGU6IFR1cnRsZSkge1xuICAgICAgICB0aGlzLmFuYWx5emVyID0gYW5hbHl6ZXI7XG4gICAgICAgIHRoaXMudHVydGxlID0gdHVydGxlO1xuICAgIH1cblxuICAgIGludGVycHJldCgpOiB2b2lkIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuYW5hbHl6ZXIua2luZCAhPSBOT1RISU5HKSB7XG4gICAgICAgICAgICBpZiAoRk9SV0FSRC5pbmRleE9mKHRoaXMuYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJ0bGUuZm9yd2FyZChwYXJzZUludCh0aGlzLmFuYWx5emVyLnRva2VuKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTEVGVC5pbmRleE9mKHRoaXMuYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJ0bGUubGVmdChwYXJzZUludCh0aGlzLmFuYWx5emVyLnRva2VuKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUklHSFQuaW5kZXhPZih0aGlzLmFuYWx5emVyLnRva2VuKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgIHRoaXMudHVydGxlLnJpZ2h0KHBhcnNlSW50KHRoaXMuYW5hbHl6ZXIudG9rZW4pKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChSRVBFQVQuaW5kZXhPZih0aGlzLmFuYWx5emVyLnRva2VuKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gcGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5hbmFseXplci50b2tlbjtcbiAgICAgICAgICAgICAgICB0aGlzLmRvQ3ljbGUodG9rZW4sIGNvdW50KTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChOVU1CRVIgPT0gdGhpcy5hbmFseXplci5raW5kKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSBwYXJzZUludCh0aGlzLmFuYWx5emVyLnRva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgICAgICBsZXQgbWV0aG9kOiBzdHJpbmcgPSB0aGlzLmFuYWx5emVyLnRva2VuO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgIGlmIChtZXRob2QgPT0gUkVQRUFUX1NUQVIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5hbmFseXplci50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0N5Y2xlKHRva2VuLCBjb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKENMRUFSLmluZGV4T2YodGhpcy5hbmFseXplci50b2tlbikgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cnRsZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKENPTE9SLmluZGV4T2YodGhpcy5hbmFseXplci50b2tlbikgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmdiID0gWzAsIDAsIDBdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgICAgICByZ2JbaV0gPSBwYXJzZUludCh0aGlzLmFuYWx5emVyLnRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50dXJ0bGUuY29sb3IocmdiWzBdLCByZ2JbMV0sIHJnYlsyXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUE9JTlQuaW5kZXhPZih0aGlzLmFuYWx5emVyLnRva2VuKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgIGxldCByOiBudW1iZXIgPSBwYXJzZUludCh0aGlzLmFuYWx5emVyLnRva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cnRsZS5wb2ludChyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZG9DeWNsZSh0b2tlbjogc3RyaW5nLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0b2tlbiA9PSAnWycpIHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hbmFseXplci50b2tlbik7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLmFuYWx5emVyLnBvc2l0aW9uO1xuICAgICAgICAgICAgd2hpbGUgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuaW5kZXggPSBzdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLm5leHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVycHJldCgpO1xuICAgICAgICAgICAgICAgIGNvdW50IC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuID09ICddJykge1xuICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFN5bnRheCBmcm9tIFwiLi9TeW50YXhcIjtcbmltcG9ydCBWaXJ0dWFsTWFjaGluZSBmcm9tIFwiLi4vVmlydHVhbE1hY2hpbmVcIjtcbmltcG9ydCBUdXJ0bGUgZnJvbSBcIi4uL3V0aWxzL1R1cnRsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9jayBleHRlbmRzIFN5bnRheCB7XG4gICAgaXRlbXM6IFN5bnRheFtdO1xuXG4gICAgY29uc3RydWN0b3IoLi4uaXRlbXM6IFN5bnRheFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICBhZGQoaXRlbTogU3ludGF4KSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKHR1cnRsZTpUdXJ0bGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5leGVjdXRlKHR1cnRsZSkpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlKHZtOiBWaXJ0dWFsTWFjaGluZSk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmdlbmVyYXRlKHZtKSk7XG4gICAgfVxuXG4gICAgb3B0aW1pemVkKHZtOiBWaXJ0dWFsTWFjaGluZSk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLm9wdGltaXplZCh2bSkpO1xuICAgIH1cblxuICAgIHRyYW5zbGF0ZShkZXB0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHRhYnMgPSBTeW50YXgudGFicyhkZXB0aCk7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gcmVzICs9IGAke3RhYnN9JHtpdGVtLnRyYW5zbGF0ZShkZXB0aCl9PGJyPmApO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbn0iLCJpbXBvcnQgU3ludGF4IGZyb20gXCIuL1N5bnRheFwiO1xuaW1wb3J0IFZpcnR1YWxNYWNoaW5lIGZyb20gXCIuLi9WaXJ0dWFsTWFjaGluZVwiO1xuaW1wb3J0IFR1cnRsZSBmcm9tIFwiLi4vdXRpbHMvVHVydGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0IGV4dGVuZHMgU3ludGF4IHtcbiAgICB2YWx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGUodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZCB7XG4gICAgICAgIHZtLnBva2UodGhpcy52YWx1ZSlcbiAgICB9XG5cbiAgICBleGVjdXRlKHR1cnRsZTpUdXJ0bGUpOiB2b2lkIHtcbiAgICB9XG5cbiAgICB0cmFuc2xhdGUoZGVwdGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHtTeW50YXgudGFicyhkZXB0aCl9JHt0aGlzLnZhbHVlfWA7XG4gICAgfVxuXG4gICAgb3B0aW1pemVkKHZtOiBWaXJ0dWFsTWFjaGluZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmdlbmVyYXRlKHZtKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgVHVydGxlQ29tbWFuZCBmcm9tIFwiLi9UdXJ0bGVDb21tYW5kXCI7XG5pbXBvcnQge0lOU1RSVUNUSU9OX0ZEfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgVmlydHVhbE1hY2hpbmUgZnJvbSBcIi4uL1ZpcnR1YWxNYWNoaW5lXCI7XG5pbXBvcnQgVHVydGxlIGZyb20gXCIuLi91dGlscy9UdXJ0bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmQgZXh0ZW5kcyBUdXJ0bGVDb21tYW5kIHtcbiAgICBleGVjdXRlKHR1cnRsZTpUdXJ0bGUpOiB2b2lkIHtcbiAgICAgICAgdHVydGxlLmZvcndhcmQodGhpcy5wYXJhbS52YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGUodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZCB7XG4gICAgICAgIHZtLnBva2UoSU5TVFJVQ1RJT05fRkQpO1xuICAgICAgICB0aGlzLnBhcmFtLmdlbmVyYXRlKHZtKTtcbiAgICB9XG5cbiAgICB0cmFuc2xhdGUoZGVwdGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgZG9wcmVkdSgke3RoaXMucGFyYW0udmFsdWV9KTtgXG4gICAgfVxuXG4gICAgb3B0aW1pemVkKHZtOiBWaXJ0dWFsTWFjaGluZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmdlbmVyYXRlKHZtKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgVHVydGxlQ29tbWFuZCBmcm9tIFwiLi9UdXJ0bGVDb21tYW5kXCI7XG5pbXBvcnQge0lOU1RSVUNUSU9OX0xUfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgVmlydHVhbE1hY2hpbmUgZnJvbSBcIi4uL1ZpcnR1YWxNYWNoaW5lXCI7XG5pbXBvcnQgVHVydGxlIGZyb20gXCIuLi91dGlscy9UdXJ0bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTHQgZXh0ZW5kcyBUdXJ0bGVDb21tYW5kIHtcbiAgICBleGVjdXRlKHR1cnRsZTpUdXJ0bGUpOiB2b2lkIHtcbiAgICAgICAgdHVydGxlLmxlZnQodGhpcy5wYXJhbS52YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGUodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZCB7XG4gICAgICAgIHZtLnBva2UoSU5TVFJVQ1RJT05fTFQpO1xuICAgICAgICB0aGlzLnBhcmFtLmdlbmVyYXRlKHZtKTtcbiAgICB9XG5cbiAgICB0cmFuc2xhdGUoZGVwdGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgZG9sYXZhKCR7dGhpcy5wYXJhbS52YWx1ZX0pO2BcbiAgICB9XG5cbiAgICBvcHRpbWl6ZWQodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGUodm0pO1xuICAgIH1cblxufSIsImltcG9ydCBDb25zdCBmcm9tIFwiLi9Db25zdFwiO1xuaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XG5pbXBvcnQgU3ludGF4IGZyb20gXCIuL1N5bnRheFwiO1xuaW1wb3J0IFZpcnR1YWxNYWNoaW5lIGZyb20gXCIuLi9WaXJ0dWFsTWFjaGluZVwiO1xuaW1wb3J0IHtJTlNUUlVDVElPTl9MT09QLCBJTlNUUlVDVElPTl9TRVQsIFJFUEVBVF9BQkN9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCBUdXJ0bGUgZnJvbSBcIi4uL3V0aWxzL1R1cnRsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBlYXQgZXh0ZW5kcyBTeW50YXgge1xuICAgIGNvdW50OiBDb25zdDtcbiAgICBib2R5OiBCbG9jaztcblxuICAgIGNvbnN0cnVjdG9yKGNvdW50OiBDb25zdCwgYm9keTogQmxvY2spIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIH1cblxuICAgIGV4ZWN1dGUodHVydGxlOlR1cnRsZSk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQudmFsdWU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2R5LmV4ZWN1dGUodHVydGxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlKHZtOiBWaXJ0dWFsTWFjaGluZSk6IHZvaWQge1xuICAgICAgICB2bS5wb2tlKElOU1RSVUNUSU9OX1NFVCk7XG4gICAgICAgIHZtLnBva2UoU3ludGF4LmNvdW50ZXJfYWRyKTtcbiAgICAgICAgdGhpcy5jb3VudC5nZW5lcmF0ZSh2bSk7XG4gICAgICAgIFN5bnRheC5jb3VudGVyX2Fkci0tO1xuICAgICAgICBsZXQgbG9vcF9ib2R5ID0gdm0uYWRyO1xuICAgICAgICB0aGlzLmJvZHkuZ2VuZXJhdGUodm0pO1xuICAgICAgICBTeW50YXguY291bnRlcl9hZHIrKztcbiAgICAgICAgdm0ucG9rZShJTlNUUlVDVElPTl9MT09QKTtcbiAgICAgICAgdm0ucG9rZShTeW50YXguY291bnRlcl9hZHIpO1xuICAgICAgICB2bS5wb2tlKGxvb3BfYm9keSk7XG4gICAgfVxuXG4gICAgb3B0aW1pemVkKHZtOiBWaXJ0dWFsTWFjaGluZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb3VudC52YWx1ZSA9PSAwIHx8IHRoaXMuYm9keS5pdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5jb3VudC52YWx1ZSA9PSAxIHx8IHRoaXMuYm9keS5pdGVtcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5Lm9wdGltaXplZCh2bSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHZtLnBva2UoSU5TVFJVQ1RJT05fU0VUKTtcbiAgICAgICAgdm0ucG9rZShTeW50YXguY291bnRlcl9hZHIpO1xuICAgICAgICB0aGlzLmNvdW50Lm9wdGltaXplZCh2bSk7XG4gICAgICAgIFN5bnRheC5jb3VudGVyX2Fkci0tO1xuICAgICAgICBsZXQgbG9vcF9ib2R5ID0gdm0uYWRyO1xuICAgICAgICB0aGlzLmJvZHkub3B0aW1pemVkKHZtKTtcbiAgICAgICAgU3ludGF4LmNvdW50ZXJfYWRyKys7XG4gICAgICAgIHZtLnBva2UoSU5TVFJVQ1RJT05fTE9PUCk7XG4gICAgICAgIHZtLnBva2UoU3ludGF4LmNvdW50ZXJfYWRyKTtcbiAgICAgICAgdm0ucG9rZShsb29wX2JvZHkpO1xuXG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKGRlcHRoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgdGFicyA9IFN5bnRheC50YWJzKGRlcHRoKTtcbiAgICAgICAgbGV0IGl0ZXIgPSBSRVBFQVRfQUJDW2RlcHRoXTtcbiAgICAgICAgcmV0dXJuIGBmb3IgKGludCAke2l0ZXJ9ID0gMDsgJHtpdGVyfSA8ICR7dGhpcy5jb3VudC52YWx1ZX07ICR7aXRlcn0rKykgezxicj5cbiAgICAgICAgJHt0aGlzLmJvZHkudHJhbnNsYXRlKGRlcHRoICsgMSl9JHt0YWJzfX1gXG4gICAgfVxufSIsImltcG9ydCBUdXJ0bGVDb21tYW5kIGZyb20gXCIuL1R1cnRsZUNvbW1hbmRcIjtcbmltcG9ydCB7SU5TVFJVQ1RJT05fUlR9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCBWaXJ0dWFsTWFjaGluZSBmcm9tIFwiLi4vVmlydHVhbE1hY2hpbmVcIjtcbmltcG9ydCBUdXJ0bGUgZnJvbSBcIi4uL3V0aWxzL1R1cnRsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdCBleHRlbmRzIFR1cnRsZUNvbW1hbmQge1xuICAgIGV4ZWN1dGUodHVydGxlOlR1cnRsZSk6IHZvaWQge1xuICAgICAgICB0dXJ0bGUucmlnaHQodGhpcy5wYXJhbS52YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGUodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZCB7XG4gICAgICAgIHZtLnBva2UoSU5TVFJVQ1RJT05fUlQpO1xuICAgICAgICB0aGlzLnBhcmFtLmdlbmVyYXRlKHZtKTtcbiAgICB9XG5cbiAgICB0cmFuc2xhdGUoZGVwdGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgZG9wcmF2YSgke3RoaXMucGFyYW0udmFsdWV9KTtgXG4gICAgfVxuXG4gICAgb3B0aW1pemVkKHZtOiBWaXJ0dWFsTWFjaGluZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmdlbmVyYXRlKHZtKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgVmlydHVhbE1hY2hpbmUgZnJvbSBcIi4uL1ZpcnR1YWxNYWNoaW5lXCI7XG5pbXBvcnQgVHVydGxlIGZyb20gXCIuLi91dGlscy9UdXJ0bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgU3ludGF4IHtcbiAgICBzdGF0aWMgY291bnRlcl9hZHI6IG51bWJlcjtcblxuICAgIGFic3RyYWN0IGV4ZWN1dGUodHVydGxlOlR1cnRsZSk6IHZvaWRcblxuICAgIGFic3RyYWN0IGdlbmVyYXRlKHZtOiBWaXJ0dWFsTWFjaGluZSk6IHZvaWRcblxuICAgIGFic3RyYWN0IG9wdGltaXplZCh2bTogVmlydHVhbE1hY2hpbmUpOiB2b2lkXG5cbiAgICBhYnN0cmFjdCB0cmFuc2xhdGUoZGVwdGg6IG51bWJlcik6IHN0cmluZ1xuXG4gICAgcHJvdGVjdGVkIHN0YXRpYyB0YWJzKGRlcHRoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVwdGg7IGkrKykge1xuICAgICAgICAgICAgcmVzICs9ICcmZW1zcDsnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufSIsImltcG9ydCBTeW50YXggZnJvbSBcIi4vU3ludGF4XCI7XG5pbXBvcnQgQ29uc3QgZnJvbSBcIi4vQ29uc3RcIjtcbmltcG9ydCBWaXJ0dWFsTWFjaGluZSBmcm9tIFwiLi4vVmlydHVhbE1hY2hpbmVcIjtcbmltcG9ydCBUdXJ0bGUgZnJvbSBcIi4uL3V0aWxzL1R1cnRsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBUdXJ0bGVDb21tYW5kIGV4dGVuZHMgU3ludGF4IHtcbiAgICBwYXJhbTogQ29uc3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbTogQ29uc3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wYXJhbSA9IHBhcmFtO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGV4ZWN1dGUodHVydGxlOlR1cnRsZSk6IHZvaWRcblxuICAgIGFic3RyYWN0IGdlbmVyYXRlKHZtOiBWaXJ0dWFsTWFjaGluZSk6IHZvaWRcblxuICAgIGFic3RyYWN0IHRyYW5zbGF0ZShkZXB0aDogbnVtYmVyKTogc3RyaW5nXG5cbiAgICBhYnN0cmFjdCBvcHRpbWl6ZWQodm06IFZpcnR1YWxNYWNoaW5lKTogdm9pZFxuXG59IiwiaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XG5pbXBvcnQgTGV4aWNhbEFuYWx5emVyIGZyb20gXCIuLi9BbmFseXplci9MZXhpY2FsQW5hbHl6ZXJcIjtcbmltcG9ydCB7Rk9SV0FSRCwgTEVGVCwgUkVQRUFULCBSSUdIVCwgV09SRH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IEZkIGZyb20gXCIuL0ZkXCI7XG5pbXBvcnQgQ29uc3QgZnJvbSBcIi4vQ29uc3RcIjtcbmltcG9ydCBMdCBmcm9tIFwiLi9MdFwiO1xuaW1wb3J0IFJ0IGZyb20gXCIuL1J0XCI7XG5pbXBvcnQgUmVwZWF0IGZyb20gXCIuL1JlcGVhdFwiO1xuXG5jb25zdCBwYXJzZSA9IChhbmFseXplcjogTGV4aWNhbEFuYWx5emVyKTogQmxvY2sgPT4ge1xuICAgIGxldCByZXN1bHQgPSBuZXcgQmxvY2soKTtcbiAgICB3aGlsZSAoYW5hbHl6ZXIua2luZCA9PSBXT1JEKSB7XG4gICAgICAgIGlmIChGT1JXQVJELmluZGV4T2YoYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICBhbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICByZXN1bHQuYWRkKG5ldyBGZChuZXcgQ29uc3QocGFyc2VJbnQoYW5hbHl6ZXIudG9rZW4pKSkpO1xuICAgICAgICAgICAgYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICB9IGVsc2UgaWYgKExFRlQuaW5kZXhPZihhbmFseXplci50b2tlbikgIT0gLTEpIHtcbiAgICAgICAgICAgIGFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgIHJlc3VsdC5hZGQobmV3IEx0KG5ldyBDb25zdChwYXJzZUludChhbmFseXplci50b2tlbikpKSk7XG4gICAgICAgICAgICBhbmFseXplci5zY2FuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoUklHSFQuaW5kZXhPZihhbmFseXplci50b2tlbikgIT0gLTEpIHtcbiAgICAgICAgICAgIGFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgIHJlc3VsdC5hZGQobmV3IFJ0KG5ldyBDb25zdChwYXJzZUludChhbmFseXplci50b2tlbikpKSk7XG4gICAgICAgICAgICBhbmFseXplci5zY2FuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoUkVQRUFULmluZGV4T2YoYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICBhbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICBsZXQgbiA9IHBhcnNlSW50KGFuYWx5emVyLnRva2VuKTtcbiAgICAgICAgICAgIGFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgIGFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgIHJlc3VsdC5hZGQobmV3IFJlcGVhdChuZXcgQ29uc3QobiksIHBhcnNlKGFuYWx5emVyKSkpO1xuICAgICAgICAgICAgYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXJzZTtcbiIsImltcG9ydCB7SU5TVFJVQ1RJT05fRkQsIElOU1RSVUNUSU9OX0xPT1AsIElOU1RSVUNUSU9OX0xULCBJTlNUUlVDVElPTl9SVCwgSU5TVFJVQ1RJT05fU0VUfSBmcm9tIFwiLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCBUdXJ0bGUgZnJvbSBcIi4vdXRpbHMvVHVydGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxNYWNoaW5lIHtcbiAgICBtZW06IG51bWJlcltdO1xuICAgIHBjOiBudW1iZXI7XG4gICAgdGVybWluYXRlZDogYm9vbGVhbjtcblxuICAgIGFkcjogbnVtYmVyO1xuXG4gICAgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGMgPSAwO1xuICAgICAgICB0aGlzLnRlcm1pbmF0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbSA9IG5ldyBBcnJheSgxMDApO1xuICAgICAgICB0aGlzLmFkciA9IDA7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSh0dXJ0bGU6IFR1cnRsZSk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXg6IG51bWJlcjtcbiAgICAgICAgc3dpdGNoICh0aGlzLm1lbVt0aGlzLnBjXSkge1xuICAgICAgICAgICAgY2FzZSBJTlNUUlVDVElPTl9GRDpcbiAgICAgICAgICAgICAgICB0aGlzLnBjKys7XG4gICAgICAgICAgICAgICAgdHVydGxlLmZvcndhcmQodGhpcy5tZW1bdGhpcy5wY10pO1xuICAgICAgICAgICAgICAgIHRoaXMucGMrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSU5TVFJVQ1RJT05fTFQ6XG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xuICAgICAgICAgICAgICAgIHR1cnRsZS5sZWZ0KHRoaXMubWVtW3RoaXMucGNdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBjKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElOU1RSVUNUSU9OX1JUOlxuICAgICAgICAgICAgICAgIHRoaXMucGMrKztcbiAgICAgICAgICAgICAgICB0dXJ0bGUucmlnaHQodGhpcy5tZW1bdGhpcy5wY10pO1xuICAgICAgICAgICAgICAgIHRoaXMucGMrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSU5TVFJVQ1RJT05fU0VUOlxuICAgICAgICAgICAgICAgIHRoaXMucGMrKztcbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMubWVtW3RoaXMucGNdO1xuICAgICAgICAgICAgICAgIHRoaXMucGMrKztcbiAgICAgICAgICAgICAgICB0aGlzLm1lbVtpbmRleF0gPSB0aGlzLm1lbVt0aGlzLnBjXTtcbiAgICAgICAgICAgICAgICB0aGlzLnBjKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElOU1RSVUNUSU9OX0xPT1A6XG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5tZW1bdGhpcy5wY107XG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xuICAgICAgICAgICAgICAgIHRoaXMubWVtW2luZGV4XSA9IHRoaXMubWVtW2luZGV4XSAtIDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWVtW2luZGV4XSA+IDApIHRoaXMucGMgPSB0aGlzLm1lbVt0aGlzLnBjXTtcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMucGMrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXJtaW5hdGVkID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcnVuKHR1cnRsZTogVHVydGxlKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgd2hpbGUgKCF0aGlzLnRlcm1pbmF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZSh0dXJ0bGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb2tlKGNvZGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbVt0aGlzLmFkcl0gPSBjb2RlO1xuICAgICAgICB0aGlzLmFkcisrO1xuICAgIH1cbn0iLCJpbXBvcnQgVHVydGxlIGZyb20gXCIuL3V0aWxzL1R1cnRsZVwiO1xuaW1wb3J0IExleGljYWxBbmFseXplciBmcm9tIFwiLi9BbmFseXplci9MZXhpY2FsQW5hbHl6ZXJcIjtcbmltcG9ydCBJbnRlcnByZXRlciBmcm9tIFwiLi9JbnRlcnByZXRlclwiO1xuaW1wb3J0IFZpcnR1YWxNYWNoaW5lIGZyb20gXCIuL1ZpcnR1YWxNYWNoaW5lXCI7XG5pbXBvcnQgcGFyc2UgZnJvbSBcIi4vU3ludGFjdGljYWxUcmVlL3BhcnNlclwiO1xuaW1wb3J0IENvbXBpbGVyIGZyb20gXCIuL0NvbXBpbGVyXCI7XG5pbXBvcnQgU3ludGF4IGZyb20gXCIuL1N5bnRhY3RpY2FsVHJlZS9TeW50YXhcIjtcblxuY29uc3QgaW5wdXRGaWVsZDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRGaWVsZCcpO1xuY29uc3Qgb3V0cHV0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKTtcbmNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbmNvbnN0IHR1cnRsZSA9IG5ldyBUdXJ0bGUoY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxubGV0IGlucHV0OiBzdHJpbmcgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+aW5wdXRGaWVsZCkudmFsdWU7XG5cbmNvbnN0IHZtID0gbmV3IFZpcnR1YWxNYWNoaW5lKCk7XG5jb25zdCBhbmFseXplcjogTGV4aWNhbEFuYWx5emVyID0gbmV3IExleGljYWxBbmFseXplcihpbnB1dCk7XG5jb25zdCBpbnRlcnByZXRlciA9IG5ldyBJbnRlcnByZXRlcihhbmFseXplciwgdHVydGxlKTtcbmNvbnN0IGNvbXBpbGVyID0gbmV3IENvbXBpbGVyKHZtKTtcblxuKDxIVE1MSW5wdXRFbGVtZW50PmlucHV0RmllbGQpLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlucHV0ID0gKDxIVE1MSW5wdXRFbGVtZW50PmlucHV0RmllbGQpLnZhbHVlO1xuICAgIGFuYWx5emVyLnNldElucHV0KGlucHV0KTtcbiAgICB0dXJ0bGUuY2xlYXIoKTtcbiAgICBtYWluKCk7XG59O1xuXG5cbmNvbnN0IG1haW4gPSAoKTogdm9pZCA9PiB7XG4gICAgYW5hbHl6ZXIuaW5pdCgpO1xuICAgIHZtLmluaXQoKTtcbiAgICBsZXQgcHJvZ3JhbSA9IHBhcnNlKGFuYWx5emVyKTtcbiAgICBTeW50YXguY291bnRlcl9hZHIgPSA5OTtcblxuICAgIHByb2dyYW0ub3B0aW1pemVkKHZtKTtcbiAgICBwcm9ncmFtLmV4ZWN1dGUodHVydGxlKTtcbiAgICB2bS5ydW4odHVydGxlKTtcblxuICAgIG91dHB1dC5pbm5lckhUTUwgPSBwcm9ncmFtLnRyYW5zbGF0ZSgwKTtcbn07XG5cbm1haW4oKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUdXJ0bGUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzV2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhc0hlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgeDogbnVtYmVyO1xuICAgIHByaXZhdGUgeTogbnVtYmVyO1xuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBhbmdsZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGZvcndhcmQobGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgTWF0aC5zaW4oVHVydGxlLmRlZ3JlZVRvUmFkaWFuKHRoaXMuYW5nbGUpKSAqIGxlbmd0aDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgTWF0aC5jb3MoVHVydGxlLmRlZ3JlZVRvUmFkaWFuKHRoaXMuYW5nbGUpKSAqIGxlbmd0aDtcblxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBiYWNrd2FyZChsZW5ndGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcndhcmQoLWxlbmd0aCk7XG4gICAgfVxuXG4gICAgbGVmdChhbmdsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5nbGUgKz0gYW5nbGU7XG4gICAgfVxuXG4gICAgcmlnaHQoYW5nbGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmFuZ2xlIC09IGFuZ2xlO1xuICAgIH1cblxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5jYW52YXNIZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgY29sb3IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbiAgICB9XG5cbiAgICBwb2ludChyOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy54LCB0aGlzLnksIHIsIHIsIE1hdGguUEkgLyA0LCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jYW52YXNXaWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzSGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDE4MDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVncmVlVG9SYWRpYW4oYW5nbGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLlBJIC8gMTgwICogYW5nbGVcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IE5PVEhJTkc6IG51bWJlciA9IDA7XG5leHBvcnQgY29uc3QgTlVNQkVSOiBudW1iZXIgPSAxO1xuZXhwb3J0IGNvbnN0IFdPUkQ6IG51bWJlciA9IDI7XG5leHBvcnQgY29uc3QgU1lNQk9MOiBudW1iZXIgPSAzO1xuXG5leHBvcnQgY29uc3QgRk9SV0FSRDogc3RyaW5nW10gPSBbJ2RvcHJlZHUnLCAnZHAnXTtcbmV4cG9ydCBjb25zdCBMRUZUOiBzdHJpbmdbXSA9IFsndmxhdm8nLCAndmwnXTtcbmV4cG9ydCBjb25zdCBSSUdIVDogc3RyaW5nW10gPSBbJ3ZwcmF2bycsICd2cCddO1xuZXhwb3J0IGNvbnN0IFJFUEVBVDogc3RyaW5nW10gPSBbJ29wYWt1aiddO1xuZXhwb3J0IGNvbnN0IENMRUFSOiBzdHJpbmdbXSA9IFsnem1heiddO1xuZXhwb3J0IGNvbnN0IENPTE9SOiBzdHJpbmdbXSA9IFsnZmFyYmEnXTtcbmV4cG9ydCBjb25zdCBQT0lOVDogc3RyaW5nW10gPSBbJ2JvZCddO1xuXG5leHBvcnQgY29uc3QgUkVQRUFUX1NUQVI6IHN0cmluZyA9ICcqJztcbmV4cG9ydCBjb25zdCBSRVBFQVRfQUJDOiBzdHJpbmcgPSAnaWprbG1ub3BxcnN0dic7XG5cbmV4cG9ydCBjb25zdCBJTlNUUlVDVElPTl9GRDogbnVtYmVyID0gMTtcbmV4cG9ydCBjb25zdCBJTlNUUlVDVElPTl9MVDogbnVtYmVyID0gMjtcbmV4cG9ydCBjb25zdCBJTlNUUlVDVElPTl9SVDogbnVtYmVyID0gMztcbmV4cG9ydCBjb25zdCBJTlNUUlVDVElPTl9TRVQ6IG51bWJlciA9IDQ7XG5leHBvcnQgY29uc3QgSU5TVFJVQ1RJT05fTE9PUDogbnVtYmVyID0gNTtcbiJdLCJzb3VyY2VSb290IjoiIn0=