webpackHotUpdate("bundle",{

/***/ "../../../../../vendor/scandipwa/source/src/app/util/Menu/Menu.js":
/*!*************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/util/Menu/Menu.js ***!
  \*************************************************************************/
/*! exports provided: TYPE_CUSTOM_URL, TYPE_CMS_PAGE, TYPE_CATEGORY, getSortedItems, _Menu, Menu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_CUSTOM_URL", function() { return TYPE_CUSTOM_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_CMS_PAGE", function() { return TYPE_CMS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_CATEGORY", function() { return TYPE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedItems", function() { return getSortedItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Menu", function() { return _Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

/* eslint-disable no-param-reassign */
var TYPE_CUSTOM_URL = 0;
var TYPE_CMS_PAGE = 1;
var TYPE_CATEGORY = 2;
/**
 * Given an array of menu items, returns a copy of the array, sorted by their parent ID, then by their sort order (position)
 *
 * @param unsortedItems an array of items to be sorted
 * @returns {array} the sorted array
 * @namespace Util/Menu/getSortedItems
 */

var getSortedItems = middleware(function (unsortedItems) {
  return Array.from(unsortedItems).sort(function (_ref, _ref2) {
    var PID = _ref.parent_id,
        P = _ref.position;
    var prevPID = _ref2.parent_id,
        prevP = _ref2.position;
    return PID - prevPID || P - prevP;
  });
}, "Util/Menu/getSortedItems\n");
/** @namespace Util/Menu */
// eslint-disable-next-line @scandipwa/scandipwa-guidelines/derived-class-names

var _Menu =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_Menu, _Extensible);

  function _Menu() {
    _classCallCheck(this, _Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(_Menu).apply(this, arguments));
  }

  _createClass(_Menu, [{
    key: "getMenuUrl",
    value: function getMenuUrl(_ref3) {
      var url = _ref3.url,
          url_type = _ref3.url_type,
          category_id = _ref3.category_id;

      switch (url_type) {
        case TYPE_CATEGORY:
          return {
            pathname: url,
            search: '',
            state: {
              category: category_id
            }
          };

        case TYPE_CMS_PAGE:
          return {
            pathname: url,
            search: '',
            state: {
              page: true
            }
          };

        default:
          return url;
      }
    }
  }, {
    key: "getMenuData",
    value: function getMenuData(_ref4) {
      var cms_page_identifier = _ref4.cms_page_identifier,
          url = _ref4.url,
          url_type = _ref4.url_type,
          category_id = _ref4.category_id,
          item = _objectWithoutProperties(_ref4, ["cms_page_identifier", "url", "url_type", "category_id"]);

      return _objectSpread2(_objectSpread2({}, item), {}, {
        url: this.getMenuUrl({
          url: url,
          url_type: url_type,
          category_id: category_id
        }),
        children: {}
      });
    }
  }, {
    key: "setToValue",
    value: function setToValue(obj, path, value) {
      // eslint-disable-next-line fp/no-let
      var i;
      path = path.split('.'); // eslint-disable-next-line fp/no-loops

      for (i = 0; i < path.length - 1; i++) {
        obj = obj[path[i]];
      }

      obj[path[i]] = value;
    }
  }, {
    key: "createItem",
    value: function createItem(data) {
      var parent_id = data.parent_id,
          item_id = data.item_id;

      if (parent_id === 0) {
        this.menuPositionReference[item_id] = [];
        this.menu[item_id] = this.getMenuData(data);
      } else if (this.menuPositionReference[parent_id] !== undefined) {
        this.menuPositionReference[item_id] = [].concat(_toConsumableArray(this.menuPositionReference[parent_id]), [parent_id]);
        this.setToValue(this.menu, "".concat(this.menuPositionReference[item_id].join('.children.'), ".children.").concat(item_id), this.getMenuData(data));
      }
    }
  }, {
    key: "reduce",
    value: function reduce(_ref5) {
      var _this = this;

      var unsortedItems = _ref5.items;
      this.menu = {};
      this.menuPositionReference = {};
      getSortedItems(unsortedItems).forEach(function (realMenuItem) {
        _this.createItem(realMenuItem);
      });
      return this.menu;
    }
  }]);

  return _Menu;
}(Extensible());
Object.defineProperty(_Menu, 'name', {
  value: 'Menu'
});

var Menu = middleware(_Menu, "Util/Menu");
/* harmony default export */ __webpack_exports__["default"] = (new Menu());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js")))

/***/ })

})
//# sourceMappingURL=bundle.14c4ec4f7c78fe06ee48.hot-update.js.map