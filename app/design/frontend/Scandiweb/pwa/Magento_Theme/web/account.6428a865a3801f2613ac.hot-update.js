webpackHotUpdate("account",{

/***/ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountCustomerTable/MyAccountCustomerTable.container.js":
/*!****************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/MyAccountCustomerTable/MyAccountCustomerTable.container.js ***!
  \****************************************************************************************************************************/
/*! exports provided: mapDispatchToProps, _MyAccountCustomerTableContainer, MyAccountCustomerTableContainer, mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MyAccountCustomerTableContainer", function() { return _MyAccountCustomerTableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountCustomerTableContainer", function() { return MyAccountCustomerTableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountCustomerPopup_MyAccountCustomerPopup_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountCustomerPopup/MyAccountCustomerPopup.config */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountCustomerPopup/MyAccountCustomerPopup.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Popup/Popup.action */ "../../../../../vendor/scandipwa/source/src/app/store/Popup/Popup.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
/* harmony import */ var _MyAccountCustomerTable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyAccountCustomerTable.component */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountCustomerTable/MyAccountCustomerTable.component.js");
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







/** @namespace Component/MyAccountCustomerTable/Container/mapDispatchToProps */

var mapDispatchToProps = middleware(function (dispatch) {
  return {
    showPopup: function showPopup(payload) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Popup_Popup_action__WEBPACK_IMPORTED_MODULE_4__["showPopup"])(_app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountCustomerPopup_MyAccountCustomerPopup_config__WEBPACK_IMPORTED_MODULE_3__["CUSTOMER_POPUP_ID"], payload));
    }
  };
}, "Component/MyAccountCustomerTable/Container/mapDispatchToProps");
/** @namespace Component/MyAccountCustomerTable/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _MyAccountCustomerTableContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_MyAccountCustomerTableContainer, _Extensible);

  function _MyAccountCustomerTableContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _MyAccountCustomerTableContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_MyAccountCustomerTableContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      showEditPopup: _this.showEditPopup.bind(_assertThisInitialized(_this)),
      showChangePasswordPopup: _this.showChangePasswordPopup.bind(_assertThisInitialized(_this))
    });

    return _this;
  }

  _createClass(_MyAccountCustomerTableContainer, [{
    key: "showEditPopup",
    value: function showEditPopup() {
      var _this$props = this.props,
          showPopup = _this$props.showPopup,
          customer = _this$props.customer;
      showPopup({
        action: _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountCustomerPopup_MyAccountCustomerPopup_config__WEBPACK_IMPORTED_MODULE_3__["EDIT_CUSTOMER"],
        customer: customer,
        title: __('Edit customer details')
      });
    }
  }, {
    key: "showChangePasswordPopup",
    value: function showChangePasswordPopup() {
      var _this$props2 = this.props,
          showPopup = _this$props2.showPopup,
          customer = _this$props2.customer;
      showPopup({
        action: _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountCustomerPopup_MyAccountCustomerPopup_config__WEBPACK_IMPORTED_MODULE_3__["CHANGE_PASSWORD"],
        customer: customer,
        title: __('Change password')
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _MyAccountCustomerTable_component__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, this.props, this.containerFunctions))
      );
    }
  }]);

  return _MyAccountCustomerTableContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/** @namespace Component/MyAccountCustomerTable/Container/mapStateToProps */
// eslint-disable-next-line no-unused-vars

Object.defineProperty(_MyAccountCustomerTableContainer, 'name', {
  value: 'MyAccountCustomerTableContainer'
});

var MyAccountCustomerTableContainer = middleware(_MyAccountCustomerTableContainer, "Component/MyAccountCustomerTable/Container");

_defineProperty(MyAccountCustomerTableContainer, "propTypes", {
  showPopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  customer: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_5__["customerType"].isRequired
});

var mapStateToProps = middleware(function (state) {
  return {};
}, "Component/MyAccountCustomerTable/Container/mapStateToProps");
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountCustomerTableContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ })

})
//# sourceMappingURL=account.6428a865a3801f2613ac.hot-update.js.map