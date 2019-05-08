(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{157:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(159),s=t(170),i=t(161);a.default=function(){return n.a.createElement(s.a,{title:"Getting Started"},n.a.createElement("p",{className:"Docs__paragraph"},"Welcome to docs! react-persian-calendar-date-picker (quite long name!) is a react date picker package for the Persian community. It's lightweight; only ~5KB gizpped, and it's easy to use. Before using this package, please pay attention to these two important points:"),n.a.createElement("ul",{className:"Docs__list"},n.a.createElement("li",null,"1- This package uses ",n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",className:"Docs__link",href:" https://reactjs.org/docs/hooks-intro.html"}," React hooks "),". Make sure you're running ",n.a.createElement("code",{className:"custom-code"},"react >= 16.8.0")," version."),n.a.createElement("li",null,"2- By default, this package inhertis ",n.a.createElement("code",{className:"custom-code"},"font-family")," from your project, but it's recommended to use ",n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",className:"Docs__link",href:"https://fontiran.com/%D9%81%D9%88%D9%86%D8%AA-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%DB%8C%DA%A9%D8%A7%D9%86-iran-yekan/"}," Iran Yekan "),"or ",n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",className:"Docs__link",href:"https://fontiran.com/%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%D9%87-%D9%81%D9%88%D9%86%D8%AA-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D8%B3%D9%86-%D8%B3%D8%B1%DB%8C%D9%81-iran-sans-%D9%BE%D9%86%D8%AC-%D9%88%D8%B2%D9%86-%D9%87%D9%85/"}," Iran Sans "),"as your font families in order to have the best user experience.")),n.a.createElement("h2",{className:"Docs__titleSecondary"},"Installation"),n.a.createElement("p",{className:"Docs__paragraph"},"Install it using Yarn:"),n.a.createElement(i.a,{language:"bash"},"yarn add react-persian-calendar-date-picker"),n.a.createElement("p",{className:"Docs__paragraph"},"Of if you prefer NPM:"),n.a.createElement(i.a,{language:"bash"},"npm i react-persian-calendar-date-picker"),n.a.createElement("h2",{className:"Docs__titleSecondary"},"Basic Import"),n.a.createElement("p",{className:"Docs__paragraph"},"After the installation, it's time to import the package in your app:"),n.a.createElement(i.a,{language:"javascript"},"import 'react-persian-calendar-date-picker/lib/DatePicker.css';\nimport DatePicker from 'react-persian-calendar-date-picker';"),n.a.createElement("p",{className:"Docs__paragraph"},"Great job! You're all set. It's time to write some code now. Learn more about ",n.a.createElement(c.a,{className:"Docs__link",to:"/docs/core-concepts"},"the core concepts"),"."))}},159:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var r=t(0),n=t.n(r),c=t(4),s=t.n(c),i=t(33),l=t.n(i);t.d(a,"a",function(){return l.a});t(160);var o=n.a.createContext({}),m=function(e){return n.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},160:function(e,a,t){var r;e.exports=(r=t(163))&&r.default||r},161:function(e,a,t){"use strict";t(34);var r=t(164),n=t(0),c=t.n(n),s=t(4),i=t.n(s),l=t(159),o=t(148),m=t.n(o),u=function(e){var a=e.version;return c.a.createElement("nav",{className:m.a.Navbar},c.a.createElement("div",{className:m.a.Navbar__titleContainer},c.a.createElement("h1",null,c.a.createElement(l.a,{className:m.a.Navbar__title,to:"/"},"react-persian-calendar-date-picker")),c.a.createElement("span",{className:m.a.Navbar__version},"v",a)),c.a.createElement("ul",{className:m.a.Navbar__list},c.a.createElement("li",null,c.a.createElement(l.a,{className:m.a.Navbar__listItem,to:"/docs/getting-started"},"Docs")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/Kiarash-Z/react-persian-calendar-date-picker",rel:"noopener noreferrer",target:"_blank",className:m.a.Navbar__listItem},"Github"))))},d=t(162),p=t.n(d),D=t(166),h=t.n(D),_=t(149),g=t.n(_),E=function(){return c.a.createElement("footer",{className:g.a.Footer},c.a.createElement(p.a,null,c.a.createElement("script",{async:!0,defer:!0,src:"https://buttons.github.io/buttons.js?"+h.a.generate()})),c.a.createElement("h1",{className:g.a.Footer__title},"react-persian-calendar-date-picker ",c.a.createElement("span",{className:g.a.Footer__copyright},"By Kiarash Zarinmehr")),c.a.createElement("div",{className:g.a.Footer__githubContainer},c.a.createElement("a",{className:"github-button",href:"https://github.com/Kiarash-Z/react-persian-calendar-date-picker","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star Kiarash-Z/react-persian-calendar-date-picker on GitHub"},"Star")))},f=function(e){var a=e.children,t=e.style;return c.a.createElement(l.b,{query:"1655818532",render:function(e){var r=e.site.siteMetadata;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{version:r.version}),c.a.createElement("main",{style:Object.assign({marginTop:"7rem"},t)},a),c.a.createElement(E,null))},data:r})};f.propTypes={children:i.a.node.isRequired};var N=t(150),v=t.n(N),k=function(){return c.a.createElement("aside",{className:v.a.DocsNav},c.a.createElement("div",{className:v.a.DocsNav__section},c.a.createElement("span",{className:v.a.DocsNav__sectionTitle},"Tutorial"),c.a.createElement("ul",{className:v.a.DocsNav__list},c.a.createElement(l.a,{to:"/docs/getting-started",className:v.a.DocsNav__listItem,activeClassName:v.a.Active},"Getting Started"),c.a.createElement(l.a,{to:"/docs/core-concepts",className:v.a.DocsNav__listItem,activeClassName:v.a.Active},"Core Concepts"),c.a.createElement(l.a,{to:"/docs",className:v.a.DocsNav__listItem},"Range Date Picker"))),c.a.createElement("div",{className:v.a.DocsNav__section},c.a.createElement("span",{className:v.a.DocsNav__sectionTitle},"API"),c.a.createElement("ul",{className:v.a.DocsNav__list},c.a.createElement(l.a,{to:"/docs",className:v.a.DocsNav__listItem},"Installation"),c.a.createElement(l.a,{to:"/docs",className:v.a.DocsNav__listItem},"Basic Date Picker"),c.a.createElement(l.a,{to:"/docs",className:v.a.DocsNav__listItem},"Range Date Picker"))))},b=t(165);function y(e){var a=e.description,t=e.lang,r=e.meta,n=e.keywords,s=e.title,i=b.data.site,l=a||i.siteMetadata.description;return c.a.createElement(p.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(r)})}y.defaultProps={lang:"en",meta:[],keywords:[],description:""},y.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired};var w=t(168),A=t.n(w),B=function(e){var a=e.children,t=e.language,r=Object(n.useRef)(null);return Object(n.useEffect)(function(){A.a.highlightElement(r.current,!1)}),c.a.createElement("pre",{style:{display:"block",margin:"1.5rem 0"}},c.a.createElement("code",{ref:r,className:"language-"+t},a.trim()))};t.d(a,"c",function(){return f}),t.d(a,"b",function(){return k}),t.d(a,"d",function(){return y}),t.d(a,"a",function(){return B})},163:function(e,a,t){"use strict";t.r(a);t(34);var r=t(0),n=t.n(r),c=t(4),s=t.n(c),i=t(55),l=t(2),o=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=o},164:function(e){e.exports={data:{site:{siteMetadata:{title:"React Persian Calendar Date Picker",version:"1.0.0"}}}}},165:function(e){e.exports={data:{site:{siteMetadata:{title:"React Persian Calendar Date Picker",description:"A lightweight, customizable, Persian date picker for React",author:"Kiarash Zarinmehr"}}}}},170:function(e,a,t){"use strict";var r=t(0),n=t.n(r),c=t(161);t(151);a.a=function(e){var a=e.title,t=e.children;return n.a.createElement(c.c,null,n.a.createElement(c.d,{title:a+" - react-persian-calendar-date-picker",keywords:[a]}),n.a.createElement("div",{className:"Docs"},n.a.createElement(c.b,null),n.a.createElement("div",{className:"Docs__content"},n.a.createElement("h1",{className:"Docs__title"},a),t)))}}}]);
//# sourceMappingURL=component---src-pages-docs-getting-started-js-f1b23117255ccd2fc273.js.map