(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{47420:function(e,t,n){Promise.resolve().then(n.bind(n,58489))},58489:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var s=n(9268),r=n(19707),i=n(88426),o=n(43534);let a=()=>{let{address:e}=(0,r.mA)(),{config:t}=(0,r.PJ)({address:o.C[1].assetTokenAddress,abi:[{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"assetAmount",type:"uint256"}],name:"mint",outputs:[],type:"function"}],functionName:"mint",args:[e,(0,i.f)("10")]}),{write:n,data:s,isLoading:a}=(0,r.GG)(t),{isLoading:d}=(0,r.BX)({hash:null==s?void 0:s.hash});return{mintWBTC:n,isMintWBTCLoading:a||d}},d=()=>{let{address:e}=(0,r.mA)(),{config:t}=(0,r.PJ)({address:o.C[2].assetTokenAddress,abi:[{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"assetAmount",type:"uint256"}],name:"mint",outputs:[],type:"function"}],functionName:"mint",args:[e,(0,i.f)("10")]}),{write:n,data:s,isLoading:a}=(0,r.GG)(t),{isLoading:d}=(0,r.BX)({hash:null==s?void 0:s.hash});return{mintStEth:n,isMintStEthLoading:a||d}};function u(){let{mintWBTC:e}=a(),{mintStEth:t}=d();return(0,s.jsxs)("div",{children:[(0,s.jsx)("button",{className:"btn-primary",onClick:e,children:"Mint WBTC"}),(0,s.jsx)("button",{className:"btn-primary",onClick:t,children:"Mint StEth"})]})}},43534:function(e,t,n){"use strict";n.d(t,{C:function(){return s}});let s=[{assetTokenSymbol:"ETH",xTokenSymbol:"ETHx",assetTokenAddress:"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",xTokenAddress:"0x1aDf0bb122BAf003cdeBBe4B9041da20117e24b6",poolAddress:"0x89BBE988c010846b935B07750A6Ff74A8c132534"},{assetTokenSymbol:"WBTC",xTokenSymbol:"WBTCx",assetTokenAddress:"0xcAE964CfeEa795b8D545fBb0899e16A665218c65",xTokenAddress:"0x586fA472aa706bcB6e0b1fDAeDFac8799F7a0e51",poolAddress:"0x383ba522b4B515f17CA5fd46BA82b9598A02c309"},{assetTokenSymbol:"stETH",xTokenSymbol:"stETHx",assetTokenAddress:"0x18F37A1CA2D1fD5B104009fD288A947431203C78",xTokenAddress:"0x55963a781f8484eF559bE020217b9546e305F713",poolAddress:"0xDD92644966a1B495DFD0225313a9294501e83034"}]},83177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(86006),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var s,i={},u=null,l=null;for(s in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,s)&&!d.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:u,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},9268:function(e,t,n){"use strict";e.exports=n(83177)},88426:function(e,t,n){"use strict";n.d(t,{f:function(){return r}});var s=n(33722);function r(e,t="wei"){return function(e,t){let[n,s="0"]=e.split("."),r=n.startsWith("-");if(r&&(n=n.slice(1)),s=s.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${s}`))&&(n=`${BigInt(n)+1n}`),s="";else if(s.length>t){let[e,r,i]=[s.slice(0,t-1),s.slice(t-1,t),s.slice(t)],o=Math.round(Number(`${r}.${i}`));(s=o>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${o}`).length>t&&(s=s.slice(1),n=`${BigInt(n)+1n}`),s=s.slice(0,t)}else s=s.padEnd(t,"0");return BigInt(`${r?"-":""}${n}${s}`)}(e,s.ez[t])}}},function(e){e.O(0,[707,253,961,744],function(){return e(e.s=47420)}),_N_E=e.O()}]);