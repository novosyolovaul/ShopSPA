"use strict";
(self["webpackChunktesttask"] = self["webpackChunktesttask"] || []).push([["src_Pages_Product_Product_js"],{

/***/ "./src/Pages/Product/Product.js":
/*!**************************************!*\
  !*** ./src/Pages/Product/Product.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Product_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.module.scss */ "./src/Pages/Product/Product.module.scss");
/* harmony import */ var _ProductHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductHeader */ "./src/Pages/Product/ProductHeader.js");
/* harmony import */ var _ProductInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductInfo */ "./src/Pages/Product/ProductInfo.js");






var Product = function Product() {
  var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)().id;
  var value = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.catalogPage.data;
  });
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].product
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].buttonGoBack,
    onClick: function onClick() {
      return navigate(-1);
    }
  }, "\u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: id,
    value: value
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].product_body
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: value[id].image_url,
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].product_body_img
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id,
    value: value
  }))), value[id].disclaimer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].product_footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, value[id].disclaimer)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

/***/ }),

/***/ "./src/Pages/Product/ProductHeader.js":
/*!********************************************!*\
  !*** ./src/Pages/Product/ProductHeader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.module.scss */ "./src/Pages/Product/Product.module.scss");


var ProductHeader = function ProductHeader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_header
  }, props.value[props.id].new_price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_header_discount
  }, "-" + props.value[props.id].discount + "%"), !props.value[props.id].new_price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_header_logo,
    src: props.value[props.id].logo_url
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductHeader);

/***/ }),

/***/ "./src/Pages/Product/ProductInfo.js":
/*!******************************************!*\
  !*** ./src/Pages/Product/ProductInfo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.module.scss */ "./src/Pages/Product/Product.module.scss");
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stars */ "./src/Pages/Product/Stars.js");



var ProductInfo = function ProductInfo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_body_inf
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_body_inf_name
  }, props.value[props.id].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]["null"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Stars__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_body_inf_stars,
    stars: props.value[props.id].stars
  }), props.value[props.id].new_price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_body_inf_oldPrice
  }, String(props.value[props.id].old_price).split(/[ ,.]/g).length == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.value[props.id].old_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0441\u0442\u0430\u0440\u0430\u044F \u0446\u0435\u043D\u0430")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, String(props.value[props.id].old_price).split(/[ ,.]/g)[0], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (String(props.value[props.id].old_price).split(/[ ,.]/g)[1] + '0').slice(0, 2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0441\u0442\u0430\u0440\u0430\u044F \u0446\u0435\u043D\u0430"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_body_inf_newPrice
  }, String(props.value[props.id].new_price).split(/[ ,.]/g).length == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.value[props.id].new_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0446\u0435\u043D\u0430 \u043F\u043E \u0441\u043A\u0438\u0434\u043A\u0435")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, String(props.value[props.id].new_price).split(/[ ,.]/g)[0], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " ", (String(props.value[props.id].new_price).split(/[ ,.]/g)[1] + '0').slice(0, 2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0446\u0435\u043D\u0430 \u043F\u043E \u0441\u043A\u0438\u0434\u043A\u0435")))), !props.value[props.id].new_price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_body_inf_newPrice
  }, String(props.value[props.id].old_price).split(/[ ,.]/g).length == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.value[props.id].old_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0446\u0435\u043D\u0430")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, String(props.value[props.id].old_price).split(/[ ,.]/g)[0], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (String(props.value[props.id].old_price).split(/[ ,.]/g)[1] + '0').slice(0, 2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u0446\u0435\u043D\u0430")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInfo);

/***/ }),

/***/ "./src/Pages/Product/Stars.js":
/*!************************************!*\
  !*** ./src/Pages/Product/Stars.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stars)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Rating */ "./node_modules/@mui/material/Rating/Rating.js");
/* harmony import */ var _mui_icons_material_StarBorderRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/StarBorderRounded */ "./node_modules/@mui/icons-material/StarBorderRounded.js");
/* harmony import */ var _mui_icons_material_StarRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/StarRounded */ "./node_modules/@mui/icons-material/StarRounded.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");






var StyledRating = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material_Rating__WEBPACK_IMPORTED_MODULE_2__["default"])({
  '& .MuiRating-iconFilled': {
    color: '#344050'
  }
});
function Stars(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledRating, {
    value: props.stars,
    readOnly: true,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_StarRounded__WEBPACK_IMPORTED_MODULE_4__["default"], {
      sx: {
        fontSize: 40
      }
    }),
    emptyIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_StarBorderRounded__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        fontSize: 40
      }
    })
  }));
}

/***/ }),

/***/ "./src/Pages/Product/Product.module.scss":
/*!***********************************************!*\
  !*** ./src/Pages/Product/Product.module.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"product":"bWCooghVoFCu4EY857XO","buttonGoBack":"SVExX8byNsnWaqURxzpW","product_header":"VVJaE3xey5BlFsFtZMCk","product_header_discount":"AN_WmkzJPv73XUjaAsL9","product_header_logo":"P4iUBih8oMXg_SZ9RZpC","product_body":"k58BXoucB0IbFLQvqGNT","product_body_img":"k0WX_2Npq4S6HeqyiOaG","product_body_inf":"ovtGG2q7GkCEVj7l6zrS","product_body_inf_name":"peoHi5ahCjLIUf2Aduk8","product_body_inf_stars":"ahXfASQiN5rMFdqXfdIK","product_body_inf_oldPrice":"BvtOnNFvNAm2CNYvCrj5","product_body_inf_newPrice":"FKY9jO6tbgkJx0s5lHwi","product_footer":"fFt2Hk_123y86VYipg4v"});

/***/ })

}]);
//# sourceMappingURL=src_Pages_Product_Product_js.js.map