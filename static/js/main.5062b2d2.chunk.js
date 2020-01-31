(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(n,e,t){n.exports=t(29)},28:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),u=t(17),i=t(3),l=t(4),m=t(6),s=t(5),f=t(7),b=t(1),d=t(2),v=t(12),h=t.n(v);function p(){var n=Object(b.a)(["\n  font-size: 2rem;\n  width: 40rem;\n  margin-bottom: 3rem;\n  margin-top: 0.4rem;\n  padding: 0.8rem 1rem 0.6rem;\n  border-radius: 0.4rem;\n"]);return p=function(){return n},n}function g(){var n=Object(b.a)(["\n  font-size: 2rem;\n  cursor: pointer;\n"]);return g=function(){return n},n}var O=d.a.label(g()),j=d.a.input(p());var y=function(n){var e=n.value,t=n.onChangeFilter;return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null,"Find contacts by name",a.a.createElement(j,{type:"text",value:e,onChange:function(n){var e=n.target.value;return t(e)}})))};function C(){var n=Object(b.a)(["\n  margin: 8rem;\n  max-width: 50rem;\n"]);return C=function(){return n},n}var x=d.a.div(C()),E=function(n){var e=n.children;return a.a.createElement(x,null,e)},w=t(16);function k(){var n=Object(b.a)(["\n  display: block;\n  font-size: 2rem;\n  margin: 0 auto;\n  max-width: 30rem;\n  padding: 1rem 6rem;\n  border-radius: 2rem;\n  background-color: snow;\n\n  &:hover,\n  &:focus {\n    background-color: #40c965;\n    color: snow;\n    border-color: #7a7a7a;\n    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);\n    outline: none;\n  }\n\n  &:active {\n    background-color: green;\n  }\n"]);return k=function(){return n},n}function S(){var n=Object(b.a)(["\n  font-size: 2rem;\n  width: 36rem;\n  margin-bottom: 2rem;\n  padding: 0.8rem 1rem 0.6rem;\n  border-radius: 0.4rem;\n"]);return S=function(){return n},n}function z(){var n=Object(b.a)(["\n  font-size: 2.6rem;\n  cursor: pointer;\n"]);return z=function(){return n},n}function A(){var n=Object(b.a)(["\n  margin-bottom: 5rem;\n  max-width: 44rem;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);\n  padding: 2.4rem 3rem;\n  display: flex;\n  flex-direction: column;\n"]);return A=function(){return n},n}var F=d.a.form(A()),I=d.a.label(z()),N=d.a.input(S()),D=d.a.button(k()),J=function(n){function e(){var n,t;Object(i.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(m.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(a)))).state={name:"",number:""},t.handleSubmit=function(n){n.preventDefault();var e=t.state,r=e.name,a=e.number;(0,t.props.onAddContact)(r,a),t.setState({name:"",number:""})},t.handleInputChange=function(n){var e=n.target,r=e.value,a=e.name;t.setState(Object(w.a)({},a,r))},t}return Object(f.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){var n=this.state,e=n.name,t=n.number;return a.a.createElement(F,{onSubmit:this.handleSubmit},a.a.createElement(I,null,"Name",a.a.createElement(N,{type:"text",required:!0,name:"name",value:e,onChange:this.handleInputChange})),a.a.createElement(I,null,"Number",a.a.createElement(N,{type:"tel",required:!0,name:"number",value:t,onChange:this.handleInputChange})),a.a.createElement(D,{type:"submit"},"Add contact"))}}]),e}(r.Component);function R(){var n=Object(b.a)(["\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  font-size: 1.8rem;\n  padding: 0.2rem 2rem;\n  border-radius: 2rem;\n  background-color: snow;\n\n  &:hover,\n  &:focus {\n    background-color: #40c965;\n    color: snow;\n    border-color: #7a7a7a;\n    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);\n    outline: none;\n  }\n\n  &:active {\n    background-color: green;\n  }\n"]);return R=function(){return n},n}function q(){var n=Object(b.a)(["\n  position: relative;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  list-style-type: disc;\n\n  &:last-of-type {\n    margin-bottom: none;\n  }\n"]);return q=function(){return n},n}var L=d.a.li(q()),T=d.a.button(R());var V=function(n){var e=n.name,t=n.number,r=n.onRemove;return a.a.createElement(L,null,e,": ",t,a.a.createElement(T,{type:"button",onClick:r},"Delete"))};function H(){var n=Object(b.a)(["\n  margin-left: 5rem;\n  margin-bottom: 5rem;\n"]);return H=function(){return n},n}var M=d.a.ul(H());var P=function(n){var e=n.contacts,t=n.onRemoveContact;return a.a.createElement(M,null,e.map((function(n){var e=n.id,r=n.name,o=n.number;return a.a.createElement(V,{key:e,name:r,number:o,onRemove:function(){return t(e)}})})))};t(28);function U(){var n=Object(b.a)(["\n  font-size: 4rem;\n  margin-bottom: 3rem;\n"]);return U=function(){return n},n}function $(){var n=Object(b.a)(["\n  font-size: 3rem;\n"]);return $=function(){return n},n}function B(){var n=Object(b.a)(["\n  font-size: 4rem;\n  margin-bottom: 3rem;\n"]);return B=function(){return n},n}var G=d.a.h1(B()),K=d.a.p($()),Q=d.a.h2(U()),W=function(n){function e(){var n,t;Object(i.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(m.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(a)))).state={contacts:[],filter:""},t.addContact=function(n,e){if(t.state.contacts.find((function(e){return n===e.name})))return alert("".concat(n," is already in contacts"));if(!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g.test(e))return alert("Hey! This is not a real number :)");var r={id:h()(),name:n,number:e};t.setState((function(n){return{contacts:[].concat(Object(u.a)(n.contacts),[r])}}))},t.removeContact=function(n){t.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==n}))}}))},t.changeFilter=function(n){t.setState({filter:n})},t.getVisibleContacts=function(){var n=t.state,e=n.contacts,r=n.filter;return e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}))},t}return Object(f.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts");n&&this.setState({contacts:JSON.parse(n)})}},{key:"componentDidUpdate",value:function(n,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var n=this.state,e=n.contacts,t=n.filter,r=this.getVisibleContacts();return a.a.createElement(E,null,a.a.createElement(G,null,"Phonebook"),a.a.createElement(J,{onAddContact:this.addContact}),a.a.createElement(Q,null,"Contacts"),e.length>=2&&a.a.createElement(y,{value:t,onChangeFilter:this.changeFilter}),r.length>0?a.a.createElement(P,{contacts:r,onRemoveContact:this.removeContact}):0===e.length?a.a.createElement(K,null,"There are no contacts. Add some :)"):a.a.createElement(K,null,"No contacts found :("))}}]),e}(r.Component);c.a.render(a.a.createElement(W,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5062b2d2.chunk.js.map