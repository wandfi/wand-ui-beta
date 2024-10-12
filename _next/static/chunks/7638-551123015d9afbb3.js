(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7638],{79391:function(){},68535:function(e,t,a){"use strict";let n;a.d(t,{aw:function(){return getBlastPoints},l3:function(){return getInviteCodes},dH:function(){return getInvitees},Vm:function(){return getPtypoolYields},Zr:function(){return getRank},V_:function(){return getUserState},M0:function(){return refreshInviteCode},n$:function(){return userLogin}});var s=a(22139),o=a(83606);let instance=()=>(n&&n.defaults.baseURL==="https://earlyaccess-beta.".concat(s.L3.value,"/api")||(n=o.Z.create({baseURL:"https://earlyaccess-beta.".concat(s.L3.value,"/api"),timeout:1e4,headers:{"Content-Type":"application/json"}})),n);var r={get:async function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.startsWith("/auth")){let e=localStorage.getItem("earlyaccess-token");if(!e)throw"Need token";n.headers={...n.headers||{},Authorization:e}}let s=await instance().get(e,{...n,params:a});if(console.info("res:",null==s?void 0:s.data),(null==s?void 0:null===(t=s.data)||void 0===t?void 0:t.code)!==200)throw s.data;return s.data.data},post:async function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.startsWith("/auth")){let e=localStorage.getItem("earlyaccess-token");if(!e)throw"Need token";n.headers={...n.headers||{},Authorization:e}}let s=await instance().post(e,a,n);if((null==s?void 0:null===(t=s.data)||void 0===t?void 0:t.code)!==200)throw s.data;return s.data.data}};let getRank=async()=>{let e=await r.get("/common/leader");return e},userLogin=async e=>{let t=await r.post("/auth/register",{code:e});return t},getUserState=async()=>{let e=await r.get("/auth/userState");return e},getBlastPoints=async()=>{let e=await r.get("/auth/blastPoints");return e},getInviteCodes=async()=>{let e=await r.get("/auth/invite/codes");return e},getInvitees=async()=>{let e=await r.get("/auth/invitees");return e},refreshInviteCode=async()=>(await r.post("/auth/invite/code/create"),getInviteCodes()),getPtypoolYields=async()=>{let e=await r.get("/common/ptypool/yields");return e}},90168:function(e,t,a){"use strict";a.d(t,{l:function(){return getTokens}});var n=a(19757),s=a(73216);let getTokens=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return n.iK[e].map(e=>({symbol:e.assetTokenSymbol,address:e.assetTokenAddress})).concat(n.iK[e].map(e=>({symbol:e.xTokenSymbol,address:e.xTokenAddress}))).concat([{symbol:"USB",address:n.O1[e]}]).concat((n.VQ[e]||[]).map(e=>({symbol:e.assetTokenSymbol,address:e.assetToken}))).filter(e=>!t||e.symbol!==(0,s.b)())}},22139:function(e,t,a){"use strict";a.d(t,{Hj:function(){return s},L3:function(){return l},Pq:function(){return o},pn:function(){return r},v:function(){return n},xb:function(){return DOC_LINK}});let n="https://twitter.com/WandProtocol",s="https://discord.gg/fy6A7JCE5N",o=BigInt(1e18),r=864e5,l={value:"waind.fi"},DOC_LINK=()=>"https://docs.".concat(l.value)},88439:function(e,t,a){"use strict";a.d(t,{b:function(){return useMemoOfChainId}});var n=a(64103),s=a(59175);function useMemoOfChainId(e){let t=(0,s.p)(),a=(0,n.useRef)({});return(0,n.useMemo)(()=>(a.current[t]||(a.current[t]=e()),a.current[t]),[t])}},45438:function(e,t,a){"use strict";a.d(t,{i:function(){return i},p:function(){return useUpdatePtypoolApy}});var n=a(19757),s=a(22139),o=a(64103),r=a(12396),l=a(48338),u=a(59175);let i=(0,l.Ue)(e=>({update:e}));function useUpdatePtypoolApy(e,t,a){let l=(0,u.p)(),d=n.iK[l],c=Object.values(e).reduce((e,t)=>t.totalStake+e,0n),{update:b}=i();(0,o.useEffect)(()=>{d.forEach(o=>{let u=a[o.vault];if(o.ptyPoolAboveAddress&&e[o.ptyPoolAboveAddress]&&b({[o.ptyPoolAboveAddress]:{staking:(0,r.v)("0.025",10),matching:0n}}),o.ptyPoolBelowAddress&&e[o.ptyPoolBelowAddress]){let a=e[o.ptyPoolBelowAddress].totalStake*t[n.O1[l]];console.info("hhh:",a);let r=a>0n&&u.settingsDecimals>0n?u.M_ETHx*u.Y*t[o.xTokenAddress]*s.Pq/2n/a/u.settingsDecimals**10n:0n;b({[o.ptyPoolBelowAddress]:{staking:r*10n**10n/s.Pq,matching:0n}})}})},[d,c,e,t,a])}},75930:function(e,t,a){"use strict";a.d(t,{g:function(){return D},A:function(){return FetcherProvider}});var n=a(31113),s=a(26504),o=a(68535),r=a(73216),l=a(19757),u=a(90168),i=a(22139),d=a(59175),c=a(64103),b=a(20168),m=a(87958),p=a(41340),f=a(88439),v=a(26361),h=a(72366),g=a(15506),k=a(45438),y=a(64370),S=a(83978),A=a.n(S),Y=a(68940),T=a(74819),w=a(22298),P=a(7530),B=a(9709),N=a(96634);let D=(0,c.createContext)({balances:(0,v.Yb)({},0n),totalSupplies:(0,v.Yb)({},0n),prices:(0,v.Yb)({},0n),assetLocked:(0,v.Yb)({},0n),aar:(0,v.Yb)({},0),vaultUSBTotal:(0,v.Yb)({},0n),vaultsMode:(0,v.Yb)({},0),vaultsDiscount:(0,v.Yb)({},!1),vaultsState:(0,v.Yb)({},(0,v.Yb)({},0n)),stableVaultsState:(0,v.Yb)({},(0,v.Yb)({},0n)),earns:(0,v.Yb)({},(0,v.Yb)({},0n)),usbApr:{apr:0n,aprDecimals:10},plainVaultsStat:(0,v.Yb)({},(0,v.Yb)({},0n))}),FetcherProvider=e=>{let{children:t}=e,a=(0,g.hp)(),S=(0,d.p)();!function(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,b.m)({chainId:e});c.useMemo(()=>(t&&(r.ON.provider=function(e){var t,a;let{chain:n,transport:s}=e,o={chainId:n.id,name:n.name,ensAddress:null===(a=n.contracts)||void 0===a?void 0:null===(t=a.ensRegistry)||void 0===t?void 0:t.address};return"fallback"===s.type?new m.H(s.transports.map(e=>{let{value:t}=e;return new p.r(null==t?void 0:t.url,o)})):new p.r(s.url,o)}(t)),r.ON.provider),[t])}();let{address:M}=(0,h.m)(),{data:I}=(0,N.K)({address:M,chainId:S,query:{enabled:!!M,refetchOnMount:!1,refetchOnWindowFocus:!1},wandtime:a.time}),C=(0,c.useMemo)(()=>(0,u.l)(S),[S]),{data:E}=(0,g.uX)({contracts:[...C.map(e=>({address:e.address,abi:w.Wo,functionName:"balanceOf",args:[M],chainId:S}))],query:{enabled:!!M}}),{data:U}=(0,g.uX)({contracts:[...C.map(e=>({address:e.address,abi:w.Wo,functionName:"totalSupply",chainId:S}))]}),_=(0,f.b)(()=>(0,v.Yb)({},0n));_[l.K8]=(0,v.ok)(I,"value"),C.forEach((e,t)=>{_[e.address]=(0,v.ok)(E,[t,"result"])});let W=(0,f.b)(()=>(0,v.Yb)({},0n));C.forEach((e,t)=>{W[e.address]=(0,v.ok)(U,[t,"result"])});let q=l.iK[S],O=function(){let e=(0,d.p)(),t=l.iK[e],{data:a}=(0,g.uX)({contracts:[...t.map(e=>({vc:e,abi:s.nq,address:e.assetTokenFeed,functionName:"latestPrice"}))]}),{data:n}=(0,g.uX)({query:{gcTime:i.pn},contracts:[...t.map(e=>({abi:s.nq,address:e.assetTokenFeed,functionName:"decimals"}))]});return(0,c.useMemo)(()=>{let e={};return t.forEach((t,s)=>{let o=(0,v.ok)(a,[s,"result"]),r=(0,v.ok)(n,[s,"result"]);e[t.assetTokenAddress]=[o,r]}),e},[a,n,t])}(),{data:x}=(0,g.uX)({contracts:[...q.map(e=>({vc:e,abi:s.WW,address:e.vault,functionName:"assetBalance"}))]}),{data:X}=(0,g.uX)({contracts:[...q.map(e=>({abi:s.WW,address:e.vault,functionName:"usbTotalSupply"}))]}),{data:R}=(0,g.uX)({contracts:[...q.map(e=>({vc:e,abi:s.Wn,address:l.O6[S],functionName:"AAR",args:[e.vault]}))]}),{data:K}=(0,g.uX)({query:{gcTime:i.pn},contracts:[...q.map(e=>({abi:s.WW,address:e.vault,functionName:"AARDecimals"}))]}),{data:L}=(0,g.uX)({contracts:[...q.map(e=>({abi:s.WW,address:e.vault,functionName:"vaultMode"}))]}),{data:V}=(0,g.uX)({contracts:[...q.map(e=>({vc:e,abi:s.Wn,address:l.O6[S],functionName:e.isStable?"getStableVaultState":"getVaultState",args:[e.vault]}))]}),{data:F}=(0,g.uX)({query:{gcTime:i.pn},contracts:[...q.map(e=>({vc:e,abi:s.WW,address:e.vault,functionName:"paramValue",args:[(0,T.$G)("Y",{size:32})]}))]}),H=(0,f.b)(()=>(0,v.Yb)({[l.O1[S]]:i.Pq},0n)),j=(0,f.b)(()=>(0,v.Yb)({},0n)),z=(0,f.b)(()=>(0,v.Yb)({},0n)),Z=(0,f.b)(()=>(0,v.Yb)({},0n)),$=(0,f.b)(()=>(0,v.Yb)({},0)),G=(0,f.b)(()=>(0,v.Yb)({},(0,v.Yb)({},0n))),Q=(0,f.b)(()=>(0,v.Yb)({},(0,v.Yb)({},0n))),J=function(e,t,a){let n=(0,f.b)(()=>(0,v.Yb)({},!1)),o=(0,d.p)(),r=l.iK[o],{data:u}=(0,g.uX)({contracts:r.map(e=>({vc:e,abi:s.WW,address:e.vault,functionName:"paramValue",args:[(0,T.$G)("CircuitBreakPeriod",{size:32})]}))});return r.forEach((s,o)=>{if(s.isStable){let e=t[(null==s?void 0:s.vault)||"null"];n[s.vault]=e&&e.M_USDCx>0n&&e.aar<e.AARS}else{let t=(0,v.ok)(u,[o,"result"]),r=e[(null==s?void 0:s.vault)||"null"],l=a[(null==s?void 0:s.vault)||"null"],i=(0,v.ok)(r,"AARBelowCircuitBreakerLineTime"),d=2==l&&r&&((0,v.ok)(r,"aar")>=(0,v.ok)(r,"AARC")||BigInt(Math.floor(new Date().getTime()/1e3))-i>=t);n[s.vault]=d}}),n}(G,Q,$);q.forEach((e,t)=>{var a,n,s;let o=(0,v.ok)(x,[t,"result"]),r=(0,v.ok)(X,[t,"result"]),u=(0,v.ok)(O[e.assetTokenAddress],[0]),d=(0,v.ok)(O[e.assetTokenAddress],[1]);Z[e.vault]=r;let c=d>0n?u*i.Pq/10n**d:0n;H[e.assetTokenAddress]=c;let b=W[e.xTokenAddress],m=b>0n&&o>0n&&c>0n&&r>0n&&o*c>r*i.Pq?(o*c-r*i.Pq)/b:0n;b>0n&&o>0n&&c>0n&&r>0n&&o*c<r*i.Pq&&(H[l.O1[S]]=o*c/r),H[e.xTokenAddress]=m,j[e.assetTokenAddress]=o;let p=(0,P.b)((0,v.ok)(R,[t,"result"]),parseInt((0,v.ok)(K,[t,"result"]).toString()));z[e.vault]=parseFloat(p),e.isStable?Q[e.vault]=(0,v.Yb)({settingsDecimals:10n,...null==V?void 0:null===(n=V[t])||void 0===n?void 0:n.result,Y:(0,v.ok)(F,[t,"result"])},0n):G[e.vault]=(0,v.Yb)({settingsDecimals:10n,...null==V?void 0:null===(s=V[t])||void 0===s?void 0:s.result,Y:(0,v.ok)(F,[t,"result"])},0n);let f=Q[e.vault];$[e.vault]=e.isStable?f.aar<f.AARS&&f.M_USDC>0n?2:1:(null==L?void 0:null===(a=L[t])||void 0===a?void 0:a.result)||0});let ee=function(){let{address:e}=(0,h.m)(),t=(0,d.p)(),a=(0,c.useMemo)(()=>l.iK[t].filter(e=>!e.isStable&&e.ptyPoolAboveAddress&&e.ptyPoolBelowAddress).map(e=>[{poolAddress:e.ptyPoolBelowAddress,stakeSymbol:"USB",matchSymbol:e.assetTokenSymbol,earnSymbol:e.xTokenSymbol,earnForMatchSymbol:e.assetTokenSymbol},{poolAddress:e.ptyPoolAboveAddress,stakeSymbol:e.assetTokenSymbol,matchSymbol:"USB",earnSymbol:e.assetTokenSymbol,earnForMatchSymbol:e.xTokenSymbol}]).flat(),[t]),{data:n}=(0,g.uX)({query:{enabled:!!e},contracts:[...a.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"userStakingBalance",args:[e]}}),...a.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"earnedMatchedToken",args:[e]}}),...a.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"earnedStakingYields",args:[e]}}),...a.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"earnedMatchingYields",args:[e]}})]}),{data:o}=(0,g.uX)({contracts:[...a.map(e=>{let{poolAddress:t}=e;return{abi:s.aT,address:t,functionName:"totalStakingBalance"}})]}),u=(0,B.t)(),{data:i}=(0,y.a)({queryKey:[a,u],initialData:(0,v.Yb)({},0n),queryFn:async()=>{let e=(0,v.Yb)({},0n);if(!u)return e;let t=a.filter(e=>e.matchSymbol==(0,r.b)()),n=await Promise.all(t.map(e=>u.getBalance({address:e.poolAddress})));return t.forEach((t,a)=>{e[t.poolAddress]=n[a]}),e}}),b=(0,f.b)(()=>(0,v.Yb)({},(0,v.Yb)({},0n)));return a.forEach((e,t)=>{let{poolAddress:s,stakeSymbol:r,matchSymbol:l,earnSymbol:u}=e,d=(0,v.ok)(n,[t,"result"]),c=(0,v.ok)(n,[t+a.length,"result"]),m=(0,v.ok)(n,[t+2*a.length,"result"]),p=(0,v.ok)(n,[t+3*a.length,"result"]),f=(0,v.ok)(o,[t,"result"]);b[s]={stakeSymbol:r,matchSymbol:l,earnSymbol:u,stake:d,match:c,earn:m,earnForMatch:p,totalStake:f,balance:i[s]||0n}}),b}(),et=function(e,t){let a=(0,d.p)(),n=0,s=0n,o=0n;return l.iK[a].forEach(a=>{if(a.isStable){let e=t[a.vault];s+=e.M_USB_USDC*e.Y*e.aar/10n**e.AARDecimals,o+=e.M_USB_USDC,e.M_USB_USDC>0n&&e.Y>0n&&n++}else{let t=e[a.vault];s+=t.M_USB_ETH*t.Y,o+=t.M_USB_ETH,t.M_USB_ETH>0n&&t.Y>0n&&n++}}),{apr:o>0n?s/o:0n,aprDecimals:10}}(G,Q);(0,c.useEffect)(()=>{setInterval(()=>{let e=g.hp.getState();A().now()-e.time>=36e5&&e.update()},36e5)},[]);let{value:ea={}}=(0,Y.Z)(o.Vm,[a.time]);(0,k.p)(ee,H,G);let en=function(e){let t=(0,d.p)(),{address:a}=(0,h.m)(),n=l.VQ[t]||[],{data:o}=(0,g.uX)({contracts:[...n.map(e=>({abi:s.a4,address:e.vault,functionName:"totalSupply"})),...n.map(e=>({abi:s.a4,address:e.vault,functionName:"balanceOf",args:[a]}))]}),{data:u}=(0,g.uX)({contracts:[{abi:s.pE,address:"0xcD96262Df56127f298b452FA40759632868A472a",functionName:"latestRoundData",chainId:r.mx.id},{abi:s.pE,address:"0x0af23B08bcd8AD35D1e8e8f2D2B779024Bd8D24A",functionName:"latestRoundData",chainId:r.mx.id}]}),i=(0,v.ok)(u,[0,"result",1]),c=(0,v.ok)(u,[1,"result",1]),b=i*c*10n**2n,m=(0,f.b)(()=>(0,v.Yb)({},(0,v.Yb)({},0n)));return n.forEach((t,a)=>{"weETH"==t.assetTokenSymbol&&(e[t.assetToken]=b),m[t.vault]=m[t.vault],m[t.vault].totalSupply=(0,v.ok)(o,[a,"result"]),m[t.vault].userStaked=(0,v.ok)(o,[a+n.length,"result"])}),m}(H);return(0,n.jsx)(D.Provider,{value:{balances:_,totalSupplies:W,prices:H,assetLocked:j,aar:z,vaultUSBTotal:Z,vaultsMode:$,vaultsDiscount:J,vaultsState:G,stableVaultsState:Q,earns:ee,usbApr:et,ptypoolYields:ea,plainVaultsStat:en},children:t})}}}]);