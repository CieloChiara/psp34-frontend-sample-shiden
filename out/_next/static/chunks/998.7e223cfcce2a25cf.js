"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{3821:function(e,t,n){n.r(t);var r=n(7568),a=n(655),s=n(5893),o=n(7294),l=n(8562),i=n(8456),c=n(1931),u=n(1668),d=n(196),h=n(8969),m=n(2980),b=n(7998),p=n(7978),g=function(){var e,t=[{name:"Shiden",url:"wss://shiden.api.onfinality.io/public-ws",subscan_url:"https://shiden.subscan.io/account/"},{name:"Shibuya",url:"wss://rpc.shibuya.astar.network",subscan_url:"https://shibuya.subscan.io/account/"},{name:"Local",url:"ws://127.0.0.1:9944"},{name:"Custom",url:"wss://astar-collator.cielo.works:11443"},],g=(0,o.useState)(0),x=g[0],f=g[1],v=(0,o.useState)(""),S=v[0],k=v[1],w=(0,o.useState)(""),j=w[0],N=w[1],y=(0,o.useState)(""),C=y[0],_=y[1],B=(0,o.useState)(""),A=B[0],Z=B[1],I=(0,o.useState)(""),L=I[0],T=I[1],E=(0,o.useState)([]),M=E[0],U=E[1],F=(0,o.useState)(""),H=F[0],P=F[1],R=(0,o.useState)(),z=R[0],O=R[1],q=(0,o.useState)(""),D=q[0],V=q[1],G=(0,o.useState)(""),J=G[0],K=G[1],Q=(0,o.useState)(""),W=Q[0],X=Q[1],Y=(0,o.useState)(""),$=Y[0],ee=Y[1],et=(0,o.useState)(""),en=et[0],er=et[1],ea=(0,o.useState)(""),es=ea[0],eo=ea[1],el=(0,o.useState)(""),ei=el[0],ec=el[1],eu=(0,o.useState)(""),ed=eu[0],eh=eu[1],em=(0,o.useState)(""),eb=em[0],ep=em[1],eg=(0,o.useState)(""),ex=eg[0],ef=eg[1],ev=(0,o.useState)(""),eS=ev[0],ek=ev[1],ew=(0,o.useState)(""),ej=ew[0],eN=ew[1],ey=(0,o.useState)(""),eC=ey[0],e_=ey[1],eB=(e=(0,r.Z)(function(){var e,t,r,s,o;return(0,a.__generator)(this,function(r){switch(r.label){case 0:if(!j||!x)return alert("Please select Blockchain and click 'Set Blockchain' button."),[2];return[4,n.e(225).then(n.bind(n,9225))];case 1:return t=(e=r.sent()).web3Accounts,[4,(0,e.web3Enable)("Showcase PSP34 Mint Sample")];case 2:if(0===r.sent().length)return[2];return[4,t()];case 3:return U(o=r.sent()),H||P(o[0].address),[2]}})}),function(){return e.apply(this,arguments)});function eA(){return(eA=(0,r.Z)(function(){var e,t,n,r,s;return(0,a.__generator)(this,function(a){switch(a.label){case 0:if(!j||!x||0==M.length)return alert("Please select Blockchain and click 'Set Blockchain' button and click 'Set Account' button."),[2];return e=3e10,t=new c.vM(z,u,D),n=M.filter(function(e){return e.address===H}),[4,t.tx.mint({gasLimit:e},{u64:J})];case 1:if(r=a.sent(),1!=M.length)return[3,3];return[4,(0,p.R0)(M[0].meta.source)];case 2:case 4:return s=a.sent(),[3,5];case 3:if(!(M.length>1))return[3,5];return[4,(0,p.R0)(n[0].meta.source)];case 5:return X(J),r.signAndSend(H,{signer:s.signer},function(e){var t=e.status;t.isInBlock?(console.log("Completed at block hash #".concat(t.asInBlock.toString())),eo("Completed at block hash #"+t.asInBlock.toString()),eZ()):t.isFinalized?(console.log("finalized"),eo("finalized"),eZ()):(console.log("Current status: ".concat(t.type)),eo("Current status: "+t.type.toString()))}).catch(function(e){console.log(":( transaction failed",e),eo(":( transaction failed: "+e.toString())}),[2]}})})).apply(this,arguments)}function eZ(){return eI.apply(this,arguments)}function eI(){return(eI=(0,r.Z)(function(){var e,n,r,s,o,l,i,h,m,b;return(0,a.__generator)(this,function(n){switch(n.label){case 0:if(!j||!x)return alert("Please select Blockchain and click 'Set Blockchain' button."),[2];return[4,new c.vM(z,u,D).query.tokenUri(D,{value:0,gasLimit:-1},{u64:J})];case 1:return s=(r=n.sent()).gasConsumed,o=r.result,l=r.output,er(JSON.stringify(o.toHuman())),console.log(s.toHuman().toString()),console.log(o),void 0!==(i=null===(e=null==l?void 0:l.toHuman())||void 0===e?void 0:e.toString())&&(ec(i),d.Z.get(i).then(function(e){eh(e.data.image.toString()),ep(e.data.image.toString()),ef(e.data.name.toString()),ek(e.data.description.toString())})),"Shiden"===A||"Shibuya"===A?(eN((null===(h=t.filter(function(e){return e.name===A})[0])||void 0===h?void 0:h.subscan_url)+D),e_("Show on Subscan ("+A+")")):e_(""),function(){eL.apply(this,arguments)}(),[2]}})})).apply(this,arguments)}function eL(){return(eL=(0,r.Z)(function(){var e,t,n,r,s;return(0,a.__generator)(this,function(t){switch(t.label){case 0:return[4,new c.vM(z,u,D).query.ownerOf(D,{value:0,gasLimit:-1},{u64:J})];case 1:return(n=t.sent()).gasConsumed,n.result,(s=null===(e=null==(r=n.output)?void 0:r.toHuman())||void 0===e?void 0:e.toString())?ee(s):ee("none"),[2]}})})).apply(this,arguments)}(0,o.useEffect)(function(){});var eT,eE=(eT=(0,r.Z)(function(){var e,n,r,s,o,c;return(0,a.__generator)(this,function(a){switch(a.label){case 0:if(s=null===(e=(r=t.filter(function(e){return e.name===C}))[0])||void 0===e?void 0:e.url,N(null===(n=r[0])||void 0===n?void 0:n.url),!j)return[2];return o=new l.U(s),[4,i.G.create({provider:o})];case 1:return[4,(c=a.sent()).rpc.chain.subscribeNewHeads(function(e){O(c),Z(C),f(e.number.toNumber()),k(e.hash.toString()),T(s),console.log(c.hasSubscriptions)})];case 2:return a.sent(),[2]}})}),function(){return eT.apply(this,arguments)});return(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)(h.Z,{}),(0,s.jsxs)("div",{className:"p-3 mt-2 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded",children:[(0,s.jsx)("div",{className:"mb-5 text-xl",children:"Select blockchain"}),(0,s.jsx)("button",{className:"bg-[#184e9b] hover:bg-[#1964cf] hover:duration-500 text-white rounded px-4 py-2",onClick:eE,children:"Set Blockchain"}),(0,s.jsxs)("select",{className:"p-3 m-3 mt-0 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){console.log(e.target.value),_(e.target.value)},children:[(0,s.jsx)("option",{value:"None",children:"-- select --"}),(0,s.jsx)("option",{value:"Shiden",children:"Shiden"}),(0,s.jsx)("option",{value:"Shibuya",children:"Shibuya"}),(0,s.jsx)("option",{value:"Local",children:"Local"}),(0,s.jsx)("option",{value:"Custom",children:"Custom"})]}),(0,s.jsxs)("div",{className:"p-2 m-2 mt-0",children:["Current Blockchain Name: ",A||"---"]}),(0,s.jsxs)("div",{className:"p-2 m-2 mt-0",children:["Current Blockchain URL: ",L||"---"]}),(0,s.jsxs)("div",{className:"p-1 m-1",children:["Block: ",x||"---"]}),(0,s.jsxs)("div",{className:"p-1 m-auto w-11/12 break-all",children:["Last block hash: ",S||"---"]})]}),(0,s.jsxs)("div",{className:"text-center p-2 pt-0 mt-5 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded",children:[(0,s.jsx)("button",{className:"bg-[#184e9b] hover:bg-[#1964cf] hover:duration-500 disabled:bg-stone-700 text-white rounded px-4 py-2",onClick:eB,children:"Set Account"}),(0,s.jsx)("select",{className:"p-3 m-3 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){console.log(e),P(e.target.value)},children:M.map(function(e){return(0,s.jsxs)("option",{value:e.address,children:["[",e.meta.name,"]"]},e.address)})})]}),(0,s.jsxs)("div",{className:"text-center p-2 pt-0 mt-5 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded",children:[(0,s.jsx)("button",{disabled:!D,className:"bg-[#184e9b] hover:bg-[#1964cf] hover:duration-500 disabled:bg-stone-700 text-white rounded px-4 py-2",onClick:function(){return eA.apply(this,arguments)},children:D?"Mint NFT":"Enter ContractAddress"}),(0,s.jsx)("input",{className:"p-2 m-2 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){return V(e.target.value)},placeholder:"ContractAddress"}),(0,s.jsx)("input",{className:"p-2 m-2 bg-[#020913] border-2 w-20 rounded",onChange:function(e){return K(e.target.value)},placeholder:"TokenID"})]}),(0,s.jsxs)("div",{className:"text-center p-2 mt-5 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded",children:[(0,s.jsx)("div",{className:"mb-3 text-xl",children:"NFT View"}),(0,s.jsx)("button",{disabled:!D||!J,className:"bg-[#184e9b] hover:bg-[#1964cf] hover:duration-500 disabled:bg-stone-700 text-white rounded px-4 py-2",onClick:eZ,children:D||J?"View NFT":"Enter Blank Form"}),(0,s.jsx)("input",{className:"p-2 m-2 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){return V(e.target.value)},placeholder:"ContractAddress"}),(0,s.jsx)("input",{className:"p-2 m-2 w-20 bg-[#020913] border-2 border-gray-300 rounded",onChange:function(e){return K(e.target.value)},placeholder:"TokenID"}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{className:"p-2 m-auto w-64",src:eb}),(0,s.jsx)("p",{className:"p-1 m-1 text-xl break-words",children:ex}),(0,s.jsx)("p",{className:"p-1 m-1 break-words",children:eS}),(0,s.jsx)("p",{className:D?"m-1 break-all":"hidden",children:(0,s.jsx)("a",{target:"_blank",rel:"noreferrer",href:ej,children:eC})})]})})]}),(0,s.jsxs)("div",{className:"text-left p-2 mt-5 m-auto max-w-6xl w-11/12 border-[#323943] bg-[#121923] border border-1 rounded",children:[(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["Status: ",es]}),(0,s.jsxs)("div",{className:"hidden p-3 m-3",children:["TokenURI: ",W]}),(0,s.jsxs)("p",{className:"p-1 m-1 hidden",children:["Result: ",en]}),(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["MetadataUri: ",ei]}),(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["ImageUri: ",ed]}),(0,s.jsxs)("p",{className:"p-1 m-1",children:["TokenId: ",J]}),(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["actingAddress: ",H]}),(0,s.jsxs)("p",{className:"p-1 m-1 break-all",children:["OwnerAddress: ",$]})]}),(0,s.jsx)(b.Z,{}),(0,s.jsx)(m.Z,{})]})};t.default=g}}]);