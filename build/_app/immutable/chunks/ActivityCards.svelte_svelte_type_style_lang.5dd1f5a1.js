import{w as l}from"./index.b551ee75.js";import{l as p}from"./ProgressBar.svelte_svelte_type_style_lang.552c7a5b.js";const v=l([]),h=l([]),w=l([]),d=l({}),g=l({}),b=p("history",{}),q=p("wantmusic",!1);let a={comma(s){return a.split(s,[","],!0)},space(s){let r=[" ",`
`,"	"];return a.split(s,r)},split(s,r,y){let f=[],t="",o=!1,i=0,c=!1,u="",n=!1;for(let e of s)n?n=!1:e==="\\"?n=!0:c?e===u&&(c=!1):e==='"'||e==="'"?(c=!0,u=e):e==="("?i+=1:e===")"?i>0&&(i-=1):i===0&&r.includes(e)&&(o=!0),o?(t!==""&&f.push(t.trim()),t="",o=!1):t+=e;return(y||t!=="")&&f.push(t.trim()),f}};a.default=a;export{v as a,d as b,b as h,w as q,g as s,h as t,q as w};
