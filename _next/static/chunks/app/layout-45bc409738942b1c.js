(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{35883:function(){},9493:function(e,t,n){Promise.resolve().then(n.bind(n,34603)),Promise.resolve().then(n.bind(n,57756)),Promise.resolve().then(n.bind(n,77941)),Promise.resolve().then(n.bind(n,9128)),Promise.resolve().then(n.bind(n,90276)),Promise.resolve().then(n.t.bind(n,42746,23)),Promise.resolve().then(n.t.bind(n,83480,23))},34603:function(e,t,n){"use strict";n.r(t),n.d(t,{Providers:function(){return p}});var a=n(9268),s=n(59140),i=n(86006),r=n(19707),d=n(61997),l=n(80237),o=n(52040);let u=(0,r._g)((0,s._K)({alchemyId:o.env.ALCHEMY_ID,walletConnectProjectId:"",appName:"Your App Name",chains:[l.ws,d.RJ],appDescription:"Your App Description",appUrl:"https://family.co",appIcon:"https://family.co/logo.png"}));function p(e){let{children:t}=e,[n,d]=i.useState(!1);return i.useEffect(()=>d(!0),[]),(0,a.jsx)(r.eM,{config:u,children:(0,a.jsx)(s.bO,{children:n&&t})})}},90276:function(e,t,n){"use strict";n.r(t),n.d(t,{Header:function(){return b}});var a=n(9268),s=n(63831),i=n(35846),r=n.n(i),d=n(76394),l=n.n(d),o=n(56008),u=n(87782),p=n(89725),m=n(59140),y=n(87991);let c=[{name:"Twitter",url:"https://twitter.com/WandProtocol",icon:p.vJk},{name:"Discord",url:"https://discord.gg/fy6A7JCE5N",icon:p.HpO}],f=[{href:"/swap",label:"Atomic Swap",icon:u.sQO},{href:"/earn",label:"Earn",icon:u.j0p},{href:"/dashboard",label:"Dashboard",icon:u.FL4}];function b(){let e=(0,o.usePathname)();return(0,a.jsxs)("header",{className:"h-[72px] fixed w-full max-w-[1440px] inset-0 mx-auto flex items-center px-4 bg-slate-50/30 backdrop-blur-lg z-30",children:[(0,a.jsx)(r(),{href:"/",className:"font-bold text-xl leading-7",children:(0,a.jsx)(l(),{src:"/logo.svg",height:52,width:211,alt:"wand logo"})}),(0,a.jsxs)(y.fC,{children:[(0,a.jsxs)(y.xz,{className:"flex text-slate-500 font-medium lg:hidden items-center capitalize text-sm",children:[e.split("/")[1],(0,a.jsx)(p.YRR,{})]}),(0,a.jsx)(y.Uv,{children:(0,a.jsx)(y.VY,{className:"z-50 bg-white p-1 border border-slate-200 shadow-lg rounded-md",children:f.map(e=>{let{href:t,label:n,icon:s}=e;return(0,a.jsx)(y.ck,{children:(0,a.jsxs)(r(),{className:"flex items-center text-slate-500 text-sm font-medium gap-1 px-3 py-2 rounded-sm hover:bg-slate-50",href:t,children:[(0,a.jsx)(s,{}),n]})},n)})})})]}),"/"!==e?(0,a.jsx)("div",{className:"hidden lg:flex w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-12 items-center justify-between",children:f.map(t=>{let{href:n,label:i,icon:d}=t;return(0,a.jsxs)(r(),{className:(0,s.Z)("text-sm font-medium flex gap-1 items-center transition-all active:translate-y-1",e==="/".concat(n)?"text-slate-700":"text-slate-500"),href:n,children:[(0,a.jsx)(d,{}),i]},n)})}):null,(0,a.jsxs)("div",{className:"flex items-center gap-1 md:gap-4 ml-auto",children:[(0,a.jsx)("div",{className:"hidden lg:flex items-center gap-3",children:c.map(e=>{let{url:t,icon:n,name:s}=e;return(0,a.jsx)(r(),{href:t,className:"text-slate-300 hover:text-indigo-500",children:(0,a.jsx)(n,{})},s)})}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-sm text-slate-500 font-medium rounded-full",children:[(0,a.jsx)(l(),{width:24,height:24,src:"/ETH.svg",alt:""}),(0,a.jsx)("div",{className:"",children:"Ethereum Goerli"})]}),"/"===e?(0,a.jsx)(r(),{href:"/swap/quick-start",className:"h-fit bg-indigo-500 text-white text-sm leading-6 font-medium px-4 py-2 rounded-full whitespace-nowrap",children:"Launch App"}):(0,a.jsx)(m.x3,{})]})]})}},96716:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});let a=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"rewardToken",type:"address"}],name:"RewardTokenAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"rewardToken",type:"address"},{indexed:!1,internalType:"uint256",name:"rewardAmount",type:"uint256"}],name:"StakingRewardsAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"rewardToken",type:"address"},{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"reward",type:"uint256"}],name:"StakingRewardsPaid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Unstaked",type:"event"},{inputs:[{internalType:"address",name:"rewardToken",type:"address"}],name:"addRewardToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllStakingRewards",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"rewardToken",type:"address"}],name:"getStakingRewards",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"interestPoolFactory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"rewardToken",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"notifyRewardsAdded",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"rewardToken",type:"address"}],name:"rewardTokenAdded",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"rewardTokens",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"rewardToken",type:"address"},{internalType:"address",name:"account",type:"address"}],name:"stakingRewardsEarned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"stakingRewardsPerToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"stakingToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"stakingTokenInfo",outputs:[{components:[{internalType:"address",name:"stakingToken",type:"address"},{internalType:"enum Constants.InterestPoolStakingTokenType",name:"stakingTokenType",type:"uint8"},{internalType:"address",name:"swapPool",type:"address"},{internalType:"uint256",name:"swapPoolCoinsCount",type:"uint256"}],internalType:"struct Constants.InterestPoolStakingTokenInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalStakingAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalStakingAmountInUSB",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"unstake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"userStakingAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"userStakingRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"userStakingRewardsPerTokenPaid",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"wandProtocol",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}]},45574:function(e,t,n){"use strict";n.d(t,{F:function(){return i}});var a=n(80237),s=n(61997);let i={[a.ws.id]:"0xF8d2e505516d66Ed57A14765E1aB17a0140f7192",[s.RJ.id]:"0xF8d2e505516d66Ed57A14765E1aB17a0140f7192"}},16625:function(e,t,n){"use strict";n.d(t,{e:function(){return d}});var a=n(43534),s=n(80237),i=n(61997),r=n(56883);let d=[...a.C.map(e=>({symbol:e.assetTokenSymbol,address:{[s.ws.id]:e.assetTokenAddress,[i.RJ.id]:e.assetTokenAddress}})).filter(e=>"ETH"!==e.symbol),...a.C.map(e=>({symbol:e.xTokenSymbol,address:{[s.ws.id]:e.xTokenAddress,[i.RJ.id]:e.xTokenAddress}})),{symbol:"USB",address:{[s.ws.id]:r.O[s.ws.id],[i.RJ.id]:r.O[i.RJ.id]}}]},56883:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var a=n(80237),s=n(61997);let i={[a.ws.id]:"0x9EAFdB7111628129fFee1af04593858E09797cD6",[s.RJ.id]:""}},9128:function(e,t,n){"use strict";n.r(t),n.d(t,{EarnContext:function(){return y},EarnProvider:function(){return c}});var a=n(9268),s=n(86006),i=n(19707),r=n(69624),d=n(85418),l=n(56883),o=n(45574),u=n(96716),p=n(43534),m=n(88426);let y=(0,s.createContext)({usb4poolAllowance:0n,usbStakingAmount:0n,earneds:[],usbPoolStaked:0n,ys:[]}),c=e=>{var t,n,c,f,b,x;let{children:v}=e,{address:h}=(0,i.mA)(),{data:T}=(0,i.Dm)({contracts:[...p.C.map(e=>({address:l.O[(0,d.B)()],abi:r.em,functionName:"stakingRewardsEarned",args:[e.xTokenSymbol,h],chainId:(0,d.B)()})),{address:l.O[(0,d.B)()],abi:r.em,functionName:"allowance",args:[h,o.F[(0,d.B)()]],chainId:(0,d.B)()},{address:o.F[(0,d.B)()],abi:u.$,functionName:"userStakingAmount",args:[h],chainId:(0,d.B)()},{address:l.O[(0,d.B)()],abi:r.em,functionName:"balanceOf",args:[o.F[(0,d.B)()]],chainId:(0,d.B)()}],watch:!0,enabled:!!h,allowFailure:!0}),w=p.C.length,g=(0,s.useMemo)(()=>null==T?void 0:T.filter((e,t)=>t<w).map((e,t)=>{var n;return{symbol:null===(n=p.C[t])||void 0===n?void 0:n.xTokenSymbol,earned:null==e?void 0:e.result}}),[T]),k=[{symbol:"ETH",y:(0,m.f)("0.035")},{symbol:"WBTC",y:(0,m.f)("0.03")},{symbol:"stETH",y:(0,m.f)("0.05")}];return console.log(T),(0,a.jsx)(y.Provider,{value:{earneds:null!=g?g:[],usb4poolAllowance:null!==(f=null==T?void 0:null===(t=T[w])||void 0===t?void 0:t.result)&&void 0!==f?f:0n,usbStakingAmount:null!==(b=null==T?void 0:null===(n=T[1+w])||void 0===n?void 0:n.result)&&void 0!==b?b:0n,usbPoolStaked:null!==(x=null==T?void 0:null===(c=T[2+w])||void 0===c?void 0:c.result)&&void 0!==x?x:0n,ys:k},children:v})}},57756:function(e,t,n){"use strict";n.r(t),n.d(t,{FetcherContext:function(){return o},FetcherProvider:function(){return u}});var a=n(9268),s=n(86006),i=n(19707),r=n(69624),d=n(85418),l=n(16625);let o=(0,s.createContext)({balances:[],totalSupplies:[]}),u=e=>{let{children:t}=e,{address:n}=(0,i.mA)(),{data:u}=(0,i.KQ)({address:n,watch:!0,chainId:(0,d.B)()});console.log("fuck",u);let{data:p}=(0,i.Dm)({contracts:[...l.e.map(e=>({address:e.address[(0,d.B)()],abi:r.em,functionName:"balanceOf",args:[n],chainId:(0,d.B)()})),...l.e.map(e=>({address:e.address[(0,d.B)()],abi:r.em,functionName:"totalSupply",chainId:(0,d.B)()}))],watch:!0,enabled:!!n,allowFailure:!0});console.log(p),console.log(l.e);let m=l.e.length,y=(0,s.useMemo)(()=>null==p?void 0:p.filter((e,t)=>t<m).map((e,t)=>{var n;return{symbol:null===(n=l.e[t])||void 0===n?void 0:n.symbol,balance:null==e?void 0:e.result}}),[p]),c=(0,s.useMemo)(()=>null==p?void 0:p.filter((e,t)=>t>=m&&t<2*m).map((e,t)=>{var n;return{symbol:null===(n=l.e[t])||void 0===n?void 0:n.symbol,totalSupply:null==e?void 0:e.result}}),[p]);return(0,a.jsx)(o.Provider,{value:{balances:y?[...y,{symbol:"ETH",balance:null==u?void 0:u.value}]:[],totalSupplies:null!=c?c:[]},children:t})}},42746:function(){}},function(e){e.O(0,[287,482,166,970,394,935,140,567,846,298,941,253,961,744],function(){return e(e.s=9493)}),_N_E=e.O()}]);