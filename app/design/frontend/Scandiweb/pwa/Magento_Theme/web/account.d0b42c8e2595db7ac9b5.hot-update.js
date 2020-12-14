webpackHotUpdate("account",{

/***/ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountCustomerTable/MyAccountCustomerTable.component.js":
/*!****************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/MyAccountCustomerTable/MyAccountCustomerTable.component.js ***!
  \****************************************************************************************************************************/
/*! exports provided: _MyAccountCustomerTable, MyAccountCustomerTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MyAccountCustomerTable", function() { return _MyAccountCustomerTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountCustomerTable", function() { return MyAccountCustomerTable; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_KeyValueTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/KeyValueTable */ "../../../../../vendor/scandipwa/source/src/app/component/KeyValueTable/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
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



/** @namespace Component/MyAccountCustomerTable/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _MyAccountCustomerTable =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_MyAccountCustomerTable, _Extensible);

  function _MyAccountCustomerTable() {
    _classCallCheck(this, _MyAccountCustomerTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(_MyAccountCustomerTable).apply(this, arguments));
  }

  _createClass(_MyAccountCustomerTable, [{
    key: "renderActions",
    value: function renderActions() {
      var _this$props = this.props,
          showChangePasswordPopup = _this$props.showChangePasswordPopup,
          showEditPopup = _this$props.showEditPopup;
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null,
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "Button",
          onClick: showEditPopup
        }, __('Edit details')),
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "Button",
          mods: {
            isHollow: true
          },
          onClick: showChangePasswordPopup
        }, __('Change password')))
      );
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "MyAccountCustomerTable"
        }, this.renderTable(), this.renderActions())
      );
    }
  }, {
    key: "dataPairArray",
    get: function get() {
      var customer = this.props.customer;
      console.log(customer);
      return [{
        key: 'firstname',
        label: __('First name'),
        source: customer
      }, {
        key: 'lastname',
        label: __('Last name'),
        source: customer
      }, {
        key: 'email',
        label: __('Email'),
        source: customer
      }, {
        key: 'personal_code',
        label: __('personal_code'),
        source: customer
      }];
    }
  }]);

  return _MyAccountCustomerTable;
}(Extensible(_app_design_frontend_Scandiweb_pwa_src_app_component_KeyValueTable__WEBPACK_IMPORTED_MODULE_1__["default"]));
Object.defineProperty(_MyAccountCustomerTable, 'name', {
  value: 'MyAccountCustomerTable'
});

var MyAccountCustomerTable = middleware(_MyAccountCustomerTable, "Component/MyAccountCustomerTable/Component");

_defineProperty(MyAccountCustomerTable, "propTypes", {
  customer: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_2__["customerType"].isRequired,
  showEditPopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  showChangePasswordPopup: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (MyAccountCustomerTable);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

})
//# sourceMappingURL=account.d0b42c8e2595db7ac9b5.hot-update.js.map