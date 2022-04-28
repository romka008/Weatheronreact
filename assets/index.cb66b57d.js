var x=Object.defineProperty,D=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var g=(e,i,r)=>i in e?x(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,d=(e,i)=>{for(var r in i||(i={}))I.call(i,r)&&g(e,r,i[r]);if(w)for(var r of w(i))F.call(i,r)&&g(e,r,i[r]);return e},u=(e,i)=>D(e,E(i));import{u as y,a as p,j as t,b as o,r as m,N as h,R as O,c as f,d as P,e as Y,f as B,g as U,h as V,i as j,t as q,k as H,l as K,B as z,P as G}from"./vendor.d8af0260.js";const J=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerpolicy&&(n.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?n.credentials="include":c.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(c){if(c.ep)return;c.ep=!0;const n=r(c);fetch(c.href,n)}};J();const b="ADD-CITY",L="UPDATE-CITY",T="REMOVE-CITY";let Q={cities:[{id:1,city:"\u0411\u0430\u043A\u0443"},{id:2,city:"\u0411\u0435\u043B\u0433\u043E\u0440\u043E\u0434"},{id:3,city:"\u041C\u043E\u0441\u043A\u0432\u0430"},{id:4,city:"\u041A\u0443\u0440\u0441\u043A"},{id:5,city:"\u0412\u0430\u0440\u0448\u0430\u0432\u0430"},{id:6,city:"\u0412\u043E\u0440\u043E\u043D\u0435\u0436"},{id:7,city:"\u0411\u0435\u043B\u0433\u043E\u0440\u043E\u0434"}],newCurrentCity:""};const X=(e=Q,i)=>{switch(i.type){case b:return u(d({},e),{cities:[...e.cities,{id:e.cities.length+1,city:e.newCurrentCity}],newCurrentCity:""});case L:return u(d({},e),{newCurrentCity:i.newCity});case T:return u(d({},e),{cities:e.cities.filter(s=>s.id!==i.removeCity)});default:return e}},Z=()=>({type:b}),A=e=>({type:L,newCity:e}),ee=e=>({type:T,removeCity:e});function te({handleSetSearchCity:e}){const i=y(),r=p(c=>c.citiesList.newCurrentCity);return t("div",{children:o("form",{className:"form",onSubmit:e,children:[t("input",{className:"form-input",placeholder:"Search city",value:r,onChange:c=>{let n=c.target.value;console.log(n),i(A(n))}}),t("input",{type:"submit",className:"form-button"})]})})}function ie({actualDatas:e,addFavoriteCity:i}){const r=m.exports.createRef(),s=y();let c=()=>{let n=r.current.innerHTML;console.log(n),s(A(n)),s(Z()),i(n)};return o("div",{className:"information__current-city",children:[t("div",{className:"information__temperature",children:e.temperature}),t("img",{className:"information__cloud-svg",src:e.cloud,alt:""}),o("div",{className:"information__wrapper",children:[t("div",{className:"information__name-current-city",ref:r,children:e.city}),t("button",{className:"information__favorites-city",onClick:c})]})]})}function re({actualDatas:e}){return o("div",{children:[t("div",{className:"information__name-current-city up",children:e.city}),t("div",{className:"information__about",children:t("ul",{className:"information__details",children:o("div",{children:[o("li",{children:["Temperature: ",e.temperature]}),o("li",{children:["Feels like: ",e.feels]}),o("li",{children:["Weather: ",e.weather]}),o("li",{children:["Sunrise: ",e.sunrise]}),o("li",{children:["Sunset: ",e.sunset]})]})})})]})}function ne(){return o("div",{className:"information__forecast",children:[t("div",{className:"information__name-current-city up",children:"Aktobe"}),t("div",{className:"information__forecast-block"})]})}function ce(){return o("div",{className:"information__about",children:[t("div",{className:"item ",children:t(h,{to:"/",children:"Now"})}),t("div",{className:"item ",children:t(h,{to:"/details",children:"Details"})}),t("div",{className:"item ",children:t(h,{to:"/forecast",children:"Forecast"})})]})}function oe({data:e,actualDatas:i,addFavoriteCity:r}){return o("div",{className:"information",children:[o(O,{children:[t(f,{path:"/",element:t(ie,{actualDatas:i,addFavoriteCity:r})}),t(f,{path:"/details",element:t(re,{actualDatas:i})}),t(f,{path:"/forecast",element:t(ne,{})})]}),t(ce,{})]})}function se({handleShowCity:e}){const i=p(n=>n.citiesList.cities),r=y(),s=n=>{r(ee(n))};let c=i.map(n=>o("div",{className:"location__city",children:[t("li",{onClick:()=>e(n.city),children:n.city}),t("li",{onClick:()=>s(n.id),children:t(P,{})})]},n.id));return o("div",{className:"location",children:[t("div",{className:"location__add",children:t("div",{className:"addedLocation",children:"Added location:"})}),t("div",{className:"location__favorites",children:t("ul",{className:"information__list",children:c})})]})}var ae="/assets/cloud.16f910fe.svg";function S(e){const i=new Date(e*1e3);return i.getHours()+":"+i.getMinutes()}const le="https://api.openweathermap.org/data/2.5/weather",de="a278804ed34822e20087d1c2cd1be125";function ue(){const[e,i]=m.exports.useState(""),[r,s]=m.exports.useState(""),[c,n]=m.exports.useState([]),l=p(a=>a.citiesList.newCurrentCity),v=r?{temperature:Math.round(r.main.temp),cloud:`https://openweathermap.org/img/wn/${r.weather[0].icon}.png`,city:r.name,feels:Math.round(r.main.feels_like),weather:r.weather[0].main,sunrise:S(r.sys.sunrise),sunset:S(r.sys.sunset)}:d({},{temperature:"14\xB0",cloud:ae,city:"Aktobe"});async function C(a){const M=`${le}?q=${a}&appid=${de}&units=metric`;try{if(a){let N=await(await Y.get(M)).data;console.log(N),s(N),i("")}}catch(_){console.error(_)}}function $(a){a.preventDefault(),C(l)}function k(a){i(a),C(a)}function R(){n(new Set([v.city,...c])),console.log(c)}return t("div",{className:"wrapper",children:o("div",{className:"weather",children:[t(te,{handleSetSearchCity:$}),o("div",{className:"result",children:[t(oe,{actualDatas:v,addFavoriteCity:R}),t(se,{handleShowCity:k})]})]})})}let me=B({citiesList:X}),W=U(me,V(j(q)));window.store=W;H.render(t(K.StrictMode,{children:t(z,{children:t(G,{store:W,children:t(ue,{})})})}),document.getElementById("root"));