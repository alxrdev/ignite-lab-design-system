var z=Object.defineProperty;var u=(e,t)=>z(e,"name",{value:t,configurable:!0});import{_ as S,$ as W,a as L}from"./index.module.d78cb2e1.js";import{r as o}from"./index.d689b511.js";import{r as q}from"./index.f119c87c.js";import{j as b,F as k,a as F}from"./jsx-runtime.2c82c029.js";import{I as K,r as X}from"./IconBase.esm.b89be6ed.js";import{T as Y}from"./Text.1c5a01d0.js";import"./iframe.46a735ba.js";import"./clsx.m.256e9345.js";function H(e,t){const n=o.exports.createContext(t);function r(c){const{children:d,...l}=c,a=o.exports.useMemo(()=>l,Object.values(l));return o.exports.createElement(n.Provider,{value:a},d)}u(r,"Provider");function s(c){const d=o.exports.useContext(n);if(d)return d;if(t!==void 0)return t;throw new Error(`\`${c}\` must be used within \`${e}\``)}return u(s,"useContext"),r.displayName=e+"Provider",[r,s]}u(H,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function Z(e,t=[]){let n=[];function r(c,d){const l=o.exports.createContext(d),a=n.length;n=[...n,d];function i(f){const{scope:p,children:x,...m}=f,E=(p==null?void 0:p[e][a])||l,P=o.exports.useMemo(()=>m,Object.values(m));return o.exports.createElement(E.Provider,{value:P},x)}u(i,"Provider");function h(f,p){const x=(p==null?void 0:p[e][a])||l,m=o.exports.useContext(x);if(m)return m;if(d!==void 0)return d;throw new Error(`\`${f}\` must be used within \`${c}\``)}return u(h,"useContext"),i.displayName=c+"Provider",[i,h]}u(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=u(()=>{const c=n.map(d=>o.exports.createContext(d));return u(function(l){const a=(l==null?void 0:l[e])||c;return o.exports.useMemo(()=>({[`__scope${e}`]:{...l,[e]:a}}),[l,a])},"useScope")},"createScope");return s.scopeName=e,[r,G(s,...t)]}u(Z,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function G(...e){const t=e[0];if(e.length===1)return t;const n=u(()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return u(function(c){const d=r.reduce((l,{useScope:a,scopeName:i})=>{const f=a(c)[`__scope${i}`];return{...l,...f}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}u(G,"$c512c27ab02ef895$var$composeContextScopes");function w(e,t,{checkForDefaultPrevented:n=!0}={}){return u(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}u(w,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function M(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}u(M,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function J({prop:e,defaultProp:t,onChange:n=u(()=>{},"onChange")}){const[r,s]=Q({defaultProp:t,onChange:n}),c=e!==void 0,d=c?e:r,l=M(n),a=o.exports.useCallback(i=>{if(c){const f=typeof i=="function"?i(e):i;f!==e&&l(f)}else s(i)},[c,e,s,l]);return[d,a]}u(J,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Q({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,s=o.exports.useRef(r),c=M(t);return o.exports.useEffect(()=>{s.current!==r&&(c(r),s.current=r)},[r,s,c]),n}u(Q,"$71cd76cc60e0454e$var$useUncontrolledState");function V(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}u(V,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const A=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function ee(e){const[t,n]=o.exports.useState(void 0);return A(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let d,l;if("borderBoxSize"in c){const a=c.borderBoxSize,i=Array.isArray(a)?a[0]:a;d=i.inlineSize,l=i.blockSize}else d=e.offsetWidth,l=e.offsetHeight;n({width:d,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}u(ee,"$db6c3485150b8e66$export$1ab7ae714698c4b8");const te=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],T=te.reduce((e,t)=>{const n=o.exports.forwardRef((r,s)=>{const{asChild:c,...d}=r,l=c?W:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(l,S({},d,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),ne="Label",[Pe,oe]=H(ne,{id:void 0,controlRef:{current:null}}),re=u(e=>{const t=oe("LabelConsumer"),{controlRef:n}=t;return o.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function se(e,t){return o.exports.useReducer((n,r)=>{const s=t[n][r];return s!=null?s:n},e)}u(se,"$fe963b355347cc68$export$3e6543de14f8614f");const I=u(e=>{const{present:t,children:n}=e,r=ce(t),s=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),c=L(r.ref,s.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");I.displayName="Presence";function ce(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),s=o.exports.useRef(e),c=o.exports.useRef("none"),d=e?"mounted":"unmounted",[l,a]=se(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const i=g(r.current);c.current=l==="mounted"?i:"none"},[l]),A(()=>{const i=r.current,h=s.current;if(h!==e){const p=c.current,x=g(i);e?a("MOUNT"):x==="none"||(i==null?void 0:i.display)==="none"?a("UNMOUNT"):a(h&&p!==x?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,a]),A(()=>{if(t){const i=u(f=>{const x=g(r.current).includes(f.animationName);f.target===t&&x&&q.exports.flushSync(()=>a("ANIMATION_END"))},"handleAnimationEnd"),h=u(f=>{f.target===t&&(c.current=g(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:o.exports.useCallback(i=>{i&&(r.current=getComputedStyle(i)),n(i)},[])}}u(ce,"$921a889cee6df7e8$var$usePresence");function g(e){return(e==null?void 0:e.animationName)||"none"}u(g,"$921a889cee6df7e8$var$getAnimationName");const B="Checkbox",[ae,_e]=Z(B),[ie,ue]=ae(B),de=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":r,name:s,checked:c,defaultChecked:d,required:l,disabled:a,value:i="on",onCheckedChange:h,...f}=e,[p,x]=o.exports.useState(null),m=L(t,$=>x($)),E=re(p),P=r||E,_=o.exports.useRef(!1),O=p?Boolean(p.closest("form")):!0,[y=!1,j]=J({prop:c,defaultProp:d,onChange:h});return o.exports.createElement(ie,{scope:n,state:y,disabled:a},o.exports.createElement(T.button,S({type:"button",role:"checkbox","aria-checked":v(y)?"mixed":y,"aria-labelledby":P,"aria-required":l,"data-state":D(y),"data-disabled":a?"":void 0,disabled:a,value:i},f,{ref:m,onKeyDown:w(e.onKeyDown,$=>{$.key==="Enter"&&$.preventDefault()}),onClick:w(e.onClick,$=>{j(R=>v(R)?!0:!R),O&&(_.current=$.isPropagationStopped(),_.current||$.stopPropagation())})})),O&&o.exports.createElement(pe,{control:p,bubbles:!_.current,name:s,value:i,checked:y,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),le="CheckboxIndicator",fe=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...s}=e,c=ue(le,n);return o.exports.createElement(I,{present:r||v(c.state)||c.state===!0},o.exports.createElement(T.span,S({"data-state":D(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),pe=u(e=>{const{control:t,checked:n,bubbles:r=!0,...s}=e,c=o.exports.useRef(null),d=V(n),l=ee(t);return o.exports.useEffect(()=>{const a=c.current,i=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(i,"checked").set;if(d!==n&&f){const p=new Event("click",{bubbles:r});a.indeterminate=v(n),f.call(a,v(n)?!1:n),a.dispatchEvent(p)}},[d,n,r]),o.exports.createElement("input",S({type:"checkbox","aria-hidden":!0,defaultChecked:v(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function v(e){return e==="indeterminate"}u(v,"$e698a72e93240346$var$isIndeterminate");function D(e){return v(e)?"indeterminate":e?"checked":"unchecked"}u(D,"$e698a72e93240346$var$getState");const be=de,he=fe;var C=new Map;C.set("bold",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return b(k,{children:b("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var xe=u(function(t,n){return X(t,n,C)},"renderPath"),U=o.exports.forwardRef(function(e,t){return b(K,{...Object.assign({ref:t},e,{renderPath:xe})})});U.displayName="Check";const me=U;function N(e){return b(be,{...e,className:"w-6 h-6 p-[2px] bg-gray-800 rounded",children:b(he,{asChild:!0,children:b(me,{weight:"bold",className:"h-5 w-5 text-cyan-300"})})})}u(N,"Checkbox");try{N.displayName="Checkbox",N.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:N.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch{}const Ae={title:"Components/Checkbox",component:N,args:{},argTypes:{},decorators:[e=>F("div",{className:"flex items-center gap-2",children:[e(),b(Y,{size:"sm",children:"Lembrar de mim por 30 dias"})]})]},Oe={},Re=["Default"];export{Oe as Default,Re as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Checkbox.stories.aeb44487.js.map
