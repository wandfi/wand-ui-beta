(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7702],{34525:function(e,s,l){Promise.resolve().then(l.bind(l,1936))},1936:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return h}});var t=l(9268),n=l(85418),i=l(43534),r=l(57756),a=l(82861),c=l(99468),d=l(76394),x=l.n(d),o=l(86006),m=l(71114);function u(e){var s;let{className:l}=e,d=i.iK[(0,n.B)()],{prices:u,balances:h,earns:j}=(0,o.useContext)(r.FetcherContext),v=null==h?void 0:null===(s=h.find(e=>"USB"===e.symbol))||void 0===s?void 0:s.balance,f=Object.values(j).filter(e=>"USB"==e.stakeSymbol).reduce((e,s)=>e+s.stake,0n),N=["USB",...d.map(e=>e.xTokenSymbol)].reduce((e,s)=>{var l,t,n;let i=null!==(t=u[s])&&void 0!==t?t:0n,r=null!==(n=null==h?void 0:null===(l=h.find(e=>e.symbol===s))||void 0===l?void 0:l.balance)&&void 0!==n?n:0n;return e+i*r},0n);return(0,t.jsxs)("div",{className:l,children:[(0,t.jsx)("h3",{className:"h3",children:"My assets"}),(0,t.jsxs)(c.rj,{numItems:1,numItemsLg:6,className:"gap-3 mt-5",children:[(0,t.jsx)(c.JX,{numColSpan:2,children:(0,t.jsxs)("div",{className:"card h-full",children:[(0,t.jsx)("h5",{className:"font-medium",children:"Total value"}),(0,t.jsxs)("div",{className:"text-3xl font-semibold mt-2",children:["$",(0,a.dq)(N/10n**18n)]})]})}),(0,t.jsx)(c.JX,{numColSpan:2,children:(0,t.jsxs)("div",{className:"card w-full",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(x(),{width:32,height:32,src:"/USB.svg",alt:"USB"}),(0,t.jsx)("div",{className:"text-lg font-semibold",children:"USB"})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("div",{className:"text-3xl font-semibold mt-2",children:(0,a.dq)(v+f)}),(0,t.jsxs)("div",{className:"flex flex-col mt-2",children:[(0,t.jsxs)("div",{className:"text-green-600 text-sm",children:["+3.728 ",(0,t.jsx)("span",{children:"(ARP: 2.323%)"})]}),(0,t.jsx)("div",{className:"text-xs text-neutral-500",children:"Estimated increase in 24 hours"})]})]}),(0,t.jsx)(m.o,{calssName:"mt-3",data:[{label:"Staked",value:(0,a.dq)(f)},{label:"Balance",value:(0,a.dq)(v)}]})]})}),d.map(e=>{var s;let l=e.xTokenSymbol,n=null==h?void 0:null===(s=h.find(e=>e.symbol===l))||void 0===s?void 0:s.balance;return(0,t.jsx)(c.JX,{numColSpan:2,children:(0,t.jsxs)("div",{className:"card h-full",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(x(),{width:32,height:32,src:"/".concat(l,".svg"),alt:l}),(0,t.jsx)("div",{className:"text-lg font-semibold",children:l})]}),(0,t.jsx)("div",{className:"text-3xl font-semibold mt-2",children:(0,a.dq)(n)})]})},l)})]})]})}function h(){let e=i.iK[(0,n.B)()],{totalSupplies:s,prices:l,assetLocked:d}=(0,o.useContext)(r.FetcherContext);s.USB;let m=e.reduce((e,s)=>{var t,n;let i=null!==(t=d[s.assetTokenSymbol])&&void 0!==t?t:0n,r=null!==(n=l[s.assetTokenSymbol])&&void 0!==n?n:0n;return e+i*r},0n);return(0,t.jsx)("div",{className:"pt-28 bg-slate-50 min-h-screen",children:(0,t.jsxs)("div",{className:"mx-auto max-w-screen-xl p-4",children:[(0,t.jsx)(c.Dx,{className:"text-2xl text-slate-900",children:"Stats"}),(0,t.jsx)("p",{className:"text-sm font-medium text-slate-500 mb-3",children:"All protocol assets are derived from the underlying assets, and the net value is backed by these underlying assets."}),(0,t.jsxs)(c.rj,{numItemsSm:2,className:"gap-3",children:[(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(c.Dx,{children:"Underlying Assets"}),(0,t.jsxs)(c.iA,{children:[(0,t.jsx)(c.ss,{children:(0,t.jsxs)(c.SC,{children:[(0,t.jsx)(c.xs,{}),(0,t.jsx)(c.xs,{children:"Amount"})]})}),(0,t.jsx)(c.RM,{children:e.map(e=>(0,t.jsxs)(c.SC,{children:[(0,t.jsxs)(c.pj,{className:"flex items-center gap-2",children:[(0,t.jsx)(x(),{width:24,height:24,src:"/".concat(e.assetTokenSymbol,".svg"),alt:""}),e.assetTokenSymbol]}),(0,t.jsx)(c.pj,{children:(0,a.dq)(d[e.assetTokenSymbol])})]},e.assetTokenSymbol))})]}),(0,t.jsxs)("div",{className:"text-sm text-slate-500 text-right",children:["TVL: $",(0,a.dq)(m/10n**18n)]}),(0,t.jsx)("button",{className:"text-sm text-indigo-500 underline text-right float-right mt-2",children:"Vote to include more"})]}),(0,t.jsxs)("div",{className:"card border",children:[(0,t.jsx)(c.Dx,{children:"Protocol Asset Supply"}),(0,t.jsxs)(c.iA,{children:[(0,t.jsx)(c.ss,{children:(0,t.jsxs)(c.SC,{children:[(0,t.jsx)(c.xs,{}),(0,t.jsx)(c.xs,{children:"Circulating Supply"}),(0,t.jsx)(c.xs,{children:"Net Value"}),(0,t.jsx)(c.xs,{children:"Market Cap"})]})}),(0,t.jsx)(c.RM,{children:e.map(e=>{var n;let i=e.xTokenSymbol,r=null!==(n=l[i])&&void 0!==n?n:0n,d=r*s[i]/10n**18n;return(0,t.jsxs)(c.SC,{children:[(0,t.jsxs)(c.pj,{className:"flex items-center gap-2",children:[(0,t.jsx)(x(),{width:24,height:24,src:"/".concat(i,".svg"),alt:i}),i]}),(0,t.jsx)(c.pj,{children:(0,a.dq)(s[i])}),(0,t.jsxs)(c.pj,{children:["$",(0,a.dq)(r)]}),(0,t.jsxs)(c.pj,{children:["$",(0,a.dq)(d)]})]},i)})})]})]})]}),(0,t.jsx)(u,{className:"mt-20"})]})})}},71114:function(e,s,l){"use strict";l.d(s,{o:function(){return i}});var t=l(9268),n=l(63831);function i(e){let{data:s,calssName:l,style:i}=e;return(0,t.jsx)("div",{className:(0,n.Z)("text-sm flex flex-col gap-3 text-slate-700",l),style:i,children:s.map(e=>(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("div",{children:e.label}),(0,t.jsx)("div",{children:e.value})]},e.label))})}},82861:function(e,s,l){"use strict";l.d(s,{MN:function(){return c},Rp:function(){return i},ZM:function(){return a},dq:function(){return r}});var t=l(77340),n=l(11639);let i=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,l=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let n=10**s;return(Math.floor(Number((0,t.b)(e,l))*n)/n).toLocaleString("en-US",{maximumFractionDigits:s})},r=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let l=10**s;return(Math.floor(Number((0,n.d)(e))*l)/l).toLocaleString("en-US",{maximumFractionDigits:s})},a=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let l=10**s;return String(Math.floor(Number((0,n.d)(e))*l)/l)},c=e=>e?(Math.floor(1e3*Number((0,n.d)(e)))/1e3).toFixed(3):"0.000"}},function(e){e.O(0,[7544,6394,1391,914,9468,106,7756,9253,2961,1744],function(){return e(e.s=34525)}),_N_E=e.O()}]);