webpackHotUpdate("dispatchers",{

/***/ "../../../../../vendor/scandipwa/source/src/app/store/ProductList/ProductList.dispatcher.js":
/*!***************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/store/ProductList/ProductList.dispatcher.js ***!
  \***************************************************************************************************/
/*! exports provided: _ProductListDispatcher, ProductListDispatcher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ProductListDispatcher", function() { return _ProductListDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListDispatcher", function() { return ProductListDispatcher; });
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_query_ProductList_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/query/ProductList.query */ "../../../../../vendor/scandipwa/source/src/app/query/ProductList.query.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_NoMatch_NoMatch_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/NoMatch/NoMatch.action */ "../../../../../vendor/scandipwa/source/src/app/store/NoMatch/NoMatch.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/Notification/Notification.action */ "../../../../../vendor/scandipwa/source/src/app/store/Notification/Notification.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store_ProductList_ProductList_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store/ProductList/ProductList.action */ "../../../../../vendor/scandipwa/source/src/app/store/ProductList/ProductList.action.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Request */ "../../../../../vendor/scandipwa/source/src/app/util/Request/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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
 * Product List Dispatcher
 * @class ProductListDispatcher
 * @extends QueryDispatcher
 * @namespace Store/ProductList/Dispatcher
 */

var _ProductListDispatcher =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_ProductListDispatcher, _Extensible);

  function _ProductListDispatcher() {
    _classCallCheck(this, _ProductListDispatcher);

    return _possibleConstructorReturn(this, _getPrototypeOf(_ProductListDispatcher).apply(this, arguments));
  }

  _createClass(_ProductListDispatcher, [{
    key: "__construct",
    value: function __construct() {
      _get(_getPrototypeOf(_ProductListDispatcher.prototype), "__construct", this).call(this, 'ProductList');
    }
  }, {
    key: "onSuccess",
    value: function onSuccess(data, dispatch, options) {
      var _data$products = data.products;
      _data$products = _data$products === void 0 ? {} : _data$products;
      var items = _data$products.items,
          total_count = _data$products.total_count,
          _data$products$page_i = _data$products.page_info;
      _data$products$page_i = _data$products$page_i === void 0 ? {} : _data$products$page_i;
      var total_pages = _data$products$page_i.total_pages;
      var args = options.args,
          isNext = options.isNext;
      var currentPage = args.currentPage;

      if (isNext) {
        return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_ProductList_ProductList_action__WEBPACK_IMPORTED_MODULE_3__["appendPage"])(items, currentPage));
      }

      return dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_ProductList_ProductList_action__WEBPACK_IMPORTED_MODULE_3__["updateProductListItems"])(items, currentPage, total_count, total_pages, args));
    }
  }, {
    key: "onError",
    value: function onError(error, dispatch) {
      dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_Notification_Notification_action__WEBPACK_IMPORTED_MODULE_2__["showNotification"])('error', 'Error fetching Product List!', error));
      dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_NoMatch_NoMatch_action__WEBPACK_IMPORTED_MODULE_1__["updateNoMatch"])(true));
    }
  }, {
    key: "prepareRequest",
    value: function prepareRequest(options, dispatch) {
      var isNext = options.isNext;

      if (!isNext) {
        dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_ProductList_ProductList_action__WEBPACK_IMPORTED_MODULE_3__["updateLoadStatus"])(true));
      } else {
        dispatch(Object(_app_design_frontend_Scandiweb_pwa_src_app_store_ProductList_ProductList_action__WEBPACK_IMPORTED_MODULE_3__["updatePageLoadingStatus"])());
      }

      return _app_design_frontend_Scandiweb_pwa_src_app_query_ProductList_query__WEBPACK_IMPORTED_MODULE_0__["default"].getQuery(options);
    }
  }]);

  return _ProductListDispatcher;
}(Extensible(_app_design_frontend_Scandiweb_pwa_src_app_util_Request__WEBPACK_IMPORTED_MODULE_4__["QueryDispatcher"]));
Object.defineProperty(_ProductListDispatcher, 'name', {
  value: 'ProductListDispatcher'
});

var ProductListDispatcher = middleware(_ProductListDispatcher, "Store/ProductList/Dispatcher");
/* harmony default export */ __webpack_exports__["default"] = (new ProductListDispatcher());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

})
//# sourceMappingURL=dispatchers.e2272b958a4b47fddea4.hot-update.js.map