var W=Object.defineProperty;var a=(e,t)=>W(e,"name",{value:t,configurable:!0});import{r}from"./index.c6a25903.js";import{$ as F,a as L}from"./index.module.9e3a94aa.js";import{r as K}from"./index.b420f1a1.js";import{j as b,F as k,a as q}from"./jsx-runtime.d4b59990.js";import{I as X,r as Y}from"./IconBase.esm.25d24b36.js";import{T as H}from"./Text.cb9ed43b.js";import"./iframe.6f764cb8.js";import"./clsx.m.256e9345.js";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y.apply(this,arguments)}a(y,"_extends$1");function Z(e,t){const n=r.exports.createContext(t);function o(c){const{children:d,...l}=c,i=r.exports.useMemo(()=>l,Object.values(l));return r.exports.createElement(n.Provider,{value:i},d)}a(o,"Provider");function s(c){const d=r.exports.useContext(n);if(d)return d;if(t!==void 0)return t;throw new Error(`\`${c}\` must be used within \`${e}\``)}return a(s,"useContext"),o.displayName=e+"Provider",[o,s]}a(Z,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function G(e,t=[]){let n=[];function o(c,d){const l=r.exports.createContext(d),i=n.length;n=[...n,d];function u(f){const{scope:p,children:x,...m}=f,S=(p==null?void 0:p[e][i])||l,E=r.exports.useMemo(()=>m,Object.values(m));return r.exports.createElement(S.Provider,{value:E},x)}a(u,"Provider");function h(f,p){const x=(p==null?void 0:p[e][i])||l,m=r.exports.useContext(x);if(m)return m;if(d!==void 0)return d;throw new Error(`\`${f}\` must be used within \`${c}\``)}return a(h,"useContext"),u.displayName=c+"Provider",[u,h]}a(o,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=a(()=>{const c=n.map(d=>r.exports.createContext(d));return a(function(l){const i=(l==null?void 0:l[e])||c;return r.exports.useMemo(()=>({[`__scope${e}`]:{...l,[e]:i}}),[l,i])},"useScope")},"createScope");return s.scopeName=e,[o,J(s,...t)]}a(G,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function J(...e){const t=e[0];if(e.length===1)return t;const n=a(()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return a(function(c){const d=o.reduce((l,{useScope:i,scopeName:u})=>{const f=i(c)[`__scope${u}`];return{...l,...f}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}a(J,"$c512c27ab02ef895$var$composeContextScopes");function M(e,t,{checkForDefaultPrevented:n=!0}={}){return a(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}a(M,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function T(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}a(T,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function Q({prop:e,defaultProp:t,onChange:n=a(()=>{},"onChange")}){const[o,s]=V({defaultProp:t,onChange:n}),c=e!==void 0,d=c?e:o,l=T(n),i=r.exports.useCallback(u=>{if(c){const f=typeof u=="function"?u(e):u;f!==e&&l(f)}else s(u)},[c,e,s,l]);return[d,i]}a(Q,"$71cd76cc60e0454e$export$6f32135080cb4c3");function V({defaultProp:e,onChange:t}){const n=r.exports.useState(e),[o]=n,s=r.exports.useRef(o),c=T(t);return r.exports.useEffect(()=>{s.current!==o&&(c(o),s.current=o)},[o,s,c]),n}a(V,"$71cd76cc60e0454e$var$useUncontrolledState");function ee(e){const t=r.exports.useRef({value:e,previous:e});return r.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}a(ee,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const O=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{};function te(e){const[t,n]=r.exports.useState(void 0);return O(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let d,l;if("borderBoxSize"in c){const i=c.borderBoxSize,u=Array.isArray(i)?i[0]:i;d=u.inlineSize,l=u.blockSize}else d=e.offsetWidth,l=e.offsetHeight;n({width:d,height:l})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}a(te,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},A.apply(this,arguments)}a(A,"_extends");const ne=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],I=ne.reduce((e,t)=>{const n=r.exports.forwardRef((o,s)=>{const{asChild:c,...d}=o,l=c?F:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(l,A({},d,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),oe="Label",[_e,re]=Z(oe,{id:void 0,controlRef:{current:null}}),se=a(e=>{const t=re("LabelConsumer"),{controlRef:n}=t;return r.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function ce(e,t){return r.exports.useReducer((n,o)=>{const s=t[n][o];return s!=null?s:n},e)}a(ce,"$fe963b355347cc68$export$3e6543de14f8614f");const j=a(e=>{const{present:t,children:n}=e,o=ae(t),s=typeof n=="function"?n({present:o.isPresent}):r.exports.Children.only(n),c=L(o.ref,s.ref);return typeof n=="function"||o.isPresent?r.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");j.displayName="Presence";function ae(e){const[t,n]=r.exports.useState(),o=r.exports.useRef({}),s=r.exports.useRef(e),c=r.exports.useRef("none"),d=e?"mounted":"unmounted",[l,i]=ce(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.exports.useEffect(()=>{const u=N(o.current);c.current=l==="mounted"?u:"none"},[l]),O(()=>{const u=o.current,h=s.current;if(h!==e){const p=c.current,x=N(u);e?i("MOUNT"):x==="none"||(u==null?void 0:u.display)==="none"?i("UNMOUNT"):i(h&&p!==x?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,i]),O(()=>{if(t){const u=a(f=>{const x=N(o.current).includes(f.animationName);f.target===t&&x&&K.exports.flushSync(()=>i("ANIMATION_END"))},"handleAnimationEnd"),h=a(f=>{f.target===t&&(c.current=N(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:r.exports.useCallback(u=>{u&&(o.current=getComputedStyle(u)),n(u)},[])}}a(ae,"$921a889cee6df7e8$var$usePresence");function N(e){return(e==null?void 0:e.animationName)||"none"}a(N,"$921a889cee6df7e8$var$getAnimationName");const z="Checkbox",[ie,Oe]=G(z),[ue,de]=ie(z),le=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":o,name:s,checked:c,defaultChecked:d,required:l,disabled:i,value:u="on",onCheckedChange:h,...f}=e,[p,x]=r.exports.useState(null),m=L(t,$=>x($)),S=se(p),E=o||S,_=r.exports.useRef(!1),R=p?Boolean(p.closest("form")):!0,[g=!1,U]=Q({prop:c,defaultProp:d,onChange:h});return r.exports.createElement(ue,{scope:n,state:g,disabled:i},r.exports.createElement(I.button,y({type:"button",role:"checkbox","aria-checked":v(g)?"mixed":g,"aria-labelledby":E,"aria-required":l,"data-state":B(g),"data-disabled":i?"":void 0,disabled:i,value:u},f,{ref:m,onKeyDown:M(e.onKeyDown,$=>{$.key==="Enter"&&$.preventDefault()}),onClick:M(e.onClick,$=>{U(w=>v(w)?!0:!w),R&&(_.current=$.isPropagationStopped(),_.current||$.stopPropagation())})})),R&&r.exports.createElement(be,{control:p,bubbles:!_.current,name:s,value:u,checked:g,required:l,disabled:i,style:{transform:"translateX(-100%)"}}))}),fe="CheckboxIndicator",pe=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...s}=e,c=de(fe,n);return r.exports.createElement(j,{present:o||v(c.state)||c.state===!0},r.exports.createElement(I.span,y({"data-state":B(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),be=a(e=>{const{control:t,checked:n,bubbles:o=!0,...s}=e,c=r.exports.useRef(null),d=ee(n),l=te(t);return r.exports.useEffect(()=>{const i=c.current,u=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(u,"checked").set;if(d!==n&&f){const p=new Event("click",{bubbles:o});i.indeterminate=v(n),f.call(i,v(n)?!1:n),i.dispatchEvent(p)}},[d,n,o]),r.exports.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:v(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function v(e){return e==="indeterminate"}a(v,"$e698a72e93240346$var$isIndeterminate");function B(e){return v(e)?"indeterminate":e?"checked":"unchecked"}a(B,"$e698a72e93240346$var$getState");const he=le,xe=pe;var C=new Map;C.set("bold",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return b(k,{children:b("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var me=a(function(t,n){return Y(t,n,C)},"renderPath"),D=r.exports.forwardRef(function(e,t){return b(X,{...Object.assign({ref:t},e,{renderPath:me})})});D.displayName="Check";const $e=D;function P({}){return b(he,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",children:b(xe,{asChild:!0,children:b($e,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}a(P,"Checkbox");try{P.displayName="Checkbox",P.__docgenInfo={description:"",displayName:"Checkbox",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:P.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch{}const Ae={title:"Components/Checkbox",component:P,args:{children:"Create account",size:"md"},argTypes:{},decorators:[e=>q("div",{className:"flex items-center gap-2",children:[e(),b(H,{size:"sm",children:"Me lembrar por 30 dias"})]})]},Re={},we=["Default"];export{Re as Default,we as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Checkbox.stories.28151bc9.js.map
