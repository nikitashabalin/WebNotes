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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Home = ()=>{\n    const { 0: newNote , 1: setNewNote  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: noteArray , 1: setNoteArray  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: openNote , 1: setOpenNote  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const { 0: desc , 1: setDesk  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: rel , 1: reload  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const addButton = ()=>{\n        noteArray.push({\n            name: newNote,\n            desc: \"\"\n        });\n        setNoteArray(noteArray);\n        setNewNote(\"\");\n        localStorage.setItem(\"array\", JSON.stringify(noteArray));\n        reload(!rel);\n    };\n    const deleteButton = (index)=>{\n        noteArray.splice(index, 1);\n        setNoteArray(noteArray);\n        localStorage.setItem(\"array\", JSON.stringify(noteArray));\n        reload(!rel);\n    };\n    const openNoteButton = (index)=>{\n        setOpenNote(index);\n        setDesk(noteArray[index].desc);\n        reload(!rel);\n    };\n    const addDesc = (index)=>{\n        noteArray[index].desc = desc;\n        setNoteArray(noteArray);\n        setOpenNote(-1);\n        setDesk(\"\");\n        localStorage.setItem(\"array\", JSON.stringify(noteArray));\n        reload(!rel);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.getItem(\"array\") !== null) {\n            setNoteArray(JSON.parse(localStorage.getItem(\"array\") || \"\"));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"menu\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"title\",\n                            children: \"MyNote\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu__nav\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"menu__nav-title\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"\",\n                                        children: \"Все заметки\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 44\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"menu__nav-title\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"\",\n                                        children: \"Важно\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 44\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"menu__nav-title\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"\",\n                                        children: \"Запланировано\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 44\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"menu__nav-title\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"\",\n                                        children: \"Напоминания\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 44\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"todo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"todo__content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"todo__title\",\n                                children: \"Все заметки\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"todo__new\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Новая заметка\",\n                                        value: newNote,\n                                        onChange: (e)=>setNewNote(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"todo__add\",\n                                        onClick: addButton,\n                                        children: \"+\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"todo__list\",\n                                children: noteArray.map((el, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"todo__task\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"todo__task-container\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        className: \"todo_checkbox\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                                type: \"checkbox\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                                                lineNumber: 77,\n                                                                columnNumber: 27\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                                                lineNumber: 78,\n                                                                columnNumber: 27\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"todo__task-text\",\n                                                        onClick: ()=>openNoteButton(index),\n                                                        children: el.name\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            openNote === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"todo__task-write\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                        className: \"todo__task-note\",\n                                                        value: desc,\n                                                        onChange: (e)=>setDesk(e.target.value)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 89,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>addDesc(index),\n                                                        children: \"Скрыть\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"todo__task-del\",\n                                                onClick: ()=>deleteButton(index),\n                                                children: \"-\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\nekit\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 55,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Uiw4REFBQ00sS0FBRztnREFBQ0MsU0FBUyxFQUFDLGdCQUFnQjtnREFBQ1csT0FBTyxFQUFFLElBQU1uQixZQUFZLENBQUNDLEtBQUssQ0FBQzswREFBRSxHQUFDOzs7Ozt5REFBTTs7dUNBdEI1Q0EsS0FBSzs7OztpREF1QmhDLENBQ047Ozs7O3lDQUNFOzs7Ozs7aUNBQ0o7Ozs7OzZCQUVGOzs7Ozs7cUJBRUY7cUJBRUgsQ0FDSDtBQUNKLENBQUM7QUFFRCxpRUFBZW5CLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jpc2t5Ly4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBOb3RlSW50ZXIge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkZXNjOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25ld05vdGUsIHNldE5ld05vdGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbbm90ZUFycmF5LCBzZXROb3RlQXJyYXldID0gdXNlU3RhdGU8Tm90ZUludGVyW10+KFtdKTtcclxuXHJcbiAgY29uc3QgW29wZW5Ob3RlLCBzZXRPcGVuTm90ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KC0xKTtcclxuICBjb25zdCBbZGVzYywgc2V0RGVza10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICBjb25zdCBbcmVsLCByZWxvYWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBhZGRCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBub3RlQXJyYXkucHVzaCh7IG5hbWU6IG5ld05vdGUsIGRlc2M6IFwiXCIgfSk7XHJcbiAgICBzZXROb3RlQXJyYXkobm90ZUFycmF5KTtcclxuICAgIHNldE5ld05vdGUoXCJcIik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFycmF5XCIsIEpTT04uc3RyaW5naWZ5KG5vdGVBcnJheSkpO1xyXG4gICAgcmVsb2FkKCFyZWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBub3RlQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHNldE5vdGVBcnJheShub3RlQXJyYXkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhcnJheVwiLCBKU09OLnN0cmluZ2lmeShub3RlQXJyYXkpKTtcclxuICAgIHJlbG9hZCghcmVsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTm90ZUJ1dHRvbiA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRPcGVuTm90ZShpbmRleCk7XHJcbiAgICBzZXREZXNrKG5vdGVBcnJheVtpbmRleF0uZGVzYyk7XHJcbiAgICByZWxvYWQoIXJlbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkRGVzYyA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBub3RlQXJyYXlbaW5kZXhdLmRlc2MgPSBkZXNjO1xyXG4gICAgc2V0Tm90ZUFycmF5KG5vdGVBcnJheSk7XHJcbiAgICBzZXRPcGVuTm90ZSgtMSk7XHJcbiAgICBzZXREZXNrKFwiXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhcnJheVwiLCBKU09OLnN0cmluZ2lmeShub3RlQXJyYXkpKTtcclxuICAgIHJlbG9hZCghcmVsKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXJyYXlcIikgIT09IG51bGwpIHtcclxuICAgICAgc2V0Tm90ZUFycmF5KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhcnJheVwiKSB8fCBcIlwiKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5NeU5vdGU8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fbmF2XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX25hdi10aXRsZVwiPjxhIGhyZWY9XCJcIj7QktGB0LUg0LfQsNC80LXRgtC60Lg8L2E+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX25hdi10aXRsZVwiPjxhIGhyZWY9XCJcIj7QktCw0LbQvdC+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X19uYXYtdGl0bGVcIj48YSBocmVmPVwiXCI+0JfQsNC/0LvQsNC90LjRgNC+0LLQsNC90L48L2E+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX25hdi10aXRsZVwiPjxhIGhyZWY9XCJcIj7QndCw0L/QvtC80LjQvdCw0L3QuNGPPC9hPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0b2RvX190aXRsZVwiPtCS0YHQtSDQt9Cw0LzQtdGC0LrQuDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kb19fbmV3XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCd0L7QstCw0Y8g0LfQsNC80LXRgtC60LBcIiB2YWx1ZT17bmV3Tm90ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdOb3RlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvX19hZGRcIiBvbkNsaWNrPXthZGRCdXR0b259Pis8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kb19fbGlzdFwiPlxyXG4gICAgICAgICAgICAgIHtub3RlQXJyYXkubWFwKChlbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kb19fdGFza1wiIGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvX190YXNrLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0b2RvX2NoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG9fX3Rhc2stdGV4dFwiIG9uQ2xpY2s9eygpID0+IG9wZW5Ob3RlQnV0dG9uKGluZGV4KX0+e2VsLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtvcGVuTm90ZSA9PT0gaW5kZXggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kb19fdGFzay13cml0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInRvZG9fX3Rhc2stbm90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2soZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkRGVzYyhpbmRleCl9PtCh0LrRgNGL0YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG9fX3Rhc2stZGVsXCIgb25DbGljaz17KCkgPT4gZGVsZXRlQnV0dG9uKGluZGV4KX0+LTwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJuZXdOb3RlIiwic2V0TmV3Tm90ZSIsIm5vdGVBcnJheSIsInNldE5vdGVBcnJheSIsIm9wZW5Ob3RlIiwic2V0T3Blbk5vdGUiLCJkZXNjIiwic2V0RGVzayIsInJlbCIsInJlbG9hZCIsImFkZEJ1dHRvbiIsInB1c2giLCJuYW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWxldGVCdXR0b24iLCJpbmRleCIsInNwbGljZSIsIm9wZW5Ob3RlQnV0dG9uIiwiYWRkRGVzYyIsImdldEl0ZW0iLCJwYXJzZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYSIsImhyZWYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25DbGljayIsIm1hcCIsImVsIiwibGFiZWwiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();