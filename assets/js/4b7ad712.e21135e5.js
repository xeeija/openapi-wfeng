"use strict";(self.webpackChunkopenapi_wfeng=self.webpackChunkopenapi_wfeng||[]).push([[520],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},p="Configuring endpoints",l={unversionedId:"endpoints-config",id:"endpoints-config",isDocsHomePage:!1,title:"Configuring endpoints",description:"Parameter Object",source:"@site/course/endpoints-config.md",sourceDirName:".",slug:"/endpoints-config",permalink:"/openapi/course/endpoints-config",editUrl:"https://github.com/xeeija/openapi-wfeng/edit/main/course/endpoints-config.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Endpoints",permalink:"/openapi/course/endpoints"},next:{title:"Security",permalink:"/openapi/course/security"}},u=[{value:"Parameter Object",id:"parameter-object",children:[],level:3},{value:"Request Body Object",id:"request-body-object",children:[],level:3},{value:"Responses Object",id:"responses-object",children:[],level:3}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-endpoints"},"Configuring endpoints"),(0,i.kt)("h3",{id:"parameter-object"},"Parameter Object"),(0,i.kt)("p",null,"(and Header Object is very similar)"),(0,i.kt)("p",null,"Desribes one parameter of an operation.\nA parameter must be unique (the combination of name and location)"),(0,i.kt)("p",null,'There are five locatios (like "types"):'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"path"),": parameter in the path, used with templating\nin ",(0,i.kt)("inlineCode",{parentName:"li"},"/user/{username}"),", the parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"username")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"query"),": Parameters after the path (after ",(0,i.kt)("inlineCode",{parentName:"li"},"?"),")\nin ",(0,i.kt)("inlineCode",{parentName:"li"},"/products?page=42")," the parameter is ",(0,i.kt)("inlineCode",{parentName:"li"},"page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"header"),": custom headers that are expected"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"cookie"),": pass cookies to the API")),(0,i.kt)("p",null,"Parameters have the fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name"),": Required, case sensitive name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"in"),": Required, type of the parameter, (path, query, header, cookie)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"required"),": Whether the parameter is mandatory, if ",(0,i.kt)("inlineCode",{parentName:"li"},"in"),' is "path", then this is required and true'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": description of the paremeter")),(0,i.kt)("h3",{id:"request-body-object"},"Request Body Object"),(0,i.kt)("p",null,"Single request body (payload)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"content"),': content type of the body (MIME type, "Media type")\nsee ')),(0,i.kt)("h3",{id:"responses-object"},"Responses Object"),(0,i.kt)("p",null,"List of expected responses, based on HTTP status code. Should cover success and known errors, but may not cover all possible status codes.",(0,i.kt)("br",{parentName:"p"}),"\n","At least one response is required and this should be the success response (200).\n",(0,i.kt)("inlineCode",{parentName:"p"},"default")," is used as default when no other status code matches.\nString of the status code, not number, eg. ",(0,i.kt)("inlineCode",{parentName:"p"},'"200": ...'),"."),(0,i.kt)("p",null,"A response has the fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Required, short description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"headers"),": list of headers with the response"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"content"),": content type of response")))}d.isMDXComponent=!0}}]);