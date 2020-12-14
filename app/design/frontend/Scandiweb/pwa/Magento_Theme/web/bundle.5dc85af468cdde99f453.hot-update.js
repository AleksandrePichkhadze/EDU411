webpackHotUpdate("bundle",{

/***/ "../../../../../vendor/scandipwa/source/src/app/util/Url/Url.js":
/*!***********************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/util/Url/Url.js ***!
  \***********************************************************************/
/*! exports provided: updateQueryParamWithoutHistory, removeQueryParamWithoutHistory, getUrlParam, appendWithStoreCode, getQueryParam, convertQueryStringToKeyValuePairs, updateKeyValuePairs, convertKeyValuesToQueryString, generateQuery, setQueryParams, clearQueriesFromUrl, objectToUri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQueryParamWithoutHistory", function() { return updateQueryParamWithoutHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeQueryParamWithoutHistory", function() { return removeQueryParamWithoutHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParam", function() { return getUrlParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendWithStoreCode", function() { return appendWithStoreCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryParam", function() { return getQueryParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertQueryStringToKeyValuePairs", function() { return convertQueryStringToKeyValuePairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateKeyValuePairs", function() { return updateKeyValuePairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertKeyValuesToQueryString", function() { return convertKeyValuesToQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateQuery", function() { return generateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQueryParams", function() { return setQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearQueriesFromUrl", function() { return clearQueriesFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToUri", function() { return objectToUri; });
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/store */ "../../../../../vendor/scandipwa/source/src/app/store/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable fp/no-let */

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
 // TODO: fix no LET

/**
 * Update query params without adding to history
 * @param {String} name
 * @param {String} value
 * @namespace Util/Url/updateQueryParamWithoutHistory
 */

var updateQueryParamWithoutHistory = middleware(function (name, value, history, location) {
  var search = location.search,
      pathname = location.pathname;
  var params = new URLSearchParams(search);
  params.set(name, value);
  history.replace(decodeURIComponent("".concat(pathname, "?").concat(params)));
}, "Util/Url/updateQueryParamWithoutHistory\n");
/**
 * Remove query param without adding to history
 * @param {String} name
 * @namespace Util/Url/removeQueryParamWithoutHistory
 */

var removeQueryParamWithoutHistory = middleware(function (name, history, location) {
  var search = location.search,
      pathname = location.pathname;
  var params = new URLSearchParams(search);
  params.delete(name);
  history.replace(decodeURIComponent("".concat(pathname, "?").concat(params)));
}, "Util/Url/removeQueryParamWithoutHistory\n");
/**
 * Get query param from url
 * @param {Object} match match object from react-router
 * @param {Object} location location object from react-router
 * @namespace Util/Url/getUrlParam
 */

var getUrlParam = middleware(function (match, location) {
  var baseUrl = match.path.replace(window.storeRegexText, '').replace('/', '');
  var currentUrl = location.pathname.replace(new RegExp(window.storeRegexText), '');

  if (baseUrl === '/') {
    return currentUrl.replace(baseUrl, '');
  }

  return currentUrl.replace(baseUrl, '').replace(/^\/*/, '');
}, "Util/Url/getUrlParam\n");
/**
 * Append store code to URL
 * @param {String} pathname the URL to append store code to
 * @namespace Util/Url/appendWithStoreCode
 */

var appendWithStoreCode = middleware(function (pathname) {
  console.log(pathname);

  var _ref = Object(_app_design_frontend_Scandiweb_pwa_src_app_store__WEBPACK_IMPORTED_MODULE_0__["getStore"])().getState() || {},
      _ref$ConfigReducer = _ref.ConfigReducer;

  _ref$ConfigReducer = _ref$ConfigReducer === void 0 ? {} : _ref$ConfigReducer;
  var _ref$ConfigReducer$ba = _ref$ConfigReducer.base_link_url,
      base_link_url = _ref$ConfigReducer$ba === void 0 ? window.location.origin : _ref$ConfigReducer$ba;

  var _ref2 = new URL(base_link_url),
      storePrefix = _ref2.pathname; // ignore empty URLs


  if (!pathname) {
    return pathname;
  } // match URLs which have the store code in pathname


  if (pathname.match("/(".concat(window.storeList.join('|'), ")"))) {
    return pathname;
  }

  if (!pathname.startsWith('/')) {
    // eslint-disable-next-line no-param-reassign
    pathname = "/".concat(pathname);
  } // trim the last slash from URL, and append it to pathname


  return storePrefix.slice(0, -1).concat(pathname);
}, "Util/Url/appendWithStoreCode\n");
/**
 * Get query variable value (from react router)
 * @param {String} variable Variable from URL
 * @param {Object} variable location object from react-router
 * @return {String|false} Variable value
 * @namespace Util/Url/getQueryParam
 */

var getQueryParam = middleware(function (variable, location) {
  var query = location.search.substring(1);
  var vars = query.split('&'); // eslint-disable-next-line fp/no-loops

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (pair[0] === variable) {
      return pair[1];
    }
  }

  return false;
}, "Util/Url/getQueryParam\n");
/**
 * Convert url params to object with key value pairs
 * @param {String} queryString url query string
 * @return {Object} Key-Value pairs
 * @namespace Util/Url/convertQueryStringToKeyValuePairs
 */

var convertQueryStringToKeyValuePairs = middleware(function (queryString) {
  var keyValuePairs = {};
  var params = queryString.substring(1).split('&');
  params.forEach(function (param) {
    var pair = param.split('=');

    var _pair = _slicedToArray(pair, 2),
        keyPair = _pair[0],
        _pair$ = _pair[1],
        valuePair = _pair$ === void 0 ? [] : _pair$;

    if (keyPair.length > 0 && valuePair.length > 0) {
      keyValuePairs[keyPair] = decodeURIComponent(valuePair);
    }
  });
  return keyValuePairs;
}, "Util/Url/convertQueryStringToKeyValuePairs\n");
/**
 * Update existing key value pairs and return result
 * @param {Object} keyValuePairs current key value pairs
 * @param {String} currentKey key of the value to be updated
 * @param {String} currentValue value to be updated
 * @return {Object} Key-Value pairs
 * @namespace Util/Url/updateKeyValuePairs
 */

var updateKeyValuePairs = middleware(function (keyValuePairs, currentKey, currentValue) {
  var updatedKeyValuePairs = {};
  Object.entries(keyValuePairs).forEach(function (pair) {
    var _pair2 = _slicedToArray(pair, 2),
        key = _pair2[0],
        value = _pair2[1];

    if (currentKey === key) {
      updatedKeyValuePairs[key] = currentValue;
    } else {
      updatedKeyValuePairs[key] = value;
    }
  });
  return updatedKeyValuePairs;
}, "Util/Url/updateKeyValuePairs\n");
/**
 * Convert object with key value pairs to url query string
 * @param {Object} keyValuePairs object with key value pairs
 * @return {String} Converted query string
 * @namespace Util/Url/convertKeyValuesToQueryString
 */

var convertKeyValuesToQueryString = middleware(function (keyValuePairs) {
  var newSearchQuery = '';
  Object.entries(keyValuePairs).forEach(function (pair) {
    var _pair3 = _slicedToArray(pair, 2),
        key = _pair3[0],
        value = _pair3[1];

    var keyExists = key !== '';
    var valueExists = _typeof(value) === 'object' ? value.length : value !== '';

    if (valueExists && keyExists) {
      newSearchQuery += "".concat(key, "=").concat(value, "&");
    }
  });
  return "".concat(newSearchQuery.slice(0, -1)); // remove trailing '&'
}, "Util/Url/convertKeyValuesToQueryString\n");
/** @namespace Util/Url/generateQuery */

var generateQuery = middleware(function (keyValueObject, location, history) {
  var query = history.location.search;
  Object.entries(keyValueObject).forEach(function (pair) {
    var _pair4 = _slicedToArray(pair, 2),
        key = _pair4[0],
        value = _pair4[1];

    var keyAndValueExist = !!key && !!value;

    if (query === '' && keyAndValueExist) {
      query = "?".concat(key, "=").concat(value);
    } else if (getQueryParam(key, location) !== false) {
      var keyValuePairs = convertQueryStringToKeyValuePairs(query);
      var updatedKeyValuePairs = updateKeyValuePairs(keyValuePairs, key, value);
      var updatedQuery = convertKeyValuesToQueryString(updatedKeyValuePairs);
      query = updatedQuery.length ? "?".concat(updatedQuery) : '';
    } else if (keyAndValueExist) {
      query = "".concat(query, "&").concat(key, "=").concat(value);
    }
  });
  return query;
}, "Util/Url/generateQuery");
/**
 * Set add key value pairs to url
 * @param {Object} variable Object with key value pairs to be added to url
 * @param {Object} variable location object from react-router
 * @param {Object} variable react router history object
 * @param {Object} variable is url flush required
 * @namespace Util/Url/setQueryParams
 */

var setQueryParams = middleware(function (keyValueObject, location, history) {
  var state = location.state;
  var query = generateQuery(keyValueObject, location, history);
  history.push({
    search: query,
    state: state
  });
}, "Util/Url/setQueryParams\n");
/**
 * Remove all queries except default sort options from url
 * @param {Object} variable react router history object
 * @namespace Util/Url/clearQueriesFromUrl
 */

var clearQueriesFromUrl = middleware(function (history) {
  history.push({
    search: ''
  });
}, "Util/Url/clearQueriesFromUrl\n");
/**
 * Convert object with key value pairs to url query string
 * @param {Object} keyValuePairs object with key value pairs
 * @return {String} Converted query string
 * @namespace Util/Url/objectToUri
 */

var objectToUri = middleware(function () {
  var keyValueObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var paramString = Object.entries(keyValueObject).sort().reduce(function (acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    return "".concat(acc, "&").concat(key, "=").concat(value);
  }, '').replace('&', '');
  return paramString.length > 0 ? "?".concat(paramString) : '';
}, "Util/Url/objectToUri\n");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

})
//# sourceMappingURL=bundle.5dc85af468cdde99f453.hot-update.js.map