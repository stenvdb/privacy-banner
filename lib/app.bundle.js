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
      wrapper.innerHTML = '\n      <div style="display: flex;margin: 0 auto;max-width: ' + this.config.maxWidth + 'px;flex-flow: row wrap;align-items: flex-start;justify-content: flex-start;">\n        <div style="text-align: center;flex: 0 1 auto;width: 100%;padding: ' + this.config.paddingY + 'px ' + this.config.paddingY + 'px;">\n          <p style="margin: 0;">' + this.config.messageText + ' (<a href="' + this.config.readMoreLink + '" style="color: #fff; text-decoration: underline;">' + this.config.readMoreText + '</a>)\n          ' + (this.config.showYesNo ? '\n            <button style="font: inherit;color: #fff;border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-agree">' + this.config.acceptText + '</button> -\n            <button style="font: inherit;color: #fff;border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-decline">' + this.config.declineText + '</button>\n          ' : '\n            <button style="font: inherit;color: #fff;border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-agree">' + this.config.agreeText + '</button>\n          ') + '\n          </p>\n        </div>\n      </div>\n    ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9wcml2YWN5QmFubmVyLmpzIl0sIm5hbWVzIjpbIlByaXZhY3lCYW5uZXIiLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJtZXNzYWdlVGV4dCIsImFncmVlVGV4dCIsImFjY2VwdFRleHQiLCJkZWNsaW5lVGV4dCIsInJlYWRNb3JlVGV4dCIsInJlYWRNb3JlTGluayIsInNob3dZZXNObyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJtYXhXaWR0aCIsInBhZGRpbmdYIiwicGFkZGluZ1kiLCJpbml0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJpbmRleE9mIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJhbm5lciIsImJhbm5lciIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFuVXBBbmltYXRpb24iLCJiaW5kIiwiYmFubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJhZ3JlZSIsInF1ZXJ5U2VsZWN0b3IiLCJkZWNsaW5lIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsImNsb3NlIiwid3JhcHBlciIsImNsYXNzTGlzdCIsImFkZCIsImNzc1RleHQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QVllLFFBRi9HLCtDQUc4QixLQUFLZixNQUFMLENBQVlHLFdBSDFDLG1CQUdtRSxLQUFLSCxNQUFMLENBQVlRLFlBSC9FLDJEQUdpSixLQUFLUixNQUFMLENBQVlPLFlBSDdKLDBCQUlRLEtBQUtQLE1BQUwsQ0FBWVMsU0FBWixnTUFDNEssS0FBS1QsTUFBTCxDQUFZSyxVQUR4TCw2TUFFOEssS0FBS0wsTUFBTCxDQUFZTSxXQUYxTCwwTkFJNEssS0FBS04sTUFBTCxDQUFZSSxTQUp4TCwwQkFKUjtBQWNBLGFBQU8yQyxPQUFQO0FBQ0Q7Ozs7OztrQkExR2tCaEQsYSIsImZpbGUiOiIuL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXZhY3lCYW5uZXIge1xuICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBtZXNzYWdlVGV4dDogJ1RoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gdHJhY2sgeW91ciBiZWhhdmlvciBhbmQgdG8gaW1wcm92ZSB5b3VyIGV4cGVyaWVuY2Ugb24gdGhlIHNpdGUuIERvIHlvdSBhZ3JlZScsXG4gICAgICBhZ3JlZVRleHQ6ICdBZ3JlZScsXG4gICAgICBhY2NlcHRUZXh0OiAnWWVzJyxcbiAgICAgIGRlY2xpbmVUZXh0OiAnTm8nLFxuICAgICAgcmVhZE1vcmVUZXh0OiAnUmVhZCBtb3JlJyxcbiAgICAgIHJlYWRNb3JlTGluazogJy9wcml2YWN5JyxcbiAgICAgIHNob3dZZXNObzogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjM2IzYjNiJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnIzQ3NDc0NycsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgbWF4V2lkdGg6IDEyMzAsXG4gICAgICBwYWRkaW5nWDogMTUsXG4gICAgICBwYWRkaW5nWTogMFxuICAgIH0sIGNvbmZpZyk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKCdnZHByUHJpdmFjeU5vdGljZUFjY2VwdGVkJykgPT09IC0xKSB7XG4gICAgICBjb25zdCBkaXYgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICAgIHRoaXMuaW5zZXJ0QmFubmVyKGRpdik7XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0QmFubmVyKGJhbm5lcikge1xuICAgIC8vIEFwcGVuZCBkaXYgYW5kIHNldHVwXG4gICAgdGhpcy5iYW5uZXIgPSBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShiYW5uZXIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5jbGVhblVwQW5pbWF0aW9uLmJpbmQodGhpcykpO1xuICAgIGNvbnN0IGJhbm5lckhlaWdodCA9IHRoaXMuYmFubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIEFuaW1hdGUgYmFubmVyXG4gICAgdGhpcy5iYW5uZXIuc3R5bGUuaGVpZ2h0ID0gYCR7YmFubmVySGVpZ2h0fXB4YDtcbiAgICB0aGlzLmJhbm5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwLjJzIGVhc2UnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtiYW5uZXJIZWlnaHR9cHgpYDtcblxuICAgIC8vIEF0dGFjaCBldmVudHNcbiAgICBjb25zdCBhZ3JlZSA9IHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5nZHByLXByaXZhY3ktbm90aWNlLWFncmVlJyk7XG4gICAgaWYgKGFncmVlKSBhZ3JlZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWdyZWUuYmluZCh0aGlzKSk7XG4gICAgY29uc3QgZGVjbGluZSA9IHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5nZHByLXByaXZhY3ktbm90aWNlLWRlY2xpbmUnKTtcbiAgICBpZiAoZGVjbGluZSkgZGVjbGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVjbGluZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuYmFubmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5iYW5uZXIpO1xuICB9XG5cbiAgYWdyZWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGBnZHByUHJpdmFjeU5vdGljZUFjY2VwdGVkPXRydWU7IHBhdGg9LzsgZXhwaXJlcz0ke25ldyBEYXRlKG5ldyBEYXRlKCkgKiAxICsgMzY1ICogODY0ZSs1KS50b1VUQ1N0cmluZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbWl4ZWQtb3BlcmF0b3JzXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgZGVjbGluZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQuY29va2llID0gYGdkcHJQcml2YWN5Tm90aWNlQWNjZXB0ZWQ9ZmFsc2U7IHBhdGg9LzsgZXhwaXJlcz0ke25ldyBEYXRlKG5ldyBEYXRlKCkgKiAxICsgMzY1ICogODY0ZSs1KS50b1VUQ1N0cmluZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbWl4ZWQtb3BlcmF0b3JzXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgY2xlYW5VcEFuaW1hdGlvbigpIHtcbiAgICAvLyBDbGVhbnVwIGJvZHlcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgLy8gQ2xlYW51cCBiYW5uZXJcbiAgICB0aGlzLmJhbm5lci5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgdGhpcy5iYW5uZXIuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICB0aGlzLmJhbm5lci5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICB0aGlzLmJhbm5lci5zdHlsZS5oZWlnaHQgPSAnJztcbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZ2Rwci1wcml2YWN5LW5vdGljZScpO1xuICAgIHdyYXBwZXIuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhpcy5jb25maWcuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgIGNvbG9yOiAke3RoaXMuY29uZmlnLmNvbG9yfTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoaXMuY29uZmlnLmJvcmRlckNvbG9yfTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBgO1xuICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7bWFyZ2luOiAwIGF1dG87bWF4LXdpZHRoOiAke3RoaXMuY29uZmlnLm1heFdpZHRofXB4O2ZsZXgtZmxvdzogcm93IHdyYXA7YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO2ZsZXg6IDAgMSBhdXRvO3dpZHRoOiAxMDAlO3BhZGRpbmc6ICR7dGhpcy5jb25maWcucGFkZGluZ1l9cHggJHt0aGlzLmNvbmZpZy5wYWRkaW5nWX1weDtcIj5cbiAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjogMDtcIj4ke3RoaXMuY29uZmlnLm1lc3NhZ2VUZXh0fSAoPGEgaHJlZj1cIiR7dGhpcy5jb25maWcucmVhZE1vcmVMaW5rfVwiIHN0eWxlPVwiY29sb3I6ICNmZmY7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1wiPiR7dGhpcy5jb25maWcucmVhZE1vcmVUZXh0fTwvYT4pXG4gICAgICAgICAgJHt0aGlzLmNvbmZpZy5zaG93WWVzTm8gPyBgXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwiZm9udDogaW5oZXJpdDtjb2xvcjogI2ZmZjtib3JkZXI6IDA7IGJhY2tncm91bmQ6IG5vbmU7Y3Vyc29yOiBwb2ludGVyO3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO21hcmdpbjogMDsgcGFkZGluZzogMDtcIiBjbGFzcz1cImdkcHItcHJpdmFjeS1ub3RpY2UtYWdyZWVcIj4ke3RoaXMuY29uZmlnLmFjY2VwdFRleHR9PC9idXR0b24+IC1cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJmb250OiBpbmhlcml0O2NvbG9yOiAjZmZmO2JvcmRlcjogMDsgYmFja2dyb3VuZDogbm9uZTtjdXJzb3I6IHBvaW50ZXI7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7bWFyZ2luOiAwOyBwYWRkaW5nOiAwO1wiIGNsYXNzPVwiZ2Rwci1wcml2YWN5LW5vdGljZS1kZWNsaW5lXCI+JHt0aGlzLmNvbmZpZy5kZWNsaW5lVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICBgIDogYFxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cImZvbnQ6IGluaGVyaXQ7Y29sb3I6ICNmZmY7Ym9yZGVyOiAwOyBiYWNrZ3JvdW5kOiBub25lO2N1cnNvcjogcG9pbnRlcjt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTttYXJnaW46IDA7IHBhZGRpbmc6IDA7XCIgY2xhc3M9XCJnZHByLXByaXZhY3ktbm90aWNlLWFncmVlXCI+JHt0aGlzLmNvbmZpZy5hZ3JlZVRleHR9PC9idXR0b24+XG4gICAgICAgICAgYH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==