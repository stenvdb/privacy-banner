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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./privacyBanner.js":
/*!**************************!*\
  !*** ./privacyBanner.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PrivacyBanner = function () {
  function PrivacyBanner() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, PrivacyBanner);

    this.config = Object.assign({
      messageText: 'This website uses cookies to track your behavior and to improve your experience on the site. Do you agree',
      agreeText: 'Agree',
      readMoreText: 'Read more',
      readMoreLink: '/privacy',
      backgroundColor: '#3b3b3b',
      borderColor: '#474747',
      color: '#fff',
      maxWidth: 1230,
      paddingX: 15,
      paddingY: 0
    }, config);

    this.init();
  }

  _createClass(PrivacyBanner, [{
    key: 'init',
    value: function init() {
      if (document.cookie.indexOf('gdprPrivacyNoticeAccepted') === -1) {
        var div = this.createElement();
        this.insertBanner(div);
      }
    }
  }, {
    key: 'insertBanner',
    value: function insertBanner(banner) {
      // Append div and setup
      this.banner = document.body.insertBefore(banner, document.body.firstChild);
      document.body.addEventListener('transitionend', this.cleanUpAnimation.bind(this));
      var bannerHeight = this.banner.getBoundingClientRect().height;

      // Animate banner
      this.banner.style.height = bannerHeight + 'px';
      this.banner.style.position = 'absolute';
      document.body.style.transition = 'transform 0.2s ease';
      document.body.style.transform = 'translateY(' + bannerHeight + 'px)';

      // Attach events
      this.banner.querySelector('.gdpr-privacy-notice-agree').addEventListener('click', this.agree.bind(this));
    }
  }, {
    key: 'close',
    value: function close() {
      this.banner.parentNode.removeChild(this.banner);
    }
  }, {
    key: 'agree',
    value: function agree(event) {
      event.preventDefault();
      document.cookie = 'gdprPrivacyNoticeAccepted=true; path=/; expires=' + new Date(new Date() * 1 + 365 * 864e+5).toUTCString(); // eslint-disable-line no-mixed-operators
      this.close();
    }
  }, {
    key: 'cleanUpAnimation',
    value: function cleanUpAnimation() {
      // Cleanup body
      document.body.style.transition = '';
      document.body.style.transform = '';

      // Cleanup banner
      this.banner.style.transition = '';
      this.banner.style.position = 'static';
      this.banner.style.transform = '';
      this.banner.style.height = '';
    }
  }, {
    key: 'createElement',
    value: function createElement() {
      var wrapper = document.createElement('div');
      wrapper.classList.add('gdpr-privacy-notice');
      wrapper.style.cssText = '\n      position: relative;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 25px 0;\n      background: ' + this.config.backgroundColor + ';\n      color: ' + this.config.color + ';\n      border-bottom: 1px solid ' + this.config.borderColor + ';\n      z-index: 1;\n      transition: transform 0.2s ease;\n      transform: translateY(-100%);\n    ';
      wrapper.innerHTML = '\n      <div style="display: flex;margin: 0 auto;max-width: ' + this.config.maxWidth + 'px;flex-flow: row wrap;align-items: flex-start;justify-content: flex-start;">\n        <div style="text-align: center;flex: 0 1 auto;width: 100%;padding: ' + this.config.paddingY + 'px ' + this.config.paddingY + 'px;">\n          <p style="margin: 0;">' + this.config.messageText + ' (<a href="' + this.config.readMoreLink + '" style="color: #fff; text-decoration: underline;">' + this.config.readMoreText + '</a>)\n          <button style="color: #fff;border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-agree">' + this.config.agreeText + '</button></p>\n        </div>\n      </div>\n    ';
      return wrapper;
    }
  }]);

  return PrivacyBanner;
}();

exports.default = PrivacyBanner;

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi privacyBanner.js ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! privacyBanner.js */"./privacyBanner.js");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9wcml2YWN5QmFubmVyLmpzIl0sIm5hbWVzIjpbIlByaXZhY3lCYW5uZXIiLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJtZXNzYWdlVGV4dCIsImFncmVlVGV4dCIsInJlYWRNb3JlVGV4dCIsInJlYWRNb3JlTGluayIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJtYXhXaWR0aCIsInBhZGRpbmdYIiwicGFkZGluZ1kiLCJpbml0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJpbmRleE9mIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJhbm5lciIsImJhbm5lciIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFuVXBBbmltYXRpb24iLCJiaW5kIiwiYmFubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJxdWVyeVNlbGVjdG9yIiwiYWdyZWUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiY2xvc2UiLCJ3cmFwcGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3NzVGV4dCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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LFFBQWxCLEdBQTZCLFFBQTdCO0FBQ0EsV0FBS1gsTUFBTCxDQUFZVSxLQUFaLENBQWtCRyxTQUFsQixHQUE4QixFQUE5QjtBQUNBLFdBQUtiLE1BQUwsQ0FBWVUsS0FBWixDQUFrQkQsTUFBbEIsR0FBMkIsRUFBM0I7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTWMsVUFBVTdCLFNBQVNJLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQXlCLGNBQVFDLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLHFCQUF0QjtBQUNBRixjQUFRYixLQUFSLENBQWNnQixPQUFkLGtJQU1nQixLQUFLOUMsTUFBTCxDQUFZTyxlQU41Qix3QkFPVyxLQUFLUCxNQUFMLENBQVlTLEtBUHZCLDBDQVE2QixLQUFLVCxNQUFMLENBQVlRLFdBUnpDO0FBYUFtQyxjQUFRSSxTQUFSLG9FQUN3RCxLQUFLL0MsTUFBTCxDQUFZVSxRQURwRSxrS0FFeUUsS0FBS1YsTUFBTCxDQUFZWSxRQUZyRixXQUVtRyxLQUFLWixNQUFMLENBQVlZLFFBRi9HLCtDQUc4QixLQUFLWixNQUFMLENBQVlHLFdBSDFDLG1CQUdtRSxLQUFLSCxNQUFMLENBQVlNLFlBSC9FLDJEQUdpSixLQUFLTixNQUFMLENBQVlLLFlBSDdKLHFMQUlvSyxLQUFLTCxNQUFMLENBQVlJLFNBSmhMO0FBUUEsYUFBT3VDLE9BQVA7QUFDRDs7Ozs7O2tCQXhGa0I1QyxhIiwiZmlsZSI6Ii4vYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpdmFjeUJhbm5lciB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1lc3NhZ2VUZXh0OiAnVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byB0cmFjayB5b3VyIGJlaGF2aW9yIGFuZCB0byBpbXByb3ZlIHlvdXIgZXhwZXJpZW5jZSBvbiB0aGUgc2l0ZS4gRG8geW91IGFncmVlJyxcbiAgICAgIGFncmVlVGV4dDogJ0FncmVlJyxcbiAgICAgIHJlYWRNb3JlVGV4dDogJ1JlYWQgbW9yZScsXG4gICAgICByZWFkTW9yZUxpbms6ICcvcHJpdmFjeScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjM2IzYjNiJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnIzQ3NDc0NycsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgbWF4V2lkdGg6IDEyMzAsXG4gICAgICBwYWRkaW5nWDogMTUsXG4gICAgICBwYWRkaW5nWTogMFxuICAgIH0sIGNvbmZpZyk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKCdnZHByUHJpdmFjeU5vdGljZUFjY2VwdGVkJykgPT09IC0xKSB7XG4gICAgICBjb25zdCBkaXYgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICAgIHRoaXMuaW5zZXJ0QmFubmVyKGRpdik7XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0QmFubmVyKGJhbm5lcikge1xuICAgIC8vIEFwcGVuZCBkaXYgYW5kIHNldHVwXG4gICAgdGhpcy5iYW5uZXIgPSBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShiYW5uZXIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5jbGVhblVwQW5pbWF0aW9uLmJpbmQodGhpcykpO1xuICAgIGNvbnN0IGJhbm5lckhlaWdodCA9IHRoaXMuYmFubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIEFuaW1hdGUgYmFubmVyXG4gICAgdGhpcy5iYW5uZXIuc3R5bGUuaGVpZ2h0ID0gYCR7YmFubmVySGVpZ2h0fXB4YDtcbiAgICB0aGlzLmJhbm5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwLjJzIGVhc2UnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtiYW5uZXJIZWlnaHR9cHgpYDtcblxuICAgIC8vIEF0dGFjaCBldmVudHNcbiAgICB0aGlzLmJhbm5lci5xdWVyeVNlbGVjdG9yKCcuZ2Rwci1wcml2YWN5LW5vdGljZS1hZ3JlZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZ3JlZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuYmFubmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5iYW5uZXIpO1xuICB9XG5cbiAgYWdyZWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGBnZHByUHJpdmFjeU5vdGljZUFjY2VwdGVkPXRydWU7IHBhdGg9LzsgZXhwaXJlcz0ke25ldyBEYXRlKG5ldyBEYXRlKCkgKiAxICsgMzY1ICogODY0ZSs1KS50b1VUQ1N0cmluZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbWl4ZWQtb3BlcmF0b3JzXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgY2xlYW5VcEFuaW1hdGlvbigpIHtcbiAgICAvLyBDbGVhbnVwIGJvZHlcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgLy8gQ2xlYW51cCBiYW5uZXJcbiAgICB0aGlzLmJhbm5lci5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgdGhpcy5iYW5uZXIuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICB0aGlzLmJhbm5lci5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICB0aGlzLmJhbm5lci5zdHlsZS5oZWlnaHQgPSAnJztcbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZ2Rwci1wcml2YWN5LW5vdGljZScpO1xuICAgIHdyYXBwZXIuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhpcy5jb25maWcuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgIGNvbG9yOiAke3RoaXMuY29uZmlnLmNvbG9yfTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoaXMuY29uZmlnLmJvcmRlckNvbG9yfTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBgO1xuICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7bWFyZ2luOiAwIGF1dG87bWF4LXdpZHRoOiAke3RoaXMuY29uZmlnLm1heFdpZHRofXB4O2ZsZXgtZmxvdzogcm93IHdyYXA7YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO2ZsZXg6IDAgMSBhdXRvO3dpZHRoOiAxMDAlO3BhZGRpbmc6ICR7dGhpcy5jb25maWcucGFkZGluZ1l9cHggJHt0aGlzLmNvbmZpZy5wYWRkaW5nWX1weDtcIj5cbiAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjogMDtcIj4ke3RoaXMuY29uZmlnLm1lc3NhZ2VUZXh0fSAoPGEgaHJlZj1cIiR7dGhpcy5jb25maWcucmVhZE1vcmVMaW5rfVwiIHN0eWxlPVwiY29sb3I6ICNmZmY7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1wiPiR7dGhpcy5jb25maWcucmVhZE1vcmVUZXh0fTwvYT4pXG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cImNvbG9yOiAjZmZmO2JvcmRlcjogMDsgYmFja2dyb3VuZDogbm9uZTtjdXJzb3I6IHBvaW50ZXI7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7bWFyZ2luOiAwOyBwYWRkaW5nOiAwO1wiIGNsYXNzPVwiZ2Rwci1wcml2YWN5LW5vdGljZS1hZ3JlZVwiPiR7dGhpcy5jb25maWcuYWdyZWVUZXh0fTwvYnV0dG9uPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHJldHVybiB3cmFwcGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9