(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{4223:function(e,t,r){Promise.resolve().then(r.bind(r,3833))},1227:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var a=r(3827),s=r(4090),n=r(5810);function i(e){let{isOpen:t,onClose:r,onSuccess:i}=e,[l,o]=(0,s.useState)(""),[c,d]=(0,s.useState)(!1),[m,x]=(0,s.useState)(""),u=async e=>{e.preventDefault(),d(!0),x("");try{await (0,n.Gw)(l)?i(l):x("API Key无效,请重试")}catch(e){x("验证失败,请重试")}finally{d(!1)}};return t?(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4",children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4 text-gray-900 dark:text-white",children:"请输入API Key"}),(0,a.jsxs)("form",{onSubmit:u,children:[(0,a.jsx)("input",{type:"password",value:l,onChange:e=>o(e.target.value),className:"w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"输入您的API Key",required:!0}),m&&(0,a.jsx)("p",{className:"text-red-500 mb-4",children:m}),(0,a.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,a.jsx)("button",{type:"button",onClick:r,className:"px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white",children:"取消"}),(0,a.jsx)("button",{type:"submit",disabled:c,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:c?"验证中...":"验证"})]})]})]})}):null}},7007:function(e,t,r){"use strict";r.d(t,{F:function(){return s}});var a=r(4090);function s(){let[e,t]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let e=localStorage.getItem("theme");e&&(t("dark"===e),document.documentElement.classList.toggle("dark","dark"===e))},[]),{isDarkMode:e,toggleTheme:()=>{let r=!e;t(r),localStorage.setItem("theme",r?"dark":"light"),document.documentElement.classList.toggle("dark",r)}}}},3833:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var a=r(3827),s=r(4090),n=r(8792),i=r(5810),l=r(3914),o=r(1227);function c(e){let{onFilterChange:t}=e,[r,n]=(0,s.useState)("all"),[i,l]=(0,s.useState)("all"),o=e=>{n(e),t(e,i),console.log(e,i)},c=e=>{l(e),t(r,e),console.log(r,e)};return(0,a.jsxs)("div",{className:"flex gap-4 mb-6",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"格式"}),(0,a.jsxs)("select",{value:r,className:"w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",onChange:e=>o(e.target.value),children:[(0,a.jsx)("option",{value:"all",children:"所有格式"}),(0,a.jsx)("option",{value:"original",children:"原始格式"}),(0,a.jsx)("option",{value:"webp",children:"WebP"}),(0,a.jsx)("option",{value:"avif",children:"AVIF"}),(0,a.jsx)("option",{value:"gif",children:"GIF"})]})]}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"方向"}),(0,a.jsxs)("select",{value:i,disabled:"gif"===r,className:"w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ".concat("gif"===r?"opacity-50 cursor-not-allowed":""),onChange:e=>c(e.target.value),children:[(0,a.jsx)("option",{value:"all",children:"所有方向"}),(0,a.jsx)("option",{value:"landscape",children:"横向"}),(0,a.jsx)("option",{value:"portrait",children:"纵向"})]})]})]})}var d=r(703),m=r(748);async function x(e){try{return await navigator.clipboard.writeText(e),!0}catch(e){return console.error("复制到剪贴板失败:",e),!1}}let u=e=>{switch(e){case"original":return"原始";case"webp":return"WebP";case"avif":return"AVIF";case"gif":return"GIF";default:return e}},h=e=>{switch(e){case"landscape":return"横向";case"portrait":return"纵向";case"gif":return"GIF";default:return e}},g=e=>{if(0===e)return"0 B";let t=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,t)).toFixed(2))+" "+["B","KB","MB","GB"][t]};function p(e){let{image:t,onClick:r}=e,[n,i]=(0,s.useState)(!1),[l,o]=(0,s.useState)(!1),c="portrait"===t.orientation?"aspect-[3/4]":"aspect-video",p=async e=>{e.stopPropagation(),await x(t.url)&&(i(!0),setTimeout(()=>i(!1),2e3))};return(0,a.jsxs)(m.E.div,{className:"bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all transform cursor-pointer",onClick:r,onHoverStart:()=>o(!0),onHoverEnd:()=>o(!1),whileHover:{y:-4},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[(0,a.jsxs)("div",{className:"relative ".concat(c," bg-gray-200 dark:bg-gray-600 overflow-hidden flex items-center justify-center"),children:[(0,a.jsx)(m.E.div,{className:"w-full h-full",animate:{scale:l?1.05:1},transition:{duration:.3},children:(0,a.jsx)(d.default,{src:t.url,alt:t.filename,fill:!0,className:"object-cover"})}),(0,a.jsxs)(m.E.div,{className:"absolute top-2 right-2 flex gap-1",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,a.jsx)("span",{className:"px-2 py-1 bg-indigo-500 bg-opacity-80 text-white text-xs rounded-md",children:u(t.format)}),(0,a.jsx)("span",{className:"px-2 py-1 bg-purple-500 bg-opacity-80 text-white text-xs rounded-md",children:h(t.orientation)})]}),(0,a.jsx)(m.E.button,{onClick:p,className:"absolute bottom-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",whileHover:{scale:1.1},whileTap:{scale:.95},children:n?(0,a.jsx)(m.E.svg,{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-green-500",initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:500,damping:30},children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}):(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-600 dark:text-gray-300",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,a.jsx)("path",{d:"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"}),(0,a.jsx)("path",{d:"M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"})]})})]}),(0,a.jsxs)(m.E.div,{className:"p-3",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:[(0,a.jsx)("div",{className:"truncate text-gray-800 dark:text-gray-200 font-medium",children:t.filename}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400 text-sm",children:g(t.size)})]})]})}var f=r(3063),y=r(2560),b=r(6660),j=r(8438),v=r(3482);class w extends s.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,r=e instanceof HTMLElement&&e.offsetWidth||0,a=this.props.sizeRef.current;a.height=t.offsetHeight||0,a.width=t.offsetWidth||0,a.top=t.offsetTop,a.left=t.offsetLeft,a.right=r-a.width-a.left}return null}componentDidUpdate(){}render(){return this.props.children}}function k(e){let{children:t,isPresent:r,anchorX:n}=e,i=(0,s.useId)(),l=(0,s.useRef)(null),o=(0,s.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:c}=(0,s.useContext)(v._);return(0,s.useInsertionEffect)(()=>{let{width:e,height:t,top:a,left:s,right:d}=o.current;if(r||!l.current||!e||!t)return;l.current.dataset.motionPopId=i;let m=document.createElement("style");return c&&(m.nonce=c),document.head.appendChild(m),m.sheet&&m.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===n?"left: ".concat(s):"right: ".concat(d),"px !important;\n            top: ").concat(a,"px !important;\n          }\n        ")),()=>{document.head.removeChild(m)}},[r]),(0,a.jsx)(w,{isPresent:r,childRef:l,sizeRef:o,children:s.cloneElement(t,{ref:l})})}let N=e=>{let{children:t,initial:r,isPresent:n,onExitComplete:i,custom:l,presenceAffectsLayout:o,mode:c,anchorX:d}=e,m=(0,y.h)(C),x=(0,s.useId)(),u=(0,s.useCallback)(e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;i&&i()},[m,i]),h=(0,s.useMemo)(()=>({id:x,initial:r,isPresent:n,custom:l,onExitComplete:u,register:e=>(m.set(e,!1),()=>m.delete(e))}),o?[Math.random(),u]:[n,u]);return(0,s.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[n]),s.useEffect(()=>{n||m.size||!i||i()},[n]),"popLayout"===c&&(t=(0,a.jsx)(k,{isPresent:n,anchorX:d,children:t})),(0,a.jsx)(j.O.Provider,{value:h,children:t})};function C(){return new Map}var L=r(9545);let E=e=>e.key||"";function M(e){let t=[];return s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&t.push(e)}),t}let S=e=>{let{children:t,custom:r,initial:n=!0,onExitComplete:i,presenceAffectsLayout:l=!0,mode:o="sync",propagate:c=!1,anchorX:d="left"}=e,[m,x]=(0,L.oO)(c),u=(0,s.useMemo)(()=>M(t),[t]),h=c&&!m?[]:u.map(E),g=(0,s.useRef)(!0),p=(0,s.useRef)(u),j=(0,y.h)(()=>new Map),[v,w]=(0,s.useState)(u),[k,C]=(0,s.useState)(u);(0,b.L)(()=>{g.current=!1,p.current=u;for(let e=0;e<k.length;e++){let t=E(k[e]);h.includes(t)?j.delete(t):!0!==j.get(t)&&j.set(t,!1)}},[k,h.length,h.join("-")]);let S=[];if(u!==v){let e=[...u];for(let t=0;t<k.length;t++){let r=k[t],a=E(r);h.includes(a)||(e.splice(t,0,r),S.push(r))}return"wait"===o&&S.length&&(e=S),C(M(e)),w(u),null}let{forceRender:P}=(0,s.useContext)(f.p);return(0,a.jsx)(a.Fragment,{children:k.map(e=>{let t=E(e),s=(!c||!!m)&&(u===k||h.includes(t));return(0,a.jsx)(N,{isPresent:s,initial:(!g.current||!!n)&&void 0,custom:r,presenceAffectsLayout:l,mode:o,onExitComplete:s?void 0:()=>{if(!j.has(t))return;j.set(t,!0);let e=!0;j.forEach(t=>{t||(e=!1)}),e&&(null==P||P(),C(p.current),c&&(null==x||x()),i&&i())},anchorX:d,children:e},t)})})},P=e=>{switch(e){case"original":return"原始";case"webp":return"WebP";case"avif":return"AVIF";case"gif":return"GIF";default:return e}},B=e=>{switch(e){case"landscape":return"横向";case"portrait":return"纵向";case"gif":return"GIF";default:return e}},I=e=>{if(0===e)return"0 B";let t=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,t)).toFixed(2))+" "+["B","KB","MB","GB"][t]};function F(e){var t;let{image:r,isOpen:n,onClose:i,onDelete:l}=e,[o,c]=(0,s.useState)(!1),[u,h]=(0,s.useState)(!1),[g,p]=(0,s.useState)("idle"),f=r?(t=r.url).startsWith("http")?t:"".concat(window.location.protocol,"//").concat(window.location.host).concat(t):"",y=async e=>{p("idle");try{await x(e),p("success"),setTimeout(()=>p("idle"),2e3)}catch(e){p("error"),setTimeout(()=>p("idle"),2e3)}},b=async()=>{if(r){c(!0);try{await l(r.id),i()}catch(e){console.error("删除失败:",e)}finally{c(!1),h(!1)}}};return r?(0,a.jsx)(S,{children:n&&(0,a.jsxs)(m.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 overflow-y-auto",children:[(0,a.jsxs)("div",{className:"flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",children:[(0,a.jsx)(m.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:i}),(0,a.jsx)("span",{className:"hidden sm:inline-block sm:h-screen sm:align-middle",children:"​"}),(0,a.jsxs)(m.E.div,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.95,opacity:0},className:"inline-block transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pt-5 pb-4 text-left align-middle shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6 relative",children:[(0,a.jsx)("div",{className:"absolute top-0 right-0 pt-4 pr-4",children:(0,a.jsxs)("button",{type:"button",className:"rounded-md bg-white dark:bg-gray-800 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none",onClick:i,children:[(0,a.jsx)("span",{className:"sr-only",children:"关闭"}),(0,a.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row gap-6",children:[(0,a.jsx)(m.E.div,{className:"md:w-2/3 relative aspect-video",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1},children:(0,a.jsx)(d.default,{src:r.url,alt:r.filename,fill:!0,className:"object-contain"})}),(0,a.jsxs)(m.E.div,{className:"md:w-1/3 space-y-4",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.2},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"文件名"}),(0,a.jsx)("p",{className:"text-gray-900 dark:text-gray-100",children:r.filename})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"路径"}),(0,a.jsx)("p",{className:"text-gray-900 dark:text-gray-100 break-all",children:r.path})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"大小"}),(0,a.jsx)("p",{className:"text-gray-900 dark:text-gray-100",children:I(r.size)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"格式"}),(0,a.jsx)("p",{className:"text-gray-900 dark:text-gray-100",children:P(r.format)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"方向"}),(0,a.jsx)("p",{className:"text-gray-900 dark:text-gray-100",children:B(r.orientation)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"URL"}),(0,a.jsxs)("div",{className:"mt-1 flex",children:[(0,a.jsx)("input",{type:"text",readOnly:!0,value:f,className:"flex-1 rounded-l-lg border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm"}),(0,a.jsxs)("button",{onClick:()=>y(f),className:"px-3 rounded-r-lg border border-l-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600",children:["idle"===g&&(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"})}),"success"===g&&(0,a.jsx)("svg",{className:"w-5 h-5 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"error"===g&&(0,a.jsx)("svg",{className:"w-5 h-5 text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{type:"button",onClick:()=>h(!0),disabled:o,className:"w-full inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",children:o?"删除中...":"删除图片"})})]})]})]})]}),(0,a.jsx)(S,{children:u&&(0,a.jsx)(m.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[60] overflow-y-auto",children:(0,a.jsxs)("div",{className:"flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",children:[(0,a.jsx)(m.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>h(!1)}),(0,a.jsx)("span",{className:"hidden sm:inline-block sm:h-screen sm:align-middle",children:"​"}),(0,a.jsxs)(m.E.div,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.95,opacity:0},className:"inline-block transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pt-5 pb-4 text-left align-middle shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 relative",children:[(0,a.jsxs)("div",{className:"sm:flex sm:items-start",children:[(0,a.jsx)("div",{className:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 sm:mx-0 sm:h-10 sm:w-10",children:(0,a.jsx)("svg",{className:"h-6 w-6 text-red-600 dark:text-red-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),(0,a.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[(0,a.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",children:"确认删除"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"您确定要删除这张图片吗？此操作无法撤销。"})})]})]}),(0,a.jsxs)("div",{className:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse",children:[(0,a.jsx)("button",{type:"button",onClick:b,disabled:o,className:"inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed",children:o?"删除中...":"确认删除"}),(0,a.jsx)("button",{type:"button",onClick:()=>h(!1),className:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm",children:"取消"})]})]})]})})})]})}):null}function z(e){let{currentPage:t,totalPages:r,onPageChange:s}=e;return r<=1?null:(0,a.jsxs)("div",{className:"flex items-center justify-between mt-6",children:[(0,a.jsxs)("button",{onClick:()=>s(t-1),disabled:t<=1,className:"flex items-center px-4 py-2 text-sm font-medium rounded-md ".concat(t<=1?"text-gray-400 dark:text-gray-500 cursor-not-allowed":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"),children:[(0,a.jsx)("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"上一页"]}),(0,a.jsxs)("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:["第 ",t," 页，共 ",r," 页"]}),(0,a.jsxs)("button",{onClick:()=>s(t+1),disabled:t>=r,className:"flex items-center px-4 py-2 text-sm font-medium rounded-md ".concat(t>=r?"text-gray-400 dark:text-gray-500 cursor-not-allowed":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"),children:["下一页",(0,a.jsx)("svg",{className:"w-5 h-5 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})}var W=r(7007);function T(){let{isDarkMode:e,toggleTheme:t}=(0,W.F)(),[r,d]=(0,s.useState)(!1),[m,x]=(0,s.useState)([]),[u,h]=(0,s.useState)(null),[g,f]=(0,s.useState)(!0),[y,b]=(0,s.useState)(null),[j,v]=(0,s.useState)(1),[w,k]=(0,s.useState)(1),[N,C]=(0,s.useState)(0),[L,E]=(0,s.useState)({format:"all",orientation:"all"});(0,s.useEffect)(()=>{(async()=>{let e=(0,i.Pi)();if(!e){d(!0);return}if(!await (0,i.Gw)(e)){d(!0),b({type:"error",message:"API Key无效,请重新验证"});return}M()})()},[]);let M=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;try{f(!0);let t=await l.hi.get("/api/images",{page:e.toString(),limit:"12",format:L.format,orientation:L.orientation});console.log(t),x(t.images),v(t.page),k(t.totalPages),C(t.total),b(null)}catch(e){console.error("加载图片列表失败:",e),b({type:"error",message:"加载图片列表失败"})}finally{f(!1)}},S=async e=>{try{let t=m.find(t=>t.id===e);if(!t)return;let r=await l.hi.post("/api/delete-image",{id:t.id,storageType:t.storageType});r.success?(x(m.filter(t=>t.id!==e)),b({type:"success",message:r.message})):b({type:"error",message:r.message})}catch(e){console.error("删除失败:",e),b({type:"error",message:"删除失败"})}};return(0,s.useEffect)(()=>{console.log("Filters changed:",L),v(1),M(1)},[L]),(0,s.useEffect)(()=>{M(j)},[j]),(0,a.jsxs)("div",{className:"max-w-6xl mx-auto px-6 py-8",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-10",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(n.default,{href:"/",className:"mr-4",children:(0,a.jsx)("div",{className:"bg-gradient-primary w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),(0,a.jsx)("h1",{className:"text-4xl font-bold bg-clip-text text-transparent bg-gradient-primary",children:"图片管理"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("button",{onClick:()=>d(!0),className:"btn-icon",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})})}),(0,a.jsx)("button",{onClick:t,className:"btn-icon",children:e?(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-amber-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-700 dark:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})]})]}),y&&(0,a.jsx)("div",{className:"mb-8 p-4 rounded-xl ".concat("success"===y.type?"bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300":"bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"),children:y.message}),(0,a.jsx)(c,{onFilterChange:(e,t)=>{E({format:e,orientation:t}),console.log(e,t)}}),g?(0,a.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"})}):(0,a.jsx)(a.Fragment,{children:m.length>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:m.map(e=>(0,a.jsx)(p,{image:e,onClick:()=>h(e)},e.id))}),(0,a.jsxs)("div",{className:"mt-6 flex items-center justify-between",children:[(0,a.jsxs)("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:["共 ",N," 张图片"]}),(0,a.jsx)(z,{currentPage:j,totalPages:w,onPageChange:e=>{v(e)}})]})]}):(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400",children:[(0,a.jsx)("svg",{className:"w-16 h-16 mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),(0,a.jsx)("p",{children:"暂无图片"})]})}),(0,a.jsx)(F,{image:u,isOpen:!!u,onClose:()=>h(null),onDelete:S}),(0,a.jsx)(o.Z,{isOpen:r,onClose:()=>d(!1),onSuccess:e=>{(0,i.Lb)(e),d(!1),b({type:"success",message:"API Key验证成功！"}),M()}})]})}},5810:function(e,t,r){"use strict";r.d(t,{Gw:function(){return i},Lb:function(){return n},Pi:function(){return s}});let a="imageflow_api_key",s=()=>localStorage.getItem(a),n=e=>{localStorage.setItem(a,e)},i=async e=>{try{let t=await fetch("".concat("http://localhost:8686","/validate-api-key"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}),r=await t.json();return!0===r.valid}catch(e){return console.error("API Key validation error:",e),!1}}},3914:function(e,t,r){"use strict";r.d(t,{hi:function(){return n}});var a=r(5810);async function s(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=(0,a.Pi)();if(!s)throw Error("未设置API Key");let{params:n,...i}=r;try{t=new URL(e,window.location.origin)}catch(r){t=new URL(e,"http://localhost:8686")}n&&Object.entries(n).forEach(e=>{let[r,a]=e;t.searchParams.append(r,a)});let l={Authorization:"Bearer ".concat(s),...r.headers},o=await fetch(t.toString(),{...i,headers:l});if(!o.ok)throw Error((await o.json().catch(()=>({}))).message||"请求失败");return o.json()}let n={get:(e,t)=>s(e,{method:"GET",params:t}),post:(e,t)=>s(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),delete:e=>s(e,{method:"DELETE"}),upload:(e,t)=>{let r=new FormData;return t.forEach(e=>{r.append("images[]",e)}),s(e,{method:"POST",body:r})}}}},function(e){e.O(0,[597,971,69,744],function(){return e(e.s=4223)}),_N_E=e.O()}]);