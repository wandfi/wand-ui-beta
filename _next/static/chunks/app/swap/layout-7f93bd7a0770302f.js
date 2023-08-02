(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[370],{43495:function(e,s,n){Promise.resolve().then(n.t.bind(n,24896,23)),Promise.resolve().then(n.bind(n,6911)),Promise.resolve().then(n.bind(n,91191))},6911:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return c}});var l=n(9268),t=n(63831),i=n(35846),a=n.n(i),r=n(56008);let o=[{href:"/swap/quick-start",label:"Quick Start"},{href:"/swap",label:"Pro Trading"}];function c(){let e=(0,r.usePathname)();return(0,l.jsx)("div",{className:"w-fit flex mt-6 mx-auto bg-slate-900 p-0.5 rounded-md",children:o.map(s=>{let{href:n,label:i}=s;return(0,l.jsx)(a(),{className:(0,t.Z)("text-sm flex flex-col justify-center items-center px-3 py-2 rounded-[4px]",n!==e?"text-white bg-slate-900":"text-slate-700 bg-white"),href:n,children:(0,l.jsx)("span",{className:"font-bold",children:i})},n)})})}},91191:function(e,s,n){"use strict";n.r(s),n.d(s,{RebalanceBonusLoss:function(){return h}});var l=n(9268),t=n(90937),i=n(76394),a=n.n(i),r=n(86006),o=n(77941),c=n(43534),d=n(90863),m=n(82861);function h(){let{r2s:e,rs:s,aarts:n,aars:i,c1s:h}=(0,r.useContext)(o.SwapContext);return console.log(e),console.log(s),console.log(n),console.log(i),console.log(h),(0,l.jsx)("div",{className:"w-full relative bg-white px-4 md:px-20 pt-20 pb-20",children:(0,l.jsxs)("div",{className:"relative max-w-[1440px] mx-auto",children:[(0,l.jsx)("h3",{className:"text-5xl font-bold text-slate-700",children:"Rebalance Bonus/Loss"}),(0,l.jsx)("p",{className:"mt-6 text-slate-500 w-full md:w-1/2",children:"The health of the entire system requires maintaining a certain ratio between stablecoins and leveraged assets. The protocol uses DAARA (Dynamic Asset Adequacy Ratio Adjustment) mechanism to achieve this balance. When DAARA is active, it rewards certain exchanges, while also limiting others. Below is the current situation:"}),(0,l.jsx)(a(),{className:"absolute top-0 right-24",src:"/balance.png",width:200,height:200,alt:"balance"}),(0,l.jsxs)(t.iA,{className:"mt-24 text-sm border border-slate-200",children:[(0,l.jsx)(t.ss,{className:"border-b border-slate-200",children:(0,l.jsxs)(t.SC,{children:[(0,l.jsx)(t.xs,{children:"Input"}),(0,l.jsx)(t.xs,{children:"Receive"}),(0,l.jsx)(t.xs,{children:"Bonus/Loss"}),(0,l.jsx)(t.xs,{})]})}),(0,l.jsxs)(t.RM,{children:[c.C.map(s=>{var n,i;let r=null!==(i=null==e?void 0:null===(n=e.find(e=>e.symbol===s.assetTokenSymbol))||void 0===n?void 0:n.r2)&&void 0!==i?i:0n;return(0,l.jsxs)(t.SC,{children:[(0,l.jsxs)(t.pj,{className:"align-middle",children:[(0,l.jsx)(a(),{className:"inline-block mr-2",width:24,height:24,src:"/".concat(s.assetTokenSymbol,".svg"),alt:""}),(0,l.jsx)("span",{className:"leading-",children:s.assetTokenSymbol})]}),(0,l.jsxs)(t.pj,{className:"items-center align-middle",children:[(0,l.jsx)(a(),{className:"inline-block mr-2",width:24,height:24,src:"/USB.svg",alt:""}),"USB"]}),(0,l.jsx)(t.pj,{children:0n===r?(0,l.jsx)("span",{className:"text-green-500",children:"0.000%"}):r===d.q?"Pause":(0,l.jsxs)("span",{className:"text-red-500",children:["-",(0,m.Rp)(r,3,8)+"%"]})}),(0,l.jsx)(t.pj,{children:(0,l.jsx)("button",{className:"btn-secondary w-fit",children:"Swap"})})]},s.assetTokenSymbol)}),c.C.map(e=>{var n,i;let r=null!==(i=null==s?void 0:null===(n=s.find(s=>s.symbol===e.assetTokenSymbol))||void 0===n?void 0:n.r2)&&void 0!==i?i:0n;return(0,l.jsxs)(t.SC,{children:[(0,l.jsxs)(t.pj,{className:"items-center align-middle",children:[(0,l.jsx)(a(),{className:"inline-block mr-2",width:24,height:24,src:"/USB.svg",alt:""}),"USB"]}),(0,l.jsxs)(t.pj,{className:"align-middle",children:[(0,l.jsx)(a(),{className:"inline-block mr-2",width:24,height:24,src:"/".concat(e.xTokenSymbol,".svg"),alt:""}),(0,l.jsx)("span",{className:"leading-",children:e.xTokenSymbol})]}),(0,l.jsx)(t.pj,{className:"text-green-500",children:0n===r?"0.000%":(0,m.Rp)(r,3,8)+"%"}),(0,l.jsx)(t.pj,{children:(0,l.jsx)("button",{className:"btn-secondary w-fit",children:"Swap"})})]},e.assetTokenSymbol)}),c.C.map(e=>{var s,r,o,c,d,u;let x=null!==(c=null==i?void 0:null===(s=i.find(s=>s.symbol===e.assetTokenSymbol))||void 0===s?void 0:s.aar)&&void 0!==c?c:0n,b=null!==(d=null==n?void 0:null===(r=n.find(s=>s.symbol===e.assetTokenSymbol))||void 0===r?void 0:r.aart)&&void 0!==d?d:0n,j=null!==(u=null==h?void 0:null===(o=h.find(s=>s.symbol===e.assetTokenSymbol))||void 0===o?void 0:o.c1)&&void 0!==u?u:0n,g=2n*(b-1n)+1n;return console.log(x,b,g),(0,l.jsxs)(t.SC,{children:[(0,l.jsxs)(t.pj,{className:"items-center align-middle",children:[(0,l.jsx)(a(),{className:"inline-block mr-2",width:24,height:24,src:"/USB.svg",alt:""}),"USB"]}),(0,l.jsxs)(t.pj,{className:"align-middle",children:[(0,l.jsx)(a(),{className:"inline-block mr-2",width:24,height:24,src:"/".concat(e.assetTokenSymbol,".svg"),alt:""}),(0,l.jsx)("span",{className:"leading-",children:e.assetTokenSymbol})]}),(0,l.jsx)(t.pj,{children:x<g?(0,l.jsx)("span",{className:"text-green-500",children:"0.000%"}):(0,l.jsx)("span",{className:"text-red-500",children:"-"+(0,m.Rp)(j,3,8)+"%"})}),(0,l.jsx)(t.pj,{children:(0,l.jsx)("button",{className:"btn-secondary w-fit",children:"Swap"})})]},e.assetTokenSymbol)})]})]}),(0,l.jsx)("button",{className:"text-sm mt-3 float-right underline",children:"Learn more about DAARA"})]})})}},82861:function(e,s,n){"use strict";n.d(s,{Rp:function(){return i},ZM:function(){return r},dq:function(){return a}});var l=n(77340),t=n(11639);let i=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let t=10**s;return(Math.floor(Number((0,l.b)(e,n))*t)/t).toLocaleString("en-US",{maximumFractionDigits:s})},a=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let n=10**s;return(Math.floor(Number((0,t.d)(e))*n)/n).toLocaleString("en-US",{maximumFractionDigits:s})},r=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let n=10**s;return String(Math.floor(Number((0,t.d)(e))*n)/n)}},56008:function(e,s,n){e.exports=n(8170)}},function(e){e.O(0,[970,394,938,846,941,253,961,744],function(){return e(e.s=43495)}),_N_E=e.O()}]);