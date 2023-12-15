import{S as Yr,i as $r,s as Cr,k as t,a as u,q as L,l as n,m as o,c as g,r as T,h as e,n as h,b as Rr,D as r,O as Br,B as Hr,K as Kr,Q as Qr,u as Gr}from"../../../chunks/index-f0b0ed70.js";function qr(v,i,a){const c=v.slice();return c[4]=i[a],c}function Mr(v){let i,a=v[4]+"",c;return{c(){i=t("li"),c=L(a)},l(b){i=n(b,"LI",{});var s=o(i);c=T(s,a),s.forEach(e)},m(b,s){Rr(b,i,s),r(i,c)},p(b,s){s&1&&a!==(a=b[4]+"")&&Gr(c,a)},d(b){b&&e(i)}}}function Jr(v){let i,a,c,b,s,f,O,er,or,V,N,lr,ir,y,Z,z,F,ar,D,S,sr,dr,k,A,cr,pr,x,B,H,hr,q,M,br,R,Y,ur,I,$,gr,fr,_,C,K,vr,Q,G,xr,J,W,_r,X,yr,Er,kr,P=v[0],p=[];for(let d=0;d<P.length;d+=1)p[d]=Mr(qr(v,P,d));return{c(){i=t("body"),a=t("div"),c=t("input"),b=u(),s=t("div"),f=t("div"),O=t("h1"),er=L("TODO"),or=u(),V=t("div"),N=t("button"),lr=L("ADD"),ir=u(),y=t("ol");for(let d=0;d<p.length;d+=1)p[d].c();Z=u(),z=t("li"),F=t("input"),ar=u(),D=t("div"),S=t("span"),sr=L("REMOVE"),dr=u(),k=t("div"),A=t("h1"),cr=L("Doing"),pr=u(),x=t("ol"),B=t("li"),H=t("input"),hr=u(),q=t("li"),M=t("input"),br=u(),R=t("li"),Y=t("input"),ur=u(),I=t("div"),$=t("h1"),gr=L("Done"),fr=u(),_=t("ol"),C=t("li"),K=t("input"),vr=u(),Q=t("li"),G=t("input"),xr=u(),J=t("li"),W=t("input"),_r=u(),X=t("style"),yr=L(`button{\r
\r
            background-color: rgb(61, 94, 183);\r
            width: 50px;\r
            height:30px;\r
            font-size: 15px;\r
            padding: 6px;\r
            border-radius: 10px;\r
            border: 3px solid rgb(40, 174, 80);\r
            color: rgb(204,255,204);\r
            cursor: pointer;\r
        }\r
        \r
        ol{\r
            list-style-type: dicemal;\r
        }\r
        \r
        .container{\r
            width:95vw;\r
            height: 55vh;\r
            background-color: rgb(172, 71, 253);\r
            border-width: 10px;\r
            border-style:solid;\r
            border-color: rgb(89, 22, 245);\r
            border-radius: 50px;\r
            padding-top:10px;\r
            padding-left:2%;\r
          \r
\r
        }\r
        \r
\r
        .layout{\r
            display: flex;\r
            justify-content: space-between;\r
        }\r
    \r
\r
        \r
        input{\r
            transition: border-color 0.5s, background-color 0.5s;\r
            background-color: rgb(172, 71, 253);\r
            width: 300px; \r
            height: 20px;\r
            border-style: hidden;\r
\r
        }\r
        .btn {\r
            line-height: 20px;\r
            height: 20px;\r
            text-align: center;\r
            width: 100px;\r
            cursor: pointer;\r
        }\r
        .btn-two {\r
            color: #FFF;\r
            transition: all 0.5s;\r
            position: relative;\r
            left: 5%;        /* position btn*/\r
        }\r
        .btn-two span {\r
            z-index: 2;\r
            display: block;\r
            position: absolute;\r
            width: 100%;\r
            height: 100%;\r
        }\r
        .btn-two::before {\r
            content: '';\r
            position: absolute;\r
            top: 0;\r
            left: 0%;\r
            width: 100%;\r
            height: 100%;\r
            z-index: 1; \r
            transition: all 0.5s;\r
            border: 1px solid rgba(255,255,255,0.2);\r
            background-color: rgba(255,255,255,0.1);\r
        }\r
        .btn-two::after {\r
        content: '';\r
        position: absolute;\r
        top: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 100%;\r
        z-index: 1;\r
        transition: all 0.5s;\r
        border: 1px solid rgba(255,255,255,0.2);\r
        background-color: rgba(255,255,255,0.1);\r
        }\r
        .btn-two:hover::before {\r
        transform: rotate(-45deg);\r
        background-color: rgba(255,255,255,0);\r
        }\r
        .btn-two:hover::after {\r
        transform: rotate(45deg);\r
        background-color: rgba(255,255,255,0);\r
        }`),this.h()},l(d){i=n(d,"BODY",{});var E=o(i);a=n(E,"DIV",{class:!0});var l=o(a);c=n(l,"INPUT",{}),b=g(l),s=n(l,"DIV",{class:!0});var w=o(s);f=n(w,"DIV",{class:!0});var m=o(f);O=n(m,"H1",{});var Ir=o(O);er=T(Ir,"TODO"),Ir.forEach(e),or=g(m),V=n(m,"DIV",{});var mr=o(V);N=n(mr,"BUTTON",{});var Dr=o(N);lr=T(Dr,"ADD"),Dr.forEach(e),mr.forEach(e),ir=g(m),y=n(m,"OL",{id:!0});var rr=o(y);for(let wr=0;wr<p.length;wr+=1)p[wr].l(rr);Z=g(rr),z=n(rr,"LI",{});var Lr=o(z);F=n(Lr,"INPUT",{type:!0}),Lr.forEach(e),rr.forEach(e),ar=g(m),D=n(m,"DIV",{class:!0});var Tr=o(D);S=n(Tr,"SPAN",{});var Or=o(S);sr=T(Or,"REMOVE"),Or.forEach(e),Tr.forEach(e),m.forEach(e),dr=g(w),k=n(w,"DIV",{class:!0});var tr=o(k);A=n(tr,"H1",{});var Nr=o(A);cr=T(Nr,"Doing"),Nr.forEach(e),pr=g(tr),x=n(tr,"OL",{id:!0});var j=o(x);B=n(j,"LI",{});var Pr=o(B);H=n(Pr,"INPUT",{type:!0}),Pr.forEach(e),hr=g(j),q=n(j,"LI",{});var jr=o(q);M=n(jr,"INPUT",{type:!0}),jr.forEach(e),br=g(j),R=n(j,"LI",{});var Ur=o(R);Y=n(Ur,"INPUT",{type:!0}),Ur.forEach(e),j.forEach(e),tr.forEach(e),ur=g(w),I=n(w,"DIV",{class:!0});var nr=o(I);$=n(nr,"H1",{});var Vr=o($);gr=T(Vr,"Done"),Vr.forEach(e),fr=g(nr),_=n(nr,"OL",{id:!0});var U=o(_);C=n(U,"LI",{});var zr=o(C);K=n(zr,"INPUT",{type:!0}),zr.forEach(e),vr=g(U),Q=n(U,"LI",{});var Fr=o(Q);G=n(Fr,"INPUT",{type:!0}),Fr.forEach(e),xr=g(U),J=n(U,"LI",{});var Sr=o(J);W=n(Sr,"INPUT",{type:!0}),Sr.forEach(e),U.forEach(e),nr.forEach(e),w.forEach(e),l.forEach(e),_r=g(E),X=n(E,"STYLE",{});var Ar=o(X);yr=T(Ar,`button{\r
\r
            background-color: rgb(61, 94, 183);\r
            width: 50px;\r
            height:30px;\r
            font-size: 15px;\r
            padding: 6px;\r
            border-radius: 10px;\r
            border: 3px solid rgb(40, 174, 80);\r
            color: rgb(204,255,204);\r
            cursor: pointer;\r
        }\r
        \r
        ol{\r
            list-style-type: dicemal;\r
        }\r
        \r
        .container{\r
            width:95vw;\r
            height: 55vh;\r
            background-color: rgb(172, 71, 253);\r
            border-width: 10px;\r
            border-style:solid;\r
            border-color: rgb(89, 22, 245);\r
            border-radius: 50px;\r
            padding-top:10px;\r
            padding-left:2%;\r
          \r
\r
        }\r
        \r
\r
        .layout{\r
            display: flex;\r
            justify-content: space-between;\r
        }\r
    \r
\r
        \r
        input{\r
            transition: border-color 0.5s, background-color 0.5s;\r
            background-color: rgb(172, 71, 253);\r
            width: 300px; \r
            height: 20px;\r
            border-style: hidden;\r
\r
        }\r
        .btn {\r
            line-height: 20px;\r
            height: 20px;\r
            text-align: center;\r
            width: 100px;\r
            cursor: pointer;\r
        }\r
        .btn-two {\r
            color: #FFF;\r
            transition: all 0.5s;\r
            position: relative;\r
            left: 5%;        /* position btn*/\r
        }\r
        .btn-two span {\r
            z-index: 2;\r
            display: block;\r
            position: absolute;\r
            width: 100%;\r
            height: 100%;\r
        }\r
        .btn-two::before {\r
            content: '';\r
            position: absolute;\r
            top: 0;\r
            left: 0%;\r
            width: 100%;\r
            height: 100%;\r
            z-index: 1; \r
            transition: all 0.5s;\r
            border: 1px solid rgba(255,255,255,0.2);\r
            background-color: rgba(255,255,255,0.1);\r
        }\r
        .btn-two::after {\r
        content: '';\r
        position: absolute;\r
        top: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 100%;\r
        z-index: 1;\r
        transition: all 0.5s;\r
        border: 1px solid rgba(255,255,255,0.2);\r
        background-color: rgba(255,255,255,0.1);\r
        }\r
        .btn-two:hover::before {\r
        transform: rotate(-45deg);\r
        background-color: rgba(255,255,255,0);\r
        }\r
        .btn-two:hover::after {\r
        transform: rotate(45deg);\r
        background-color: rgba(255,255,255,0);\r
        }`),Ar.forEach(e),E.forEach(e),this.h()},h(){h(F,"type","text"),F.value="Ett list objekt",h(y,"id","todoList"),h(D,"class","btn btn-two"),h(f,"class","todo"),h(H,"type","text"),H.value="Ett list objekt",h(M,"type","text"),M.value="Ett list objekt",h(Y,"type","text"),Y.value="Ett annat list objekt",h(x,"id","doingList"),h(k,"class","doing"),h(K,"type","text"),K.value="Ett list objekt",h(G,"type","text"),G.value="Ett list objekt",h(W,"type","text"),W.value="Ett annat list objekt",h(_,"id","doneList"),h(I,"class","complete"),h(s,"class","layout"),h(a,"class","container")},m(d,E){Rr(d,i,E),r(i,a),r(a,c),r(a,b),r(a,s),r(s,f),r(f,O),r(O,er),r(f,or),r(f,V),r(V,N),r(N,lr),r(f,ir),r(f,y);for(let l=0;l<p.length;l+=1)p[l].m(y,null);r(y,Z),r(y,z),r(z,F),r(f,ar),r(f,D),r(D,S),r(S,sr),r(s,dr),r(s,k),r(k,A),r(A,cr),r(k,pr),r(k,x),r(x,B),r(B,H),r(x,hr),r(x,q),r(q,M),r(x,br),r(x,R),r(R,Y),r(s,ur),r(s,I),r(I,$),r($,gr),r(I,fr),r(I,_),r(_,C),r(C,K),r(_,vr),r(_,Q),r(Q,G),r(_,xr),r(_,J),r(J,W),r(i,_r),r(i,X),r(X,yr),Er||(kr=[Br(N,"click",v[2]),Br(D,"click",v[3])],Er=!0)},p(d,[E]){if(E&1){P=d[0];let l;for(l=0;l<P.length;l+=1){const w=qr(d,P,l);p[l]?p[l].p(w,E):(p[l]=Mr(w),p[l].c(),p[l].m(y,Z))}for(;l<p.length;l+=1)p[l].d(1);p.length=P.length}},i:Hr,o:Hr,d(d){d&&e(i),Kr(p,d),Er=!1,Qr(kr)}}}let Wr="sak att göra";function Xr(v,i,a){let c=[];function b(O){c.splice(0,1),a(0,c)}function s(){a(0,c=[Wr,...c])}return[c,b,s,()=>{b()}]}class rt extends Yr{constructor(i){super(),$r(this,i,Xr,Jr,Cr,{})}}export{rt as default};
