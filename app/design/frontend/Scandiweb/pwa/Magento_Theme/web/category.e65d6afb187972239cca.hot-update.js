webpackHotUpdate("category",{

/***/ "../../../../../vendor/scandipwa/source/src/app/route/CategoryPage/CategoryPage.component.js":
/*!****************************************************************************************************!*\
  !*** /var/www/public/vendor/scandipwa/source/src/app/route/CategoryPage/CategoryPage.component.js ***!
  \****************************************************************************************************/
/*! exports provided: _CategoryPage, CategoryPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Extensible, React, __, middleware) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CategoryPage", function() { return _CategoryPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategoryDetails */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryDetails/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryFilterOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategoryFilterOverlay */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryFilterOverlay_CategoryFilterOverlay_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.config */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryFilterOverlay/CategoryFilterOverlay.config.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryItemsCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategoryItemsCount */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryItemsCount/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryProductList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategoryProductList */ "../../../../../vendor/scandipwa/source/src/app/component/CategoryProductList/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_CategorySort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/CategorySort */ "../../../../../vendor/scandipwa/source/src/app/component/CategorySort/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_ContentWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/ContentWrapper */ "../../../../../vendor/scandipwa/source/src/app/component/ContentWrapper/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_component_Html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/component/Html */ "../../../../../vendor/scandipwa/source/src/app/component/Html/index.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Category__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Category */ "../../../../../vendor/scandipwa/source/src/app/type/Category.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_Device__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/Device */ "../../../../../vendor/scandipwa/source/src/app/type/Device.js");
/* harmony import */ var _app_design_frontend_Scandiweb_pwa_src_app_type_ProductList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../app/design/frontend/Scandiweb/pwa/src/app/type/ProductList */ "../../../../../vendor/scandipwa/source/src/app/type/ProductList.js");
/* harmony import */ var _CategoryPage_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CategoryPage.style */ "../../../../../vendor/scandipwa/source/src/app/route/CategoryPage/CategoryPage.style.scss");
/* harmony import */ var _CategoryPage_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_CategoryPage_style__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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















/** @namespace Route/CategoryPage/Component */

var _checkBEM = __webpack_require__(/*! babel-plugin-transform-rebem-jsx */ "./node_modules/babel-plugin-transform-rebem-jsx/build/index.js").checkBEMProps;

var _CategoryPage =
/*#__PURE__*/
function (_Extensible) {
  _inherits(_CategoryPage, _Extensible);

  function _CategoryPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _CategoryPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_CategoryPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onFilterButtonClick", _this.onFilterButtonClick.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(_CategoryPage, [{
    key: "onFilterButtonClick",
    value: function onFilterButtonClick() {
      var toggleOverlayByKey = this.props.toggleOverlayByKey;
      toggleOverlayByKey(_app_design_frontend_Scandiweb_pwa_src_app_component_CategoryFilterOverlay_CategoryFilterOverlay_config__WEBPACK_IMPORTED_MODULE_4__["CATEGORY_FILTER_OVERLAY_ID"]);
    }
  }, {
    key: "renderCategoryDetails",
    value: function renderCategoryDetails() {
      var category = this.props.category;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
          category: category
        })
      );
    }
  }, {
    key: "renderCategoryType",
    value: function renderCategoryType() {
      var category = this.props.category;
      return (
        /*#__PURE__*/
        _checkBEM(React, CategoryType, {
          category: category
        })
      );
    }
  }, {
    key: "renderFilterButton",
    value: function renderFilterButton() {
      var _this$props = this.props,
          isContentFiltered = _this$props.isContentFiltered,
          totalPages = _this$props.totalPages;

      if (!isContentFiltered && totalPages === 0) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "button", {
          block: "CategoryPage",
          elem: "Filter",
          onClick: this.onFilterButtonClick
        }, __('Filter'))
      );
    }
  }, {
    key: "renderFilterOverlay",
    value: function renderFilterOverlay() {
      var _this$props2 = this.props,
          filters = _this$props2.filters,
          selectedFilters = _this$props2.selectedFilters,
          isMatchingInfoFilter = _this$props2.isMatchingInfoFilter;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryFilterOverlay__WEBPACK_IMPORTED_MODULE_3__["default"], {
          availableFilters: filters,
          customFiltersValues: selectedFilters,
          isMatchingInfoFilter: isMatchingInfoFilter
        })
      );
    }
  }, {
    key: "renderCategorySort",
    value: function renderCategorySort() {
      var _this$props3 = this.props,
          sortFields = _this$props3.sortFields,
          selectedSort = _this$props3.selectedSort,
          onSortChange = _this$props3.onSortChange,
          isMatchingInfoFilter = _this$props3.isMatchingInfoFilter;
      var _sortFields$options = sortFields.options,
          options = _sortFields$options === void 0 ? {} : _sortFields$options;
      var updatedSortFields = Object.values(options).map(function (_ref) {
        var id = _ref.value,
            label = _ref.label;
        return {
          id: id,
          label: label
        };
      });
      var sortDirection = selectedSort.sortDirection,
          sortKey = selectedSort.sortKey;
      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CategorySort__WEBPACK_IMPORTED_MODULE_7__["default"], {
          isMatchingInfoFilter: isMatchingInfoFilter,
          onSortChange: onSortChange,
          sortFields: updatedSortFields,
          sortKey: sortKey,
          sortDirection: sortDirection
        })
      );
    }
  }, {
    key: "renderItemsCount",
    value: function renderItemsCount() {
      var isVisibleOnMobile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props4 = this.props,
          isMatchingListFilter = _this$props4.isMatchingListFilter,
          device = _this$props4.device;

      if (isVisibleOnMobile && !device.isMobile) {
        return null;
      }

      if (!isVisibleOnMobile && device.isMobile) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryItemsCount__WEBPACK_IMPORTED_MODULE_5__["default"], {
          isMatchingListFilter: isMatchingListFilter
        })
      );
    }
  }, {
    key: "renderCategoryProductList",
    value: function renderCategoryProductList() {
      var _this$props5 = this.props,
          filter = _this$props5.filter,
          search = _this$props5.search,
          selectedSort = _this$props5.selectedSort,
          selectedFilters = _this$props5.selectedFilters,
          isMatchingListFilter = _this$props5.isMatchingListFilter,
          isMatchingInfoFilter = _this$props5.isMatchingInfoFilter;
      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CategoryPage",
          elem: "ProductListWrapper"
        }, this.renderItemsCount(true),
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_CategoryProductList__WEBPACK_IMPORTED_MODULE_6__["default"], {
          filter: filter,
          search: search,
          sort: selectedSort,
          selectedFilters: selectedFilters,
          isMatchingListFilter: isMatchingListFilter,
          isMatchingInfoFilter: isMatchingInfoFilter
        }))
      );
    }
  }, {
    key: "renderCmsBlock",
    value: function renderCmsBlock() {
      var cms_block = this.props.category.cms_block;

      if (!cms_block) {
        return null;
      }

      var content = cms_block.content,
          disabled = cms_block.disabled;

      if (disabled) {
        return null;
      }

      return (
        /*#__PURE__*/
        _checkBEM(React, "div", {
          block: "CategoryPage",
          elem: "CMS"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_Html__WEBPACK_IMPORTED_MODULE_9__["default"], {
          content: content
        }))
      );
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      return (
        /*#__PURE__*/
        _checkBEM(React, React.Fragment, null, this.renderFilterOverlay(), this.renderCategoryDetails(), this.renderCategoryType(), this.renderCmsBlock(),
        /*#__PURE__*/
        _checkBEM(React, "aside", {
          block: "CategoryPage",
          elem: "Miscellaneous"
        }, this.renderItemsCount(), this.renderCategorySort(), this.renderFilterButton()), this.renderCategoryProductList())
      );
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/
        _checkBEM(React, "main", {
          block: "CategoryPage"
        },
        /*#__PURE__*/
        _checkBEM(React, _app_design_frontend_Scandiweb_pwa_src_app_component_ContentWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
          wrapperMix: {
            block: 'CategoryPage',
            elem: 'Wrapper'
          },
          label: "Category page"
        }, this.renderContent()))
      );
    }
  }]);

  return _CategoryPage;
}(Extensible(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
Object.defineProperty(_CategoryPage, 'name', {
  value: 'CategoryPage'
});

var CategoryPage = middleware(_CategoryPage, "Route/CategoryPage/Component");

_defineProperty(CategoryPage, "propTypes", {
  category: _app_design_frontend_Scandiweb_pwa_src_app_type_Category__WEBPACK_IMPORTED_MODULE_10__["CategoryTreeType"].isRequired,
  filters: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape).isRequired,
  sortFields: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    options: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array
  }).isRequired,
  selectedSort: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['ASC', 'DESC']),
    sortKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }).isRequired,
  onSortChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  toggleOverlayByKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectedFilters: _app_design_frontend_Scandiweb_pwa_src_app_type_ProductList__WEBPACK_IMPORTED_MODULE_12__["FilterType"].isRequired,
  filter: _app_design_frontend_Scandiweb_pwa_src_app_type_ProductList__WEBPACK_IMPORTED_MODULE_12__["FilterInputType"].isRequired,
  search: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  isContentFiltered: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isMatchingListFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isMatchingInfoFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  totalPages: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  device: _app_design_frontend_Scandiweb_pwa_src_app_type_Device__WEBPACK_IMPORTED_MODULE_11__["DeviceType"].isRequired
});

_defineProperty(CategoryPage, "defaultProps", {
  isContentFiltered: true,
  isMatchingListFilter: false,
  isMatchingInfoFilter: false,
  totalPages: 1,
  search: ''
});

/* harmony default export */ __webpack_exports__["default"] = (CategoryPage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/config/Extensibility/Middleware/Extensible */ "./src/config/Extensibility/Middleware/Extensible.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./src/config/TranslationFunction */ "./src/config/TranslationFunction/index.js"), __webpack_require__(/*! ./src/config/Extensibility/Middleware */ "./src/config/Extensibility/Middleware/index.js")))

/***/ })

})
//# sourceMappingURL=category.e65d6afb187972239cca.hot-update.js.map