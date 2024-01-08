"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342],{76036:function(e,t,n){n.d(t,{v:function(){return ApproveAndTx}});var i=n(57437),a=n(72009),u=n(81628),p=n(2265),r=n(71424),y=n(56926),l=n(30197);let s={},useApproves=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*BigInt(1e18),{address:i}=(0,y.mA)(),m=(0,y.t_)(),{data:T}=(0,y.py)(),[o,c]=(0,p.useState)(!1),A=(0,p.useMemo)(()=>Object.keys(e).filter(e=>e!==a.K8),[e]),[d,R]=(0,p.useState)(t&&s[t]||{}),updateAllownce=(e,n)=>{t&&(s[t]={...s[t]||{},[e]:n},R(t=>({...t,[e]:n})))},{data:_}=(0,y.Ov)();(0,p.useEffect)(()=>{i&&t&&A.forEach(e=>{m.readContract({abi:l.em,address:e,functionName:"allowance",args:[i,t]}).then(t=>updateAllownce(e,t)).catch(console.error)})},[A,i,_]);let[f,v]=(0,p.useState)(!1),E=(0,p.useMemo)(()=>A.filter(t=>(0,u.ok)(e,t)>0n&&(0,u.ok)(e,t)>(0,u.ok)(d,t)),[e,A,d]),approve=async()=>{if(0!=E.length&&t)try{v(!0),c(!1);for(let e=0;e<E.length;e++){let i=E[e],a=await (null==T?void 0:T.writeContract({abi:l.em,address:i,functionName:"approve",args:[t,n]}));a&&await (null==m?void 0:m.waitForTransactionReceipt({hash:a})),updateAllownce(i,n)}r.toast.success("Approve success"),v(!1),c(!0)}catch(e){throw r.toast.error((0,u.az)(e)),v(!1),c(!1),e}};return{approve,loading:f,shouldApprove:E.length>0,isSuccess:o}};var m=n(43003),T=n(35769),o=n(72084);function ApproveAndTx(e){let{className:t,tx:n,approves:a,spender:u,requestAmount:r,config:y,toast:l=!0,disabled:s,onTxSuccess:c,onApproveSuccess:A}=e,{write:d,isLoading:R,isSuccess:_}=(0,m.R)(y,l),f=(0,p.useRef)();f.current=c,(0,p.useEffect)(()=>{f.current&&_&&f.current()},[_]);let v=s||!d||R||void 0!==y.enabled&&!y.enabled,{approve:E,shouldApprove:S,loading:M,isSuccess:H}=useApproves(a||{},u,r),b=(0,p.useRef)();return(b.current=A,(0,p.useEffect)(()=>{b.current&&H&&b.current()},[H]),S)?(0,i.jsxs)("button",{className:(0,T.m)("btn-primary flex items-center justify-center gap-4",t),onClick:E,disabled:s||!E||M,children:[M&&(0,i.jsx)(o.$,{}),"Approve"]}):(0,i.jsxs)("button",{className:(0,T.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>d(),disabled:v,children:[R&&(0,i.jsx)(o.$,{}),n]})}},80547:function(e,t,n){n.d(t,{W:function(){return AssetInput}});var i=n(57437),a=n(81628),u=n(57042),p=n(16691),r=n.n(p),y=n(2265);function AssetInput(e){let{asset:t="ETH",balance:n,balanceTit:p="Balance",exchange:l,readonly:s,selected:m,onClick:T,amount:o,setAmount:c,price:A,disable:d}=e,R=(0,y.useRef)(null),_=n&&(0,a.su)("number"==typeof o?o+"":o||"")>(0,a.su)("number"==typeof n?n+"":n||"");return(0,i.jsxs)("div",{className:"relative w-full",onClick:()=>{T&&!d&&T()},children:[(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsxs)("div",{className:"absolute flex items-center gap-2 top-1/2 left-4 -translate-y-1/2",children:[(0,i.jsx)(r(),{width:24,height:24,src:"/".concat(t,".svg"),alt:""}),(0,i.jsxs)("div",{className:"text-base font-medium",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:t}),A&&(0,i.jsx)("div",{className:"text-neutral-500 text-xs",children:A})]}),l&&(0,i.jsxs)("div",{className:"text-slate-500 text-xs",children:["~$",l]})]})]}),(0,i.jsx)("input",{value:o,onChange:e=>c(e.target.value),ref:R,type:"number",disabled:d,className:(0,u.Z)(s?"bg-slate-50":"bg-white",{"border-red-400 !border-2 focus:border-red-400":_,"border-slate-400  focus:border-blue-400 ":!_},"w-full h-14 text-right pr-4 font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),placeholder:"0.000",step:.01,title:"",readOnly:s})]}),n&&(0,i.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,i.jsxs)("div",{children:[p,": ",n,(0,i.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{var e;c(null===(e=String(n))||void 0===e?void 0:e.replace(",","")),T&&!d&&T()},children:"Max"})]}),(0,i.jsx)("div",{className:"text-sm text-red-400",children:_?"Insufficient account balance":""})]})]})}},72084:function(e,t,n){n.d(t,{$:function(){return Spinner}});var i=n(57437);let Spinner=e=>{let{className:t}=e;return(0,i.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,i.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,i.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},90228:function(e,t){t.Z=[{inputs:[{internalType:"contract IVault",name:"vault",type:"address"}],name:"AAR",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"address",name:"ptyPoolAboveAARU",type:"address"}],name:"calcDeltaAssetForPtyPoolMatchAboveAARU",outputs:[{components:[{internalType:"uint256",name:"M_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_i",type:"uint256"},{internalType:"uint256",name:"P_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_DECIMALS",type:"uint256"},{internalType:"uint256",name:"M_USB_ETH",type:"uint256"},{internalType:"uint256",name:"M_ETHx",type:"uint256"},{internalType:"uint256",name:"aar",type:"uint256"},{internalType:"uint256",name:"AART",type:"uint256"},{internalType:"uint256",name:"AARS",type:"uint256"},{internalType:"uint256",name:"AARU",type:"uint256"},{internalType:"uint256",name:"AARC",type:"uint256"},{internalType:"uint256",name:"AARDecimals",type:"uint256"},{internalType:"uint256",name:"RateR",type:"uint256"},{internalType:"uint256",name:"AARBelowSafeLineTime",type:"uint256"},{internalType:"uint256",name:"AARBelowCircuitBreakerLineTime",type:"uint256"},{internalType:"uint256",name:"settingsDecimals",type:"uint256"}],internalType:"struct Constants.VaultState",name:"",type:"tuple"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"address",name:"ptyPoolBelowAARS",type:"address"}],name:"calcDeltaUsbForPtyPoolMatchBelowAARS",outputs:[{components:[{internalType:"uint256",name:"M_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_i",type:"uint256"},{internalType:"uint256",name:"P_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_DECIMALS",type:"uint256"},{internalType:"uint256",name:"M_USB_ETH",type:"uint256"},{internalType:"uint256",name:"M_ETHx",type:"uint256"},{internalType:"uint256",name:"aar",type:"uint256"},{internalType:"uint256",name:"AART",type:"uint256"},{internalType:"uint256",name:"AARS",type:"uint256"},{internalType:"uint256",name:"AARU",type:"uint256"},{internalType:"uint256",name:"AARC",type:"uint256"},{internalType:"uint256",name:"AARDecimals",type:"uint256"},{internalType:"uint256",name:"RateR",type:"uint256"},{internalType:"uint256",name:"AARBelowSafeLineTime",type:"uint256"},{internalType:"uint256",name:"AARBelowCircuitBreakerLineTime",type:"uint256"},{internalType:"uint256",name:"settingsDecimals",type:"uint256"}],internalType:"struct Constants.VaultState",name:"",type:"tuple"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"uint256",name:"assetAmount",type:"uint256"}],name:"calcMintLeveragedTokensBelowAARS",outputs:[{components:[{internalType:"uint256",name:"M_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_i",type:"uint256"},{internalType:"uint256",name:"P_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_DECIMALS",type:"uint256"},{internalType:"uint256",name:"M_USB_ETH",type:"uint256"},{internalType:"uint256",name:"M_ETHx",type:"uint256"},{internalType:"uint256",name:"aar",type:"uint256"},{internalType:"uint256",name:"AART",type:"uint256"},{internalType:"uint256",name:"AARS",type:"uint256"},{internalType:"uint256",name:"AARU",type:"uint256"},{internalType:"uint256",name:"AARC",type:"uint256"},{internalType:"uint256",name:"AARDecimals",type:"uint256"},{internalType:"uint256",name:"RateR",type:"uint256"},{internalType:"uint256",name:"AARBelowSafeLineTime",type:"uint256"},{internalType:"uint256",name:"AARBelowCircuitBreakerLineTime",type:"uint256"},{internalType:"uint256",name:"settingsDecimals",type:"uint256"}],internalType:"struct Constants.VaultState",name:"",type:"tuple"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"uint256",name:"assetAmount",type:"uint256"}],name:"calcMintPairsAtAdjustmentPhase",outputs:[{components:[{internalType:"uint256",name:"M_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_i",type:"uint256"},{internalType:"uint256",name:"P_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_DECIMALS",type:"uint256"},{internalType:"uint256",name:"M_USB_ETH",type:"uint256"},{internalType:"uint256",name:"M_ETHx",type:"uint256"},{internalType:"uint256",name:"aar",type:"uint256"},{internalType:"uint256",name:"AART",type:"uint256"},{internalType:"uint256",name:"AARS",type:"uint256"},{internalType:"uint256",name:"AARU",type:"uint256"},{internalType:"uint256",name:"AARC",type:"uint256"},{internalType:"uint256",name:"AARDecimals",type:"uint256"},{internalType:"uint256",name:"RateR",type:"uint256"},{internalType:"uint256",name:"AARBelowSafeLineTime",type:"uint256"},{internalType:"uint256",name:"AARBelowCircuitBreakerLineTime",type:"uint256"},{internalType:"uint256",name:"settingsDecimals",type:"uint256"}],internalType:"struct Constants.VaultState",name:"",type:"tuple"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"uint256",name:"assetAmount",type:"uint256"}],name:"calcMintPairsAtStabilityPhase",outputs:[{components:[{internalType:"uint256",name:"M_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_i",type:"uint256"},{internalType:"uint256",name:"P_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_DECIMALS",type:"uint256"},{internalType:"uint256",name:"M_USB_ETH",type:"uint256"},{internalType:"uint256",name:"M_ETHx",type:"uint256"},{internalType:"uint256",name:"aar",type:"uint256"},{internalType:"uint256",name:"AART",type:"uint256"},{internalType:"uint256",name:"AARS",type:"uint256"},{internalType:"uint256",name:"AARU",type:"uint256"},{internalType:"uint256",name:"AARC",type:"uint256"},{internalType:"uint256",name:"AARDecimals",type:"uint256"},{internalType:"uint256",name:"RateR",type:"uint256"},{internalType:"uint256",name:"AARBelowSafeLineTime",type:"uint256"},{internalType:"uint256",name:"AARBelowCircuitBreakerLineTime",type:"uint256"},{internalType:"uint256",name:"settingsDecimals",type:"uint256"}],internalType:"struct Constants.VaultState",name:"",type:"tuple"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"uint256",name:"assetAmount",type:"uint256"}],name:"calcMintUsbAboveAARU",outputs:[{components:[{internalType:"uint256",name:"M_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_i",type:"uint256"},{internalType:"uint256",name:"P_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_DECIMALS",type:"uint256"},{internalType:"uint256",name:"M_USB_ETH",type:"uint256"},{internalType:"uint256",name:"M_ETHx",type:"uint256"},{internalType:"uint256",name:"aar",type:"uint256"},{internalType:"uint256",name:"AART",type:"uint256"},{internalType:"uint256",name:"AARS",type:"uint256"},{internalType:"uint256",name:"AARU",type:"uint256"},{internalType:"uint256",name:"AARC",type:"uint256"},{internalType:"uint256",name:"AARDecimals",type:"uint256"},{internalType:"uint256",name:"RateR",type:"uint256"},{internalType:"uint256",name:"AARBelowSafeLineTime",type:"uint256"},{internalType:"uint256",name:"AARBelowCircuitBreakerLineTime",type:"uint256"},{internalType:"uint256",name:"settingsDecimals",type:"uint256"}],internalType:"struct Constants.VaultState",name:"",type:"tuple"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"uint256",name:"usbAmount",type:"uint256"}],name:"calcPairdLeveragedTokenAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"uint256",name:"leveragedTokenAmount",type:"uint256"}],name:"calcPairedRedeemAssetAmount",outputs:[{components:[{internalType:"uint256",name:"M_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_i",type:"uint256"},{internalType:"uint256",name:"P_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_DECIMALS",type:"uint256"},{internalType:"uint256",name:"M_USB_ETH",type:"uint256"},{internalType:"uint256",name:"M_ETHx",type:"uint256"},{internalType:"uint256",name:"aar",type:"uint256"},{internalType:"uint256",name:"AART",type:"uint256"},{internalType:"uint256",name:"AARS",type:"uint256"},{internalType:"uint256",name:"AARU",type:"uint256"},{internalType:"uint256",name:"AARC",type:"uint256"},{internalType:"uint256",name:"AARDecimals",type:"uint256"},{internalType:"uint256",name:"RateR",type:"uint256"},{internalType:"uint256",name:"AARBelowSafeLineTime",type:"uint256"},{internalType:"uint256",name:"AARBelowCircuitBreakerLineTime",type:"uint256"},{internalType:"uint256",name:"settingsDecimals",type:"uint256"}],internalType:"struct Constants.VaultState",name:"",type:"tuple"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"uint256",name:"leveragedTokenAmount",type:"uint256"}],name:"calcPairedUsbAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"uint256",name:"leveragedTokenAmount",type:"uint256"}],name:"calcRedeemByLeveragedTokenAboveAARU",outputs:[{components:[{internalType:"uint256",name:"M_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_i",type:"uint256"},{internalType:"uint256",name:"P_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_DECIMALS",type:"uint256"},{internalType:"uint256",name:"M_USB_ETH",type:"uint256"},{internalType:"uint256",name:"M_ETHx",type:"uint256"},{internalType:"uint256",name:"aar",type:"uint256"},{internalType:"uint256",name:"AART",type:"uint256"},{internalType:"uint256",name:"AARS",type:"uint256"},{internalType:"uint256",name:"AARU",type:"uint256"},{internalType:"uint256",name:"AARC",type:"uint256"},{internalType:"uint256",name:"AARDecimals",type:"uint256"},{internalType:"uint256",name:"RateR",type:"uint256"},{internalType:"uint256",name:"AARBelowSafeLineTime",type:"uint256"},{internalType:"uint256",name:"AARBelowCircuitBreakerLineTime",type:"uint256"},{internalType:"uint256",name:"settingsDecimals",type:"uint256"}],internalType:"struct Constants.VaultState",name:"",type:"tuple"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"uint256",name:"usbAmount",type:"uint256"}],name:"calcRedeemByUsbBelowAARS",outputs:[{components:[{internalType:"uint256",name:"M_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_i",type:"uint256"},{internalType:"uint256",name:"P_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_DECIMALS",type:"uint256"},{internalType:"uint256",name:"M_USB_ETH",type:"uint256"},{internalType:"uint256",name:"M_ETHx",type:"uint256"},{internalType:"uint256",name:"aar",type:"uint256"},{internalType:"uint256",name:"AART",type:"uint256"},{internalType:"uint256",name:"AARS",type:"uint256"},{internalType:"uint256",name:"AARU",type:"uint256"},{internalType:"uint256",name:"AARC",type:"uint256"},{internalType:"uint256",name:"AARDecimals",type:"uint256"},{internalType:"uint256",name:"RateR",type:"uint256"},{internalType:"uint256",name:"AARBelowSafeLineTime",type:"uint256"},{internalType:"uint256",name:"AARBelowCircuitBreakerLineTime",type:"uint256"},{internalType:"uint256",name:"settingsDecimals",type:"uint256"}],internalType:"struct Constants.VaultState",name:"",type:"tuple"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"uint256",name:"usbAmount",type:"uint256"}],name:"calcUsbToLeveragedTokens",outputs:[{components:[{internalType:"uint256",name:"M_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_i",type:"uint256"},{internalType:"uint256",name:"P_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_DECIMALS",type:"uint256"},{internalType:"uint256",name:"M_USB_ETH",type:"uint256"},{internalType:"uint256",name:"M_ETHx",type:"uint256"},{internalType:"uint256",name:"aar",type:"uint256"},{internalType:"uint256",name:"AART",type:"uint256"},{internalType:"uint256",name:"AARS",type:"uint256"},{internalType:"uint256",name:"AARU",type:"uint256"},{internalType:"uint256",name:"AARC",type:"uint256"},{internalType:"uint256",name:"AARDecimals",type:"uint256"},{internalType:"uint256",name:"RateR",type:"uint256"},{internalType:"uint256",name:"AARBelowSafeLineTime",type:"uint256"},{internalType:"uint256",name:"AARBelowCircuitBreakerLineTime",type:"uint256"},{internalType:"uint256",name:"settingsDecimals",type:"uint256"}],internalType:"struct Constants.VaultState",name:"",type:"tuple"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IVault",name:"vault",type:"address"},{internalType:"uint256",name:"stableAssetPrice",type:"uint256"},{internalType:"uint256",name:"settingsDecimals",type:"uint256"}],name:"getVaultState",outputs:[{components:[{internalType:"uint256",name:"M_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_i",type:"uint256"},{internalType:"uint256",name:"P_ETH",type:"uint256"},{internalType:"uint256",name:"P_ETH_DECIMALS",type:"uint256"},{internalType:"uint256",name:"M_USB_ETH",type:"uint256"},{internalType:"uint256",name:"M_ETHx",type:"uint256"},{internalType:"uint256",name:"aar",type:"uint256"},{internalType:"uint256",name:"AART",type:"uint256"},{internalType:"uint256",name:"AARS",type:"uint256"},{internalType:"uint256",name:"AARU",type:"uint256"},{internalType:"uint256",name:"AARC",type:"uint256"},{internalType:"uint256",name:"AARDecimals",type:"uint256"},{internalType:"uint256",name:"RateR",type:"uint256"},{internalType:"uint256",name:"AARBelowSafeLineTime",type:"uint256"},{internalType:"uint256",name:"AARBelowCircuitBreakerLineTime",type:"uint256"},{internalType:"uint256",name:"settingsDecimals",type:"uint256"}],internalType:"struct Constants.VaultState",name:"",type:"tuple"}],stateMutability:"view",type:"function"}]},43003:function(e,t,n){n.d(t,{R:function(){return useWrapContractWrite}});var i=n(81628),a=n(2265),u=n(71424),p=n(56926);function useWrapContractWrite(e){var t;let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=(0,p.PJ)(e),y=(0,p.GG)(r.config),l=(0,p.BX)({hash:null===(t=y.data)||void 0===t?void 0:t.hash}),s=y.isLoading||l.isLoading,m=y.isSuccess&&l.isSuccess;return(0,a.useEffect)(()=>{n&&(y.error?u.toast.error((0,i.az)(y.error)):m&&u.toast.success("Transaction success"))},[y.error,m]),{...y,isLoading:s,isSuccess:m}}},20373:function(e,t,n){n.d(t,{ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var i=n(79352);let displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let n=10**t;return(Math.floor(Number((0,i.d)(e))*n)/n).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},displayBalanceWithoutFormat=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0.000";let n=10**t;return String(Math.floor(Number((0,i.d)(e))*n)/n)}}}]);