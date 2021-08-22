var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,l=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&i(e,r,t[r]);if(n)for(var r of n(t))a.call(t,r)&&i(e,r,t[r]);return e},s=(e,n)=>t(e,r(n));import{s as c,r as m,R as d,W as u,a as p}from"./vendor.6c840ed1.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const g=c.main`
  color: white;
  background-image: radial-gradient(circle at top, #1e3757 20%, #131537 100%);

  .app-content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around
  }
`,f=m.exports.createContext({});function h({children:e}){const[t,r]=m.exports.useState(0);return d.createElement(f.Provider,{value:{score:t,setScore:r}},e)}const b=c.div`
  background-color: white;
  text-align: center;
  padding: 10px 0;
  border-radius: 8px;
  width: 5em;

  small {
    color: #2A45C2;
    text-transform: uppercase;
    font-size: .9em;
    font-weight: bolds;
  }
  p {
    color: #565468;
    font-size: 2.5em;
    font-weight: 700;
  }
`;function y(){const{score:e}=m.exports.useContext(f);return d.createElement(b,null,d.createElement("small",null,"Score"),d.createElement("p",null,e))}const w=c.div`
    border-radius: .5em;
    border: 3px solid rgba(255,255,255, .29);
    color: white;
    padding: 0.75em .75em .75em 1.4em;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.1em;
      font-weight: 700;
      line-height: 1;
      text-transform: uppercase;
    }
  `;function x(){return d.createElement(w,null,d.createElement("h1",null,"Rock",d.createElement("br",null),"Paper",d.createElement("br",null)," Scissors"),d.createElement(y,null))}const k=c.button`
  background-color: transparent;
  border-radius: 0.5em;
  border: 1px solid white;

  color: white;
  font-size: 1em;
  letter-spacing: .15em;
  
  cursor: pointer;
  min-width: 8em;
  padding: 0.7em;

  display: inline-flex;
  justify-content: center;

  &:hover{
    background-color: white;
    color: #1d1d1d;
  }
`,E=c(k)`
  background-color: white;
  color: #1d1d1d;
`;function v({children:e,onClick:t}){return d.createElement(k,{onClick:t},e)}const P=c.div`
  text-align: center;

  .rules-overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    background-color: white;
  }
  & h2 {
    color: #3b4262;
    font-weight: 700;
    letter-spacing: -2px;
    margin-bottom: 3em;
  }
  @media screen and (min-width: 1024px) {
    text-align: end;
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      display: ${({visible:e})=>e?"block":"none"};
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
    }
    .rules-overlay {
      border-radius: 8px;
      cursor: pointer;
      height: 70vh;
      margin: auto;
      width: 31.25em;
    }
  }
`;function C(){const[e,t]=m.exports.useState(!1),r=e=>t((e=>!e));return d.createElement(P,{visible:e},e&&d.createElement("div",{onClick:r,className:"rules-overlay"},d.createElement("h2",null,"RULES"),d.createElement("img",{src:"./src/images/image-rules.svg",alt:"Game Reles"})),d.createElement(v,{onClick:r},"RULES"))}const S=c.div`
  display: grid;
  grid-template-columns: 10em 10em;
  justify-content: center;
  justify-items: center;
  gap: 1em 2em;
  padding: 1em 0;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }

  .line {
    display: ${({playing:e})=>e?"none":"block"};
    height: .875em;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 12.5;
    top: 5em;
    &:before {
      content: "";
      height: .875em;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(60deg);
      transform-origin: left top;
    }

    &:after {
      content: "";
      height: .875em;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }

  .in-game {
    text-align: center;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1px;
    & p {
      margin: 1em 0;
    }
  }
  .results {
    text-align: center;
    & h2 {
      margin: 0.2em 0;
      font-size: 3.5em;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 15em 15em;
    gap: 1em 2em;

    .line {
      width: 18.75em;
      top: 6.25;
    }
  }
`,j="homePick",O="playing",N="results",A="userPick",$={[j]:(e,t)=>s(l({},e),{homePick:t.payload}),[O]:(e,t)=>s(l({},e),{playing:!e.playing}),[N]:(e,t)=>s(l({},e),{results:t.payload}),[A]:(e,t)=>s(l({},e),{userPick:t.payload})},z={homePick:"default",playing:!1,results:"",userPick:""},I=(e,t)=>{const r=$[t.type];return r?r(e,t):e},R=["paper","scissors","rock"],L=[{user:"paper",home:"paper",results:"draw"},{user:"paper",home:"rock",results:"win"},{user:"paper",home:"scissors",results:"lose"},{user:"rock",home:"paper",results:"lose"},{user:"rock",home:"rock",results:"draw"},{user:"rock",home:"scissors",results:"win"},{user:"scissors",home:"paper",results:"win"},{user:"scissors",home:"rock",results:"lose"},{user:"scissors",home:"scissors",results:"draw"}];function U(){const[e,t]=m.exports.useReducer(I,z),{homePick:r,playing:n,results:o,userPick:a}=e,{score:i,setScore:l}=m.exports.useContext(f);function s(){return new Promise(((e,r)=>{let n="";const o=window.setInterval((()=>{n=R[function({min:e=0,max:t=3}={}){return Math.floor(Math.random()*(t-e))+e}()],t({type:j,payload:n})}),75);window.setTimeout((()=>{window.clearInterval(o),e(n)}),2e3)}))}function c(){t({type:O}),t({type:N,payload:""})}return{handleTogglePlayingClick:c,homePick:r,onClickPlayGame:async e=>{c(),t({type:A,payload:e});const r=function({name:e,pick:t}){return L.find((r=>e===r.user&&t===r.home)).results||""}({name:e,pick:await s()});t({type:N,payload:r}),"win"===r&&l(i+1)},playing:n,results:o,userPick:a}}const G=u`
  to{
    box-shadow: 0 0 0 40px rgba(255, 255, 255, .04),0 0 0 80px rgba(255, 255, 255, .03), 0 0 0 120px rgba(255, 255, 255, .02);
    transform: rotateY(360deg) scale(1.1);
  }
`,M=c.div`
  background-color: ${({name:e})=>"default"===e?"#122343":"white"};
  border-radius: 50%;
  border: 0.9em solid ${({color:e})=>e.base};
  box-shadow: 0 5px 0 ${({color:e})=>e.border};
  cursor: pointer;
  display: flex;
  height: 7.8em;
  position: relative;
  width: 8.12em;
  z-index: 1;
  animation: 1s ${({isShadowAnimated:e})=>e?G:""}
    forwards;
  ${({isShadowAnimated:e})=>e&&"box-shadow: 0 0 0 0px rgba(255, 255, 255, .04),0 0 0 0px rgba(255, 255, 255, .03), 0 0 0 0px rgba(255, 255, 255, .02);"}
  
  &:active {
    transform: scale(0.9);
  }

  .box {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    border-radius: 50%;
    box-shadow: 0 -4px 0 ${({name:e})=>"default"===e?"transparent":"#bbc0d5"};
  }

  @media screen and (min-width: 768px) {
    width: 10em;
    height: 9.7em;
  }
`,T={paper:{base:"#516ef4",border:"#2543c3"},rock:{base:"#de3a5a",border:"#980e31"},scissors:{base:"#eca81e",border:"#c76c14"},default:{base:"transparent",border:"transparent"}};function Y({name:e="default",onClick:t,isShadowAnimated:r=!1}={}){return d.createElement(M,{onClick:()=>t(e),color:T[e],name:e,isShadowAnimated:r},d.createElement("div",{className:"box"},"default"!==e&&d.createElement("img",{src:`./src/images/icon-${e}.svg`,alt:""})))}function D(){const{handleTogglePlayingClick:e,homePick:t,onClickPlayGame:r,playing:n,results:o,userPick:a}=U();return d.createElement(S,{playing:n},d.createElement("span",{className:"line"}),n?d.createElement(d.Fragment,null,d.createElement("div",{className:"in-game"},d.createElement(Y,{name:a,isShadowAnimated:"win"===o}),d.createElement("p",null,"YOU PICKED")),d.createElement("div",{className:"in-game"},t&&d.createElement(Y,{name:t,isShadowAnimated:"lose"===o}),d.createElement("p",null,"HOUSE PICKED")),o&&d.createElement("div",{className:"results"},d.createElement("h2",null,"YOU ",o),d.createElement(E,{onClick:e},"TRY AGAIN"))):d.createElement(d.Fragment,null,d.createElement(Y,{name:"paper",onClick:r}),d.createElement(Y,{name:"scissors",onClick:r}),d.createElement(Y,{name:"rock",onClick:r})))}const K=c.div`
  max-width: 700px;
  margin: auto;
  padding: 0 1em;

`;function F({children:e}){return d.createElement(K,null,e)}function q(){return d.createElement(g,null,d.createElement(F,null,d.createElement("div",{className:"app-content"},d.createElement(h,null,d.createElement(x,null),d.createElement(D,null)),d.createElement(C,null))))}p.render(d.createElement(d.StrictMode,null,d.createElement(q,null)),document.getElementById("root"));
