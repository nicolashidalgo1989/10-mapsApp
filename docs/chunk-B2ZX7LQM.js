import{B as c,C as g,F as k,I as y,M as C,N as F,O as M,g as u,k as a,l as f,m as p,n as o,o as i,r as v,x as s,z as m}from"./chunk-3YYMGOPF.js";var L=t=>[t];function S(t,e){if(t&1&&(o(0,"li",2),s(1),i()),t&2){let d=e.$implicit;p("routerLink",g(2,L,d.route)),a(),m(" ",d.name," ")}}var D=(()=>{let e=class e{constructor(){this.menuItems=[{route:"/maps/fullscreen",name:"Fullscreen"},{route:"/maps/zoom",name:"Zoom"},{route:"/maps/markers",name:"Markers"},{route:"/maps/properties",name:"Houses"},{route:"/alone",name:"Alone"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["side-menu"]],standalone:!0,features:[c],decls:2,vars:1,consts:[[1,"list-group"],["routerLinkActive","active","class","list-group-item",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink"]],template:function(n,r){n&1&&(o(0,"ul",0),f(1,S,2,4,"li",1),i()),n&2&&(a(),p("ngForOf",r.menuItems))},dependencies:[y,k,M,C,F],styles:["li[_ngcontent-%COMP%]{cursor:pointer;transition:all .3s ease-in-out}"]});let t=e;return t})();var O=(()=>{let e=class e{constructor(){this.counter=10}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["counter-alone"]],inputs:{counter:"counter"},standalone:!0,features:[c],decls:4,vars:1,consts:[[1,"btn","btn-primary",3,"click"]],template:function(n,r){n&1&&(o(0,"h1"),s(1),i(),o(2,"button",0),v("click",function(){return r.counter=r.counter+1}),s(3," + 1 "),i()),n&2&&(a(),m("Counter ",r.counter,""))}});let t=e;return t})();export{D as a,O as b};
