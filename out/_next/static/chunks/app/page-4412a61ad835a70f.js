(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3887:(e,n,t)=>{Promise.resolve().then(t.bind(t,3295)),Promise.resolve().then(t.bind(t,6937))},3295:(e,n,t)=>{"use strict";t.d(n,{default:()=>s});var a=t(5155),i=t(686);function s(){return(0,a.jsx)("div",{className:"absolute font-playfair text-5xl font-bold",children:(0,a.jsx)(i.A,{steps:["hello,",1e3,"hello, i'm calvin nguyen"],wrapper:"p"})})}},6937:(e,n,t)=>{"use strict";t.d(n,{default:()=>s});var a=t(5155),i=t(686);function s(e){let{label:n}=e;if("about"===n)return(0,a.jsxs)("div",{className:"font-lato text-xl my-8",children:[(0,a.jsxs)("div",{className:"flex mb-2",children:["I'm Calvin Nguyen,",(0,a.jsx)(i.A,{className:"ml-1",steps:[" an incoming new graduate \uD83C\uDF93!",2e3," a software developer \uD83D\uDCBB!",2e3,"a coffee lover ☕!",2e3,"a gym go-er \uD83C\uDFCB️!",2e3,"a basketball enjoyer \uD83C\uDFC0!",2e3],loop:1/0,wrapper:"p"})]}),(0,a.jsxs)("p",{children:["Currently a senior at UC Irvine pursuing a Bachelor's of Science in Computer Science, I have a deep passion for "," ",(0,a.jsx)("span",{className:"font-bold",children:"crafting software solutions and intelligent systems that make a tangible impact on people’s lives."})," My academic background has provided me with a strong foundation in Computer Science fundamentals, which I have applied to solve real-world challenges."]}),(0,a.jsx)("p",{className:"my-2",children:"I have a professional background in full stack software development, intelligent systems, and machine learning, with hands-on experience in industries such as healthcare and aerospace. My work includes building innovative tools to streamline workflows, optimize decision-making, and enhance operational and product efficiency."}),(0,a.jsx)("p",{className:"",children:"Beyond technical skills, I enjoy breaking down complex problems into digestible solutions and fostering a culture of continuous improvement. Whether it's optimizing processes, building intelligent tools, or tackling complex challenges, I strive to use technology to make a meaningful difference."})]})}},686:(e,n,t)=>{"use strict";t.d(n,{A:()=>d});var a=t(2115);async function i(e,...n){for(let t of n)switch(typeof t){case"string":await s(e,t);break;case"number":await o(t);break;case"function":await t(e,...n);break;default:await t}}async function s(e,n){let t=function(e,[...n]){return[...e,NaN].findIndex((e,t)=>n[t]!==e)}(e.textContent,n);await r(e,[...function*([...e],n=0,t=e.length){for(;t>n;)yield e.slice(0,--t).join("")}(e.textContent,t),...function*([...e],n=0,t=e.length){for(;n<t;)yield e.slice(0,++n).join("")}(n,t)])}async function o(e){await new Promise(n=>setTimeout(n,e))}async function r(e,n,t=60){for(let a of function*(e){for(let n of e)yield e=>requestAnimationFrame(()=>e.textContent=n)}(n))a(e),await o(t+t*(Math.random()-.5))}var l={typicalWrapper:"styles_typicalWrapper__1_Uvh"};!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}('.styles_typicalWrapper__1_Uvh::after {\n  content: "|";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}');var c=function(e){if(!Array.isArray(e))return Array.from(e);for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t};let d=(0,a.memo)(function(e){var n=e.steps,t=e.loop,s=e.className,o=e.wrapper,r=(0,a.useRef)(null),d=[l.typicalWrapper];return s&&d.unshift(s),(0,a.useEffect)(function(){t===1/0?i.apply(void 0,[r.current].concat(c(n),[i])):"number"==typeof t?i.apply(void 0,[r.current].concat(c(Array(t).fill(n).flat()))):i.apply(void 0,[r.current].concat(c(n)))}),a.createElement(void 0===o?"p":o,{ref:r,className:d.join(" ")})})}},e=>{var n=n=>e(e.s=n);e.O(0,[441,517,358],()=>n(3887)),_N_E=e.O()}]);