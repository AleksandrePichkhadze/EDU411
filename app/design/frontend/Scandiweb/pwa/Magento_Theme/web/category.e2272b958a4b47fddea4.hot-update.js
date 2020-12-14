webpackHotUpdate("category",{

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.component.js":
/*!********************************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.component.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: _CategoryConfigurableAttributes, CategoryConfigurableAttributes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, __, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategoryConfigurableAttributes", function() { return _CategoryConfigurableAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryConfigurableAttributes", function() { return CategoryConfigurableAttributes; });
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/ExpandableContent */ "../../../../../vendor/scandipwa/source/src/app/component/ExpandableContent/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_ExpandableContentShowMore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/ExpandableContentShowMore */ "../../../../../vendor/scandipwa/source/src/app/component/ExpandableContentShowMore/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_ProductConfigurableAttributes_ProductConfigurableAttributes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/ProductConfigurableAttributes/ProductConfigurableAttributes.component */ "../../../../../vendor/scandipwa/source/src/app/component/ProductConfigurableAttributes/ProductConfigurableAttributes.component.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Price */ "../../../../../vendor/scandipwa/source/src/app/util/Price/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

 // eslint-disable-next-line max-len



/** @namespace Component/CategoryConfigurableAttributes/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CategoryConfigurableAttributes =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategoryConfigurableAttributes, _Extensible);

  function _CategoryConfigurableAttributes() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CategoryConfigurableAttributes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CategoryConfigurableAttributes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderConfigurableOption", function (option) {
      var attribute_code = option.attribute_code;

      switch (attribute_code) {
        case 'price':
          return _this.renderPriceSwatch(option);

        default:
          return _this.renderDropdownOrSwatch(option);
      }
    });

    return _this;
  }

  _createClass(_CategoryConfigurableAttributes, [{
    key: "getPriceLabel",
    value: function getPriceLabel(option) {
      var currency_code = this.props.currency_code;
      var value_string = option.value_string;

      var _value_string$split = value_string.split('_'),
          _value_string$split2 = _slicedToArray(_value_string$split, 2),
          from = _value_string$split2[0],
          to = _value_string$split2[1];

      var priceFrom = Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Price__WEBPACK_IMPORTED_MODULE_3__["formatPrice"])(from, currency_code);
      var priceTo = Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Price__WEBPACK_IMPORTED_MODULE_3__["formatPrice"])(to, currency_code);

      if (from === '*') {
        return __('Up to %s', priceTo);
      }

      if (to === '*') {
        return __('From %s', priceFrom);
      }

      return __('From %s, to %s', priceFrom, priceTo);
    }
  }, {
    key: "renderPriceSwatch",
    value: function renderPriceSwatch(option) {
      var _this2 = this;

      var attribute_options = option.attribute_options,
          priceOption = _objectWithoutProperties(option, ["attribute_options"]);

      if (attribute_options) {
        // do not render price filter if it includes "*_*" aggregation
        if (attribute_options['*_*']) {
          return null;
        }

        priceOption.attribute_options = Object.entries(attribute_options).reduce(function (acc, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              option = _ref2[1];

          acc[key] = _objectSpread2(_objectSpread2({}, option), {}, {
            label: _this2.getPriceLabel(option)
          });
          return acc;
        }, {});
      }

      return this.renderDropdownOrSwatch(priceOption);
    }
  }, {
    key: "renderDropdownOrSwatch",
    value: function renderDropdownOrSwatch(option) {
      var _this$props = this.props,
          isContentExpanded = _this$props.isContentExpanded,
          getSubHeading = _this$props.getSubHeading;
      var attribute_label = option.attribute_label,
          attribute_code = option.attribute_code,
          attribute_options = option.attribute_options;

      var _ref3 = attribute_options ? Object.values(attribute_options) : [{}],
          _ref4 = _slicedToArray(_ref3, 1),
          swatch_data = _ref4[0].swatch_data;

      var isSwatch = !!swatch_data;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_ExpandableContent__WEBPACK_IMPORTED_MODULE_0__["default"], {
          key: attribute_code,
          heading: attribute_label,
          subHeading: getSubHeading(option),
          mix: {
            block: 'ProductConfigurableAttributes',
            elem: 'Expandable'
          },
          isContentExpanded: isContentExpanded
        }, isSwatch ? this.renderSwatch(option) : this.renderDropdown(option))
      );
    }
  }, {
    key: "renderConfigurableAttributes",
    value: function renderConfigurableAttributes() {
      var configurable_options = this.props.configurable_options;
      return Object.values(configurable_options).map(this.renderConfigurableOption);
    }
  }, {
    key: "renderDropdown",
    value: function renderDropdown(option) {
      var _this3 = this;

      var attribute_values = option.attribute_values;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "ProductConfigurableAttributes",
          elem: "DropDownList"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_ExpandableContentShowMore__WEBPACK_IMPORTED_MODULE_1__["default"], null, attribute_values.map(function (attribute_value) {
          return _this3.renderConfigurableAttributeValue(_objectSpread2(_objectSpread2({}, option), {}, {
            attribute_value: attribute_value
          }));
        })))
      );
    }
  }]);

  return _CategoryConfigurableAttributes;
}(Extensible(_app_design_frontend_Scandiweb_pwa_src_app_component_ProductConfigurableAttributes_ProductConfigurableAttributes_component__WEBPACK_IMPORTED_MODULE_2__["default"]));
Object.defineProperty(_CategoryConfigurableAttributes, 'name', {
  value: 'CategoryConfigurableAttributes'
});

var CategoryConfigurableAttributes = middleware(_CategoryConfigurableAttributes, "Component/CategoryConfigurableAttributes/Component");
/* harmony default export */ __webpack_exports__["default"] = (CategoryConfigurableAttributes);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.container.js":
/*!********************************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.container.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: mapStateToProps, _CategoryConfigurableAttributesContainer, CategoryConfigurableAttributesContainer, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategoryConfigurableAttributesContainer", function() { return _CategoryConfigurableAttributesContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryConfigurableAttributesContainer", function() { return CategoryConfigurableAttributesContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_ProductConfigurableAttributes_ProductConfigurableAttributes_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/ProductConfigurableAttributes/ProductConfigurableAttributes.container */ "../../../../../vendor/scandipwa/source/src/app/component/ProductConfigurableAttributes/ProductConfigurableAttributes.container.js");
/* harmony import */ var _CategoryConfigurableAttributes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryConfigurableAttributes.component */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
 // eslint-disable-next-line max-len



/** @namespace Component/CategoryConfigurableAttributes/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    currency_code: state.ConfigReducer.default_display_currency_code
  };
}, "Component/CategoryConfigurableAttributes/Container/mapStateToProps");
/** @namespace Component/CategoryConfigurableAttributes/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CategoryConfigurableAttributesContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategoryConfigurableAttributesContainer, _Extensible);

  function _CategoryConfigurableAttributesContainer() {
    _classCallCheck(this, _CategoryConfigurableAttributesContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(_CategoryConfigurableAttributesContainer).apply(this, arguments));
  }

  _createClass(_CategoryConfigurableAttributesContainer, [{
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _CategoryConfigurableAttributes_component__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, this.containerFunctions))
      );
    }
  }]);

  return _CategoryConfigurableAttributesContainer;
}(Extensible(_app_design_frontend_Scandiweb_pwa_src_app_component_ProductConfigurableAttributes_ProductConfigurableAttributes_container__WEBPACK_IMPORTED_MODULE_1__["default"]));
/** @namespace Component/CategoryConfigurableAttributes/Container/mapDispatchToProps */
// eslint-disable-next-line no-unused-vars

Object.defineProperty(_CategoryConfigurableAttributesContainer, 'name', {
  value: 'CategoryConfigurableAttributesContainer'
});

var CategoryConfigurableAttributesContainer = middleware(_CategoryConfigurableAttributesContainer, "Component/CategoryConfigurableAttributes/Container");
var mapDispatchToProps = middleware(function (dispatch) {
  return {};
}, "Component/CategoryConfigurableAttributes/Container/mapDispatchToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(CategoryConfigurableAttributesContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryConfigurableAttributes/index.js":
/*!*********************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryConfigurableAttributes/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryConfigurableAttributes_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryConfigurableAttributes.container */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryConfigurableAttributes/CategoryConfigurableAttributes.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CategoryConfigurableAttributes_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryDetails/CategoryDetails.component.js":
/*!**************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryDetails/CategoryDetails.component.js ***!
  \**************************************************************************************************************/
/*! exports provided: _CategoryDetails, CategoryDetails, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategoryDetails", function() { return _CategoryDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetails", function() { return CategoryDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Html */ "../../../../../vendor/scandipwa/source/src/app/component/Html/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Image */ "../../../../../vendor/scandipwa/source/src/app/component/Image/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_TextPlaceholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/TextPlaceholder */ "../../../../../vendor/scandipwa/source/src/app/component/TextPlaceholder/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Category */ "../../../../../vendor/scandipwa/source/src/app/type/Category.js");
/* harmony import */ var _CategoryDetails_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CategoryDetails.style */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryDetails/CategoryDetails.style.scss");
/* harmony import */ var _CategoryDetails_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CategoryDetails_style__WEBPACK_IMPORTED_MODULE_5__);
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
 * Category details
 * @class CategoryDetails
 * @namespace Component/CategoryDetails/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CategoryDetails =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategoryDetails, _Extensible);

  function _CategoryDetails() {
    _classCallCheck(this, _CategoryDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(_CategoryDetails).apply(this, arguments));
  }

  _createClass(_CategoryDetails, [{
    key: "renderCategoryName",
    value: function renderCategoryName() {
      var _this$props$category = this.props.category,
          name = _this$props$category.name,
          id = _this$props$category.id;

      if (id && !name) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "h1", {
          block: "CategoryDetails",
          elem: "Heading"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_TextPlaceholder__WEBPACK_IMPORTED_MODULE_3__["default"], {
          content: name
        }))
      );
    }
  }, {
    key: "renderCategoryDescription",
    value: function renderCategoryDescription() {
      var _this$props$category2 = this.props.category,
          description = _this$props$category2.description,
          id = _this$props$category2.id;

      if (!id) {
        return this.renderCategoryDescriptionPlaceholder();
      }

      if (!description) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Html__WEBPACK_IMPORTED_MODULE_1__["default"], {
          content: description
        })
      );
    }
  }, {
    key: "renderCategoryDescriptionPlaceholder",
    value: function renderCategoryDescriptionPlaceholder() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "p", null,
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_TextPlaceholder__WEBPACK_IMPORTED_MODULE_3__["default"], {
          length: "long"
        }))
      );
    }
  }, {
    key: "renderCategoryImagePlaceholder",
    value: function renderCategoryImagePlaceholder() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
          mix: {
            block: 'CategoryDetails',
            elem: 'Picture'
          },
          objectFit: "cover",
          ratio: "custom",
          isPlaceholder: true
        })
      );
    }
  }, {
    key: "renderCategoryImage",
    value: function renderCategoryImage() {
      var _this$props$category3 = this.props.category,
          image = _this$props$category3.image,
          id = _this$props$category3.id;

      if (!id) {
        return this.renderCategoryImagePlaceholder();
      }

      if (!image) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
          mix: {
            block: 'CategoryDetails',
            elem: 'Picture'
          },
          src: image || '',
          ratio: "custom",
          objectFit: "cover"
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "article", {
          block: "CategoryDetails"
        },
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CategoryDetails",
          elem: "Description"
        }, this.renderCategoryName(), this.renderCategoryDescription()), this.renderCategoryImage())
      );
    }
  }]);

  return _CategoryDetails;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
Object.defineProperty(_CategoryDetails, 'name', {
  value: 'CategoryDetails'
});

var CategoryDetails = middleware(_CategoryDetails, "Component/CategoryDetails/Component");

_defineProperty(CategoryDetails, "propTypes", {
  category: _app_design_frontend_Scandiweb_pwa_src_app_type_Category__WEBPACK_IMPORTED_MODULE_4__["CategoryTreeType"].isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CategoryDetails);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryDetails/CategoryDetails.style.scss":
/*!************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryDetails/CategoryDetails.style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1607691642994
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryDetails/index.js":
/*!******************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryDetails/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryDetails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryDetails.component */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryDetails/CategoryDetails.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CategoryDetails_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.component.js":
/*!**************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.component.js ***!
  \**************************************************************************************************************************/
/*! exports provided: _CategoryFilterOverlay, CategoryFilterOverlay, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategoryFilterOverlay", function() { return _CategoryFilterOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFilterOverlay", function() { return CategoryFilterOverlay; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryConfigurableAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategoryConfigurableAttributes */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryConfigurableAttributes/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Loader */ "../../../../../vendor/scandipwa/source/src/app/component/Loader/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Overlay */ "../../../../../vendor/scandipwa/source/src/app/component/Overlay/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_ResetButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/ResetButton */ "../../../../../vendor/scandipwa/source/src/app/component/ResetButton/index.js");
/* harmony import */ var _CategoryFilterOverlay_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CategoryFilterOverlay.config */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.config.js");
/* harmony import */ var _CategoryFilterOverlay_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CategoryFilterOverlay.style */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.style.scss");
/* harmony import */ var _CategoryFilterOverlay_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CategoryFilterOverlay_style__WEBPACK_IMPORTED_MODULE_7__);
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








/** @namespace Component/CategoryFilterOverlay/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CategoryFilterOverlay =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategoryFilterOverlay, _Extensible);

  function _CategoryFilterOverlay() {
    _classCallCheck(this, _CategoryFilterOverlay);

    return _possibleConstructorReturn(this, _getPrototypeOf(_CategoryFilterOverlay).apply(this, arguments));
  }

  _createClass(_CategoryFilterOverlay, [{
    key: "renderFilters",
    value: function renderFilters() {
      var _this$props = this.props,
          availableFilters = _this$props.availableFilters,
          customFiltersValues = _this$props.customFiltersValues,
          toggleCustomFilter = _this$props.toggleCustomFilter,
          isMatchingInfoFilter = _this$props.isMatchingInfoFilter,
          getFilterUrl = _this$props.getFilterUrl;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryConfigurableAttributes__WEBPACK_IMPORTED_MODULE_2__["default"], {
          mix: {
            block: 'CategoryFilterOverlay',
            elem: 'Attributes'
          },
          isReady: isMatchingInfoFilter,
          configurable_options: availableFilters,
          getLink: getFilterUrl,
          parameters: customFiltersValues,
          updateConfigurableVariant: toggleCustomFilter
        })
      );
    }
  }, {
    key: "renderSeeResults",
    value: function renderSeeResults() {
      var onSeeResultsClick = this.props.onSeeResultsClick;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CategoryFilterOverlay",
          elem: "SeeResults"
        },
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "CategoryFilterOverlay",
          elem: "Button",
          mix: {
            block: 'Button'
          },
          onClick: onSeeResultsClick
        }, __('SEE RESULTS')))
      );
    }
  }, {
    key: "renderResetButton",
    value: function renderResetButton() {
      var onSeeResultsClick = this.props.onSeeResultsClick;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_ResetButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onClick: onSeeResultsClick,
          mix: {
            block: 'CategoryFilterOverlay',
            elem: 'ResetButton'
          }
        })
      );
    }
  }, {
    key: "renderHeading",
    value: function renderHeading() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "h2", {
          block: "CategoryFilterOverlay",
          elem: "Heading"
        }, __('Shopping Options'))
      );
    }
  }, {
    key: "renderNoResults",
    value: function renderNoResults() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "p", {
          block: "CategoryFilterOverlay",
          elem: "NoResults"
        }, __("The selected filter combination returned no results.\n                Please try again, using a different set of filters."))
      );
    }
  }, {
    key: "renderEmptyFilters",
    value: function renderEmptyFilters() {
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderNoResults(), this.renderResetButton(), this.renderSeeResults())
      );
    }
  }, {
    key: "renderMinimalFilters",
    value: function renderMinimalFilters() {
      return this.renderSeeResults();
    }
  }, {
    key: "renderDefaultFilters",
    value: function renderDefaultFilters() {
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderHeading(), this.renderResetButton(), this.renderFilters(), this.renderSeeResults())
      );
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$props2 = this.props,
          totalPages = _this$props2.totalPages,
          areFiltersEmpty = _this$props2.areFiltersEmpty,
          isProductsLoading = _this$props2.isProductsLoading;

      if (!isProductsLoading && totalPages === 0) {
        return this.renderEmptyFilters();
      }

      if (areFiltersEmpty) {
        return this.renderMinimalFilters();
      }

      return this.renderDefaultFilters();
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      var _this$props3 = this.props,
          isInfoLoading = _this$props3.isInfoLoading,
          availableFilters = _this$props3.availableFilters;
      var isLoaded = availableFilters && !!Object.keys(availableFilters).length;

      if (!isLoaded) {
        // hide loader if filters were not yet loaded (even once!)
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
          isLoading: isInfoLoading
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          onVisible = _this$props4.onVisible,
          onHide = _this$props4.onHide,
          totalPages = _this$props4.totalPages,
          isProductsLoading = _this$props4.isProductsLoading,
          isContentFiltered = _this$props4.isContentFiltered;

      if (!isProductsLoading && totalPages === 0 && !isContentFiltered) {
        return (
          /*#__PURE__*/
          _checkBEM(React, "div", {
            block: "CategoryFilterOverlay"
          })
        );
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Overlay__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onVisible: onVisible,
          onHide: onHide,
          mix: {
            block: 'CategoryFilterOverlay'
          },
          id: _CategoryFilterOverlay_config__WEBPACK_IMPORTED_MODULE_6__["CATEGORY_FILTER_OVERLAY_ID"],
          isRenderInPortal: false
        },
        /*#__PURE__*/
        _checkBEM(React, "div", null, this.renderContent(), this.renderLoader()))
      );
    }
  }]);

  return _CategoryFilterOverlay;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CategoryFilterOverlay, 'name', {
  value: 'CategoryFilterOverlay'
});

var CategoryFilterOverlay = middleware(_CategoryFilterOverlay, "Component/CategoryFilterOverlay/Component");

_defineProperty(CategoryFilterOverlay, "propTypes", {
  availableFilters: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape).isRequired,
  areFiltersEmpty: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isContentFiltered: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isMatchingInfoFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isInfoLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isProductsLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onSeeResultsClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onVisible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onHide: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  customFiltersValues: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array).isRequired,
  toggleCustomFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  getFilterUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  totalPages: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
});

_defineProperty(CategoryFilterOverlay, "defaultProps", {
  isMatchingInfoFilter: false
});

/* harmony default export */ __webpack_exports__["default"] = (CategoryFilterOverlay);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.config.js":
/*!***********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.config.js ***!
  \***********************************************************************************************************************/
/*! exports provided: CATEGORY_FILTER_OVERLAY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_FILTER_OVERLAY_ID", function() { return CATEGORY_FILTER_OVERLAY_ID; });
/* eslint-disable import/prefer-default-export */

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
var CATEGORY_FILTER_OVERLAY_ID = 'category-filter';

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.container.js":
/*!**************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.container.js ***!
  \**************************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, _CategoryFilterOverlayContainer, CategoryFilterOverlayContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategoryFilterOverlayContainer", function() { return _CategoryFilterOverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFilterOverlayContainer", function() { return CategoryFilterOverlayContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Header/Header.config */ "../../../../../vendor/scandipwa/source/src/app/component/Header/Header.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Navigation/Navigation.action */ "../../../../../vendor/scandipwa/source/src/app/store/Navigation/Navigation.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Navigation/Navigation.reducer */ "../../../../../vendor/scandipwa/source/src/app/store/Navigation/Navigation.reducer.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Overlay/Overlay.action */ "../../../../../vendor/scandipwa/source/src/app/store/Overlay/Overlay.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Common */ "../../../../../vendor/scandipwa/source/src/app/type/Common.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Url */ "../../../../../vendor/scandipwa/source/src/app/util/Url/index.js");
/* harmony import */ var _CategoryFilterOverlay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CategoryFilterOverlay.component */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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











/** @namespace Component/CategoryFilterOverlay/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    isInfoLoading: state.ProductListInfoReducer.isLoading,
    isProductsLoading: state.ProductListReducer.isLoading,
    totalPages: state.ProductListReducer.totalPages
  };
}, "Component/CategoryFilterOverlay/Container/mapStateToProps");
/** @namespace Component/CategoryFilterOverlay/Container/mapDispatchToProps */

var mapDispatchToProps = middleware(function (dispatch) {
  return {
    hideActiveOverlay: function hideActiveOverlay() {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Overlay_Overlay_action__WEBPACK_IMPORTED_MODULE_7__["hideActiveOverlay"])());
    },
    goToPreviousHeaderState: function goToPreviousHeaderState() {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_5__["goToPreviousNavigationState"])(_app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_6__["TOP_NAVIGATION_TYPE"]));
    },
    goToPreviousNavigationState: function goToPreviousNavigationState() {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_5__["goToPreviousNavigationState"])(_app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_6__["BOTTOM_NAVIGATION_TYPE"]));
    },
    changeHeaderState: function changeHeaderState(state) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_5__["changeNavigationState"])(_app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_6__["TOP_NAVIGATION_TYPE"], state));
    },
    changeNavigationState: function changeNavigationState(state) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_action__WEBPACK_IMPORTED_MODULE_5__["changeNavigationState"])(_app_design_frontend_Scandiweb_pwa_src_app_store_Navigation_Navigation_reducer__WEBPACK_IMPORTED_MODULE_6__["BOTTOM_NAVIGATION_TYPE"], state));
    }
  };
}, "Component/CategoryFilterOverlay/Container/mapDispatchToProps");
/** @namespace Component/CategoryFilterOverlay/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CategoryFilterOverlayContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategoryFilterOverlayContainer, _Extensible);

  function _CategoryFilterOverlayContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CategoryFilterOverlayContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CategoryFilterOverlayContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      onSeeResultsClick: _this.onSeeResultsClick.bind(_assertThisInitialized(_this)),
      toggleCustomFilter: _this.toggleCustomFilter.bind(_assertThisInitialized(_this)),
      getFilterUrl: _this.getCustomFilterUrl.bind(_assertThisInitialized(_this)),
      onVisible: _this.onVisible.bind(_assertThisInitialized(_this)),
      onHide: _this.onHide.bind(_assertThisInitialized(_this))
    });

    _defineProperty(_assertThisInitialized(_this), "historyBackHook", function () {
      var _this$props = _this.props,
          goToPreviousNavigationState = _this$props.goToPreviousNavigationState,
          customFiltersValues = _this$props.customFiltersValues,
          hideActiveOverlay = _this$props.hideActiveOverlay,
          goToPreviousHeaderState = _this$props.goToPreviousHeaderState;
      goToPreviousNavigationState(); // close filter only if no applied filters left

      if (Object.keys(customFiltersValues).length === 0) {
        hideActiveOverlay();
        goToPreviousHeaderState();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "containerProps", function () {
      return {
        areFiltersEmpty: _this.getAreFiltersEmpty(),
        isContentFiltered: _this.isContentFiltered()
      };
    });

    return _this;
  }

  _createClass(_CategoryFilterOverlayContainer, [{
    key: "updateFilter",
    value: function updateFilter(filterName, filterArray) {
      var _this$props2 = this.props,
          location = _this$props2.location,
          history = _this$props2.history;
      Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Url__WEBPACK_IMPORTED_MODULE_9__["setQueryParams"])({
        customFilters: this.getFilterUrl(filterName, filterArray, false),
        page: ''
      }, location, history);
    }
  }, {
    key: "toggleCustomFilter",
    value: function toggleCustomFilter(requestVar, value) {
      this.updateFilter(requestVar, this._getNewFilterArray(requestVar, value));
    }
  }, {
    key: "getFilterUrl",
    value: function getFilterUrl(filterName, filterArray) {
      var isFull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var pathname = this.props.location.pathname;

      var selectedFilters = this._getNewSelectedFiltersString(filterName, filterArray);

      var customFilters = isFull ? "".concat(pathname, "?customFilters=") : '';

      var formattedFilters = this._formatSelectedFiltersString(selectedFilters);

      return "".concat(customFilters).concat(formattedFilters);
    }
  }, {
    key: "getCustomFilterUrl",
    value: function getCustomFilterUrl(filterKey, value) {
      return this.getFilterUrl(filterKey, this._getNewFilterArray(filterKey, value));
    }
  }, {
    key: "_getSelectedFiltersFromUrl",
    value: function _getSelectedFiltersFromUrl() {
      var location = this.props.location;
      var selectedFiltersString = (Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Url__WEBPACK_IMPORTED_MODULE_9__["getQueryParam"])('customFilters', location) || '').split(';');
      return selectedFiltersString.reduce(function (acc, filter) {
        if (!filter) {
          return acc;
        }

        var _filter$split = filter.split(':'),
            _filter$split2 = _slicedToArray(_filter$split, 2),
            key = _filter$split2[0],
            value = _filter$split2[1];

        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, key, value.split(',')));
      }, {});
    }
  }, {
    key: "_getNewSelectedFiltersString",
    value: function _getNewSelectedFiltersString(filterName, filterArray) {
      var prevCustomFilters = this._getSelectedFiltersFromUrl();

      var customFilers = _objectSpread2(_objectSpread2({}, prevCustomFilters), {}, _defineProperty({}, filterName, filterArray));

      return Object.entries(customFilers).reduce(function (accumulator, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            filterKey = _ref2[0],
            filterValue = _ref2[1];

        if (filterValue.length) {
          var filterValues = filterValue.sort().join(',');
          accumulator.push("".concat(filterKey, ":").concat(filterValues));
        }

        return accumulator;
      }, []).sort().join(';');
    }
  }, {
    key: "_formatSelectedFiltersString",
    value: function _formatSelectedFiltersString(string) {
      var hasTrailingSemicolon = string[string.length - 1] === ';';
      var hasLeadingSemicolon = string[0] === ';';

      if (hasLeadingSemicolon) {
        return this._formatSelectedFiltersString(string.slice(0, -1));
      }

      if (hasTrailingSemicolon) {
        return string.slice(1);
      }

      return string;
    }
  }, {
    key: "onSeeResultsClick",
    value: function onSeeResultsClick() {
      var _this$props3 = this.props,
          hideActiveOverlay = _this$props3.hideActiveOverlay,
          goToPreviousHeaderState = _this$props3.goToPreviousHeaderState,
          goToPreviousNavigationState = _this$props3.goToPreviousNavigationState;
      hideActiveOverlay();
      goToPreviousHeaderState();
      goToPreviousNavigationState();
    }
  }, {
    key: "onVisible",
    value: function onVisible() {
      var _this$props4 = this.props,
          hideActiveOverlay = _this$props4.hideActiveOverlay,
          changeHeaderState = _this$props4.changeHeaderState,
          changeNavigationState = _this$props4.changeNavigationState,
          goToPreviousNavigationState = _this$props4.goToPreviousNavigationState,
          _this$props4$location = _this$props4.location,
          pathname = _this$props4$location.pathname,
          search = _this$props4$location.search;
      changeHeaderState({
        name: _app_design_frontend_Scandiweb_pwa_src_app_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_4__["FILTER"],
        title: __('Filters'),
        onCloseClick: function onCloseClick() {
          hideActiveOverlay();
          goToPreviousNavigationState();
        }
      });
      changeNavigationState({
        name: _app_design_frontend_Scandiweb_pwa_src_app_component_Header_Header_config__WEBPACK_IMPORTED_MODULE_4__["FILTER"],
        isHidden: true
      });
      window.addEventListener('popstate', this.historyBackHook);
      history.pushState({
        overlayOpen: true
      }, '', pathname + search);
    }
  }, {
    key: "onHide",
    value: function onHide() {
      window.removeEventListener('popstate', this.historyBackHook);
    }
  }, {
    key: "getAreFiltersEmpty",
    value: function getAreFiltersEmpty() {
      var _this$props5 = this.props,
          isInfoLoading = _this$props5.isInfoLoading,
          availableFilters = _this$props5.availableFilters;
      return !isInfoLoading && (!availableFilters || !Object.keys(availableFilters).length);
    }
  }, {
    key: "isContentFiltered",
    value: function isContentFiltered() {
      var _this$urlStringToObje = this.urlStringToObject(),
          customFilters = _this$urlStringToObje.customFilters,
          priceMin = _this$urlStringToObje.priceMin,
          priceMax = _this$urlStringToObje.priceMax;

      return !!(customFilters || priceMin || priceMax);
    }
  }, {
    key: "urlStringToObject",
    value: function urlStringToObject() {
      var search = this.props.location.search;
      return search.substr(1).split('&').reduce(function (acc, part) {
        var _part$split = part.split('='),
            _part$split2 = _slicedToArray(_part$split, 2),
            key = _part$split2[0],
            value = _part$split2[1];

        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, key, value));
      }, {});
    }
    /**
     * Returns filter array with new parameters
     *
     * @param {String} filterKey key of option
     * @param {String} value
     * @returns {Object[]}
     * @memberof CategoryShoppingOptions
     */

  }, {
    key: "_getNewFilterArray",
    value: function _getNewFilterArray(filterKey, value) {
      var customFiltersValues = this.props.customFiltersValues;
      var newFilterArray = customFiltersValues[filterKey] !== undefined ? Array.from(customFiltersValues[filterKey]) : [];
      var filterValueIndex = newFilterArray.indexOf(value);

      if (filterKey === 'price') {
        // for price filter, choose one
        return [value];
      }

      if (filterValueIndex === -1) {
        newFilterArray.push(value);
      } else {
        newFilterArray.splice(filterValueIndex, 1);
      }

      return newFilterArray;
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _CategoryFilterOverlay_component__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, this.props, this.containerFunctions, this.containerProps()))
      );
    }
  }]);

  return _CategoryFilterOverlayContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CategoryFilterOverlayContainer, 'name', {
  value: 'CategoryFilterOverlayContainer'
});

var CategoryFilterOverlayContainer = middleware(_CategoryFilterOverlayContainer, "Component/CategoryFilterOverlay/Container");

_defineProperty(CategoryFilterOverlayContainer, "propTypes", {
  history: _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_8__["HistoryType"].isRequired,
  location: _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_8__["LocationType"].isRequired,
  customFiltersValues: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array).isRequired,
  hideActiveOverlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  goToPreviousHeaderState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  goToPreviousNavigationState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  changeHeaderState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  changeNavigationState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  availableFilters: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape).isRequired,
  isInfoLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CategoryFilterOverlayContainer)));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.style.scss":
/*!************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1607691643238
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/index.js":
/*!************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/index.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryFilterOverlay_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryFilterOverlay.container */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CategoryFilterOverlay_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryItemsCount/CategoryItemsCount.component.js":
/*!********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryItemsCount/CategoryItemsCount.component.js ***!
  \********************************************************************************************************************/
/*! exports provided: _CategoryItemsCount, CategoryItemsCount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategoryItemsCount", function() { return _CategoryItemsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemsCount", function() { return CategoryItemsCount; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_TextPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/TextPlaceholder */ "../../../../../vendor/scandipwa/source/src/app/component/TextPlaceholder/index.js");
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



/** @namespace Component/CategoryItemsCount/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CategoryItemsCount =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategoryItemsCount, _Extensible);

  function _CategoryItemsCount() {
    _classCallCheck(this, _CategoryItemsCount);

    return _possibleConstructorReturn(this, _getPrototypeOf(_CategoryItemsCount).apply(this, arguments));
  }

  _createClass(_CategoryItemsCount, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          totalItems = _this$props.totalItems,
          isMatchingListFilter = _this$props.isMatchingListFilter;
      return (
        /*#__PURE__*/
        _checkBEM(React, "p", {
          block: "CategoryPage",
          elem: "ItemsCount"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_TextPlaceholder__WEBPACK_IMPORTED_MODULE_2__["default"], {
          content: !isMatchingListFilter ? __('Products are loading...') : __('%s items found', totalItems)
        }))
      );
    }
  }]);

  return _CategoryItemsCount;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CategoryItemsCount, 'name', {
  value: 'CategoryItemsCount'
});

var CategoryItemsCount = middleware(_CategoryItemsCount, "Component/CategoryItemsCount/Component");

_defineProperty(CategoryItemsCount, "propTypes", {
  totalItems: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  isMatchingListFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});

_defineProperty(CategoryItemsCount, "defaultProps", {
  isMatchingListFilter: false
});

/* harmony default export */ __webpack_exports__["default"] = (CategoryItemsCount);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryItemsCount/CategoryItemsCount.container.js":
/*!********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryItemsCount/CategoryItemsCount.container.js ***!
  \********************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CategoryItemsCount_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryItemsCount.component */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryItemsCount/CategoryItemsCount.component.js");
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


/** @namespace Component/CategoryItemsCount/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    totalItems: state.ProductListReducer.totalItems
  };
}, "Component/CategoryItemsCount/Container/mapStateToProps");
/** @namespace Component/CategoryItemsCount/Container/mapDispatchToProps */
// eslint-disable-next-line no-unused-vars

var mapDispatchToProps = middleware(function (dispatch) {
  return {};
}, "Component/CategoryItemsCount/Container/mapDispatchToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_CategoryItemsCount_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryItemsCount/index.js":
/*!*********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryItemsCount/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryItemsCount_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryItemsCount.container */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryItemsCount/CategoryItemsCount.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CategoryItemsCount_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryProductList/CategoryProductList.container.js":
/*!**********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryProductList/CategoryProductList.container.js ***!
  \**********************************************************************************************************************/
/*! exports provided: ProductListDispatcher, mapStateToProps, mapDispatchToProps, _CategoryProductListContainer, CategoryProductListContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListDispatcher", function() { return ProductListDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategoryProductListContainer", function() { return _CategoryProductListContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryProductListContainer", function() { return CategoryProductListContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_ProductList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/ProductList */ "../../../../../vendor/scandipwa/source/src/app/component/ProductList/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_ProductList_ProductList_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/ProductList/ProductList.action */ "../../../../../vendor/scandipwa/source/src/app/store/ProductList/ProductList.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_ProductList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/ProductList */ "../../../../../vendor/scandipwa/source/src/app/type/ProductList.js");
/* harmony import */ var _CategoryProductList_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CategoryProductList.style */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryProductList/CategoryProductList.style.scss");
/* harmony import */ var _CategoryProductList_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CategoryProductList_style__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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







var ProductListDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/ProductList/ProductList.dispatcher */ "../../../../../vendor/scandipwa/source/src/app/store/ProductList/ProductList.dispatcher.js"));
/** @namespace Component/CategoryProductList/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    pages: state.ProductListReducer.pages,
    isOffline: state.OfflineReducer.isOffline,
    isLoading: state.ProductListReducer.isLoading,
    isPageLoading: state.ProductListReducer.isPageLoading,
    totalItems: state.ProductListReducer.totalItems,
    totalPages: state.ProductListReducer.totalPages
  };
}, "Component/CategoryProductList/Container/mapStateToProps");
/** @namespace Component/CategoryProductList/Container/mapDispatchToProps */

var mapDispatchToProps = middleware(function (dispatch) {
  return {
    requestProductList: function requestProductList(options) {
      return ProductListDispatcher.then(function (_ref) {
        var dispatcher = _ref.default;
        return dispatcher.handleData(dispatch, options);
      });
    },
    updateLoadStatus: function updateLoadStatus(isLoading) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_ProductList_ProductList_action__WEBPACK_IMPORTED_MODULE_4__["updateLoadStatus"])(isLoading));
    }
  };
}, "Component/CategoryProductList/Container/mapDispatchToProps");
/** @namespace Component/CategoryProductList/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CategoryProductListContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategoryProductListContainer, _Extensible);

  function _CategoryProductListContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CategoryProductListContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CategoryProductListContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      requestProductList: _this.requestProductList.bind(_assertThisInitialized(_this))
    });

    _defineProperty(_assertThisInitialized(_this), "containerProps", function () {
      return {
        isLoading: _this.getIsLoading(),
        isPreventRequest: _this.getIsPreventRequest(),
        mix: {
          block: 'CategoryProductList'
        }
      };
    });

    return _this;
  }

  _createClass(_CategoryProductListContainer, [{
    key: "getIsLoading",
    value: function getIsLoading() {
      var _this$props = this.props,
          filter = _this$props.filter,
          isLoading = _this$props.isLoading,
          isMatchingListFilter = _this$props.isMatchingListFilter;
      /**
       * In case the wrong category was passed down to the product list,
       * show the loading animation, it will soon change to proper category.
       */

      if (filter.categoryIds === -1) {
        return true;
      }

      if (!navigator.onLine) {
        return false;
      } // if the filter expected matches the last requested filter


      if (isMatchingListFilter) {
        return false;
      }

      return isLoading;
    }
  }, {
    key: "getIsPreventRequest",
    value: function getIsPreventRequest() {
      var _this$props2 = this.props,
          isMatchingListFilter = _this$props2.isMatchingListFilter,
          isMatchingInfoFilter = _this$props2.isMatchingInfoFilter;
      return isMatchingListFilter && isMatchingInfoFilter; // if filter match - prevent request
    }
  }, {
    key: "requestProductList",
    value: function requestProductList(options) {
      var requestProductList = this.props.requestProductList;
      requestProductList(options);
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_ProductList__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, this.containerFunctions, this.containerProps()))
      );
    }
  }]);

  return _CategoryProductListContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CategoryProductListContainer, 'name', {
  value: 'CategoryProductListContainer'
});

var CategoryProductListContainer = middleware(_CategoryProductListContainer, "Component/CategoryProductList/Container");

_defineProperty(CategoryProductListContainer, "propTypes", {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isMatchingListFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isMatchingInfoFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  filter: _app_design_frontend_Scandiweb_pwa_src_app_type_ProductList__WEBPACK_IMPORTED_MODULE_5__["FilterInputType"],
  requestProductList: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

_defineProperty(CategoryProductListContainer, "defaultProps", {
  isMatchingListFilter: false,
  isMatchingInfoFilter: false,
  filter: {}
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CategoryProductListContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryProductList/CategoryProductList.style.scss":
/*!********************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryProductList/CategoryProductList.style.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1607691643019
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategoryProductList/index.js":
/*!**********************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategoryProductList/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryProductList_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryProductList.container */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryProductList/CategoryProductList.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CategoryProductList_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategorySort/CategorySort.component.js":
/*!********************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategorySort/CategorySort.component.js ***!
  \********************************************************************************************************/
/*! exports provided: _CategorySort, CategorySort, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategorySort", function() { return _CategorySort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySort", function() { return CategorySort; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Field */ "../../../../../vendor/scandipwa/source/src/app/component/Field/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_TextPlaceholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/TextPlaceholder */ "../../../../../vendor/scandipwa/source/src/app/component/TextPlaceholder/index.js");
/* harmony import */ var _CategorySort_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CategorySort.style */ "../../../../../vendor/scandipwa/source/src/app/component/CategorySort/CategorySort.style.scss");
/* harmony import */ var _CategorySort_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CategorySort_style__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
 * Product Sort
 * @class ProductSort
 * @namespace Component/CategorySort/Component
 */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CategorySort =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategorySort, _Extensible);

  function _CategorySort() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CategorySort);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CategorySort)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      var onSortChange = _this.props.onSortChange;

      var _value$split = value.split(' '),
          _value$split2 = _toArray(_value$split),
          direction = _value$split2[0],
          key = _value$split2.slice(1);

      onSortChange(direction, key);
    });

    return _this;
  }

  _createClass(_CategorySort, [{
    key: "renderPlaceholder",
    value: function renderPlaceholder() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "p", {
          block: "CategorySort",
          elem: "Placeholder"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_TextPlaceholder__WEBPACK_IMPORTED_MODULE_3__["default"], {
          length: "short"
        }))
      );
    }
  }, {
    key: "renderSortField",
    value: function renderSortField() {
      var _this$props = this.props,
          sortKey = _this$props.sortKey,
          sortDirection = _this$props.sortDirection,
          selectOptions = _this$props.selectOptions,
          isMatchingInfoFilter = _this$props.isMatchingInfoFilter;

      if (!isMatchingInfoFilter) {
        return this.renderPlaceholder();
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
          id: "category-sort",
          name: "category-sort",
          type: "select",
          label: __('SORT'),
          mix: {
            block: 'CategorySort',
            elem: 'Select'
          },
          selectOptions: selectOptions,
          value: "".concat(sortDirection, " ").concat(sortKey),
          onChange: this.onChange
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CategorySort"
        }, this.renderSortField())
      );
    }
  }]);

  return _CategorySort;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CategorySort, 'name', {
  value: 'CategorySort'
});

var CategorySort = middleware(_CategorySort, "Component/CategorySort/Component");

_defineProperty(CategorySort, "propTypes", {
  onSortChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  sortKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  selectOptions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
    value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })).isRequired,
  isMatchingInfoFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
});

_defineProperty(CategorySort, "defaultProps", {
  isMatchingInfoFilter: false
});

/* harmony default export */ __webpack_exports__["default"] = (CategorySort);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategorySort/CategorySort.container.js":
/*!********************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategorySort/CategorySort.container.js ***!
  \********************************************************************************************************/
/*! exports provided: _CategorySortContainer, CategorySortContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, __, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategorySortContainer", function() { return _CategorySortContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySortContainer", function() { return CategorySortContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategorySort_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategorySort.component */ "../../../../../vendor/scandipwa/source/src/app/component/CategorySort/CategorySort.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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



/** @namespace Component/CategorySort/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CategorySortContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategorySortContainer, _Extensible);

  function _CategorySortContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CategorySortContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CategorySortContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerProps", function () {
      return {
        selectOptions: _this._prepareOptions()
      };
    });

    return _this;
  }

  _createClass(_CategorySortContainer, [{
    key: "_getLabel",
    value: function _getLabel(option) {
      var id = option.id,
          pureLabel = option.label; // eslint-disable-next-line fp/no-let

      var _pureLabel$split = pureLabel.split(' '),
          _pureLabel$split2 = _slicedToArray(_pureLabel$split, 1),
          label = _pureLabel$split2[0];

      label = label.charAt(0).toUpperCase() + label.slice(1);

      switch (id) {
        case 'name':
          return {
            asc: __('Name: A to Z', label),
            desc: __('Name: Z to A', label)
          };

        case 'position':
          return {
            asc: __('Best match')
          };

        case 'price':
          return {
            asc: __('%s: Low to High', label),
            desc: __('%s: High to Low', label)
          };

        default:
          return {
            asc: __('%s: Ascending', label),
            desc: __('%s: Descending', label)
          };
      }
    }
  }, {
    key: "_prepareOptions",
    value: function _prepareOptions() {
      var _this2 = this;

      var sortFields = this.props.sortFields;

      if (!sortFields) {
        return [];
      }

      var selectOptions = sortFields.reduce(function (acc, option) {
        var id = option.id;

        var label = _this2._getLabel(option);

        var asc = label.asc,
            desc = label.desc;

        if (asc) {
          acc.push({
            id: "ASC ".concat(id),
            name: id,
            value: "ASC ".concat(id),
            label: asc
          });
        }

        if (desc) {
          acc.push({
            id: "DESC ".concat(id),
            name: id,
            value: "DESC ".concat(id),
            label: desc
          });
        }

        return acc;
      }, []);
      return selectOptions;
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _CategorySort_component__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, this.containerProps()))
      );
    }
  }]);

  return _CategorySortContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CategorySortContainer, 'name', {
  value: 'CategorySortContainer'
});

var CategorySortContainer = middleware(_CategorySortContainer, "Component/CategorySort/Container");

_defineProperty(CategorySortContainer, "propTypes", {
  sortFields: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }))])
});

_defineProperty(CategorySortContainer, "defaultProps", {
  sortFields: []
});

/* harmony default export */ __webpack_exports__["default"] = (CategorySortContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategorySort/CategorySort.style.scss":
/*!******************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategorySort/CategorySort.style.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1607691643056
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/CategorySort/index.js":
/*!***************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/CategorySort/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategorySort_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategorySort.container */ "../../../../../vendor/scandipwa/source/src/app/component/CategorySort/CategorySort.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CategorySort_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/ExpandableContentShowMore/ExpandableContentShowMore.component.js":
/*!**********************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/ExpandableContentShowMore/ExpandableContentShowMore.component.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: _ExpandableContentShowMore, ExpandableContentShowMore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ExpandableContentShowMore", function() { return _ExpandableContentShowMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableContentShowMore", function() { return ExpandableContentShowMore; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Common */ "../../../../../vendor/scandipwa/source/src/app/type/Common.js");
/* harmony import */ var _ExpandableContentShowMore_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExpandableContentShowMore.style */ "../../../../../vendor/scandipwa/source/src/app/component/ExpandableContentShowMore/ExpandableContentShowMore.style.scss");
/* harmony import */ var _ExpandableContentShowMore_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ExpandableContentShowMore_style__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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




/** @namespace Component/ExpandableContentShowMore/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _ExpandableContentShowMore =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_ExpandableContentShowMore, _Extensible);

  function _ExpandableContentShowMore() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _ExpandableContentShowMore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_ExpandableContentShowMore)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "ref",
    /*#__PURE__*/
    Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])());

    _defineProperty(_assertThisInitialized(_this), "handleShowAllButtonClick", function () {
      var _window = window,
          pageYOffset = _window.pageYOffset;

      _this.setState(function (_ref) {
        var isOpen = _ref.isOpen;
        return {
          isOpen: !isOpen
        };
      }, function () {
        return window.scrollTo(0, pageYOffset);
      });
    });

    return _this;
  }

  _createClass(_ExpandableContentShowMore, [{
    key: "renderShowAllButton",
    value: function renderShowAllButton() {
      var _this$props = this.props,
          showElemCount = _this$props.showElemCount,
          children = _this$props.children;
      var isOpen = this.state.isOpen;

      if (children.length <= showElemCount) {
        return null;
      }

      var mods = isOpen ? {
        state: 'isOpen'
      } : {};
      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          onClick: this.handleShowAllButtonClick,
          mix: {
            block: 'Button',
            mods: {
              likeLink: true
            }
          },
          block: "ExpandableContentShowMore",
          elem: "ShowAllButton",
          mods: mods
        }, isOpen ? __('Show less') : __('Show more'))
      );
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          showElemCount = _this$props2.showElemCount;
      var isOpen = this.state.isOpen;
      var child = !isOpen ? children.slice(0, showElemCount) : children;
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, child, this.renderShowAllButton())
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          isMobile = _this$props3.isMobile;

      if (isMobile) {
        return children;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "ExpandableContentShowMore",
          ref: this.ref
        }, this.renderContent())
      );
    }
  }]);

  return _ExpandableContentShowMore;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_ExpandableContentShowMore, 'name', {
  value: 'ExpandableContentShowMore'
});

var ExpandableContentShowMore = middleware(_ExpandableContentShowMore, "Component/ExpandableContentShowMore/Component");

_defineProperty(ExpandableContentShowMore, "propTypes", {
  showElemCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  children: _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_2__["ChildrenType"].isRequired,
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
});

_defineProperty(ExpandableContentShowMore, "defaultProps", {
  showElemCount: 3
});

/* harmony default export */ __webpack_exports__["default"] = (ExpandableContentShowMore);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/ExpandableContentShowMore/ExpandableContentShowMore.container.js":
/*!**********************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/ExpandableContentShowMore/ExpandableContentShowMore.container.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ExpandableContentShowMore_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandableContentShowMore.component */ "../../../../../vendor/scandipwa/source/src/app/component/ExpandableContentShowMore/ExpandableContentShowMore.component.js");
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


/** @namespace Component/ExpandableContentShowMore/Container/mapStateToProps */

var mapStateToProps = middleware(function (state) {
  return {
    isMobile: state.ConfigReducer.device.isMobile
  };
}, "Component/ExpandableContentShowMore/Container/mapStateToProps");
/** @namespace Component/ExpandableContentShowMore/Container/mapDispatchToProps */
// eslint-disable-next-line no-unused-vars

var mapDispatchToProps = middleware(function (dispatch) {
  return {};
}, "Component/ExpandableContentShowMore/Container/mapDispatchToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_ExpandableContentShowMore_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/ExpandableContentShowMore/ExpandableContentShowMore.style.scss":
/*!********************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/ExpandableContentShowMore/ExpandableContentShowMore.style.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1607691643279
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/ExpandableContentShowMore/index.js":
/*!****************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/ExpandableContentShowMore/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpandableContentShowMore_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandableContentShowMore.container */ "../../../../../vendor/scandipwa/source/src/app/component/ExpandableContentShowMore/ExpandableContentShowMore.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ExpandableContentShowMore_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/ResetButton/ResetButton.component.js":
/*!******************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/ResetButton/ResetButton.component.js ***!
  \******************************************************************************************************/
/*! exports provided: _ResetButton, ResetButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ResetButton", function() { return _ResetButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetButton", function() { return ResetButton; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Common */ "../../../../../vendor/scandipwa/source/src/app/type/Common.js");
/* harmony import */ var _ResetButton_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResetButton.style */ "../../../../../vendor/scandipwa/source/src/app/component/ResetButton/ResetButton.style.scss");
/* harmony import */ var _ResetButton_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ResetButton_style__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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




/** @namespace Component/ResetButton/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _ResetButton =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_ResetButton, _Extensible);

  function _ResetButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _ResetButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_ResetButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          resetFilters = _this$props.resetFilters;
      onClick();
      resetFilters();
    });

    return _this;
  }

  _createClass(_ResetButton, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          mix = _this$props2.mix,
          isContentFiltered = _this$props2.isContentFiltered;

      if (!isContentFiltered) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "ResetButton",
          mix: mix
        },
        /*#__PURE__*/
        _checkBEM(React, "button", {
          onClick: this.onClick,
          block: "ResetButton",
          elem: "Button",
          mix: {
            block: 'Button',
            mods: {
              isHollow: true
            }
          }
        }, __('Reset')))
      );
    }
  }]);

  return _ResetButton;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_ResetButton, 'name', {
  value: 'ResetButton'
});

var ResetButton = middleware(_ResetButton, "Component/ResetButton/Component");

_defineProperty(ResetButton, "propTypes", {
  mix: _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_2__["MixType"],
  resetFilters: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isContentFiltered: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
});

_defineProperty(ResetButton, "defaultProps", {
  mix: {}
});

/* harmony default export */ __webpack_exports__["default"] = (ResetButton);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/ResetButton/ResetButton.container.js":
/*!******************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/ResetButton/ResetButton.container.js ***!
  \******************************************************************************************************/
/*! exports provided: _ResetButtonContainer, ResetButtonContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ResetButtonContainer", function() { return _ResetButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetButtonContainer", function() { return ResetButtonContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Common */ "../../../../../vendor/scandipwa/source/src/app/type/Common.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Url */ "../../../../../vendor/scandipwa/source/src/app/util/Url/index.js");
/* harmony import */ var _ResetButton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResetButton.component */ "../../../../../vendor/scandipwa/source/src/app/component/ResetButton/ResetButton.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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





/** @namespace Component/ResetButton/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _ResetButtonContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_ResetButtonContainer, _Extensible);

  function _ResetButtonContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _ResetButtonContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_ResetButtonContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerProps", function () {
      return {
        isContentFiltered: _this.isContentFiltered()
      };
    });

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", function () {
      return {
        resetFilters: _this.resetFilters
      };
    });

    _defineProperty(_assertThisInitialized(_this), "resetFilters", function () {
      var _this$props = _this.props,
          location = _this$props.location,
          history = _this$props.history;
      Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Url__WEBPACK_IMPORTED_MODULE_3__["setQueryParams"])({
        customFilters: '',
        priceMin: '',
        priceMax: '',
        page: ''
      }, location, history);
    });

    return _this;
  }

  _createClass(_ResetButtonContainer, [{
    key: "isContentFiltered",
    value: function isContentFiltered() {
      var _this$urlStringToObje = this.urlStringToObject(),
          customFilters = _this$urlStringToObje.customFilters,
          priceMin = _this$urlStringToObje.priceMin,
          priceMax = _this$urlStringToObje.priceMax;

      return !!(customFilters || priceMin || priceMax);
    }
  }, {
    key: "urlStringToObject",
    value: function urlStringToObject() {
      var _this$props$location$ = this.props.location.search,
          search = _this$props$location$ === void 0 ? '' : _this$props$location$;
      return search.substr(1).split('&').reduce(function (acc, part) {
        var _part$split = part.split('='),
            _part$split2 = _slicedToArray(_part$split, 2),
            key = _part$split2[0],
            value = _part$split2[1];

        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, key, value));
      }, {});
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _ResetButton_component__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.props, this.containerProps(), this.containerFunctions()))
      );
    }
  }]);

  return _ResetButtonContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
Object.defineProperty(_ResetButtonContainer, 'name', {
  value: 'ResetButtonContainer'
});

var ResetButtonContainer = middleware(_ResetButtonContainer, "Component/ResetButton/Container");

_defineProperty(ResetButtonContainer, "propTypes", {
  history: _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_2__["HistoryType"].isRequired,
  location: _app_design_frontend_Scandiweb_pwa_src_app_type_Common__WEBPACK_IMPORTED_MODULE_2__["LocationType"].isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ResetButtonContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/ResetButton/ResetButton.style.scss":
/*!****************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/ResetButton/ResetButton.style.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1607691643253
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/ResetButton/index.js":
/*!**************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/ResetButton/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetButton_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetButton.container */ "../../../../../vendor/scandipwa/source/src/app/component/ResetButton/ResetButton.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ResetButton_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/route/CategoryPage/CategoryPage.component.js":
/*!****************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/route/CategoryPage/CategoryPage.component.js ***!
  \****************************************************************************************************/
/*! exports provided: _CategoryPage, CategoryPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategoryPage", function() { return _CategoryPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategoryDetails */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryDetails/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryFilterOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategoryFilterOverlay */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryFilterOverlay_CategoryFilterOverlay_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.config */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryItemsCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategoryItemsCount */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryItemsCount/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryProductList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategoryProductList */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryProductList/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategorySort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategorySort */ "../../../../../vendor/scandipwa/source/src/app/component/CategorySort/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_ContentWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/ContentWrapper */ "../../../../../vendor/scandipwa/source/src/app/component/ContentWrapper/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Html */ "../../../../../vendor/scandipwa/source/src/app/component/Html/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Category__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Category */ "../../../../../vendor/scandipwa/source/src/app/type/Category.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Device__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Device */ "../../../../../vendor/scandipwa/source/src/app/type/Device.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_ProductList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/ProductList */ "../../../../../vendor/scandipwa/source/src/app/type/ProductList.js");
/* harmony import */ var _CategoryPage_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CategoryPage.style */ "../../../../../vendor/scandipwa/source/src/app/route/CategoryPage/CategoryPage.style.scss");
/* harmony import */ var _CategoryPage_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_CategoryPage_style__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
















/** @namespace Route/CategoryPage/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CategoryPage =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategoryPage, _Extensible);

  function _CategoryPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CategoryPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CategoryPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onFilterButtonClick", _this.onFilterButtonClick.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(_CategoryPage, [{
    key: "onFilterButtonClick",
    value: function onFilterButtonClick() {
      var toggleOverlayByKey = this.props.toggleOverlayByKey;
      toggleOverlayByKey(_app_design_frontend_Scandiweb_pwa_src_app_component_CategoryFilterOverlay_CategoryFilterOverlay_config__WEBPACK_IMPORTED_MODULE_4__["CATEGORY_FILTER_OVERLAY_ID"]);
    }
  }, {
    key: "renderCategoryDetails",
    value: function renderCategoryDetails() {
      var category = this.props.category;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
          category: category
        })
      );
    }
  }, {
    key: "renderCategoryType",
    value: function renderCategoryType() {
      var category = this.props.category;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
          category: category
        })
      );
    }
  }, {
    key: "renderFilterButton",
    value: function renderFilterButton() {
      var _this$props = this.props,
          isContentFiltered = _this$props.isContentFiltered,
          totalPages = _this$props.totalPages;

      if (!isContentFiltered && totalPages === 0) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "CategoryPage",
          elem: "Filter",
          onClick: this.onFilterButtonClick
        }, __('Filter'))
      );
    }
  }, {
    key: "renderFilterOverlay",
    value: function renderFilterOverlay() {
      var _this$props2 = this.props,
          filters = _this$props2.filters,
          selectedFilters = _this$props2.selectedFilters,
          isMatchingInfoFilter = _this$props2.isMatchingInfoFilter;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryFilterOverlay__WEBPACK_IMPORTED_MODULE_3__["default"], {
          availableFilters: filters,
          customFiltersValues: selectedFilters,
          isMatchingInfoFilter: isMatchingInfoFilter
        })
      );
    }
  }, {
    key: "renderCategorySort",
    value: function renderCategorySort() {
      var _this$props3 = this.props,
          sortFields = _this$props3.sortFields,
          selectedSort = _this$props3.selectedSort,
          onSortChange = _this$props3.onSortChange,
          isMatchingInfoFilter = _this$props3.isMatchingInfoFilter;
      var _sortFields$options = sortFields.options,
          options = _sortFields$options === void 0 ? {} : _sortFields$options;
      var updatedSortFields = Object.values(options).map(function (_ref) {
        var id = _ref.value,
            label = _ref.label;
        return {
          id: id,
          label: label
        };
      });
      var sortDirection = selectedSort.sortDirection,
          sortKey = selectedSort.sortKey;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CategorySort__WEBPACK_IMPORTED_MODULE_7__["default"], {
          isMatchingInfoFilter: isMatchingInfoFilter,
          onSortChange: onSortChange,
          sortFields: updatedSortFields,
          sortKey: sortKey,
          sortDirection: sortDirection
        })
      );
    }
  }, {
    key: "renderItemsCount",
    value: function renderItemsCount() {
      var isVisibleOnMobile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props4 = this.props,
          isMatchingListFilter = _this$props4.isMatchingListFilter,
          device = _this$props4.device;

      if (isVisibleOnMobile && !device.isMobile) {
        return null;
      }

      if (!isVisibleOnMobile && device.isMobile) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryItemsCount__WEBPACK_IMPORTED_MODULE_5__["default"], {
          isMatchingListFilter: isMatchingListFilter
        })
      );
    }
  }, {
    key: "renderCategoryProductList",
    value: function renderCategoryProductList() {
      var _this$props5 = this.props,
          filter = _this$props5.filter,
          search = _this$props5.search,
          selectedSort = _this$props5.selectedSort,
          selectedFilters = _this$props5.selectedFilters,
          isMatchingListFilter = _this$props5.isMatchingListFilter,
          isMatchingInfoFilter = _this$props5.isMatchingInfoFilter;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CategoryPage",
          elem: "ProductListWrapper"
        }, this.renderItemsCount(true),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryProductList__WEBPACK_IMPORTED_MODULE_6__["default"], {
          filter: filter,
          search: search,
          sort: selectedSort,
          selectedFilters: selectedFilters,
          isMatchingListFilter: isMatchingListFilter,
          isMatchingInfoFilter: isMatchingInfoFilter
        }))
      );
    }
  }, {
    key: "renderCmsBlock",
    value: function renderCmsBlock() {
      var cms_block = this.props.category.cms_block;

      if (!cms_block) {
        return null;
      }

      var content = cms_block.content,
          disabled = cms_block.disabled;

      if (disabled) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CategoryPage",
          elem: "CMS"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Html__WEBPACK_IMPORTED_MODULE_9__["default"], {
          content: content
        }))
      );
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderFilterOverlay(), this.renderCategoryDetails(), this.renderCmsBlock(),
        /*#__PURE__*/
        _checkBEM(React, "aside", {
          block: "CategoryPage",
          elem: "Miscellaneous"
        }, this.renderItemsCount(), this.renderCategorySort(), this.renderFilterButton()), this.renderCategoryProductList())
      );
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "main", {
          block: "CategoryPage"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_ContentWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
          wrapperMix: {
            block: 'CategoryPage',
            elem: 'Wrapper'
          },
          label: "Category page"
        }, this.renderContent()))
      );
    }
  }]);

  return _CategoryPage;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CategoryPage, 'name', {
  value: 'CategoryPage'
});

var CategoryPage = middleware(_CategoryPage, "Route/CategoryPage/Component");

_defineProperty(CategoryPage, "propTypes", {
  category: _app_design_frontend_Scandiweb_pwa_src_app_type_Category__WEBPACK_IMPORTED_MODULE_10__["CategoryTreeType"].isRequired,
  filters: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape).isRequired,
  sortFields: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    options: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array
  }).isRequired,
  selectedSort: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['ASC', 'DESC']),
    sortKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }).isRequired,
  onSortChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  toggleOverlayByKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectedFilters: _app_design_frontend_Scandiweb_pwa_src_app_type_ProductList__WEBPACK_IMPORTED_MODULE_12__["FilterType"].isRequired,
  filter: _app_design_frontend_Scandiweb_pwa_src_app_type_ProductList__WEBPACK_IMPORTED_MODULE_12__["FilterInputType"].isRequired,
  search: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  isContentFiltered: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isMatchingListFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isMatchingInfoFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  totalPages: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  device: _app_design_frontend_Scandiweb_pwa_src_app_type_Device__WEBPACK_IMPORTED_MODULE_11__["DeviceType"].isRequired
});

_defineProperty(CategoryPage, "defaultProps", {
  isContentFiltered: true,
  isMatchingListFilter: false,
  isMatchingInfoFilter: false,
  totalPages: 1,
  search: ''
});

/* harmony default export */ __webpack_exports__["default"] = (CategoryPage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/route/CategoryPage/CategoryPage.config.js":
false,

/***/ "../../../../../vendor/scandipwa/source/src/app/route/CategoryPage/CategoryPage.style.scss":
/*!**************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/route/CategoryPage/CategoryPage.style.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1607675848104
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ })

})
//# sourceMappingURL=category.e2272b958a4b47fddea4.hot-update.js.map