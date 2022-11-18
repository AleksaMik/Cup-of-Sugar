(this["webpackJsonpcup-of-sugar"]=this["webpackJsonpcup-of-sugar"]||[]).push([[0],{75:function(e,n,t){},80:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(64),s=t.n(r),i=(t(75),t(53)),o=t(23),l=t(5),j=t(67),d=t(91),u=t(93),b=t(90),O=t(65),m=t(26),h=t(27),x=t(54),g=t.n(x),f=new(function(){function e(){Object(m.a)(this,e)}return Object(h.a)(e,[{key:"getProfile",value:function(){return g()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return g()(e).exp<Date.now()/1e3}catch(n){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),p=t(6);var v,y,k,w=function(){return Object(p.jsxs)("header",{className:"flex-row px-1",children:[Object(p.jsx)("h1",{children:Object(p.jsx)(o.b,{to:"/",children:Object(p.jsx)("span",{role:"img","aria-label":"Cup of Sugar"})})}),Object(p.jsx)("nav",{children:f.loggedIn()?Object(p.jsxs)("ul",{className:"flex-row",children:[Object(p.jsx)("li",{className:"mx-1",children:Object(p.jsx)(o.b,{to:"/rentalHistory",children:"Rentals History"})}),Object(p.jsx)("li",{className:"mx-1",children:Object(p.jsx)("a",{href:"/",onClick:function(){return f.logout()},children:"Logout"})})]}):Object(p.jsxs)("ul",{className:"flex-row",children:[Object(p.jsx)("li",{className:"mx-1",children:Object(p.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(p.jsx)("li",{className:"mx-1",children:Object(p.jsx)(o.b,{to:"/login",children:"Login"})})]})})]})},N=function(){return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(w,{})})},$=t(8),_=t(14),S=t(11),I=t(87),q=t(24),R=t(92),T=(Object(R.a)(v||(v=Object(q.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Object(R.a)(y||(y=Object(q.a)(["\n  mutation addRental($products: [ID]!) {\n    addRental(rentals: $rentals) {\n      rentals {\n        _id\n        name\n        description\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))));Object(R.a)(k||(k=Object(q.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var E,D,B,C,H,J=function(){var e=Object(I.a)(T),n=Object(S.a)(e,1)[0];return Object(a.useEffect)((function(){function e(){return(e=Object(_.a)(Object($.a)().mark((function e(){var t,a,c;return Object($.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,idbPromise("cart","get");case 2:if(t=e.sent,!t.map((function(e){return e._id})).length){e.next=11;break}return e.next=7,n({variables:{rentals:rentals}});case 7:a=e.sent,c=a.data,c.addRental.rentals.forEach((function(e){idbPromise("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),5e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(p.jsx)("div",{children:Object(p.jsx)(Jumbotron,{children:Object(p.jsx)("h1",{children:"Success!"})})})},P=t(95),F=Object(R.a)(E||(E=Object(q.a)(["\n  {\n    user {\n      firstName\n      lastName\n      rentals {\n        _id\n        items {\n          _id\n          name\n          description\n          quantity\n        }\n      }\n    }\n  }\n"])));Object(R.a)(D||(D=Object(q.a)(["\n  query getRentals($category: ID) {\n    rentals(category: $category) {\n      _id\n      name\n      description\n      quantity\n      category {\n        _id\n      }\n    }\n  }\n"]))),Object(R.a)(B||(B=Object(q.a)(["\n  query getCheckout($reentals: [ID]!) {\n    checkout(rentals: $rentals) {\n      session\n    }\n  }\n"]))),Object(R.a)(C||(C=Object(q.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(R.a)(H||(H=Object(q.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])));var L=function(){var e,n=Object(P.a)(F).data;return n&&(e=n.user),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"container my-1",children:[Object(p.jsx)(o.b,{to:"/",children:"\u2190 Back to Items"}),e?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h2",{children:["Rentals History for ",e.firstName," ",e.lastName]}),e.rentals.map((function(e){return Object(p.jsx)("div",{className:"my-2",children:Object(p.jsx)("div",{className:"flex-row",children:order.rentals.map((function(e,n){var t=e._id,a=e.image,c=e.name;return Object(p.jsx)("div",{className:"card px-1 py-1",children:Object(p.jsxs)(o.b,{to:"/rentals/".concat(t),children:[Object(p.jsx)("img",{alt:c,src:"/images/".concat(a)}),Object(p.jsx)("p",{children:c})]})},n)}))})},e._id)}))]}):null]})})},U=Object(j.a)({uri:"/graphql"}),z=Object(O.a)((function(e,n){var t=n.headers,a=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},t),{},{authorization:a?"Bearer ".concat(a):""})}})),M=new d.a({link:z.concat(U),cache:new u.a});var A=function(){return Object(p.jsx)(b.a,{client:M,children:Object(p.jsx)(o.a,{children:Object(p.jsx)("div",{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/",element:Object(p.jsx)(N,{})}),Object(p.jsx)(l.a,{path:"/search",element:Object(p.jsx)(J,{})}),Object(p.jsx)(l.a,{path:"/saved",element:Object(p.jsx)(L,{})})]})})})})};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.2f7c4fdd.chunk.js.map