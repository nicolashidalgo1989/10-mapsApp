import{I as a,J as c,K as f,N as n,f as r,g as p,h as i,p as m}from"./chunk-ZNA6C6LR.js";var M=[{path:"maps",loadChildren:()=>import("./chunk-ZPJDAJ42.js").then(o=>o.MapsModule)},{path:"**",redirectTo:"maps"}],d=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[n.forRoot(M),n]});let o=t;return o})();var u=(()=>{let t=class t{constructor(){this.title="mapsApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,g){e&1&&m(0,"router-outlet")},dependencies:[f]});let o=t;return o})();var h=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[u]}),t.\u0275inj=r({imports:[c,d]});let o=t;return o})();a().bootstrapModule(h).catch(o=>console.error(o));
