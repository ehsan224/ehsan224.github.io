function x(){}const V=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function I(){return Object.create(null)}function b(t){t.forEach(X)}function S(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function Ft(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(gt(e,n))}function Wt(t,e,n,r){if(t){const i=Y(t,e,n,r);return t[0](i)}}function Y(t,e,n,r){return t[1]&&r?pt(n.ctx.slice(),t[1](r(e))):n.ctx}function It(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],s=Math.max(e.dirty.length,i.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|i[u];return o}return e.dirty|i}return e.dirty}function Jt(t,e,n,r,i,o){if(i){const s=Y(e,n,r,o);t.p(s,i)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Qt(t,e,n){return t.set(n),e}function Ut(t){return t&&S(t.destroy)?t.destroy:x}const Z=typeof window<"u";let tt=Z?()=>window.performance.now():()=>Date.now(),z=Z?t=>requestAnimationFrame(t):x;const $=new Set;function et(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&z(et)}function nt(t){let e;return $.size===0&&z(et),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let R=!1;function xt(){R=!0}function $t(){R=!1}function bt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(i>0&&e[n[i]].claim_order<=l?i+1:bt(1,i,_=>e[n[_]].claim_order,l))-1;r[c]=n[f]+1;const a=f+1;n[a]=c,i=Math.max(a,i)}const o=[],s=[];let u=e.length-1;for(let c=n[i]+1;c!=0;c=r[c-1]){for(o.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function vt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=F("style");return Nt(it(t),e),e.sheet}function Nt(t,e){return vt(t.head||t,e),e.sheet}function Tt(t,e){if(R){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function At(t,e,n){t.insertBefore(e,n||null)}function St(t,e,n){R&&!n?Tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Xt(){return G(" ")}function Yt(){return G("")}function Zt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function te(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ee(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,r,i=!1){st(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,i||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function lt(t,e,n,r){return ot(t,i=>i.nodeName===e,i=>{const o=[];for(let s=0;s<i.attributes.length;s++){const u=i.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>i.removeAttribute(s))},()=>r(e))}function ne(t,e,n){return lt(t,e,n,F)}function ie(t,e,n){return lt(t,e,n,rt)}function Ct(t,e){return ot(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>G(e),!0)}function re(t){return Ct(t," ")}function J(t,e,n){for(let r=n;r<t.length;r+=1){const i=t[r];if(i.nodeType===8&&i.textContent.trim()===e)return r}return t.length}function se(t,e){const n=J(t,"HTML_TAG_START",0),r=J(t,"HTML_TAG_END",n);if(n===r)return new K(void 0,e);st(t);const i=t.splice(n,r-n+1);N(i[0]),N(i[i.length-1]);const o=i.slice(1,i.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(o,e)}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function le(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function Dt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function ue(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}class Ht{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,r=null){this.e||(this.is_svg?this.e=rt(n.nodeName):this.e=F(n.nodeName),this.t=n,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class K extends Ht{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)St(this.t,this.n[n],e)}}function ae(t,e){return new t(e)}const M=new Map;let j=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:Et(e),rules:{}};return M.set(t,n),n}function ct(t,e,n,r,i,o,s,u=0){const c=16.666/r;let l=`{
`;for(let m=0;m<=1;m+=c){const p=e+(n-e)*o(m);l+=m*100+`%{${s(p,1-p)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Mt(f)}_${u}`,_=it(t),{stylesheet:d,rules:h}=M.get(_)||jt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${r}ms linear ${i}ms 1 both`,j+=1,a}function q(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),j-=i,j||Lt())}function Lt(){z(()=>{j||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&N(e)}),M.clear())})}let T;function E(t){T=t}function ut(){if(!T)throw new Error("Function called outside component initialization");return T}function fe(t){ut().$$.on_mount.push(t)}function _e(t){ut().$$.after_update.push(t)}const v=[],Q=[],D=[],U=[],at=Promise.resolve();let B=!1;function ft(){B||(B=!0,at.then(_t))}function de(){return ft(),at}function A(t){D.push(t)}const P=new Set;let C=0;function _t(){const t=T;do{for(;C<v.length;){const e=v[C];C++,E(e),Rt(e.$$)}for(E(null),v.length=0,C=0;Q.length;)Q.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];P.has(n)||(P.add(n),n())}D.length=0}while(v.length);for(;U.length;)U.pop()();B=!1,P.clear(),E(t)}function Rt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let w;function dt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function L(t,e,n){t.dispatchEvent(Dt(`${e?"intro":"outro"}${n}`))}const H=new Set;let g;function he(){g={r:0,c:[],p:g}}function me(){g.r||b(g.c),g=g.p}function Ot(t,e){t&&t.i&&(H.delete(t),t.i(e))}function pe(t,e,n,r){if(t&&t.o){if(H.has(t))return;H.add(t),g.c.push(()=>{H.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const ht={duration:0};function ye(t,e,n){const r={direction:"in"};let i=e(t,n,r),o=!1,s,u,c=0;function l(){s&&q(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=V,tick:y=x,css:m}=i||ht;m&&(s=ct(t,0,1,d,_,h,m,c++)),y(0,1);const p=tt()+_,mt=p+d;u&&u.abort(),o=!0,A(()=>L(t,!0,"start")),u=nt(O=>{if(o){if(O>=mt)return y(1,0),L(t,!0,"end"),l(),o=!1;if(O>=p){const W=h((O-p)/d);y(W,1-W)}}return o})}let a=!1;return{start(){a||(a=!0,q(t),S(i)?(i=i(r),dt().then(f)):f())},invalidate(){a=!1},end(){o&&(l(),o=!1)}}}function ge(t,e,n){const r={direction:"out"};let i=e(t,n,r),o=!0,s;const u=g;u.r+=1;function c(){const{delay:l=0,duration:f=300,easing:a=V,tick:_=x,css:d}=i||ht;d&&(s=ct(t,1,0,f,l,a,d));const h=tt()+l,y=h+f;A(()=>L(t,!1,"start")),nt(m=>{if(o){if(m>=y)return _(0,1),L(t,!1,"end"),--u.r||b(u.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return o})}return S(i)?dt().then(()=>{i=i(r),c()}):c(),{end(l){l&&i.tick&&i.tick(1,0),o&&(s&&q(t,s),o=!1)}}}const xe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function $e(t){t&&t.c()}function be(t,e){t&&t.l(e)}function Pt(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||A(()=>{const s=t.$$.on_mount.map(X).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...s):b(s),t.$$.on_mount=[]}),o.forEach(A)}function qt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(v.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function we(t,e,n,r,i,o,s,u=[-1]){const c=T;E(t);const l=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:i,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&i(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Bt(t,a)),_}):[],l.update(),f=!0,b(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){xt();const a=kt(e.target);l.fragment&&l.fragment.l(a),a.forEach(N)}else l.fragment&&l.fragment.c();e.intro&&Ot(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),$t(),_t()}E(c)}class ve{$destroy(){qt(this,1),this.$destroy=x}$on(e,n){if(!S(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{de as A,x as B,Wt as C,Tt as D,Jt as E,Kt as F,It as G,Gt as H,ue as I,Ft as J,Vt as K,Zt as L,rt as M,ie as N,Ut as O,b as P,xe as Q,ce as R,ve as S,te as T,A as U,ye as V,ge as W,Qt as X,K as Y,se as Z,Xt as a,St as b,re as c,me as d,Yt as e,Ot as f,he as g,N as h,we as i,_e as j,F as k,ne as l,kt as m,ee as n,fe as o,le as p,G as q,Ct as r,zt as s,pe as t,oe as u,ae as v,$e as w,be as x,Pt as y,qt as z};
