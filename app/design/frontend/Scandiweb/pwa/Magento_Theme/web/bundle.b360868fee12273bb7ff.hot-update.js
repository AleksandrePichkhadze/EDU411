webpackHotUpdate("bundle",{

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Menu/Menu.component.js":
/*!****************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Menu/Menu.component.js ***!
  \****************************************************************************************/
/*! exports provided: _Menu, Menu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Menu", function() { return _Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CmsBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CmsBlock */ "../../../../../vendor/scandipwa/source/src/app/component/CmsBlock/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Link */ "../../../../../vendor/scandipwa/source/src/app/component/Link/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/MenuItem */ "../../../../../vendor/scandipwa/source/src/app/component/MenuItem/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_StoreSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/StoreSwitcher */ "../../../../../vendor/scandipwa/source/src/app/component/StoreSwitcher/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Device__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Device */ "../../../../../vendor/scandipwa/source/src/app/type/Device.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Menu */ "../../../../../vendor/scandipwa/source/src/app/type/Menu.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_util_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/util/Menu */ "../../../../../vendor/scandipwa/source/src/app/util/Menu/index.js");
/* harmony import */ var _Menu_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Menu.style */ "../../../../../vendor/scandipwa/source/src/app/component/Menu/Menu.style.scss");
/* harmony import */ var _Menu_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Menu_style__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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










/** @namespace Component/Menu/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _Menu =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_Menu, _Extensible);

  function _Menu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderSubLevelItems", function (item) {
      var _this$props = _this.props,
          handleSubcategoryClick = _this$props.handleSubcategoryClick,
          activeMenuItemsStack = _this$props.activeMenuItemsStack,
          onCategoryHover = _this$props.onCategoryHover,
          closeMenu = _this$props.closeMenu,
          device = _this$props.device;
      var item_id = item.item_id,
          children = item.children,
          item_class = item.item_class;
      var isBanner = item_class === 'Menu-ItemFigure_type_banner';
      var childrenArray = Object.values(children);
      var subcategoryMods = {
        type: 'subcategory'
      };

      if (childrenArray.length && device.isMobile) {
        return (
          /*#__PURE__*/
          _checkBEM(React, "div", {
            key: item_id // TODO: split into smaller components
            // eslint-disable-next-line react/jsx-no-bind
            ,
            onClick: function onClick(e) {
              return handleSubcategoryClick(e, item);
            },
            tabIndex: "0",
            role: "button"
          },
          /*#__PURE__*/
          _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            activeMenuItemsStack: activeMenuItemsStack,
            item: item,
            itemMods: subcategoryMods,
            onCategoryHover: onCategoryHover,
            closeMenu: closeMenu
          }), _this.renderSubLevel(item))
        );
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "SubItemWrapper",
          key: item_id,
          mods: {
            isBanner: isBanner
          }
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          activeMenuItemsStack: activeMenuItemsStack,
          item: item,
          closeMenu: closeMenu,
          isLink: true
        }), _this.renderDesktopSubLevel(item))
      );
    });

    _defineProperty(_assertThisInitialized(_this), "renderSubMenuDesktopItems", function (item) {
      var item_id = item.item_id,
          children = item.children;

      if (!Object.keys(children).length) {
        return null;
      }

      var _this$props2 = _this.props,
          activeMenuItemsStack = _this$props2.activeMenuItemsStack,
          closeMenu = _this$props2.closeMenu;
      var isVisible = activeMenuItemsStack.includes(item_id);

      if (!isVisible) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "SubCategoriesWrapper",
          mods: {
            isVisible: isVisible
          },
          key: item_id
        },
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "SubCategoriesWrapperInner",
          mods: {
            isVisible: isVisible
          }
        },
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "SubCategories"
        }, _this.renderSubLevel(item)), _this.renderAdditionalInformation()),
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "Overlay",
          mods: {
            isVisible: isVisible
          },
          onMouseEnter: closeMenu
        }))
      );
    });

    _defineProperty(_assertThisInitialized(_this), "renderFirstLevel", function (item) {
      var item_id = item.item_id;
      return (
        /*#__PURE__*/
        _checkBEM(React, "li", {
          key: item_id,
          block: "Menu",
          elem: "Item"
        }, _this.renderFirstLevelItems(item))
      );
    });

    return _this;
  }

  _createClass(_Menu, [{
    key: "renderDesktopSubLevelItems",
    value: function renderDesktopSubLevelItems(item, mods) {
      var item_id = item.item_id;
      var _this$props3 = this.props,
          closeMenu = _this$props3.closeMenu,
          activeMenuItemsStack = _this$props3.activeMenuItemsStack;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          activeMenuItemsStack: activeMenuItemsStack,
          item: item,
          itemMods: mods,
          closeMenu: closeMenu,
          isLink: true,
          key: item_id
        })
      );
    }
  }, {
    key: "renderDesktopSubLevel",
    value: function renderDesktopSubLevel(category) {
      var _this2 = this;

      var device = this.props.device;
      var children = category.children,
          item_class = category.item_class,
          item_id = category.item_id;
      var childrenArray = Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Menu__WEBPACK_IMPORTED_MODULE_8__["getSortedItems"])(Object.values(children));

      if (device.isMobile || !childrenArray.length) {
        return null;
      }

      var isBanner = item_class === 'Menu-ItemFigure_type_banner';
      var isLogo = item_class === 'Menu-ItemFigure_type_logo';
      var mods = {
        isBanner: !!isBanner,
        isLogo: !!isLogo
      };
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "SubLevelDesktop",
          key: item_id
        },
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "ItemList",
          mods: _objectSpread2({}, mods)
        }, childrenArray.map(function (item) {
          return _this2.renderDesktopSubLevelItems(item, mods);
        })))
      );
    }
  }, {
    key: "renderSubLevel",
    value: function renderSubLevel(category) {
      var activeMenuItemsStack = this.props.activeMenuItemsStack;
      var item_id = category.item_id,
          children = category.children;
      var childrenArray = Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Menu__WEBPACK_IMPORTED_MODULE_8__["getSortedItems"])(Object.values(children));
      var isVisible = activeMenuItemsStack.includes(item_id);
      var subcategoryMods = {
        type: 'subcategory'
      };
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "SubMenu",
          mods: {
            isVisible: isVisible
          },
          key: item_id
        },
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "ItemList",
          mods: _objectSpread2({}, subcategoryMods)
        }, childrenArray.map(this.renderSubLevelItems)))
      );
    }
  }, {
    key: "renderPromotionCms",
    value: function renderPromotionCms() {
      var closeMenu = this.props.closeMenu;
      var _window$contentConfig = window.contentConfiguration.header_content;
      _window$contentConfig = _window$contentConfig === void 0 ? {} : _window$contentConfig;
      var header_cms = _window$contentConfig.header_cms;

      if (header_cms) {
        return (
          /*#__PURE__*/
          _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CmsBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
            identifier: header_cms
          })
        );
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "Promotion"
        },
        /*#__PURE__*/
        _checkBEM(React, "h3", {
          block: "Menu",
          elem: "PageLink"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
          to: "/about-us",
          onClick: closeMenu,
          block: "Menu",
          elem: "Link"
        }, __('ABOUT US'))),
        /*#__PURE__*/
        _checkBEM(React, "h3", {
          block: "Menu",
          elem: "PageLink"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
          to: "/about-us",
          onClick: closeMenu,
          block: "Menu",
          elem: "Link"
        }, __('CONTACTS'))),
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "Social"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CmsBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
          identifier: "social-links"
        })))
      );
    }
  }, {
    key: "renderSubMenuDesktop",
    value: function renderSubMenuDesktop(itemList) {
      var device = this.props.device;

      if (device.isMobile) {
        return null;
      }

      var childrenArray = Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Menu__WEBPACK_IMPORTED_MODULE_8__["getSortedItems"])(Object.values(itemList));
      return childrenArray.map(this.renderSubMenuDesktopItems);
    }
  }, {
    key: "renderAdditionalInformation",
    value: function renderAdditionalInformation() {
      var checkMobile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var device = this.props.device;

      if (checkMobile && !device.isMobile) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderStoreSwitcher(), this.renderPromotionCms())
      );
    }
  }, {
    key: "renderFirstLevelItems",
    value: function renderFirstLevelItems(item) {
      var _this$props4 = this.props,
          activeMenuItemsStack = _this$props4.activeMenuItemsStack,
          handleSubcategoryClick = _this$props4.handleSubcategoryClick,
          onCategoryHover = _this$props4.onCategoryHover,
          closeMenu = _this$props4.closeMenu,
          device = _this$props4.device;
      var children = item.children;
      var childrenArray = Object.values(children);
      var itemMods = {
        type: 'main'
      };

      if (childrenArray.length && device.isMobile) {
        return (
          /*#__PURE__*/
          _checkBEM(React, "div", {
            // TODO: split into smaller components
            // eslint-disable-next-line react/jsx-no-bind
            onClick: function onClick(e) {
              return handleSubcategoryClick(e, item);
            },
            tabIndex: "0",
            block: "Menu",
            elem: "SubCatLink",
            role: "button"
          },
          /*#__PURE__*/
          _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            activeMenuItemsStack: activeMenuItemsStack,
            item: item,
            itemMods: itemMods,
            onCategoryHover: onCategoryHover,
            closeMenu: closeMenu
          }), this.renderSubLevel(item))
        );
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          activeMenuItemsStack: activeMenuItemsStack,
          item: item,
          itemMods: itemMods,
          onCategoryHover: onCategoryHover,
          closeMenu: closeMenu,
          isLink: true
        })
      );
    }
  }, {
    key: "renderTopLevel",
    value: function renderTopLevel() {
      var menu = this.props.menu;
      var categoryArray = Object.values(menu);

      if (!categoryArray.length) {
        return null;
      }

      var _categoryArray = _slicedToArray(categoryArray, 1),
          _categoryArray$ = _categoryArray[0],
          children = _categoryArray$.children,
          mainCategoriesTitle = _categoryArray$.title;

      var childrenArray = Object(_app_design_frontend_Scandiweb_pwa_src_app_util_Menu__WEBPACK_IMPORTED_MODULE_8__["getSortedItems"])(Object.values(children));
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null,
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "MainCategories"
        },
        /*#__PURE__*/
        _checkBEM(React, "ul", {
          block: "Menu",
          elem: "ItemList",
          mods: {
            type: 'main'
          },
          "aria-label": mainCategoriesTitle
        }, childrenArray.map(this.renderFirstLevel)), this.renderAdditionalInformation(true)), this.renderSubMenuDesktop(children))
      );
    }
  }, {
    key: "renderStoreSwitcher",
    value: function renderStoreSwitcher() {
      var device = this.props.device;

      if (!device.isMobile) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_StoreSwitcher__WEBPACK_IMPORTED_MODULE_5__["default"], null)
      );
    }
  }, {
    key: "render",
    value: function render() {
      var closeMenu = this.props.closeMenu;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "Menu",
          elem: "MenuWrapper",
          onMouseLeave: closeMenu
        }, this.renderTopLevel())
      );
    }
  }]);

  return _Menu;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_Menu, 'name', {
  value: 'Menu'
});

var Menu = middleware(_Menu, "Component/Menu/Component");

_defineProperty(Menu, "propTypes", {
  menu: _app_design_frontend_Scandiweb_pwa_src_app_type_Menu__WEBPACK_IMPORTED_MODULE_7__["MenuType"].isRequired,
  activeMenuItemsStack: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array.isRequired,
  handleSubcategoryClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  closeMenu: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onCategoryHover: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  device: _app_design_frontend_Scandiweb_pwa_src_app_type_Device__WEBPACK_IMPORTED_MODULE_6__["DeviceType"].isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Menu);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/Menu/Menu.style.scss":
/*!**************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/Menu/Menu.style.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1607660877521
      var cssReload = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

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

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/MenuItem/MenuItem.container.js":
/*!************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/MenuItem/MenuItem.container.js ***!
  \************************************************************************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps, _MenuItemContainer, MenuItemContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(middleware, Extensible, React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MenuItemContainer", function() { return _MenuItemContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemContainer", function() { return MenuItemContainer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _MenuItem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem.component */ "../../../../../vendor/scandipwa/source/src/app/component/MenuItem/MenuItem.component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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




/** @namespace Component/Menu/Container/mapStateToProps */
// eslint-disable-next-line no-unused-vars

var mapStateToProps = middleware(function (state) {
  return {
    device: state.ConfigReducer.device
  };
}, "Component/Menu/Container/mapStateToProps");
/** @namespace Component/Menu/Container/mapDispatchToProps */
// eslint-disable-next-line no-unused-vars

var mapDispatchToProps = middleware(function (dispatch) {
  return {};
}, "Component/Menu/Container/mapDispatchToProps");
/** @namespace Component/MenuItem/Container/menuItemContainer */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _MenuItemContainer =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_MenuItemContainer, _Extensible);

  function _MenuItemContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _MenuItemContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_MenuItemContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "containerFunctions", {
      handleCategoryHover: _this.handleCategoryHover.bind(_assertThisInitialized(_this))
    });

    return _this;
  }

  _createClass(_MenuItemContainer, [{
    key: "handleCategoryHover",
    value: function handleCategoryHover() {
      var _this$props = this.props,
          onCategoryHover = _this$props.onCategoryHover,
          item = _this$props.item;
      onCategoryHover(item);
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, _MenuItem_component__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, this.containerFunctions))
      );
    }
  }]);

  return _MenuItemContainer;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_MenuItemContainer, 'name', {
  value: 'MenuItemContainer'
});

var MenuItemContainer = middleware(_MenuItemContainer, "Component/MenuItem/Container/menuItemContainer");

_defineProperty(MenuItemContainer, "propTypes", {
  onCategoryHover: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  item: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
});

_defineProperty(MenuItemContainer, "defaultProps", {
  onCategoryHover: function onCategoryHover() {}
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MenuItemContainer));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/component/MenuItem/index.js":
/*!***********************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/component/MenuItem/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuItem_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItem.container */ "../../../../../vendor/scandipwa/source/src/app/component/MenuItem/MenuItem.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuItem_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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


/***/ }),

/***/ "../../../../../vendor/scandipwa/source/src/app/type/Menu.js":
/*!********************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/type/Menu.js ***!
  \********************************************************************/
/*! exports provided: MenuItemType, MenuType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemType", function() { return MenuItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuType", function() { return MenuType; });
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

var MenuItemType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  item_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  is_active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  parent_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  position: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  item_class: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  url_type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  cms_page_identifier: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  category_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
var MenuType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  menu_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  is_active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  css_class: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  items: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(MenuItemType)
});

/***/ })

})
//# sourceMappingURL=bundle.b360868fee12273bb7ff.hot-update.js.map