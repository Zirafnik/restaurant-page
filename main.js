/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => /* binding */ homePage\n/* harmony export */ });\nfunction homePage() {\n    let content= document.getElementById('content');\n    \n    let nav= document.createElement('nav');\n\n    let headline= document.createElement('h1');\n    headline.innerHTML= 'Buffalo\\'s Pot';\n    headline.classList.add('headline');\n    nav.appendChild(headline);\n\n    //logo wrapper\n    let wrapper= document.createElement('div');\n    wrapper.classList.add('wrapper');\n\n    let logo= document.createElement('img');\n    logo.setAttribute('src', '/styles/images/bison-logo-inverted-cropped.png');\n    logo.classList.add('logo');\n    wrapper.appendChild(logo);\n    nav.appendChild(wrapper);\n\n    let list= document.createElement('ul');\n    list.classList.add('list');\n\n    let home= document.createElement('li');\n    home.classList.add('item');\n    let homelink= document.createElement('a');\n    homelink.setAttribute('href', '#');\n    homelink.innerHTML= 'Home';\n    homelink.classList.add('links');\n    home.appendChild(homelink);\n\n    let menu= document.createElement('li');\n    menu.classList.add('item');\n    let menulink= document.createElement('a');\n    menulink.setAttribute('href', '#');\n    menulink.innerHTML= 'Menu';\n    menulink.classList.add('links');\n    menu.appendChild(menulink);\n\n    let contact= document.createElement('li');\n    contact.classList.add('item');\n    let contactlink= document.createElement('a');\n    contactlink.setAttribute('href', '#');\n    contactlink.innerHTML= 'Contact';\n    contactlink.classList.add('links');\n    contact.appendChild(contactlink);\n\n\n    list.appendChild(home);\n    list.appendChild(menu);\n    list.appendChild(contact);\n    nav.appendChild(list);\n\n    content.appendChild(nav);\n\n    let container= document.createElement('div');\n    container.classList.add('container');\n\n    let text= document.createElement('h2');\n    text.textContent= 'Best buffalo steaks in the world!';\n    container.appendChild(text);\n\n    let orderBtn= document.createElement('button');\n    orderBtn.innerHTML= 'Make a reservation';\n    container.appendChild(orderBtn);\n\n    content.appendChild(container);\n\n    let footer= document.createElement('footer');\n    let p= document.createElement('p');\n    p.textContent= 'Zirafnik';\n    p.classList.add('gitname');\n    footer.appendChild(p);\n\n    let gitlink= document.createElement('a');\n    gitlink.setAttribute('href', 'https://github.com/Zirafnik/restaurant-page');\n    gitlink.setAttribute('target', '_blank');\n\n    let gitimg= document.createElement('img');\n    gitimg.setAttribute('src', '/styles/images/github-inverted.png');\n    gitimg.classList.add('gitimg');\n\n    gitlink.appendChild(gitimg);\n\n    footer.appendChild(gitlink);\n\n    document.body.appendChild(footer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;