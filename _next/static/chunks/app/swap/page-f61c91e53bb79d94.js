(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8998],{79469:function(e,t,s){Promise.resolve().then(s.bind(s,32777))},32777:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return O}});var l=s(9268),n=s(99468),a=s(76394),i=s.n(a),r=s(27374),o=s(86006),d=s(77941),c=s(43534),u=s(82861),m=s(44028);function x(){var e;let{prices:t,leverages:s}=(0,o.useContext)(d.l);return(0,l.jsxs)("div",{className:"card w-full h-fit flex flex-col",children:[(0,l.jsxs)("h5",{className:"font-bold text-sm text-slate-700",children:["Net Value",(0,l.jsx)(m.zt,{children:(0,l.jsxs)(m.fC,{children:[(0,l.jsx)(m.xz,{asChild:!0,children:(0,l.jsx)("div",{className:"inline-block px-1",children:(0,l.jsx)(r.if7,{className:"ml-1 inline-block w-[14px] h-[14px] stroke-slate-500"})})}),(0,l.jsx)(m.h_,{children:(0,l.jsxs)(m.VY,{className:"max-w-xs text-sm text-white bg-slate-900 rounded-md p-4",children:["The Net value is calculated based on the underlying assets and is backed by these assets. The Market Price on secondary markets might deviate from the Net value due to a variety of factors. Anyone can engage in arbitrage, and such actions will serve to eliminate these discrepancies.",(0,l.jsx)(m.Eh,{})]})})]})})]}),(0,l.jsxs)(n.iA,{className:"mt-4 text-sm",children:[(0,l.jsx)(n.ss,{}),(0,l.jsxs)(n.RM,{children:[(0,l.jsxs)(n.SC,{children:[(0,l.jsxs)(n.pj,{className:"font-medium flex gap-2 px-0",children:[(0,l.jsx)(i(),{src:"/USB.svg",width:20,height:20,alt:"USB"}),"USB"]}),(0,l.jsx)(n.pj,{children:"Universal Stable Basis"}),(0,l.jsx)(n.pj,{}),(0,l.jsx)(n.pj,{className:"text-right",children:"$1"})]}),null===(e=c.C2)||void 0===e?void 0:e.map(e=>{var a,r;return(0,l.jsxs)(n.SC,{children:[(0,l.jsxs)(n.pj,{className:"font-medium flex gap-2 px-0",children:[(0,l.jsx)(i(),{src:"/".concat(e.xTokenSymbol,".svg"),width:20,height:20,alt:e.xTokenSymbol}),e.xTokenSymbol]}),(0,l.jsxs)(n.pj,{children:["Leverage long on ",e.assetTokenSymbol]}),(0,l.jsxs)(n.pj,{children:[(0,u.dq)(null==s?void 0:null===(a=s.find(t=>t.symbol===e.assetTokenSymbol))||void 0===a?void 0:a.leverage),"x"]}),(0,l.jsxs)(n.pj,{className:"text-right",children:["$",(0,u.dq)(null==t?void 0:null===(r=t.find(t=>t.symbol===e.xTokenSymbol))||void 0===r?void 0:r.price)]})]},e.assetTokenSymbol)})]})]}),(0,l.jsx)("button",{className:"self-end text-slate-900 underline text-sm",children:"Check the leverage"})]})}var h=s(32100),f=s(32726),v=s(63831);function b(e){let{className:t,options:s=[],label:n,slot:a,symbol:o,setSymbol:d,amount:c,setAmount:u,max:m,onMaximize:x}=e;return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{className:(0,v.Z)("relative",t),children:[(0,l.jsx)("div",{className:"absolute top-2 left-3 font-medium text-sm text-slate-700",children:n}),(0,l.jsx)("input",{type:"number",className:"w-full h-16 pt-6 pl-3 font-bold text-2xl border text-slate-700 border-slate-200 rounded-md focus:ring-2 focus:outline-blue-500",placeholder:"0.00",value:c,onChange:e=>u(e.target.value),step:.01}),(0,l.jsxs)("div",{className:"absolute right-3 bottom-3 flex items-center gap-2",children:[(0,l.jsxs)(f.fC,{disabled:(null==s?void 0:s.length)<2,defaultValue:o,value:o,onValueChange:e=>d(e),children:[(0,l.jsxs)(f.xz,{className:"flex h-4 items-center w-28 justify-end",children:[(0,l.jsx)(f.B4,{className:"bg-white mr-1",placeholder:""}),(null==s?void 0:s.length)>=2?(0,l.jsx)(f.JO,{children:(0,l.jsx)(r.kWQ,{})}):null]}),(0,l.jsx)(f.h_,{children:(0,l.jsx)(f.VY,{className:"bg-white shadow-lg border p-1 rounded-md",children:(0,l.jsx)(f.l_,{children:null==s?void 0:s.map(e=>(0,l.jsx)(f.ck,{className:"flex px-4 py-2 text-sm rounded- gap-2 hover:bg-slate-100 cursor-pointer",value:e,children:(0,l.jsx)(f.eT,{children:(0,l.jsxs)("div",{className:"flex items-center leading-4 font-medium",children:[(0,l.jsx)(i(),{width:16,height:16,src:"/".concat(e,".svg"),alt:"",style:{display:"inline-block",marginRight:4}}),e]})})},e))})})})]}),m?(0,l.jsx)("button",{onClick:x,className:"text-indigo-500 text-sm font-medium",children:"Max"}):null]})]}),a]})}var g=s(57756),j=s(19707),p=s(18624),N=s(75503),y=s(85418);let S=(e,t,s)=>{let{config:l}=(0,j.PJ)({address:e,abi:p.j,functionName:"redeemByXTokens",args:[(0,N.f)(t)],enabled:(0,N.f)(t)>0&&s}),{write:n,data:a,isLoading:i}=(0,j.GG)(l),{isLoading:r}=(0,j.BX)({hash:null==a?void 0:a.hash});return{redeemByXToken:n,isRedeemByXTokenLoading:i||r}},B=()=>{var e,t,s,n,a;let[i,r]=(0,o.useState)(""),[d,m]=(0,o.useState)("ETHx"),x=null==d?void 0:d.replace("x",""),{balances:f}=(0,o.useContext)(g.FetcherContext),v=null!==(s=null==f?void 0:f.find(e=>"USB"===e.symbol).balance)&&void 0!==s?s:0n,B=null!==(n=null==f?void 0:f.find(e=>e.symbol===d).balance)&&void 0!==n?n:0n,w=null!==(a=null==f?void 0:null===(e=f.find(e=>e.symbol===x))||void 0===e?void 0:e.balance)&&void 0!==a?a:0n,[k,C]=(0,o.useState)(!1),U=(0,o.useMemo)(()=>{var e,t;return null===(t=c.C2)||void 0===t?void 0:null===(e=t.find(e=>e.xTokenSymbol===d))||void 0===e?void 0:e.poolAddress},[d]),{data:T}=(0,j.do)({address:U,abi:p.j,functionName:"calculatePairedUSBAmountToRedeemByXTokens",args:[(0,N.f)(i)],chainId:(0,y.B)(),enabled:(0,N.f)(i)>0,onError:e=>{C(!0)}}),{redeemByXToken:M,isRedeemByXTokenLoading:E}=S(U,i,!!T);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"text-sm text-slate-500",children:"Tip：Redemption requires both x and $USB"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(b,{max:!0,symbol:d,options:null===(t=c.C2)||void 0===t?void 0:t.map(e=>e.xTokenSymbol),setSymbol:e=>m(e),amount:i,setAmount:e=>r(e),onMaximize:()=>r((0,u.MN)(B)),label:(0,l.jsx)("div",{className:"flex",children:"Input"}),slot:(0,l.jsx)("div",{className:"flex items-center mt-1 ",children:(0,l.jsxs)("div",{className:"text-sm text-slate-500 pl-3",children:["Balance: ",(0,u.dq)(B)]})})}),(0,l.jsxs)("div",{className:"p-4 bg-slate-50 mt-2 rounded-lg",children:[(0,l.jsxs)("div",{className:"text-sm text-slate-500 font-medium",children:["Requires pairing with ",(0,u.dq)(T)," USB"]}),(0,l.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,l.jsxs)("div",{className:"text-sm text-slate-500",children:["USB Balance: ",(0,u.dq)(v)]}),(0,l.jsx)("button",{className:"inline-block text-indigo-500 text-sm underline",children:"Not enough? Buy Now."})]})]}),(0,l.jsx)(b,{className:"mt-3",amount:i,options:[x],symbol:x,label:"Receive",slot:(0,l.jsxs)("div",{className:"text-sm text-slate-500 mt-1 pl-3",children:["Balance: ",(0,u.dq)(w)]})})]}),(0,l.jsx)("div",{className:"text-right text-sm text-slate-500",children:"Redemption fee: 0.5%"}),(0,l.jsxs)("button",{className:"btn-primary",onClick:M,disabled:E||!M,children:[E&&(0,l.jsx)(h.$,{}),"Redeem"]})]})};var w=s(90863),k=s(16625),C=s(16237);let U=(e,t,s,l)=>{let{config:n}=(0,j.PJ)({address:e,abi:p.j,functionName:"mintUSB",args:[(0,N.f)(t)],enabled:(0,N.f)(t)>0&&l,value:(0,N.f)(s)}),{write:a,data:i,isLoading:r}=(0,j.GG)(n),{isLoading:o}=(0,j.BX)({hash:null==i?void 0:i.hash});return{mintUSB:a,isMintLoading:r||o}},T=(e,t,s,l)=>{let{config:n}=(0,j.PJ)({address:e,abi:p.j,functionName:"mintXTokens",args:[(0,N.f)(t)],enabled:!!t&&l,value:(0,N.f)(s)}),{write:a,data:i,isLoading:r}=(0,j.GG)(n),{isLoading:o}=(0,j.BX)({hash:null==i?void 0:i.hash});return{mintXToken:a,isMintXLoading:r||o}},M=e=>c.C2.findIndex(t=>t.assetTokenSymbol===e)>-1,E=e=>c.C2.findIndex(t=>t.xTokenSymbol===e)>-1,L=(e,t)=>{for(let s=0;s<c.C2.length;s++){let l=[c.C2[s].assetTokenSymbol,c.C2[s].xTokenSymbol];if(l.findIndex(t=>t===e)>-1||l.findIndex(e=>e===t)>-1)return s}},R=(e,t)=>"USB"===e?t.filter(t=>t!==e):M(e)?["USB",e+"x"]:E(e)?[e.replace("x","")]:t,A=(e,t,s)=>{let{config:l}=(0,j.PJ)({address:e,abi:p.j,functionName:"redeemByUSB",args:[(0,N.f)(t)],enabled:(0,N.f)(t)>0&&s}),{write:n,data:a,isLoading:i}=(0,j.GG)(l),{isLoading:r}=(0,j.BX)({hash:null==a?void 0:a.hash});return{redeemByUSB:n,isRedeemByUSBLoading:i||r}},q=(e,t,s)=>{let{config:l}=(0,j.PJ)({address:e,abi:p.j,functionName:"usbToXTokens",args:[(0,N.f)(t)],enabled:!!t&&s}),{write:n,data:a,isLoading:i}=(0,j.GG)(l),{isLoading:r}=(0,j.BX)({hash:null==a?void 0:a.hash});return{usb2XToken:n,isUsb2XTokenLoading:i||r}},X=(e,t,s,l,n,a)=>{let{mintUSB:i,isMintLoading:r}=U(e,t,"ETH"===s?t:"0",n!==w.q&&"USB"===l&&a),{mintXToken:d,isMintXLoading:c}=T(e,t,"ETH"===s?t:"0",M(s)&&E(l)),{redeemByXToken:u,isRedeemByXTokenLoading:m}=S(e,t,E(s)&&M(l)),{redeemByUSB:x,isRedeemByUSBLoading:h}=A(e,t,n!==w.q&&"USB"===s&&M(l)),{usb2XToken:f,isUsb2XTokenLoading:v}=q(e,t,"USB"===s&&E(l)),b=(0,o.useMemo)(()=>M(s)?"USB"===l?i:d:"USB"===s?M(l)?x:f:u,[s,l,i,d,x,f,u]);return{swap:b,isSwapLoading:r||c||m||h||v}};var P=s(90995),I=s(12120),G=s(89725),V=s(36944);function _(e){let{supply:t,upperLimit:s}=e,n=(0,o.useRef)(null),a=(0,o.useRef)(null),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(a.current&&n.current&&i.current){let e=a.current.getBoundingClientRect().width,t=n.current.getBoundingClientRect().width,s=i.current.getBoundingClientRect().width;t/2>e?(n.current.style.left="0px",n.current.style.transform="translate(0)"):t/2>s-e&&(n.current.style.right="0px",n.current.style.transform="translate(0)")}},[n.current,a.current]),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"text-sm text-slate-700",children:"USB Circulating Supply / Upper Limit"}),(0,l.jsx)("div",{className:"mt-2 flex items-center gap-2",children:(0,l.jsxs)(P.fC,{disabled:!0,min:0,max:s,value:[t],className:"relative flex flex-1 items-center select-none touch-none h-5",children:[(0,l.jsx)(P.fQ,{ref:i,className:"bg-slate-100 relative grow rounded-full h-[3px]",children:(0,l.jsx)(P.e6,{ref:a,className:"absolute bg-slate-900 rounded-full h-full"})}),(0,l.jsx)(P.bU,{className:"relative block w-3 h-3 bg-slate-900 rounded-full border-2 border-slate-900 focus:outline-none",children:(0,l.jsx)("div",{ref:n,className:"text-xs text-slate-500 absolute whitespace-nowrap top-3 -translate-x-1/2",children:"".concat(t.toLocaleString()," / ").concat(s.toLocaleString())})})]})}),(0,l.jsx)("div",{className:"mt-6 text-xs text-slate-500 text-center",children:"The upper limit will grow with the demand for leverage."})]})}function z(e){let{rebalanceBonusLoss:t,reward:s,isBonus:n}=e;return(0,l.jsxs)("div",{className:"text-sm",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("div",{className:"text-slate-700",children:"Rebalance bonus/loss"}),(0,l.jsx)("div",{className:"".concat(n?"text-green-400":"text-red-400"),children:t})]}),(0,l.jsxs)("div",{className:"flex justify-between mt-3",children:[(0,l.jsx)("div",{className:"text-slate-700",children:"Reward"}),(0,l.jsx)("div",{className:"text-slate-900",children:"--"})]})]})}function F(){var e,t,s,n,a,i,r,m,x;let{address:f}=(0,j.mA)(),{balances:v}=(0,o.useContext)(g.FetcherContext),{prices:S,r2s:U,allowances4pool:T,totalUpperLimit:A,usbQs:q}=(0,o.useContext)(d.l),[P,F]=(0,o.useState)(""),[O,J]=(0,V.useQueryParam)("symbol1",(0,V.withDefault)(V.StringParam,"ETH")),[$,Y]=(0,V.useQueryParam)("symbol2",(0,V.withDefault)(V.StringParam,"USB")),H=(0,o.useMemo)(()=>(0,k.l)(),[(0,y.B)()]),Z=H.find(e=>e.symbol===O),D=null==v?void 0:null===(e=v.find(e=>e.symbol===O))||void 0===e?void 0:e.balance,Q=null==v?void 0:null===(t=v.find(e=>e.symbol===$))||void 0===t?void 0:t.balance,W=null==T?void 0:null===(s=T.find(e=>e.symbol===O))||void 0===s?void 0:s.allowance,K=W<(0,N.f)(P),ee=null==q?void 0:q.reduce((e,t)=>e+t.amount,0n),et=(0,o.useMemo)(()=>c.C2.reduce((e,t)=>e.concat([t.assetTokenSymbol,t.xTokenSymbol]),["USB"]),[]),es=(0,o.useMemo)(()=>c.C2.reduce((e,t)=>e.concat([t.assetTokenSymbol]),["USB"]),[]),el=(0,o.useMemo)(()=>R(O,et),[es,O]);(0,o.useEffect)(()=>Y(el[0]),[O,el]);let en=(0,o.useMemo)(()=>L(O,$),[O,$]),ea=(0,o.useMemo)(()=>{var e,t;return null===(t=c.C2)||void 0===t?void 0:null===(e=t[null!=en?en:0])||void 0===e?void 0:e.poolAddress},[en]),ei=(0,o.useMemo)(()=>{var e,t;return null===(t=c.C2)||void 0===t?void 0:null===(e=t[null!=en?en:0])||void 0===e?void 0:e.assetTokenSymbol},[en]),er=null!==(r=null==U?void 0:null===(n=U.find(e=>e.symbol===ei))||void 0===n?void 0:n.r2)&&void 0!==r?r:0n,{swap:eo,isSwapLoading:ed}=X(ea,P,O,$,er,!K),{approve:ec,isApproveLoading:eu}=(0,C.y)(null==Z?void 0:Z.address[(0,y.B)()],ea),[em,ex]=(0,o.useState)(!1),{data:eh}=(0,j.do)({address:ea,abi:p.j,functionName:"calculateMintUSBOut",args:[(0,N.f)(P)],chainId:(0,y.B)(),enabled:(0,N.f)(P)>0&&"USB"===$,onSuccess:e=>{ex(!1)},onError:e=>{ex(e.message.includes("AAR Below Safe Threshold after Mint"))}});(0,o.useEffect)(()=>{"USB"!==$&&ex(!1)},[$]);let{data:ef}=(0,j.do)({address:ea,abi:p.j,functionName:"calculateMintXTokensOut",args:[(0,N.f)(P)],chainId:(0,y.B)(),enabled:(0,N.f)(P)>0&&E($)&&"USB"!==O}),{data:ev}=(0,j.do)({address:ea,abi:p.j,functionName:"calculateUSBToXTokensOut",args:[(0,N.f)(P)],chainId:(0,y.B)(),enabled:(0,N.f)(P)>0&&"USB"===O&&E($)}),{data:eb}=(0,j.do)({address:ea,abi:p.j,functionName:"calculateRedemptionOutByUSB",args:[(0,N.f)(P)],chainId:(0,y.B)(),account:f,enabled:(0,N.f)(P)>0&&"USB"===O&&M($)}),eg=(0,o.useMemo)(()=>{if(M(O))return"USB"===$?null!=eh?eh:0n:null!=ef?ef:0n;if("USB"===O){var e;return M($)?null!==(e=null==eb?void 0:eb[0])&&void 0!==e?e:0n:null!=ev?ev:0n}return 0n},[eb,O,$,eh,ef,ev]),ej=(0,N.f)(P),ep=null!==(m=null==S?void 0:null===(a=S.find(e=>e.symbol===O))||void 0===a?void 0:a.price)&&void 0!==m?m:0n,eN=null!==(x=null==S?void 0:null===(i=S.find(e=>e.symbol===$))||void 0===i?void 0:i.price)&&void 0!==x?x:0n;console.log(O,"22222222"),console.log($,"2222222222333333333333");let ey=ep*ej>0?(eN*eg*10n**18n/(ep*ej)-10n**18n)*100n:0n,eS="USB"===$&&er===w.q;return(0,l.jsx)("div",{className:"card w-full",children:(0,l.jsxs)(I.fC,{defaultValue:"swap",children:[(0,l.jsx)(I.aV,{className:"bg-slate-100 p-1 w-fit rounded-md",children:[{label:"Atomic Swap",value:"swap"},{label:"Redeem",value:"redeem"}].map(e=>{let{label:t,value:s}=e;return(0,l.jsx)(I.xz,{className:'rounded-[3px] text-sm py-1.5 px-3 text-slate-500 font-medium data-[state="active"]:bg-white data-[state="active"]:text-slate-900',value:s,children:t},s)})}),(0,l.jsx)(I.VY,{value:"swap",className:"flex flex-col gap-6 mt-6",children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(b,{max:!0,label:"Input",amount:P,setAmount:F,options:es,symbol:O,setSymbol:J,onMaximize:()=>F((0,u.MN)(D)),slot:(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"text-sm text-slate-500 mt-1 pl-3",children:["Balance: ",(0,u.dq)(D)]})})}),(0,l.jsx)("div",{className:"w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 z-10 bg-white border border-slate-200 rounded-full flex items-center justify-center",children:(0,l.jsx)(G.YRR,{className:"stroke-slate-900 w-6 h-6"})}),(0,l.jsx)(b,{className:"mt-3",label:"Receive",amount:(0,u.ZM)(eg,6),setAmount:F,options:el,symbol:$,setSymbol:Y,slot:(0,l.jsxs)("div",{className:"text-sm text-slate-500 mt-1 pl-3",children:["Balance: ",(0,u.dq)(Q)]})})]}),(0,l.jsx)("div",{className:"text-xs text-red-500 -mt-5 h-[20px]",children:(eS||em)&&(0,l.jsx)(l.Fragment,{children:"USB minting has reached limit in this pool, please use other assets for minting."})}),(0,l.jsx)(_,{supply:Number((0,u.ZM)(ee)),upperLimit:Number((0,u.ZM)(A))}),(0,l.jsx)(z,{rebalanceBonusLoss:eS?"Mint Pause":(0,u.dq)(ey)+"%",isBonus:ey>0,reward:32}),K?(0,l.jsxs)("button",{className:"btn-primary flex items-center justify-center gap-4",onClick:ec,disabled:!ec||eu,children:[eu&&(0,l.jsx)(h.$,{}),"Approve"]}):(0,l.jsxs)("button",{className:"btn-primary flex items-center justify-center gap-4",onClick:eo,disabled:!eo||ed||em,children:[ed&&(0,l.jsx)(h.$,{}),"Buy"]})]})}),(0,l.jsx)(I.VY,{value:"redeem",className:"flex flex-col gap-3",children:(0,l.jsx)(B,{})})]})})}function O(){return(0,l.jsxs)("div",{className:"flex flex-col md:flex-row w-full gap-3",children:[(0,l.jsx)(F,{}),(0,l.jsx)(x,{})]})}},32100:function(e,t,s){"use strict";s.d(t,{$:function(){return n}});var l=s(9268);let n=e=>{let{className:t}=e;return(0,l.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,l.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,l.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},16237:function(e,t,s){"use strict";s.d(t,{i:function(){return c},y:function(){return d}});var l=s(43534),n=s(68010),a=s(86006),i=s(179),r=s(19707),o=s(69624);let d=(e,t)=>{let{config:s}=(0,r.PJ)({address:e,abi:o.em,functionName:"approve",args:[t,100000000n*BigInt(1e18)],enabled:!!t&&!!e&&"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"!==e}),{write:l,data:n,isLoading:a}=(0,r.GG)(s),{isLoading:i}=(0,r.BX)({hash:null==n?void 0:n.hash});return{approve:l,isApproveLoading:a||i}},c=(e,t)=>{let{address:s}=(0,r.mA)(),d=(0,r.t_)(),{data:c}=(0,r.py)(),u=(0,a.useMemo)(()=>Object.keys(e).filter(e=>e!==l.K8),[e]),[m,x]=(0,a.useState)({}),h=(e,t)=>{x(s=>({...s,[e]:t}))},{data:f}=(0,r.Ov)();(0,a.useEffect)(()=>{s&&u.forEach(e=>{d.readContract({abi:o.em,address:e,functionName:"allowance",args:[s,t]}).then(t=>h(e,t)).catch(console.error)})},[u,s,f]);let[v,b]=(0,a.useState)(!1),g=(0,a.useMemo)(()=>u.filter(t=>(e[t]||0n)>0n&&(e[t]||0n)>(m[t]||0n)),[e,u]),j=async()=>{if(0!=g.length)try{b(!0);for(let e=0;e<g.length;e++){let s=g[e];await (null==c?void 0:c.writeContract({abi:o.em,address:s,functionName:"approve",args:[t,100000000n*BigInt(1e18)]}))}b(!1),i.toast.success("Approve success")}catch(e){throw i.toast.error((0,n.a)(e)),b(!1),e}};return{approve:j,loading:v,shouldApprove:g.length>0}}},68010:function(e,t,s){"use strict";function l(e){let t="Unkown";return("string"==typeof e?t=e:"string"==typeof(null==e?void 0:e.msg)?t=null==e?void 0:e.msg:"string"==typeof(null==e?void 0:e.message)&&(t=null==e?void 0:e.message),t.includes("User denied")||t.includes("user rejected transaction"))?"You declined the action in your wallet.":t.includes("transaction failed")?"Transaction failed":t}s.d(t,{a:function(){return l}})},82861:function(e,t,s){"use strict";s.d(t,{MN:function(){return o},Rp:function(){return a},ZM:function(){return r},dq:function(){return i}});var l=s(77340),n=s(11639);let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,s=arguments.length>2?arguments[2]:void 0;if(!e)return"0.000";let n=10**t;return(Math.floor(Number((0,l.b)(e,s))*n)/n).toLocaleString("en-US",{maximumFractionDigits:t})},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**t;return(Math.floor(Number((0,n.d)(e))*s)/s).toLocaleString("en-US",{maximumFractionDigits:t})},r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let s=10**t;return String(Math.floor(Number((0,n.d)(e))*s)/s)},o=e=>e?(Math.floor(1e3*Number((0,n.d)(e)))/1e3).toFixed(3):"0.000"}},function(e){e.O(0,[3287,1524,7544,6394,1391,914,9468,106,7624,5119,5196,3197,6520,6944,7472,7756,7941,9253,2961,1744],function(){return e(e.s=79469)}),_N_E=e.O()}]);