"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2959],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4},i="Contract provider",s={unversionedId:"how-to/interact-with-smart-contracts/unity/contract-provider",id:"how-to/interact-with-smart-contracts/unity/contract-provider",title:"Contract provider",description:"When interacting with smart contracts in Unity, the provider is similar to a JavaScript",source:"@site/wallet/how-to/interact-with-smart-contracts/unity/contract-provider.md",sourceDirName:"how-to/interact-with-smart-contracts/unity",slug:"/how-to/interact-with-smart-contracts/unity/contract-provider",permalink:"/snaps-ui-image/wallet/how-to/interact-with-smart-contracts/unity/contract-provider",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/interact-with-smart-contracts/unity/contract-provider.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"walletSidebar",previous:{title:"Contract proxy class",permalink:"/snaps-ui-image/wallet/how-to/interact-with-smart-contracts/unity/contract-proxy-class"},next:{title:"Add a network",permalink:"/snaps-ui-image/wallet/how-to/add-network"}},c={},p=[{value:"IProvider",id:"iprovider",level:2},{value:"ILegacyProvider",id:"ilegacyprovider",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-provider"},"Contract provider"),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"/snaps-ui-image/wallet/"},"interacting with smart contracts in Unity"),", the provider is similar to a JavaScript\nprovider.\nThe provider is responsible for sending the request formed inside the\n",(0,a.kt)("a",{parentName:"p",href:"/snaps-ui-image/wallet/how-to/interact-with-smart-contracts/unity/contract-proxy-class"},"contract proxy class")," to the blockchain RPC node and optionally decoding\nthe response.\nIf the provider doesn't decode the response, then it's considered an ",(0,a.kt)("a",{parentName:"p",href:"#ilegacyprovider"},(0,a.kt)("inlineCode",{parentName:"a"},"ILegacyProvider")),"."),(0,a.kt)("h2",{id:"iprovider"},"IProvider"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IProvider")," interface defines the following function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"Task<TR> Request<TR>(string method, object[] parameters = null);\n")),(0,a.kt)("p",null,"This function must send a JSON-RPC request with the given method and parameters.\nIt must decode the JSON-RPC result response into the type ",(0,a.kt)("inlineCode",{parentName:"p"},"TR"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IProvider")," must also define two additional properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"long ChainId { get; }  // The current chain ID the provider is connected to\n  \nstring ConnectedAddress { get; } // The current address connected to the provider\n")),(0,a.kt)("p",null,"For backwards compatibility, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ILegacyProvider")," function is also defined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"object Request(string method, object[] parameters = null);\n")),(0,a.kt)("p",null,"To easily support this function, use ",(0,a.kt)("inlineCode",{parentName:"p"},"Request<object>"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public object Request(string method, object[] parameters = null)  \n{  \n    return this.Request<object>(method, parameters);  \n}\n")),(0,a.kt)("h2",{id:"ilegacyprovider"},"ILegacyProvider"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ILegacyProvider")," is an interface that declares an interface that does not support response decoding.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"ILegacyProvider")," interface defines the following function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"object Request(string method, object[] parameters = null);\n")),(0,a.kt)("p",null,"This function must send a JSON-RPC request with the given method and parameters.\nIt should decode the response, but it's not required.\nIt may return any of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The response as a JSON string"),(0,a.kt)("li",{parentName:"ul"},"The response as a JSON string, wrapped in a Task"),(0,a.kt)("li",{parentName:"ul"},"The response decoded into some object"),(0,a.kt)("li",{parentName:"ul"},"The response decoded into some object, wrapped in a Task")),(0,a.kt)("p",null,"If the function returns a JSON string, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract")," class attempts to deserialize the JSON\nstring into the desired type.\nIf it returns any other object type, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract")," class attempts to convert to the desired type by\nfirst serializing the object into JSON, then deserializing the JSON back into the desired type.\nThe desired type is defined in the ",(0,a.kt)("a",{parentName:"p",href:"/snaps-ui-image/wallet/how-to/interact-with-smart-contracts/unity/contract-interface"},"contract interface")," used."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ILegacyProvider")," must also define two additional properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"long ChainId { get; } // The current chain ID the provider is connected to\n  \nstring ConnectedAddress { get; } // The current address connected to the provider\n")))}u.isMDXComponent=!0}}]);