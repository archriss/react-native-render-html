(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3089,2075],{3488:function(e,t,a){"use strict";a.d(t,{Z:function(){return y}});var n=a(7560),l=a(2784),r=a(6277),i=a(6540),c=a(7719),o=a(4501),s=a.n(o),m=a(2894),u=a(7921),d="codeBlockTitle_1HP_",g="codeBlockContainer_1dyT",p="codeBlockContent_3uNE",h="codeBlock_3AS9",f="codeBlockWithTitle_2H7o",v="copyButton_1oOY",E="codeBlockLines_2sa4",k=a(1395),b=/{([\d,-]+)}/,Z=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")};function y(e){var t=e.children,a=e.className,o=e.metastring,y=e.title,N=(0,k.LU)().prism,_=(0,l.useState)(!1),j=_[0],C=_[1],B=(0,l.useState)(!1),w=B[0],x=B[1];(0,l.useEffect)((function(){x(!0)}),[]);var T=(0,k.bc)(o)||y,L=(0,l.useRef)(null),A=[],P=(0,m.Z)(),M=Array.isArray(t)?t.join(""):t;if(o&&b.test(o)){var I=o.match(b)[1];A=s()(I).filter((function(e){return e>0}))}var H=a&&a.replace(/language-/,"");!H&&N.defaultLanguage&&(H=N.defaultLanguage);var R=M.replace(/\n$/,"");if(0===A.length&&void 0!==H){for(var S,U="",$=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return Z(["js","jsBlock"]);case"jsx":case"tsx":return Z(["js","jsBlock","jsx"]);case"html":return Z(["js","jsBlock","html"]);case"python":case"py":return Z(["python"]);default:return Z()}}(H),O=M.replace(/\n$/,"").split("\n"),Q=0;Q<O.length;){var D=Q+1,F=O[Q].match($);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":U+=D+",";break;case"highlight-start":S=D;break;case"highlight-end":U+=S+"-"+(D-1)+","}O.splice(Q,1)}else Q+=1}A=s()(U),R=O.join("\n")}var G=function(){(0,c.Z)(R),C(!0),setTimeout((function(){return C(!1)}),2e3)};return l.createElement(i.ZP,(0,n.Z)({},i.lG,{key:String(w),theme:P,code:R,language:H}),(function(e){var t,a=e.className,i=e.tokens,c=e.getLineProps,o=e.getTokenProps;return l.createElement("div",{className:g},T&&l.createElement("div",{className:d},T),l.createElement("div",{className:(0,r.Z)(p,H)},l.createElement("div",{tabIndex:0,className:(0,r.Z)(a,h,"thin-scrollbar",(t={},t[f]=T,t))},l.createElement("div",{className:E},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return A.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.createElement("div",(0,n.Z)({key:t},a),e.map((function(e,t){return l.createElement("span",(0,n.Z)({key:t},o({token:e,key:t})))})))})))),l.createElement("button",{ref:L,type:"button","aria-label":(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,r.Z)(v),onClick:G},j?l.createElement(u.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.createElement(u.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},9684:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(7560),l=a(2784),r=a(6566),i=a(7614),c=a(77),o=a(7513),s=a(759),m=a(1395),u=a(4517);function d(){var e=(0,i.Z)().i18n,t=e.defaultLocale,a=e.locales,n=(0,m.l5)();return l.createElement(r.Z,null,a.map((function(e){return l.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),l.createElement("link",{rel:"alternate",href:n.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function g(e){var t=e.permalink,a=(0,i.Z)().siteConfig.url,n=function(){var e=(0,i.Z)().siteConfig.url,t=(0,u.TH)().pathname;return e+(0,c.Z)(t)}(),o=t?""+a+t:n;return l.createElement(r.Z,null,l.createElement("meta",{property:"og:url",content:o}),l.createElement("link",{rel:"canonical",href:o}))}function p(e){var t=(0,i.Z)(),a=t.siteConfig.themeConfig.metadatas,c=t.i18n,u=c.currentLocale,p=c.localeConfigs,h=e.title,f=e.description,v=e.image,E=e.keywords,k=e.searchMetadatas,b=(0,m.pe)(h),Z=u,y=p[u].direction;return l.createElement(l.Fragment,null,l.createElement(r.Z,null,l.createElement("html",{lang:Z,dir:y}),l.createElement("title",null,b),l.createElement("meta",{property:"og:title",content:b})),l.createElement(s.Z,{description:f,keywords:E,image:v}),l.createElement(g,null),l.createElement(d,null),l.createElement(o.Z,(0,n.Z)({tag:m.HX,locale:u},k)),l.createElement(r.Z,null,a.map((function(e,t){return l.createElement("meta",(0,n.Z)({key:"metadata_"+t},e))}))))}},5032:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(2784),l=a(7614),r=a(7678),i=a(4281),c=a(1510),o=a(7921);var s=function(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(c.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&n.createElement(c.Z,{className:"pagination-nav__link",to:l},n.createElement("div",{className:"pagination-nav__label"},n.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(7684),u=a(1395);var d=function(e){var t=e.metadata,a=e.items,c=e.sidebar,o=(0,l.Z)().siteConfig.title,d=t.blogDescription,g=t.blogTitle,p="/"===t.permalink?o:g;return n.createElement(r.Z,{title:p,description:d,wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"},n.createElement(m.Z,{sidebar:c})),n.createElement("main",{className:"col col--7"},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(s,{metadata:t})))))}}}]);