"use strict";(self.webpackChunkmonorepo=self.webpackChunkmonorepo||[]).push([[650],{650:(Z,u,i)=>{i.r(u),i.d(u,{GamesProductDetailModule:()=>v});var c=i(583),a=i(855),t=i(639);let p=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez]]}),e})();var m=i(762),g=i(728),s=i(6),l=(()=>{return(e=l||(l={})).new="Nuevo",e.used="Usado",l;var e})();let _=(()=>{class e{constructor(){this.buttonClass="btn-primary sol-button",this.clicked=new t.vpe}handleClick(n){this.clicked.emit(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["sol-button"]],inputs:{buttonClass:"buttonClass",title:"title"},outputs:{clicked:"clicked"},decls:2,vars:2,consts:[["type","button","id","add",1,"btn","button","sol-button",3,"ngClass","click"]],template:function(n,r){1&n&&(t.TgZ(0,"button",0),t.NdJ("click",function(M){return r.handleClick(M)}),t._uU(1),t.qZA()),2&n&&(t.Q6J("ngClass",r.buttonClass),t.xp6(1),t.hij(" ",r.title,"\n"))},directives:[c.mk],styles:[".add-gradient[_nghost-%COMP%]   .button[_ngcontent-%COMP%]{background:#b1ff00;background:linear-gradient(90deg,#020024 0%,#92cadf 0%,#b1ff00 54%)}.add-gradient[_nghost-%COMP%]   .button[_ngcontent-%COMP%]:hover, .add-gradient[_nghost-%COMP%]   .button[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .add-gradient[_nghost-%COMP%]   .button[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active{background:#8ecc00;background:linear-gradient(90deg,black 0%,#6bb7d3 0%,#8ecc00 54%)}.sol-button[_ngcontent-%COMP%]{width:100%;margin-top:1.6rem;border:0;height:3rem;font-weight:bold;font-size:20px}"]}),e})();function h(e,o){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.hij("- ",n.item.sold_quantity," vendidos")}}function f(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",3),t.TgZ(1,"div",4),t.TgZ(2,"div",5),t._UZ(3,"img",6),t.qZA(),t.TgZ(4,"div",7),t.TgZ(5,"div",8),t.TgZ(6,"span"),t._uU(7),t.qZA(),t.YNc(8,h,2,1,"span",9),t.qZA(),t.TgZ(9,"h1",10),t._uU(10),t.qZA(),t.TgZ(11,"span",11),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.TgZ(14,"sol-button",12),t.NdJ("clicked",function(){return t.CHM(n),t.oxw().addToCart()}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",4),t.TgZ(16,"div",13),t.TgZ(17,"p",14),t._uU(18),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.xp6(3),t.s9C("src",n.item.thumbnail,t.LSH),t.xp6(4),t.hij("",n.conditions[n.item.condition]," "),t.xp6(1),t.Q6J("ngIf",n.item.sold_quantity),t.xp6(2),t.Oqu(n.item.title),t.xp6(2),t.Oqu(t.lcZ(13,7,n.item.price.amount)),t.xp6(2),t.Q6J("title","Add to cart"),t.xp6(4),t.hij(" ",n.item.short_description," ")}}function C(e,o){if(1&e&&(t.TgZ(0,"div",15),t.TgZ(1,"div",16),t._uU(2),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.hij(" ",n.error," ")}}let d=class{constructor(o,n,r){this.activatedRoute=o,this.productService=n,this.cartService=r,this.conditions=l,this.error=""}ngOnInit(){this.getProduct(),this.cartService.itemsChanged.pipe((0,g.t)(this)).subscribe(o=>this.inCart=o)}getProduct(){this.productService.getProduct(this.activatedRoute.snapshot.params.id).subscribe(n=>{this.item=n.item},()=>{this.error="Something went wrong. Please try again later."})}addToCart(){this.cartService.add(this.item)}};d.\u0275fac=function(o){return new(o||d)(t.Y36(a.gz),t.Y36(s.M5),t.Y36(s.Ni))},d.\u0275cmp=t.Xpm({type:d,selectors:[["games-product-detail"]],decls:3,vars:2,consts:[[1,"row","no-gutters","product-detail"],["class","col-md-10 product-detail__wrapper",4,"ngIf"],["class","row p-3 error-container",4,"ngIf"],[1,"col-md-10","product-detail__wrapper"],[1,"row"],[1,"col-md-8","text-center","text-md-left"],["alt","product picture",1,"product-detail__image",3,"src"],[1,"col-md-4"],[1,"product-detail__condition"],[4,"ngIf"],[1,"product-detail__title"],[1,"product-detail__price"],["id","add",1,"add-gradient",3,"title","clicked"],[1,"col-md-12","product-detail__description"],[1,"product-detail__description__content"],[1,"row","p-3","error-container"],["role","alert",1,"col-md-10","error-container__alert","alert","alert-danger"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.YNc(1,f,19,9,"div",1),t.qZA(),t.YNc(2,C,3,1,"div",2)),2&o&&(t.xp6(1),t.Q6J("ngIf",n.item),t.xp6(1),t.Q6J("ngIf",n.error))},directives:[c.O5,_],pipes:[c.H9],styles:[".product-detail__wrapper[_ngcontent-%COMP%]{padding:2rem;margin:0 auto;background-color:#fff;border-radius:4px}@media only screen and (min-width: 768px){.product-detail__wrapper[_ngcontent-%COMP%]{min-height:23rem}}.product-detail__title[_ngcontent-%COMP%]{font-size:24px;font-weight:bold;padding-bottom:2rem;margin-bottom:0}.product-detail__condition[_ngcontent-%COMP%]{padding-top:2rem;font-size:14px;margin-bottom:1rem}.product-detail__price[_ngcontent-%COMP%]{font-size:46px;padding-bottom:2rem}@media only screen and (min-width: 768px){.product-detail__price[_ngcontent-%COMP%]{font-size:36px}}@media only screen and (min-width: 992px){.product-detail__price[_ngcontent-%COMP%]{font-size:46px}}.product-detail__description[_ngcontent-%COMP%]{bottom:0;left:0;padding:1rem}@media only screen and (min-width: 992px){.product-detail__description[_ngcontent-%COMP%]{padding:1.5rem}}.product-detail__description__title[_ngcontent-%COMP%]{font-size:28px;padding-bottom:2rem;margin-bottom:0}.product-detail__description__content[_ngcontent-%COMP%]{color:#999;font-size:16px;margin-bottom:0;max-height:15rem;overflow:hidden}.product-detail__image[_ngcontent-%COMP%]{max-height:28rem;max-width:18rem}@media only screen and (min-width: 992px){.product-detail__image[_ngcontent-%COMP%]{max-width:initial}}.error-container__alert[_ngcontent-%COMP%]{padding:2rem;margin:0 auto}"]}),d=(0,m.gn)([(0,g.c)(),(0,m.w6)("design:paramtypes",[a.gz,s.M5,s.Ni])],d);const b=[{path:"",component:d}];let P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(b),p],a.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,P,p]]}),e})()}}]);