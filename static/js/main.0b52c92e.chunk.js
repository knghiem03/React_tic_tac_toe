(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(2),s=a(3),o=a(7),l=a(4),i=a(8),c=a(0),u=a.n(c),m=a(5),h=a.n(m),d=(a(15),function(e){return u.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}),v=function(e){var t=function(t){return u.a.createElement(d,{value:e.squares[t],onClick:function(){return e.onClick(t)}})};return u.a.createElement("div",null,u.a.createElement("div",{className:"board-row"},t(0),t(1),t(2)),u.a.createElement("div",{className:"board-row"},t(3),t(4),t(5)),u.a.createElement("div",{className:"board-row"},t(6),t(7),t(8)))},f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,gridHistory:[{col:null,row:null}],isMoveButtonBold:!1},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice(),n=this.state.history.slice(0,this.state.stepNumber+1),r=n[n.length-1],s=e%3,o=Math.floor(e/3);r.col=s,r.row=o,b(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,gridHistory:n.concat([{col:r.col,row:r.row}]),isMoveButtonBold:!1}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0,isMoveButtonBold:!0}),console.log("I am at line 88")}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],r=this.state.gridHistory,s=b(n.squares),o=a.map(function(e,a){var n=a?"Go to move #"+a+" ("+r[a-1].col+","+r[a-1].row+")":"Go to game start";return u.a.createElement("li",{key:a},u.a.createElement("button",{style:{color:t.state.isMoveButtonBold?"red":"blue"},onClick:function(){return t.jumpTo(a)}},n))});return e=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"X":"O"),u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement(v,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null,e),u.a.createElement("ol",null,o)))}}]),t}(c.Component);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(n.a)(t[a],3),s=r[0],o=r[1],l=r[2];if(e[s]&&e[s]===e[o]&&e[s]===e[l])return e[s]}return null}h.a.render(u.a.createElement(f,null),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,2,1]]]);
//# sourceMappingURL=main.0b52c92e.chunk.js.map