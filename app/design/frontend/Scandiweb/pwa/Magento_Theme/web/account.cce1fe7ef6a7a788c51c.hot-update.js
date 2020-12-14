webpackHotUpdate("account",{

/***/ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountCreateAccount/MyAccountCreateAccount.container.js":
/*!****************************************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/MyAccountCreateAccount/MyAccountCreateAccount.container.js ***!
  \****************************************************************************************************************************/
/*! exports provided: MyAccountDispatcher, mapStateToProps, mapDispatchToProps, _MyAccountCreateAccountContainer, MyAccountCreateAccountContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, __, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDispatcher", function() { return MyAccountDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MyAccountCreateAccountContainer", function() { return _MyAccountCreateAccountContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountCreateAccountContainer", function() { return MyAccountCreateAccountContainer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MyAccountOverlay/MyAccountOverlay.config */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountOverlay/MyAccountOverlay.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Notification/Notification.action */ "../../../../../vendor/scandipwa/source/src/app/store/Notification/Notification.action.js");
/* harmony import */ var _MyAccountCreateAccount_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyAccountCreateAccount.component */ "../../../../../vendor/scandipwa/source/src/app/component/MyAccountCreateAccount/MyAccountCreateAccount.component.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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






var MyAccountDispatcher = __webpack_require__.e(/*! import() | dispatchers */ "dispatchers").then(__webpack_require__.bind(null, /*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/MyAccount/MyAccount.dispatcher */ "../../../../../vendor/scandipwa/source/src/app/store/MyAccount/MyAccount.dispatcher.js"));
/** @namespace Component/MyAccountCreateAccount/Container/mapStateToProps */
// eslint-disable-next-line no-unused-vars

var mapStateToProps = middleware(function (state) {
  return {
    isLoading: state.MyAccountReducer.isLoading
  };
}, "Component/MyAccountCreateAccount/Container/mapStateToProps");
/** @namespace Component/MyAccountCreateAccount/Container/mapDispatchToProps */

var mapDispatchToProps = middleware(function (dispatch) {
  return {
    createAccount: function createAccount(options) {
      return MyAccountDispatcher.then(function (_ref) {
        var dispatcher = _ref.default;
        return dispatcher.createAccount(options, dispatch);
      });
    },
    showNotification: function showNotification(type, message) {
      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_5__["showNotification"])(type, message));
    }
  };
}, "Component/MyAccountCreateAccount/Container/mapDispatchToProps");
/** @namespace Component/MyAccountCreateAccount/Container */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _MyAccountCreateAccountContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_MyAccountCreateAccountContainer, _Extensible);

  function _MyAccountCreateAccountContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _MyAccountCreateAccountContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_MyAccountCreateAccountContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      onCreateAccountSuccess: _this.onCreateAccountSuccess.bind(_assertThisInitialized(_this)),
      onCreateAccountAttempt: _this.onCreateAccountAttempt.bind(_assertThisInitialized(_this))
    });

    return _this;
  }

  _createClass(_MyAccountCreateAccountContainer, [{
    key: "onCreateAccountAttempt",
    value: function onCreateAccountAttempt(_, invalidFields) {
      var _this$props = this.props,
          showNotification = _this$props.showNotification,
          setLoadingState = _this$props.setLoadingState;

      if (invalidFields) {
        showNotification('info', __('Incorrect data! Please resolve all field validation errors.'));
      }

      setLoadingState(!invalidFields);
    }
  }, {
    key: "onCreateAccountSuccess",
    value: function () {
      var _onCreateAccountSuccess = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(fields) {
        var _this$props2, createAccount, onSignIn, setSignInState, setLoadingState, isLoading, password, email, firstname, lastname, personal_code, is_subscribed, customerData, code;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props2 = this.props, createAccount = _this$props2.createAccount, onSignIn = _this$props2.onSignIn, setSignInState = _this$props2.setSignInState, setLoadingState = _this$props2.setLoadingState, isLoading = _this$props2.isLoading;
                password = fields.password, email = fields.email, firstname = fields.firstname, lastname = fields.lastname, personal_code = fields.personal_code, is_subscribed = fields.is_subscribed;
                customerData = {
                  customer: {
                    firstname: firstname,
                    lastname: lastname,
                    personal_code: personal_code,
                    email: email,
                    is_subscribed: is_subscribed
                  },
                  password: password
                };

                if (!isLoading) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                try {
                  code = createAccount(customerData); // if user needs confirmation

                  if (code === 2) {
                    setSignInState(_app_design_frontend_Scandiweb_pwa_src_app_component_MyAccountOverlay_MyAccountOverlay_config__WEBPACK_IMPORTED_MODULE_4__["STATE_CONFIRM_EMAIL"]);
                  } else {
                    onSignIn();
                  }
                } finally {
                  setLoadingState(false);
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onCreateAccountSuccess(_x) {
        return _onCreateAccountSuccess.apply(this, arguments);
      }

      return onCreateAccountSuccess;
    }()
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _MyAccountCreateAccount_component__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, this.props, this.containerFunctions))
      );
    }
  }]);

  return _MyAccountCreateAccountContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]));
Object.defineProperty(_MyAccountCreateAccountContainer, 'name', {
  value: 'MyAccountCreateAccountContainer'
});

var MyAccountCreateAccountContainer = middleware(_MyAccountCreateAccountContainer, "Component/MyAccountCreateAccount/Container");

_defineProperty(MyAccountCreateAccountContainer, "propTypes", {
  createAccount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSignIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setSignInState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setLoadingState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(MyAccountCreateAccountContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ })

})
//# sourceMappingURL=account.cce1fe7ef6a7a788c51c.hot-update.js.map