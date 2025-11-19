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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\n\n\n\n\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n//# sourceURL=webpack://db/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\n\n\nconst cart = () => {\n    const cartBtn = document.getElementById('cart')\n    const cartModal = document.querySelector('.cart')\n    const cartCloseBtn = cartModal.querySelector('.cart-close')\n    const cartTotal = cartModal.querySelector('.cart-total > span')\n    const cartSendBtn = cartModal.querySelector('.cart-confirm')\n    const cartCount = cartBtn.querySelector('.counter')\n    const goodsWrapper = document.querySelector('.goods')\n    const cartWrapper = document.querySelector('.cart-wrapper')\n\n    cartCount.textContent = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0\n\n    const openCart = () => {\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\n        cartModal.style.display = 'flex'\n        ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\n        cartTotal.textContent = cart.reduce((sum, goodItem) => {\n            return sum + goodItem.price\n        },0)\n    }\n\n    const closeCart = () => {\n        cartModal.style.display = ''\n    }\n\n    cartBtn.addEventListener('click', openCart)\n    cartCloseBtn.addEventListener('click', closeCart)\n\n    goodsWrapper.addEventListener('click',(e) => {\n        if(e.target.classList.contains('btn-primary')) {\n            const card = e.target.closest('.card')\n            const key = card.dataset.key;\n            const goods = JSON.parse(localStorage.getItem('goods'))\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\n            const goodItem = goods.find(item => item.id === key)\n            cart.push(goodItem)\n            cartCount.textContent = cart.length\n            localStorage.setItem('cart', JSON.stringify(cart))\n        }\n    })\n\n    cartWrapper.addEventListener('click', (e) => {\n        if(e.target.classList.contains('btn-primary')) {\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\n            const card = e.target.closest('.card');\n            const key = card.dataset.key;\n            const index = cart.findIndex((item)=> {\n                return item.id === key\n            })\n            cart.splice(index, 1)\n            localStorage.setItem('cart', JSON.stringify(cart))\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\n            cartTotal.textContent = cart.reduce((sum, goodItem) => {\n                return sum + goodItem.price\n            },0)\n            cartCount.textContent = cart.length\n        }\n    })\n\n    cartSendBtn.addEventListener('click', (e) => {\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\n        ;(0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\n            localStorage.removeItem('cart')\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([])\n            cartTotal.textContent = 0\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://db/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst catalog = () => {\n    const btnCatalog = document.querySelector('.catalog-button > button')\n    const catalogModal = document.querySelector('.catalog')\n    const catalogModalItem = document.querySelectorAll('.catalog li')\n\n\n    let isOpen = false\n\n    btnCatalog.addEventListener('click', () => {\n        isOpen = !isOpen\n\n        if(isOpen) {\n            catalogModal.style.display = 'block'\n        }else{\n            catalogModal.style.display = ''\n        }\n    })\n\n    catalogModalItem.forEach(item => {\n        item.addEventListener('click', (e) => {\n            const text = item.textContent\n            ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n                ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text))\n            })\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://db/./src/modules/catalog.js?\n}");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst filter = () => {\n    const minInput = document.getElementById('min')\n    const maxInput = document.getElementById('max')\n    const checkboxInput = document.getElementById('discount-checkbox')\n    const checkboxSpan = document.querySelector('.filter-check_checkmark')\n    minInput.addEventListener('input', () => {\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value))\n        })\n    })\n\n    maxInput.addEventListener('input', () => {\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value))\n        })\n    })\n\n    checkboxInput.addEventListener('change', () => {\n        if(checkboxInput.checked){\n            checkboxSpan.classList.add('checked')\n        }else{\n            checkboxSpan.classList.remove('checked')\n        }\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value))\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack://db/./src/modules/filter.js?\n}");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   hotSaleFilter: () => (/* binding */ hotSaleFilter),\n/* harmony export */   priceFilter: () => (/* binding */ priceFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter= (goods, value) => {\n    return goods.filter(goodsItem => goodsItem.title.toLowerCase().includes(value.toLowerCase()) )\n}\n\nconst categoryFilter = (goods, value) => {\n    return goods.filter((goodsItem) => {\n        return goodsItem.category == value\n    })\n}\n\nconst priceFilter = (goods, min, max) => {\n    return goods.filter((goodsItem) => {\n        if(min === '' && max === ''){\n            return goodsItem\n        } else if(min !== '' && max !== '') {\n            return goodsItem.price > +min && goodsItem.price < +max\n        }else if(min !== '' && max === '') {\n            return goodsItem.price > +min\n        } else if(min === '' && max !== '') {\n            return goodsItem.price < +max\n        }\n    })\n}\n\nconst hotSaleFilter = (goods, value) => {\n    return goods.filter((goodsItem) => {\n        if(value) {\n            return goodsItem.sale === true\n        }else{\n            return goodsItem\n        }\n    })\n}\n\n\n//# sourceURL=webpack://db/./src/modules/filters.js?\n}");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\n    return fetch('https://o-zone-3474c-default-rtdb.firebaseio.com/goods.json')\n      .then(response => response.json())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://db/./src/modules/getData.js?\n}");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\n\n\nconst load = () => {\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://db/./src/modules/load.js?\n}");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\n        method: 'POST',\n        body: JSON.stringify(cart),\n        headers: {\n            'Content-type': 'application/json; charset=UTF-8'\n        }\n    })\n    .then(res => res.json())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://db/./src/modules/postData.js?\n}");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\n    const cartWrapper = document.querySelector('.cart-wrapper')\n    cartWrapper.innerHTML = ''\n    if(goods.length === 0) {\n        cartWrapper.insertAdjacentHTML('beforeend', `\n            \t<div id=\"cart-empty\">\n\t\t\t\t\tВаша корзина пока пуста\n\t\t\t\t</div>\n            `)\n    } else {\n        goods.forEach(goodsItem => {\n            cartWrapper.insertAdjacentHTML('beforeend', \n                `\n                    <div class=\"card\" data-key=\"${goodsItem.id}\">\n                        ${ goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : '' }\n                        <div class=\"card-img-wrapper\">\n                            <span class=\"card-img-top\"\n                                style=\"background-image: url(${goodsItem.img})\"></span>\n                        </div>\n                        <div class=\"card-body justify-content-between\">\n                            <div class=\"card-price\">${goodsItem.price} ₽</div>\n                            <h5 class=\"card-title\">${goodsItem.title}</h5>\n                            <button class=\"btn btn-primary\">Удалить</button>\n                        </div>\n                    </div>\n                `\n            )\n        });\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://db/./src/modules/renderCart.js?\n}");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\n    const goodsWrapper = document.querySelector('.goods')\n    localStorage.setItem('goods', JSON.stringify(goods))\n    goodsWrapper.innerHTML = ''\n    goods.forEach(goodsItem => {\n        goodsWrapper.insertAdjacentHTML('beforeend', \n            `\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n                <div class=\"card\" data-key=\"${goodsItem.id}\">\n                    ${ goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : '' }\n                    <div class=\"card-img-wrapper\">\n                        <span class=\"card-img-top\"\n                            style=\"background-image: url(${goodsItem.img})\"></span>\n                    </div>\n                    <div class=\"card-body justify-content-between\">\n                        <div class=\"card-price\">${goodsItem.price} ₽</div>\n                        <h5 class=\"card-title\">${goodsItem.title}</h5>\n                        <button class=\"btn btn-primary\">В корзину</button>\n                    </div>\n                </div>\n            </div>\n            `\n        )\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://db/./src/modules/renderGoods.js?\n}");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst search = () => {\n    const searchInput = document.querySelector('.search-wrapper_input')\n\n    searchInput.addEventListener('input',  (event) => {\n        const value = event.target.value\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value))\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://db/./src/modules/search.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;