import{S as O,i as W,s as j,k as o,q as f,a as _,l as m,m as p,r as y,h as i,c as T,n as s,p as A,J as G,b as H,D as t,B as S}from"../../chunks/index-219d943c.js";function J(N){let r,g,D,I,c,M,b,e,u,C,E,d,k,w,h,$,x,v,B;return{c(){r=o("main"),g=o("h1"),D=f("Välkommen till min hemsida!"),I=_(),c=o("p"),M=f(`"The only way to learn a new programming language is by writing\r
programs in it." - Dennis Ritchie, creator of the C programming language.`),b=_(),e=o("body"),u=o("img"),E=_(),d=o("div"),k=f("00:00:00"),w=_(),h=o("button"),$=f("Start Timer"),x=_(),v=o("script"),B=f(`let interval;\r
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
    }`),this.h()},l(n){r=m(n,"MAIN",{style:!0});var a=p(r);g=m(a,"H1",{align:!0});var L=p(g);D=y(L,"Välkommen till min hemsida!"),L.forEach(i),I=T(a),c=m(a,"P",{id:!0,class:!0});var q=p(c);M=y(q,`"The only way to learn a new programming language is by writing\r
programs in it." - Dennis Ritchie, creator of the C programming language.`),q.forEach(i),a.forEach(i),b=T(n),e=m(n,"BODY",{});var l=p(e);u=m(l,"IMG",{src:!0,alt:!0,class:!0}),E=T(l),d=m(l,"DIV",{id:!0,class:!0});var P=p(d);k=y(P,"00:00:00"),P.forEach(i),w=T(l),h=m(l,"BUTTON",{onclick:!0,class:!0});var R=p(h);$=y(R,"Start Timer"),R.forEach(i),x=T(l),v=m(l,"SCRIPT",{});var V=p(v);B=y(V,`let interval;\r
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
    }`),V.forEach(i),l.forEach(i),this.h()},h(){s(g,"align","center"),s(c,"id","inspo"),s(c,"class","svelte-1svhm80"),A(r,"background-color","rgb(241, 116, 7)"),G(u.src,C="Welocme.jpg")||s(u,"src",C),s(u,"alt","Welcome"),s(u,"class","bild-storlek svelte-1svhm80"),s(d,"id","timer"),s(d,"class","svelte-1svhm80"),s(h,"onclick","startTimer(60)"),s(h,"class","svelte-1svhm80")},m(n,a){H(n,r,a),t(r,g),t(g,D),t(r,I),t(r,c),t(c,M),H(n,b,a),H(n,e,a),t(e,u),t(e,E),t(e,d),t(d,k),t(e,w),t(e,h),t(h,$),t(e,x),t(e,v),t(v,B)},p:S,i:S,o:S,d(n){n&&i(r),n&&i(b),n&&i(e)}}}class Y extends O{constructor(r){super(),W(this,r,null,J,j,{})}}export{Y as default};
