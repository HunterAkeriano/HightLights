!function(){const e=document.querySelector(".burger"),t=document.querySelector(".header__content-secret"),c=document.querySelector(".header__sec"),s=document.querySelector(".burger-text"),o=document.querySelector(".burger-none"),i=document.querySelector(".header__sec-info");if(console.log(i),(e||o)&&t&&c&&s){function n(){o.classList.toggle("active");let n=e.classList.toggle("active");t.classList.toggle("active"),c.classList.toggle("active"),s.classList.toggle("active"),i.classList.toggle("active"),n&&(document.body.style.overflow="hidden"),n||(document.body.style.overflow="auto")}o.addEventListener("click",n),e.addEventListener("click",n)}let a=document.images,l=a.length,r=0,d=document.getElementById("load__perc");document.querySelector(".loader"),document.querySelector(".loader-show");for(let q=0;q<l;q++){let b=new Image;b.onload=u,b.onerror=u,b.src=a[q].src}function u(){r++,document.body.style.overflow="hidden",d&&(d.innerHTML=(100/l*r<<0)+"%"),r>=l&&setTimeout((function(){let e=document.getElementById("page-preloader");e.classList.contains("done")||(e.classList.add("done"),document.body.style.overflow="auto")}),1e3)}new Swiper(".swiper-main",{slidesPerView:"1.2",spaceBetween:0,loop:!0,on:{init:function(){document.querySelector(".current-slide").innerHTML="01"},slideChange:function(){var e="0"+(this.realIndex+1);document.querySelector(".current-slide").innerHTML=e},beforeInit:function(){let e="0"+this.wrapperEl.querySelectorAll(".swiper-slide").length;document.querySelector(".total-slides").innerHTML=e}},pagination:{el:".swiper-pagination",type:"progressbar"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const v=document.querySelectorAll(".news-btn-list");v&&v.forEach((function(e){e.addEventListener("click",(function(){let t=e;v.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}))}));const m=document.querySelector(".all-news-btn"),L=document.querySelector(".blog-btn"),g=document.querySelector(".news-btn"),y=document.querySelector(".advice-news-btn"),p=document.querySelector(".news__project-top"),w=document.querySelector(".news__project-top-reverse"),f=document.querySelector(".news__project-middle");m&&m.addEventListener("click",(()=>{p.classList.add("active"),w.classList.add("active"),f.classList.add("active")})),L&&L.addEventListener("click",(()=>{p.classList.add("active"),w.classList.remove("active"),f.classList.remove("active")})),g&&g.addEventListener("click",(()=>{p.classList.remove("active"),w.classList.add("active"),f.classList.remove("active")})),y&&y.addEventListener("click",(()=>{p.classList.remove("active"),w.classList.remove("active"),f.classList.add("active")}));var S=document.getElementById("select-id");S&&S.addEventListener("change",(function(){var e=this.value;1==e&&(p.classList.remove("active"),w.classList.remove("active"),f.classList.add("active")),2==e&&(p.classList.remove("active"),w.classList.add("active"),f.classList.remove("active")),3==e&&(p.classList.add("active"),w.classList.remove("active"),f.classList.remove("active")),0==e&&(p.classList.add("active"),w.classList.add("active"),f.classList.add("active"))}))}(),console.log("file 2");