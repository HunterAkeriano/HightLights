!function(){const e=document.querySelector(".burger"),t=document.querySelector(".header__content-secret"),c=document.querySelector(".header__sec"),s=document.querySelector(".burger-text"),i=document.querySelector(".burger-none"),a=document.querySelector(".header__sec-info");if(console.log(a),(e||i)&&t&&c&&s){function o(){i.classList.toggle("active");let o=e.classList.toggle("active");t.classList.toggle("active"),c.classList.toggle("active"),s.classList.toggle("active"),a.classList.toggle("active"),o&&(document.body.style.overflow="hidden"),o||(document.body.style.overflow="auto")}i.addEventListener("click",o),e.addEventListener("click",o)}let n=document.images,r=n.length,l=0,d=document.getElementById("load__perc");document.querySelector(".loader"),document.querySelector(".loader-show");for(let I=0;I<r;I++){let B=new Image;B.onload=v,B.onerror=v,B.src=n[I].src}function v(){l++,document.body.style.overflow="hidden",d&&(d.innerHTML=(100/r*l<<0)+"%"),l>=r&&setTimeout((function(){let e=document.getElementById("page-preloader");e.classList.contains("done")||(e.classList.add("done"),document.body.style.overflow="auto")}),1e3)}new Swiper(".swiper-main",{slidesPerView:"1.2",spaceBetween:0,loop:!0,on:{init:function(){document.querySelector(".current-slide").innerHTML="01"},slideChange:function(){var e="0"+(this.realIndex+1);document.querySelector(".current-slide").innerHTML=e},beforeInit:function(){let e="0"+this.wrapperEl.querySelectorAll(".swiper-slide").length;document.querySelector(".total-slides").innerHTML=e}},pagination:{el:".swiper-pagination",type:"progressbar"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const u=document.querySelectorAll(".news-btn-list");u&&u.forEach((function(e){e.addEventListener("click",(function(){let t=e;u.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}))}));const L=document.querySelector(".all-news-btn"),m=document.querySelector(".blog-btn"),y=document.querySelector(".news-btn"),g=document.querySelector(".advice-news-btn"),p=document.querySelector(".news__project-top"),w=document.querySelector(".news__project-top-reverse"),S=document.querySelector(".news__project-middle");L&&L.addEventListener("click",(()=>{p.classList.add("active"),w.classList.add("active"),S.classList.add("active")})),m&&m.addEventListener("click",(()=>{p.classList.add("active"),w.classList.remove("active"),S.classList.remove("active")})),y&&y.addEventListener("click",(()=>{p.classList.remove("active"),w.classList.add("active"),S.classList.remove("active")})),g&&g.addEventListener("click",(()=>{p.classList.remove("active"),w.classList.remove("active"),S.classList.add("active")})),(j=document.getElementById("select-id"))&&j.addEventListener("change",(function(){var e=this.value;1==e&&(p.classList.remove("active"),w.classList.remove("active"),S.classList.add("active")),2==e&&(p.classList.remove("active"),w.classList.add("active"),S.classList.remove("active")),3==e&&(p.classList.add("active"),w.classList.remove("active"),S.classList.remove("active")),0==e&&(p.classList.add("active"),w.classList.add("active"),S.classList.add("active"))}));const f=document.querySelectorAll(".project-html-btn-list");f&&f.forEach((function(e){e.addEventListener("click",(function(){let t=e;console.log(t),f.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}))})),new Swiper(".one-news",{spaceBetween:30,centerSlides:"true",fade:"true",breakpoints:{320:{slidesPerView:1.5,centerSlides:"true"},768:{slidesPerView:2.5},1095:{slidesPerView:2.5},1290:{slidesPerView:3.5}}});const q=document.querySelector(".project-house"),E=document.querySelector(".project-appartament"),h=document.querySelector(".project-com"),b=document.querySelector(".project-arch"),k=document.querySelector(".js-project-one"),_=document.querySelector(".js-two-block ");var j;E&&E.addEventListener("click",(()=>{_.classList.add("active"),k.classList.remove("active")})),q&&q.addEventListener("click",(()=>{_.classList.add("active"),k.classList.add("active")})),h&&h.addEventListener("click",(()=>{_.classList.remove("active"),k.classList.add("active")})),b&&b.addEventListener("click",(()=>{_.classList.add("active"),k.classList.remove("active")})),(j=document.getElementById("select-id-none"))&&j.addEventListener("change",(function(){var e=this.value;0==e&&(_.classList.add("active"),k.classList.add("active")),1==e&&(_.classList.remove("active"),k.classList.add("active")),2==e&&(_.classList.add("active"),k.classList.remove("active")),3==e&&(_.classList.remove("active"),k.classList.add("active"))}))}(),console.log("file 2");