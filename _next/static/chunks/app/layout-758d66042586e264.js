(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{35883:function(){},77449:function(e,t,s){Promise.resolve().then(s.t.bind(s,72853,23)),Promise.resolve().then(s.bind(s,24635)),Promise.resolve().then(s.t.bind(s,23925,23))},24635:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return PageLayout}});var a=s(57437),l=s(14181),n=s(2265),i=s(51143),r=s(56926),c=s(91056),d=s(75398),o=s(90433),h=s(86096),m=s(79116),x=s(68917),p=s(15898),u=s(9798),f=s(29526),b=s(66247);let g={[c.dm.id]:"blast_testnet_sepolia",[d.F.id]:"eth_sepolia"},{chains:j,publicClient:w,webSocketPublicClient:v}=(0,i.QB)(c.Af,[(0,o.R)({rpc:e=>({http:"https://rpc.ankr.com/".concat(g[e.id],"/").concat("e1a06837672f1dd89a4c70522941d3beebad120eafad005d79d77c42856d9310","/"),webSocket:""})}),(0,h.I)()],{batch:{multicall:{batchSize:10,wait:120}},stallTimeout:1e4}),N=new u.f({uri:"https://api.studio.thegraph.com/query/45897/wand/version/latest",cache:new f.h});function Providers(e){let{children:t}=e,[s,c]=n.useState();return(n.useEffect(()=>{c((0,r._g)({...(0,l._K)({alchemyId:"rTWFR_ABETT7HZq7wzFNnQE-sI6Gps93",walletConnectProjectId:"b3ff10277f66a6ba31bbb88fb6ea4365",appName:"Wand",chains:j,autoConnect:!0,publicClient:w,webSocketPublicClient:v,enableWebSocketPublicClient:!0,appDescription:"Wand Protocol",appUrl:"https://wand.fi.",appIcon:"https://wand.fi/logo.svg"}),storage:(0,i.o6)({storage:{getItem:localStorage.getItem,removeItem:localStorage.removeItem,setItem:(e,t)=>"wagmi.cache"!==e&&localStorage.setItem(e,t)}})}))},[]),s)?(0,a.jsx)(b.e,{client:N,children:(0,a.jsx)(r.eM,{config:s,children:(0,a.jsx)(x.QueryParamProvider,{adapter:m.Z,children:(0,a.jsx)(l.bO,{children:(0,a.jsx)(p.A,{children:t})})})})}):null}var k=s(8580),y=s(23291),P=s(57042),_=s(16691),I=s.n(_),S=s(61396),E=s.n(S),C=s(24033),F=s(41697),z=s(35932),B=s(26266);let H=[{name:"doc",url:k.xb,icon:z.K99},{name:"Twitter",url:k.v,icon:z.vJk},{name:"Discord",url:k.Hj,icon:z.HpO}],T=[{href:"/early",label:"Early Access",icon:F.bBF},{href:"/vaults",label:"Vaults",icon:F.QZG},{href:"/earn",label:"Earn",icon:F.j0p},{href:"/discount",label:"Discount Offer",icon:F.nlc},{href:"/dashboard",label:"Dashboard",icon:F.FL4}],W={[B.Fo.id]:"Ethereum Sepolia",[c.dm.id]:"Blast Sepolia"},A={[B.Fo.id]:"/ETH.svg",[c.dm.id]:"blast.png"};function Header(){let e=(0,C.usePathname)(),t="/"!==e&&window.innerWidth<1024,s=(0,l.dd)();return(0,a.jsxs)("header",{className:"h-[72px] fixed w-full max-w-[1440px] inset-0 mx-auto flex items-center justify-between px-4 bg-slate-50/30 backdrop-blur-lg z-30 ml-[calc(100vw - 100%)]",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsxs)(E(),{href:"/",className:"font-semibold flex pr-1 items-center text-base leading-7",children:[(0,a.jsx)(I(),{className:"",src:"/logo-alt.svg",height:52,width:52,alt:"wand logo image only"}),(0,a.jsx)("span",{className:"font-poppins",style:{display:t?"none":"inline-block"},children:"Wand"})]}),(0,a.jsxs)(y.fC,{children:[(0,a.jsxs)(y.xz,{className:"flex text-slate-500 font-medium hidden items-center capitalize text-sm",children:[e.split("/")[1],(0,a.jsx)(z.YRR,{})]}),(0,a.jsx)(y.Uv,{children:(0,a.jsx)(y.VY,{className:"z-50 bg-white p-1 border border-slate-200 shadow-lg rounded-md",children:T.map(e=>{let{href:t,label:s,icon:l}=e;return(0,a.jsx)(y.ck,{children:(0,a.jsxs)(E(),{className:"flex items-center text-slate-500 text-sm font-medium gap-1 px-3 py-2 rounded-sm hover:bg-slate-50",href:t,children:[(0,a.jsx)(l,{}),s]})},s)})})})]})]}),"/"!==e?(0,a.jsx)("div",{className:"hidden lg:flex w-fit gap-12 items-center justify-between",children:T.map(t=>{let{href:s,label:l,icon:n}=t;return(0,a.jsxs)(E(),{className:(0,P.Z)("text-sm font-medium flex gap-1 items-center transition-all active:translate-y-1",e==="/".concat(s)?"text-slate-700":"text-slate-500"),href:s,children:[(0,a.jsx)(n,{}),l]},s)})}):null,(0,a.jsxs)("div",{className:"flex items-center gap-1 md:gap-4",children:[(0,a.jsx)("div",{className:"hidden lg:flex items-center gap-3",children:H.map(e=>{let{url:t,icon:s,name:l}=e;return(0,a.jsx)(E(),{href:t,className:"text-slate-300 hover:text-indigo-500",children:(0,a.jsx)(s,{})},l)})}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-sm text-slate-500 font-medium rounded-full cursor-pointer",onClick:()=>s.openSwitchNetworks(),children:[(0,a.jsx)(I(),{width:24,height:24,src:A[(0,c.BV)()],alt:""}),(0,a.jsx)("div",{className:"hidden sm:block",children:W[(0,c.BV)()]})]}),"/"===e?(0,a.jsx)(E(),{href:"/vaults",className:"h-fit bg-indigo-500 text-white text-sm leading-6 font-medium px-4 py-2 rounded-full whitespace-nowrap",children:"Launch App"}):(0,a.jsx)(l.x3,{})]})]})}var O=s(71424);function PageLayout(e){let{children:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(Providers,{children:[(0,a.jsx)(Header,{}),(0,a.jsx)("div",{className:"min-h-screen h-0 pt-[80px] pb-6 ml-[calc(100vw - 100%)]",children:t})]}),(0,a.jsx)(O.x,{position:"top-right",offset:70})]})}},72853:function(){}},function(e){e.O(0,[27,866,33,465,986,232,510,539,240,156,619,203,59,322,971,472,744],function(){return e(e.s=77449)}),_N_E=e.O()}]);