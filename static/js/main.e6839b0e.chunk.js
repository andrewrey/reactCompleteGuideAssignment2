(this.webpackJsonpassignment2=this.webpackJsonpassignment2||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),c=n.n(l),i=(n(12),n(3)),o=n(4),u=n(6),s=n(5),m=(n(13),function(e){var t=e.textInput,n=e.inputHandler;return r.a.createElement("div",{className:"inputWrap"},r.a.createElement("input",{type:"text",placeholder:"Enter Word...",onChange:n,value:t}))}),p=function(e){var t=e.input,n=e.textInputHandler,a=null;return t.length>0&&(a=r.a.createElement("div",{className:"length-outputWrap"},r.a.createElement("p",{className:"length-label"},"Value Length:"),r.a.createElement("p",{className:"length-output"},t.length))),r.a.createElement("header",null,r.a.createElement("div",{className:"animationArea"},r.a.createElement("ul",{className:"blocks"},r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null))),r.a.createElement("div",{className:"contentWrapper"},r.a.createElement("h1",null,"Assignment 2"),r.a.createElement(m,{textInput:t,inputHandler:n}),a))},d=function(e){var t=e.input,n=null;return t.length<5&&t.length>0&&(n=r.a.createElement("p",null,"Too short, minimum 5 letter word")),r.a.createElement("div",{className:"validation"},n)},h=function(e){var t=e.letter,n=e.removechar;return r.a.createElement("div",{className:"letterWrap",onClick:n},r.a.createElement("p",null,t))},E=function(e){var t=e.input,n=e.splitWord,a=e.removechar,l=null;return t.length>4&&(l=n.map((function(e){return r.a.createElement(h,{letter:e,removechar:function(){return a(e)}})}))),r.a.createElement("section",{className:"charWrap"},l)},v=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Made by Andrew \xa9 2020"))},f=function(e){var t=e.input,n=e.splitWord,a=e.removechar;return r.a.createElement("main",null,r.a.createElement(d,{input:t}),r.a.createElement(E,{splitWord:n,input:t,removechar:a}),r.a.createElement(v,null))},g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={input:"",splitWord:[]},e.textInputHandler=function(t){var n=t.target.value;e.setState((function(t){return{input:n,splitWord:e.wordSplitter(n)}}))},e.wordSplitter=function(e){return e.split("")},e.removeLetterHandler=function(t){e.setState((function(e){return{splitWord:e.splitWord.filter((function(e){return e!==t}))}})),console.log(t)},e}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{input:this.state.input,textInputHandler:this.textInputHandler}),r.a.createElement(f,{input:this.state.input,splitWord:this.state.splitWord,removechar:this.removeLetterHandler}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.e6839b0e.chunk.js.map