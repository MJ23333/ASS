import{S as Et,i as Tt,s as Lt,C as St,D as Pt,E as Dt,F as kt,g as Ft,d as _t}from"../chunks/index.39b96417.js";import{s as Nt}from"../chunks/popup.7096bba0.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.552c7a5b.js";const H=Math.min,M=Math.max,Q=Math.round,J=Math.floor,_=t=>({x:t,y:t}),Bt={left:"right",right:"left",bottom:"top",top:"bottom"},Mt={start:"end",end:"start"};function it(t,e,o){return M(t,H(e,o))}function U(t,e){return typeof t=="function"?t(e):t}function V(t){return t.split("-")[0]}function K(t){return t.split("-")[1]}function pt(t){return t==="x"?"y":"x"}function rt(t){return t==="y"?"height":"width"}function et(t){return["top","bottom"].includes(V(t))?"y":"x"}function ct(t){return pt(et(t))}function Vt(t,e,o){o===void 0&&(o=!1);const n=K(t),i=ct(t),s=rt(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=Z(r)),[r,Z(r)]}function Wt(t){const e=Z(t);return[st(t),e,st(e)]}function st(t){return t.replace(/start|end/g,e=>Mt[e])}function $t(t,e,o){const n=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?s:r;default:return[]}}function Ht(t,e,o,n){const i=K(t);let s=$t(V(t),o==="start",n);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(st)))),s}function Z(t){return t.replace(/left|right|bottom|top/g,e=>Bt[e])}function zt(t){return{top:0,right:0,bottom:0,left:0,...t}}function ht(t){return typeof t!="number"?zt(t):{top:t,right:t,bottom:t,left:t}}function tt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ut(t,e,o){let{reference:n,floating:i}=t;const s=et(e),r=ct(e),c=rt(r),l=V(e),f=s==="y",m=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,p=n[c]/2-i[c]/2;let a;switch(l){case"top":a={x:m,y:n.y-i.height};break;case"bottom":a={x:m,y:n.y+n.height};break;case"right":a={x:n.x+n.width,y:d};break;case"left":a={x:n.x-i.width,y:d};break;default:a={x:n.x,y:n.y}}switch(K(e)){case"start":a[r]-=p*(o&&f?-1:1);break;case"end":a[r]+=p*(o&&f?-1:1);break}return a}const It=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:r}=o,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let f=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:d}=ut(f,n,l),p=n,a={},u=0;for(let h=0;h<c.length;h++){const{name:w,fn:g}=c[h],{x,y,data:b,reset:v}=await g({x:m,y:d,initialPlacement:n,placement:p,strategy:i,middlewareData:a,rects:f,platform:r,elements:{reference:t,floating:e}});if(m=x??m,d=y??d,a={...a,[w]:{...a[w],...b}},v&&u<=50){u++,typeof v=="object"&&(v.placement&&(p=v.placement),v.rects&&(f=v.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:m,y:d}=ut(f,p,l)),h=-1;continue}}return{x:m,y:d,placement:p,strategy:i,middlewareData:a}};async function wt(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:d="floating",altBoundary:p=!1,padding:a=0}=U(e,t),u=ht(a),w=c[p?d==="floating"?"reference":"floating":d],g=tt(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(w)))==null||o?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:f,rootBoundary:m,strategy:l})),x=d==="floating"?{...r.floating,x:n,y:i}:r.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(y))?await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1}:{x:1,y:1},v=tt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:y,strategy:l}):x);return{top:(g.top-v.top+u.top)/b.y,bottom:(v.bottom-g.bottom+u.bottom)/b.y,left:(g.left-v.left+u.left)/b.x,right:(v.right-g.right+u.right)/b.x}}const jt=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:s,platform:r,elements:c,middlewareData:l}=e,{element:f,padding:m=0}=U(t,e)||{};if(f==null)return{};const d=ht(m),p={x:o,y:n},a=ct(i),u=rt(a),h=await r.getDimensions(f),w=a==="y",g=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=s.reference[u]+s.reference[a]-p[a]-s.floating[u],v=p[a]-s.reference[a],E=await(r.getOffsetParent==null?void 0:r.getOffsetParent(f));let T=E?E[y]:0;(!T||!await(r.isElement==null?void 0:r.isElement(E)))&&(T=c.floating[y]||s.floating[u]);const B=b/2-v/2,I=T/2-h[u]/2-1,j=H(d[g],I),X=H(d[x],I),C=j,Y=T-h[u]-X,A=T/2-h[u]/2+B,L=it(C,A,Y),S=!l.arrow&&K(i)!=null&&A!=L&&s.reference[u]/2-(A<C?j:X)-h[u]/2<0,D=S?A<C?A-C:A-Y:0;return{[a]:p[a]+D,data:{[a]:L,centerOffset:A-L-D,...S&&{alignmentOffset:D}},reset:S}}}),Xt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:m=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:h=!0,...w}=U(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const g=V(i),x=V(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(f.floating)),b=p||(x||!h?[Z(c)]:Wt(c));!p&&u!=="none"&&b.push(...Ht(c,h,u,y));const v=[c,...b],E=await wt(e,w),T=[];let B=((n=s.flip)==null?void 0:n.overflows)||[];if(m&&T.push(E[g]),d){const C=Vt(i,r,y);T.push(E[C[0]],E[C[1]])}if(B=[...B,{placement:i,overflows:T}],!T.every(C=>C<=0)){var I,j;const C=(((I=s.flip)==null?void 0:I.index)||0)+1,Y=v[C];if(Y)return{data:{index:C,overflows:B},reset:{placement:Y}};let A=(j=B.filter(L=>L.overflows[0]<=0).sort((L,S)=>L.overflows[1]-S.overflows[1])[0])==null?void 0:j.placement;if(!A)switch(a){case"bestFit":{var X;const L=(X=B.map(S=>[S.placement,S.overflows.filter(D=>D>0).reduce((D,Ot)=>D+Ot,0)]).sort((S,D)=>S[1]-D[1])[0])==null?void 0:X[0];L&&(A=L);break}case"initialPlacement":A=c;break}if(i!==A)return{reset:{placement:A}}}return{}}}};async function Yt(t,e){const{placement:o,platform:n,elements:i}=t,s=await(n.isRTL==null?void 0:n.isRTL(i.floating)),r=V(o),c=K(o),l=et(o)==="y",f=["left","top"].includes(r)?-1:1,m=s&&l?-1:1,d=U(e,t);let{mainAxis:p,crossAxis:a,alignmentAxis:u}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&typeof u=="number"&&(a=c==="end"?u*-1:u),l?{x:a*m,y:p*f}:{x:p*f,y:a*m}}const qt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:n}=e,i=await Yt(e,t);return{x:o+i.x,y:n+i.y,data:i}}}},Ut=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:g,y:x}=w;return{x:g,y:x}}},...l}=U(t,e),f={x:o,y:n},m=await wt(e,l),d=et(V(i)),p=pt(d);let a=f[p],u=f[d];if(s){const w=p==="y"?"top":"left",g=p==="y"?"bottom":"right",x=a+m[w],y=a-m[g];a=it(x,a,y)}if(r){const w=d==="y"?"top":"left",g=d==="y"?"bottom":"right",x=u+m[w],y=u-m[g];u=it(x,u,y)}const h=c.fn({...e,[p]:a,[d]:u});return{...h,data:{x:h.x-o,y:h.y-n}}}}};function N(t){return xt(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function F(t){var e;return(e=(xt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function xt(t){return t instanceof Node||t instanceof R(t).Node}function k(t){return t instanceof Element||t instanceof R(t).Element}function P(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function dt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function G(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=O(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function Kt(t){return["table","td","th"].includes(N(t))}function lt(t){const e=ft(),o=O(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Gt(t){let e=z(t);for(;P(e)&&!nt(e);){if(lt(e))return e;e=z(e)}return null}function ft(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes(N(t))}function O(t){return R(t).getComputedStyle(t)}function ot(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function z(t){if(N(t)==="html")return t;const e=t.assignedSlot||t.parentNode||dt(t)&&t.host||F(t);return dt(e)?e.host:e}function yt(t){const e=z(t);return nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:P(e)&&G(e)?e:yt(e)}function q(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=yt(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),r=R(i);return s?e.concat(r,r.visualViewport||[],G(i)?i:[],r.frameElement&&o?q(r.frameElement):[]):e.concat(i,q(i,[],o))}function vt(t){const e=O(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=P(t),s=i?t.offsetWidth:o,r=i?t.offsetHeight:n,c=Q(o)!==s||Q(n)!==r;return c&&(o=s,n=r),{width:o,height:n,$:c}}function at(t){return k(t)?t:t.contextElement}function $(t){const e=at(t);if(!P(e))return _(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:s}=vt(e);let r=(s?Q(o.width):o.width)/n,c=(s?Q(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const Jt=_(0);function bt(t){const e=R(t);return!ft()||!e.visualViewport?Jt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Qt(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==R(t)?!1:e}function W(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),s=at(t);let r=_(1);e&&(n?k(n)&&(r=$(n)):r=$(t));const c=Qt(s,o,n)?bt(s):_(0);let l=(i.left+c.x)/r.x,f=(i.top+c.y)/r.y,m=i.width/r.x,d=i.height/r.y;if(s){const p=R(s),a=n&&k(n)?R(n):n;let u=p.frameElement;for(;u&&n&&a!==p;){const h=$(u),w=u.getBoundingClientRect(),g=O(u),x=w.left+(u.clientLeft+parseFloat(g.paddingLeft))*h.x,y=w.top+(u.clientTop+parseFloat(g.paddingTop))*h.y;l*=h.x,f*=h.y,m*=h.x,d*=h.y,l+=x,f+=y,u=R(u).frameElement}}return tt({width:m,height:d,x:l,y:f})}function Zt(t){let{rect:e,offsetParent:o,strategy:n}=t;const i=P(o),s=F(o);if(o===s)return e;let r={scrollLeft:0,scrollTop:0},c=_(1);const l=_(0);if((i||!i&&n!=="fixed")&&((N(o)!=="body"||G(s))&&(r=ot(o)),P(o))){const f=W(o);c=$(o),l.x=f.x+o.clientLeft,l.y=f.y+o.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-r.scrollLeft*c.x+l.x,y:e.y*c.y-r.scrollTop*c.y+l.y}}function te(t){return Array.from(t.getClientRects())}function At(t){return W(F(t)).left+ot(t).scrollLeft}function ee(t){const e=F(t),o=ot(t),n=t.ownerDocument.body,i=M(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=M(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+At(t);const c=-o.scrollTop;return O(n).direction==="rtl"&&(r+=M(e.clientWidth,n.clientWidth)-i),{width:i,height:s,x:r,y:c}}function ne(t,e){const o=R(t),n=F(t),i=o.visualViewport;let s=n.clientWidth,r=n.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const f=ft();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function oe(t,e){const o=W(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,s=P(t)?$(t):_(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,f=n*s.y;return{width:r,height:c,x:l,y:f}}function mt(t,e,o){let n;if(e==="viewport")n=ne(t,o);else if(e==="document")n=ee(F(t));else if(k(e))n=oe(e,o);else{const i=bt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return tt(n)}function Rt(t,e){const o=z(t);return o===e||!k(o)||nt(o)?!1:O(o).position==="fixed"||Rt(o,e)}function ie(t,e){const o=e.get(t);if(o)return o;let n=q(t,[],!1).filter(c=>k(c)&&N(c)!=="body"),i=null;const s=O(t).position==="fixed";let r=s?z(t):t;for(;k(r)&&!nt(r);){const c=O(r),l=lt(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||G(r)&&!l&&Rt(t,r))?n=n.filter(m=>m!==r):i=c,r=z(r)}return e.set(t,n),n}function se(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const r=[...o==="clippingAncestors"?ie(e,this._c):[].concat(o),n],c=r[0],l=r.reduce((f,m)=>{const d=mt(e,m,i);return f.top=M(d.top,f.top),f.right=H(d.right,f.right),f.bottom=H(d.bottom,f.bottom),f.left=M(d.left,f.left),f},mt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function re(t){return vt(t)}function ce(t,e,o){const n=P(e),i=F(e),s=o==="fixed",r=W(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=_(0);if(n||!n&&!s)if((N(e)!=="body"||G(i))&&(c=ot(e)),n){const f=W(e,!0,s,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else i&&(l.x=At(i));return{x:r.left+c.scrollLeft-l.x,y:r.top+c.scrollTop-l.y,width:r.width,height:r.height}}function gt(t,e){return!P(t)||O(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ct(t,e){const o=R(t);if(!P(t))return o;let n=gt(t,e);for(;n&&Kt(n)&&O(n).position==="static";)n=gt(n,e);return n&&(N(n)==="html"||N(n)==="body"&&O(n).position==="static"&&!lt(n))?o:n||Gt(t)||o}const le=async function(t){let{reference:e,floating:o,strategy:n}=t;const i=this.getOffsetParent||Ct,s=this.getDimensions;return{reference:ce(e,await i(o),n),floating:{x:0,y:0,...await s(o)}}};function fe(t){return O(t).direction==="rtl"}const ae={convertOffsetParentRelativeRectToViewportRelativeRect:Zt,getDocumentElement:F,getClippingRect:se,getOffsetParent:Ct,getElementRects:le,getClientRects:te,getDimensions:re,getScale:$,isElement:k,isRTL:fe};function ue(t,e){let o=null,n;const i=F(t);function s(){clearTimeout(n),o&&o.disconnect(),o=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:f,top:m,width:d,height:p}=t.getBoundingClientRect();if(c||e(),!d||!p)return;const a=J(m),u=J(i.clientWidth-(f+d)),h=J(i.clientHeight-(m+p)),w=J(f),x={rootMargin:-a+"px "+-u+"px "+-h+"px "+-w+"px",threshold:M(0,H(1,l))||1};let y=!0;function b(v){const E=v[0].intersectionRatio;if(E!==l){if(!y)return r();E?r(!1,E):n=setTimeout(()=>{r(!1,1e-7)},100)}y=!1}try{o=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(b,x)}o.observe(t)}return r(!0),s}function de(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,f=at(t),m=i||s?[...f?q(f):[],...q(e)]:[];m.forEach(g=>{i&&g.addEventListener("scroll",o,{passive:!0}),s&&g.addEventListener("resize",o)});const d=f&&c?ue(f,o):null;let p=-1,a=null;r&&(a=new ResizeObserver(g=>{let[x]=g;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{a&&a.observe(e)})),o()}),f&&!l&&a.observe(f),a.observe(e));let u,h=l?W(t):null;l&&w();function w(){const g=W(t);h&&(g.x!==h.x||g.y!==h.y||g.width!==h.width||g.height!==h.height)&&o(),h=g,u=requestAnimationFrame(w)}return o(),()=>{m.forEach(g=>{i&&g.removeEventListener("scroll",o),s&&g.removeEventListener("resize",o)}),d&&d(),a&&a.disconnect(),a=null,l&&cancelAnimationFrame(u)}}const me=(t,e,o)=>{const n=new Map,i={platform:ae,...o},s={...i.platform,_c:n};return It(t,e,{...i,platform:s})};function ge(t){let e;const o=t[1].default,n=St(o,t,t[0],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&1)&&Pt(n,o,i,i[0],e?kt(o,i[0],s,null):Dt(i[0]),null)},i(i){e||(Ft(n,i),e=!0)},o(i){_t(n,i),e=!1},d(i){n&&n.d(i)}}}function pe(t,e,o){let{$$slots:n={},$$scope:i}=e;return Nt.set({computePosition:me,autoUpdate:de,offset:qt,shift:Ut,flip:Xt,arrow:jt}),t.$$set=s=>{"$$scope"in s&&o(0,i=s.$$scope)},[i,n]}class ye extends Et{constructor(e){super(),Tt(this,e,pe,ge,Lt,{})}}export{ye as component};