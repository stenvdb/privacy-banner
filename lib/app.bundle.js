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
      acceptText: 'Yes',
      declineText: 'No',
      readMoreText: 'Read more',
      readMoreLink: '/privacy',
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
      var bannerHeight = this.banner.getBoundingClientRect().height;

      // Animate banner
      if (this.config.slideFrom === 'top') {
        this.banner.style.height = bannerHeight + 'px';
        this.banner.style.position = 'absolute';
        document.body.addEventListener('transitionend', this.cleanUpAnimation.bind(this));
        document.body.style.transition = 'transform 0.2s ease';
        document.body.style.transform = 'translateY(' + bannerHeight + 'px)';
      } else {
        this.banner.style.transform = '';
      }

      // Attach events
      var agree = this.banner.querySelector('.gdpr-privacy-notice-agree');
      if (agree) agree.addEventListener('click', this.agree.bind(this));
      var decline = this.banner.querySelector('.gdpr-privacy-notice-decline');
      if (decline) decline.addEventListener('click', this.decline.bind(this));
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
    key: 'decline',
    value: function decline(event) {
      event.preventDefault();
      document.cookie = 'gdprPrivacyNoticeAccepted=false; path=/; expires=' + new Date(new Date() * 1 + 365 * 864e+5).toUTCString(); // eslint-disable-line no-mixed-operators
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
      wrapper.style.cssText = '\n      ' + (this.config.slideFrom === 'top' ? 'position: relative;' : 'position: fixed;') + '\n      ' + (this.config.slideFrom === 'top' ? 'top: 0;' : 'bottom: 0;') + '\n      left: 0;\n      width: 100%;\n      padding: 25px 0;\n      background: ' + this.config.backgroundColor + ';\n      color: ' + this.config.color + ';\n      border-bottom: 1px solid ' + this.config.borderColor + ';\n      z-index: 1;\n      transition: transform 0.2s ease;\n      transform: translateY(' + (this.config.slideFrom === 'top' ? '-100%' : '100%') + ');\n    ';
      wrapper.innerHTML = '\n      <div style="display: flex;margin: 0 auto;max-width: ' + this.config.maxWidth + 'px;flex-flow: row wrap;align-items: flex-start;justify-content: flex-start;">\n        <div style="text-align: center;flex: 0 1 auto;width: 100%;padding: ' + this.config.paddingY + 'px ' + this.config.paddingY + 'px;">\n          <p style="margin: 0;">' + this.config.messageText + '\n          ' + (this.config.readMoreText !== '' ? '(<a href="' + this.config.readMoreLink + '" style="color: #fff; text-decoration: underline;">' + this.config.readMoreText + '</a>)' : '') + '\n          ' + (this.config.showYesNo ? '\n            <button style="font: inherit;color: #fff;border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-agree">' + this.config.acceptText + '</button> -\n            <button style="font: inherit;color: #fff;border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-decline">' + this.config.declineText + '</button>\n          ' : '\n            <button style="font: inherit;color: #fff;border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-agree">' + this.config.agreeText + '</button>\n          ') + '\n          </p>\n        </div>\n      </div>\n    ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9wcml2YWN5QmFubmVyLmpzIl0sIm5hbWVzIjpbIlByaXZhY3lCYW5uZXIiLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJtZXNzYWdlVGV4dCIsImFncmVlVGV4dCIsImFjY2VwdFRleHQiLCJkZWNsaW5lVGV4dCIsInJlYWRNb3JlVGV4dCIsInJlYWRNb3JlTGluayIsInNob3dZZXNObyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJtYXhXaWR0aCIsInBhZGRpbmdYIiwicGFkZGluZ1kiLCJzbGlkZUZyb20iLCJpbml0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJpbmRleE9mIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJhbm5lciIsImJhbm5lciIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYmFubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic3R5bGUiLCJwb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhblVwQW5pbWF0aW9uIiwiYmluZCIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJhZ3JlZSIsInF1ZXJ5U2VsZWN0b3IiLCJkZWNsaW5lIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsImNsb3NlIiwid3JhcHBlciIsImNsYXNzTGlzdCIsImFkZCIsImNzc1RleHQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QVosS0FBMEIsS0FBMUIsR0FBa0MscUJBQWxDLEdBQTBELGtCQUQ5RCxrQkFFSSxLQUFLaEIsTUFBTCxDQUFZZ0IsU0FBWixLQUEwQixLQUExQixHQUFrQyxTQUFsQyxHQUE4QyxZQUZsRCx5RkFNZ0IsS0FBS2hCLE1BQUwsQ0FBWVUsZUFONUIsd0JBT1csS0FBS1YsTUFBTCxDQUFZWSxLQVB2QiwwQ0FRNkIsS0FBS1osTUFBTCxDQUFZVyxXQVJ6QyxtR0FXMEIsS0FBS1gsTUFBTCxDQUFZZ0IsU0FBWixLQUEwQixLQUExQixHQUFrQyxPQUFsQyxHQUE0QyxNQVh0RTtBQWFBZ0MsY0FBUUksU0FBUixvRUFDd0QsS0FBS3BELE1BQUwsQ0FBWWEsUUFEcEUsa0tBRXlFLEtBQUtiLE1BQUwsQ0FBWWUsUUFGckYsV0FFbUcsS0FBS2YsTUFBTCxDQUFZZSxRQUYvRywrQ0FHOEIsS0FBS2YsTUFBTCxDQUFZRyxXQUgxQyxxQkFJUSxLQUFLSCxNQUFMLENBQVlPLFlBQVosS0FBNkIsRUFBN0Isa0JBQStDLEtBQUtQLE1BQUwsQ0FBWVEsWUFBM0QsMkRBQTZILEtBQUtSLE1BQUwsQ0FBWU8sWUFBekksYUFBK0osRUFKdkssc0JBS1EsS0FBS1AsTUFBTCxDQUFZUyxTQUFaLGdNQUM0SyxLQUFLVCxNQUFMLENBQVlLLFVBRHhMLDZNQUU4SyxLQUFLTCxNQUFMLENBQVlNLFdBRjFMLDBOQUk0SyxLQUFLTixNQUFMLENBQVlJLFNBSnhMLDBCQUxSO0FBZUEsYUFBTzRDLE9BQVA7QUFDRDs7Ozs7O2tCQWhIa0JqRCxhIiwiZmlsZSI6Ii4vYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpdmFjeUJhbm5lciB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1lc3NhZ2VUZXh0OiAnVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byB0cmFjayB5b3VyIGJlaGF2aW9yIGFuZCB0byBpbXByb3ZlIHlvdXIgZXhwZXJpZW5jZSBvbiB0aGUgc2l0ZS4gRG8geW91IGFncmVlJyxcbiAgICAgIGFncmVlVGV4dDogJ0FncmVlJyxcbiAgICAgIGFjY2VwdFRleHQ6ICdZZXMnLFxuICAgICAgZGVjbGluZVRleHQ6ICdObycsXG4gICAgICByZWFkTW9yZVRleHQ6ICdSZWFkIG1vcmUnLFxuICAgICAgcmVhZE1vcmVMaW5rOiAnL3ByaXZhY3knLFxuICAgICAgc2hvd1llc05vOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzYjNiM2InLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjNDc0NzQ3JyxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBtYXhXaWR0aDogMTIzMCxcbiAgICAgIHBhZGRpbmdYOiAxNSxcbiAgICAgIHBhZGRpbmdZOiAwLFxuICAgICAgc2xpZGVGcm9tOiAndG9wJ1xuICAgIH0sIGNvbmZpZyk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKCdnZHByUHJpdmFjeU5vdGljZUFjY2VwdGVkJykgPT09IC0xKSB7XG4gICAgICBjb25zdCBkaXYgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICAgIHRoaXMuaW5zZXJ0QmFubmVyKGRpdik7XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0QmFubmVyKGJhbm5lcikge1xuICAgIC8vIEFwcGVuZCBkaXYgYW5kIHNldHVwXG4gICAgdGhpcy5iYW5uZXIgPSBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShiYW5uZXIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgY29uc3QgYmFubmVySGVpZ2h0ID0gdGhpcy5iYW5uZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gQW5pbWF0ZSBiYW5uZXJcbiAgICBpZiAodGhpcy5jb25maWcuc2xpZGVGcm9tID09PSAndG9wJykge1xuICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuaGVpZ2h0ID0gYCR7YmFubmVySGVpZ2h0fXB4YDtcbiAgICAgIHRoaXMuYmFubmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuY2xlYW5VcEFuaW1hdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4ycyBlYXNlJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtiYW5uZXJIZWlnaHR9cHgpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iYW5uZXIuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgfVxuXG4gICAgLy8gQXR0YWNoIGV2ZW50c1xuICAgIGNvbnN0IGFncmVlID0gdGhpcy5iYW5uZXIucXVlcnlTZWxlY3RvcignLmdkcHItcHJpdmFjeS1ub3RpY2UtYWdyZWUnKTtcbiAgICBpZiAoYWdyZWUpIGFncmVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZ3JlZS5iaW5kKHRoaXMpKTtcbiAgICBjb25zdCBkZWNsaW5lID0gdGhpcy5iYW5uZXIucXVlcnlTZWxlY3RvcignLmdkcHItcHJpdmFjeS1ub3RpY2UtZGVjbGluZScpO1xuICAgIGlmIChkZWNsaW5lKSBkZWNsaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWNsaW5lLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5iYW5uZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmJhbm5lcik7XG4gIH1cblxuICBhZ3JlZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQuY29va2llID0gYGdkcHJQcml2YWN5Tm90aWNlQWNjZXB0ZWQ9dHJ1ZTsgcGF0aD0vOyBleHBpcmVzPSR7bmV3IERhdGUobmV3IERhdGUoKSAqIDEgKyAzNjUgKiA4NjRlKzUpLnRvVVRDU3RyaW5nKCl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1taXhlZC1vcGVyYXRvcnNcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBkZWNsaW5lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5jb29raWUgPSBgZ2RwclByaXZhY3lOb3RpY2VBY2NlcHRlZD1mYWxzZTsgcGF0aD0vOyBleHBpcmVzPSR7bmV3IERhdGUobmV3IERhdGUoKSAqIDEgKyAzNjUgKiA4NjRlKzUpLnRvVVRDU3RyaW5nKCl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1taXhlZC1vcGVyYXRvcnNcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBjbGVhblVwQW5pbWF0aW9uKCkge1xuICAgIC8vIENsZWFudXAgYm9keVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNmb3JtID0gJyc7XG5cbiAgICAvLyBDbGVhbnVwIGJhbm5lclxuICAgIHRoaXMuYmFubmVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB0aGlzLmJhbm5lci5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xuICAgIHRoaXMuYmFubmVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIHRoaXMuYmFubmVyLnN0eWxlLmhlaWdodCA9ICcnO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdnZHByLXByaXZhY3ktbm90aWNlJyk7XG4gICAgd3JhcHBlci5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgJHt0aGlzLmNvbmZpZy5zbGlkZUZyb20gPT09ICd0b3AnID8gJ3Bvc2l0aW9uOiByZWxhdGl2ZTsnIDogJ3Bvc2l0aW9uOiBmaXhlZDsnfVxuICAgICAgJHt0aGlzLmNvbmZpZy5zbGlkZUZyb20gPT09ICd0b3AnID8gJ3RvcDogMDsnIDogJ2JvdHRvbTogMDsnfVxuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMjVweCAwO1xuICAgICAgYmFja2dyb3VuZDogJHt0aGlzLmNvbmZpZy5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgY29sb3I6ICR7dGhpcy5jb25maWcuY29sb3J9O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dGhpcy5jb25maWcuYm9yZGVyQ29sb3J9O1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHt0aGlzLmNvbmZpZy5zbGlkZUZyb20gPT09ICd0b3AnID8gJy0xMDAlJyA6ICcxMDAlJ30pO1xuICAgIGA7XG4gICAgd3JhcHBlci5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDttYXJnaW46IDAgYXV0bzttYXgtd2lkdGg6ICR7dGhpcy5jb25maWcubWF4V2lkdGh9cHg7ZmxleC1mbG93OiByb3cgd3JhcDthbGlnbi1pdGVtczogZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7ZmxleDogMCAxIGF1dG87d2lkdGg6IDEwMCU7cGFkZGluZzogJHt0aGlzLmNvbmZpZy5wYWRkaW5nWX1weCAke3RoaXMuY29uZmlnLnBhZGRpbmdZfXB4O1wiPlxuICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOiAwO1wiPiR7dGhpcy5jb25maWcubWVzc2FnZVRleHR9XG4gICAgICAgICAgJHt0aGlzLmNvbmZpZy5yZWFkTW9yZVRleHQgIT09ICcnID8gYCg8YSBocmVmPVwiJHt0aGlzLmNvbmZpZy5yZWFkTW9yZUxpbmt9XCIgc3R5bGU9XCJjb2xvcjogI2ZmZjsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XCI+JHt0aGlzLmNvbmZpZy5yZWFkTW9yZVRleHR9PC9hPilgIDogJyd9XG4gICAgICAgICAgJHt0aGlzLmNvbmZpZy5zaG93WWVzTm8gPyBgXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwiZm9udDogaW5oZXJpdDtjb2xvcjogI2ZmZjtib3JkZXI6IDA7IGJhY2tncm91bmQ6IG5vbmU7Y3Vyc29yOiBwb2ludGVyO3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO21hcmdpbjogMDsgcGFkZGluZzogMDtcIiBjbGFzcz1cImdkcHItcHJpdmFjeS1ub3RpY2UtYWdyZWVcIj4ke3RoaXMuY29uZmlnLmFjY2VwdFRleHR9PC9idXR0b24+IC1cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJmb250OiBpbmhlcml0O2NvbG9yOiAjZmZmO2JvcmRlcjogMDsgYmFja2dyb3VuZDogbm9uZTtjdXJzb3I6IHBvaW50ZXI7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7bWFyZ2luOiAwOyBwYWRkaW5nOiAwO1wiIGNsYXNzPVwiZ2Rwci1wcml2YWN5LW5vdGljZS1kZWNsaW5lXCI+JHt0aGlzLmNvbmZpZy5kZWNsaW5lVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICBgIDogYFxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cImZvbnQ6IGluaGVyaXQ7Y29sb3I6ICNmZmY7Ym9yZGVyOiAwOyBiYWNrZ3JvdW5kOiBub25lO2N1cnNvcjogcG9pbnRlcjt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTttYXJnaW46IDA7IHBhZGRpbmc6IDA7XCIgY2xhc3M9XCJnZHByLXByaXZhY3ktbm90aWNlLWFncmVlXCI+JHt0aGlzLmNvbmZpZy5hZ3JlZVRleHR9PC9idXR0b24+XG4gICAgICAgICAgYH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==