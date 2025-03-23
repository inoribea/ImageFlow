(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{4223:function(e,t,r){Promise.resolve().then(r.bind(r,2860))},1227:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(3827),s=r(4090),i=r(5810);function n(e){let{isOpen:t,onClose:r,onSuccess:n}=e,[l,o]=(0,s.useState)(""),[d,c]=(0,s.useState)(!1),[x,g]=(0,s.useState)(""),h=async e=>{e.preventDefault(),c(!0),g("");try{await (0,i.Gw)(l)?n(l):g("API Key无效,请重试")}catch(e){g("验证失败,请重试")}finally{c(!1)}};return t?(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4",children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4 text-gray-900 dark:text-white",children:"请输入API Key"}),(0,a.jsxs)("form",{onSubmit:h,children:[(0,a.jsx)("input",{type:"password",value:l,onChange:e=>o(e.target.value),className:"w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"输入您的API Key",required:!0}),x&&(0,a.jsx)("p",{className:"text-red-500 mb-4",children:x}),(0,a.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,a.jsx)("button",{type:"button",onClick:r,className:"px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white",children:"取消"}),(0,a.jsx)("button",{type:"submit",disabled:d,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:d?"验证中...":"验证"})]})]})]})}):null}},7007:function(e,t,r){"use strict";r.d(t,{F:function(){return s}});var a=r(4090);function s(){let[e,t]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let e=localStorage.getItem("theme");e&&(t("dark"===e),document.documentElement.classList.toggle("dark","dark"===e))},[]),{isDarkMode:e,toggleTheme:()=>{let r=!e;t(r),localStorage.setItem("theme",r?"dark":"light"),document.documentElement.classList.toggle("dark",r)}}}},2860:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var a=r(3827),s=r(4090),i=r(8792),n=r(5810),l=r(3914),o=r(1227),d=r(6680);function c(e){let{onFilterChange:t}=e,[r,i]=(0,s.useState)("all"),[n,l]=(0,s.useState)("landscape"),o=e=>{i(e),t(e,n)},c=e=>{l(e),t(r,e)};return(0,a.jsxs)(d.E.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700",children:[(0,a.jsxs)("h2",{className:"text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2 text-indigo-500",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",clipRule:"evenodd"})}),"筛选图片"]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,a.jsxs)("div",{className:"w-full md:w-[calc(50%-0.5rem)]",children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2",children:"文件格式"}),(0,a.jsx)("div",{className:"grid grid-cols-3 sm:grid-cols-5 gap-2",children:["all","original","webp","avif","gif"].map(e=>(0,a.jsx)("button",{onClick:()=>o(e),className:"px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ".concat(r===e?"bg-indigo-500 text-white shadow-md":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"),children:"all"===e?"全部":"original"===e?"原始":e.toUpperCase()},e))})]}),(0,a.jsxs)("div",{className:"w-full md:w-[calc(50%-0.5rem)]",children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2",children:"图片方向"}),(0,a.jsx)("div",{className:"grid grid-cols-3 gap-2",children:["all","landscape","portrait"].map(e=>(0,a.jsx)("button",{disabled:"gif"===r,onClick:()=>c(e),className:"px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ".concat("gif"===r?"opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500":n===e?"bg-purple-500 text-white shadow-md":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"),children:"all"===e?"全部":"landscape"===e?"横向":"纵向"},e))})]})]})]})}var x=r(703);let g=e=>{let t=e.startsWith("/")?e.substring(1):e;return"".concat(window.location.origin,"/").concat(t)},h=e=>e<1024?e+" B":e<1048576?(e/1024).toFixed(2)+" KB":e<1073741824?(e/1048576).toFixed(2)+" MB":(e/1073741824).toFixed(2)+" GB",m=e=>({png:"PNG",jpg:"JPG",jpeg:"JPEG",webp:"WebP",gif:"GIF"})[e.toLowerCase()]||e.toUpperCase(),u=e=>({landscape:"横向",portrait:"纵向",square:"方形"})[e.toLowerCase()]||e;function p(e){let{image:t,onClick:r}=e,[i,n]=(0,s.useState)("idle"),[l,o]=(0,s.useState)(!1),c=async e=>{e.stopPropagation();try{let e=g(t.url);await navigator.clipboard.writeText(e),n("copied"),setTimeout(()=>n("idle"),2e3)}catch(e){console.error("复制失败:",e),n("error"),setTimeout(()=>n("idle"),2e3)}};return(0,a.jsxs)(d.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},whileHover:{y:-8,transition:{duration:.2}},className:"bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 flex flex-col w-full",onClick:r,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[(0,a.jsxs)("div",{className:"relative ".concat((e=>{switch(e.toLowerCase()){case"portrait":return"h-96";case"landscape":default:return"h-56";case"square":return"h-64"}})(t.orientation)," overflow-hidden bg-gray-100 dark:bg-gray-900"),children:[(0,a.jsx)(x.default,{src:t.url,alt:t.filename,fill:!0,className:"object-cover w-full h-full group-hover:scale-110 transition-transform duration-500",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}),(0,a.jsxs)("div",{className:"absolute top-0 left-0 right-0 p-3 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent text-white",children:[(0,a.jsxs)("div",{className:"flex space-x-1",children:[(0,a.jsx)("span",{className:"text-xs font-medium px-2 py-1 rounded-full bg-blue-500/70 backdrop-blur-sm",children:m(t.format)}),(0,a.jsx)("span",{className:"text-xs font-medium px-2 py-1 rounded-full bg-purple-500/70 backdrop-blur-sm",children:u(t.orientation)})]}),(0,a.jsxs)(d.E.button,{initial:{opacity:0},animate:{opacity:l?1:0},onClick:c,className:"p-1.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors",title:"复制URL",children:["idle"===i&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),"copied"===i&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-green-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),"error"===i&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-red-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]})]})]}),(0,a.jsxs)("div",{className:"p-4 flex-grow",children:[(0,a.jsx)("div",{className:"truncate text-sm font-medium text-gray-900 dark:text-white",children:t.filename}),(0,a.jsxs)("div",{className:"flex justify-between items-center mt-2",children:[(0,a.jsx)("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:h(t.size)}),t.width&&t.height?(0,a.jsxs)(d.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:"text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",children:[t.width," x ",t.height]}):null]})]})]})}var b=r(8745);let f=e=>{let t=e.startsWith("/")?e.substring(1):e;return"".concat(window.location.origin,"/").concat(t)},w=e=>e<1024?e+" B":e<1048576?(e/1024).toFixed(2)+" KB":e<1073741824?(e/1048576).toFixed(2)+" MB":(e/1073741824).toFixed(2)+" GB",y=e=>({png:"PNG",jpg:"JPG",jpeg:"JPEG",webp:"WebP",gif:"GIF"})[e.toLowerCase()]||e.toUpperCase(),k=e=>({landscape:"横向",portrait:"纵向",square:"方形"})[e.toLowerCase()]||e;function v(e){let{image:t,isOpen:r,onClose:i,onDelete:n}=e,[l,o]=(0,s.useState)(!1),[c,g]=(0,s.useState)(!1),[h,m]=(0,s.useState)("idle");(0,s.useEffect)(()=>{r||(o(!1),g(!1),m("idle"))},[r]);let u=async()=>{if(t)try{let e=f(t.url);await navigator.clipboard.writeText(e),m("copied"),setTimeout(()=>m("idle"),2e3)}catch(e){console.error("复制失败:",e),m("error"),setTimeout(()=>m("idle"),2e3)}},p=async()=>{if(t)try{g(!0),await n(t.id),i()}catch(e){console.error("删除失败:",e)}finally{g(!1)}};return t?(0,a.jsx)(b.M,{children:r&&(0,a.jsx)(d.E.div,{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:i,children:(0,a.jsxs)(d.E.div,{className:"relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col",initial:{scale:.9,y:20},animate:{scale:1,y:0},exit:{scale:.9,y:20},transition:{type:"spring",damping:25,stiffness:300},onClick:e=>e.stopPropagation(),children:[(0,a.jsx)("button",{className:"absolute top-4 right-4 z-10 p-2 bg-black/20 dark:bg-white/10 rounded-full hover:bg-black/30 dark:hover:bg-white/20 transition-colors",onClick:i,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),(0,a.jsx)("div",{className:"border-b border-gray-100 dark:border-gray-800 px-6 py-4",children:(0,a.jsx)("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white truncate",children:t.filename})}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,a.jsx)("div",{className:"relative w-full md:w-3/5 h-64 md:h-[400px] bg-gray-100 dark:bg-gray-800",children:(0,a.jsx)(x.default,{src:t.url,alt:t.filename,fill:!0,className:"object-contain",sizes:"(max-width: 768px) 100vw, 60vw"})}),(0,a.jsxs)("div",{className:"w-full md:w-2/5 p-6 flex flex-col h-full md:h-[400px] overflow-y-auto",children:[(0,a.jsxs)("div",{className:"flex flex-wrap gap-2 mb-6",children:[(0,a.jsx)("div",{className:"flex items-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium",children:y(t.format)}),(0,a.jsx)("div",{className:"flex items-center bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium",children:k(t.orientation)}),(0,a.jsx)("div",{className:"flex items-center bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium",children:w(t.size)}),t.width&&t.height&&(0,a.jsxs)("div",{className:"flex items-center bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300 px-3 py-1 rounded-full text-xs font-medium",children:[t.width," x ",t.height]})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1",children:"路径"}),(0,a.jsx)("div",{className:"font-mono text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded text-gray-700 dark:text-gray-300 truncate",children:t.path})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1",children:"URL"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"font-mono text-xs bg-gray-50 dark:bg-gray-800 p-2 pr-10 rounded text-gray-700 dark:text-gray-300 truncate",children:f(t.url)}),(0,a.jsxs)("button",{onClick:u,className:"absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",title:"复制URL",children:["idle"===h&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-gray-500 dark:text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),"copied"===h&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"error"===h&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})]}),(0,a.jsx)("div",{className:"text-xs mt-1 text-gray-500 dark:text-gray-400",children:"copied"===h?"URL已复制到剪贴板":"点击右侧按钮复制URL"})]})]}),(0,a.jsx)("div",{className:"mt-auto pt-4",children:l?(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("p",{className:"text-center text-sm text-red-600 dark:text-red-400",children:"确定要删除此图片吗？"}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("button",{onClick:()=>o(!1),className:"flex-1 py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm",disabled:c,children:"取消"}),(0,a.jsx)("button",{onClick:p,className:"flex-1 py-2 px-4 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors text-sm flex items-center justify-center",disabled:c,children:c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"处理中"]}):"确认删除"})]})]}):(0,a.jsxs)("button",{onClick:()=>o(!0),className:"flex items-center justify-center w-full p-2.5 rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),"删除图片"]})})]})]})]})})}):null}function j(e){let{currentPage:t,totalPages:r,onPageChange:s}=e;return r<=1?null:(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("button",{onClick:()=>s(t-1),disabled:t<=1,className:"flex items-center justify-center w-10 h-10 rounded-lg ".concat(t<=1?"text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-800 cursor-not-allowed":"text-white bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors duration-200"),"aria-label":"上一页",children:(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),(0,a.jsx)("div",{className:"hidden sm:flex items-center space-x-1",children:(()=>{let e=[];if(r<=5)for(let t=1;t<=r;t++)e.push(t);else{let a=Math.max(1,t-Math.floor(2.5)),s=a+5-1;s>r&&(a=Math.max(1,(s=r)-5+1)),a>1&&(e.push(1),a>2&&e.push("..."));for(let t=a;t<=s;t++)e.push(t);s<r&&(s<r-1&&e.push("..."),e.push(r))}return e})().map((e,r)=>"number"==typeof e?(0,a.jsx)("button",{onClick:()=>s(e),className:"w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 ".concat(t===e?"bg-indigo-500 text-white font-medium shadow-md":"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:e},r):(0,a.jsx)("span",{className:"text-gray-500 dark:text-gray-400 px-1",children:e},r))}),(0,a.jsxs)("div",{className:"sm:hidden text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg",children:[t," / ",r]}),(0,a.jsx)("button",{onClick:()=>s(t+1),disabled:t>=r,className:"flex items-center justify-center w-10 h-10 rounded-lg ".concat(t>=r?"text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-800 cursor-not-allowed":"text-white bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors duration-200"),"aria-label":"下一页",children:(0,a.jsx)("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})}var N=r(7007);function L(){let{isDarkMode:e,toggleTheme:t}=(0,N.F)(),[r,d]=(0,s.useState)(!1),[x,g]=(0,s.useState)([]),[h,m]=(0,s.useState)(null),[u,b]=(0,s.useState)(!0),[f,w]=(0,s.useState)(null),[y,k]=(0,s.useState)(1),[L,C]=(0,s.useState)(1),[M,S]=(0,s.useState)(0),[P,B]=(0,s.useState)({format:"all",orientation:"landscape"}),[E,W]=(0,s.useState)(!1);(0,s.useEffect)(()=>{(async()=>{let e=(0,n.Pi)();if(!e){d(!0);return}if(!await (0,n.Gw)(e)){d(!0),w({type:"error",message:"API Key无效,请重新验证"});return}z()})()},[]);let z=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;try{b(!0);let t=await l.hi.get("/api/images",{page:e.toString(),limit:"16",format:P.format,orientation:P.orientation});g(t.images),k(t.page),C(t.totalPages),S(t.total),w(null)}catch(e){console.error("加载图片列表失败:",e),w({type:"error",message:"加载图片列表失败"})}finally{b(!1)}},T=async e=>{try{let t=x.find(t=>t.id===e);if(!t)return;let r=await l.hi.post("/api/delete-image",{id:t.id,storageType:t.storageType});r.success?(g(x.filter(t=>t.id!==e)),w({type:"success",message:r.message})):w({type:"error",message:r.message})}catch(e){console.error("删除失败:",e),w({type:"error",message:"删除失败"})}};return(0,s.useEffect)(()=>{k(1),z(1)},[P]),(0,s.useEffect)(()=>{z(y)},[y]),(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-6 py-8",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-10",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(i.default,{href:"/",className:"mr-4",children:(0,a.jsx)("div",{className:"bg-gradient-primary w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})})}),(0,a.jsx)("h1",{className:"text-4xl font-bold bg-clip-text text-transparent bg-gradient-primary",children:"图片管理"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("button",{onClick:()=>d(!0),className:"btn-icon",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})})}),(0,a.jsx)("button",{onClick:t,className:"btn-icon",children:e?(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-amber-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-700 dark:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})]})]}),f&&(0,a.jsx)("div",{className:"mb-8 p-4 rounded-xl ".concat("success"===f.type?"bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800":"bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"),children:f.message}),(0,a.jsx)(c,{onFilterChange:(e,t)=>{B({format:e,orientation:t})}}),u?(0,a.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"})}):(0,a.jsx)(a.Fragment,{children:x.length>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:x.map(e=>(0,a.jsx)(p,{image:e,onClick:()=>{m(e),W(!0)}},e.id))}),(0,a.jsxs)("div",{className:"mt-10 flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl shadow border border-gray-100 dark:border-gray-700",children:[(0,a.jsxs)("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:["共 ",(0,a.jsx)("span",{className:"font-medium text-gray-700 dark:text-gray-300",children:M})," 张图片"]}),(0,a.jsx)(j,{currentPage:y,totalPages:L,onPageChange:e=>{k(e)}})]})]}):(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center h-64 bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700",children:[(0,a.jsx)("svg",{className:"w-16 h-16 mb-4 text-gray-300 dark:text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),(0,a.jsx)("p",{className:"text-lg font-medium",children:"暂无图片"}),(0,a.jsx)("p",{className:"mt-2 text-sm",children:"请上传图片或调整筛选条件"})]})}),(0,a.jsx)(v,{image:h,isOpen:E,onClose:()=>{m(null),W(!1)},onDelete:T}),(0,a.jsx)(o.Z,{isOpen:r,onClose:()=>d(!1),onSuccess:e=>{(0,n.Lb)(e),d(!1),w({type:"success",message:"API Key验证成功！"}),z()}})]})}},5810:function(e,t,r){"use strict";r.d(t,{Gw:function(){return n},Lb:function(){return i},Pi:function(){return s}});let a="imageflow_api_key",s=()=>localStorage.getItem(a),i=e=>{localStorage.setItem(a,e)},n=async e=>{try{let t=await fetch("".concat("http://localhost:8686","/validate-api-key"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}),r=await t.json();return!0===r.valid}catch(e){return console.error("API Key validation error:",e),!1}}},3914:function(e,t,r){"use strict";r.d(t,{hi:function(){return i}});var a=r(5810);async function s(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=(0,a.Pi)();if(!s)throw Error("未设置API Key");let{params:i,...n}=r;try{t=new URL(e,window.location.origin)}catch(r){t=new URL(e,"http://localhost:8686")}i&&Object.entries(i).forEach(e=>{let[r,a]=e;t.searchParams.append(r,a)});let l={Authorization:"Bearer ".concat(s),...r.headers},o=await fetch(t.toString(),{...n,headers:l});if(!o.ok)throw Error((await o.json().catch(()=>({}))).message||"请求失败");return o.json()}let i={get:(e,t)=>s(e,{method:"GET",params:t}),post:(e,t)=>s(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),delete:e=>s(e,{method:"DELETE"}),upload:(e,t)=>{let r=new FormData;return t.forEach(e=>{r.append("images[]",e)}),s(e,{method:"POST",body:r})}}}},function(e){e.O(0,[142,971,69,744],function(){return e(e.s=4223)}),_N_E=e.O()}]);