"use strict";(self.webpackChunkopenapi_wfeng=self.webpackChunkopenapi_wfeng||[]).push([[979],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1406:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="Schema Basics",p={unversionedId:"schema-basics",id:"schema-basics",isDocsHomePage:!1,title:"Schema Basics",description:"The foundation of the OAS is a the OpenAPI object, which in turn consits of a couple of objects.",source:"@site/course/schema-basics.md",sourceDirName:".",slug:"/schema-basics",permalink:"/openapi-course/course/schema-basics",editUrl:"https://github.com/xeeija/openapi-wfeng/edit/main/course/schema-basics.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Format, Datatypes",permalink:"/openapi-course/course/format"},next:{title:"Endpoints",permalink:"/openapi-course/course/endpoints"}},c=[{value:"Root Object",id:"root-object",children:[],level:2},{value:"Info Object",id:"info-object",children:[],level:2},{value:"Servers Object",id:"servers-object",children:[],level:2},{value:"Components Object",id:"components-object",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schema-basics"},"Schema Basics"),(0,i.kt)("p",null,"The foundation of the OAS is a the OpenAPI object, which in turn consits of a couple of objects.\nThis object contains all the endpoints and its options of the API as well as metadata, general schema definitions and so on."),(0,i.kt)("h2",{id:"root-object"},"Root Object"),(0,i.kt)("p",null,"The OpenAPI Object is the root object of the specification document.\nThe most relevant fields are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"openapi"),": required, version of the specification"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"info"),": required, Info object with metadata about the API"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"servers"),": Array of Server Objects hosting the API, defaults to server with url ",(0,i.kt)("inlineCode",{parentName:"li"},"/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"paths"),": required: The available endpoints and methods of the API (more details later)")),(0,i.kt)("p",null,"It also has additional fields to define common schemes for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"components"),": defines schemas"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"security"),": Security mechanisms that can be used (authentication, authorization), only one is required"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"webhooks"),": possibility to define webhook paths")),(0,i.kt)("p",null,"Here are examples for YAML and JSON format with the same content:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"YAML example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'openapi: 3.0.2\ninfo: \n  title: Firebit API\n  version: 1.0.0\n  description: "API for the [Firebit](https://firebit.com) platform, a place to share experiences with your friends"\n  termsOfService: https://firebit.com/tos\nservers:\n  ...\npaths:\n  ...\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"JSON example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "openapi": "3.0.2"\n  "info": {\n    "title": "Firebit API"\n    "version": "1.0.0"\n    "description": "API for the [Firebit](https://firebit.com) platform, a place to share experiences with your friends"\n    "termsOfService": "https://firebit.com/tos"\n  } \n  servers: [\n    ...\n  ]\n  paths: [\n    ...\n  ]\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As you can see, the YAML version is a bit shorter and (maybe) easier to read, because no ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"')," are necessary."))),(0,i.kt)("h2",{id:"info-object"},"Info Object"),(0,i.kt)("p",null,"The Info obejct provides metadata of the API."),(0,i.kt)("p",null,"It has the fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title"),": required"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"version"),": required, version of the API")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Don't confuse the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," of the Info object (version of the API) with the ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi")," field version (specification version)."))),(0,i.kt)("h2",{id:"servers-object"},"Servers Object"),(0,i.kt)("p",null,"This specifies a single server or list of servers, where the API is hosted.\nRequests sent from the documentation will be sent to the selected server from this object."),(0,i.kt)("p",null,"It has the following ields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"url"),": required, URL to the host"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": optional name")),(0,i.kt)("h2",{id:"components-object"},"Components Object"),(0,i.kt)("p",null,"In this object, a list of reusable objects of various types can be defined.  "),(0,i.kt)("p",null,"It holds:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Schemas"),(0,i.kt)("li",{parentName:"ul"},"PathItems"),(0,i.kt)("li",{parentName:"ul"},"Parameters"),(0,i.kt)("li",{parentName:"ul"},"RequestBodies"),(0,i.kt)("li",{parentName:"ul"},"Headers"),(0,i.kt)("li",{parentName:"ul"},"Responses"),(0,i.kt)("li",{parentName:"ul"},"SecuritySchemes"),(0,i.kt)("li",{parentName:"ul"},"etc.")),(0,i.kt)("p",null,"Basically, everything that is used in many places can be defined here once\nand used everywhere else, thus providing a single place to make changes. "),(0,i.kt)("p",null,"Examples are a ",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),' parameter, a "Not Found" response or an authentication method used for multiple operations.'))}u.isMDXComponent=!0}}]);