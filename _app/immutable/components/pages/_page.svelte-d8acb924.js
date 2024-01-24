import{S as O,i as W,s as j,k as o,q as f,a as _,l as m,m as p,r as y,h as i,c as T,n as a,J as A,b as H,D as t,B as S}from"../../chunks/index-45205581.js";function G(N){let n,v,b,I,c,M,D,e,u,C,E,d,k,w,h,$,x,g,B;return{c(){n=o("main"),v=o("h1"),b=f("Välkommen till min hemsida!"),I=_(),c=o("p"),M=f(`"The only way to learn a new programming language is by writing\r
programs in it." - Dennis Ritchie, creator of the C programming language.`),D=_(),e=o("body"),u=o("img"),E=_(),d=o("div"),k=f("00:00:00"),w=_(),h=o("button"),$=f("Start Timer"),x=_(),g=o("script"),B=f(`let interval;\r
\r
    function startTimer(duration) {\r
        let timerDisplay = document.getElementById("timer");\r
        let timer = duration;\r
\r
        interval = setInterval(function () {\r
            const hours = Math.floor(timer / 3600);\r
            const minutes = Math.floor((timer % 3600) / 60);\r
            const seconds = timer % 60;\r
\r
            timerDisplay.innerHTML = \`\${hours}:\${minutes}:\${seconds}\`;\r
\r
            if (--timer < 0) {\r
                clearInterval(interval);\r
                timerDisplay.innerHTML = "Tiden tog slut!";\r
            }\r
        }, 1000);\r
    }`),this.h()},l(r){n=m(r,"MAIN",{});var s=p(n);v=m(s,"H1",{align:!0});var L=p(v);b=y(L,"Välkommen till min hemsida!"),L.forEach(i),I=T(s),c=m(s,"P",{id:!0,class:!0});var q=p(c);M=y(q,`"The only way to learn a new programming language is by writing\r
programs in it." - Dennis Ritchie, creator of the C programming language.`),q.forEach(i),s.forEach(i),D=T(r),e=m(r,"BODY",{});var l=p(e);u=m(l,"IMG",{src:!0,alt:!0,class:!0}),E=T(l),d=m(l,"DIV",{id:!0,class:!0});var P=p(d);k=y(P,"00:00:00"),P.forEach(i),w=T(l),h=m(l,"BUTTON",{onclick:!0,class:!0});var R=p(h);$=y(R,"Start Timer"),R.forEach(i),x=T(l),g=m(l,"SCRIPT",{});var V=p(g);B=y(V,`let interval;\r
\r
    function startTimer(duration) {\r
        let timerDisplay = document.getElementById("timer");\r
        let timer = duration;\r
\r
        interval = setInterval(function () {\r
            const hours = Math.floor(timer / 3600);\r
            const minutes = Math.floor((timer % 3600) / 60);\r
            const seconds = timer % 60;\r
\r
            timerDisplay.innerHTML = \`\${hours}:\${minutes}:\${seconds}\`;\r
\r
            if (--timer < 0) {\r
                clearInterval(interval);\r
                timerDisplay.innerHTML = "Tiden tog slut!";\r
            }\r
        }, 1000);\r
    }`),V.forEach(i),l.forEach(i),this.h()},h(){a(v,"align","center"),a(c,"id","inspo"),a(c,"class","svelte-1svhm80"),A(u.src,C="Welocme.jpg")||a(u,"src",C),a(u,"alt","Welcome"),a(u,"class","bild-storlek svelte-1svhm80"),a(d,"id","timer"),a(d,"class","svelte-1svhm80"),a(h,"onclick","startTimer(60)"),a(h,"class","svelte-1svhm80")},m(r,s){H(r,n,s),t(n,v),t(v,b),t(n,I),t(n,c),t(c,M),H(r,D,s),H(r,e,s),t(e,u),t(e,E),t(e,d),t(d,k),t(e,w),t(e,h),t(h,$),t(e,x),t(e,g),t(g,B)},p:S,i:S,o:S,d(r){r&&i(n),r&&i(D),r&&i(e)}}}class U extends O{constructor(n){super(),W(this,n,null,G,j,{})}}export{U as default};
