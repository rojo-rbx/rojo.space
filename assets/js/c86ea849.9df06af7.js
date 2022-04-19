"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[5876],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92815:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"Upgrading From Rojo 6"},p=void 0,s={unversionedId:"upgrade",id:"version-v7/upgrade",title:"Upgrading From Rojo 6",description:"While Rojo 7 is mostly backwards compatible with Rojo 6, it has a couple important breaking changes to be aware of.",source:"@site/versioned_docs/version-v7/upgrade.md",sourceDirName:".",slug:"/upgrade",permalink:"/docs/v7/upgrade",editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/versioned_docs/version-v7/upgrade.md",tags:[],version:"v7",frontMatter:{title:"Upgrading From Rojo 6"},sidebar:"version-v7/tutorialSidebar",previous:{title:"Rojo Alternatives",permalink:"/docs/v7/rojo-alternatives"}},c={},u=[{value:"Explicit Properties in Project/Meta Files",id:"explicit-properties-in-projectmeta-files",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"While Rojo 7 is mostly backwards compatible with Rojo 6, it has a couple important breaking changes to be aware of."),(0,a.kt)("h2",{id:"explicit-properties-in-projectmeta-files"},"Explicit Properties in Project/Meta Files"),(0,a.kt)("p",null,"Rojo has support for specifying properties in project files as well as ",(0,a.kt)("inlineCode",{parentName:"p"},".meta.json")," files. There are two ways to write properties in these files, the explicit syntax and implicit syntax."),(0,a.kt)("p",null,"Rojo's ",(0,a.kt)("strong",{parentName:"p"},"implicit syntax")," has not changed. In Both Rojo 6 and 7, you can write properties like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "cool-skateboard",\n    "tree": {\n        "$className": "Part",\n        "$properties": {\n            "Material": "Wood",\n            "Size": [2, 0.5, 6],\n            "Color": [1, 0, 0],\n            "CFrame": [\n                0, 10, 0,\n                1, 0, 0,\n                0, 1, 0,\n                0, 0, 1\n            ]\n        }\n    }\n}\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It's strongly recommended to use the implicit syntax when possible! It's shorter, easier to read, and more future-proof."))),(0,a.kt)("p",null,"Rojo also has a more ",(0,a.kt)("strong",{parentName:"p"},"explicit syntax")," for specifying property values. This syntax should be used only for a couple reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using an new enum value that Rojo doesn't know about."),(0,a.kt)("li",{parentName:"ul"},"Writing a property with a different value type than what Rojo expects.")),(0,a.kt)("p",null,"In Rojo 6, this same model using the ",(0,a.kt)("strong",{parentName:"p"},"explicit property syntax")," would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "cool-skateboard",\n    "tree": {\n        "$className": "Part",\n        "$properties": {\n            "Material": {\n                "Type": "Enum",\n                "Value": 512\n            },\n            "Size": {\n                "Type": "Vector3",\n                "Value": [2, 0.5, 6]\n            },\n            "Color": {\n                "Type": "Color3",\n                "Value": [1, 0, 0]\n            },\n            "CFrame": {\n                "Type": "CFrame", \n                "Value": [\n                    0, 10, 0,\n                    1, 0, 0,\n                    0, 1, 0,\n                    0, 0, 1\n                ]\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"This format has changed in Rojo 7. The same model with Rojo 7's explicit property syntax would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "cool-skateboard",\n    "tree": {\n        "$className": "Part",\n        "$properties": {\n            "Material": {\n                "Enum": 512\n            },\n            "Size": {\n                "Vector3": [2, 0.5, 6]\n            },\n            "Color": {\n                "Color3": [1, 0, 0]\n            },\n            "CFrame": {\n                "CFrame": {\n                    "position": [0, 10, 0],\n                    "orientation": [\n                        1, 0, 0,\n                        0, 1, 0,\n                        0, 0, 1\n                    ]\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"In Rojo 7, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Value")," fields were folded together to reduce the amount of typing. Some types like ",(0,a.kt)("inlineCode",{parentName:"p"},"CFrame")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ColorSequence")," had fields added or renamed."),(0,a.kt)("p",null,"Since the release of Rojo 6, it has been feasible to use ",(0,a.kt)("inlineCode",{parentName:"p"},"rbxm")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"rbxmx")," files for models instead of typing properties by hand. For more complicated models, this is recommended."))}d.isMDXComponent=!0}}]);