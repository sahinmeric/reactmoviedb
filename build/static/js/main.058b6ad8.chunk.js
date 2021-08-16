(this["webpackJsonpreact-rmdb-ts"]=this["webpackJsonpreact-rmdb-ts"]||[]).push([[0],{10:function(n,e,t){n.exports=t.p+"static/media/no_image.31f5bb1d.jpg"},20:function(n,e,t){n.exports=t.p+"static/media/react-movie-logo.5de5919a.svg"},21:function(n,e,t){n.exports=t.p+"static/media/tmdb_logo.30cd724b.svg"},25:function(n,e,t){n.exports=t.p+"static/media/search-icon.80e9d8a2.svg"},26:function(n,e,t){n.exports=t(36)},36:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(19),i=t.n(c),o=t(9),u=t(3),l=t(20),s=t.n(l),m=t(21),d=t.n(m),p=t(1),f=t(2);function v(){var n=Object(p.a)(["\n  width: 100px;\n\n  @media screen and (max-width: 500px) {\n    width: 80px;\n  }\n"]);return v=function(){return n},n}function b(){var n=Object(p.a)(["\n  width: 200px;\n\n  @media screen and (max-width: 500px) {\n    width: 150px;\n  }\n"]);return b=function(){return n},n}function h(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: var(--maxWidth);\n  padding: 20px 0;\n  margin: 0 auto;\n"]);return h=function(){return n},n}function g(){var n=Object(p.a)(["\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]);return g=function(){return n},n}var x=f.b.div(g()),E=f.b.div(h()),w=f.b.img(b()),j=f.b.img(v()),y=function(){return r.a.createElement(x,null,r.a.createElement(E,null,r.a.createElement(o.b,{to:"/"},r.a.createElement(w,{src:s.a,alt:"rmdb-logo"})),r.a.createElement(j,{src:d.a,alt:"tmdb-logo"})))},O="https://api.themoviedb.org/3/",k="eee50fdd7bae975a0f77262f0c69ddfd",S="".concat(O,"search/movie?api_key=").concat(k,"&language=en-US&query="),_="".concat(O,"movie/popular?api_key=").concat(k,"&language=en-US"),T="".concat(O,"authentication/token/new?api_key=").concat(k),G="".concat(O,"authentication/token/validate_with_login?api_key=").concat(k),I="".concat(O,"authentication/session/new?api_key=").concat(k),z="http://image.tmdb.org/t/p/";function M(){var n=Object(p.a)(["\n  z-index: 100;\n  max-width: 700px;\n  position: absolute;\n  bottom: 40px;\n  margin-right: 20px;\n  min-height: 100px;\n  color: var(--white);\n\n  h1 {\n    font-size: var(--fontSuperBig);\n\n    @media screen and (max-width: 720px) {\n      font-size: var(--fontBig);\n    }\n  }\n\n  p {\n    font-size: var(--fontMed);\n\n    @media screen and (max-width: 720px) {\n      font-size: var(--fontSmall);\n    }\n  }\n\n  @media screen and (max-width: 720px) {\n    max-width: 100%;\n  }\n"]);return M=function(){return n},n}function N(){var n=Object(p.a)(["\n  padding: 20px;\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n"]);return N=function(){return n},n}function B(){var n=Object(p.a)(["\n  background: linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0) 41%,\n      rgba(0, 0, 0, 0.65) 100%\n    ),\n    url(","), var(--darkGrey);\n  background-size: 100%, cover;\n  background-position: center;\n  height: 600px;\n  position: relative;\n  animation: animateHeroImage 1s;\n\n  @keyframes animateHeroImage {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return B=function(){return n},n}var R=f.b.div(B(),(function(n){return n.image})),W=f.b.div(N()),J=f.b.div(M()),C=function(n){var e=n.image,t=n.title,a=n.text;return r.a.createElement(R,{image:e},r.a.createElement(W,null,r.a.createElement(J,null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))))};function U(){var n=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 2rem;\n"]);return U=function(){return n},n}function q(){var n=Object(p.a)(["\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n  padding: 0 20px;\n\n  h1 {\n    color: var(--medGrey);\n\n    @media screen and (max-width: 768px) {\n      font-size: var(--fontBig);\n    }\n  }\n"]);return q=function(){return n},n}var F=f.b.div(q()),A=f.b.div(U()),D=function(n){var e=n.header,t=n.children;return r.a.createElement(F,null,r.a.createElement("h1",null,e),r.a.createElement(A,null,t))};function L(){var n=Object(p.a)(["\n  width: 100%;\n  max-width: 720px;\n  transition: all 0.3s;\n  object-fit: cover;\n  border-radius: 20px;\n  animation: animateThumb 0.5s;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  @keyframes animateThumb {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return L=function(){return n},n}var P=f.b.img(L()),H=function(n){var e=n.image,t=n.movieId,a=n.clickable;return r.a.createElement("div",null,a?r.a.createElement(o.b,{to:"/".concat(t)},r.a.createElement(P,{src:e,alt:"movie-thumb"})):r.a.createElement(P,{src:e,alt:"movie-thumb"}))};function K(){var n=Object(p.a)(["\n  border: 5px solid var(--lightGrey);\n  border-top: 5px solid var(--medGrey);\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin 0.8s linear infinite;\n  margin: 20px auto;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return K=function(){return n},n}var Q=f.b.div(K()),V=t(5),X=t(25),Y=t.n(X);function Z(){var n=Object(p.a)(["\n  position: relative;\n  max-width: var(--maxWidth);\n  width: 100%;\n  height: 55px;\n  background: var(--medGrey);\n  margin: 0 auto;\n  border-radius: 40px;\n  color: var(--white);\n\n  img {\n    position: absolute;\n    left: 15px;\n    top: 14px;\n    width: 30px;\n  }\n\n  input {\n    font-size: var(--fontBig);\n    position: absolute;\n    left: 0;\n    margin: 8px 0;\n    padding: 0 0 0 60px;\n    border: 0;\n    width: 95%;\n    background: transparent;\n    height: 40px;\n    color: var(--white);\n\n    :focus {\n      outline: none;\n    }\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]);return $=function(){return n},n}var nn=f.b.div($()),en=f.b.div(Z()),tn=function(n){var e=n.setSearchTerm,t=Object(a.useState)(""),c=Object(V.a)(t,2),i=c[0],o=c[1],u=Object(a.useRef)(!0);return Object(a.useEffect)((function(){if(!u.current){var n=setTimeout((function(){e(i)}),500);return function(){return clearTimeout(n)}}u.current=!1}),[e,i]),r.a.createElement(nn,null,r.a.createElement(en,null,r.a.createElement("img",{src:Y.a,alt:"search-icon"}),r.a.createElement("input",{type:"text",placeholder:"Search Movie",onChange:function(n){return o(n.currentTarget.value)},value:i})))};function an(){var n=Object(p.a)(["\n  display: block;\n  background: var(--darkGrey);\n  width: 25%;\n  min-width: 200px;\n  height: 60px;\n  border-radius: 30px;\n  color: var(--white);\n  border: 0;\n  font-size: var(--fontBig);\n  margin: 20px auto;\n  transition: all 0.3s;\n  outline: none;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.8;\n  }\n"]);return an=function(){return n},n}var rn=f.b.button(an()),cn=function(n){var e=n.text,t=n.callback;return r.a.createElement(rn,{type:"button",onClick:t},e)},on=t(4),un=t.n(on),ln=t(14),sn=t(6),mn=t(7),dn={method:"POST",headers:{"Content-Type":"application/json"}},pn={fetchMovies:function(){var n=Object(mn.a)(un.a.mark((function n(e,t){var a;return un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e?"".concat(S).concat(e,"&page=").concat(t):"".concat(_,"&page=").concat(t),n.next=3,fetch(a);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),fetchMovie:function(){var n=Object(mn.a)(un.a.mark((function n(e){var t;return un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(O,"movie/").concat(e,"?api_key=").concat(k),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fetchCredits:function(){var n=Object(mn.a)(un.a.mark((function n(e){var t;return un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(O,"movie/").concat(e,"/credits?api_key=").concat(k),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getRequestToken:function(){var n=Object(mn.a)(un.a.mark((function n(){var e;return un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(T);case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,n.abrupt("return",e.request_token);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),authenticate:function(){var n=Object(mn.a)(un.a.mark((function n(e,t,a){var r,c;return un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={username:t,password:a,request_token:e},n.next=3,fetch(G,Object(sn.a)(Object(sn.a)({},dn),{},{body:JSON.stringify(r)}));case 3:return n.next=5,n.sent.json();case 5:if(!n.sent.success){n.next=13;break}return n.next=9,fetch(I,Object(sn.a)(Object(sn.a)({},dn),{},{body:JSON.stringify({request_token:e})}));case 9:return n.next=11,n.sent.json();case 11:return c=n.sent,n.abrupt("return",c);case 13:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}()},fn=function(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n)},vn=function(n){var e=sessionStorage.getItem(n);return e&&JSON.parse(e)},bn={page:0,results:[],total_pages:0,total_results:0},hn=t(10),gn=t.n(hn),xn=function(){var n=function(){var n=Object(a.useState)(""),e=Object(V.a)(n,2),t=e[0],r=e[1],c=Object(a.useState)(bn),i=Object(V.a)(c,2),o=i[0],u=i[1],l=Object(a.useState)(!1),s=Object(V.a)(l,2),m=s[0],d=s[1],p=Object(a.useState)(!1),f=Object(V.a)(p,2),v=f[0],b=f[1],h=Object(a.useState)(!1),g=Object(V.a)(h,2),x=g[0],E=g[1],w=function(){var n=Object(mn.a)(un.a.mark((function n(e){var t,a,r=arguments;return un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:"",n.prev=1,b(!1),d(!0),n.next=6,pn.fetchMovies(t,e);case 6:a=n.sent,u((function(n){return Object(sn.a)(Object(sn.a)({},a),{},{results:e>1?[].concat(Object(ln.a)(n.results),Object(ln.a)(a.results)):Object(ln.a)(a.results)})})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),b(!0);case 13:d(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(!t){var n=vn("homeState");if(n)return console.log("Grabbing from sessionStorage"),void u(n)}console.log("Grabbing from API"),u(bn),w(1,t)}),[t]),Object(a.useEffect)((function(){x&&(w(o.page+1,t),E(!1))}),[x,t,o.page]),Object(a.useEffect)((function(){t||sessionStorage.setItem("homeState",JSON.stringify(o))}),[t,o]),{state:o,loading:m,error:v,searchTerm:t,setSearchTerm:r,setIsLoadingMore:E}}(),e=n.state,t=n.loading,c=n.error,i=n.searchTerm,o=n.setSearchTerm,u=n.setIsLoadingMore;return c?r.a.createElement("div",null,"Something went wrong ..."):r.a.createElement(r.a.Fragment,null,!i&&e.results[0]?r.a.createElement(C,{image:"".concat(z).concat("w1280").concat(e.results[0].backdrop_path),title:e.results[0].original_title,text:e.results[0].overview}):null,r.a.createElement(tn,{setSearchTerm:o}),r.a.createElement(D,{header:i?"Search Result":"Popular Movies"},e.results.map((function(n){return r.a.createElement(H,{key:n.id,clickable:!0,image:n.poster_path?z+"w780"+n.poster_path:gn.a,movieId:n.id})}))),t&&r.a.createElement(Q,null),e.page<e.total_pages&&!t&&r.a.createElement(cn,{text:"Load More",callback:function(){return u(!0)}}))};function En(){var n=Object(p.a)(["\n  display: flex;\n  width: 100%;\n  max-width: var(--maxWidth);\n  padding: 0 20px;\n\n  span {\n    font-size: var(--fontMed);\n    color: var(--white);\n    padding-right: 10px;\n\n    @media screen and (max-width: 768px) {\n      font-size: var(--fontSmall);\n    }\n  }\n"]);return En=function(){return n},n}function wn(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 70px;\n  background: var(--medGrey);\n  color: var(--white);\n"]);return wn=function(){return n},n}var jn=f.b.div(wn()),yn=f.b.div(En()),On=function(n){var e=n.movieTitle;return r.a.createElement(jn,null,r.a.createElement(yn,null,r.a.createElement(o.b,{to:"/"},r.a.createElement("span",null,"Home")),r.a.createElement("span",null,"|"),r.a.createElement("span",null,e)))};function kn(){var n=Object(p.a)(["\n  width: 100%;\n  padding: 20px 40px;\n  color: var(--white);\n  overflow: hidden;\n\n  .rating-directors {\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .score {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 35px;\n    height: 35px;\n    background: #fff;\n    color: #000;\n    font-weight: 800;\n    border-radius: 50%;\n    margin: 0;\n  }\n\n  .director {\n    margin: 0 0 0 40px;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  h1 {\n    @media screen and (max-width: 768px) {\n      font-size: var(--fontBig);\n    }\n  }\n"]);return kn=function(){return n},n}function Sn(){var n=Object(p.a)(["\n  display: flex;\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 20px;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    max-height: none;\n  }\n"]);return Sn=function(){return n},n}function _n(){var n=Object(p.a)(["\n  background: ",";\n  background-size: cover;\n  background-position: center;\n  padding: 40px 20px;\n  animation: animateMovieInfo 1s;\n\n  @keyframes animatedMovieInfo {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return _n=function(){return n},n}var Tn=f.b.div(_n(),(function(n){var e=n.backdrop;return e?"url(".concat(z).concat("w1280").concat(e,")"):"#000"})),Gn=f.b.div(Sn()),In=f.b.div(kn()),zn=function(n){var e=n.movie;return r.a.createElement(Tn,{backdrop:e.backdrop_path},r.a.createElement(Gn,null,r.a.createElement(H,{image:e.poster_path?"".concat(z).concat("w780").concat(e.poster_path):gn.a,clickable:!1}),r.a.createElement(In,null,r.a.createElement("h1",null,e.title),r.a.createElement("h3",null,"PLOT"),r.a.createElement("p",null,e.overview),r.a.createElement("div",{className:"rating-directors"},r.a.createElement("div",null,r.a.createElement("h3",null,"RATING"),r.a.createElement("div",{className:"score"},e.vote_average)),r.a.createElement("div",{className:"director"},r.a.createElement("h3",null,"DIRECTOR",e.directors.length>1?"S":""),e.directors.map((function(n){return r.a.createElement("p",{key:n.credit_id},n.name)})))))))};function Mn(){var n=Object(p.a)(["\n  display: flex;\n  max-width: var(--maxWidth);\n  width: 100%;\n  margin: 0 auto;\n\n  .column {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: var(--medGrey);\n    border-radius: 20px;\n    margin: 0 20px;\n    flex: 1;\n\n    :first-child {\n      margin-left: 0;\n    }\n\n    :last-child {\n      margin-right: 0;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    display: block;\n\n    .column {\n      margin: 20px 0;\n    }\n  }\n"]);return Mn=function(){return n},n}function Nn(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  min-height: 100px;\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]);return Nn=function(){return n},n}var Bn=f.b.div(Nn()),Rn=f.b.div(Mn()),Wn=function(n){var e=n.time,t=n.budget,a=n.revenue;return r.a.createElement(Bn,null,r.a.createElement(Rn,null,r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"Running time: ",function(n){var e=Math.floor(n/60),t=n%60;return"".concat(e,"h ").concat(t,"m")}(e))),r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"Budget: ",fn(t))),r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"Revenue: ",fn(a)))))};function Jn(){var n=Object(p.a)(["\n  display: block;\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 15px;\n"]);return Jn=function(){return n},n}function Cn(){var n=Object(p.a)(["\n  color: var(--white);\n  background: var(--darkGrey);\n  border-radius: 20px;\n  padding: 5px;\n  text-align: center;\n\n  h3 {\n    margin: 10px 0 0 0;\n  }\n\n  p {\n    margin: 5px 0;\n  }\n"]);return Cn=function(){return n},n}var Un=f.b.div(Cn()),qn=f.b.img(Jn()),Fn=function(n){var e=n.name,t=n.character,a=n.imageUrl;return r.a.createElement(Un,null,r.a.createElement(qn,{src:a,alt:"actor-thumb"}),r.a.createElement("h3",null,e),r.a.createElement("p",null,t))},An=function(){var n=function(n){var e=Object(a.useState)({}),t=Object(V.a)(e,2),r=t[0],c=t[1],i=Object(a.useState)(!0),o=Object(V.a)(i,2),u=o[0],l=o[1],s=Object(a.useState)(!1),m=Object(V.a)(s,2),d=m[0],p=m[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(mn.a)(un.a.mark((function e(){var t,a,r;return un.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),p(!1),e.next=5,pn.fetchMovie(n);case 5:return t=e.sent,e.next=8,pn.fetchCredits(n);case 8:a=e.sent,r=a.crew.filter((function(n){return"Director"===n.job})),c(Object(sn.a)(Object(sn.a)({},t),{},{actors:a.cast,directors:r})),l(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),p(!0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),t=vn(n.toString());if(t)return c(t),void l(!1);e()}),[n]),Object(a.useEffect)((function(){sessionStorage.setItem(n.toString(),JSON.stringify(r))}),[n,r]),{state:r,loading:u,error:d}}(Object(u.h)().movieId),e=n.state,t=n.loading,c=n.error;return t?r.a.createElement(Q,null):c?r.a.createElement("div",null,"Something went wrong..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(On,{movieTitle:e.original_title}),r.a.createElement(zn,{movie:e}),r.a.createElement(Wn,{time:e.runtime,budget:e.budget,revenue:e.revenue}),r.a.createElement(D,{header:"Actors"},e.actors.map((function(n){return r.a.createElement(Fn,{key:n.credit_id,name:n.name,character:n.character,imageUrl:n.profile_path?"".concat(z).concat("w780").concat(n.profile_path):gn.a})}))))},Dn=function(){return r.a.createElement("div",null,"NotFound")};function Ln(){var n=Object(p.a)(["\n  :root {\n    --maxWidth: 1280px;\n    --white: #fff;\n    --lightGrey: #eee;\n    --medGrey: #353535;\n    --darkGrey: #1c1c1c;\n    --fontSuperBig: 2.5rem;\n    --fontBig: 1.5rem;\n    --fontMed: 1.2rem;\n    --fontSmall: 1rem;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Abel', sans-serif;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    \n    h1 {\n      font-size: 2rem;\n      font-weight: 600;\n      color: var(--white);\n    }\n\n    h3 {\n      font-size: 1.1rem;\n      font-weight: 600;\n    }\n\n    p {\n      font-size: 1rem;\n      color: var(--white);\n    }\n  }\n"]);return Ln=function(){return n},n}var Pn=Object(f.a)(Ln()),Hn=function(){return r.a.createElement(o.a,null,r.a.createElement(y,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",element:r.a.createElement(xn,null)}),r.a.createElement(u.a,{path:"/:movieId",element:r.a.createElement(An,null)}),r.a.createElement(u.a,{path:"/*",element:r.a.createElement(Dn,null)})),r.a.createElement(Pn,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Hn,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.058b6ad8.chunk.js.map