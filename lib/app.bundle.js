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
      wrapper.style.cssText = '\n      position: relative;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 25px 0;\n      background: ' + this.config.backgroundColor + ';\n      color: ' + this.config.color + ';\n      border-bottom: 1px solid ' + this.config.borderColor + ';\n      z-index: 1;\n      transition: transform 0.2s ease;\n      transform: translateY(-100%);\n    ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9wcml2YWN5QmFubmVyLmpzIl0sIm5hbWVzIjpbIlByaXZhY3lCYW5uZXIiLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJtZXNzYWdlVGV4dCIsImFncmVlVGV4dCIsImFjY2VwdFRleHQiLCJkZWNsaW5lVGV4dCIsInJlYWRNb3JlVGV4dCIsInJlYWRNb3JlTGluayIsInNob3dZZXNObyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJtYXhXaWR0aCIsInBhZGRpbmdYIiwicGFkZGluZ1kiLCJpbml0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJpbmRleE9mIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJhbm5lciIsImJhbm5lciIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFuVXBBbmltYXRpb24iLCJiaW5kIiwiYmFubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJhZ3JlZSIsInF1ZXJ5U2VsZWN0b3IiLCJkZWNsaW5lIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsImNsb3NlIiwid3JhcHBlciIsImNsYXNzTGlzdCIsImFkZCIsImNzc1RleHQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QVllLFFBRi9HLCtDQUc4QixLQUFLZixNQUFMLENBQVlHLFdBSDFDLHFCQUlRLEtBQUtILE1BQUwsQ0FBWU8sWUFBWixLQUE2QixFQUE3QixrQkFBK0MsS0FBS1AsTUFBTCxDQUFZUSxZQUEzRCwyREFBNkgsS0FBS1IsTUFBTCxDQUFZTyxZQUF6SSxhQUErSixFQUp2SyxzQkFLUSxLQUFLUCxNQUFMLENBQVlTLFNBQVosZ01BQzRLLEtBQUtULE1BQUwsQ0FBWUssVUFEeEwsNk1BRThLLEtBQUtMLE1BQUwsQ0FBWU0sV0FGMUwsME5BSTRLLEtBQUtOLE1BQUwsQ0FBWUksU0FKeEwsMEJBTFI7QUFlQSxhQUFPMkMsT0FBUDtBQUNEOzs7Ozs7a0JBM0drQmhELGEiLCJmaWxlIjoiLi9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcml2YWN5QmFubmVyIHtcbiAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWVzc2FnZVRleHQ6ICdUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIHRyYWNrIHlvdXIgYmVoYXZpb3IgYW5kIHRvIGltcHJvdmUgeW91ciBleHBlcmllbmNlIG9uIHRoZSBzaXRlLiBEbyB5b3UgYWdyZWUnLFxuICAgICAgYWdyZWVUZXh0OiAnQWdyZWUnLFxuICAgICAgYWNjZXB0VGV4dDogJ1llcycsXG4gICAgICBkZWNsaW5lVGV4dDogJ05vJyxcbiAgICAgIHJlYWRNb3JlVGV4dDogJ1JlYWQgbW9yZScsXG4gICAgICByZWFkTW9yZUxpbms6ICcvcHJpdmFjeScsXG4gICAgICBzaG93WWVzTm86IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzNiM2IzYicsXG4gICAgICBib3JkZXJDb2xvcjogJyM0NzQ3NDcnLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIG1heFdpZHRoOiAxMjMwLFxuICAgICAgcGFkZGluZ1g6IDE1LFxuICAgICAgcGFkZGluZ1k6IDBcbiAgICB9LCBjb25maWcpO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmIChkb2N1bWVudC5jb29raWUuaW5kZXhPZignZ2RwclByaXZhY3lOb3RpY2VBY2NlcHRlZCcpID09PSAtMSkge1xuICAgICAgY29uc3QgZGl2ID0gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgICB0aGlzLmluc2VydEJhbm5lcihkaXYpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydEJhbm5lcihiYW5uZXIpIHtcbiAgICAvLyBBcHBlbmQgZGl2IGFuZCBzZXR1cFxuICAgIHRoaXMuYmFubmVyID0gZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYmFubmVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuY2xlYW5VcEFuaW1hdGlvbi5iaW5kKHRoaXMpKTtcbiAgICBjb25zdCBiYW5uZXJIZWlnaHQgPSB0aGlzLmJhbm5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBBbmltYXRlIGJhbm5lclxuICAgIHRoaXMuYmFubmVyLnN0eWxlLmhlaWdodCA9IGAke2Jhbm5lckhlaWdodH1weGA7XG4gICAgdGhpcy5iYW5uZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4ycyBlYXNlJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7YmFubmVySGVpZ2h0fXB4KWA7XG5cbiAgICAvLyBBdHRhY2ggZXZlbnRzXG4gICAgY29uc3QgYWdyZWUgPSB0aGlzLmJhbm5lci5xdWVyeVNlbGVjdG9yKCcuZ2Rwci1wcml2YWN5LW5vdGljZS1hZ3JlZScpO1xuICAgIGlmIChhZ3JlZSkgYWdyZWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFncmVlLmJpbmQodGhpcykpO1xuICAgIGNvbnN0IGRlY2xpbmUgPSB0aGlzLmJhbm5lci5xdWVyeVNlbGVjdG9yKCcuZ2Rwci1wcml2YWN5LW5vdGljZS1kZWNsaW5lJyk7XG4gICAgaWYgKGRlY2xpbmUpIGRlY2xpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlY2xpbmUuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmJhbm5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuYmFubmVyKTtcbiAgfVxuXG4gIGFncmVlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5jb29raWUgPSBgZ2RwclByaXZhY3lOb3RpY2VBY2NlcHRlZD10cnVlOyBwYXRoPS87IGV4cGlyZXM9JHtuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIDM2NSAqIDg2NGUrNSkudG9VVENTdHJpbmcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW1peGVkLW9wZXJhdG9yc1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIGRlY2xpbmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGBnZHByUHJpdmFjeU5vdGljZUFjY2VwdGVkPWZhbHNlOyBwYXRoPS87IGV4cGlyZXM9JHtuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIDM2NSAqIDg2NGUrNSkudG9VVENTdHJpbmcoKX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW1peGVkLW9wZXJhdG9yc1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIGNsZWFuVXBBbmltYXRpb24oKSB7XG4gICAgLy8gQ2xlYW51cCBib2R5XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcblxuICAgIC8vIENsZWFudXAgYmFubmVyXG4gICAgdGhpcy5iYW5uZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIHRoaXMuYmFubmVyLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG4gICAgdGhpcy5iYW5uZXIuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgdGhpcy5iYW5uZXIuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gIH1cblxuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2dkcHItcHJpdmFjeS1ub3RpY2UnKTtcbiAgICB3cmFwcGVyLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAyNXB4IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoaXMuY29uZmlnLmJhY2tncm91bmRDb2xvcn07XG4gICAgICBjb2xvcjogJHt0aGlzLmNvbmZpZy5jb2xvcn07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGlzLmNvbmZpZy5ib3JkZXJDb2xvcn07XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgYDtcbiAgICB3cmFwcGVyLmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O21hcmdpbjogMCBhdXRvO21heC13aWR0aDogJHt0aGlzLmNvbmZpZy5tYXhXaWR0aH1weDtmbGV4LWZsb3c6IHJvdyB3cmFwO2FsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtmbGV4OiAwIDEgYXV0bzt3aWR0aDogMTAwJTtwYWRkaW5nOiAke3RoaXMuY29uZmlnLnBhZGRpbmdZfXB4ICR7dGhpcy5jb25maWcucGFkZGluZ1l9cHg7XCI+XG4gICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46IDA7XCI+JHt0aGlzLmNvbmZpZy5tZXNzYWdlVGV4dH1cbiAgICAgICAgICAke3RoaXMuY29uZmlnLnJlYWRNb3JlVGV4dCAhPT0gJycgPyBgKDxhIGhyZWY9XCIke3RoaXMuY29uZmlnLnJlYWRNb3JlTGlua31cIiBzdHlsZT1cImNvbG9yOiAjZmZmOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcIj4ke3RoaXMuY29uZmlnLnJlYWRNb3JlVGV4dH08L2E+KWAgOiAnJ31cbiAgICAgICAgICAke3RoaXMuY29uZmlnLnNob3dZZXNObyA/IGBcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJmb250OiBpbmhlcml0O2NvbG9yOiAjZmZmO2JvcmRlcjogMDsgYmFja2dyb3VuZDogbm9uZTtjdXJzb3I6IHBvaW50ZXI7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7bWFyZ2luOiAwOyBwYWRkaW5nOiAwO1wiIGNsYXNzPVwiZ2Rwci1wcml2YWN5LW5vdGljZS1hZ3JlZVwiPiR7dGhpcy5jb25maWcuYWNjZXB0VGV4dH08L2J1dHRvbj4gLVxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cImZvbnQ6IGluaGVyaXQ7Y29sb3I6ICNmZmY7Ym9yZGVyOiAwOyBiYWNrZ3JvdW5kOiBub25lO2N1cnNvcjogcG9pbnRlcjt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTttYXJnaW46IDA7IHBhZGRpbmc6IDA7XCIgY2xhc3M9XCJnZHByLXByaXZhY3ktbm90aWNlLWRlY2xpbmVcIj4ke3RoaXMuY29uZmlnLmRlY2xpbmVUZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIGAgOiBgXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwiZm9udDogaW5oZXJpdDtjb2xvcjogI2ZmZjtib3JkZXI6IDA7IGJhY2tncm91bmQ6IG5vbmU7Y3Vyc29yOiBwb2ludGVyO3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO21hcmdpbjogMDsgcGFkZGluZzogMDtcIiBjbGFzcz1cImdkcHItcHJpdmFjeS1ub3RpY2UtYWdyZWVcIj4ke3RoaXMuY29uZmlnLmFncmVlVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICBgfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHJldHVybiB3cmFwcGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9