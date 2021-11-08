"use strict";(self.webpackChunkopenapi_wfeng=self.webpackChunkopenapi_wfeng||[]).push([[329],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1710:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},p="Endpoints",s={unversionedId:"endpoints",id:"endpoints",isDocsHomePage:!1,title:"Endpoints",description:"#TODO: intro to endpoints, defining endpoints",source:"@site/course/endpoints.md",sourceDirName:".",slug:"/endpoints",permalink:"/openapi-course/course/endpoints",editUrl:"https://github.com/xeeija/openapi-wfeng/edit/main/course/endpoints.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Schema Basics",permalink:"/openapi-course/course/schema-basics"},next:{title:"Configuring endpoints",permalink:"/openapi-course/course/endpoints-config"}},u=[{value:"Paths Object",id:"paths-object",children:[{value:"TODO: Activity for matching paths, variables?",id:"todo-activity-for-matching-paths-variables",children:[],level:4}],level:3},{value:"Operation Object",id:"operation-object",children:[],level:3}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"endpoints"},"Endpoints"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"#TODO"),": intro to endpoints, defining endpoints"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Until now, all fields are fixed fields.")),(0,i.kt)("h3",{id:"paths-object"},"Paths Object"),(0,i.kt)("p",null,"List of all paths (endpoints) of the API, must begin with ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," (pattern of ",(0,i.kt)("inlineCode",{parentName:"p"},"/{path}"),").\nA paths is represented by a Path Item Object. The path is appended to the host url."),(0,i.kt)("p",null,"Supports path variables in the format ",(0,i.kt)("inlineCode",{parentName:"p"},"{foo}"),"."),(0,i.kt)("p",null,"A path has the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"all HTTP methods in lowercase",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"get"),(0,i.kt)("li",{parentName:"ul"},"post"),(0,i.kt)("li",{parentName:"ul"},"put"),(0,i.kt)("li",{parentName:"ul"},"delete"),(0,i.kt)("li",{parentName:"ul"},"options"),(0,i.kt)("li",{parentName:"ul"},"head"),(0,i.kt)("li",{parentName:"ul"},"patch"),(0,i.kt)("li",{parentName:"ul"},"trace"))),(0,i.kt)("li",{parentName:"ul"},"description: for all operations of a path"),(0,i.kt)("li",{parentName:"ul"},"parameters, available for all operations"),(0,i.kt)("li",{parentName:"ul"},"$ref: reference (link) to a path item object defined somewhere else")),(0,i.kt)("h4",{id:"todo-activity-for-matching-paths-variables"},"TODO: Activity for matching paths, variables?"),(0,i.kt)("h3",{id:"operation-object"},"Operation Object"),(0,i.kt)("p",null,"Describes one operation (method) of an API endpoint.\nIt has the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"summary"),": Short summary of this operation, should be <120 characters"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),": Long description (like details, shown in docs when selected)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"parameters"),": List of parameters"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"responses"),": Required, list of possible responses"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"requestBody"),": body (payload) of the request, if applicable")),(0,i.kt)("p",null,"Additionally:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"security"),": List of security definitions to apply (for authorization), logical OR"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deprecated"),": Whether the operation should not be used anymore",(0,i.kt)("br",{parentName:"li"}),"(not in the spec, but: good practise to specify an alternative)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tags"),": For organisation/grouping"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"operationId"),": Unique string to identify the operation,",(0,i.kt)("br",{parentName:"li"}),"may be used by tools or libraries, so this should follow common naming conventions")))}d.isMDXComponent=!0}}]);