import{S as W,i as F,s as H,k as v,l as g,m as b,h as u,n as p,b as h,D as w,t as E,d as U,f as O,H as z,R as A,T as C,U as J,g as K,B as L,W as X,q as I,r as S,u as T,a as j,c as R,K as Z,O as D,X as Q,e as N,Y as $,J as x}from"../../../chunks/index-4245627b.js";import{w as ee}from"../../../chunks/index-f8c3401b.js";import{f as P}from"../../../chunks/index-e87fac98.js";const te=(window==null?void 0:window.localStorage.getItem("story_id"))??"1",q=ee(te);q.subscribe(o=>{window==null||window.localStorage.setItem("story_id",o),console.log(o)});let le=[{id:"1",message:"The greatest story ever.",img:"wave.jpeg",choices:[{id:"2",text:"Begin"}]},{id:"2",message:"What will be your path?",img:"choice.jpeg",choices:[{id:"3",text:"Left"},{id:"4",text:"Right"}]},{id:"3",message:"Wrong! Try again!",img:"choice.jpeg",choices:[{id:"4",text:"Other right"},{id:"4",text:"Right"}]},{id:"4",message:"🤣🤣🤣🤣🤣",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://giphy.com/embed/uhYPkjP03h9RvVdazZ/video" width="480"></iframe></div>',choices:[{id:"1",text:"Reset!"}]}];function B(o,e,i){const s=o.slice();return s[4]=e[i],s}function ie(o){let e,i,s,t;return{c(){e=v("p"),i=I("STORY FOR ID "),s=I(o[0]),t=I(" MISSING")},l(l){e=g(l,"P",{});var c=b(e);i=S(c,"STORY FOR ID "),s=S(c,o[0]),t=S(c," MISSING"),c.forEach(u)},m(l,c){h(l,e,c),w(e,i),w(e,s),w(e,t)},p(l,c){c&1&&T(s,l[0])},d(l){l&&u(e)}}}function se(o){let e,i,s,t=o[1].message+"",l,c,n,r=o[1].img&&M(o),f=o[1].html&&V(o),k=o[1].choices,m=[];for(let a=0;a<k.length;a+=1)m[a]=Y(B(o,k,a));return{c(){r&&r.c(),e=j(),f&&f.c(),i=j(),s=v("p"),l=I(t),c=j(),n=v("div");for(let a=0;a<m.length;a+=1)m[a].c();this.h()},l(a){r&&r.l(a),e=R(a),f&&f.l(a),i=R(a),s=g(a,"P",{});var d=b(s);l=S(d,t),d.forEach(u),c=R(a),n=g(a,"DIV",{class:!0});var _=b(n);for(let y=0;y<m.length;y+=1)m[y].l(_);_.forEach(u),this.h()},h(){p(n,"class","row svelte-1qejnfu")},m(a,d){r&&r.m(a,d),h(a,e,d),f&&f.m(a,d),h(a,i,d),h(a,s,d),w(s,l),h(a,c,d),h(a,n,d);for(let _=0;_<m.length;_+=1)m[_].m(n,null)},p(a,d){if(a[1].img?r?r.p(a,d):(r=M(a),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),a[1].html?f?f.p(a,d):(f=V(a),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null),d&2&&t!==(t=a[1].message+"")&&T(l,t),d&6){k=a[1].choices;let _;for(_=0;_<k.length;_+=1){const y=B(a,k,_);m[_]?m[_].p(y,d):(m[_]=Y(y),m[_].c(),m[_].m(n,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=k.length}},d(a){r&&r.d(a),a&&u(e),f&&f.d(a),a&&u(i),a&&u(s),a&&u(c),a&&u(n),Z(m,a)}}}function M(o){let e,i,s;return{c(){e=v("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){D(e.src,i=o[1].img)||p(e,"src",i),p(e,"alt",s=o[1].message),p(e,"class","svelte-1qejnfu")},m(t,l){h(t,e,l)},p(t,l){l&2&&!D(e.src,i=t[1].img)&&p(e,"src",i),l&2&&s!==(s=t[1].message)&&p(e,"alt",s)},d(t){t&&u(e)}}}function V(o){let e,i=o[1].html+"",s;return{c(){e=new Q(!1),s=N(),this.h()},l(t){e=$(t,!1),s=N(),this.h()},h(){e.a=s},m(t,l){e.m(i,t,l),h(t,s,l)},p(t,l){l&2&&i!==(i=t[1].html+"")&&e.p(i)},d(t){t&&u(s),t&&e.d()}}}function Y(o){let e,i=o[4].text+"",s,t,l;function c(){return o[3](o[4])}return{c(){e=v("button"),s=I(i)},l(n){e=g(n,"BUTTON",{});var r=b(e);s=S(r,i),r.forEach(u)},m(n,r){h(n,e,r),w(e,s),t||(l=x(e,"click",c),t=!0)},p(n,r){o=n,r&2&&i!==(i=o[4].text+"")&&T(s,i)},d(n){n&&u(e),t=!1,l()}}}function G(o){let e,i,s,t;function l(r,f){return r[1]?se:ie}let c=l(o),n=c(o);return{c(){e=v("div"),n.c(),this.h()},l(r){e=g(r,"DIV",{class:!0});var f=b(e);n.l(f),f.forEach(u),this.h()},h(){p(e,"class","container svelte-1qejnfu")},m(r,f){h(r,e,f),n.m(e,null),t=!0},p(r,f){c===(c=l(r))&&n?n.p(r,f):(n.d(1),n=c(r),n&&(n.c(),n.m(e,null)))},i(r){t||(r&&A(()=>{s&&s.end(1),i=C(e,P,{x:800,duration:750}),i.start()}),t=!0)},o(r){i&&i.invalidate(),r&&(s=J(e,P,{x:-800,duration:750})),t=!1},d(r){r&&u(e),n.d(),r&&s&&s.end()}}}function ae(o){let e,i,s=o[0],t=G(o);return{c(){e=v("main"),i=v("div"),t.c(),this.h()},l(l){e=g(l,"MAIN",{class:!0});var c=b(e);i=g(c,"DIV",{class:!0});var n=b(i);t.l(n),n.forEach(u),c.forEach(u),this.h()},h(){p(i,"class","grid svelte-1qejnfu"),p(e,"class","svelte-1qejnfu")},m(l,c){h(l,e,c),w(e,i),t.m(i,null)},p(l,[c]){c&1&&H(s,s=l[0])?(K(),E(t,1,1,L),U(),t=G(l),t.c(),O(t,1),t.m(i,null)):t.p(l,c)},i(l){O(t)},o(l){E(t)},d(l){l&&u(e),t.d(l)}}}function re(o,e,i){let s,t,l;z(o,q,n=>i(2,l=n));const c=n=>{X(q,l=n.id,l)};return o.$$.update=()=>{o.$$.dirty&4&&i(0,s=l),o.$$.dirty&1&&i(1,t=le.find(n=>n.id==s))},[s,t,l,c]}class fe extends W{constructor(e){super(),F(this,e,re,ae,H,{})}}export{fe as default};