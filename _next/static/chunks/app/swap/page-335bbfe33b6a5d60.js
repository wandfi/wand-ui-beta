(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{79469:function(e,l,s){Promise.resolve().then(s.bind(s,12532))},12532:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return _}});var t=s(9268),n=s(90937),a=s(76394),i=s.n(a),d=s(27374),r=s(86006),o=s(77941),c=s(43534),u=s(82861),m=s(44028);function x(){var e;let{prices:l,leverages:s}=(0,r.useContext)(o.SwapContext);return(0,t.jsxs)("div",{className:"card w-full h-fit flex flex-col",children:[(0,t.jsxs)("h5",{className:"font-bold text-sm text-slate-700",children:["Net Value",(0,t.jsx)(m.zt,{children:(0,t.jsxs)(m.fC,{children:[(0,t.jsx)(m.xz,{asChild:!0,children:(0,t.jsx)("div",{className:"inline-block px-1",children:(0,t.jsx)(d.if7,{className:"ml-1 inline-block w-[14px] h-[14px] stroke-slate-500"})})}),(0,t.jsx)(m.h_,{children:(0,t.jsxs)(m.VY,{className:"max-w-xs text-sm text-white bg-slate-900 rounded-md p-4",children:["The Net value is calculated based on the underlying assets and is backed by these assets. The Market Price on secondary markets might deviate from the Net value due to a variety of factors. Anyone can engage in arbitrage, and such actions will serve to eliminate these discrepancies.",(0,t.jsx)(m.Eh,{})]})})]})})]}),(0,t.jsxs)(n.iA,{className:"mt-4 text-sm",children:[(0,t.jsx)(n.ss,{}),(0,t.jsxs)(n.RM,{children:[(0,t.jsxs)(n.SC,{children:[(0,t.jsxs)(n.pj,{className:"font-medium flex gap-2 px-0",children:[(0,t.jsx)(i(),{src:"/USB.svg",width:20,height:20,alt:"USB"}),"USB"]}),(0,t.jsx)(n.pj,{children:"Universal Stable Basis"}),(0,t.jsx)(n.pj,{}),(0,t.jsx)(n.pj,{className:"text-right",children:"$1"})]}),null===(e=c.C)||void 0===e?void 0:e.map(e=>{var a,d;return(0,t.jsxs)(n.SC,{children:[(0,t.jsxs)(n.pj,{className:"font-medium flex gap-2 px-0",children:[(0,t.jsx)(i(),{src:"/".concat(e.xTokenSymbol,".svg"),width:20,height:20,alt:e.xTokenSymbol}),e.xTokenSymbol]}),(0,t.jsxs)(n.pj,{children:["Leverage long on ",e.assetTokenSymbol]}),(0,t.jsxs)(n.pj,{children:[(0,u.dq)(null==s?void 0:null===(a=s.find(l=>l.symbol===e.assetTokenSymbol))||void 0===a?void 0:a.leverage),"x"]}),(0,t.jsxs)(n.pj,{className:"text-right",children:["$",(0,u.dq)(null==l?void 0:null===(d=l.find(l=>l.symbol===e.xTokenSymbol))||void 0===d?void 0:d.price)]})]},e.assetTokenSymbol)})]})]}),(0,t.jsx)("button",{className:"self-end text-slate-900 underline text-sm",children:"Check the leverage"})]})}var h=s(90995),f=s(12120);let v=e=>c.C.findIndex(l=>l.assetTokenSymbol===e)>-1,b=e=>c.C.findIndex(l=>l.xTokenSymbol===e)>-1,j=(e,l)=>{for(let s=0;s<c.C.length;s++){let t=[c.C[s].assetTokenSymbol,c.C[s].xTokenSymbol];if(t.findIndex(l=>l===e)>-1||t.findIndex(e=>e===l)>-1)return s}},p=(e,l)=>"USB"===e?l.filter(l=>l!==e):v(e)?["USB",e+"x"]:b(e)?[e.replace("x","")]:l;var g=s(19707),N=s(18624),y=s(88426);let S=e=>{let{className:l}=e;return(0,t.jsxs)("svg",{fill:"none",className:l?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,t.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,t.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})};var B=s(32726),w=s(63831);function k(e){let{className:l,options:s=[],label:n,slot:a,symbol:r,setSymbol:o,amount:c,setAmount:u,max:m,onMaximize:x}=e;return(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("div",{className:(0,w.Z)("relative",l),children:[(0,t.jsx)("div",{className:"absolute top-2 left-3 font-medium text-sm text-slate-700",children:n}),(0,t.jsx)("input",{type:"number",className:"w-full h-16 pt-6 pl-3 font-bold text-2xl border text-slate-700 border-slate-200 rounded-md focus:ring-2 focus:outline-blue-500",placeholder:"0.00",value:c,onChange:e=>u(e.target.value),step:.01}),(0,t.jsxs)("div",{className:"absolute right-3 bottom-3 flex items-center gap-2",children:[(0,t.jsxs)(B.fC,{disabled:(null==s?void 0:s.length)<2,defaultValue:r,value:r,onValueChange:e=>o(e),children:[(0,t.jsxs)(B.xz,{className:"flex h-4 items-center w-28 justify-end",children:[(0,t.jsx)(B.B4,{className:"bg-white mr-1",placeholder:""}),(null==s?void 0:s.length)>=2?(0,t.jsx)(B.JO,{children:(0,t.jsx)(d.kWQ,{})}):null]}),(0,t.jsx)(B.h_,{children:(0,t.jsx)(B.VY,{className:"bg-white shadow-lg border p-1 rounded-md",children:(0,t.jsx)(B.l_,{children:null==s?void 0:s.map(e=>(0,t.jsx)(B.ck,{className:"flex px-4 py-2 text-sm rounded- gap-2 hover:bg-slate-100 cursor-pointer",value:e,children:(0,t.jsx)(B.eT,{children:(0,t.jsxs)("div",{className:"flex items-center leading-4 font-medium",children:[(0,t.jsx)(i(),{width:16,height:16,src:"/".concat(e,".svg"),alt:"",style:{display:"inline-block",marginRight:4}}),e]})})},e))})})})]}),m?(0,t.jsx)("button",{onClick:x,className:"text-indigo-500 text-sm font-medium",children:"Max"}):null]})]}),a]})}var C=s(85418),T=s(90863),U=s(89725),M=s(57756),E=s(69624);let R=(e,l)=>{let{config:s}=(0,g.PJ)({address:e,abi:E.em,functionName:"approve",args:[l,100000000n*BigInt(1e18)],enabled:!!l&&!!e&&"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"!==e}),{write:t,data:n,isLoading:a}=(0,g.GG)(s),{isLoading:i}=(0,g.BX)({hash:null==n?void 0:n.hash});return{approve:t,isApproveLoading:a||i}};var L=s(16625);let A=(e,l,s,t)=>{let{config:n}=(0,g.PJ)({address:e,abi:N.j,functionName:"mintUSB",args:[(0,y.f)(l)],enabled:(0,y.f)(l)>0&&t,value:(0,y.f)(s)}),{write:a,data:i,isLoading:d}=(0,g.GG)(n),{isLoading:r}=(0,g.BX)({hash:null==i?void 0:i.hash});return{mintUSB:a,isMintLoading:d||r}},P=(e,l,s,t)=>{let{config:n}=(0,g.PJ)({address:e,abi:N.j,functionName:"mintXTokens",args:[(0,y.f)(l)],enabled:!!l&&t,value:(0,y.f)(s)}),{write:a,data:i,isLoading:d}=(0,g.GG)(n),{isLoading:r}=(0,g.BX)({hash:null==i?void 0:i.hash});return{mintXToken:a,isMintXLoading:d||r}},q=(e,l,s)=>{let{config:t}=(0,g.PJ)({address:e,abi:N.j,functionName:"redeemByXTokens",args:[(0,y.f)(l)],enabled:(0,y.f)(l)>0&&s}),{write:n,data:a,isLoading:i}=(0,g.GG)(t),{isLoading:d}=(0,g.BX)({hash:null==a?void 0:a.hash});return{redeemByXToken:n,isRedeemByXTokenLoading:i||d}},I=(e,l,s)=>{let{config:t}=(0,g.PJ)({address:e,abi:N.j,functionName:"redeemByUSB",args:[(0,y.f)(l)],enabled:(0,y.f)(l)>0&&s}),{write:n,data:a,isLoading:i}=(0,g.GG)(t),{isLoading:d}=(0,g.BX)({hash:null==a?void 0:a.hash});return{redeemByUSB:n,isRedeemByUSBLoading:i||d}},X=(e,l,s)=>{let{config:t}=(0,g.PJ)({address:e,abi:N.j,functionName:"usbToXTokens",args:[(0,y.f)(l)],enabled:!!l&&s}),{write:n,data:a,isLoading:i}=(0,g.GG)(t),{isLoading:d}=(0,g.BX)({hash:null==a?void 0:a.hash});return{usb2XToken:n,isUsb2XTokenLoading:i||d}},F=(e,l,s,t,n,a)=>{let{mintUSB:i,isMintLoading:d}=A(e,l,"ETH"===s?l:"0",n!==T.q&&"USB"===t&&a),{mintXToken:o,isMintXLoading:c}=P(e,l,"ETH"===s?l:"0",v(s)&&b(t)),{redeemByXToken:u,isRedeemByXTokenLoading:m}=q(e,l,b(s)&&v(t)),{redeemByUSB:x,isRedeemByUSBLoading:h}=I(e,l,n!==T.q&&"USB"===s&&b(t)),{usb2XToken:f,isUsb2XTokenLoading:j}=X(e,l,"USB"===s&&b(t)),p=(0,r.useMemo)(()=>v(s)?"USB"===t?i:o:"USB"===s?v(t)?x:f:u,[s,t,i,o,x,f,u]);return{swap:p,isSwapLoading:d||c||m||h||j}},G=()=>{var e,l,s,n,a;let[i,d]=(0,r.useState)(""),[o,m]=(0,r.useState)("ETHx"),x=null==o?void 0:o.replace("x",""),{balances:h}=(0,r.useContext)(M.FetcherContext),f=null!==(s=null==h?void 0:h.find(e=>"USB"===e.symbol).balance)&&void 0!==s?s:0n,v=null!==(n=null==h?void 0:h.find(e=>e.symbol===o).balance)&&void 0!==n?n:0n,b=null!==(a=null==h?void 0:null===(e=h.find(e=>e.symbol===x))||void 0===e?void 0:e.balance)&&void 0!==a?a:0n,[j,p]=(0,r.useState)(!1),B=(0,r.useMemo)(()=>{var e,l;return null===(l=c.C)||void 0===l?void 0:null===(e=l.find(e=>e.xTokenSymbol===o))||void 0===e?void 0:e.poolAddress},[o]),{data:w}=(0,g.do)({address:B,abi:N.j,functionName:"calculatePairedUSBAmountToRedeemByXTokens",args:[(0,y.f)(i)],chainId:(0,C.B)(),enabled:(0,y.f)(i)>0,onError:e=>{p(!0)}}),{redeemByXToken:T,isRedeemByXTokenLoading:U}=q(B,i,!!w);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"text-sm text-slate-500",children:"Tip：Redemption requires both x and $USB"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(k,{max:!0,symbol:o,options:null===(l=c.C)||void 0===l?void 0:l.map(e=>e.xTokenSymbol),setSymbol:e=>m(e),amount:i,setAmount:e=>d(e),onMaximize:()=>d((0,u.MN)(v)),label:(0,t.jsx)("div",{className:"flex",children:"Input"}),slot:(0,t.jsx)("div",{className:"flex items-center mt-1 ",children:(0,t.jsxs)("div",{className:"text-sm text-slate-500 pl-3",children:["Balance: ",(0,u.dq)(v)]})})}),(0,t.jsxs)("div",{className:"p-4 bg-slate-50 mt-2 rounded-lg",children:[(0,t.jsxs)("div",{className:"text-sm text-slate-500 font-medium",children:["Requires pairing with ",(0,u.dq)(w)," USB"]}),(0,t.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,t.jsxs)("div",{className:"text-sm text-slate-500",children:["USB Balance: ",(0,u.dq)(f)]}),(0,t.jsx)("button",{className:"inline-block text-indigo-500 text-sm underline",children:"Not enough? Buy Now."})]})]}),(0,t.jsx)(k,{className:"mt-3",amount:i,options:[x],symbol:x,label:"Receive",slot:(0,t.jsxs)("div",{className:"text-sm text-slate-500 mt-1 pl-3",children:["Balance: ",(0,u.dq)(b)]})})]}),(0,t.jsx)("div",{className:"text-right text-sm text-slate-500",children:"Redemption fee: 0.5%"}),(0,t.jsxs)("button",{className:"btn-primary",onClick:T,disabled:U||!T,children:[U&&(0,t.jsx)(S,{}),"Redeem"]})]})};var J=s(36944);function O(e){let{supply:l,upperLimit:s}=e,n=(0,r.useRef)(null),a=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(a.current&&n.current&&i.current){let e=a.current.getBoundingClientRect().width,l=n.current.getBoundingClientRect().width,s=i.current.getBoundingClientRect().width;l/2>e?(n.current.style.left="0px",n.current.style.transform="translate(0)"):l/2>s-e&&(n.current.style.right="0px",n.current.style.transform="translate(0)")}},[n.current,a.current]),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-sm text-slate-700",children:"USB Circulating Supply / Upper Limit"}),(0,t.jsx)("div",{className:"mt-2 flex items-center gap-2",children:(0,t.jsxs)(h.fC,{disabled:!0,min:0,max:s,value:[l],className:"relative flex flex-1 items-center select-none touch-none h-5",children:[(0,t.jsx)(h.fQ,{ref:i,className:"bg-slate-100 relative grow rounded-full h-[3px]",children:(0,t.jsx)(h.e6,{ref:a,className:"absolute bg-slate-900 rounded-full h-full"})}),(0,t.jsx)(h.bU,{className:"relative block w-3 h-3 bg-slate-900 rounded-full border-2 border-slate-900 focus:outline-none",children:(0,t.jsx)("div",{ref:n,className:"text-xs text-slate-500 absolute whitespace-nowrap top-3 -translate-x-1/2",children:"".concat(l.toLocaleString()," / ").concat(s.toLocaleString())})})]})}),(0,t.jsx)("div",{className:"mt-6 text-xs text-slate-500 text-center",children:"The upper limit will grow with the demand for leverage."})]})}function V(e){let{rebalanceBonusLoss:l,reward:s,isBonus:n}=e;return(0,t.jsxs)("div",{className:"text-sm",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("div",{className:"text-slate-700",children:"Rebalance bonus/loss"}),(0,t.jsx)("div",{className:"".concat(n?"text-green-400":"text-red-400"),children:l})]}),(0,t.jsxs)("div",{className:"flex justify-between mt-3",children:[(0,t.jsx)("div",{className:"text-slate-700",children:"Reward"}),(0,t.jsx)("div",{className:"text-slate-900",children:"--"})]})]})}function z(){var e,l,s,n,a,i,d,m,x;let{address:h}=(0,g.mA)(),{balances:B}=(0,r.useContext)(M.FetcherContext),{prices:w,r2s:E,allowances4pool:A,totalUpperLimit:P,usbQs:q}=(0,r.useContext)(o.SwapContext),[I,X]=(0,r.useState)(""),[z,_]=(0,J.useQueryParam)("symbol1",(0,J.withDefault)(J.StringParam,"ETH")),[H,D]=(0,J.useQueryParam)("symbol2",(0,J.withDefault)(J.StringParam,"USB")),Q=L.e.find(e=>e.symbol===z),Y=null==B?void 0:null===(e=B.find(e=>e.symbol===z))||void 0===e?void 0:e.balance,Z=null==B?void 0:null===(l=B.find(e=>e.symbol===H))||void 0===l?void 0:l.balance,$=null==A?void 0:null===(s=A.find(e=>e.symbol===z))||void 0===s?void 0:s.allowance,W=$<(0,y.f)(I),K=null==q?void 0:q.reduce((e,l)=>e+l.amount,0n),ee=(0,r.useMemo)(()=>c.C.reduce((e,l)=>e.concat([l.assetTokenSymbol,l.xTokenSymbol]),["USB"]),[]),el=(0,r.useMemo)(()=>c.C.reduce((e,l)=>e.concat([l.assetTokenSymbol]),["USB"]),[]),es=(0,r.useMemo)(()=>p(z,ee),[el,z]);(0,r.useEffect)(()=>D(es[0]),[z,es]);let et=(0,r.useMemo)(()=>j(z,H),[z,H]),en=(0,r.useMemo)(()=>{var e,l;return null===(l=c.C)||void 0===l?void 0:null===(e=l[null!=et?et:0])||void 0===e?void 0:e.poolAddress},[et]),ea=(0,r.useMemo)(()=>{var e,l;return null===(l=c.C)||void 0===l?void 0:null===(e=l[null!=et?et:0])||void 0===e?void 0:e.assetTokenSymbol},[et]),ei=null!==(d=null==E?void 0:null===(n=E.find(e=>e.symbol===ea))||void 0===n?void 0:n.r2)&&void 0!==d?d:0n,{swap:ed,isSwapLoading:er}=F(en,I,z,H,ei,!W),{approve:eo,isApproveLoading:ec}=R(null==Q?void 0:Q.address[(0,C.B)()],en),[eu,em]=(0,r.useState)(!1),{data:ex}=(0,g.do)({address:en,abi:N.j,functionName:"calculateMintUSBOut",args:[(0,y.f)(I)],chainId:(0,C.B)(),enabled:(0,y.f)(I)>0&&"USB"===H,onSuccess:e=>{em(!1)},onError:e=>{em(e.message.includes("AAR Below Safe Threshold after Mint"))}});(0,r.useEffect)(()=>{"USB"!==H&&em(!1)},[H]);let{data:eh}=(0,g.do)({address:en,abi:N.j,functionName:"calculateMintXTokensOut",args:[(0,y.f)(I)],chainId:(0,C.B)(),enabled:(0,y.f)(I)>0&&b(H)&&"USB"!==z}),{data:ef}=(0,g.do)({address:en,abi:N.j,functionName:"calculateUSBToXTokensOut",args:[(0,y.f)(I)],chainId:(0,C.B)(),enabled:(0,y.f)(I)>0&&"USB"===z&&b(H)}),{data:ev}=(0,g.do)({address:en,abi:N.j,functionName:"calculateRedemptionOutByUSB",args:[(0,y.f)(I)],chainId:(0,C.B)(),account:h,enabled:(0,y.f)(I)>0&&"USB"===z&&v(H)}),eb=(0,r.useMemo)(()=>{if(v(z))return"USB"===H?null!=ex?ex:0n:null!=eh?eh:0n;if("USB"===z){var e;return v(H)?null!==(e=null==ev?void 0:ev[0])&&void 0!==e?e:0n:null!=ef?ef:0n}return 0n},[ev,z,H,ex,eh,ef]),ej=(0,y.f)(I),ep=null!==(m=null==w?void 0:null===(a=w.find(e=>e.symbol===z))||void 0===a?void 0:a.price)&&void 0!==m?m:0n,eg=null!==(x=null==w?void 0:null===(i=w.find(e=>e.symbol===H))||void 0===i?void 0:i.price)&&void 0!==x?x:0n;console.log(z,"22222222"),console.log(H,"2222222222333333333333");let eN=ep*ej>0?(eg*eb*10n**18n/(ep*ej)-10n**18n)*100n:0n,ey="USB"===H&&ei===T.q;return(0,t.jsx)("div",{className:"card w-full",children:(0,t.jsxs)(f.fC,{defaultValue:"swap",children:[(0,t.jsx)(f.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[{label:"Atomic Swap",value:"swap"},{label:"Redeem",value:"redeem"}].map(e=>{let{label:l,value:s}=e;return(0,t.jsx)(f.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:s,children:l},s)})}),(0,t.jsx)(f.VY,{value:"swap",className:"flex flex-col gap-6 mt-6",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(k,{max:!0,label:"Input",amount:I,setAmount:X,options:el,symbol:z,setSymbol:_,onMaximize:()=>X((0,u.MN)(Y)),slot:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"text-sm text-slate-500 mt-1 pl-3",children:["Balance: ",(0,u.dq)(Y)]})})}),(0,t.jsx)("div",{className:"w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 z-10 bg-white border border-slate-200 rounded-full flex items-center justify-center",children:(0,t.jsx)(U.YRR,{className:"stroke-slate-900 w-6 h-6"})}),(0,t.jsx)(k,{className:"mt-3",label:"Receive",amount:(0,u.ZM)(eb,6),setAmount:X,options:es,symbol:H,setSymbol:D,slot:(0,t.jsxs)("div",{className:"text-sm text-slate-500 mt-1 pl-3",children:["Balance: ",(0,u.dq)(Z)]})})]}),(0,t.jsx)("div",{className:"text-xs text-red-500 -mt-5 h-[20px]",children:(ey||eu)&&(0,t.jsx)(t.Fragment,{children:"USB minting has reached limit in this pool, please use other assets for minting."})}),(0,t.jsx)(O,{supply:Number((0,u.ZM)(K)),upperLimit:Number((0,u.ZM)(P))}),(0,t.jsx)(V,{rebalanceBonusLoss:ey?"Mint Pause":(0,u.dq)(eN)+"%",isBonus:eN>0,reward:32}),W?(0,t.jsxs)("button",{className:"btn-primary flex items-center justify-center gap-4",onClick:eo,disabled:!eo||ec,children:[ec&&(0,t.jsx)(S,{}),"Approve"]}):(0,t.jsxs)("button",{className:"btn-primary flex items-center justify-center gap-4",onClick:ed,disabled:!ed||er||eu,children:[er&&(0,t.jsx)(S,{}),"Buy"]})]})}),(0,t.jsx)(f.VY,{value:"redeem",className:"flex flex-col gap-3",children:(0,t.jsx)(G,{})})]})})}function _(){return(0,t.jsxs)("div",{className:"flex flex-col md:flex-row w-full gap-3",children:[(0,t.jsx)(z,{}),(0,t.jsx)(x,{})]})}},16625:function(e,l,s){"use strict";s.d(l,{e:function(){return d}});var t=s(43534),n=s(80237),a=s(61997),i=s(56883);let d=[...t.C.map(e=>({symbol:e.assetTokenSymbol,address:{[n.ws.id]:e.assetTokenAddress,[a.RJ.id]:e.assetTokenAddress}})).filter(e=>"ETH"!==e.symbol),...t.C.map(e=>({symbol:e.xTokenSymbol,address:{[n.ws.id]:e.xTokenAddress,[a.RJ.id]:e.xTokenAddress}})),{symbol:"USB",address:{[n.ws.id]:i.O[n.ws.id],[a.RJ.id]:i.O[a.RJ.id]}}]},56883:function(e,l,s){"use strict";s.d(l,{O:function(){return a}});var t=s(80237),n=s(61997);let a={[t.ws.id]:"0x9EAFdB7111628129fFee1af04593858E09797cD6",[n.RJ.id]:""}},57756:function(e,l,s){"use strict";s.r(l),s.d(l,{FetcherContext:function(){return o},FetcherProvider:function(){return c}});var t=s(9268),n=s(86006),a=s(19707),i=s(69624),d=s(85418),r=s(16625);let o=(0,n.createContext)({balances:[],totalSupplies:[]}),c=e=>{let{children:l}=e,{address:s}=(0,a.mA)(),{data:c}=(0,a.KQ)({address:s,watch:!0,chainId:(0,d.B)()}),{data:u}=(0,a.Dm)({contracts:[...r.e.map(e=>({address:e.address[(0,d.B)()],abi:i.em,functionName:"balanceOf",args:[s],chainId:(0,d.B)()})),...r.e.map(e=>({address:e.address[(0,d.B)()],abi:i.em,functionName:"totalSupply",chainId:(0,d.B)()}))],watch:!0,allowFailure:!0});console.log(u);let m=r.e.length,x=(0,n.useMemo)(()=>null==u?void 0:u.filter((e,l)=>l<m).map((e,l)=>{var s;return{symbol:null===(s=r.e[l])||void 0===s?void 0:s.symbol,balance:null==e?void 0:e.result}}),[u]),h=(0,n.useMemo)(()=>null==u?void 0:u.filter((e,l)=>l>=m&&l<2*m).map((e,l)=>{var s;return{symbol:null===(s=r.e[l])||void 0===s?void 0:s.symbol,totalSupply:null==e?void 0:e.result}}),[u]);return(0,t.jsx)(o.Provider,{value:{balances:x?[...x,{symbol:"ETH",balance:null==c?void 0:c.value}]:[],totalSupplies:null!=h?h:[]},children:l})}},82861:function(e,l,s){"use strict";s.d(l,{MN:function(){return r},Rp:function(){return a},ZM:function(){return d},dq:function(){return i}});var t=s(77340),n=s(11639);let a=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,s=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let n=10**l;return(Math.floor(Number((0,t.b)(e,s))*n)/n).toLocaleString("en-US",{maximumFractionDigits:l})},i=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**l;return(Math.floor(Number((0,n.d)(e))*s)/s).toLocaleString("en-US",{maximumFractionDigits:l})},d=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**l;return String(Math.floor(Number((0,n.d)(e))*s)/s)},r=e=>e?(Math.floor(1e3*Number((0,n.d)(e)))/1e3).toFixed(3):"0.000"}},function(e){e.O(0,[287,524,656,992,935,937,333,204,917,28,381,941,253,961,560],function(){return e(e.s=79469)}),_N_E=e.O()}]);