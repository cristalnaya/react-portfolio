(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),i=a(6),o=a(7),s=a(10),m=a(8),u=a(9),p=a(3),h=a(24),d=a(22),g=a.n(d),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleArrowClick",value:function(e){g()(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.d,{fluid:!0,className:"text-center flex-center w-responsive mx-auto text-white",style:{fontFamily:"'Roboto Mono', monospace"}},r.a.createElement(p.m,{className:"mr-0 ml-0"},r.a.createElement(p.b,{className:"text-center pl-0 pr-0"},r.a.createElement(p.f,{className:"",style:{backgroundColor:"rgba(0,0,0,0.4)"}},r.a.createElement(p.a,{type:"tada"},r.a.createElement("h1",{className:"h1-responsive display"},"Radostina Dimitrova")),r.a.createElement("hr",{className:"my-2",color:"white"}),r.a.createElement("h4",{className:"role pb-4 h4-responsive"},"Front-End Web Developer"),r.a.createElement(p.m,{className:"social-icons"},r.a.createElement(p.b,null,r.a.createElement(h.SocialIcon,{className:"social-icons",url:"https://www.linkedin.com/in/radostina-dimitrova",target:"_blank",rel:"noopener noreferrer"})),r.a.createElement(p.b,null,r.a.createElement(h.SocialIcon,{className:"social-icons",url:"https://github.com/cristalnaya",target:"_blank",rel:"noopener noreferrer"})),r.a.createElement(p.b,null,r.a.createElement(h.SocialIcon,{className:"social-icons",url:"https://codepen.io/dashboard/",target:"_blank",rel:"noopener noreferrer"})))),r.a.createElement("span",{onClick:function(){return e.handleArrowClick("#about")}},r.a.createElement(p.e,{icon:"angle-down",className:"arrow"})))))}}]),t}(n.Component),f=a(21),E=a(107),v=a(25),y=a.n(v),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={collapse:!1,isWideEnough:!1},a.onClick=a.onClick.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onClick",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(p.i,{className:"font-weight-bolder h6-responsive",color:"elegant-color",fixed:"top",dark:!0,expand:"md",scrolling:!0,transparent:!0},r.a.createElement(p.j,{className:"flex-center hoverable h6-responsive"},r.a.createElement("a",{href:"https://github.com/cristalnaya/react-portfolio",className:"text-white waves-effect waves-light repo-link",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p.e,{fab:!0,icon:"github-alt"})," Repo")),!this.state.isWideEnough&&r.a.createElement(p.l,{onClick:this.onClick}),r.a.createElement(p.c,{isOpen:this.state.collapse,navbar:!0},r.a.createElement(p.k,{right:!0},r.a.createElement(p.h,{className:"p-2 hoverable",active:!0},r.a.createElement(y.a,{to:"#home",className:"nav-link"},"Home")),r.a.createElement(p.h,{className:"p-2 hoverable"},r.a.createElement(y.a,{to:"#about-component",className:"nav-link"},"About")),r.a.createElement(p.h,{className:"p-2 hoverable"},r.a.createElement(y.a,{to:"#latest-work",className:"nav-link"},"Latest Work")))))))}}]),t}(r.a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.m,{id:"home",className:"h-100 w-responsive flex-center mx-auto text-white"},r.a.createElement(k,null),r.a.createElement(b,null))}}]),t}(n.Component),j=function(e){var t=e.image;return r.a.createElement(p.b,{md:"4",style:{paddingBottom:"25px"}},r.a.createElement(p.n,{hover:!0,zoom:!0},r.a.createElement("img",{className:"img-fluid",src:t.src,alt:t.alt,title:t.title}),r.a.createElement("a",{href:t.projectUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p.g,{className:"flex-center"},r.a.createElement("p",{className:"white-text text-capitalize",style:{backgroundColor:"rgba(0,0,0,0.7)",padding:"5px",textAlign:"center"}},t.title)))))},x=function(e){var t=e.images.map(function(e,t){return r.a.createElement(j,{key:t,image:e})});return r.a.createElement("div",{id:"latest-work",className:"text-white"},r.a.createElement(p.d,{fluid:!0,className:"projects-container w-responsive text-center mx-auto flex-center flex-column h-auto",style:{color:"#fff"}},r.a.createElement("h3",{className:"work-header text-center pb-sm-3 pt-sm-3"},"Latest Work"),r.a.createElement(p.m,null,t)))},N=50;var O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},a.checkVisibility=function(){window.scrollY>a.props.distance?a.setState({visible:!0}):a.setState({visible:!1})},a.onScroll=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this,n=null,r=null,l=function(){e.apply(a,r),n=null};return function(){n||(r=arguments,n=setTimeout(l,t))}}(a.checkVisibility,N),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.checkVisibility(),window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"render",value:function(){var e=this.state.visible,t=this.props.children,a={opacity:e?1:0,transition:"200ms ease-in-out"};return r.a.createElement("div",{style:a},t)}}]),t}(n.Component);O.defaultProps={distance:50};var S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-copyright text-center py-3 elegant-color text-white"},r.a.createElement(p.d,{fluid:!0},r.a.createElement("p",null,"Designed by Radostina Dimitrova | \xa9 ",(new Date).getFullYear()," Copyright")))}}]),t}(n.Component),C=a(44),A=a.n(C),J={transition:"all 1.5s",padding:"0 20px 20px"},R=function(e){var t=e.icon;return r.a.createElement("div",{style:J},r.a.createElement("img",{className:"skill-type",src:t.imgSrc,alt:t.alt,title:t.title}))},M=function(e){var t=e.icons.map(function(e,t){return r.a.createElement(R,{key:t,icon:e})});return r.a.createElement(p.d,{fluid:!0,id:"skills",className:"text-center flex-center flex-column text-white mx-auto pb-sm-1 pt-sm-1"},r.a.createElement("h3",{className:"text-center skill-header"},"Some of my Skills"),r.a.createElement("div",{className:"skills-wrapper flex-row flex-center flex-wrap w-responsive"},t))},U={color:"#fff",fontSize:"1.2rem",lineHeight:"1.5"},W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.d,{fluid:!0,className:"text-center flex-center flex-column mx-auto pb-sm-1 pt-sm-1",id:"about",style:U},r.a.createElement(p.m,{className:"mr-0 ml-0 w-responsive"},r.a.createElement(p.b,{className:"text-center pl-0 pr-0"},r.a.createElement("h3",{className:"about-header text-center pb-sm-3 pt-sm-3"},"About"),r.a.createElement("div",{className:"about-container"},r.a.createElement("p",{className:"mx-auto text-center text-sm-center about-text pb-sm-3 pt-sm-3"},"Loves JavaScript and learning new technologies. ",r.a.createElement("br",null)," Travel enthusiast, healthy food addicted. Games and music maniac. ",r.a.createElement("br",null)," (\uff61\u25d5\u203f\u25d5\uff61)")))))}}]),t}(n.Component),I=[{id:1,src:"./img/arcade-game.png",alt:"arcade game",title:"JS Arcade Game",projectUrl:"https://github.com/cristalnaya/frontend-nanodegree-arcade-game"},{id:2,src:"./img/memory-game.png",alt:"memory game",title:"JS Memory Game",projectUrl:"https://github.com/cristalnaya/project-memory-game"},{id:5,src:"./img/restaurant-reviews.png",alt:"Restaurant Reviews",title:"JS Restaurant Reviews",projectUrl:"https://github.com/cristalnaya/fend-restaurant-stage-1"},{id:3,src:"./img/myreads.png",alt:"MyReads",title:"React My Reads",projectUrl:"https://github.com/cristalnaya/reactnd-project-myreads"},{id:4,src:"./img/neighborhood-map.png",alt:"Neighborhood Map",title:"React Neighborhood Map",projectUrl:"https://github.com/cristalnaya/react-neighbourhood-map"}],L=[{id:1,imgSrc:"./img/html5.png",alt:"html5",title:"HTML5"},{id:2,imgSrc:"./img/css3.png",alt:"css3",title:"CSS3"},{id:3,imgSrc:"./img/js.png",alt:"JavaScript",title:"JavaScript"},{id:4,imgSrc:"./img/react.png",alt:"React",title:"React"},{id:5,imgSrc:"./img/git.png",alt:"GIT",title:"GIT"},{id:6,imgSrc:"./img/ajax.png",alt:"AJAX",title:"AJAX"},{id:7,imgSrc:"./img/jest.png",alt:"JEST",title:"JEST"},{id:8,imgSrc:"./img/jasmine.png",alt:"Jasmine",title:"Jasmine"},{id:9,imgSrc:"./img/sass.png",alt:"Sass",title:"Sass"},{id:10,imgSrc:"./img/jquery.png",alt:"jQuery",title:"jQuery"}],T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleArrowClick",value:function(e){g()(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.d,{fluid:!0,id:"about-component",className:"text-white flex-center flex-column h-auto pb-sm-3 pt-sm-3"},r.a.createElement(p.m,{className:""},r.a.createElement(p.b,{sm:"4",className:"about-col"},r.a.createElement(W,null)),r.a.createElement(p.b,{sm:"8",className:"skills-col pb-sm-3 pt-sm-3"},r.a.createElement(M,{icons:L}))),r.a.createElement(p.m,{className:"arrow-row"},r.a.createElement("span",{className:"arrow pb-sm-3 pt-sm-3",onClick:function(){return e.handleArrowClick("#latest-work")}},r.a.createElement(p.e,{icon:"angle-down",className:"arrow"}))))}}]),t}(n.Component),D=(a(99),{default:"#f3c1c6",green:"#05a19c",pink:"#d698b9",mustard:"#fdd043",orange:"#ffba90",darkGreen:"#004a2f",grass:"#a7d129",purple:"#6f0765"}),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={colors:D.default},a.interval=setInterval(function(){var e=D[Object.keys(D)[Math.floor(Math.random()*Object.keys(D).length)]];a.setState(function(){return{colors:e}})},3e3),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"app",style:{backgroundColor:this.state.colors,height:"100vh"}},r.a.createElement(O,{distance:20},r.a.createElement(A.a,{items:[{label:"Latest Work",id:"latest-work",icon:'<img src="https://i.imgur.com/U4OhEvQ.png" alt="Projects" style="margin-top: 2px;" />'},{label:"About me",id:"about",icon:'<img src="https://i.imgur.com/SFAKn3i.png" alt="User" style="margin-top: 2px;" />'},{label:"Home",id:"home",icon:'<img src="https://i.imgur.com/JN2i07H.png" alt="Home" style="margin-top: 2px;" />'}]})),r.a.createElement(w,null),r.a.createElement(T,null),r.a.createElement(x,{images:I}),r.a.createElement(S,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(100),a(101),a(102);c.a.render(r.a.createElement(E.a,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,a){e.exports=a(103)},99:function(e,t,a){}},[[45,1,2]]]);
//# sourceMappingURL=main.f40f8ee2.chunk.js.map