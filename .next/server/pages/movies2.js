"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movies2";
exports.ids = ["pages/movies2"];
exports.modules = {

/***/ "./pages/movies2.js":
/*!**************************!*\
  !*** ./pages/movies2.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Movies2() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`http://www.omdbapi.com/?apikey=9fa0923&s=bagdad`, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADM\\\\Desktop\\\\PWeb\\\\receita4\\\\pages\\\\movies2.js\",\n        lineNumber: 5,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADM\\\\Desktop\\\\PWeb\\\\receita4\\\\pages\\\\movies2.js\",\n        lineNumber: 6,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ADM\\\\Desktop\\\\PWeb\\\\receita4\\\\pages\\\\movies2.js\",\n                lineNumber: 9,\n                columnNumber: 39\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADM\\\\Desktop\\\\PWeb\\\\receita4\\\\pages\\\\movies2.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n};\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF3QjtBQUVULFNBQVNDLE9BQU8sR0FBRTtJQUM3QixNQUFNLEVBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFDLEdBQUdILCtDQUFNLENBQUMsQ0FBQywrQ0FBK0MsQ0FBQyxFQUFFSSxPQUFPLENBQUM7SUFDeEYsSUFBSUQsS0FBSyxFQUFFLHFCQUFPLDhEQUFDRSxLQUFHO2tCQUFDLDhCQUFzQjs7Ozs7WUFBTTtJQUNuRCxJQUFJLENBQUNILElBQUksRUFBRSxxQkFBTyw4REFBQ0csS0FBRztrQkFBQyxlQUFhOzs7OztZQUFNO0lBQzFDLHFCQUNJLDhEQUFDQSxLQUFHO2tCQUNFSCxJQUFJLENBQUNJLE1BQU0sQ0FBQ0MsR0FBRyxDQUFFLENBQUNDLENBQUMsaUJBQUssOERBQUNILEtBQUc7O29CQUFFRyxDQUFDLENBQUNDLEtBQUs7b0JBQUMsT0FBSztvQkFBQ0QsQ0FBQyxDQUFDRSxJQUFJOzs7Ozs7b0JBQU87UUFBQSxDQUFHOzs7OztZQUM1RCxDQUNUO0NBQ0o7QUFFRCxlQUFlTixPQUFPLENBQUNPLEdBQUcsRUFBRTtJQUN4QixNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLENBQUM7SUFDNUIsTUFBTUcsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBQzdCLE9BQU9BLElBQUk7Q0FDZCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQwLy4vcGFnZXMvbW92aWVzMi5qcz84M2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMigpe1xyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTlmYTA5MjMmcz1iYWdkYWRgLCBmZXRjaGVyKSAgICBcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgeyBkYXRhLlNlYXJjaC5tYXAoIChtKSA9PiA8ZGl2PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4gICkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSAgICBcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybClcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4ganNvblxyXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsIk1vdmllczIiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwiZGl2IiwiU2VhcmNoIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies2.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies2.js"));
module.exports = __webpack_exports__;

})();