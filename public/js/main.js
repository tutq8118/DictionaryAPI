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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcz85NzBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/classCallCheck.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcz81YmMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/createClass.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcz85NTIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/defineProperty.js\n");

/***/ }),

/***/ "./scripts/components/Switch.js":
/*!**************************************!*\
  !*** ./scripts/components/Switch.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Switch; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Switch = /*#__PURE__*/function () {\n  function Switch(el) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Switch);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"themeSwitch\", document.querySelector('#themeSwitch'));\n\n    this.el = el;\n    this.handleThemeSwitch();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Switch, [{\n    key: \"initTheme\",\n    value: function initTheme() {\n      var darkThemeSelected = localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark'; // update checkbox\n\n      this.themeSwitch.checked = darkThemeSelected; // update body data-theme attribute\n\n      darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');\n    }\n  }, {\n    key: \"resetTheme\",\n    value: function resetTheme() {\n      if (this.themeSwitch.checked) {\n        // dark theme has been selected\n        document.body.setAttribute('data-theme', 'dark');\n        localStorage.setItem('themeSwitch', 'dark');\n      } else {\n        document.body.removeAttribute('data-theme');\n        localStorage.removeItem('themeSwitch');\n      }\n    }\n  }, {\n    key: \"handleThemeSwitch\",\n    value: function handleThemeSwitch() {\n      var _this = this;\n\n      this.initTheme(); // if user has already selected a specific theme -> apply it\n\n      this.themeSwitch.addEventListener('change', function () {\n        _this.resetTheme();\n      });\n    }\n  }]);\n\n  return Switch;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NvbXBvbmVudHMvU3dpdGNoLmpzPzE3NGQiXSwibmFtZXMiOlsiU3dpdGNoIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVUaGVtZVN3aXRjaCIsImRhcmtUaGVtZVNlbGVjdGVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW1lU3dpdGNoIiwiY2hlY2tlZCIsImJvZHkiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImluaXRUaGVtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNldFRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBcUJBLE07QUFFcEIsa0JBQVlDLEVBQVosRUFBZ0I7QUFBQTs7QUFBQSxzR0FERkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQ0U7O0FBQ2YsU0FBS0YsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0csaUJBQUw7QUFDQTs7OztXQUVELHFCQUFZO0FBQ1gsVUFBTUMsaUJBQWlCLEdBQ3RCQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsTUFBd0MsSUFBeEMsSUFDQUQsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLE1BQXdDLE1BRnpDLENBRFcsQ0FJWDs7QUFDQSxXQUFLQyxXQUFMLENBQWlCQyxPQUFqQixHQUEyQkosaUJBQTNCLENBTFcsQ0FNWDs7QUFDQUEsdUJBQWlCLEdBQ2RILFFBQVEsQ0FBQ1EsSUFBVCxDQUFjQyxZQUFkLENBQTJCLFlBQTNCLEVBQXlDLE1BQXpDLENBRGMsR0FFZFQsUUFBUSxDQUFDUSxJQUFULENBQWNFLGVBQWQsQ0FBOEIsWUFBOUIsQ0FGSDtBQUdBOzs7V0FFRCxzQkFBYTtBQUNaLFVBQUksS0FBS0osV0FBTCxDQUFpQkMsT0FBckIsRUFBOEI7QUFDN0I7QUFDQVAsZ0JBQVEsQ0FBQ1EsSUFBVCxDQUFjQyxZQUFkLENBQTJCLFlBQTNCLEVBQXlDLE1BQXpDO0FBQ0FMLG9CQUFZLENBQUNPLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0MsTUFBcEM7QUFDQSxPQUpELE1BSU87QUFDTlgsZ0JBQVEsQ0FBQ1EsSUFBVCxDQUFjRSxlQUFkLENBQThCLFlBQTlCO0FBQ0FOLG9CQUFZLENBQUNRLFVBQWIsQ0FBd0IsYUFBeEI7QUFDQTtBQUNEOzs7V0FFRCw2QkFBb0I7QUFBQTs7QUFDbkIsV0FBS0MsU0FBTCxHQURtQixDQUNEOztBQUNsQixXQUFLUCxXQUFMLENBQWlCUSxnQkFBakIsQ0FBa0MsUUFBbEMsRUFBNEMsWUFBTTtBQUNqRCxhQUFJLENBQUNDLFVBQUw7QUFDQSxPQUZEO0FBR0EiLCJmaWxlIjoiLi9zY3JpcHRzL2NvbXBvbmVudHMvU3dpdGNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIHtcblx0dGhlbWVTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWVTd2l0Y2gnKTtcblx0Y29uc3RydWN0b3IoZWwpIHtcblx0XHR0aGlzLmVsID0gZWw7XG5cdFx0dGhpcy5oYW5kbGVUaGVtZVN3aXRjaCgpO1xuXHR9XG5cblx0aW5pdFRoZW1lKCkge1xuXHRcdGNvbnN0IGRhcmtUaGVtZVNlbGVjdGVkID1cblx0XHRcdGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZVN3aXRjaCcpICE9PSBudWxsICYmXG5cdFx0XHRsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWVTd2l0Y2gnKSA9PT0gJ2RhcmsnO1xuXHRcdC8vIHVwZGF0ZSBjaGVja2JveFxuXHRcdHRoaXMudGhlbWVTd2l0Y2guY2hlY2tlZCA9IGRhcmtUaGVtZVNlbGVjdGVkO1xuXHRcdC8vIHVwZGF0ZSBib2R5IGRhdGEtdGhlbWUgYXR0cmlidXRlXG5cdFx0ZGFya1RoZW1lU2VsZWN0ZWRcblx0XHRcdD8gZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpXG5cdFx0XHQ6IGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XG5cdH1cblxuXHRyZXNldFRoZW1lKCkge1xuXHRcdGlmICh0aGlzLnRoZW1lU3dpdGNoLmNoZWNrZWQpIHtcblx0XHRcdC8vIGRhcmsgdGhlbWUgaGFzIGJlZW4gc2VsZWN0ZWRcblx0XHRcdGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZVN3aXRjaCcsICdkYXJrJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XG5cdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGhlbWVTd2l0Y2gnKTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVUaGVtZVN3aXRjaCgpIHtcblx0XHR0aGlzLmluaXRUaGVtZSgpOyAvLyBpZiB1c2VyIGhhcyBhbHJlYWR5IHNlbGVjdGVkIGEgc3BlY2lmaWMgdGhlbWUgLT4gYXBwbHkgaXRcblx0XHR0aGlzLnRoZW1lU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdHRoaXMucmVzZXRUaGVtZSgpO1xuXHRcdH0pO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scripts/components/Switch.js\n");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Switch */ \"./scripts/components/Switch.js\");\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);\n\n    new _components_Switch__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, null, [{\n    key: \"init\",\n    value: function init() {\n      var index = new App();\n      return index;\n    }\n  }]);\n\n  return App;\n}();\n\n(function () {\n  App.init();\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL21haW4uanM/Njc4YyJdLCJuYW1lcyI6WyJBcHAiLCJTd2l0Y2giLCJpbmRleCIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsR0FBYjtBQUNDLGlCQUFjO0FBQUE7O0FBQ2IsUUFBSUMsMERBQUo7QUFDQTs7QUFIRjtBQUFBO0FBQUEsV0FLQyxnQkFBYztBQUNiLFVBQU1DLEtBQUssR0FBRyxJQUFJRixHQUFKLEVBQWQ7QUFDQSxhQUFPRSxLQUFQO0FBQ0E7QUFSRjs7QUFBQTtBQUFBOztBQVdBLENBQUMsWUFBWTtBQUNaRixLQUFHLENBQUNHLElBQUo7QUFDQSxDQUZEIiwiZmlsZSI6Ii4vc2NyaXB0cy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN3aXRjaCBmcm9tICcuL2NvbXBvbmVudHMvU3dpdGNoJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdG5ldyBTd2l0Y2goKTtcblx0fVxuXG5cdHN0YXRpYyBpbml0KCkge1xuXHRcdGNvbnN0IGluZGV4ID0gbmV3IEFwcCgpO1xuXHRcdHJldHVybiBpbmRleDtcblx0fVxufVxuXG4oZnVuY3Rpb24gKCkge1xuXHRBcHAuaW5pdCgpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./scripts/main.js\n");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./scripts/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sangnguyen/Documents/Tools/DictionaryAPI/scripts/main.js */"./scripts/main.js");


/***/ })

/******/ });