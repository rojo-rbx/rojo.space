"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[3859],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294);function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),o=n(67294),r=n(72389),l=n(5979),i=n(86010),s="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,p=e.block,m=e.defaultValue,c=e.values,d=e.groupId,v=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,o.useState)(g),j=w[0],x=w[1],T=[],R=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=y[d];null!=I&&I!==j&&f.some((function(e){return e.value===I}))&&x(I)}var O=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==j&&(R(t),x(a),null!=d&&N(d,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},v)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:O,onClick:O},r,{className:(0,i.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),u?(0,o.cloneElement)(h.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function p(e){var t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},58611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return v}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=n(9877),i=n(58215),s=n(39960),u=["components"],p={sidebar_position:1},m="Installation",c={unversionedId:"getting-started/installation",id:"version-v7/getting-started/installation",title:"Installation",description:"There are two supported ways to install Rojo:",source:"@site/versioned_docs/version-v7/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/v7/getting-started/installation",editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/versioned_docs/version-v7/getting-started/installation.mdx",tags:[],version:"v7",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-v7/tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/v7/"},next:{title:"Creating a New Game",permalink:"/docs/v7/getting-started/new-game"}},d={},v=[{value:"Installing the Server",id:"installing-the-server",level:2},{value:"Installing the Plugin",id:"installing-the-plugin",level:2}],h={toc:v};function f(e){var t=e.components,p=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"There are two supported ways to install Rojo:"),(0,r.kt)(l.Z,{groupId:"installation-kind",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"vscode",label:"VS Code",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"If you use Visual Studio Code, you can install ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=evaera.vscode-rojo"},"the Rojo VS Code extension"),", which allows for both halves of Rojo to work within Visual Studio Code, with a nifty UI to sync files and start/stop the Rojo server!"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The VS Code extension does not add ",(0,r.kt)("inlineCode",{parentName:"p"},"rojo")," to your system PATH. In order to use Rojo from the terminal, you'll need to install the CLI separately.")))),(0,r.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,r.kt)("p",null,"Rojo has two pieces that need to be installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Server"),(0,r.kt)("li",{parentName:"ul"},"The Roblox Studio plugin")),(0,r.kt)("h2",{id:"installing-the-server"},"Installing the Server"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"foreman",label:"With Foreman",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/rojo-rbx/foreman"},"Foreman")," is a toolchain manager that is useful for managing tools like Rojo for Roblox projects."),(0,r.kt)("p",null,"To install from the latest stable release channel of Rojo 6, add an entry to the ",(0,r.kt)("inlineCode",{parentName:"p"},"[tools]")," section of your ",(0,r.kt)("inlineCode",{parentName:"p"},"foreman.toml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[tools]\nrojo = { source = "rojo-rbx/rojo", version = "7" }\n'))),(0,r.kt)(i.Z,{value:"github",label:"From GitHub",mdxType:"TabItem"},(0,r.kt)("p",null,"There are pre-built binaries available for Windows, macOS, and Linux from Rojo's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rojo-rbx/rojo/releases"},"GitHub Releases page"),"."),(0,r.kt)("p",null,"The Rojo CLI must be run from the command line, like ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd.exe")," on Windows or ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal.app")," on macOS. It's recommended that you put the Rojo CLI executable on your system ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," to make this easier.")),(0,r.kt)(i.Z,{value:"crates",label:"From crates.io",mdxType:"TabItem"},(0,r.kt)("p",null,"It's also possible to install Rojo releases using ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),". This will compile Rojo from source and install it on your machine."),(0,r.kt)("p",null,"To install Rojo 7, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cargo install rojo --version ^7\n")))),(0,r.kt)("h2",{id:"installing-the-plugin"},"Installing the Plugin"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"cli",label:"Using the CLI",mdxType:"TabItem"},(0,r.kt)("p",null,"Once you've installed the Rojo server, you can use it to install or upgrade the Rojo plugin from the command line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rojo plugin install\n"))),(0,r.kt)(i.Z,{value:"github",label:"From GitHub",mdxType:"TabItem"},(0,r.kt)("p",null,"The Rojo plugin is available from Rojo's GitHub Releases page."),(0,r.kt)(s.Z,{className:"button button--primary button--extra-margin",to:"https://github.com/rojo-rbx/rojo/releases",mdxType:"Link"},"Rojo GitHub Releases"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Rojo has a separate plugin for each major version. Make sure you install the correct one!"))),(0,r.kt)("p",null,"Download the attached ",(0,r.kt)("inlineCode",{parentName:"p"},"rbxm")," file and put it into your Roblox Studio plugins folder. You can find that folder by pressing ",(0,r.kt)("strong",{parentName:"p"},"Plugins Folder")," from your Plugins toolbar in Roblox Studio:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;Plugins Folder&#39; button in Roblox Studio",src:n(88579).Z,width:"655",height:"179"}))),(0,r.kt)(i.Z,{value:"roblox",label:"From Roblox.com",mdxType:"TabItem"},(0,r.kt)("p",null,"The Rojo plugin can be installed from Roblox.com."),(0,r.kt)(s.Z,{className:"button button--primary button--extra-margin",to:"https://www.roblox.com/library/4048317704/",mdxType:"Link"},"Rojo 6 Plugin on Roblox.com"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Rojo has a separate plugin for each major version. Make sure you install the correct one!"))),(0,r.kt)("p",null,"Press the 'Install' button on the plugin page to add it to Roblox Studio."))))))}f.isMDXComponent=!0},88579:function(e,t,n){t.Z=n.p+"assets/images/plugins-folder-in-studio-cb565553f78b7e4b38fe60a6669bbca0.png"}}]);