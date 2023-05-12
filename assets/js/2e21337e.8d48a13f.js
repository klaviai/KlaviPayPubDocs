"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(n),f=i,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[l]="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"Authentication",sidebar_label:"Authentication",sidebar_position:3},o=void 0,u={unversionedId:"dev-guides/integration-api/authentication",id:"dev-guides/integration-api/authentication",title:"Authentication",description:"Introduction",source:"@site/docs/dev-guides/integration-api/authentication.md",sourceDirName:"dev-guides/integration-api",slug:"/dev-guides/integration-api/authentication",permalink:"/docs/dev-guides/integration-api/authentication",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Authentication",sidebar_label:"Authentication",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Payment API",permalink:"/docs/dev-guides/integration-api/api"},next:{title:"Return code",permalink:"/docs/dev-guides/integration-api/code"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Grant authorization",id:"grant-authorization",level:2}],p={toc:c},l="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"KlaviPay API uses JWT tokens to authenticate requests."),(0,i.kt)("p",null,"With a ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKey")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"secretKey")," you can get an token and pass it to the Authorization Header via bearer token."),(0,i.kt)("p",null,"Request it at ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/auth")," passing int the body the JSON:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n    "accessKey": "L0l1a2v3i4",\n    "secretKey": "TtMdrH&a8MfjdyUnFs*#dypaX15%qpXtXQt2n$"\n}\n')),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Authorization: Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9...uKHsXAvSDaK0RdV9xq3-OSrLA\n")),(0,i.kt)("p",null,"All requests must be done via HTTPS. Authenticated requests must be submitted with the appropriate authorization header."),(0,i.kt)("h2",{id:"grant-authorization"},"Grant authorization"),(0,i.kt)("p",null,"KlaviPay provides two types of APIs: Product API and Management API. Although both use JWT token authentication method, because of the different use scenarios of the two APIs, different ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"secretKey")," are required."))}d.isMDXComponent=!0}}]);