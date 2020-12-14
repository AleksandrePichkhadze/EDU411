webpackHotUpdate("bundle",{

/***/ "../../../../../vendor/scandipwa/source/src/app/util/Request/Request.js":
/*!*******************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/util/Request/Request.js ***!
  \*******************************************************************************/
/*! exports provided: GRAPHQL_URI, getStoreCodePath, getGraphqlEndpoint, appendTokenToHeaders, formatURI, getFetch, putPersistedQuery, postFetch, checkForErrors, handleConnectionError, parseResponse, HTTP_410_GONE, HTTP_201_CREATED, executeGet, executePost, listenForBroadCast, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPHQL_URI", function() { return GRAPHQL_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreCodePath", function() { return getStoreCodePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGraphqlEndpoint", function() { return getGraphqlEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTokenToHeaders", function() { return appendTokenToHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatURI", function() { return formatURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFetch", function() { return getFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putPersistedQuery", function() { return putPersistedQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postFetch", function() { return postFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForErrors", function() { return checkForErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleConnectionError", function() { return handleConnectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseResponse", function() { return parseResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_410_GONE", function() { return HTTP_410_GONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_201_CREATED", function() { return HTTP_201_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeGet", function() { return executeGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executePost", function() { return executePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenForBroadCast", function() { return listenForBroadCast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Auth */ "../../../../../vendor/scandipwa/source/src/app/util/Auth/index.js");
/* harmony import */ var _Hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hash */ "../../../../../vendor/scandipwa/source/src/app/util/Request/Hash.js");
var _this = undefined;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @scandipwa/scandipwa-guidelines/create-config-files */

/* eslint-disable no-console */

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


var GRAPHQL_URI = '/graphql';
/** @namespace Util/Request/getStoreCodePath */

var getStoreCodePath = middleware(function () {
  var path = location.pathname; // eslint-disable-next-line no-undef

  var firstPathPart = path.split('/')[1];

  if (window.storeList.includes(firstPathPart)) {
    return "/".concat(firstPathPart);
  }

  return '';
}, "Util/Request/getStoreCodePath");
/** @namespace Util/Request/getGraphqlEndpoint */

var getGraphqlEndpoint = middleware(function () {
  return getStoreCodePath().concat(GRAPHQL_URI);
}, "Util/Request/getGraphqlEndpoint");
/**
 * Append authorization token to header object
 * @param {Object} headers
 * @returns {Object} Headers with appended authorization
 * @namespace Util/Request/appendTokenToHeaders
 */

var appendTokenToHeaders = middleware(function (headers) {
  var token = Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Auth__WEBPACK_IMPORTED_MODULE_0__["getAuthorizationToken"])();
  return _objectSpread2(_objectSpread2({}, headers), {}, {
    Authorization: token ? "Bearer ".concat(token) : ''
  });
}, "Util/Request/appendTokenToHeaders\n");
/**
 *
 * @param {String} query Request body
 * @param {Object} variables Request variables
 * @param {String} url GraphQL url
 * @returns {*}
 * @namespace Util/Request/formatURI
 */

var formatURI = middleware(function (query, variables, url) {
  var stringifyVariables = Object.keys(variables).reduce(function (acc, variable) {
    return [].concat(_toConsumableArray(acc), ["".concat(variable, "=").concat(JSON.stringify(variables[variable]))]);
  }, ["?hash=".concat(Object(_Hash__WEBPACK_IMPORTED_MODULE_1__["hash"])(query))]);
  return "".concat(url).concat(stringifyVariables.join('&'));
}, "Util/Request/formatURI\n");
/**
 *
 * @param {String} uri
 * @param {String} name
 * @returns {Promise<Response>}
 * @namespace Util/Request/getFetch
 */

var getFetch = middleware(function (uri, name) {
  return fetch(uri, {
    method: 'GET',
    headers: appendTokenToHeaders({
      'Content-Type': 'application/json',
      'Application-Model': name,
      Accept: 'application/json'
    })
  });
}, "Util/Request/getFetch\n");
/**
 *
 * @param {String} graphQlURI
 * @param {{}} query Request body
 * @param {Int} cacheTTL
 * @namespace Util/Request/putPersistedQuery
 */

var putPersistedQuery = middleware(function (graphQlURI, query, cacheTTL) {
  return fetch("".concat(graphQlURI, "?hash=").concat(Object(_Hash__WEBPACK_IMPORTED_MODULE_1__["hash"])(query)), {
    method: 'PUT',
    body: JSON.stringify(query),
    headers: {
      'Content-Type': 'application/json',
      'SW-Cache-Age': cacheTTL
    }
  });
}, "Util/Request/putPersistedQuery\n");
/**
 *
 * @param {String} graphQlURI
 * @param {String} queryObject
 * @param {String} name
 * @returns {Promise<Response>}
 * @namespace Util/Request/postFetch
 */

var postFetch = middleware(function (graphQlURI, query, variables) {
  return fetch(graphQlURI, {
    method: 'POST',
    body: JSON.stringify({
      query: query,
      variables: variables
    }),
    headers: appendTokenToHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  });
}, "Util/Request/postFetch\n");
/**
 * Checks for errors in response, if they exist, rejects promise
 * @param  {Object} res Response from GraphQL endpoint
 * @return {Promise<Object>} Handled GraphqlQL results promise
 * @namespace Util/Request/checkForErrors
 */

var checkForErrors = middleware(function (res) {
  return new Promise(function (resolve, reject) {
    var errors = res.errors,
        data = res.data;
    return errors ? reject(errors) : resolve(data);
  });
}, "Util/Request/checkForErrors\n");
/**
 * Handle connection errors
 * @param  {any} err Error from fetch
 * @return {void} Simply console error
 * @namespace Util/Request/handleConnectionError
 */

var handleConnectionError = middleware(function (err) {
  return console.error(err);
}, "Util/Request/handleConnectionError\n"); // TODO: Add to logs pool

/**
 * Parse response and check wether it contains errors
 * @param  {{}} queryObject prepared with `prepareDocument()` from `Util/Query` request body object
 * @return {Promise<Request>} Fetch promise to GraphQL endpoint
 * @namespace Util/Request/parseResponse
 */

var parseResponse = middleware(function (promise) {
  return new Promise(function (resolve, reject) {
    promise.then(
    /** @namespace Util/Request/promiseThen */
    middleware(function (res) {
      return res.json().then(
      /** @namespace Util/Request/resJsonThen */
      middleware(function (res) {
        return resolve(checkForErrors(res));
      }, "Util/Request/resJsonThen"),
      /** @namespace Util/Request/resJsonError */
      middleware(function () {
        return handleConnectionError('Can not transform JSON!') && reject();
      }, "Util/Request/resJsonError"));
    }, "Util/Request/promiseThen"),
    /** @namespace Util/Request/promiseError */
    middleware(function (err) {
      return handleConnectionError('Can not establish connection!') && reject(err);
    }, "Util/Request/promiseError"));
  });
}, "Util/Request/parseResponse\n");
var HTTP_410_GONE = 410;
var HTTP_201_CREATED = 201;
/**
 * Make GET request to endpoint (via ServiceWorker)
 * @param  {{}} queryObject prepared with `prepareDocument()` from `Util/Query` request body object
 * @param  {String} name Name of model for ServiceWorker to send BroadCasts updates to
 * @param  {Number} cacheTTL Cache TTL (in seconds) for ServiceWorker to cache responses
 * @return {Promise<Request>} Fetch promise to GraphQL endpoint
 * @namespace Util/Request/executeGet
 */

var executeGet = middleware(function (queryObject, name, cacheTTL) {
  var query = queryObject.query,
      variables = queryObject.variables;
  var uri = formatURI(query, variables, getGraphqlEndpoint());
  return parseResponse(new Promise(function (resolve) {
    getFetch(uri, name).then(
    /** @namespace Util/Request/getFetchThen */
    middleware(function (res) {
      if (res.status === HTTP_410_GONE) {
        putPersistedQuery(getGraphqlEndpoint(), query, cacheTTL).then(
        /** @namespace Util/Request/putPersistedQueryThen */
        middleware(function (putResponse) {
          if (putResponse.status === HTTP_201_CREATED) {
            getFetch(uri, name).then(
            /** @namespace Util/Request/putResponseGetFetchThen */
            middleware(function (res) {
              return resolve(res);
            }, "Util/Request/putResponseGetFetchThen"));
          }
        }, "Util/Request/putPersistedQueryThen"));
      } else {
        resolve(res);
      }
    }, "Util/Request/getFetchThen"));
  }));
}, "Util/Request/executeGet\n");
/**
 * Make POST request to endpoint
 * @param  {{}} queryObject prepared with `prepareDocument()` from `Util/Query` request body object
 * @return {Promise<Request>} Fetch promise to GraphQL endpoint
 * @namespace Util/Request/executePost
 */

var executePost = middleware(function (queryObject) {
  var query = queryObject.query,
      variables = queryObject.variables;
  return parseResponse(postFetch(getGraphqlEndpoint(), query, variables));
}, "Util/Request/executePost\n");
/**
 * Listen to the BroadCast connection
 * @param  {String} name Name of model for ServiceWorker to send BroadCasts updates to
 * @return {Promise<any>} Broadcast message promise
 * @namespace Util/Request/listenForBroadCast
 */

var listenForBroadCast = middleware(function (name) {
  return new Promise(function (resolve) {
    var _window = window,
        BroadcastChannel = _window.BroadcastChannel;

    if (BroadcastChannel) {
      var bc = new BroadcastChannel(name);

      bc.onmessage = function (update) {
        var body = update.data.payload;
        resolve(checkForErrors(body));
      };
    }
  });
}, "Util/Request/listenForBroadCast\n");
/** @namespace Util/Request/debounce */

var debounce = middleware(function (callback, delay) {
  // eslint-disable-next-line fp/no-let
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = _this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return callback.apply(context, args);
    }, delay);
  };
}, "Util/Request/debounce");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

})
//# sourceMappingURL=bundle.0739b7e701eb4d658d43.hot-update.js.map