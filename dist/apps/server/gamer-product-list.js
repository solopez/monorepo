exports.ids = ["gamer-product-list"];
exports.modules = {

/***/ "j/gP":
/*!**************************************************************************!*\
  !*** ./libs/product-list/src/lib/product-list/product-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _apps_gamer_src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../apps/gamer/src/app/services/product.service */ "WFtJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0) { return [a0]; };
function ProductListComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "product-", item_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, "/items/" + item_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, item_r3.price.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.city);
} }
function ProductListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductListComponent_div_0_ng_container_2_Template, 20, 10, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function ProductListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Try another one!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductListComponent {
    constructor(activatedRoute, router, productService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((param) => {
            if (param && param.search) {
                this.getProducts(param.search);
            }
            else {
                this.router.navigate(['']);
            }
        });
    }
    getProducts(query) {
        this.productService.getProducts(query).subscribe((data) => {
            this.items = data.items;
        }, (error) => {
            this.router.navigate(['']);
        });
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apps_gamer_src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["gamer-product-list"]], decls: 2, vars: 2, consts: [["class", "row no-gutters product-list", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "row", "no-gutters", "product-list"], [1, "col-md-10", "product-list__wrapper"], [4, "ngFor", "ngForOf"], [3, "routerLink", "id"], [1, "row"], [1, "col-md-9", "d-md-inline-flex"], [1, "product-list__image__wrapper"], ["alt", "product items", 1, "product-list__image", 3, "src"], [1, "product-list__content"], [1, "product-list__content__price", "d-inline-block"], [1, "product-list__content__icon"], [1, "fa-solid", "fa-truck-fast"], [1, "fa-solid", "fa-cart-plus"], [1, "product-list__content__title"], [1, "col-md-3", "product-list__location", "d-md-inline-flex"], [1, "product-list__location__content"], [1, "product-list__line"], [1, "container"], [1, "text-center"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductListComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductListComponent_div_1_Template, 4, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.items == null ? null : ctx.items.length));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".product-list__wrapper[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 auto;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n.product-list__wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n}\n@media only screen and (min-width: 768px) {\n  .product-list__wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.product-list__location[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999999;\n  margin: 1rem auto;\n}\n@media only screen and (min-width: 992px) {\n  .product-list__location[_ngcontent-%COMP%] {\n    margin: 2.8rem 0;\n  }\n}\n.product-list__location__content[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 1rem 1.5rem;\n}\n@media only screen and (min-width: 768px) {\n  .product-list__location__content[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.product-list__icon[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.product-list__image[_ngcontent-%COMP%] {\n  margin: 1rem;\n  border-radius: 4px;\n  width: 250px;\n}\n.product-list__image__wrapper[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n.product-list__content[_ngcontent-%COMP%] {\n  color: #000000;\n  padding: 1.5rem;\n}\n@media only screen and (min-width: 768px) {\n  .product-list__content[_ngcontent-%COMP%] {\n    padding: 0;\n    width: 100%;\n  }\n}\n.product-list__content[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.product-list__content__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.product-list__content__icon[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n  margin-left: 1rem;\n  color: #c6ff00;\n  font-size: 20px;\n  vertical-align: inherit;\n}\n.product-list__content__price[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-bottom: 2rem;\n  margin-top: 2rem;\n}\n@media only screen and (min-width: 768px) {\n  .product-list__content__price[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.product-list__line[_ngcontent-%COMP%] {\n  color: #999999;\n  width: 96%;\n  margin: 0 auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gamer-product-list',
                templateUrl: './product-list.component.html',
                styleUrls: ['./product-list.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _apps_gamer_src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "o70o":
/*!**********************************************************!*\
  !*** ./libs/product-list/src/lib/product-list.module.ts ***!
  \**********************************************************/
/*! exports provided: ProductListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListModule", function() { return ProductListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ "j/gP");
/* harmony import */ var _product_list_product_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.routing.module */ "rTjr");





class ProductListModule {
}
ProductListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductListModule });
ProductListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductListModule_Factory(t) { return new (t || ProductListModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_list_product_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductListRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductListModule, { declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_list_product_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductListRoutingModule"]], exports: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_list_product_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductListRoutingModule"]],
                declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]],
                exports: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "rTjr":
/*!*******************************************************************************!*\
  !*** ./libs/product-list/src/lib/product-list/product-list.routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListRoutingModule", function() { return ProductListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component */ "j/gP");





const routes = [{ path: '', component: _product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"] }];
class ProductListRoutingModule {
}
ProductListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductListRoutingModule });
ProductListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductListRoutingModule_Factory(t) { return new (t || ProductListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w3kc":
/*!****************************************!*\
  !*** ./libs/product-list/src/index.ts ***!
  \****************************************/
/*! exports provided: ProductListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_product_list_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/product-list.module */ "o70o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductListModule", function() { return _lib_product_list_module__WEBPACK_IMPORTED_MODULE_0__["ProductListModule"]; });




/***/ })

};;