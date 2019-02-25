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
/* harmony import */ var _tasks_task1_task1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks/task1/task1 */ "./src/tasks/task1/task1.ts");
/* harmony import */ var _tasks_task1_task4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks/task1/task4 */ "./src/tasks/task1/task4.ts");
/* harmony import */ var _utils_turtle_turtle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/turtle/turtle */ "./src/utils/turtle/turtle.ts");



var inputField = document.getElementById('inputField');
var output = document.getElementById('output');
var canvas = document.getElementById("myCanvas");
var turtle = new _utils_turtle_turtle__WEBPACK_IMPORTED_MODULE_2__["default"](canvas.getContext("2d"), 200, 200);
// task 1
var input = inputField.value;
var result = Object(_tasks_task1_task1__WEBPACK_IMPORTED_MODULE_0__["default"])(input);
output.innerHTML = "s\u00FAbor obsahuje " + result.words + " slov, " + result.spaces + " medzier a " + result.otherChars + " in\u00E9 znaky.";
//task 2, 3, 4
var t2 = new _tasks_task1_task4__WEBPACK_IMPORTED_MODULE_1__["default"](turtle);
t2.draw("dl*pp*lz", 45, 100, 0.5);


/***/ }),

/***/ "./src/tasks/task1/task1.ts":
/*!**********************************!*\
  !*** ./src/tasks/task1/task1.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stringParser; });
var otherCharString = ',?';
function stringParser(input) {
    var words = 0;
    var spaces = 0;
    var otherChars = 0;
    var wordCount = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            if (wordCount !== 0) {
                words++;
                wordCount = 0;
            }
            spaces++;
            continue;
        }
        if (otherCharString.indexOf(input[i]) !== -1) {
            if (wordCount !== 0) {
                words++;
                wordCount = 0;
            }
            otherChars++;
            continue;
        }
        wordCount++;
    }
    return {
        words: words,
        spaces: spaces,
        otherChars: otherChars
    };
}


/***/ }),

/***/ "./src/tasks/task1/task4.ts":
/*!**********************************!*\
  !*** ./src/tasks/task1/task4.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Task4 = /** @class */ (function () {
    function Task4(turtle) {
        this.turtle = turtle;
    }
    Task4.prototype.draw = function (text, angle, step, change) {
        if (step < 1) {
            return;
        }
        for (var i = 0; i < text.length; i++) {
            switch (text[i]) {
                case 'l':
                    this.turtle.left(angle);
                    break;
                case 'p':
                    this.turtle.right(angle);
                    break;
                case 'd':
                    this.turtle.forward(step);
                    break;
                case 'z':
                    this.turtle.backward(step);
                    break;
                case '*':
                    this.draw(text, angle, step * change, change);
                    break;
            }
        }
    };
    return Task4;
}());
/* harmony default export */ __webpack_exports__["default"] = (Task4);


/***/ }),

/***/ "./src/utils/turtle/turtle.ts":
/*!************************************!*\
  !*** ./src/utils/turtle/turtle.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Turtle = /** @class */ (function () {
    function Turtle(canvas, x, y) {
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.angle = 180;
        this.canvas.moveTo(x, y);
    }
    Turtle.prototype.forward = function (length) {
        this.x = this.x + Math.sin(Turtle.degreeToRadian(this.angle)) * length;
        this.y = this.y + Math.cos(Turtle.degreeToRadian(this.angle)) * length;
        this.canvas.lineTo(this.x, this.y);
        this.canvas.stroke();
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
    Turtle.degreeToRadian = function (angle) {
        return Math.PI / 180 * angle;
    };
    return Turtle;
}());
/* harmony default export */ __webpack_exports__["default"] = (Turtle);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3Rhc2sxL3Rhc2sxLnRzIiwid2VicGFjazovLy8uL3NyYy90YXNrcy90YXNrMS90YXNrNC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHVydGxlL3R1cnRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ1A7QUFDRztBQUUzQyxJQUFNLFVBQVUsR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0RSxJQUFNLE1BQU0sR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5RCxJQUFNLE1BQU0sR0FBeUMsUUFBUSxDQUFD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MUIsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBSyxLQUFhO1FBQ2QsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELHNCQUFLLEdBQUwsVUFBTSxLQUFhO1FBQ2YsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLHFCQUFjLEdBQXJCLFVBQXNCLEtBQWE7UUFDL0IsT0FBTyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLO0lBQ2hDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQztBQUVjLHFFQUFNLEVBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgc3RyaW5nUGFyc2VyIGZyb20gJy4vdGFza3MvdGFzazEvdGFzazEnO1xuaW1wb3J0IFRhc2syIGZyb20gJy4vdGFza3MvdGFzazEvdGFzazQnO1xuaW1wb3J0IFR1cnRsZSBmcm9tICcuL3V0aWxzL3R1cnRsZS90dXJ0bGUnO1xuXG5jb25zdCBpbnB1dEZpZWxkOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dEZpZWxkJyk7XG5jb25zdCBvdXRwdXQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpO1xuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuY29uc3QgdHVydGxlOiBUdXJ0bGUgPSBuZXcgVHVydGxlKGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksIDIwMCwgMjAwKTtcblxuLy8gdGFzayAxXG5sZXQgaW5wdXQ6IHN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD5pbnB1dEZpZWxkKS52YWx1ZTtcbmxldCByZXN1bHQgPSBzdHJpbmdQYXJzZXIoaW5wdXQpO1xub3V0cHV0LmlubmVySFRNTCA9IGBzw7pib3Igb2JzYWh1amUgJHtyZXN1bHQud29yZHN9IHNsb3YsICR7cmVzdWx0LnNwYWNlc30gbWVkemllciBhICR7cmVzdWx0Lm90aGVyQ2hhcnN9IGluw6kgem5ha3kuYDtcblxuLy90YXNrIDIsIDMsIDRcbmxldCB0MjogVGFzazIgPSBuZXcgVGFzazIodHVydGxlKTtcbnQyLmRyYXcoXCJkbCpwcCpselwiLCA0NSwgMTAwLCAwLjUpO1xuIiwiY29uc3Qgb3RoZXJDaGFyU3RyaW5nOiBzdHJpbmcgPSAnLD8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHJpbmdQYXJzZXIoaW5wdXQ6IHN0cmluZyk6IHsgd29yZHM6IG51bWJlciwgc3BhY2VzOiBudW1iZXIsIG90aGVyQ2hhcnM6IG51bWJlciB9IHtcbiAgICBsZXQgd29yZHM6IG51bWJlciA9IDA7XG4gICAgbGV0IHNwYWNlczogbnVtYmVyID0gMDtcbiAgICBsZXQgb3RoZXJDaGFyczogbnVtYmVyID0gMDtcblxuICAgIGxldCB3b3JkQ291bnQ6IG51bWJlciA9IDA7XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpbnB1dFtpXSA9PT0gJyAnKSB7XG4gICAgICAgICAgICBpZiAod29yZENvdW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgd29yZHMrKztcbiAgICAgICAgICAgICAgICB3b3JkQ291bnQgPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFjZXMrKztcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyQ2hhclN0cmluZy5pbmRleE9mKGlucHV0W2ldKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmICh3b3JkQ291bnQgIT09IDApIHtcbiAgICAgICAgICAgICAgICB3b3JkcysrO1xuICAgICAgICAgICAgICAgIHdvcmRDb3VudCA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG90aGVyQ2hhcnMrKztcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICB3b3JkQ291bnQrKztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3b3JkcyxcbiAgICAgICAgc3BhY2VzLFxuICAgICAgICBvdGhlckNoYXJzXG4gICAgfVxufVxuIiwiaW1wb3J0IFR1cnRsZSBmcm9tICcuLi8uLi91dGlscy90dXJ0bGUvdHVydGxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrNCB7XG4gICAgdHVydGxlOiBUdXJ0bGU7XG5cbiAgICBjb25zdHJ1Y3Rvcih0dXJ0bGU6IFR1cnRsZSkge1xuICAgICAgICB0aGlzLnR1cnRsZSA9IHR1cnRsZTtcbiAgICB9XG5cbiAgICBkcmF3KHRleHQ6IHN0cmluZywgYW5nbGU6IG51bWJlciwgc3RlcDogbnVtYmVyLCBjaGFuZ2U6IG51bWJlcikge1xuICAgICAgICBpZiAoc3RlcCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3dpdGNoICh0ZXh0W2ldKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHVydGxlLmxlZnQoYW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJ0bGUucmlnaHQoYW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJ0bGUuZm9yd2FyZChzdGVwKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAneic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHVydGxlLmJhY2t3YXJkKHN0ZXApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3KHRleHQsIGFuZ2xlLCBzdGVwICogY2hhbmdlLCBjaGFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImNsYXNzIFR1cnRsZSB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjYW52YXM6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBhbmdsZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMTgwO1xuXG4gICAgICAgIHRoaXMuY2FudmFzLm1vdmVUbyh4LCB5KTtcbiAgICB9XG5cbiAgICBmb3J3YXJkKGxlbmd0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIE1hdGguc2luKFR1cnRsZS5kZWdyZWVUb1JhZGlhbih0aGlzLmFuZ2xlKSkgKiBsZW5ndGg7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueSArIE1hdGguY29zKFR1cnRsZS5kZWdyZWVUb1JhZGlhbih0aGlzLmFuZ2xlKSkgKiBsZW5ndGg7XG5cbiAgICAgICAgdGhpcy5jYW52YXMubGluZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgdGhpcy5jYW52YXMuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgYmFja3dhcmQobGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3J3YXJkKC1sZW5ndGgpO1xuICAgIH1cblxuICAgIGxlZnQoYW5nbGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmFuZ2xlICs9IGFuZ2xlO1xuICAgIH1cblxuICAgIHJpZ2h0KGFuZ2xlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbmdsZSAtPSBhbmdsZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVncmVlVG9SYWRpYW4oYW5nbGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLlBJIC8gMTgwICogYW5nbGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR1cnRsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=