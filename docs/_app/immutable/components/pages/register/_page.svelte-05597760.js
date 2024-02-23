import{S as Tr,i as Lr,s as Or,k as a,q as m,a as p,l,m as i,r as c,h as n,c as d,n as t,b as g,D as r,N as Pr,B as ur}from"../../../chunks/index-33c1631d.js";function Ir(G){let f,M,A,o,T,q,H,h,w,W,L,$,v,O,Y,J,b,_,K,x,Q,y,X,Z,P,rr,er,I,nr,k,tr,ar,B,lr,U,or,j,S,z,ir,D,N,sr,R,E,pr,dr,mr;return{c(){f=a("h1"),M=m("Registration Form"),A=p(),o=a("form"),T=a("label"),q=m("Name:"),H=p(),h=a("div"),w=a("input"),W=p(),L=a("input"),$=p(),v=a("div"),O=a("label"),Y=m("Gender:"),J=p(),b=a("select"),_=a("option"),K=m("Man"),x=a("option"),Q=m("Woman"),y=a("option"),X=m("Other"),Z=p(),P=a("label"),rr=m("Email:"),er=p(),I=a("input"),nr=p(),k=a("label"),tr=m("Password:"),ar=p(),B=a("input"),lr=p(),U=a("script"),or=m(`function login(){\r
            \r
        Var email= <label for="email">Email:</label>;\r
        email += <input type="email" id="email" name="email"/>;\r
        var password= <label for="email">Email:</label>\r
        password += <input type="password" id="password" name="password"/>\r
        console.log(email+' '+ password)\r
        }`),j=p(),S=a("head"),z=a("style"),ir=m(`body {\r
            display: grid;\r
            place-items: center;\r
            height: 80vh;\r
            margin-top: 10px;\r
            \r
        }\r
\r
        form {\r
            display: grid;\r
            grid-gap: 10px;\r
            grid-template-columns: repeat(1.3, minmax(200px, 1fr));\r
        }\r
        .name{\r
            display:flex;\r
            grid-column: 2;\r
            justify-content: space-around;\r
        }\r
        .gender-size {\r
            width: 300px; \r
            height: 30px;\r
        }\r
        .gender {\r
            display:flex;\r
            grid-column: 2;\r
            justify-content: space-around;\r
        }\r
        label {\r
            grid-column: 2;\r
            grid-row: span 3;\r
        }\r
\r
        input {\r
            grid-column: 2;\r
            grid-row: span 3;\r
            margin-right:2px;\r
        }\r
        .position-button{\r
         position: absolute;\r
         top: 75%;\r
          }\r
         button {\r
         background-color: rgb(61, 94, 183);\r
         width: 140px;\r
         font-size: 20px;\r
         padding: 6px;\r
         border-radius: 100px;\r
         border: 3px solid rgb(40, 174, 80);\r
         color: rgb(204,255,204);\r
          cursor: pointer;\r
\r
        }`),D=p(),N=a("button"),sr=m("Save"),R=p(),E=a("button"),pr=m("Login"),this.h()},l(e){f=l(e,"H1",{align:!0});var u=i(f);M=c(u,"Registration Form"),u.forEach(n),A=d(e),o=l(e,"FORM",{});var s=i(o);T=l(s,"LABEL",{for:!0});var cr=i(T);q=c(cr,"Name:"),cr.forEach(n),H=d(s),h=l(s,"DIV",{class:!0});var V=i(h);w=l(V,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0}),W=d(V),L=l(V,"INPUT",{type:!0,id:!0,placeholder:!0}),V.forEach(n),$=d(s),v=l(s,"DIV",{class:!0});var C=i(v);O=l(C,"LABEL",{for:!0});var fr=i(O);Y=c(fr,"Gender:"),fr.forEach(n),J=d(C),b=l(C,"SELECT",{id:!0,name:!0,class:!0});var F=i(b);_=l(F,"OPTION",{});var br=i(_);K=c(br,"Man"),br.forEach(n),x=l(F,"OPTION",{});var gr=i(x);Q=c(gr,"Woman"),gr.forEach(n),y=l(F,"OPTION",{});var hr=i(y);X=c(hr,"Other"),hr.forEach(n),F.forEach(n),C.forEach(n),Z=d(s),P=l(s,"LABEL",{for:!0});var vr=i(P);rr=c(vr,"Email:"),vr.forEach(n),er=d(s),I=l(s,"INPUT",{type:!0,id:!0,name:!0}),nr=d(s),k=l(s,"LABEL",{for:!0});var _r=i(k);tr=c(_r,"Password:"),_r.forEach(n),ar=d(s),B=l(s,"INPUT",{type:!0,id:!0,name:!0}),lr=d(s),U=l(s,"SCRIPT",{});var xr=i(U);or=c(xr,`function login(){\r
            \r
        Var email= <label for="email">Email:</label>;\r
        email += <input type="email" id="email" name="email"/>;\r
        var password= <label for="email">Email:</label>\r
        password += <input type="password" id="password" name="password"/>\r
        console.log(email+' '+ password)\r
        }`),xr.forEach(n),s.forEach(n),j=d(e),S=l(e,"HEAD",{});var yr=i(S);z=l(yr,"STYLE",{});var Er=i(z);ir=c(Er,`body {\r
            display: grid;\r
            place-items: center;\r
            height: 80vh;\r
            margin-top: 10px;\r
            \r
        }\r
\r
        form {\r
            display: grid;\r
            grid-gap: 10px;\r
            grid-template-columns: repeat(1.3, minmax(200px, 1fr));\r
        }\r
        .name{\r
            display:flex;\r
            grid-column: 2;\r
            justify-content: space-around;\r
        }\r
        .gender-size {\r
            width: 300px; \r
            height: 30px;\r
        }\r
        .gender {\r
            display:flex;\r
            grid-column: 2;\r
            justify-content: space-around;\r
        }\r
        label {\r
            grid-column: 2;\r
            grid-row: span 3;\r
        }\r
\r
        input {\r
            grid-column: 2;\r
            grid-row: span 3;\r
            margin-right:2px;\r
        }\r
        .position-button{\r
         position: absolute;\r
         top: 75%;\r
          }\r
         button {\r
         background-color: rgb(61, 94, 183);\r
         width: 140px;\r
         font-size: 20px;\r
         padding: 6px;\r
         border-radius: 100px;\r
         border: 3px solid rgb(40, 174, 80);\r
         color: rgb(204,255,204);\r
          cursor: pointer;\r
\r
        }`),Er.forEach(n),yr.forEach(n),D=d(e),N=l(e,"BUTTON",{onclick:!0});var wr=i(N);sr=c(wr,"Save"),wr.forEach(n),R=d(e),E=l(e,"BUTTON",{class:!0});var Nr=i(E);pr=c(Nr,"Login"),Nr.forEach(n),this.h()},h(){t(f,"align","center"),t(T,"for","Name"),t(w,"type","text"),t(w,"id","Name"),t(w,"name","first name"),t(w,"placeholder","Enter your first name"),t(L,"type","text"),t(L,"id","last Name"),t(L,"placeholder","Enter your last name"),t(h,"class","name"),t(O,"for","Gender"),_.__value="man",_.value=_.__value,x.__value="woman",x.value=x.__value,y.__value="other",y.value=y.__value,t(b,"id","gender"),t(b,"name","gender"),t(b,"class","gender-size"),t(v,"class","gender"),t(P,"for","email"),t(I,"type","email"),t(I,"id","email"),t(I,"name","email"),t(k,"for","password"),t(B,"type","password"),t(B,"id","password"),t(B,"name","password"),t(N,"onclick","login()"),t(E,"class","position-button")},m(e,u){g(e,f,u),r(f,M),g(e,A,u),g(e,o,u),r(o,T),r(T,q),r(o,H),r(o,h),r(h,w),r(h,W),r(h,L),r(o,$),r(o,v),r(v,O),r(O,Y),r(v,J),r(v,b),r(b,_),r(_,K),r(b,x),r(x,Q),r(b,y),r(y,X),r(o,Z),r(o,P),r(P,rr),r(o,er),r(o,I),r(o,nr),r(o,k),r(k,tr),r(o,ar),r(o,B),r(o,lr),r(o,U),r(U,or),g(e,j,u),g(e,S,u),r(S,z),r(z,ir),g(e,D,u),g(e,N,u),r(N,sr),g(e,R,u),g(e,E,u),r(E,pr),dr||(mr=Pr(E,"click",G[0]),dr=!0)},p:ur,i:ur,o:ur,d(e){e&&n(f),e&&n(A),e&&n(o),e&&n(j),e&&n(S),e&&n(D),e&&n(N),e&&n(R),e&&n(E),dr=!1,mr()}}}function kr(G){return[()=>window.location.href="http://localhost:5173/login"]}class Sr extends Tr{constructor(f){super(),Lr(this,f,kr,Ir,Or,{})}}export{Sr as default};
