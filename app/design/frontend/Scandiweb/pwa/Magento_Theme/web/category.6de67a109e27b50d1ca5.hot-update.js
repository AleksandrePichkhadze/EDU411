webpackHotUpdate("category",{

/***/ "../../../../../vendor/scandipwa/source/src/app/route/CategoryPage/CategoryTypes/CategoryTypes.component.js":
/*!*******************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/route/CategoryPage/CategoryTypes/CategoryTypes.component.js ***!
  \*******************************************************************************************************************/
/*! exports provided: _CategoryTypes, CategoryTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategoryTypes", function() { return _CategoryTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTypes", function() { return CategoryTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Category */ "../../../../../vendor/scandipwa/source/src/app/type/Category.js");
/* harmony import */ var _CategoryTypes_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryTypes.style */ "../../../../../vendor/scandipwa/source/src/app/route/CategoryPage/CategoryTypes/CategoryTypes.style.scss");
/* harmony import */ var _CategoryTypes_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CategoryTypes_style__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */



/**
 * Category types
 * @class CategoryTypes
 * @namespace Component/CategoryTypes/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CategoryTypes =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategoryTypes, _Extensible);

  function _CategoryTypes() {
    _classCallCheck(this, _CategoryTypes);

    return _possibleConstructorReturn(this, _getPrototypeOf(_CategoryTypes).apply(this, arguments));
  }

  _createClass(_CategoryTypes, [{
    key: "renderCategoryType",
    value: function renderCategoryType() {
      var category_type = this.props.category.category_type;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", null, category_type)
      );
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", null, this.renderCategoryType())
      );
    }
  }]);

  return _CategoryTypes;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
Object.defineProperty(_CategoryTypes, 'name', {
  value: 'CategoryTypes'
});

var CategoryTypes = middleware(_CategoryTypes, "Component/CategoryTypes/Component");

_defineProperty(CategoryTypes, "propTypes", {
  category: _app_design_frontend_Scandiweb_pwa_src_app_type_Category__WEBPACK_IMPORTED_MODULE_1__["CategoryTreeType"].isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CategoryTypes);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/route/CategoryPage/CategoryTypes/CategoryTypes.style.scss":
/*!*****************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/route/CategoryPage/CategoryTypes/CategoryTypes.style.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1607693534856
      var cssReload = __webpack_require__(/*! ../../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ })

})
//# sourceMappingURL=category.6de67a109e27b50d1ca5.hot-update.js.map