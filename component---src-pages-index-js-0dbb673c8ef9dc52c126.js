(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+K2j":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("vOnD"),c=a("Wbzz");a("upwP");t.a=function(e){var t=e.name,a=e.count,n=e.index;return r.a.createElement(l,null,r.a.createElement(c.Link,{to:"/tags/"+t.toLowerCase(),tabIndex:"1"},r.a.createElement("button",{className:"tag-button"},t)),a>1&&0===n?",":"")};var l=i.c.div.withConfig({displayName:"tag__Styles",componentId:"sc-1oi7ym1-0"})([""])},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("7oih"),c=a("vOnD"),l=a("Wbzz"),o=a("+K2j"),s=a("upwP"),m=function(e){var t,a=e.title,n=e.url,i=e.description,c=e.stackTags,s=e.thumbnail,m=e.projectUrl;return r.a.createElement(p,{tabIndex:"0"},r.a.createElement("img",{src:s,alt:"project thumbnail"}),r.a.createElement("div",{className:"card-content",style:{height:"100%"}},r.a.createElement(l.Link,{to:n},r.a.createElement("h4",null,a),r.a.createElement("p",null,i)),r.a.createElement("div",{className:"tag-wrapper"},r.a.createElement("a",((t={href:m,target:"_blank",style:{marginBottom:"24px",marginRight:"16px"}}).target="_blank",t),r.a.createElement("span",{className:"link",tabIndex:"0"},"See project")),r.a.createElement(l.Link,{to:n},r.a.createElement("span",{className:"link",tabIndex:"0"},"Read more"))),r.a.createElement("div",{className:"tag-wrapper"},c.map((function(e,t){return r.a.createElement(o.a,{key:e,name:e,count:c.length,index:t})})))))},d=m;m.defaultProps={stackTags:[]};var p=c.c.div.withConfig({displayName:"projectCard__Styles",componentId:"sc-1eeh98g-0"})(["display:flex;justify-content:flex-start;align-items:center;border:1px solid ",";border-radius:4px;padding:24px;margin-bottom:16px;:hover,:focus{box-shadow:",";}img{width:350px;height:205px;margin-right:24px;}@media screen and (max-width:1024px){flex-direction:column;img{width:100%;height:100%;margin-right:0;margin-bottom:24px;}}@media screen and (max-width:480px){border:unset;border-bottom:1px solid ",";border-radius:0;padding:16px 0;.card-content{padding:8px;}}"],s.a.paleGrey,s.a.boxShadow,s.a.paleGrey),u=function(e){var t=e.cards;return r.a.createElement(g,null,r.a.createElement("h2",null,"Projects"),t.map((function(e){var t=e.name,a=e.path,n=e.description,i=e.stackTags,c=e.thumbnail,l=e.projectUrl;return r.a.createElement(d,{key:t,className:"project-card",title:t,url:a,description:n,stackTags:i,thumbnail:c,projectUrl:l})})))},g=c.c.div.withConfig({displayName:"Project__Styles",componentId:"sc-132r0rh-0"})(["@media screen and (max-width:800px){margin-bottom:88px;}"]),h=function(e){var t=e.title,a=e.url,n=e.description,i=e.stackTags;e.thumbnail;return r.a.createElement(b,{tabIndex:"0"},r.a.createElement(l.Link,{to:a,className:"card-content"},r.a.createElement("h4",null,t),r.a.createElement("p",null,n,r.a.createElement("span",{className:"link",tabIndex:"0"},"...read more"))),r.a.createElement("div",{className:"tag-wrapper"},i.map((function(e,t){return r.a.createElement(o.a,{key:e,name:e,count:i.length,index:t})}))))},x=h;h.defaultProps={stackTags:[]};var b=c.c.div.withConfig({displayName:"writingCard__Styles",componentId:"sc-fwnse3-0"})(["display:flex;flex-direction:column;border:1px solid ",";border-radius:4px;padding:24px;margin-bottom:16px;:hover,:focus{box-shadow:",";}"],s.a.paleGrey,s.a.boxShadow),f=function(e){var t=e.cards;return r.a.createElement(E,null,r.a.createElement("h2",null,"Writings"),t.map((function(e){var t=e.name,a=e.path,n=e.description,i=e.stackTags,c=e.thumbnail;return r.a.createElement(x,{key:t,className:"project-card",title:t,url:a,description:n,stackTags:i,thumbnail:c})})))},E=c.c.div.withConfig({displayName:"Writing__Styles",componentId:"sc-11yppyt-0"})(["padding-bottom:48px;margin-bottom:48px;border-bottom:1px solid ",";"],s.a.paleGrey);t.default=function(e){var t=e.data,a=t.projects,n=t.writings,c=a.edges.map((function(e){var t=e.node.frontmatter,a=t.title,n=t.description,r=t.stackTags,i=t.path,c=t.thumbnail,l=t.projectUrl;return{name:a,thumbnail:c.childImageSharp.fluid.src,stackTags:r,path:i,description:n,projectUrl:l}})),l=n.edges.map((function(e){var t=e.node.frontmatter,a=t.title,n=t.description,r=t.stackTags;return{name:a,path:t.path,description:n,stackTags:r}}));return r.a.createElement(i.a,null,r.a.createElement(u,{cards:c}),r.a.createElement(f,{cards:l}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0dbb673c8ef9dc52c126.js.map