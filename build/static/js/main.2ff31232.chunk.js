(this.webpackJsonpreact_js=this.webpackJsonpreact_js||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(8),s=a.n(r),l=(a(18),a(2)),o=(a(19),a(1));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:"Navbar"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Contacts"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"/",children:"About"})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"white":"dark"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.ToggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark mode"})]})]})]})})}function d(e){var t=Object(c.useState)("Enter your text here2"),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"dark"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){console.log("on-change"),r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"dark"},id:"mybox",rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Uppercase was clicked");var e=n.toUpperCase();r(e)},children:"click here to uperCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Uppercase was clicked");var e=n.toLowerCase();r(e)},children:"click here to lowerCase"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"dark"},children:[Object(o.jsx)("h1",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," text"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," time to read the words"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n})]})]})}var b=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:a,ToggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743"):(n("light"),document.body.style.backgroundColor="white")}}),Object(o.jsx)("div",{children:Object(o.jsx)(d,{heading:"Enter the text to analyze",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},h=a(9);s.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h.a,{children:Object(o.jsx)(b,{})})})),j()}},[[21,1,2]]]);
//# sourceMappingURL=main.2ff31232.chunk.js.map