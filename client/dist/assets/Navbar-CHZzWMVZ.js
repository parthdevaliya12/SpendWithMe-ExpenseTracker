import{c as s,r,d as i,j as e}from"./index-DCJStnxC.js";import{W as h}from"./wallet-DuVLcq8z.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=s("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=s("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=s("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=s("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=s("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=s("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function j(){const[t,l]=r.useState(!1),n=i(),o=r.useRef(null),d=r.useRef(null),c=[{path:"/Dashboard",label:"Dashboard",icon:p},{path:"/History",label:"History",icon:b},{path:"/Budget",label:"Budget",icon:h},{path:"/Group",label:"Group",icon:y}],u=a=>n.pathname===a?"bg-blue-100/70 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-semibold ring-2 ring-blue-200 dark:ring-blue-800":"hover:bg-blue-50/50 text-gray-600 dark:hover:bg-blue-900/20 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400";return r.useEffect(()=>{l(!1)},[n]),r.useEffect(()=>{const a=x=>{t&&o.current&&!o.current.contains(x.target)&&!d.current.contains(x.target)&&l(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[t]),e.jsxs("nav",{className:"relative w-full",children:[e.jsx("div",{className:"md:hidden mx-auto max-w-7xl flex justify-end",children:e.jsx("button",{ref:d,onClick:()=>l(!t),className:`p-2 rounded-xl 
                    transition-all duration-300 
                    backdrop-blur-sm
                    hover:bg-blue-100/50 dark:hover:bg-blue-900/30
                    active:scale-90 transform`,"aria-label":t?"Close menu":"Open menu",children:t?e.jsx(f,{className:"text-blue-600 dark:text-blue-400 w-6 h-6 animate-spin-short"}):e.jsx(m,{className:"text-blue-600 dark:text-blue-400 w-6 h-6"})})}),e.jsx("div",{className:"hidden md:block mx-auto",children:e.jsx("ul",{className:"flex justify-center space-x-1 lg:space-x-2 w-full p-4  dark:bg-gray-900/30 rounded-full ",children:c.map(a=>e.jsx("li",{className:"px-2",children:e.jsxs("a",{href:a.path,className:`
                  flex items-center space-x-2 px-4 py-2 rounded-xl 
                  transition-all duration-300 group
                  ${u(a.path)}
                `,children:[e.jsx(a.icon,{className:`
                    w-5 h-5 
                    ${n.pathname===a.path?"text-blue-700 dark:text-blue-300":"text-gray-400 group-hover:text-blue-500 dark:text-gray-500 dark:group-hover:text-blue-400"}
                  `}),e.jsx("span",{className:"text-sm",children:a.label})]})},a.path))})}),e.jsx("div",{ref:o,className:`
          md:hidden fixed inset-y-0 left-0 w-64 h-screen
          bg-white/95 dark:bg-black/95 backdrop-blur-xl z-50 
          shadow-2xl rounded-r-3xl
          transform transition-transform duration-500 ease-in-out
          ${t?"translate-x-0":"-translate-x-full"}
        `,children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsx("div",{className:"p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900/30",children:e.jsx("h1",{className:"text-2xl font-bold text-blue-700 dark:text-blue-400 tracking-tight",children:"Spendwithme"})}),e.jsx("ul",{className:"space-y-2 p-4 bg-white dark:bg-black/95 backdrop-blur-xl flex-grow",children:c.map(a=>e.jsx("li",{children:e.jsxs("a",{href:a.path,onClick:()=>l(!1),className:`
                    flex items-center space-x-4 px-4
                    text-base py-3 rounded-xl transition-all
                    ${u(a.path)}
                  `,children:[e.jsx(a.icon,{className:`
                      w-5 h-5 
                      ${n.pathname===a.path?"text-blue-700 dark:text-blue-300":"text-gray-400 dark:text-gray-500"}
                    `}),e.jsx("span",{children:a.label})]})},a.path))})]})})]})}export{v as L,j as N,y as U,f as X};
