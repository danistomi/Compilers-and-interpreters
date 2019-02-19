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
    Turtle.prototype.forward = function (lenght) {
        var nextX = this.x + Math.sin(Turtle.degreeToRadian(this.angle)) * lenght;
        var nextY = this.y + Math.cos(Turtle.degreeToRadian(this.angle)) * lenght;
        this.canvas.lineTo(nextX, nextY);
        this.canvas.stroke();
        this.x = nextX;
        this.y = nextY;
    };
    Turtle.prototype.backward = function (lenght) {
        this.forward(-lenght);
    };
    Turtle.prototype.left = function (angle) {
        this.angle += angle;
    };
    Turtle.prototype.right = function (angle) {
        this.angle -= angle;
    };
    Turtle.degreeToRadian = function (angle) {
        return (Math.PI * 2) / 360 * angle;
    };
    return Turtle;
}());
/* harmony default export */ __webpack_exports__["default"] = (Turtle);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL3Rhc2sxL3Rhc2sxLnRzIiwid2VicGFjazovLy8uL3NyYy90YXNrcy90YXNrMS90YXNrNC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHVydGxlL3R1cnRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ1A7QUFDRztBQUUzQyxJQUFNLFVBQVUsR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0RSxJQUFNLE1BQU0sR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5RCxJQUFNLE1BQU0sR0FBeUMsUUFBUSxDQUFD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QUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQscUJBQUksR0FBSixVQUFLLEtBQWE7UUFDZCxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQUssR0FBTCxVQUFNLEtBQWE7UUFDZixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRU0scUJBQWMsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSztJQUN0QyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7QUFFYyxxRUFBTSxFQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHN0cmluZ1BhcnNlciBmcm9tICcuL3Rhc2tzL3Rhc2sxL3Rhc2sxJztcbmltcG9ydCBUYXNrMiBmcm9tICcuL3Rhc2tzL3Rhc2sxL3Rhc2s0JztcbmltcG9ydCBUdXJ0bGUgZnJvbSAnLi91dGlscy90dXJ0bGUvdHVydGxlJztcblxuY29uc3QgaW5wdXRGaWVsZDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRGaWVsZCcpO1xuY29uc3Qgb3V0cHV0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKTtcbmNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbmNvbnN0IHR1cnRsZTogVHVydGxlID0gbmV3IFR1cnRsZShjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLCAyMDAsIDIwMCk7XG5cbi8vIHRhc2sgMVxubGV0IGlucHV0OiBzdHJpbmcgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+aW5wdXRGaWVsZCkudmFsdWU7XG5sZXQgcmVzdWx0ID0gc3RyaW5nUGFyc2VyKGlucHV0KTtcbm91dHB1dC5pbm5lckhUTUwgPSBgc8O6Ym9yIG9ic2FodWplICR7cmVzdWx0LndvcmRzfSBzbG92LCAke3Jlc3VsdC5zcGFjZXN9IG1lZHppZXIgYSAke3Jlc3VsdC5vdGhlckNoYXJzfSBpbsOpIHpuYWt5LmA7XG5cbi8vdGFzayAyLCAzLCA0XG5sZXQgdDI6IFRhc2syID0gbmV3IFRhc2syKHR1cnRsZSk7XG50Mi5kcmF3KFwiZGwqcHAqbHpcIiwgNDUsIDEwMCwgMC41KTtcbiIsImNvbnN0IG90aGVyQ2hhclN0cmluZzogc3RyaW5nID0gJyw/JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyaW5nUGFyc2VyKGlucHV0OiBzdHJpbmcpOiB7IHdvcmRzOiBudW1iZXIsIHNwYWNlczogbnVtYmVyLCBvdGhlckNoYXJzOiBudW1iZXIgfSB7XG4gICAgbGV0IHdvcmRzOiBudW1iZXIgPSAwO1xuICAgIGxldCBzcGFjZXM6IG51bWJlciA9IDA7XG4gICAgbGV0IG90aGVyQ2hhcnM6IG51bWJlciA9IDA7XG5cbiAgICBsZXQgd29yZENvdW50OiBudW1iZXIgPSAwO1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW5wdXRbaV0gPT09ICcgJykge1xuICAgICAgICAgICAgaWYgKHdvcmRDb3VudCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHdvcmRzKys7XG4gICAgICAgICAgICAgICAgd29yZENvdW50ID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhY2VzKys7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChvdGhlckNoYXJTdHJpbmcuaW5kZXhPZihpbnB1dFtpXSkgIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAod29yZENvdW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgd29yZHMrKztcbiAgICAgICAgICAgICAgICB3b3JkQ291bnQgPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdGhlckNoYXJzKys7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgd29yZENvdW50Kys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd29yZHMsXG4gICAgICAgIHNwYWNlcyxcbiAgICAgICAgb3RoZXJDaGFyc1xuICAgIH1cbn0iLCJpbXBvcnQgVHVydGxlIGZyb20gJy4uLy4uL3V0aWxzL3R1cnRsZS90dXJ0bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2s0IHtcbiAgICB0dXJ0bGU6IFR1cnRsZTtcblxuICAgIGNvbnN0cnVjdG9yKHR1cnRsZTogVHVydGxlKSB7XG4gICAgICAgIHRoaXMudHVydGxlID0gdHVydGxlO1xuICAgIH1cblxuICAgIGRyYXcodGV4dDogc3RyaW5nLCBhbmdsZTogbnVtYmVyLCBzdGVwOiBudW1iZXIsIGNoYW5nZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChzdGVwIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRleHRbaV0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJ0bGUubGVmdChhbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3AnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cnRsZS5yaWdodChhbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cnRsZS5mb3J3YXJkKHN0ZXApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd6JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJ0bGUuYmFja3dhcmQoc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXcodGV4dCwgYW5nbGUsIHN0ZXAgKiBjaGFuZ2UsIGNoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImNsYXNzIFR1cnRsZSB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjYW52YXM6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBhbmdsZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMTgwO1xuXG4gICAgICAgIHRoaXMuY2FudmFzLm1vdmVUbyh4LCB5KTtcbiAgICB9XG5cbiAgICBmb3J3YXJkKGxlbmdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBuZXh0WCA9IHRoaXMueCArIE1hdGguc2luKFR1cnRsZS5kZWdyZWVUb1JhZGlhbih0aGlzLmFuZ2xlKSkgKiBsZW5naHQ7XG4gICAgICAgIGxldCBuZXh0WSA9IHRoaXMueSArIE1hdGguY29zKFR1cnRsZS5kZWdyZWVUb1JhZGlhbih0aGlzLmFuZ2xlKSkgKiBsZW5naHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLmxpbmVUbyhuZXh0WCwgbmV4dFkpO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHJva2UoKTtcbiAgICAgICAgdGhpcy54ID0gbmV4dFg7XG4gICAgICAgIHRoaXMueSA9IG5leHRZO1xuICAgIH1cblxuICAgIGJhY2t3YXJkKGxlbmdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9yd2FyZCgtbGVuZ2h0KTtcbiAgICB9XG5cbiAgICBsZWZ0KGFuZ2xlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbmdsZSArPSBhbmdsZTtcbiAgICB9XG5cbiAgICByaWdodChhbmdsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5nbGUgLT0gYW5nbGU7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlZ3JlZVRvUmFkaWFuKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKE1hdGguUEkgKiAyKSAvIDM2MCAqIGFuZ2xlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUdXJ0bGU7Il0sInNvdXJjZVJvb3QiOiIifQ==