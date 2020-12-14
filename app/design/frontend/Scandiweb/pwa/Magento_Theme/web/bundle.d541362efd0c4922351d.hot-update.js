webpackHotUpdate("bundle",{

/***/ "../../../../../vendor/scandipwa/source/src/app/query/MyAccount.query.js":
/*!********************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/query/MyAccount.query.js ***!
  \********************************************************************************/
/*! exports provided: _MyAccountQuery, MyAccountQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MyAccountQuery", function() { return _MyAccountQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountQuery", function() { return MyAccountQuery; });
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Cart_Cart_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Cart/Cart.dispatcher */ "../../../../../vendor/scandipwa/source/src/app/store/Cart/Cart.dispatcher.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/BrowserDatabase */ "../../../../../vendor/scandipwa/source/src/app/util/BrowserDatabase/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Query */ "../../../../../vendor/scandipwa/source/src/app/util/Query/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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



/**
 * MyAccount Mutations
 * @class MyAccount
 * @namespace Query/MyAccount
 */

var _MyAccountQuery =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_MyAccountQuery, _Extensible);

  function _MyAccountQuery() {
    _classCallCheck(this, _MyAccountQuery);

    return _possibleConstructorReturn(this, _getPrototypeOf(_MyAccountQuery).apply(this, arguments));
  }

  _createClass(_MyAccountQuery, [{
    key: "getResetPasswordMutation",

    /**
     * Get ResetPassword mutation
     * @param {{token: String, password: String, password_confirmation: String}} options A object containing different aspects of query, each item can be omitted
     * @return {Field}
     * @memberof MyAccount
     */
    value: function getResetPasswordMutation(options) {
      var token = options.token,
          password = options.password,
          password_confirmation = options.password_confirmation;
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('resetPassword').addArgument('token', 'String!', token).addArgument('password', 'String!', password).addArgument('password_confirmation', 'String!', password_confirmation).addField('status');
    }
    /**
     * Get SignIn mutation
     * @param {{email: String, password: String}} options A object containing different aspects of query, each item can be omitted
     * @return {Field}
     * @memberof MyAccount
     */

  }, {
    key: "getSignInMutation",
    value: function getSignInMutation(options) {
      var email = options.email,
          password = options.password;
      var guestQuoteId = _app_design_frontend_Scandiweb_pwa_src_app_util_BrowserDatabase__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(_app_design_frontend_Scandiweb_pwa_src_app_store_Cart_Cart_dispatcher__WEBPACK_IMPORTED_MODULE_0__["GUEST_QUOTE_ID"]);
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('generateCustomerToken').addArgument('email', 'String!', email).addArgument('password', 'String!', password).addArgument('guest_quote_id', 'String', guestQuoteId).addField('token');
    }
  }, {
    key: "getUpdateInformationMutation",
    value: function getUpdateInformationMutation(options) {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('updateCustomer').addArgument('input', 'CustomerInput!', options).addField(this._getCustomerField());
    }
  }, {
    key: "getChangeCustomerPasswordMutation",
    value: function getChangeCustomerPasswordMutation(options) {
      var currentPassword = options.currentPassword,
          newPassword = options.newPassword;
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('changeCustomerPassword').addArgument('currentPassword', 'String!', currentPassword).addArgument('newPassword', 'String!', newPassword).addField('id').addField('email');
    }
  }, {
    key: "getCreateAddressMutation",
    value: function getCreateAddressMutation(options) {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('createCustomerAddress').addArgument('input', 'CustomerAddressInput!', options).addFieldList(this._getAddressFields());
    }
  }, {
    key: "getDeleteAddressMutation",
    value: function getDeleteAddressMutation(id) {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('deleteCustomerAddress').addArgument('id', 'Int!', id);
    }
  }, {
    key: "getUpdateAddressMutation",
    value: function getUpdateAddressMutation(id, options) {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('updateCustomerAddress').addArgument('id', 'Int!', id).addArgument('input', 'CustomerAddressInput!', options).addFieldList(this._getAddressFields());
    }
  }, {
    key: "getCreateAccountMutation",
    value: function getCreateAccountMutation(options) {
      var customer = options.customer,
          password = options.password;
      console.log(customer);
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('createCustomer').addArgument('input', 'CustomerInput!', _objectSpread2(_objectSpread2({}, customer), {}, {
        password: password
      })).addField(this._getCustomerField());
    }
  }, {
    key: "getConfirmAccountMutation",
    value: function getConfirmAccountMutation(options) {
      var key = options.key,
          email = options.email,
          password = options.password;
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('confirmCustomerEmail').addArgument('key', 'String!', key).addArgument('email', 'String!', email).addArgument('password', 'String!', password).addFieldList(this._getConfirmAccountFields());
    }
  }, {
    key: "getCustomerQuery",
    value: function getCustomerQuery() {
      return this._getCustomerField();
    }
  }, {
    key: "_getConfirmAccountFields",
    value: function _getConfirmAccountFields() {
      return ['status', 'token', this._getCustomerField()];
    }
  }, {
    key: "_getCustomerField",
    value: function _getCustomerField() {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('customer').addFieldList(this._getCustomerFields());
    }
  }, {
    key: "_getCustomerFields",
    value: function _getCustomerFields() {
      return ['created_at', 'confirmation_required', 'group_id', 'prefix', 'firstname', 'middlename', 'personal_code', 'lastname', 'suffix', 'email', 'default_billing', 'default_shipping', 'dob', 'taxvat', 'id', 'is_subscribed', this._getAddressesField()];
    }
  }, {
    key: "_getAddressesField",
    value: function _getAddressesField() {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('addresses').addFieldList(this._getAddressFields());
    }
  }, {
    key: "_getRegionField",
    value: function _getRegionField() {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('region').addFieldList(this._getRegionFields());
    }
  }, {
    key: "_getRegionFields",
    value: function _getRegionFields() {
      return ['region_code', 'region', 'region_id'];
    }
  }, {
    key: "_getAddressFields",
    value: function _getAddressFields() {
      return ['id', 'customer_id', 'country_id', 'street', 'telephone', 'postcode', 'city', 'firstname', 'lastname', 'middlename', 'prefix', 'suffix', 'default_shipping', 'default_billing', this._getRegionField()];
    }
    /**
     * Get ForgotPassword mutation
     * @param {{email: String}} options
     * @returns {Field}
     * @memberof MyAccount
     */

  }, {
    key: "getForgotPasswordMutation",
    value: function getForgotPasswordMutation(options) {
      var email = options.email;
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_2__["Field"]('forgotPassword').addArgument('email', 'String!', email).addField('status');
    }
  }]);

  return _MyAccountQuery;
}(Extensible());
Object.defineProperty(_MyAccountQuery, 'name', {
  value: 'MyAccountQuery'
});

var MyAccountQuery = middleware(_MyAccountQuery, "Query/MyAccount");
/* harmony default export */ __webpack_exports__["default"] = (new MyAccountQuery());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

})
//# sourceMappingURL=bundle.d541362efd0c4922351d.hot-update.js.map