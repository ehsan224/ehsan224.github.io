import{S as $,i as C,s as K,k as p,q as y,a as L,l as m,m as b,r as E,h,c as q,n as A,b as D,D as d,L as P,B as M,K as j,P as w}from"../../../chunks/index-219d943c.js";function S(o,t,c){const l=o.slice();return l[4]=t[c],l[6]=c,l}function U(o){let t,c=o[6]+1+"",l;return{c(){t=p("div"),l=y(c),this.h()},l(n){t=m(n,"DIV",{class:!0});var i=b(t);l=E(i,c),i.forEach(h),this.h()},h(){A(t,"class","item svelte-cspi0k")},m(n,i){D(n,t,i),d(t,l)},p:M,d(n){n&&h(t)}}}function z(o){let t,c,l,n,i,g,f,_,u,B,I,T,N,v=Array(o[0]-1),a=[];for(let e=0;e<v.length;e+=1)a[e]=U(S(o,v,e));return{c(){t=p("div"),c=p("button"),l=y("More box"),n=L(),i=p("button"),g=y("Less box"),f=L(),_=p("div"),u=p("div"),B=y("0"),I=L();for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=m(e,"DIV",{});var r=b(t);c=m(r,"BUTTON",{});var s=b(c);l=E(s,"More box"),s.forEach(h),n=q(r),i=m(r,"BUTTON",{});var k=b(i);g=E(k,"Less box"),k.forEach(h),r.forEach(h),f=q(e),_=m(e,"DIV",{class:!0});var x=b(_);u=m(x,"DIV",{class:!0});var O=b(u);B=E(O,"0"),O.forEach(h),I=q(x);for(let V=0;V<a.length;V+=1)a[V].l(x);x.forEach(h),this.h()},h(){A(u,"class","first svelte-cspi0k"),A(_,"class","container svelte-cspi0k")},m(e,r){D(e,t,r),d(t,c),d(c,l),d(t,n),d(t,i),d(i,g),D(e,f,r),D(e,_,r),d(_,u),d(u,B),d(_,I);for(let s=0;s<a.length;s+=1)a[s].m(_,null);T||(N=[P(c,"click",o[2]),P(i,"click",o[3])],T=!0)},p(e,[r]){if(r&1){v=Array(e[0]-1);let s;for(s=0;s<v.length;s+=1){const k=S(e,v,s);a[s]?a[s].p(k,r):(a[s]=U(k),a[s].c(),a[s].m(_,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=v.length}},i:M,o:M,d(e){e&&h(t),e&&h(f),e&&h(_),j(a,e),T=!1,w(N)}}}function F(o,t,c){let l=1;function n(f){f==="increase"?c(0,l+=1):f==="decrease"&&l>1&&c(0,l-=1)}return[l,n,()=>n("increase"),()=>n("decrease")]}class H extends ${constructor(t){super(),C(this,t,F,z,K,{})}}export{H as default};
