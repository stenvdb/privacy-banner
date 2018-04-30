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
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi privacyBanner.js (referenced with single entry) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivacyBanner; });
class PrivacyBanner {
  constructor(config = {}) {
    this.config = Object.assign({
      messageText: 'This website uses cookies to track your behavior and to improve your experience on the site. Do you agree',
      acceptText: 'Yes',
      declineText: 'No',
      readMoreText: 'Read more',
      readMoreLink: '/privacy',
      backgroundColor: '#3b3b3b',
      borderColor: '#474747',
      color: '#fff',
    }, config);

    this.init();
  }

  init() {
    if (document.cookie.indexOf('gdprPrivacyNoticeAccepted') === -1) {
      const div = this.createElement();
      this.insertBanner(div);
    }
  }

  insertBanner(banner) {
    // Append div and setup
    this.banner = document.body.insertBefore(banner, document.body.firstChild);
    document.body.addEventListener('transitionend', this.cleanUpAnimation.bind(this));
    const bannerHeight = this.banner.getBoundingClientRect().height;

    // Animate banner
    this.banner.style.height = `${bannerHeight}px`;
    this.banner.style.position = 'absolute';
    document.body.style.transition = 'transform 0.2s ease';
    document.body.style.transform = `translateY(${bannerHeight}px)`;

    // Attach events
    this.banner.querySelector('.gdpr-privacy-notice-accept').addEventListener('click', this.accept.bind(this));
    this.banner.querySelector('.gdpr-privacy-notice-decline').addEventListener('click', this.decline.bind(this));
  }

  close() {
    this.banner.parentNode.removeChild(this.banner);
  }

  accept(event) {
    event.preventDefault();
    document.cookie = `gdprPrivacyNoticeAccepted=true; path=/; expires=${new Date(new Date() * 1 + 365 * 864e+5).toUTCString()}`; // eslint-disable-line no-mixed-operators
    this.close();
  }

  decline(event) {
    event.preventDefault();
    document.cookie = `gdprPrivacyNoticeAccepted=false; path=/; expires=${new Date(new Date() * 1 + 365 * 864e+5).toUTCString()}`; // eslint-disable-line no-mixed-operators
    this.close();
  }

  cleanUpAnimation() {
    // Cleanup body
    document.body.style.transition = '';
    document.body.style.transform = '';

    // Cleanup banner
    this.banner.style.transition = '';
    this.banner.style.position = 'static';
    this.banner.style.transform = '';
    this.banner.style.height = '';
  }

  createElement() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('gdpr-privacy-notice');
    wrapper.style.cssText = `
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      padding: 25px 0;
      background: ${this.config.backgroundColor};
      color: ${this.config.color};
      border-bottom: 1px solid ${this.config.borderColor};
      z-index: 1;
      transition: transform 0.2s ease;
      transform: translateY(-100%);
    `;
    wrapper.innerHTML = `
      <div class="row">
        <div class="twelve columns" style="text-align: center;">
          <p>${this.config.messageText} (<a href="${this.config.readMoreLink}" style="color: #fff; text-decoration: underline;">${this.config.readMoreText}</a>)?
          <a href="#" style="color: #fff; text-decoration: underline;" class="gdpr-privacy-notice-accept">${this.config.acceptText}</a> -
          <a href="#" style="color: #fff; text-decoration: underline;" class="gdpr-privacy-notice-decline">${this.config.declineText}</a></p>
        </div>
      </div>
    `;
    return wrapper;
  }
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9wcml2YWN5QmFubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsYUFBYTtBQUMvQztBQUNBO0FBQ0Esa0RBQWtELGFBQWE7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNELFFBQVEsV0FBVyxzREFBc0QsRUFBRTtBQUNqSTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsUUFBUSxXQUFXLHNEQUFzRCxFQUFFO0FBQ2xJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixlQUFlO0FBQ2YsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RCxlQUFlLHdCQUF3QixhQUFhLHlCQUF5QixxQkFBcUIsNEJBQTRCLElBQUkseUJBQXlCO0FBQzNKLHlDQUF5Qyw0QkFBNEIsdUNBQXVDLHVCQUF1QjtBQUNuSSx5Q0FBeUMsNEJBQTRCLHdDQUF3Qyx3QkFBd0I7QUFDckk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpdmFjeUJhbm5lciB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1lc3NhZ2VUZXh0OiAnVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byB0cmFjayB5b3VyIGJlaGF2aW9yIGFuZCB0byBpbXByb3ZlIHlvdXIgZXhwZXJpZW5jZSBvbiB0aGUgc2l0ZS4gRG8geW91IGFncmVlJyxcbiAgICAgIGFjY2VwdFRleHQ6ICdZZXMnLFxuICAgICAgZGVjbGluZVRleHQ6ICdObycsXG4gICAgICByZWFkTW9yZVRleHQ6ICdSZWFkIG1vcmUnLFxuICAgICAgcmVhZE1vcmVMaW5rOiAnL3ByaXZhY3knLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzNiM2IzYicsXG4gICAgICBib3JkZXJDb2xvcjogJyM0NzQ3NDcnLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICB9LCBjb25maWcpO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmIChkb2N1bWVudC5jb29raWUuaW5kZXhPZignZ2RwclByaXZhY3lOb3RpY2VBY2NlcHRlZCcpID09PSAtMSkge1xuICAgICAgY29uc3QgZGl2ID0gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgICB0aGlzLmluc2VydEJhbm5lcihkaXYpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydEJhbm5lcihiYW5uZXIpIHtcbiAgICAvLyBBcHBlbmQgZGl2IGFuZCBzZXR1cFxuICAgIHRoaXMuYmFubmVyID0gZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYmFubmVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuY2xlYW5VcEFuaW1hdGlvbi5iaW5kKHRoaXMpKTtcbiAgICBjb25zdCBiYW5uZXJIZWlnaHQgPSB0aGlzLmJhbm5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBBbmltYXRlIGJhbm5lclxuICAgIHRoaXMuYmFubmVyLnN0eWxlLmhlaWdodCA9IGAke2Jhbm5lckhlaWdodH1weGA7XG4gICAgdGhpcy5iYW5uZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4ycyBlYXNlJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7YmFubmVySGVpZ2h0fXB4KWA7XG5cbiAgICAvLyBBdHRhY2ggZXZlbnRzXG4gICAgdGhpcy5iYW5uZXIucXVlcnlTZWxlY3RvcignLmdkcHItcHJpdmFjeS1ub3RpY2UtYWNjZXB0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjY2VwdC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmJhbm5lci5xdWVyeVNlbGVjdG9yKCcuZ2Rwci1wcml2YWN5LW5vdGljZS1kZWNsaW5lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlY2xpbmUuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmJhbm5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuYmFubmVyKTtcbiAgfVxuXG4gIGFjY2VwdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQuY29va2llID0gYGdkcHJQcml2YWN5Tm90aWNlQWNjZXB0ZWQ9dHJ1ZTsgcGF0aD0vOyBleHBpcmVzPSR7bmV3IERhdGUobmV3IERhdGUoKSAqIDEgKyAzNjUgKiA4NjRlKzUpLnRvVVRDU3RyaW5nKCl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1taXhlZC1vcGVyYXRvcnNcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBkZWNsaW5lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5jb29raWUgPSBgZ2RwclByaXZhY3lOb3RpY2VBY2NlcHRlZD1mYWxzZTsgcGF0aD0vOyBleHBpcmVzPSR7bmV3IERhdGUobmV3IERhdGUoKSAqIDEgKyAzNjUgKiA4NjRlKzUpLnRvVVRDU3RyaW5nKCl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1taXhlZC1vcGVyYXRvcnNcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBjbGVhblVwQW5pbWF0aW9uKCkge1xuICAgIC8vIENsZWFudXAgYm9keVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNmb3JtID0gJyc7XG5cbiAgICAvLyBDbGVhbnVwIGJhbm5lclxuICAgIHRoaXMuYmFubmVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB0aGlzLmJhbm5lci5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xuICAgIHRoaXMuYmFubmVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIHRoaXMuYmFubmVyLnN0eWxlLmhlaWdodCA9ICcnO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdnZHByLXByaXZhY3ktbm90aWNlJyk7XG4gICAgd3JhcHBlci5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMjVweCAwO1xuICAgICAgYmFja2dyb3VuZDogJHt0aGlzLmNvbmZpZy5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgY29sb3I6ICR7dGhpcy5jb25maWcuY29sb3J9O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dGhpcy5jb25maWcuYm9yZGVyQ29sb3J9O1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIGA7XG4gICAgd3JhcHBlci5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICAgICAgICAgIDxwPiR7dGhpcy5jb25maWcubWVzc2FnZVRleHR9ICg8YSBocmVmPVwiJHt0aGlzLmNvbmZpZy5yZWFkTW9yZUxpbmt9XCIgc3R5bGU9XCJjb2xvcjogI2ZmZjsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XCI+JHt0aGlzLmNvbmZpZy5yZWFkTW9yZVRleHR9PC9hPik/XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBzdHlsZT1cImNvbG9yOiAjZmZmOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcIiBjbGFzcz1cImdkcHItcHJpdmFjeS1ub3RpY2UtYWNjZXB0XCI+JHt0aGlzLmNvbmZpZy5hY2NlcHRUZXh0fTwvYT4gLVxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgc3R5bGU9XCJjb2xvcjogI2ZmZjsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XCIgY2xhc3M9XCJnZHByLXByaXZhY3ktbm90aWNlLWRlY2xpbmVcIj4ke3RoaXMuY29uZmlnLmRlY2xpbmVUZXh0fTwvYT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==