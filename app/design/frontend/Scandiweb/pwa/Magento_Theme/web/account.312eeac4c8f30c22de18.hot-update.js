webpackHotUpdate("account",{

/***/ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountCreateAccount/MyAccountCreateAccount.component.js":
/*!****************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/MyAccountCreateAccount/MyAccountCreateAccount.component.js ***!
  \****************************************************************************************************************************/
/*! exports provided: _MyAccountCreateAccount, MyAccountCreateAccount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MyAccountCreateAccount", function() { return _MyAccountCreateAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountCreateAccount", function() { return MyAccountCreateAccount; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Field */ "../../../../../vendor/scandipwa/source/src/app/component/Field/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Form */ "../../../../../vendor/scandipwa/source/src/app/component/Form/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Account */ "../../../../../vendor/scandipwa/source/src/app/type/Account.js");
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





/** @namespace Component/MyAccountCreateAccount/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _MyAccountCreateAccount =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_MyAccountCreateAccount, _Extensible);

  function _MyAccountCreateAccount() {
    _classCallCheck(this, _MyAccountCreateAccount);

    return _possibleConstructorReturn(this, _getPrototypeOf(_MyAccountCreateAccount).apply(this, arguments));
  }

  _createClass(_MyAccountCreateAccount, [{
    key: "renderCreateAccountPersonalInfoFields",
    value: function renderCreateAccountPersonalInfoFields() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "fieldset", {
          block: "MyAccountOverlay",
          elem: "Legend"
        },
        /*#__PURE__*/
        _checkBEM(React, "legend", null, __('Personal Information')),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "text",
          label: __('First Name'),
          id: "firstname",
          name: "firstname",
          autocomplete: "given-name",
          validation: ['notEmpty']
        }),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "text",
          label: __('Last Name'),
          id: "lastname",
          name: "lastname",
          autocomplete: "family-name",
          validation: ['notEmpty']
        }),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "text",
          label: __('Personal Code'),
          id: "personal_code",
          name: "personal_code",
          autocomplete: "personal_code",
          validation: ['notEmpty']
        }),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "checkbox",
          value: "is_subscribed",
          label: __('Subscribe to newsletter'),
          id: "is_subscribed",
          mix: {
            block: 'MyAccountOverlay',
            elem: 'Checkbox'
          },
          name: "is_subscribed"
        }))
      );
    }
  }, {
    key: "renderCreateAccountSignUpInfoFields",
    value: function renderCreateAccountSignUpInfoFields() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "fieldset", {
          block: "MyAccountOverlay",
          elem: "Legend"
        },
        /*#__PURE__*/
        _checkBEM(React, "legend", null, __('Sign-Up Information')),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "text",
          label: __('Email'),
          id: "email",
          name: "email",
          autocomplete: "email",
          validation: ['notEmpty', 'email']
        }),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "password",
          label: __('Password'),
          id: "password",
          name: "password",
          autocomplete: "new-password",
          validation: ['notEmpty', 'password']
        }),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "password",
          label: __('Confirm password'),
          id: "confirm_password",
          name: "confirm_password",
          autocomplete: "new-password",
          validation: ['notEmpty', 'password', 'password_match']
        }))
      );
    }
  }, {
    key: "renderSubmitButton",
    value: function renderSubmitButton() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "MyAccountOverlay",
          elem: "Buttons"
        },
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "Button",
          type: "submit"
        }, __('Sign up')))
      );
    }
  }, {
    key: "renderCreateAccountForm",
    value: function renderCreateAccountForm() {
      var _this$props = this.props,
          onCreateAccountAttempt = _this$props.onCreateAccountAttempt,
          onCreateAccountSuccess = _this$props.onCreateAccountSuccess;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: "create-account",
          onSubmit: onCreateAccountAttempt,
          onSubmitSuccess: onCreateAccountSuccess,
          onSubmitError: onCreateAccountAttempt
        }, this.renderCreateAccountPersonalInfoFields(), this.renderCreateAccountSignUpInfoFields(), this.renderSubmitButton())
      );
    }
  }, {
    key: "renderAdditionalField",
    value: function renderAdditionalField() {
      var _this$props2 = this.props,
          state = _this$props2.state,
          handleSignIn = _this$props2.handleSignIn;
      return (
        /*#__PURE__*/
        _checkBEM(React, "article", {
          block: "MyAccountOverlay",
          elem: "Additional",
          mods: {
            state: state
          }
        },
        /*#__PURE__*/
        _checkBEM(React, "section", null,
        /*#__PURE__*/
        _checkBEM(React, "h4", null, __('Already have an account?')),
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "Button",
          mods: {
            likeLink: true
          },
          onClick: handleSignIn
        }, __('Sign in here'))))
      );
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderCreateAccountForm(), this.renderAdditionalField())
      );
    }
  }]);

  return _MyAccountCreateAccount;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_MyAccountCreateAccount, 'name', {
  value: 'MyAccountCreateAccount'
});

var MyAccountCreateAccount = middleware(_MyAccountCreateAccount, "Component/MyAccountCreateAccount/Component");

_defineProperty(MyAccountCreateAccount, "propTypes", {
  state: _app_design_frontend_Scandiweb_pwa_src_app_type_Account__WEBPACK_IMPORTED_MODULE_4__["signInStateType"].isRequired,
  onCreateAccountAttempt: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onCreateAccountSuccess: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  handleSignIn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (MyAccountCreateAccount);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

})
//# sourceMappingURL=account.312eeac4c8f30c22de18.hot-update.js.map