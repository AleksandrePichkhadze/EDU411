webpackHotUpdate("product",{

/***/ "../../../../../vendor/scandipwa/source/src/app/type/Account.js":
/*!***********************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/type/Account.js ***!
  \***********************************************************************/
/*! exports provided: regionType, addressType, addressesType, customerType, baseOrderInfoType, orderType, ordersType, DASHBOARD, MY_ORDERS, MY_WISHLIST, ADDRESS_BOOK, NEWSLETTER_SUBSCRIPTION, activeTabType, tabType, tabMapType, signInStateType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionType", function() { return regionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressType", function() { return addressType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressesType", function() { return addressesType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerType", function() { return customerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseOrderInfoType", function() { return baseOrderInfoType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderType", function() { return orderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordersType", function() { return ordersType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASHBOARD", function() { return DASHBOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_ORDERS", function() { return MY_ORDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_WISHLIST", function() { return MY_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_BOOK", function() { return ADDRESS_BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWSLETTER_SUBSCRIPTION", function() { return NEWSLETTER_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeTabType", function() { return activeTabType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabType", function() { return tabType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabMapType", function() { return tabMapType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInStateType", function() { return signInStateType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
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

var regionType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  region_code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  region: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  region_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
})]);
var addressType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  city: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  country_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  customer_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  default_billing: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  default_shipping: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  firstname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  lastname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  middlename: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  postcode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  regionType: regionType,
  street: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)]),
  suffix: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  telephone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
var addressesType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(addressType);
var customerType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  addressesType: addressesType,
  created_at: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  default_billing: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  default_shipping: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  dob: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.date,
  email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  firstname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  personal_code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  group_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  is_subscribed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  lastname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  middlename: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  suffix: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  taxvat: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
var baseOrderInfoType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  increment_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  created_at: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  status_label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  grand_total: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  subtotal: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}); // TODO: remove objects

var orderType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  base_order_info: baseOrderInfoType,
  order_products: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
  payment_info: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  shipping_info: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
});
var ordersType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(orderType);
var DASHBOARD = 'dashboard';
var MY_ORDERS = 'my-orders';
var MY_WISHLIST = 'my-wishlist';
var ADDRESS_BOOK = 'address-book';
var NEWSLETTER_SUBSCRIPTION = 'newsletter-subscription';
var activeTabType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string;
var tabType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});
var tabMapType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(tabType);
var signInStateType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string;

/***/ })

})
//# sourceMappingURL=product.8d44252fbd450a56105b.hot-update.js.map