(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{w3kc:function(t,n,i){"use strict";i.r(n),i.d(n,"ProductListModule",function(){return l});var o=i("ofXK"),e=i("tyNb"),c=i("WFtJ"),r=i("fXoL");const d=function(t){return[t]};function s(t,n){if(1&t&&(r.Pb(0),r.Rb(1,"a",5),r.Rb(2,"div",6),r.Rb(3,"div",7),r.Rb(4,"div",8),r.Nb(5,"img",9),r.Qb(),r.Rb(6,"div",10),r.Rb(7,"span",11),r.nc(8),r.bc(9,"currency"),r.Qb(),r.Rb(10,"span",12),r.Nb(11,"i",13),r.Nb(12,"i",14),r.Qb(),r.Rb(13,"div"),r.Rb(14,"span",15),r.nc(15),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Nb(16,"hr",16),r.Qb(),r.Ob()),2&t){const t=n.$implicit;r.Cb(1),r.fc("id","product-",t.id,""),r.dc("routerLink",r.hc(7,d,"/items/"+t.id)),r.Cb(4),r.ec("src",t.thumbnail,r.kc),r.Cb(3),r.oc(r.cc(9,5,t.price.amount)),r.Cb(7),r.oc(t.title)}}function a(t,n){if(1&t&&(r.Rb(0,"div",2),r.Rb(1,"div",3),r.mc(2,s,17,9,"ng-container",4),r.Qb(),r.Qb()),2&t){const t=r.ac();r.Cb(2),r.dc("ngForOf",t.items)}}function _(t,n){1&t&&(r.Rb(0,"div",17),r.Rb(1,"div",18),r.Rb(2,"h3"),r.nc(3,"Try another one!"),r.Qb(),r.Qb(),r.Qb())}const p=[{path:"",component:(()=>{class t{constructor(t,n,i){this.activatedRoute=t,this.router=n,this.productService=i}ngOnInit(){this.activatedRoute.queryParams.subscribe(t=>{t&&t.search?this.getProducts(t.search):this.router.navigate([""])})}getProducts(t){this.productService.getProducts(t).subscribe(t=>{this.items=t.items},()=>{this.router.navigate([""])})}}return t.\u0275fac=function(n){return new(n||t)(r.Mb(e.a),r.Mb(e.b),r.Mb(c.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["gamer-product-list"]],decls:2,vars:2,consts:[["class","row no-gutters product-list",4,"ngIf"],["class","container",4,"ngIf"],[1,"row","no-gutters","product-list"],[1,"col-md-10","product-list__wrapper"],[4,"ngFor","ngForOf"],[3,"routerLink","id"],[1,"row","no-gutters","product-list__wrapper__item"],[1,"col-md-9","d-md-inline-flex"],[1,"product-list__image__wrapper"],["alt","product items",1,"product-list__image",3,"src"],[1,"product-list__content"],[1,"product-list__content__price","d-inline-block"],[1,"product-list__content__icon"],[1,"fa-solid","fa-truck-fast"],[1,"fa-solid","fa-cart-plus"],[1,"product-list__content__title"],[1,"product-list__line"],[1,"container"],[1,"text-center"]],template:function(t,n){1&t&&(r.mc(0,a,3,1,"div",0),r.mc(1,_,4,0,"div",1)),2&t&&(r.dc("ngIf",n.items),r.Cb(1),r.dc("ngIf",!(null!=n.items&&n.items.length)))},directives:[o.j,o.i,e.d],pipes:[o.c],styles:[".product-list__wrapper[_ngcontent-%COMP%]{padding:0;margin:0 auto;background-color:#fff;border-radius:4px;width:90%}.product-list__wrapper__item[_ngcontent-%COMP%]:hover{background:#a80077;background:linear-gradient(90deg,#6f0,#a80077);box-shadow:1px 1px 30px #fff;border-radius:4px}@media only screen and (min-width:768px){.product-list__wrapper[_ngcontent-%COMP%]{width:100%}}.product-list__action[_ngcontent-%COMP%]{font-size:12px;color:#999;margin:1rem auto}@media only screen and (min-width:992px){.product-list__action[_ngcontent-%COMP%]{margin:2.8rem 0}}.product-list__action__content[_ngcontent-%COMP%]{text-align:left;padding:1rem 1.5rem}@media only screen and (min-width:768px){.product-list__action__content[_ngcontent-%COMP%]{padding:0}}.product-list__action__button[_ngcontent-%COMP%]{width:100%;margin-top:1.6rem;border:0;height:3rem;background:#b1ff00;background:linear-gradient(90deg,#020024,#92cadf 0,#b1ff00 54%);font-weight:700;font-size:20px}.product-list__action__button[_ngcontent-%COMP%]:hover, .product-list__action__button[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .product-list__action__button[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active{background:linear-gradient(90deg,#000,#6bb7d3 0,#8ecc00 54%)}.product-list__icon[_ngcontent-%COMP%]{width:20px}.product-list__image[_ngcontent-%COMP%]{margin:1rem;border-radius:4px;width:250px}.product-list__image__wrapper[_ngcontent-%COMP%]{border-radius:4px}.product-list__content[_ngcontent-%COMP%]{color:#000;padding:1.5rem}@media only screen and (min-width:768px){.product-list__content[_ngcontent-%COMP%]{padding:0;width:100%}}.product-list__content[_ngcontent-%COMP%]:hover{text-decoration:none}.product-list__content__title[_ngcontent-%COMP%]{font-size:18px}.product-list__content__icon[_ngcontent-%COMP%]{vertical-align:text-bottom;margin-left:1rem;color:#c6ff00;font-size:20px;vertical-align:inherit}.product-list__content__price[_ngcontent-%COMP%]{font-size:20px;padding-bottom:2rem;margin-top:2rem}@media only screen and (min-width:768px){.product-list__content__price[_ngcontent-%COMP%]{font-size:24px}}.product-list__line[_ngcontent-%COMP%]{color:#999;width:96%;margin:0 auto}"]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(n){return new(n||t)},imports:[[e.e.forChild(p)],e.e]}),t})(),l=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(n){return new(n||t)},imports:[[o.b,u]]}),t})()}}]);