"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,b=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(b,s(s({ref:t},c),{},{components:n})):a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={title:"List payments initiations",sidebar_label:"List payments initiations",sidebar_position:1},s=void 0,o={unversionedId:"api-reference/customer/payments/list-payments",id:"api-reference/customer/payments/list-payments",title:"List payments initiations",description:"List all payments initiations.",source:"@site/docs/api-reference/customer/payments/list-payments.md",sourceDirName:"api-reference/customer/payments",slug:"/api-reference/customer/payments/list-payments",permalink:"/pt/docs/api-reference/customer/payments/list-payments",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"List payments initiations",sidebar_label:"List payments initiations",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"List participants",permalink:"/pt/docs/api-reference/customer/participants/participant"},next:{title:"Create a payment initiation",permalink:"/pt/docs/api-reference/customer/payments/create-payment"}},p={},l=[{value:"Request",id:"request",level:2},{value:"Request method",id:"request-method",level:3},{value:"Request Header",id:"request-header",level:3},{value:"Request Path Parameters",id:"request-path-parameters",level:3},{value:"Response",id:"response",level:2},{value:"Code: 200",id:"code-200",level:3}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"List all payments initiations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"cURL command example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-test.klavi.ai/payment/customer/v1/payments' \\\n--header 'Accept: application/json' \\\n--header 'Authorization: Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsbLWdhdGV3YXkifQ.2dvWMBcU87IeX4J7S1_bx1uKHsXAvSDaK0RdV9xq3-OSrLA'\n")),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("h3",{id:"request-method"},"Request method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://api-test.klavi.ai/payment/customer/v1/payments\n")),(0,r.kt)("h3",{id:"request-header"},"Request Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Condition"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JWT bearer token obtained through ",(0,r.kt)("inlineCode",{parentName:"td"},"/auth"),' endpoint, When passing, add "Bearer " before the token')))),(0,r.kt)("h3",{id:"request-path-parameters"},"Request Path Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Condition"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Limit payments list length")))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("h3",{id:"code-200"},"Code: 200"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "ffcf6b93-9184-447f-b806-98a803dbd954",\n        "createdAt": "2023-02-02T07:12:47.965Z",\n        "updatedAt": "0001-01-01T00:00:00Z",\n        "error": {},\n        "status": "STARTED",\n        "clientId": "0b59d801-08e0-4e84-9ecd-569f34e32279",\n        "customerId": "21a79744-39c8-4b37-b7a9-cb50b0389448",\n        "provider": {\n            "tradeName": "Klavi",\n            "avatar": "https://media.licdn.com/dms/image/C4D0BAQGwqthFsnjhpw/company-logo_200_200/0/1647885722250?e=1681948800&v=beta&t=A7-Ks2EcodobZmHhOutvZ6IS3OgjfHDclmuS7sSjRfs"\n        },\n        "user": {\n            "taxId": ""\n        },\n        "businessEntity": {\n            "taxId": ""\n        },\n        "method": "",\n        "amount": 0,\n        "date": "2023-02-02",\n        "debtor": {\n            "number": "",\n            "accountType": "",\n            "ispb": "",\n            "issuer": "",\n            "bank": {\n                "id": "c8f0bf49-4744-4933-8960-7add6e590841",\n                "name": "Mock Bank",\n                "avatar": "https://cdn.raidiam.io/directory-ui/brand/obbrazil/0.2.0.112/favicon.svg"\n            }\n        },\n        "creditor": {\n            "taxId": "38231713000139",\n            "name": "Klavi",\n            "number": "********",\n            "accountType": "CACC",\n            "ispb": "60701190",\n            "issuer": "****",\n            "bank": {\n                "id": ""\n            }\n        }\n    }\n]\n')))}d.isMDXComponent=!0}}]);