"use strict";
exports.id = 877;
exports.ids = [877];
exports.modules = {

/***/ 5877:
/*!**********************************************!*\
  !*** ./libs/games/product-list/src/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesProductListModule": () => (/* reexport safe */ _lib_games_product_list_module__WEBPACK_IMPORTED_MODULE_0__.GamesProductListModule)
/* harmony export */ });
/* harmony import */ var _lib_games_product_list_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/games-product-list.module */ 2760);



/***/ }),

/***/ 2760:
/*!**********************************************************************!*\
  !*** ./libs/games/product-list/src/lib/games-product-list.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesProductListModule": () => (/* binding */ GamesProductListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list/product-list.component */ 3841);
/* harmony import */ var _product_list_product_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.routing.module */ 3301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class GamesProductListModule {
}
GamesProductListModule.ɵfac = function GamesProductListModule_Factory(t) { return new (t || GamesProductListModule)(); };
GamesProductListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GamesProductListModule });
GamesProductListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _product_list_product_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductListRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GamesProductListModule, { declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _product_list_product_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductListRoutingModule], exports: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent] }); })();


/***/ }),

/***/ 3841:
/*!********************************************************************************!*\
  !*** ./libs/games/product-list/src/lib/product-list/product-list.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _games_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @games/services */ 383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);






const _c0 = function (a0) { return [a0]; };
function ProductListComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "product-", item_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, "/items/" + item_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r3.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, item_r3.price.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.title);
} }
function ProductListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductListComponent_div_0_ng_container_2_Template, 17, 9, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function ProductListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Try another one!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
        }, () => {
            this.router.navigate(['']);
        });
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_games_services__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
ProductListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["games-product-list"]], decls: 2, vars: 2, consts: [["class", "row no-gutters product-list", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "row", "no-gutters", "product-list"], [1, "col-md-10", "product-list__wrapper"], [4, "ngFor", "ngForOf"], [3, "routerLink", "id"], [1, "row", "no-gutters", "product-list__wrapper__item"], [1, "col-md-9", "d-md-inline-flex"], [1, "product-list__image__wrapper"], ["alt", "product items", 1, "product-list__image", 3, "src"], [1, "product-list__content"], [1, "product-list__content__price", "d-inline-block"], [1, "product-list__content__icon"], [1, "fa-solid", "fa-truck-fast"], [1, "fa-solid", "fa-cart-plus"], [1, "product-list__content__title"], [1, "product-list__line"], [1, "container"], [1, "text-center"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductListComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductListComponent_div_1_Template, 4, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.items == null ? null : ctx.items.length));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], styles: [".product-list__wrapper[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 auto;\n  background-color: white;\n  border-radius: 4px;\n}\n.product-list__wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.product-list__wrapper__item[_ngcontent-%COMP%]:hover {\n  background: #a80077;\n  background: linear-gradient(to right, #66ff00, #a80077);\n  box-shadow: 1px 1px 30px white;\n  border-radius: 4px;\n}\n@media only screen and (min-width: 768px) {\n  .product-list__wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.product-list__action[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999999;\n  margin: 1rem auto;\n}\n@media only screen and (min-width: 992px) {\n  .product-list__action[_ngcontent-%COMP%] {\n    margin: 2.8rem 0;\n  }\n}\n.product-list__action__content[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 1rem 1.5rem;\n}\n@media only screen and (min-width: 768px) {\n  .product-list__action__content[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.product-list__action__button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1.6rem;\n  border: 0;\n  height: 3rem;\n  background: #b1ff00;\n  background: linear-gradient(90deg, #020024 0%, #92cadf 0%, #b1ff00 54%);\n  font-weight: bold;\n  font-size: 20px;\n}\n.product-list__action__button[_ngcontent-%COMP%]:hover, .product-list__action__button[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .product-list__action__button[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\n  background: linear-gradient(90deg, black 0%, #6bb7d3 0%, #8ecc00 54%);\n}\n.product-list__icon[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.product-list__image[_ngcontent-%COMP%] {\n  margin: 1rem;\n  border-radius: 4px;\n  width: 250px;\n}\n.product-list__image__wrapper[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n.product-list__content[_ngcontent-%COMP%] {\n  color: black;\n  padding: 1.5rem;\n}\n@media only screen and (min-width: 768px) {\n  .product-list__content[_ngcontent-%COMP%] {\n    padding: 0;\n    width: 100%;\n  }\n}\n.product-list__content[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.product-list__content__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.product-list__content__icon[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n  margin-left: 1rem;\n  color: #c6ff00;\n  font-size: 20px;\n  vertical-align: inherit;\n}\n.product-list__content__price[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-bottom: 2rem;\n  margin-top: 2rem;\n}\n@media only screen and (min-width: 768px) {\n  .product-list__content__price[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.product-list__line[_ngcontent-%COMP%] {\n  color: #999999;\n  width: 96%;\n  margin: 0 auto;\n}"] });


/***/ }),

/***/ 3301:
/*!*************************************************************************************!*\
  !*** ./libs/games/product-list/src/lib/product-list/product-list.routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListRoutingModule": () => (/* binding */ ProductListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list.component */ 3841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{ path: '', component: _product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent }];
class ProductListRoutingModule {
}
ProductListRoutingModule.ɵfac = function ProductListRoutingModule_Factory(t) { return new (t || ProductListRoutingModule)(); };
ProductListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProductListRoutingModule });
ProductListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ })

};
;