import{S as le,i as ie,s as re,k as b,q as S,a as A,l as y,m as T,r as j,h as c,c as G,n as a,b as q,D as h,O as F,u as U,B as x,K as oe,J as z,P as $,Q as ae}from"../../../chunks/index-f0b0ed70.js";function ee(t,s,l){const u=t.slice();return u[18]=s[l],u[20]=l,u}function se(t){let s,l,u,_,f,g,k,m,r;function E(){return t[7](t[18])}function P(){return t[8](t[18])}return{c(){s=b("div"),l=b("img"),_=A(),f=b("img"),k=A(),this.h()},l(n){s=y(n,"DIV",{class:!0});var p=T(s);l=y(p,"IMG",{class:!0,src:!0,alt:!0}),_=G(p),f=y(p,"IMG",{class:!0,src:!0,alt:!0}),k=G(p),p.forEach(c),this.h()},h(){a(l,"class","front svelte-1sywvkg"),z(l.src,u=t[18].img)||a(l,"src",u),a(l,"alt",""),a(f,"class","back svelte-1sywvkg"),z(f.src,g="front.webp")||a(f,"src",g),a(f,"alt",""),a(s,"class","card svelte-1sywvkg"),$(s,"flipped",t[18].flipped)},m(n,p){q(n,s,p),h(s,l),h(s,_),h(s,f),h(s,k),m||(r=[F(s,"click",E),F(s,"keypress",P)],m=!0)},p(n,p){t=n,p&8&&!z(l.src,u=t[18].img)&&a(l,"src",u),p&8&&$(s,"flipped",t[18].flipped)},d(n){n&&c(s),m=!1,ae(r)}}}function fe(t){let s,l,u,_,f=(t[0],t[1]+""),g,k,m,r,E,P,n,p,B,C,D,V,R,J,M,i,w,N,K,H,O=t[3],v=[];for(let e=0;e<O.length;e+=1)v[e]=se(ee(t,O,e));return{c(){s=b("button"),l=S("Reset"),u=A(),_=b("p"),g=S(f),k=S("npm run"),m=A(),r=b("main"),E=b("div");for(let e=0;e<v.length;e+=1)v[e].c();P=A(),n=b("div"),p=b("p"),B=S(t[1]),C=A(),D=b("div"),V=b("p"),R=S(t[0]),J=A(),M=b("div"),w=A(),N=b("div"),this.h()},l(e){s=y(e,"BUTTON",{class:!0});var d=T(s);l=j(d,"Reset"),d.forEach(c),u=G(e),_=y(e,"P",{});var o=T(_);g=j(o,f),k=j(o,"npm run"),o.forEach(c),m=G(e),r=y(e,"MAIN",{class:!0});var I=T(r);E=y(I,"DIV",{class:!0});var L=T(E);for(let Q=0;Q<v.length;Q+=1)v[Q].l(L);L.forEach(c),P=G(I),n=y(I,"DIV",{class:!0,id:!0});var W=T(n);p=y(W,"P",{});var X=T(p);B=j(X,t[1]),X.forEach(c),W.forEach(c),C=G(I),D=y(I,"DIV",{class:!0,id:!0});var Y=T(D);V=y(Y,"P",{});var Z=T(V);R=j(Z,t[0]),Z.forEach(c),Y.forEach(c),J=G(I),M=y(I,"DIV",{class:!0,id:!0,style:!0}),T(M).forEach(c),I.forEach(c),w=G(e),N=y(e,"DIV",{style:!0}),T(N).forEach(c),this.h()},h(){a(s,"class","position-button svelte-1sywvkg"),a(E,"class","row svelte-1sywvkg"),a(n,"class","box svelte-1sywvkg"),a(n,"id","red-box"),a(D,"class","box svelte-1sywvkg"),a(D,"id","blue-box"),a(M,"class","box svelte-1sywvkg"),a(M,"id","turn-box"),a(M,"style",i=t[2]?"right: 10px;":"left:10px"),a(r,"class","svelte-1sywvkg"),a(N,"style","width:600px; height:800px; background- color:bisque;")},m(e,d){q(e,s,d),h(s,l),q(e,u,d),q(e,_,d),h(_,g),h(_,k),q(e,m,d),q(e,r,d),h(r,E);for(let o=0;o<v.length;o+=1)v[o].m(E,null);h(r,P),h(r,n),h(n,p),h(p,B),h(r,C),h(r,D),h(D,V),h(V,R),h(r,J),h(r,M),q(e,w,d),q(e,N,d),K||(H=F(s,"click",t[6]),K=!0)},p(e,[d]){if(d&3&&f!==(f=(e[0],e[1]+""))&&U(g,f),d&40){O=e[3];let o;for(o=0;o<O.length;o+=1){const I=ee(e,O,o);v[o]?v[o].p(I,d):(v[o]=se(I),v[o].c(),v[o].m(E,null))}for(;o<v.length;o+=1)v[o].d(1);v.length=O.length}d&2&&U(B,e[1]),d&1&&U(R,e[0]),d&4&&i!==(i=e[2]?"right: 10px;":"left:10px")&&a(M,"style",i)},i:x,o:x,d(e){e&&c(s),e&&c(u),e&&c(_),e&&c(m),e&&c(r),oe(v,e),e&&c(w),e&&c(N),K=!1,H()}}}function te(t){for(let s=t.length-1;s>0;s--){const l=Math.floor(Math.random()*(s+1));[t[s],t[l]]=[t[l],t[s]]}return t}function ce(t,s,l){var u=0,_=0,f=!1;let g=[],k=0,m=[],r;const E=["https://picsum.photos/200/300?grayscale","https://picsum.photos/id/237/200/300","https://picsum.photos/200/300/?blur","https://picsum.photos/id/22/367/267","https://picsum.photos/id/26/367/267","https://picsum.photos/id/15/367/267"],P=[...E,...E];function n(){clearTimeout(r),l(0,u=0),l(1,_=0),l(2,f=!1),l(3,m=[]),g=[],k=0;const i=te(P);for(let w=0;w<12;w++)m.push({id:w,img:i[w],flipped:!1,completed:!1});B()}const p=te(P);for(let i=0;i<12;i++)m.push({id:i,img:p[i],flipped:!1,completed:!1});function B(){r=setTimeout(()=>{D()},1090)}function C(){clearTimeout(r),B()}function D(){k>0&&(m.forEach(i=>{i.flipped=i.completed}),g=[],k=0,l(3,m),l(2,f=!f),C())}function V(i){!i.flipped&&k<2&&!g.includes(i)?(i.flipped=!0,g.push(i),k++,k===2&&(g[0].img===g[1].img&&(g.forEach(w=>{w.completed=!0}),f?l(0,u++,u):l(1,_++,_)),setTimeout(()=>{D()},2e3)),l(3,m),C()):alert("Chill!")}return[u,_,f,m,n,V,()=>n(),i=>{V(i)},i=>{V(i)}]}class ne extends le{constructor(s){super(),ie(this,s,ce,fe,re,{})}}export{ne as default};
