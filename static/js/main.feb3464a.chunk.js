(this["webpackJsonpfile-download"]=this["webpackJsonpfile-download"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(2),r=n.n(o),c=(n(13),n(3)),i=n(4),u=n(6),s=n(5),d=n(7),m=(n(14),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleClick=function(e){var t=null,a=new Blob([n.state.txt],{type:"application/msword"});t&&URL.revokeObjectURL(t),t=URL.createObjectURL(a);var l=window.URL.createObjectURL(a),o=document.createElement("a");o.href=l,o.download="data.doc",o.click()},n.state={txt:""},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleBlur",value:function(){}},{key:"handleChange",value:function(e){this.setState({txt:e.target.value})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Macy's file download Demo"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement("div",{className:"formContent"},l.a.createElement("textarea",{onChange:this.handleChange.bind(this),value:this.state.txt,onBlur:this.handleBlur.bind(this)}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"Button",onClick:function(t){return e.handleClick(t)}},"Download Data as Word Document"))))}}]),t}(a.Component));n(15);var h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.feb3464a.chunk.js.map