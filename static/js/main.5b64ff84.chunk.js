(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),u=(a(22),a(5)),o=a(6),m=a(8),i=a(7),s=a(9),E=a(31),h=a(32),d=a(34),p=a(33),b=(a(24),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={items:[],isLoading:!0},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({items:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.items;return e.isLoading?l.a.createElement("p",null,"Loading......."):l.a.createElement("div",null,l.a.createElement("ul",null,t.map(function(e,t){return l.a.createElement("li",{key:t}," Name: ",e.name," => City: ",e.address.city)})))}}]),t}(n.Component)),f=a(15);function j(e){return l.a.createElement("ul",null,e.values.map(function(e,t){return l.a.createElement("li",{key:t}," ",e," || ",t," ")}))}var v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.setState({items:[].concat(Object(f.a)(a.state.items),[a.state.todoItem]),todoItem:""})},a.handleChange=function(e){a.setState({todoItem:e.target.value})},a.state={todoItem:"",items:[]},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{value:this.state.todoItem,onChange:this.handleChange}),l.a.createElement("button",null,"Add")),l.a.createElement(j,{values:this.state.items}))}}]),t}(n.Component);function g(){return l.a.createElement("h2",null,"Halaman Home")}function O(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Halaman pengguna atau users"),l.a.createElement(E.a,{to:"user/gojak"},"Gojak")," ",l.a.createElement("br",null),l.a.createElement(E.a,{to:"user/bambang"},"Bambang"))}function k(){return l.a.createElement("h2",null,"404, Halaman tidak di temukan")}function y(e){var t=e.match;return l.a.createElement("h2",null,"Selamat Datang ",t.params.jeneng)}function w(){return l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"No"),l.a.createElement("th",null,"Nama/jeneng"))),l.a.createElement("tbody",null,l.a.createElement(C,null))))}var C=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Gojak")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Bambang")))}}]),t}(l.a.Component),x=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("li",null,l.a.createElement(E.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(E.a,{to:"/users"},"Users")),l.a.createElement("li",null,l.a.createElement(E.a,{to:"/users/listtable"},"Data Table Users")),l.a.createElement("li",null,l.a.createElement(E.a,{to:"/users/apilist"},"Api Users")),l.a.createElement("li",null,l.a.createElement(E.a,{to:"/formdata"},"Form Data"))),l.a.createElement("main",null,l.a.createElement(d.a,null,l.a.createElement(p.a,{path:"/",exact:!0,component:g}),l.a.createElement(p.a,{path:"/users",exact:!0,component:O}),l.a.createElement(p.a,{path:"/user/:jeneng",exact:!0,component:y}),l.a.createElement(p.a,{path:"/users/listtable",exact:!0,component:w}),l.a.createElement(p.a,{path:"/users/apilist",exact:!0,component:b}),l.a.createElement(p.a,{path:"/formdata",exact:!0,component:v}),l.a.createElement(p.a,{component:k})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.5b64ff84.chunk.js.map