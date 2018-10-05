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
      wrapper.innerHTML = '\n      <div style="display: flex;margin: 0 auto;max-width: ' + this.config.maxWidth + 'px;flex-flow: row wrap;align-items: flex-start;justify-content: flex-start;">\n        <div style="text-align: center;flex: 0 1 auto;width: 100%;padding: ' + this.config.paddingY + 'px ' + this.config.paddingY + 'px;">\n          <p style="margin: 0;">' + this.config.messageText + '\n          ' + (this.config.readMoreText !== '' ? '(<a href="' + this.config.readMoreLink + '" style="color: #fff; text-decoration: underline;">' + this.config.readMoreText + '</a>)' : '') + '\n          ' + (this.config.showYesNo ? '\n            ' + this.config.yesNoPrefix + '\n            <button style="font: inherit;color: #fff;border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-agree">' + this.config.acceptText + '</button> -\n            <button style="font: inherit;color: #fff;border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-decline">' + this.config.declineText + '</button>\n          ' : '\n            <button style="font: inherit;color: #fff;border: 0; background: none;cursor: pointer;text-decoration: underline;margin: 0; padding: 0;" class="gdpr-privacy-notice-agree">' + this.config.agreeText + '</button>\n          ') + '\n          </p>\n        </div>\n      </div>\n    ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9wcml2YWN5QmFubmVyLmpzIl0sIm5hbWVzIjpbIlByaXZhY3lCYW5uZXIiLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJtZXNzYWdlVGV4dCIsImFncmVlVGV4dCIsImFjY2VwdFRleHQiLCJkZWNsaW5lVGV4dCIsInJlYWRNb3JlVGV4dCIsInJlYWRNb3JlTGluayIsInllc05vUHJlZml4Iiwic2hvd1llc05vIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsIm1heFdpZHRoIiwicGFkZGluZ1giLCJwYWRkaW5nWSIsInNsaWRlRnJvbSIsImluaXQiLCJkb2N1bWVudCIsImNvb2tpZSIsImluZGV4T2YiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QmFubmVyIiwiYmFubmVyIiwiYm9keSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJiYW5uZXJIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJzdHlsZSIsInBvc2l0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFuVXBBbmltYXRpb24iLCJiaW5kIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsImFncmVlIiwicXVlcnlTZWxlY3RvciIsImRlY2xpbmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiY2xvc2UiLCJ3cmFwcGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3NzVGV4dCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FB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QixPQUFkLGlCQUNJLEtBQUtwRCxNQUFMLENBQVlpQixTQUFaLEtBQTBCLEtBQTFCLEdBQWtDLHFCQUFsQyxHQUEwRCxrQkFEOUQsa0JBRUksS0FBS2pCLE1BQUwsQ0FBWWlCLFNBQVosS0FBMEIsS0FBMUIsR0FBa0MsU0FBbEMsR0FBOEMsWUFGbEQseUZBTWdCLEtBQUtqQixNQUFMLENBQVlXLGVBTjVCLHdCQU9XLEtBQUtYLE1BQUwsQ0FBWWEsS0FQdkIsMENBUTZCLEtBQUtiLE1BQUwsQ0FBWVksV0FSekMsbUdBVzBCLEtBQUtaLE1BQUwsQ0FBWWlCLFNBQVosS0FBMEIsS0FBMUIsR0FBa0MsT0FBbEMsR0FBNEMsTUFYdEU7QUFhQWdDLGNBQVFJLFNBQVIsb0VBQ3dELEtBQUtyRCxNQUFMLENBQVljLFFBRHBFLGtLQUV5RSxLQUFLZCxNQUFMLENBQVlnQixRQUZyRixXQUVtRyxLQUFLaEIsTUFBTCxDQUFZZ0IsUUFGL0csK0NBRzhCLEtBQUtoQixNQUFMLENBQVlHLFdBSDFDLHFCQUlRLEtBQUtILE1BQUwsQ0FBWU8sWUFBWixLQUE2QixFQUE3QixrQkFBK0MsS0FBS1AsTUFBTCxDQUFZUSxZQUEzRCwyREFBNkgsS0FBS1IsTUFBTCxDQUFZTyxZQUF6SSxhQUErSixFQUp2SyxzQkFLUSxLQUFLUCxNQUFMLENBQVlVLFNBQVosc0JBQ0UsS0FBS1YsTUFBTCxDQUFZUyxXQURkLGdNQUU0SyxLQUFLVCxNQUFMLENBQVlLLFVBRnhMLDZNQUc4SyxLQUFLTCxNQUFMLENBQVlNLFdBSDFMLDBOQUs0SyxLQUFLTixNQUFMLENBQVlJLFNBTHhMLDBCQUxSO0FBZ0JBLGFBQU82QyxPQUFQO0FBQ0Q7Ozs7OztrQkFsSGtCbEQsYSIsImZpbGUiOiIuL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXZhY3lCYW5uZXIge1xuICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBtZXNzYWdlVGV4dDogJ1RoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gdHJhY2sgeW91ciBiZWhhdmlvciBhbmQgdG8gaW1wcm92ZSB5b3VyIGV4cGVyaWVuY2Ugb24gdGhlIHNpdGUuIERvIHlvdSBhZ3JlZScsXG4gICAgICBhZ3JlZVRleHQ6ICdBZ3JlZScsXG4gICAgICBhY2NlcHRUZXh0OiAnWWVzJyxcbiAgICAgIGRlY2xpbmVUZXh0OiAnTm8nLFxuICAgICAgcmVhZE1vcmVUZXh0OiAnUmVhZCBtb3JlJyxcbiAgICAgIHJlYWRNb3JlTGluazogJy9wcml2YWN5JyxcbiAgICAgIHllc05vUHJlZml4OiAnJyxcbiAgICAgIHNob3dZZXNObzogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjM2IzYjNiJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnIzQ3NDc0NycsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgbWF4V2lkdGg6IDEyMzAsXG4gICAgICBwYWRkaW5nWDogMTUsXG4gICAgICBwYWRkaW5nWTogMCxcbiAgICAgIHNsaWRlRnJvbTogJ3RvcCdcbiAgICB9LCBjb25maWcpO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmIChkb2N1bWVudC5jb29raWUuaW5kZXhPZignZ2RwclByaXZhY3lOb3RpY2VBY2NlcHRlZCcpID09PSAtMSkge1xuICAgICAgY29uc3QgZGl2ID0gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgICB0aGlzLmluc2VydEJhbm5lcihkaXYpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydEJhbm5lcihiYW5uZXIpIHtcbiAgICAvLyBBcHBlbmQgZGl2IGFuZCBzZXR1cFxuICAgIHRoaXMuYmFubmVyID0gZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYmFubmVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIGNvbnN0IGJhbm5lckhlaWdodCA9IHRoaXMuYmFubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIEFuaW1hdGUgYmFubmVyXG4gICAgaWYgKHRoaXMuY29uZmlnLnNsaWRlRnJvbSA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmhlaWdodCA9IGAke2Jhbm5lckhlaWdodH1weGA7XG4gICAgICB0aGlzLmJhbm5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmNsZWFuVXBBbmltYXRpb24uYmluZCh0aGlzKSk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDAuMnMgZWFzZSc7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7YmFubmVySGVpZ2h0fXB4KWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmFubmVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIH1cblxuICAgIC8vIEF0dGFjaCBldmVudHNcbiAgICBjb25zdCBhZ3JlZSA9IHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5nZHByLXByaXZhY3ktbm90aWNlLWFncmVlJyk7XG4gICAgaWYgKGFncmVlKSBhZ3JlZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWdyZWUuYmluZCh0aGlzKSk7XG4gICAgY29uc3QgZGVjbGluZSA9IHRoaXMuYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5nZHByLXByaXZhY3ktbm90aWNlLWRlY2xpbmUnKTtcbiAgICBpZiAoZGVjbGluZSkgZGVjbGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVjbGluZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuYmFubmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5iYW5uZXIpO1xuICB9XG5cbiAgYWdyZWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGBnZHByUHJpdmFjeU5vdGljZUFjY2VwdGVkPXRydWU7IHBhdGg9LzsgZXhwaXJlcz0ke25ldyBEYXRlKG5ldyBEYXRlKCkgKiAxICsgMzY1ICogODY0ZSs1KS50b1VUQ1N0cmluZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbWl4ZWQtb3BlcmF0b3JzXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgZGVjbGluZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQuY29va2llID0gYGdkcHJQcml2YWN5Tm90aWNlQWNjZXB0ZWQ9ZmFsc2U7IHBhdGg9LzsgZXhwaXJlcz0ke25ldyBEYXRlKG5ldyBEYXRlKCkgKiAxICsgMzY1ICogODY0ZSs1KS50b1VUQ1N0cmluZygpfWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbWl4ZWQtb3BlcmF0b3JzXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgY2xlYW5VcEFuaW1hdGlvbigpIHtcbiAgICAvLyBDbGVhbnVwIGJvZHlcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgLy8gQ2xlYW51cCBiYW5uZXJcbiAgICB0aGlzLmJhbm5lci5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgdGhpcy5iYW5uZXIuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICB0aGlzLmJhbm5lci5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICB0aGlzLmJhbm5lci5zdHlsZS5oZWlnaHQgPSAnJztcbiAgfVxuXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZ2Rwci1wcml2YWN5LW5vdGljZScpO1xuICAgIHdyYXBwZXIuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICR7dGhpcy5jb25maWcuc2xpZGVGcm9tID09PSAndG9wJyA/ICdwb3NpdGlvbjogcmVsYXRpdmU7JyA6ICdwb3NpdGlvbjogZml4ZWQ7J31cbiAgICAgICR7dGhpcy5jb25maWcuc2xpZGVGcm9tID09PSAndG9wJyA/ICd0b3A6IDA7JyA6ICdib3R0b206IDA7J31cbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhpcy5jb25maWcuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgIGNvbG9yOiAke3RoaXMuY29uZmlnLmNvbG9yfTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoaXMuY29uZmlnLmJvcmRlckNvbG9yfTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCR7dGhpcy5jb25maWcuc2xpZGVGcm9tID09PSAndG9wJyA/ICctMTAwJScgOiAnMTAwJSd9KTtcbiAgICBgO1xuICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7bWFyZ2luOiAwIGF1dG87bWF4LXdpZHRoOiAke3RoaXMuY29uZmlnLm1heFdpZHRofXB4O2ZsZXgtZmxvdzogcm93IHdyYXA7YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO2ZsZXg6IDAgMSBhdXRvO3dpZHRoOiAxMDAlO3BhZGRpbmc6ICR7dGhpcy5jb25maWcucGFkZGluZ1l9cHggJHt0aGlzLmNvbmZpZy5wYWRkaW5nWX1weDtcIj5cbiAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjogMDtcIj4ke3RoaXMuY29uZmlnLm1lc3NhZ2VUZXh0fVxuICAgICAgICAgICR7dGhpcy5jb25maWcucmVhZE1vcmVUZXh0ICE9PSAnJyA/IGAoPGEgaHJlZj1cIiR7dGhpcy5jb25maWcucmVhZE1vcmVMaW5rfVwiIHN0eWxlPVwiY29sb3I6ICNmZmY7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1wiPiR7dGhpcy5jb25maWcucmVhZE1vcmVUZXh0fTwvYT4pYCA6ICcnfVxuICAgICAgICAgICR7dGhpcy5jb25maWcuc2hvd1llc05vID8gYFxuICAgICAgICAgICAgJHt0aGlzLmNvbmZpZy55ZXNOb1ByZWZpeH1cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJmb250OiBpbmhlcml0O2NvbG9yOiAjZmZmO2JvcmRlcjogMDsgYmFja2dyb3VuZDogbm9uZTtjdXJzb3I6IHBvaW50ZXI7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7bWFyZ2luOiAwOyBwYWRkaW5nOiAwO1wiIGNsYXNzPVwiZ2Rwci1wcml2YWN5LW5vdGljZS1hZ3JlZVwiPiR7dGhpcy5jb25maWcuYWNjZXB0VGV4dH08L2J1dHRvbj4gLVxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cImZvbnQ6IGluaGVyaXQ7Y29sb3I6ICNmZmY7Ym9yZGVyOiAwOyBiYWNrZ3JvdW5kOiBub25lO2N1cnNvcjogcG9pbnRlcjt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTttYXJnaW46IDA7IHBhZGRpbmc6IDA7XCIgY2xhc3M9XCJnZHByLXByaXZhY3ktbm90aWNlLWRlY2xpbmVcIj4ke3RoaXMuY29uZmlnLmRlY2xpbmVUZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIGAgOiBgXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwiZm9udDogaW5oZXJpdDtjb2xvcjogI2ZmZjtib3JkZXI6IDA7IGJhY2tncm91bmQ6IG5vbmU7Y3Vyc29yOiBwb2ludGVyO3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO21hcmdpbjogMDsgcGFkZGluZzogMDtcIiBjbGFzcz1cImdkcHItcHJpdmFjeS1ub3RpY2UtYWdyZWVcIj4ke3RoaXMuY29uZmlnLmFncmVlVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICBgfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHJldHVybiB3cmFwcGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9