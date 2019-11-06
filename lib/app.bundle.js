(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "u5Q/");
/******/ })
/************************************************************************/
/******/ ({

/***/ "NToG":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "SDJZ":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "u5Q/":
/*!**************************!*\
  !*** ./privacyBanner.js ***!
  \**************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivacyBanner; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "SDJZ");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "NToG");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var PrivacyBanner =
/*#__PURE__*/
function () {
  function PrivacyBanner() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PrivacyBanner);

    this.config = Object.assign({
      messageText: 'This website uses cookies to track your behavior and to improve your experience on the site. Do you agree',
      agreeText: 'Agree',
      acceptText: 'Yes',
      declineText: 'No',
      readMoreText: 'Read more',
      readMoreLink: '/privacy',
      yesNoPrefix: '',
      showYesNo: false,
      backgroundColor: '#3b3b3b',
      borderColor: '#474747',
      color: '#fff',
      maxWidth: 1230,
      paddingX: 15,
      paddingY: 0,
      slideFrom: 'top'
    }, config);
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PrivacyBanner, [{
    key: "init",
    value: function init() {
      if (document.cookie.indexOf('gdprPrivacyNoticeAccepted') === -1) {
        var div = this.createElement();
        this.insertBanner(div);
      }
    }
  }, {
    key: "insertBanner",
    value: function insertBanner(banner) {
      // Append div and setup
      this.banner = document.body.insertBefore(banner, document.body.firstChild);
      var bannerHeight = this.banner.getBoundingClientRect().height; // Animate banner

      if (this.config.slideFrom === 'top') {
        this.banner.style.height = "".concat(bannerHeight, "px");
        this.banner.style.position = 'absolute';
        document.body.addEventListener('transitionend', this.cleanUpAnimation.bind(this));
        document.body.style.transition = 'transform 0.2s ease';
        document.body.style.transform = "translateY(".concat(bannerHeight, "px)");
      } else {
        this.banner.style.transform = '';
      } // Attach events


      var agree = this.banner.querySelector('.gdpr-privacy-notice-agree');
      if (agree) agree.addEventListener('click', this.agree.bind(this));
      var decline = this.banner.querySelector('.gdpr-privacy-notice-decline');
      if (decline) decline.addEventListener('click', this.decline.bind(this));
    }
  }, {
    key: "close",
    value: function close() {
      this.banner.parentNode.removeChild(this.banner);
    }
  }, {
    key: "agree",
    value: function agree(event) {
      event.preventDefault();
      document.cookie = "gdprPrivacyNoticeAccepted=true; path=/; expires=".concat(new Date(new Date() * 1 + 365 * 864e+5).toUTCString()); // eslint-disable-line no-mixed-operators

      this.close();
    }
  }, {
    key: "decline",
    value: function decline(event) {
      event.preventDefault();
      document.cookie = "gdprPrivacyNoticeAccepted=false; path=/; expires=".concat(new Date(new Date() * 1 + 365 * 864e+5).toUTCString()); // eslint-disable-line no-mixed-operators

      this.close();
    }
  }, {
    key: "cleanUpAnimation",
    value: function cleanUpAnimation() {
      // Cleanup body
      document.body.style.transition = '';
      document.body.style.transform = ''; // Cleanup banner

      this.banner.style.transition = '';
      this.banner.style.position = 'static';
      this.banner.style.transform = '';
      this.banner.style.height = '';
    }
  }, {
    key: "createElement",
    value: function createElement() {
      var wrapper = document.createElement('div');
      wrapper.classList.add('gdpr-privacy-notice');
      wrapper.style.cssText = "\n      ".concat(this.config.slideFrom === 'top' ? 'position: relative;' : 'position: fixed;', "\n      ").concat(this.config.slideFrom === 'top' ? 'top: 0;' : 'bottom: 0;', "\n      left: 0;\n      width: 100%;\n      padding: 25px 0;\n      background: ").concat(this.config.backgroundColor, ";\n      color: ").concat(this.config.color, ";\n      ").concat(this.config.slideFrom === 'top' ? 'border-bottom:' : 'border-top:', " 1px solid ").concat(this.config.borderColor, ";\n      z-index: 999;\n      transition: transform 0.2s ease;\n      transform: translateY(").concat(this.config.slideFrom === 'top' ? '-100%' : '100%', ");\n    ");
      wrapper.innerHTML = "\n      <div style=\"display: flex;margin: 0 auto;max-width: ".concat(this.config.maxWidth, "px;flex-flow: row wrap;align-items: flex-start;justify-content: flex-start;\">\n        <div style=\"text-align: center;flex: 0 1 auto;width: 100%;padding: ").concat(this.config.paddingY, "px ").concat(this.config.paddingX, "px;\">\n          <p style=\"margin: 0;\">").concat(this.config.messageText, "\n          ").concat(this.config.readMoreText !== '' ? "(<a href=\"".concat(this.config.readMoreLink, "\" style=\"color: ").concat(this.config.color, "; text-decoration: underline;\">").concat(this.config.readMoreText, "</a>)") : '', "\n          ").concat(this.config.showYesNo ? "\n            ".concat(this.config.yesNoPrefix, "\n            <button style=\"font: inherit;color: ").concat(this.config.color, ";border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;\" class=\"gdpr-privacy-notice-agree\">").concat(this.config.acceptText, "</button> -\n            <button style=\"font: inherit;color: ").concat(this.config.color, ";border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;\" class=\"gdpr-privacy-notice-decline\">").concat(this.config.declineText, "</button>\n          ") : "\n            <button style=\"font: inherit;color: ".concat(this.config.color, ";border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;\" class=\"gdpr-privacy-notice-agree\">").concat(this.config.agreeText, "</button>\n          "), "\n          </p>\n        </div>\n      </div>\n    ");
      return wrapper;
    }
  }]);

  return PrivacyBanner;
}();



/***/ })

/******/ })["default"];
});