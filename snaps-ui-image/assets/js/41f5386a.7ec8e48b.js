"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[368],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(a),m=r,c=k["".concat(i,".").concat(m)]||k[m]||d[m]||s;return a?n.createElement(c,l(l({ref:t},u),{},{components:a})):n.createElement(c,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[k]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={description:"Install MetaMask Flask to start building your own Snaps.",sidebar_position:1},l="Install MetaMask Flask",o={unversionedId:"get-started/install-flask",id:"get-started/install-flask",title:"Install MetaMask Flask",description:"Install MetaMask Flask to start building your own Snaps.",source:"@site/snaps/get-started/install-flask.md",sourceDirName:"get-started",slug:"/get-started/install-flask",permalink:"/snaps-ui-image/snaps/get-started/install-flask",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/get-started/install-flask.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Install MetaMask Flask to start building your own Snaps.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Get started",permalink:"/snaps-ui-image/snaps/get-started"},next:{title:"Snaps quickstart",permalink:"/snaps-ui-image/snaps/get-started/quickstart"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the MetaMask Flask browser extension",id:"install-the-metamask-flask-browser-extension",level:2}],u={toc:p},k="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-metamask-flask"},"Install MetaMask Flask"),(0,r.kt)("p",null,"To get started building your own Snaps, you must ",(0,r.kt)("a",{parentName:"p",href:"#install-the-metamask-flask-browser-extension"},"install the MetaMask Flask browser extension"),"."),(0,r.kt)("admonition",{title:"Developers only",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask Flask is an experimental tool only for developers.\nIf you are not a developer, you should not install MetaMask Flask. ")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Up-to-date Chromium or Firefox browser"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 16 or later"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn")," version 3")),(0,r.kt)("h2",{id:"install-the-metamask-flask-browser-extension"},"Install the MetaMask Flask browser extension"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/flask/"},"MetaMask Flask")," is an experimental playground that provides developers\naccess to upcoming MetaMask features. It is available as a browser extension."),(0,r.kt)("p",null,"While a small set of audited Snaps are allowlisted in the stable version of the MetaMask browser\nextension, MetaMask Flask is intended for developers building and testing Snaps locally or from npm.\nAlso, new Snaps API features are enabled in Flask for testing and developer feedback before they're\nenabled in MetaMask stable."),(0,r.kt)("admonition",{title:"Install in a new browser profile",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk"},"Metamask Flask browser extension"),"\nin a new browser profile, or disable any existing installed versions of MetaMask before installing\nFlask. Running multiple instances of MetaMask in the same browser profile breaks dapp interactions.")))}d.isMDXComponent=!0}}]);