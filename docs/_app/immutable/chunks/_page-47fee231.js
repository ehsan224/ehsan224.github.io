import{_ as e}from"./preload-helper-41c905a7.js";const n=(r,o)=>{const t=r[o];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((s,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+o)))})};async function _({params:r}){const o=await n(Object.assign({"../../../lib/posts/Sistablog.svx":()=>e(()=>import("./Sistablog-c9562161.js"),["./Sistablog-c9562161.js","./index-33c1631d.js","..\\assets\\Sistablog-2bfe51e4.css"],import.meta.url),"../../../lib/posts/blogs.svx":()=>e(()=>import("./blogs-b8cffb36.js"),["./blogs-b8cffb36.js","./index-33c1631d.js"],import.meta.url),"../../../lib/posts/post.svx":()=>e(()=>import("./post-ebe67a83.js"),["./post-ebe67a83.js","./index-33c1631d.js"],import.meta.url),"../../../lib/posts/start.svx":()=>e(()=>import("./start-c1be7acf.js"),["./start-c1be7acf.js","./index-33c1631d.js"],import.meta.url)}),`../../../lib/posts/${r.path}.svx`),{title:t,date:s,keywords:i}=o.metadata;return{content:o.default,title:t,date:s,keywords:i}}const p=Object.freeze(Object.defineProperty({__proto__:null,load:_},Symbol.toStringTag,{value:"Module"}));export{p as _,_ as l};
