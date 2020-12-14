webpackHotUpdate("bundle",{

/***/ "../../../../../vendor/scandipwa/source/src/app/component/MenuItem/MenuItem.component.js":
/*!************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/MenuItem/MenuItem.component.js ***!
  \************************************************************************************************/
/*! exports provided: _MenuItem, MenuItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MenuItem", function() { return _MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Image */ "../../../../../vendor/scandipwa/source/src/app/component/Image/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Link */ "../../../../../vendor/scandipwa/source/src/app/component/Link/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Device */ "../../../../../vendor/scandipwa/source/src/app/type/Device.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Media */ "../../../../../vendor/scandipwa/source/src/app/util/Media/index.js");
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

/* eslint-disable jsx-a11y/click-events-have-key-events */

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






/** @namespace Component/MenuItem/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _MenuItem =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_MenuItem, _Extensible);

  function _MenuItem() {
    _classCallCheck(this, _MenuItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(_MenuItem).apply(this, arguments));
  }

  _createClass(_MenuItem, [{
    key: "renderItemContentImage",
    value: function renderItemContentImage(icon, itemMods) {
      var device = this.props.device;
      var isBanner = itemMods.isBanner,
          isLogo = itemMods.isLogo,
          type = itemMods.type;

      if (!icon || !device.isMobile && !isBanner && !isLogo || type === 'subcategory') {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
          mix: {
            block: 'Menu',
            elem: 'Image',
            mods: itemMods
          },
          src: icon && Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Media__WEBPACK_IMPORTED_MODULE_5__["default"])(icon),
          ratio: "custom"
        })
      );
    }
  }, {
    key: "renderItemContentTitle",
    value: function renderItemContentTitle(isBanner, title) {
      if (isBanner) {
        return (
          /*#__PURE__*/
          _checkBEM(React, "button", {
            block: "Menu",
            elem: "Button",
            mix: {
              block: 'Button'
            }
          }, title)
        );
      }

      return title;
    }
  }, {
    key: "renderItemContent",
    value: function renderItemContent(item) {
      var itemMods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = item.title,
          icon = item.icon;
      var isBanner = itemMods.isBanner;
      return (
        /*#__PURE__*/
        _checkBEM(React, "figure", {
          block: "Menu",
          elem: "ItemFigure",
          mods: itemMods
        }, this.renderItemContentImage(icon, itemMods),
        /*#__PURE__*/
        _checkBEM(React, "figcaption", {
          block: "Menu",
          elem: "ItemCaption",
          mods: itemMods
        }, this.renderItemContentTitle(isBanner, title)))
      );
    }
  }, {
    key: "renderItemLinkContent",
    value: function renderItemLinkContent() {
      var _this$props = this.props,
          activeMenuItemsStack = _this$props.activeMenuItemsStack,
          item = _this$props.item,
          itemMods = _this$props.itemMods,
          handleCategoryHover = _this$props.handleCategoryHover,
          closeMenu = _this$props.closeMenu;
      var url = item.url,
          item_id = item.item_id;
      var isHovered = activeMenuItemsStack.includes(item_id);
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
          to: url,
          block: "Menu",
          elem: "Link",
          id: item_id,
          onMouseEnter: handleCategoryHover,
          mods: {
            isHovered: isHovered
          },
          onClick: closeMenu
        }, this.renderItemContent(item, itemMods))
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          item = _this$props2.item,
          itemMods = _this$props2.itemMods,
          isLink = _this$props2.isLink;

      if (isLink) {
        return this.renderItemLinkContent();
      }

      return this.renderItemContent(item, itemMods);
    }
  }]);

  return _MenuItem;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_MenuItem, 'name', {
  value: 'MenuItem'
});

var MenuItem = middleware(_MenuItem, "Component/MenuItem/Component");

_defineProperty(MenuItem, "propTypes", {
  activeMenuItemsStack: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array.isRequired,
  item: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  itemMods: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  handleCategoryHover: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  isLink: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  closeMenu: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  device: _app_design_frontend_Scandiweb_pwa_src_app_type_Device__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].isRequired
});

_defineProperty(MenuItem, "defaultProps", {
  itemMods: {},
  isLink: false,
  closeMenu: function closeMenu() {}
});

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

})
//# sourceMappingURL=bundle.12e9c7f2969937239a62.hot-update.js.map