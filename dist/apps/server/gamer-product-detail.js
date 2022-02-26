exports.ids = ["gamer-product-detail"];
exports.modules = {

/***/ "5E2X":
/*!********************************************************************************!*\
  !*** ./libs/product-detail/src/lib/product-detail/product-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _apps_gamer_src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../apps/gamer/src/app/services/product.service */ "WFtJ");
/* harmony import */ var _condition_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condition.enum */ "UWYI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ProductDetailComponent_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", ctx_r2.item.sold_quantity, " vendidos");
} }
function ProductDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductDetailComponent_div_1_span_8_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Buy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.item.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.conditions[ctx_r0.item.condition], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.sold_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx_r0.item.price.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.short_description, " ");
} }
function ProductDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
} }
class ProductDetailComponent {
    constructor(activatedRoute, productService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.conditions = _condition_enum__WEBPACK_IMPORTED_MODULE_3__["CONDITIONS"];
        this.error = '';
    }
    ngOnInit() {
        this.getProduct();
    }
    getProduct() {
        const id = this.activatedRoute.snapshot.params.id;
        this.productService.getProduct(id).subscribe((data) => {
            this.item = data.item;
        }, () => {
            this.error = 'Something went wrong. Please try again later.';
        });
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_apps_gamer_src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["gamer-product-detail"]], decls: 3, vars: 2, consts: [[1, "row", "no-gutters", "product-detail"], ["class", "col-md-10 product-detail__wrapper", 4, "ngIf"], ["class", "row p-3 error-container", 4, "ngIf"], [1, "col-md-10", "product-detail__wrapper"], [1, "row"], [1, "col-md-8", "text-center", "text-md-left"], ["alt", "product picture", 1, "product-detail__image", 3, "src"], [1, "col-md-4"], [1, "product-detail__condition"], [4, "ngIf"], [1, "product-detail__title"], [1, "product-detail__price"], ["type", "button", "id", "buy", 1, "btn", "btn-primary", "product-detail__button"], [1, "col-md-12", "product-detail__description"], [1, "product-detail__description__content"], [1, "row", "p-3", "error-container"], ["role", "alert", 1, "col-md-10", "error-container__alert", "alert", "alert-danger"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_1_Template, 20, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_2_Template, 3, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".product-detail__wrapper[_ngcontent-%COMP%] {\n  padding: 2rem;\n  margin: 0 auto;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n@media only screen and (min-width: 768px) {\n  .product-detail__wrapper[_ngcontent-%COMP%] {\n    min-height: 23rem;\n  }\n}\n.product-detail__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  padding-bottom: 2rem;\n  margin-bottom: 0;\n}\n.product-detail__condition[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  font-size: 14px;\n  margin-bottom: 1rem;\n}\n.product-detail__price[_ngcontent-%COMP%] {\n  font-size: 46px;\n  padding-bottom: 2rem;\n}\n@media only screen and (min-width: 768px) {\n  .product-detail__price[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n@media only screen and (min-width: 992px) {\n  .product-detail__price[_ngcontent-%COMP%] {\n    font-size: 46px;\n  }\n}\n.product-detail__description[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  padding: 1rem;\n}\n@media only screen and (min-width: 992px) {\n  .product-detail__description[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n.product-detail__description__title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  padding-bottom: 2rem;\n  margin-bottom: 0;\n}\n.product-detail__description__content[_ngcontent-%COMP%] {\n  color: #999999;\n  font-size: 16px;\n  margin-bottom: 0;\n  max-height: 15rem;\n  overflow: hidden;\n}\n.product-detail__image[_ngcontent-%COMP%] {\n  max-height: 28rem;\n  max-width: 18rem;\n}\n@media only screen and (min-width: 992px) {\n  .product-detail__image[_ngcontent-%COMP%] {\n    max-width: initial;\n  }\n}\n.product-detail__button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1.6rem;\n  border: 0;\n  height: 3rem;\n  background: #020024;\n  background: linear-gradient(90deg, #020024 0%, #92cadf 0%, #b1ff00 54%);\n  font-weight: bold;\n  font-size: 20px;\n}\n.product-detail__button[_ngcontent-%COMP%]:hover, .product-detail__button[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .product-detail__button[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\n  background-color: #9ecc00;\n}\n.error-container__alert[_ngcontent-%COMP%] {\n  padding: 2rem;\n  margin: 0 auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gamer-product-detail',
                templateUrl: './product-detail.component.html',
                styleUrls: ['./product-detail.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _apps_gamer_src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "TOzO":
/*!*************************************************************************************!*\
  !*** ./libs/product-detail/src/lib/product-detail/product-detail.routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailRoutingModule", function() { return ProductDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail.component */ "5E2X");





const routes = [{ path: '', component: _product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"] }];
class ProductDetailRoutingModule {
}
ProductDetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductDetailRoutingModule });
ProductDetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductDetailRoutingModule_Factory(t) { return new (t || ProductDetailRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductDetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "UWYI":
/*!**********************************************************************!*\
  !*** ./libs/product-detail/src/lib/product-detail/condition.enum.ts ***!
  \**********************************************************************/
/*! exports provided: CONDITIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONDITIONS", function() { return CONDITIONS; });
var CONDITIONS;
(function (CONDITIONS) {
    CONDITIONS["new"] = "Nuevo";
    CONDITIONS["used"] = "Usado";
})(CONDITIONS || (CONDITIONS = {}));


/***/ }),

/***/ "p3VP":
/*!******************************************!*\
  !*** ./libs/product-detail/src/index.ts ***!
  \******************************************/
/*! exports provided: ProductDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_product_detail_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/product-detail.module */ "qPxi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function() { return _lib_product_detail_module__WEBPACK_IMPORTED_MODULE_0__["ProductDetailModule"]; });




/***/ }),

/***/ "qPxi":
/*!**************************************************************!*\
  !*** ./libs/product-detail/src/lib/product-detail.module.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function() { return ProductDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "5E2X");
/* harmony import */ var _product_detail_product_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail/product-detail.routing.module */ "TOzO");





class ProductDetailModule {
}
ProductDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductDetailModule });
ProductDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductDetailModule_Factory(t) { return new (t || ProductDetailModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_detail_product_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductDetailRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductDetailModule, { declarations: [_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_detail_product_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductDetailRoutingModule"]], exports: [_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_detail_product_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductDetailRoutingModule"]],
                declarations: [_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"]],
                exports: [_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"]],
            }]
    }], null, null); })();


/***/ })

};;