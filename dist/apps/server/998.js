"use strict";
exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 5998:
/*!************************************************!*\
  !*** ./libs/games/product-detail/src/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesProductDetailModule": () => (/* reexport safe */ _lib_games_product_detail_module__WEBPACK_IMPORTED_MODULE_0__.GamesProductDetailModule)
/* harmony export */ });
/* harmony import */ var _lib_games_product_detail_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/games-product-detail.module */ 9344);



/***/ }),

/***/ 9344:
/*!**************************************************************************!*\
  !*** ./libs/games/product-detail/src/lib/games-product-detail.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesProductDetailModule": () => (/* binding */ GamesProductDetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 168);
/* harmony import */ var _product_detail_product_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail/product-detail.routing.module */ 9737);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui */ 9142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);





class GamesProductDetailModule {
}
GamesProductDetailModule.ɵfac = function GamesProductDetailModule_Factory(t) { return new (t || GamesProductDetailModule)(); };
GamesProductDetailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GamesProductDetailModule });
GamesProductDetailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _product_detail_product_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.GamesProductDetailRoutingModule, _ui__WEBPACK_IMPORTED_MODULE_2__.SolButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GamesProductDetailModule, { declarations: [_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_0__.GamesProductDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _product_detail_product_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.GamesProductDetailRoutingModule, _ui__WEBPACK_IMPORTED_MODULE_2__.SolButtonModule], exports: [_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_0__.GamesProductDetailComponent] }); })();


/***/ }),

/***/ 6832:
/*!****************************************************************************!*\
  !*** ./libs/games/product-detail/src/lib/product-detail/condition.enum.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONDITIONS": () => (/* binding */ CONDITIONS)
/* harmony export */ });
var CONDITIONS;
(function (CONDITIONS) {
    CONDITIONS["new"] = "Nuevo";
    CONDITIONS["used"] = "Usado";
})(CONDITIONS || (CONDITIONS = {}));


/***/ }),

/***/ 168:
/*!**************************************************************************************!*\
  !*** ./libs/games/product-detail/src/lib/product-detail/product-detail.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesProductDetailComponent": () => (/* binding */ GamesProductDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 6857);
/* harmony import */ var _games_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @games/services */ 383);
/* harmony import */ var _condition_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./condition.enum */ 6832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ui_src_lib_components_sol_button_sol_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ui/src/lib/components/sol-button/sol-button.component */ 8165);










function GamesProductDetailComponent_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("- ", ctx_r2.item.sold_quantity, " vendidos");
} }
function GamesProductDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, GamesProductDetailComponent_div_1_span_8_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "sol-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("clicked", function GamesProductDetailComponent_div_1_Template_sol_button_clicked_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.item.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.conditions[ctx_r0.item.condition], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.item.sold_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 7, ctx_r0.item.price.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.item.short_description, " ");
} }
function GamesProductDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
} }
let GamesProductDetailComponent = class GamesProductDetailComponent {
    constructor(activatedRoute, productService, cartService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.cartService = cartService;
        this.conditions = _condition_enum__WEBPACK_IMPORTED_MODULE_1__.CONDITIONS;
        this.error = '';
    }
    ngOnInit() {
        this.getProduct();
        this.cartService.itemsChanged
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this))
            .subscribe((item) => (this.inCart = item));
    }
    getProduct() {
        const id = this.activatedRoute.snapshot.params.id;
        this.productService.getProduct(id).subscribe((data) => {
            this.item = data.item;
        }, () => {
            this.error = 'Something went wrong. Please try again later.';
        });
    }
    addToCart() {
        this.cartService.add(this.item);
    }
};
GamesProductDetailComponent.ɵfac = function GamesProductDetailComponent_Factory(t) { return new (t || GamesProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_games_services__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_games_services__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
GamesProductDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GamesProductDetailComponent, selectors: [["games-product-detail"]], decls: 3, vars: 2, consts: [[1, "row", "no-gutters", "product-detail"], ["class", "col-md-10 product-detail__wrapper", 4, "ngIf"], ["class", "row p-3 error-container", 4, "ngIf"], [1, "col-md-10", "product-detail__wrapper"], [1, "row"], [1, "col-md-8", "text-center", "text-md-left"], ["alt", "product picture", 1, "product-detail__image", 3, "src"], [1, "col-md-4"], [1, "product-detail__condition"], [4, "ngIf"], [1, "product-detail__title"], [1, "product-detail__price"], ["id", "add", 1, "add-gradient", 3, "title", "clicked"], [1, "col-md-12", "product-detail__description"], [1, "product-detail__description__content"], [1, "row", "p-3", "error-container"], ["role", "alert", 1, "col-md-10", "error-container__alert", "alert", "alert-danger"]], template: function GamesProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GamesProductDetailComponent_div_1_Template, 19, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GamesProductDetailComponent_div_2_Template, 3, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ui_src_lib_components_sol_button_sol_button_component__WEBPACK_IMPORTED_MODULE_2__.SolButtonComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe], styles: [".product-detail__wrapper[_ngcontent-%COMP%] {\n  padding: 2rem;\n  margin: 0 auto;\n  background-color: white;\n  border-radius: 4px;\n}\n@media only screen and (min-width: 768px) {\n  .product-detail__wrapper[_ngcontent-%COMP%] {\n    min-height: 23rem;\n  }\n}\n.product-detail__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  padding-bottom: 2rem;\n  margin-bottom: 0;\n}\n.product-detail__condition[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  font-size: 14px;\n  margin-bottom: 1rem;\n}\n.product-detail__price[_ngcontent-%COMP%] {\n  font-size: 46px;\n  padding-bottom: 2rem;\n}\n@media only screen and (min-width: 768px) {\n  .product-detail__price[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n@media only screen and (min-width: 992px) {\n  .product-detail__price[_ngcontent-%COMP%] {\n    font-size: 46px;\n  }\n}\n.product-detail__description[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  padding: 1rem;\n}\n@media only screen and (min-width: 992px) {\n  .product-detail__description[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n.product-detail__description__title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  padding-bottom: 2rem;\n  margin-bottom: 0;\n}\n.product-detail__description__content[_ngcontent-%COMP%] {\n  color: #999999;\n  font-size: 16px;\n  margin-bottom: 0;\n  max-height: 15rem;\n  overflow: hidden;\n}\n.product-detail__image[_ngcontent-%COMP%] {\n  max-height: 28rem;\n  max-width: 18rem;\n}\n@media only screen and (min-width: 992px) {\n  .product-detail__image[_ngcontent-%COMP%] {\n    max-width: initial;\n  }\n}\n.error-container__alert[_ngcontent-%COMP%] {\n  padding: 2rem;\n  margin: 0 auto;\n}"] });
GamesProductDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute,
        _games_services__WEBPACK_IMPORTED_MODULE_0__.ProductService,
        _games_services__WEBPACK_IMPORTED_MODULE_0__.CartService])
], GamesProductDetailComponent);



/***/ }),

/***/ 9737:
/*!*******************************************************************************************!*\
  !*** ./libs/games/product-detail/src/lib/product-detail/product-detail.routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesProductDetailRoutingModule": () => (/* binding */ GamesProductDetailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ui */ 9142);
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.component */ 168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [{ path: '', component: _product_detail_component__WEBPACK_IMPORTED_MODULE_1__.GamesProductDetailComponent }];
class GamesProductDetailRoutingModule {
}
GamesProductDetailRoutingModule.ɵfac = function GamesProductDetailRoutingModule_Factory(t) { return new (t || GamesProductDetailRoutingModule)(); };
GamesProductDetailRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GamesProductDetailRoutingModule });
GamesProductDetailRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _ui__WEBPACK_IMPORTED_MODULE_0__.SolButtonModule], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GamesProductDetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ui__WEBPACK_IMPORTED_MODULE_0__.SolButtonModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 9142:
/*!******************************!*\
  !*** ./libs/ui/src/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesUiModule": () => (/* reexport safe */ _lib_games_ui_module__WEBPACK_IMPORTED_MODULE_0__.GamesUiModule),
/* harmony export */   "SolButtonModule": () => (/* reexport safe */ _lib_components_sol_button_sol_button_module__WEBPACK_IMPORTED_MODULE_1__.SolButtonModule),
/* harmony export */   "SolButtonComponent": () => (/* reexport safe */ _lib_components_sol_button_sol_button_component__WEBPACK_IMPORTED_MODULE_2__.SolButtonComponent)
/* harmony export */ });
/* harmony import */ var _lib_games_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/games-ui.module */ 1674);
/* harmony import */ var _lib_components_sol_button_sol_button_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/sol-button/sol-button.module */ 4103);
/* harmony import */ var _lib_components_sol_button_sol_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components/sol-button/sol-button.component */ 8165);





/***/ }),

/***/ 8165:
/*!***********************************************************************!*\
  !*** ./libs/ui/src/lib/components/sol-button/sol-button.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolButtonComponent": () => (/* binding */ SolButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);



class SolButtonComponent {
    constructor() {
        this.buttonClass = 'btn-primary sol-button';
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    handleClick(e) {
        this.clicked.emit(e);
    }
}
SolButtonComponent.ɵfac = function SolButtonComponent_Factory(t) { return new (t || SolButtonComponent)(); };
SolButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SolButtonComponent, selectors: [["sol-button"]], inputs: { buttonClass: "buttonClass", title: "title" }, outputs: { clicked: "clicked" }, decls: 2, vars: 2, consts: [["type", "button", "id", "add", 1, "btn", "button", "sol-button", 3, "ngClass", "click"]], template: function SolButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SolButtonComponent_Template_button_click_0_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.buttonClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".add-gradient[_nghost-%COMP%]   .button[_ngcontent-%COMP%] {\n  background: #b1ff00;\n  background: linear-gradient(90deg, #020024 0%, #92cadf 0%, #b1ff00 54%);\n}\n.add-gradient[_nghost-%COMP%]   .button[_ngcontent-%COMP%]:hover, .add-gradient[_nghost-%COMP%]   .button[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .add-gradient[_nghost-%COMP%]   .button[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\n  background: #8ecc00;\n  background: linear-gradient(90deg, black 0%, #6bb7d3 0%, #8ecc00 54%);\n}\n.sol-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1.6rem;\n  border: 0;\n  height: 3rem;\n  font-weight: bold;\n  font-size: 20px;\n}"] });


/***/ }),

/***/ 4103:
/*!********************************************************************!*\
  !*** ./libs/ui/src/lib/components/sol-button/sol-button.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolButtonModule": () => (/* binding */ SolButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _sol_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sol-button.component */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class SolButtonModule {
}
SolButtonModule.ɵfac = function SolButtonModule_Factory(t) { return new (t || SolButtonModule)(); };
SolButtonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SolButtonModule });
SolButtonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SolButtonModule, { declarations: [_sol_button_component__WEBPACK_IMPORTED_MODULE_0__.SolButtonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_sol_button_component__WEBPACK_IMPORTED_MODULE_0__.SolButtonComponent] }); })();


/***/ }),

/***/ 1674:
/*!********************************************!*\
  !*** ./libs/ui/src/lib/games-ui.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesUiModule": () => (/* binding */ GamesUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);


class GamesUiModule {
}
GamesUiModule.ɵfac = function GamesUiModule_Factory(t) { return new (t || GamesUiModule)(); };
GamesUiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GamesUiModule });
GamesUiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GamesUiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule] }); })();


/***/ })

};
;