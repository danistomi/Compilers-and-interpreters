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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Turtle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Turtle */ "./src/utils/Turtle.ts");
/* harmony import */ var _utils_Interpreter_LexicalAnalyzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/Interpreter/LexicalAnalyzer */ "./src/utils/Interpreter/LexicalAnalyzer.ts");
/* harmony import */ var _utils_Interpreter_Interpreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/Interpreter/Interpreter */ "./src/utils/Interpreter/Interpreter.ts");
/* harmony import */ var _utils_Compiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/Compiler */ "./src/utils/Compiler.ts");




var inputField = document.getElementById('inputField');
var output = document.getElementById('output');
var canvas = document.getElementById("myCanvas");
var turtle = new _utils_Turtle__WEBPACK_IMPORTED_MODULE_0__["default"](canvas.getContext("2d"), canvas.width, canvas.height);
var input = inputField.value;
var analyzer = new _utils_Interpreter_LexicalAnalyzer__WEBPACK_IMPORTED_MODULE_1__["default"](input);
var interpreter = new _utils_Interpreter_Interpreter__WEBPACK_IMPORTED_MODULE_2__["default"](analyzer, turtle);
var compiler = new _utils_Compiler__WEBPACK_IMPORTED_MODULE_3__["default"](analyzer, turtle);
inputField.onchange = function () {
    input = inputField.value;
    analyzer.setInput(input);
    turtle.clear();
    interpret();
};
var interpret = function () {
    analyzer.index = 0;
    analyzer.next();
    analyzer.scan();
    interpreter.interpret();
};
interpret();


/***/ }),

/***/ "./src/utils/Compiler.ts":
/*!*******************************!*\
  !*** ./src/utils/Compiler.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/utils/constants.ts");


var Compiler = /** @class */ (function () {
    function Compiler(analyzer, turtle) {
        this.turtle = turtle;
        this.analyzer = analyzer;
    }
    Compiler.prototype.reset = function () {
        this.pc = 0;
        this.terminated = false;
    };
    Compiler.prototype.execute = function () {
        var index;
        switch (this.mem[this.pc]) {
            case _constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_FD"]:
                this.pc++;
                this.turtle.forward(this.mem[this.pc]);
                this.pc++;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_LT"]:
                this.pc++;
                this.turtle.left(this.mem[this.pc]);
                this.pc++;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_RT"]:
                this.pc++;
                this.turtle.right(this.mem[this.pc]);
                this.pc++;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_SET"]:
                this.pc++;
                index = this.mem[this.pc];
                this.pc++;
                this.mem[index] = this.mem[this.pc];
                this.pc++;
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_LOOP"]:
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
    Compiler.prototype.compile = function (counter_adr) {
        while (this.analyzer.kind == _constants__WEBPACK_IMPORTED_MODULE_0__["WORD"]) {
            if (_constants__WEBPACK_IMPORTED_MODULE_0__["FORWARD"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_FD"]);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_constants__WEBPACK_IMPORTED_MODULE_0__["LEFT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_LT"]);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_constants__WEBPACK_IMPORTED_MODULE_0__["RIGHT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_RT"]);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_constants__WEBPACK_IMPORTED_MODULE_0__["REPEAT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_SET"]);
                this.poke(counter_adr);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
                this.analyzer.scan();
                var body_adr = this.adr;
                this.compile(counter_adr - 1);
                this.poke(_constants__WEBPACK_IMPORTED_MODULE_0__["INSTRUCTION_LOOP"]);
                this.poke(counter_adr);
                this.poke(body_adr);
                this.analyzer.scan();
            }
            else {
                break;
            }
        }
    };
    Compiler.prototype.poke = function (code) {
        this.mem[this.adr] = code;
        this.adr++;
    };
    return Compiler;
}());
/* harmony default export */ __webpack_exports__["default"] = (Compiler);


/***/ }),

/***/ "./src/utils/Interpreter/Interpreter.ts":
/*!**********************************************!*\
  !*** ./src/utils/Interpreter/Interpreter.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/utils/constants.ts");

var Interpreter = /** @class */ (function () {
    function Interpreter(analyzer, turtle) {
        this.analyzer = analyzer;
        this.turtle = turtle;
    }
    Interpreter.prototype.interpret = function () {
        while (this.analyzer.kind != _constants__WEBPACK_IMPORTED_MODULE_0__["NOTHING"]) {
            if (_constants__WEBPACK_IMPORTED_MODULE_0__["FORWARD"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.turtle.forward(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_constants__WEBPACK_IMPORTED_MODULE_0__["LEFT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.turtle.left(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_constants__WEBPACK_IMPORTED_MODULE_0__["RIGHT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.turtle.right(parseInt(this.analyzer.token));
                this.analyzer.scan();
            }
            else if (_constants__WEBPACK_IMPORTED_MODULE_0__["REPEAT"].indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                var count = parseInt(this.analyzer.token);
                this.analyzer.scan();
                var token = this.analyzer.token;
                this.doCycle(token, count);
            }
            else if (_constants__WEBPACK_IMPORTED_MODULE_0__["NUMBER"] == this.analyzer.kind) {
                var count = parseInt(this.analyzer.token);
                this.analyzer.scan();
                var method = this.analyzer.token;
                this.analyzer.scan();
                if (method == _constants__WEBPACK_IMPORTED_MODULE_0__["REPEAT_STAR"]) {
                    var token = this.analyzer.token;
                    this.doCycle(token, count);
                }
            }
            else if (_constants__WEBPACK_IMPORTED_MODULE_0__["CLEAR"].indexOf(this.analyzer.token) != -1) {
                this.turtle.clear();
                this.analyzer.scan();
            }
            else if (_constants__WEBPACK_IMPORTED_MODULE_0__["COLOR"].indexOf(this.analyzer.token) != -1) {
                var rgb = [0, 0, 0];
                for (var i = 0; i < 3; i++) {
                    this.analyzer.scan();
                    rgb[i] = parseInt(this.analyzer.token);
                }
                this.turtle.color(rgb[0], rgb[1], rgb[2]);
                this.analyzer.scan();
            }
            else if (_constants__WEBPACK_IMPORTED_MODULE_0__["POINT"].indexOf(this.analyzer.token) != -1) {
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

/***/ "./src/utils/Interpreter/LexicalAnalyzer.ts":
/*!**************************************************!*\
  !*** ./src/utils/Interpreter/LexicalAnalyzer.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/utils/constants.ts");

var LexicalAnalyzer = /** @class */ (function () {
    function LexicalAnalyzer(input) {
        this.input = input;
    }
    LexicalAnalyzer.prototype.setInput = function (input) {
        this.input = input;
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
            this.kind = _constants__WEBPACK_IMPORTED_MODULE_0__["NUMBER"];
        }
        else if (this.lookIsCharacter()) {
            do {
                this.token += this.look;
                this.next();
            } while ((this.lookIsCharacter()));
            this.kind = _constants__WEBPACK_IMPORTED_MODULE_0__["WORD"];
        }
        else if (this.look != '\0') {
            this.token = this.look;
            this.next();
            this.kind = _constants__WEBPACK_IMPORTED_MODULE_0__["SYMBOL"];
        }
        else {
            this.kind = _constants__WEBPACK_IMPORTED_MODULE_0__["NOTHING"];
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
/*! exports provided: NOTHING, NUMBER, WORD, SYMBOL, FORWARD, LEFT, RIGHT, REPEAT, CLEAR, COLOR, POINT, REPEAT_STAR, INSTRUCTION_FD, INSTRUCTION_LT, INSTRUCTION_RT, INSTRUCTION_SET, INSTRUCTION_LOOP */
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
var INSTRUCTION_FD = 1;
var INSTRUCTION_LT = 2;
var INSTRUCTION_RT = 3;
var INSTRUCTION_SET = 4;
var INSTRUCTION_LOOP = 5;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0NvbXBpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9JbnRlcnByZXRlci9JbnRlcnByZXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvSW50ZXJwcmV0ZXIvTGV4aWNhbEFuYWx5emVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9UdXJ0bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDOEI7QUFDUjtBQUNsQjtBQUV4QyxJQUFNLFVBQVUsR0FBZ0IsUUFBUSxDQUFDLGNBQWMs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QUFXLENBQUMsQ0FBQztBQUNqQyxJQUFNLGNBQWMsR0FBVyxDQUFDLENBQUM7QUFDakMsSUFBTSxjQUFjLEdBQVcsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sZUFBZSxHQUFXLENBQUMsQ0FBQztBQUNsQyxJQUFNLGdCQUFnQixHQUFXLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCBUdXJ0bGUgZnJvbSAnLi91dGlscy9UdXJ0bGUnO1xuaW1wb3J0IExleGljYWxBbmFseXplciBmcm9tICcuL3V0aWxzL0ludGVycHJldGVyL0xleGljYWxBbmFseXplcic7XG5pbXBvcnQgSW50ZXJwcmV0ZXIgZnJvbSAnLi91dGlscy9JbnRlcnByZXRlci9JbnRlcnByZXRlcic7XG5pbXBvcnQgQ29tcGlsZXIgZnJvbSAnLi91dGlscy9Db21waWxlcic7XG5cbmNvbnN0IGlucHV0RmllbGQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RmllbGQnKTtcbmNvbnN0IG91dHB1dDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0Jyk7XG5jb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG5jb25zdCB0dXJ0bGU6IFR1cnRsZSA9IG5ldyBUdXJ0bGUoY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxubGV0IGlucHV0OiBzdHJpbmcgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+aW5wdXRGaWVsZCkudmFsdWU7XG5cbmNvbnN0IGFuYWx5emVyOiBMZXhpY2FsQW5hbHl6ZXIgPSBuZXcgTGV4aWNhbEFuYWx5emVyKGlucHV0KTtcbmNvbnN0IGludGVycHJldGVyID0gbmV3IEludGVycHJldGVyKGFuYWx5emVyLCB0dXJ0bGUpO1xuY29uc3QgY29tcGlsZXIgPSBuZXcgQ29tcGlsZXIoYW5hbHl6ZXIsIHR1cnRsZSk7XG5cbig8SFRNTElucHV0RWxlbWVudD5pbnB1dEZpZWxkKS5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpbnB1dCA9ICg8SFRNTElucHV0RWxlbWVudD5pbnB1dEZpZWxkKS52YWx1ZTtcbiAgICBhbmFseXplci5zZXRJbnB1dChpbnB1dCk7XG4gICAgdHVydGxlLmNsZWFyKCk7XG4gICAgaW50ZXJwcmV0KCk7XG59O1xuXG5cbmNvbnN0IGludGVycHJldCA9ICgpOiB2b2lkID0+IHtcbiAgICBhbmFseXplci5pbmRleCA9IDA7XG4gICAgYW5hbHl6ZXIubmV4dCgpO1xuICAgIGFuYWx5emVyLnNjYW4oKTtcblxuICAgIGludGVycHJldGVyLmludGVycHJldCgpO1xufTtcblxuaW50ZXJwcmV0KCk7IiwiaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBUdXJ0bGUgZnJvbSBcIi4vVHVydGxlXCI7XG5pbXBvcnQgTGV4aWNhbEFuYWx5emVyIGZyb20gXCIuL0ludGVycHJldGVyL0xleGljYWxBbmFseXplclwiO1xuaW1wb3J0IHtJTlNUUlVDVElPTl9GRCwgSU5TVFJVQ1RJT05fTE9PUCwgSU5TVFJVQ1RJT05fTFQsIElOU1RSVUNUSU9OX1JULCBJTlNUUlVDVElPTl9TRVR9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21waWxlciB7XG4gICAgbWVtOiBudW1iZXJbXTtcbiAgICBwYzogbnVtYmVyO1xuICAgIHRlcm1pbmF0ZWQ6IGJvb2xlYW47XG5cbiAgICBhZHI6IG51bWJlcjtcblxuICAgIHR1cnRsZTogVHVydGxlO1xuICAgIGFuYWx5emVyOiBMZXhpY2FsQW5hbHl6ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihhbmFseXplcjogTGV4aWNhbEFuYWx5emVyLCB0dXJ0bGU6IFR1cnRsZSkge1xuICAgICAgICB0aGlzLnR1cnRsZSA9IHR1cnRsZTtcbiAgICAgICAgdGhpcy5hbmFseXplciA9IGFuYWx5emVyO1xuICAgIH1cblxuICAgIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBjID0gMDtcbiAgICAgICAgdGhpcy50ZXJtaW5hdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXI7XG4gICAgICAgIHN3aXRjaCAodGhpcy5tZW1bdGhpcy5wY10pIHtcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLklOU1RSVUNUSU9OX0ZEOlxuICAgICAgICAgICAgICAgIHRoaXMucGMrKztcbiAgICAgICAgICAgICAgICB0aGlzLnR1cnRsZS5mb3J3YXJkKHRoaXMubWVtW3RoaXMucGNdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBjKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNvbnN0YW50cy5JTlNUUlVDVElPTl9MVDpcbiAgICAgICAgICAgICAgICB0aGlzLnBjKys7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJ0bGUubGVmdCh0aGlzLm1lbVt0aGlzLnBjXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuSU5TVFJVQ1RJT05fUlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xuICAgICAgICAgICAgICAgIHRoaXMudHVydGxlLnJpZ2h0KHRoaXMubWVtW3RoaXMucGNdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBjKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNvbnN0YW50cy5JTlNUUlVDVElPTl9TRVQ6XG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5tZW1bdGhpcy5wY107XG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xuICAgICAgICAgICAgICAgIHRoaXMubWVtW2luZGV4XSA9IHRoaXMubWVtW3RoaXMucGNdO1xuICAgICAgICAgICAgICAgIHRoaXMucGMrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLklOU1RSVUNUSU9OX0xPT1A6XG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5tZW1bdGhpcy5wY107XG4gICAgICAgICAgICAgICAgdGhpcy5wYysrO1xuICAgICAgICAgICAgICAgIHRoaXMubWVtW2luZGV4XSA9IHRoaXMubWVtW2luZGV4XSAtIDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWVtW2luZGV4XSA+IDApIHRoaXMucGMgPSB0aGlzLm1lbVt0aGlzLnBjXTtcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMucGMrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXJtaW5hdGVkID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGlsZShjb3VudGVyX2FkcjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHdoaWxlICh0aGlzLmFuYWx5emVyLmtpbmQgPT0gY29uc3RhbnRzLldPUkQpIHtcbiAgICAgICAgICAgIGlmIChjb25zdGFudHMuRk9SV0FSRC5pbmRleE9mKHRoaXMuYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlKElOU1RSVUNUSU9OX0ZEKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBva2UocGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbikpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb25zdGFudHMuTEVGVC5pbmRleE9mKHRoaXMuYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlKElOU1RSVUNUSU9OX0xUKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBva2UocGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbikpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb25zdGFudHMuUklHSFQuaW5kZXhPZih0aGlzLmFuYWx5emVyLnRva2VuKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9rZShJTlNUUlVDVElPTl9SVCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlKHBhcnNlSW50KHRoaXMuYW5hbHl6ZXIudG9rZW4pKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uc3RhbnRzLlJFUEVBVC5pbmRleE9mKHRoaXMuYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlKElOU1RSVUNUSU9OX1NFVCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2tlKGNvdW50ZXJfYWRyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBva2UocGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbikpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgIGxldCBib2R5X2FkciA9IHRoaXMuYWRyO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGlsZShjb3VudGVyX2FkciAtIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9rZShJTlNUUlVDVElPTl9MT09QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBva2UoY291bnRlcl9hZHIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9rZShib2R5X2Fkcik7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9rZShjb2RlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW1bdGhpcy5hZHJdID0gY29kZTtcbiAgICAgICAgdGhpcy5hZHIrKztcbiAgICB9XG59IiwiaW1wb3J0IExleGljYWxBbmFseXplciBmcm9tICcuL0xleGljYWxBbmFseXplcidcbmltcG9ydCBUdXJ0bGUgZnJvbSAnLi4vVHVydGxlJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVycHJldGVyIHtcbiAgICBhbmFseXplcjogTGV4aWNhbEFuYWx5emVyO1xuICAgIHR1cnRsZTogVHVydGxlO1xuXG4gICAgY29uc3RydWN0b3IoYW5hbHl6ZXI6IExleGljYWxBbmFseXplciwgdHVydGxlOiBUdXJ0bGUpIHtcbiAgICAgICAgdGhpcy5hbmFseXplciA9IGFuYWx5emVyO1xuICAgICAgICB0aGlzLnR1cnRsZSA9IHR1cnRsZTtcbiAgICB9XG5cbiAgICBpbnRlcnByZXQoKTogdm9pZCB7XG4gICAgICAgIHdoaWxlICh0aGlzLmFuYWx5emVyLmtpbmQgIT0gY29uc3RhbnRzLk5PVEhJTkcpIHtcbiAgICAgICAgICAgIGlmIChjb25zdGFudHMuRk9SV0FSRC5pbmRleE9mKHRoaXMuYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJ0bGUuZm9yd2FyZChwYXJzZUludCh0aGlzLmFuYWx5emVyLnRva2VuKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uc3RhbnRzLkxFRlQuaW5kZXhPZih0aGlzLmFuYWx5emVyLnRva2VuKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgIHRoaXMudHVydGxlLmxlZnQocGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbikpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnN0YW50cy5SSUdIVC5pbmRleE9mKHRoaXMuYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJ0bGUucmlnaHQocGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbikpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnN0YW50cy5SRVBFQVQuaW5kZXhPZih0aGlzLmFuYWx5emVyLnRva2VuKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gcGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5hbmFseXplci50b2tlbjtcbiAgICAgICAgICAgICAgICB0aGlzLmRvQ3ljbGUodG9rZW4sIGNvdW50KTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb25zdGFudHMuTlVNQkVSID09IHRoaXMuYW5hbHl6ZXIua2luZCkge1xuICAgICAgICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gcGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgbGV0IG1ldGhvZDogc3RyaW5nID0gdGhpcy5hbmFseXplci50b2tlbjtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kID09IGNvbnN0YW50cy5SRVBFQVRfU1RBUikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmFuYWx5emVyLnRva2VuO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvQ3ljbGUodG9rZW4sIGNvdW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uc3RhbnRzLkNMRUFSLmluZGV4T2YodGhpcy5hbmFseXplci50b2tlbikgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cnRsZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnN0YW50cy5DT0xPUi5pbmRleE9mKHRoaXMuYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJnYiA9IFswLCAwLCAwXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgICAgICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQodGhpcy5hbmFseXplci50b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudHVydGxlLmNvbG9yKHJnYlswXSwgcmdiWzFdLCByZ2JbMl0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnN0YW50cy5QT0lOVC5pbmRleE9mKHRoaXMuYW5hbHl6ZXIudG9rZW4pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICAgICAgbGV0IHI6IG51bWJlciA9IHBhcnNlSW50KHRoaXMuYW5hbHl6ZXIudG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVydGxlLnBvaW50KHIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb0N5Y2xlKHRva2VuOiBzdHJpbmcsIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRva2VuID09ICdbJykge1xuICAgICAgICAgICAgdGhpcy5hbmFseXplci5zY2FuKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFuYWx5emVyLnRva2VuKTtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHRoaXMuYW5hbHl6ZXIucG9zaXRpb247XG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXplci5pbmRleCA9IHN0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIubmV4dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl6ZXIuc2NhbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJwcmV0KCk7XG4gICAgICAgICAgICAgICAgY291bnQgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4gPT0gJ10nKSB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5emVyLnNjYW4oKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXhpY2FsQW5hbHl6ZXIge1xuICAgIGlucHV0OiBzdHJpbmc7XG5cbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGxvb2s6IHN0cmluZztcblxuICAgIHRva2VuOiBzdHJpbmc7XG4gICAga2luZDogbnVtYmVyO1xuICAgIHBvc2l0aW9uOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnB1dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG5cbiAgICBzZXRJbnB1dChpbnB1dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG5cbiAgICBuZXh0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbmRleCA+PSB0aGlzLmlucHV0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5sb29rID0gJ1xcMCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9vayA9IHRoaXMuaW5wdXRbdGhpcy5pbmRleF07XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY2FuKCk6IHZvaWQge1xuICAgICAgICB3aGlsZSAodGhpcy5sb29rID09ICcgJyB8fCB0aGlzLmxvb2sgPT0gJ1xcbicpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRva2VuID0gJyc7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLmluZGV4IC0gMTtcblxuICAgICAgICBpZiAodGhpcy5sb29rSXNOdW1iZXIoKSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gKz0gdGhpcy5sb29rO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5sb29rSXNOdW1iZXIoKSk7XG4gICAgICAgICAgICB0aGlzLmtpbmQgPSBjb25zdGFudHMuTlVNQkVSO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9va0lzQ2hhcmFjdGVyKCkpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuICs9IHRoaXMubG9vaztcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKCh0aGlzLmxvb2tJc0NoYXJhY3RlcigpKSk7XG4gICAgICAgICAgICB0aGlzLmtpbmQgPSBjb25zdGFudHMuV09SRDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvb2sgIT0gJ1xcMCcpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0aGlzLmxvb2s7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIHRoaXMua2luZCA9IGNvbnN0YW50cy5TWU1CT0w7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtpbmQgPSBjb25zdGFudHMuTk9USElORztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9va0lzTnVtYmVyKCkge1xuICAgICAgICBsZXQgYXNjaWkgPSB0aGlzLmxvb2suY2hhckNvZGVBdCgwKTtcbiAgICAgICAgcmV0dXJuIGFzY2lpID4gNDcgJiYgYXNjaWkgPCA1ODtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvb2tJc0NoYXJhY3RlcigpIHtcbiAgICAgICAgbGV0IGFzY2lpID0gdGhpcy5sb29rLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIHJldHVybiAoYXNjaWkgPiA2NCAmJiBhc2NpaSA8IDkxKSB8fCAoYXNjaWkgPiA5NiAmJiBhc2NpaSA8IDEyMyk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1cnRsZSB7XG4gICAgcHJpdmF0ZSBjYW52YXNXaWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgY2FudmFzSGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSB4OiBudW1iZXI7XG4gICAgcHJpdmF0ZSB5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIGFuZ2xlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgZm9yd2FyZChsZW5ndGg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnggKyBNYXRoLnNpbihUdXJ0bGUuZGVncmVlVG9SYWRpYW4odGhpcy5hbmdsZSkpICogbGVuZ3RoO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyBNYXRoLmNvcyhUdXJ0bGUuZGVncmVlVG9SYWRpYW4odGhpcy5hbmdsZSkpICogbGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGJhY2t3YXJkKGxlbmd0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9yd2FyZCgtbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBsZWZ0KGFuZ2xlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbmdsZSArPSBhbmdsZTtcbiAgICB9XG5cbiAgICByaWdodChhbmdsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5nbGUgLT0gYW5nbGU7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBjb2xvcihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cblxuICAgIHBvaW50KHI6IG51bWJlcikge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLngsIHRoaXMueSwgciwgciwgTWF0aC5QSSAvIDQsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICB0aGlzLnggPSB0aGlzLmNhbnZhc1dpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXNIZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMTgwO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWdyZWVUb1JhZGlhbihhbmdsZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguUEkgLyAxODAgKiBhbmdsZVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgTk9USElORzogbnVtYmVyID0gMDtcbmV4cG9ydCBjb25zdCBOVU1CRVI6IG51bWJlciA9IDE7XG5leHBvcnQgY29uc3QgV09SRDogbnVtYmVyID0gMjtcbmV4cG9ydCBjb25zdCBTWU1CT0w6IG51bWJlciA9IDM7XG5cbmV4cG9ydCBjb25zdCBGT1JXQVJEOiBzdHJpbmdbXSA9IFsnZG9wcmVkdScsICdkcCddO1xuZXhwb3J0IGNvbnN0IExFRlQ6IHN0cmluZ1tdID0gWyd2bGF2bycsICd2bCddO1xuZXhwb3J0IGNvbnN0IFJJR0hUOiBzdHJpbmdbXSA9IFsndnByYXZvJywgJ3ZwJ107XG5leHBvcnQgY29uc3QgUkVQRUFUOiBzdHJpbmdbXSA9IFsnb3Bha3VqJ107XG5leHBvcnQgY29uc3QgQ0xFQVI6IHN0cmluZ1tdID0gWyd6bWF6J107XG5leHBvcnQgY29uc3QgQ09MT1I6IHN0cmluZ1tdID0gWydmYXJiYSddO1xuZXhwb3J0IGNvbnN0IFBPSU5UOiBzdHJpbmdbXSA9IFsnYm9kJ107XG5cblxuZXhwb3J0IGNvbnN0IFJFUEVBVF9TVEFSOiBzdHJpbmcgPSAnKic7XG5cblxuZXhwb3J0IGNvbnN0IElOU1RSVUNUSU9OX0ZEOiBudW1iZXIgPSAxO1xuZXhwb3J0IGNvbnN0IElOU1RSVUNUSU9OX0xUOiBudW1iZXIgPSAyO1xuZXhwb3J0IGNvbnN0IElOU1RSVUNUSU9OX1JUOiBudW1iZXIgPSAzO1xuZXhwb3J0IGNvbnN0IElOU1RSVUNUSU9OX1NFVDogbnVtYmVyID0gNDtcbmV4cG9ydCBjb25zdCBJTlNUUlVDVElPTl9MT09QOiBudW1iZXIgPSA1OyJdLCJzb3VyY2VSb290IjoiIn0=