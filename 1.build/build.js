webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Module3.js代码使用AMD机制 // module3.js，使用AMD模块机制
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (sum) {
	    return console.log("1 + 2 = " + sum(1, 2));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports) {

	// Module2.js代码如下： // module2.js，使用的是CommonJs机制导出包
	module.exports = function (a, b) {
	    return a + b;
	};

/***/ }
]);