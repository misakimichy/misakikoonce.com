(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{NysD:function(e,t,a){"use strict";a("pJf4");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),u=a("LvDl"),c=a("nDTf");t.a=function(e){var t=e.name,a=e.count;return r.a.createElement(c.b,null,r.a.createElement(l.Link,{to:"/tags/"+Object(u.kebabCase)(t)},t," ",null!==a?a:""))}},RXBc:function(e,t,a){"use strict";a.r(t);a("pJf4");var n=a("q1tI"),r=a.n(n),l=a("LvDl"),u=a("Bl7J"),c=a("Wbzz"),i=a("NysD"),o=function(e){var t=e.title,a=e.date,n=e.url,l=e.description,u=e.tags,o=void 0===u?[]:u,m=e.thumbnail;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:m,alt:"thumbnail of the work"}),r.a.createElement(c.Link,{to:n},r.a.createElement("h2",null,t)),r.a.createElement("span",null,a),o.map((function(e,t){return r.a.createElement(i.a,{key:t,name:e})})),r.a.createElement("p",null,l),r.a.createElement(c.Link,{to:n},"...read more"))))},m=o;o.defaultProps={tags:[],date:""},a.d(t,"pageQuery",(function(){return s}));t.default=function(e){var t=e.data.allMarkdownRemark.edges.map((function(e){var t=e.node,a=t.frontmatter.title,n=t.frontmatter.date,r=t.frontmatter.description,u=t.frontmatter.tags,c=t.frontmatter.thumbnail.childImageSharp.fluid.src;return console.log(c),{name:a,path:"/works/"+Object(l.kebabCase)(a)+"/",date:n,description:r,tags:u,thumbnail:c}}));return console.log(t),r.a.createElement(u.a,null,r.a.createElement("main",null,r.a.createElement("h1",null,"Work"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement(m,{key:t,title:e.name,date:e.date,url:e.path,description:e.description,tags:e.tags,thumbnail:e.thumbnail})})))))};var s="1578516812"}}]);
//# sourceMappingURL=component---src-pages-index-js-7e2e9463044d41a5c9f8.js.map