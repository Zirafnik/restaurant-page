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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => /* binding */ homePage,\n/* harmony export */   \"clearContent\": () => /* binding */ clearContent\n/* harmony export */ });\nfunction homePage() {\n    let content= document.getElementById('content');\n    \n    let nav= document.createElement('nav');\n\n    let nameDiv= document.createElement('div');\n    nameDiv.classList.add('nameDiv');\n\n    let headline= document.createElement('h1');\n    headline.innerHTML= 'Buffalo\\'s Pot';\n    headline.classList.add('headline');\n    nameDiv.appendChild(headline);\n\n    //logo wrapper\n    let wrapper= document.createElement('div');\n    wrapper.classList.add('wrapper');\n    let logo= document.createElement('img');\n    logo.setAttribute('src', '/styles/images/bison-logo-inverted-cropped.png');\n    logo.classList.add('logo');\n    wrapper.appendChild(logo);\n    nameDiv.appendChild(wrapper);\n\n    nav.appendChild(nameDiv);\n\n    let list= document.createElement('ul');\n    list.classList.add('list');\n\n    let home= document.createElement('li');\n    home.classList.add('item');\n    let homelink= document.createElement('a');\n    homelink.setAttribute('href', '#');\n    homelink.innerHTML= 'Home';\n    homelink.classList.add('links');\n    home.appendChild(homelink);\n\n    let menu= document.createElement('li');\n    menu.classList.add('item');\n    let menulink= document.createElement('a');\n    menulink.setAttribute('href', '#');\n    menulink.innerHTML= 'Menu';\n    menulink.classList.add('links');\n    menu.appendChild(menulink);\n\n    let contact= document.createElement('li');\n    contact.classList.add('item');\n    let contactlink= document.createElement('a');\n    contactlink.setAttribute('href', '#');\n    contactlink.innerHTML= 'Contact';\n    contactlink.classList.add('links');\n    contact.appendChild(contactlink);\n\n\n    list.appendChild(home);\n    list.appendChild(menu);\n    list.appendChild(contact);\n    nav.appendChild(list);\n\n    content.appendChild(nav);\n\n    let container= document.createElement('div');\n    container.classList.add('container');\n\n    let text= document.createElement('h2');\n    text.textContent= 'Best buffalo steaks in the world!';\n    container.appendChild(text);\n\n    let orderBtn= document.createElement('button');\n    orderBtn.innerHTML= 'Make a reservation';\n    container.appendChild(orderBtn);\n\n    content.appendChild(container);\n\n    let footer= document.createElement('footer');\n    footer.style.position= 'absolute';\n    let p= document.createElement('p');\n    p.textContent= 'Zirafnik';\n    p.classList.add('gitname');\n    footer.appendChild(p);\n\n    let gitlink= document.createElement('a');\n    gitlink.setAttribute('href', 'https://github.com/Zirafnik/restaurant-page');\n    gitlink.setAttribute('target', '_blank');\n\n    let gitimg= document.createElement('img');\n    gitimg.setAttribute('src', '/styles/images/github-inverted.png');\n    gitimg.classList.add('gitimg');\n\n    gitlink.appendChild(gitimg);\n\n    footer.appendChild(gitlink);\n\n    content.appendChild(footer);\n}\n\nfunction clearContent() {\n    let content= document.getElementById('content');\n    content.removeChild(document.querySelector('.container'));\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n\n(0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => /* binding */ createMenu\n/* harmony export */ });\n//no reason for links in list --> remove?\n\nfunction createMenuEntry(string, price, div) {\n    let dish= document.createElement('div');\n    dish.classList.add('foodDiv');\n    let dishWrapper= document.createElement('div');\n    dishWrapper.classList.add('foodWrapper');\n    let dishImg= document.createElement('img');\n    dishImg.setAttribute('src', '/styles/images/' + string + '.jpeg');\n    dishImg.classList.add('foodImg');\n    dishWrapper.appendChild(dishImg);\n\n    let dishName= document.createElement('p');\n    dishName.textContent= string[0].toUpperCase() + string.substring(1);\n    dishName.classList.add('foodName');\n\n    let dishPrice= document.createElement('p');\n    dishPrice.textContent= '$' + price;\n    dishPrice.classList.add('foodPrice');\n    \n    dish.appendChild(dishWrapper);\n    dish.appendChild(dishName);\n    dish.appendChild(dishPrice);\n\n    div.appendChild(dish);\n}\n\nfunction createMenu() {\n    let content= document.getElementById('content');\n\n    let menuDiv= document.createElement('div');\n    menuDiv.classList.add('menuDiv');\n\n    //MENU\n    let menuName= document.createElement('h2');\n    menuName.textContent= 'MENU';\n    menuName.classList.add('menuName');\n    menuDiv.appendChild(menuName);\n\n    //STEAK\n    let steak= document.createElement('div');\n    steak.classList.add('foodDiv');\n    let steakWrapper= document.createElement('div');\n    steakWrapper.classList.add('foodWrapper');\n    let steakImg= document.createElement('img');\n    steakImg.setAttribute('src', '/styles/images/steak.jpeg');\n    steakImg.classList.add('foodImg');\n    steakWrapper.appendChild(steakImg);\n\n    let steakName= document.createElement('p');\n    steakName.textContent= 'Steak';\n    steakName.classList.add('foodName');\n\n    let steakPrice= document.createElement('p');\n    steakPrice.textContent= '$30';\n    steakPrice.classList.add('foodPrice');\n    \n    steak.appendChild(steakWrapper);\n    steak.appendChild(steakName);\n    steak.appendChild(steakPrice);\n\n    menuDiv.appendChild(steak);\n\n    //BURGER\n    let burger= document.createElement('div');\n    burger.classList.add('foodDiv');\n    let burgerWrapper= document.createElement('div');\n    burgerWrapper.classList.add('foodWrapper');\n    let burgerImg= document.createElement('img');\n    burgerImg.setAttribute('src', '/styles/images/burger.jpeg');\n    burgerImg.classList.add('foodImg');\n    burgerWrapper.appendChild(burgerImg);\n\n    let burgerName= document.createElement('p');\n    burgerName.textContent= 'Burger';\n    burgerName.classList.add('foodName');\n\n    let burgerPrice= document.createElement('p');\n    burgerPrice.textContent= '$5';\n    burgerPrice.classList.add('foodPrice');\n    \n    burger.appendChild(burgerWrapper);\n    burger.appendChild(burgerName);\n    burger.appendChild(burgerPrice);\n\n    menuDiv.appendChild(burger);\n\n    createMenuEntry('ribs', 25, menuDiv);\n\n    let footer= document.querySelector('footer');\n    footer.style.position= 'relative';\n    content.insertBefore(menuDiv, footer);\n\n    //tbone\n    //burger\n    //ribs\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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