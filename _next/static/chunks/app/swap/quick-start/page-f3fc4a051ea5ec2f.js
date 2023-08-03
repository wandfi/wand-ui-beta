(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{96950:function(e,l,s){Promise.resolve().then(s.bind(s,19637))},19637:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return p}});var t=s(9268),n=s(76394),a=s.n(n),i=s(89725),r=s(29040),d=s(51265),c=s(71114);function o(e){let{trigger:l,input:s,receive:n}=e;return(0,t.jsxs)(r.fC,{children:[(0,t.jsx)(r.xz,{asChild:!0,children:l}),(0,t.jsxs)(r.h_,{children:[(0,t.jsx)(r.aV,{className:"bg-black/75 fixed inset-0 z-40"}),(0,t.jsxs)(r.VY,{className:"fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50",children:[(0,t.jsxs)(r.Dx,{className:"p-6 text-lg font-medium",children:["Buy ",n," with ",s]}),(0,t.jsxs)("div",{className:"p-6 pt-0 relative",children:[(0,t.jsx)(d.i,{max:!0,label:"Input",symbol:s,options:[s],slot:(0,t.jsx)("div",{className:"text-sm text-slate-500 mt-1 pl-3",children:"Balance: 0.001"})}),(0,t.jsx)("div",{className:"w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 bg-white border border-slate-200 rounded-full flex items-center justify-center",children:(0,t.jsx)(i.YRR,{className:"stroke-slate-900 w-6 h-6"})}),(0,t.jsx)(d.i,{className:"mt-4",symbol:n,label:"Receive",options:[n],slot:(0,t.jsx)("div",{className:"text-sm text-slate-500 mt-1 pl-3",children:"Balance: 0.001"})})]}),(0,t.jsx)(r.x8,{className:"absolute top-4 right-4 rounded-md hover:bg-slate-100 p-1.5",children:(0,t.jsx)(i.lhV,{})}),(0,t.jsx)(c.o,{calssName:"px-9",data:[{label:"Rebalance bonus/loss: (Include price impact)",value:"-0.03%"},{label:"Reward",value:"$233 Wand"}]}),(0,t.jsx)("div",{className:"px-9 pb-6",children:(0,t.jsx)("button",{className:"btn-primary",children:"Buy"})})]})]})]})}function u(e){let{input:l,receive:s,slot:n}=e;return(0,t.jsxs)("div",{className:"card mt-3 first:mt-0",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,t.jsxs)("div",{className:"w-full rounded-2xl bg-slate-50 flex justify-between items-center gap-4 px-12 py-6",children:[(0,t.jsxs)("div",{className:"text-center flex-shrink-0",children:[(0,t.jsx)(a(),{width:48,height:48,src:"/".concat(l,".svg"),alt:"input"}),(0,t.jsx)("div",{className:"slate-700 mt-2",children:l})]}),(0,t.jsx)(i.CR0,{className:"text-slate-500 flex-shrink-0"}),(0,t.jsxs)("div",{className:"text-center w-fit flex-shrink-0",children:[(0,t.jsx)(a(),{width:48,height:48,src:"/".concat(s,".svg"),alt:"receive"}),(0,t.jsx)("div",{className:"slate-700 mt-2",children:s})]})]}),(0,t.jsx)("div",{className:"w-full py-2 px-4",children:n})]}),(0,t.jsx)(o,{input:l,receive:s,trigger:(0,t.jsx)("button",{className:"btn-secondary mt-4",children:"Buy"})})]})}var x=s(90937),m=s(35846),h=s.n(m),v=s(43534),f=s(86006),j=s(77941),b=s(82861);function p(){let{usbQs:e,upperLimits:l,leverages:s,fundingRates:n}=(0,f.useContext)(j.SwapContext);return console.log(e),console.log(s),(0,t.jsx)("div",{className:"w-full flex gap-3",children:(0,t.jsxs)(x.rj,{numItems:1,numItemsSm:2,className:"w-full gap-6 sm:gap-3",children:[(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsx)("div",{className:"font-semibold text-slate-700",children:"Buy leveraged assets"}),null==s?void 0:s.map((e,l)=>{var s,a,i,r,d;return(0,t.jsx)(u,{input:null===(a=v.C)||void 0===a?void 0:null===(s=a[l])||void 0===s?void 0:s.assetTokenSymbol,receive:null===(r=v.C)||void 0===r?void 0:null===(i=r[l])||void 0===i?void 0:i.xTokenSymbol,slot:(0,t.jsx)(c.o,{data:[{value:(0,b.dq)(e.leverage,2)+"x",label:"Leverage"},{value:(0,b.dq)((null==n?void 0:null===(d=n.find(l=>l.symbol===e.symbol))||void 0===d?void 0:d.rate)*100n)+"%",label:"Annualized funding rate"}]})},l)})]}),(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsx)("div",{className:"font-semibold text-slate-700",children:"Buy stable assets"}),v.C.map((s,n)=>{var a,i,r,d;let c=null!==(r=null===(a=e.find(e=>e.symbol===s.assetTokenSymbol))||void 0===a?void 0:a.amount)&&void 0!==r?r:0n,o=null!==(d=null===(i=l.find(e=>e.symbol===s.assetTokenSymbol))||void 0===i?void 0:i.limit)&&void 0!==d?d:0n,x=o>0?(c/o*100n).toLocaleString():"0";return(0,t.jsx)(u,{input:s.assetTokenSymbol,receive:"USB",slot:(0,t.jsxs)("div",{className:"flex flex-col h-full",children:[(0,t.jsx)("div",{className:"text-sm text-slate-700",children:"Minted / Upper Limit:"}),(0,t.jsxs)("div",{className:"text-md text-slate-700 font-medium",children:[(0,b.dq)(c)," / ",(0,b.dq)(o)]}),(0,t.jsx)("div",{className:"relative mt-4 h-px w-full bg-slate-900",children:(0,t.jsx)("div",{className:"absolute w-2 h-2 rounded-full bg-slate-900 top-1/2 -translate-y-1/2",style:{left:o>0?x:"0px"}})}),(0,t.jsx)("div",{className:"text-sm text-slate-700 mt-auto",children:"Remaining available: 2,123,221"})]})},n)}),(0,t.jsx)(h(),{href:"",className:"w-full inline-block text-slate-500 text-sm mt-3 text-right",children:"Stake USB to earn"})]})]})})}},51265:function(e,l,s){"use strict";s.d(l,{i:function(){return c}});var t=s(9268),n=s(32726),a=s(63831),i=s(27374),r=s(76394),d=s.n(r);function c(e){let{className:l,options:s=[],label:r,slot:c,symbol:o,setSymbol:u,amount:x,setAmount:m,max:h,onMaximize:v}=e;return(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("div",{className:(0,a.Z)("relative",l),children:[(0,t.jsx)("div",{className:"absolute top-2 left-3 font-medium text-sm text-slate-700",children:r}),(0,t.jsx)("input",{type:"number",className:"w-full h-16 pt-6 pl-3 font-bold text-2xl border text-slate-700 border-slate-200 rounded-md focus:ring-2 focus:outline-blue-500",placeholder:"0.00",value:x,onChange:e=>m(e.target.value)}),(0,t.jsxs)("div",{className:"absolute right-3 bottom-3 flex items-center gap-2",children:[(0,t.jsxs)(n.fC,{disabled:(null==s?void 0:s.length)<2,defaultValue:o,value:o,onValueChange:e=>u(e),children:[(0,t.jsxs)(n.xz,{className:"flex h-4 items-center w-28 justify-end",children:[(0,t.jsx)(n.B4,{className:"bg-white mr-1",placeholder:""}),(null==s?void 0:s.length)>=2?(0,t.jsx)(n.JO,{children:(0,t.jsx)(i.kWQ,{})}):null]}),(0,t.jsx)(n.h_,{children:(0,t.jsx)(n.VY,{className:"bg-white shadow-lg border p-1 rounded-md",children:(0,t.jsx)(n.l_,{children:null==s?void 0:s.map(e=>(0,t.jsx)(n.ck,{className:"flex px-4 py-2 text-sm rounded- gap-2 hover:bg-slate-100 cursor-pointer",value:e,children:(0,t.jsx)(n.eT,{children:(0,t.jsxs)("div",{className:"flex items-center leading-4 font-medium",children:[(0,t.jsx)(d(),{width:16,height:16,src:"/".concat(e,".svg"),alt:"",style:{display:"inline-block",marginRight:4}}),e]})})},e))})})})]}),h?(0,t.jsx)("button",{onClick:v,className:"text-indigo-500 text-sm font-medium",children:"Max"}):null]})]}),c]})}},71114:function(e,l,s){"use strict";s.d(l,{o:function(){return a}});var t=s(9268),n=s(63831);function a(e){let{data:l,calssName:s,style:a}=e;return(0,t.jsx)("div",{className:(0,n.Z)("text-sm flex flex-col gap-3 text-slate-700",s),style:a,children:l.map(e=>(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("div",{children:e.label}),(0,t.jsx)("div",{children:e.value})]},e.label))})}},82861:function(e,l,s){"use strict";s.d(l,{MN:function(){return d},Rp:function(){return a},ZM:function(){return r},dq:function(){return i}});var t=s(77340),n=s(11639);let a=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,s=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let n=10**l;return(Math.floor(Number((0,t.b)(e,s))*n)/n).toLocaleString("en-US",{maximumFractionDigits:l})},i=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**l;return(Math.floor(Number((0,n.d)(e))*s)/s).toLocaleString("en-US",{maximumFractionDigits:l})},r=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**l;return String(Math.floor(Number((0,n.d)(e))*s)/s)},d=e=>e?(Math.floor(1e3*Number((0,n.d)(e)))/1e3).toFixed(3):"0.000"}},function(e){e.O(0,[287,524,970,394,935,937,140,567,846,726,40,941,253,961,744],function(){return e(e.s=96950)}),_N_E=e.O()}]);