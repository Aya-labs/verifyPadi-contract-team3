import{_ as l,ae as w}from"./index-OE56k1X-.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index-OE56k1X-.js").then(d=>d.eu),__vite__mapDeps([0,1]))).default,s=new w(n,a,r,{},e.storage),o=await e.getSignerAddress(),i=e.address;return(await s.read("allowance",[o,i])).gte(t)}export{g as h};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-OE56k1X-.js","assets/index-Zpn9ZsWz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}