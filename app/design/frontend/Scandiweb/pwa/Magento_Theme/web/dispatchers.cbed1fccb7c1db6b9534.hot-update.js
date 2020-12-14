webpackHotUpdate("dispatchers",{

/***/ "../../../../../vendor/scandipwa/source/src/app/query/Category.query.js":
/*!*******************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/query/Category.query.js ***!
  \*******************************************************************************/
/*! exports provided: _CategoryQuery, CategoryQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategoryQuery", function() { return _CategoryQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryQuery", function() { return CategoryQuery; });
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Query */ "../../../../../vendor/scandipwa/source/src/app/util/Query/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
 * Category Query
 * @class CategoryQuery
 * @namespace Query/Category
 */

var _CategoryQuery =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategoryQuery, _Extensible);

  function _CategoryQuery() {
    _classCallCheck(this, _CategoryQuery);

    return _possibleConstructorReturn(this, _getPrototypeOf(_CategoryQuery).apply(this, arguments));
  }

  _createClass(_CategoryQuery, [{
    key: "__construct",
    value: function __construct() {
      _get(_getPrototypeOf(_CategoryQuery.prototype), "__construct", this).call(this);

      this.options = {};
    }
  }, {
    key: "getQuery",
    value: function getQuery() {
      var _ref;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.options = options;
      return (_ref = new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('category')).addArgument.apply(_ref, _toConsumableArray(this._getConditionalArguments())).addFieldList(this._getDefaultFields()).addField(this._getChildrenFields());
    }
  }, {
    key: "_getConditionalArguments",
    value: function _getConditionalArguments() {
      var categoryIds = this.options.categoryIds;

      if (categoryIds) {
        return ['id', 'Int!', categoryIds];
      }

      throw new Error(__('There was an error requesting the category'));
    }
  }, {
    key: "_getChildrenFields",
    value: function _getChildrenFields() {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('children').addFieldList(this._getDefaultFields());
    }
  }, {
    key: "_getBreadcrumbsField",
    value: function _getBreadcrumbsField() {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('breadcrumbs').addFieldList(this._getBreadcrumbFields());
    }
  }, {
    key: "_getBreadcrumbFields",
    value: function _getBreadcrumbFields() {
      return ['category_name', 'category_level', 'category_url', 'category_is_active'];
    }
  }, {
    key: "_getCmsBlockFields",
    value: function _getCmsBlockFields() {
      return ['content', 'disabled', 'title', 'identifier'];
    }
  }, {
    key: "_getCmsBlockField",
    value: function _getCmsBlockField() {
      return new _app_design_frontend_Scandiweb_pwa_src_app_util_Query__WEBPACK_IMPORTED_MODULE_0__["Field"]('cms_block').addFieldList(this._getCmsBlockFields());
    }
  }, {
    key: "_getDefaultFields",
    value: function _getDefaultFields() {
      return ['id', 'url', 'name', 'image', 'url_key', 'url_path', 'is_active', 'meta_title', 'description', 'canonical_url', 'category_type', 'product_count', 'meta_keywords', 'default_sort_by', 'meta_description', 'landing_page', this._getCmsBlockField(), this._getBreadcrumbsField()];
    }
  }]);

  return _CategoryQuery;
}(Extensible());
Object.defineProperty(_CategoryQuery, 'name', {
  value: 'CategoryQuery'
});

var CategoryQuery = middleware(_CategoryQuery, "Query/Category");
/* harmony default export */ __webpack_exports__["default"] = (new CategoryQuery());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

})
//# sourceMappingURL=dispatchers.cbed1fccb7c1db6b9534.hot-update.js.map