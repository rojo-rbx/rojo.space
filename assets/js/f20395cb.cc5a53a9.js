"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[376],{99049:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return h},default:function(){return g}});var a=o(87462),n=o(63366),i=(o(67294),o(3905)),l=o(55064),s=o(58215),r=o(36742),m=["components"],d={sidebar_position:1},p="Installation",u={unversionedId:"getting-started/installation",id:"version-v0.5/getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"There are two supported ways to install Rojo:",source:"@site/versioned_docs/version-v0.5/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/v0.5/getting-started/installation",editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/versioned_docs/version-v0.5/getting-started/installation.mdx",tags:[],version:"v0.5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-v0.5/tutorialSidebar",previous:{title:"Help!",permalink:"/docs/v0.5/help"},next:{title:"Creating a New Game",permalink:"/docs/v0.5/getting-started/new-game"}},h=[{value:"Installing the Server",id:"installing-the-server",children:[],level:2},{value:"Installing the Plugin",id:"installing-the-plugin",children:[],level:2}],c={toc:h};function g(e){var t=e.components,d=(0,n.Z)(e,m);return(0,i.kt)("wrapper",(0,a.Z)({},c,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"There are two supported ways to install Rojo:"),(0,i.kt)(l.Z,{groupId:"installation-kind",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"vscode",label:"VS Code",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"If you use Visual Studio Code, you can install ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=evaera.vscode-rojo"},"the Rojo VS Code extension"),", which allows for both halves of Rojo to work within Visual Studio Code, with a nifty UI to sync files and start/stop the Rojo server!"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The VS Code extension does not add ",(0,i.kt)("inlineCode",{parentName:"p"},"rojo")," to your system PATH. In order to use Rojo from the terminal, you'll need to install the CLI separately.")))),(0,i.kt)(s.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,i.kt)("p",null,"Rojo has two pieces that need to be installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Server"),(0,i.kt)("li",{parentName:"ul"},"The Roblox Studio plugin")),(0,i.kt)("h2",{id:"installing-the-server"},"Installing the Server"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"foreman",label:"With Foreman",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rojo-rbx/foreman"},"Foreman")," is a toolchain manager that is useful for managing tools like Rojo for Roblox projects."),(0,i.kt)("p",null,"To install from the latest stable release channel of Rojo 6, add an entry to the ",(0,i.kt)("inlineCode",{parentName:"p"},"[tools]")," section of your ",(0,i.kt)("inlineCode",{parentName:"p"},"foreman.toml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[tools]\nrojo = { source = "rojo-rbx/rojo", version = "0.5" }\n'))),(0,i.kt)(s.Z,{value:"github",label:"From GitHub",mdxType:"TabItem"},(0,i.kt)("p",null,"There are pre-built binaries available for Windows, macOS, and Linux from Rojo's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LPGhatguy/rojo/releases"},"GitHub Releases page"),"."),(0,i.kt)("p",null,"The Rojo CLI must be run from the command line, like ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd.exe")," on Windows or ",(0,i.kt)("inlineCode",{parentName:"p"},"Terminal.app")," on macOS. It's recommended that you put the Rojo CLI executable on your system ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," to make this easier.")),(0,i.kt)(s.Z,{value:"crates",label:"From crates.io",mdxType:"TabItem"},(0,i.kt)("p",null,"It's also possible to install Rojo releases using ",(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),". This will compile Rojo from source and install it on your machine."),(0,i.kt)("p",null,"To install Rojo 0.5, use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo install rojo --version ^0.5\n")))),(0,i.kt)("h2",{id:"installing-the-plugin"},"Installing the Plugin"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"github",label:"From GitHub",mdxType:"TabItem"},(0,i.kt)("p",null,"The Rojo plugin is available from Rojo's GitHub Releases page."),(0,i.kt)(r.Z,{className:"button button--primary button--extra-margin",to:"https://github.com/rojo-rbx/rojo/releases",mdxType:"Link"},"Rojo GitHub Releases"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Rojo has a separate plugin for each major version. Make sure you install the correct one!"))),(0,i.kt)("p",null,"Download the attached ",(0,i.kt)("inlineCode",{parentName:"p"},"rbxm")," file and put it into your Roblox Studio plugins folder. You can find that folder by pressing ",(0,i.kt)("strong",{parentName:"p"},"Plugins Folder")," from your Plugins toolbar in Roblox Studio:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&#39;Plugins Folder&#39; button in Roblox Studio",src:o(40682).Z}))),(0,i.kt)(s.Z,{value:"roblox",label:"From Roblox.com",mdxType:"TabItem"},(0,i.kt)("p",null,"The Rojo plugin can be installed from Roblox.com."),(0,i.kt)(r.Z,{className:"button button--primary button--extra-margin",to:"https://www.roblox.com/library/1997686364/",mdxType:"Link"},"Rojo 0.5 Plugin on Roblox.com"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Rojo has a separate plugin for each major version. Make sure you install the correct one!"))),(0,i.kt)("p",null,"Press the 'Install' button on the plugin page to add it to Roblox Studio."))))))}g.isMDXComponent=!0},40682:function(e,t,o){t.Z=o.p+"assets/images/plugins-folder-in-studio-cb565553f78b7e4b38fe60a6669bbca0.png"}}]);