var l=Object.defineProperty;var d=(i,e,t)=>e in i?l(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var a=(i,e,t)=>(d(i,typeof e!="symbol"?e+"":e,t),t);import{ad as g,ae as C,af as y,am as f,ah as W,ai as w,aj as T,ak as s,al as S}from"./index-OE56k1X-.js";import{C as A,a as R,G as b,b as E}from"./contract-appuri-2a88c8fb.browser.esm-fIMgWqzA.js";import{C as O}from"./contract-interceptor-6f8989ff.browser.esm-amNiAGmN.js";import{C as B,a as F}from"./contract-owner-2ddff556.browser.esm-IGyDOlyK.js";import{C as M}from"./contract-platform-fee-36bf5ae3.browser.esm-zz_KoqVF.js";import{C as k}from"./contract-roles-fa8ea1ef.browser.esm-9UAi7f_C.js";import{C as v}from"./contract-sales-51bfc7b5.browser.esm-YC6lvZUN.js";import{E as I}from"./erc-1155-5ee23d62.browser.esm-87DEzDdv.js";import{S as N}from"./erc-1155-standard-218eac4b.browser.esm-81W8rMeP.js";import"./setErc20Allowance-f181219a.browser.esm-6VTEKsm9.js";import"./QueryParams-8a30379b.browser.esm-1nt61a3X.js";import"./index-AxwAvAF2.js";import"./assertEnabled-bf987093.browser.esm-P_KwqYUb.js";const o=class o extends N{constructor(t,r,n){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,c,h,n);super(u,n,m);a(this,"mint",s(async t=>this.erc1155.mint.prepare(t)));a(this,"mintTo",s(async(t,r)=>this.erc1155.mintTo.prepare(t,r)));a(this,"mintAdditionalSupply",s(async(t,r)=>this.erc1155.mintAdditionalSupply.prepare(t,r)));a(this,"mintAdditionalSupplyTo",s(async(t,r,n)=>this.erc1155.mintAdditionalSupplyTo.prepare(t,r,n)));a(this,"mintBatch",s(async t=>this.erc1155.mintBatch.prepare(t)));a(this,"mintBatchTo",s(async(t,r)=>this.erc1155.mintBatchTo.prepare(t,r)));a(this,"burn",s(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=y.parse(c||[]),this.metadata=new A(this.contractWrapper,f,this.storage),this.app=new R(this.contractWrapper,this.metadata,this.storage),this.roles=new k(this.contractWrapper,o.contractRoles),this.royalties=new B(this.contractWrapper,this.metadata),this.sales=new v(this.contractWrapper),this.encoder=new W(this.contractWrapper),this.estimator=new b(this.contractWrapper),this.events=new E(this.contractWrapper),this.platformFees=new M(this.contractWrapper),this.interceptor=new O(this.contractWrapper),this.signature=new I(this.contractWrapper,this.storage,this.roles),this.owner=new F(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[w("transfer"),T])}async getMintTransaction(t,r){return this.erc1155.getMintTransaction(t,r)}async prepare(t,r,n){return S.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}};a(o,"contractRoles",g);let p=o;export{p as Edition};