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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomePage\": () => /* binding */ createHomePage,\n/* harmony export */   \"clearContent\": () => /* binding */ clearContent,\n/* harmony export */   \"createHomeContainer\": () => /* binding */ createHomeContainer\n/* harmony export */ });\nfunction createHomePage() {\n    let content= document.getElementById('content');\n    \n    let nav= document.createElement('nav');\n\n    let nameDiv= document.createElement('div');\n    nameDiv.classList.add('nameDiv');\n\n    let headline= document.createElement('h1');\n    headline.innerHTML= 'Buffalo\\'s Pot';\n    headline.classList.add('headline');\n    nameDiv.appendChild(headline);\n\n    //logo wrapper\n    let wrapper= document.createElement('div');\n    wrapper.classList.add('wrapper');\n    let logo= document.createElement('img');\n    logo.setAttribute('src', '/styles/images/bison-logo-inverted-cropped.png');\n    logo.classList.add('logo');\n    wrapper.appendChild(logo);\n    nameDiv.appendChild(wrapper);\n\n    nav.appendChild(nameDiv);\n\n    let list= document.createElement('ul');\n    list.classList.add('list');\n\n    let home= document.createElement('li');\n    home.classList.add('item');\n    home.textContent= 'Home';\n\n    let menu= document.createElement('li');\n    menu.classList.add('item');\n    menu.textContent= 'Menu';\n\n    let contact= document.createElement('li');\n    contact.classList.add('item');\n    contact.textContent= 'Contact';\n\n\n    list.appendChild(home);\n    list.appendChild(menu);\n    list.appendChild(contact);\n    nav.appendChild(list);\n\n    content.appendChild(nav);\n\n    //FOOTER\n    let footer= document.createElement('footer');\n    footer.style.position= 'absolute';\n    let p= document.createElement('p');\n    p.textContent= 'Zirafnik';\n    p.classList.add('gitname');\n    footer.appendChild(p);\n\n    let gitlink= document.createElement('a');\n    gitlink.setAttribute('href', 'https://github.com/Zirafnik/restaurant-page');\n    gitlink.setAttribute('target', '_blank');\n\n    let gitimg= document.createElement('img');\n    gitimg.setAttribute('src', '/styles/images/github-inverted.png');\n    gitimg.classList.add('gitimg');\n\n    gitlink.appendChild(gitimg);\n\n    footer.appendChild(gitlink);\n\n    content.appendChild(footer);\n\n    //CONTAINER\n    createHomeContainer(content);\n}\n\nfunction clearContent() {\n    let content= document.getElementById('content');\n\n    content.removeChild(content.children[1]);\n}\n\nfunction createHomeContainer() {\n    let container= document.createElement('div');\n    container.classList.add('container');\n\n    let text= document.createElement('h2');\n    text.textContent= 'Best buffalo steaks in the world!';\n    container.appendChild(text);\n\n    let orderBtn= document.createElement('button');\n    orderBtn.innerHTML= 'Make a reservation';\n    container.appendChild(orderBtn);\n\n    let footer= document.querySelector('footer');\n\n    document.querySelector('#content').insertBefore(container, footer);\n\n    //footer position adjustment\n    footer.style.position= 'absolute';\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\nlet menuItems= {\n    'steak': 30,\n    'burger': 5,\n    'ribs': 25,\n    't-bone': 40\n}\n\n;(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\n\nlet home= document.querySelectorAll('li')[0];\nhome.addEventListener('click', function() {\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomeContainer)();\n});\n\nlet menu= document.querySelectorAll('li')[1];\nmenu.addEventListener('click', function() {\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.clearContent)();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)(menuItems);\n})\n\n\n//no reason for links in list --> remove?\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => /* binding */ createMenu\n/* harmony export */ });\nfunction createMenuEntry(string, price, div) {\n    let dish= document.createElement('div');\n    dish.classList.add('foodDiv');\n    let dishWrapper= document.createElement('div');\n    dishWrapper.classList.add('foodWrapper');\n    let dishImg= document.createElement('img');\n    dishImg.setAttribute('src', '/styles/images/' + string + '.jpeg');\n    dishImg.classList.add('foodImg');\n    dishWrapper.appendChild(dishImg);\n\n    let dishName= document.createElement('p');\n    dishName.textContent= string[0].toUpperCase() + string.substring(1);\n    dishName.classList.add('foodName');\n\n    let dishPrice= document.createElement('p');\n    dishPrice.textContent= '$' + price;\n    dishPrice.classList.add('foodPrice');\n    \n    dish.appendChild(dishWrapper);\n    dish.appendChild(dishName);\n    dish.appendChild(dishPrice);\n\n    div.appendChild(dish);\n}\n\nfunction createMenu(foodObj) {\n    let content= document.getElementById('content');\n\n    //MENU\n    let menuDiv= document.createElement('div');\n    menuDiv.classList.add('menuDiv');\n\n    let menuName= document.createElement('h2');\n    menuName.textContent= 'MENU';\n    menuName.classList.add('menuName');\n    menuDiv.appendChild(menuName);\n\n\n    //DISHES\n    for(let key in foodObj) {\n        createMenuEntry(key, foodObj[key], menuDiv);\n    }\n\n\n    let footer= document.querySelector('footer');\n    footer.style.position= 'relative';\n    content.insertBefore(menuDiv, footer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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