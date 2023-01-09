/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// const { get } = require(\"browser-sync\");\r\n\r\nconst burger = document.querySelector('.burger');\r\nconst headerContent = document.querySelector('.header__content-secret');\r\nconst headerSecret = document.querySelector('.header__sec');\r\nconst burgerText = document.querySelector('.burger-text');\r\nconst burgerTask = document.querySelector('.burger-none');\r\nconst bottomMenuHeader = document.querySelector('.header__sec-info');\r\nconsole.log(bottomMenuHeader)\r\n\r\n// if ебанутый как и я\r\nif((burger || burgerTask) && headerContent && headerSecret && burgerText){\r\n  function openMenu(){\r\n    burgerTask.classList.toggle('active');\r\n    let nav = burger.classList.toggle('active');\r\n    headerContent.classList.toggle('active');\r\n    headerSecret.classList.toggle('active');\r\n    burgerText.classList.toggle('active');\r\n    bottomMenuHeader.classList.toggle('active');\r\n    if(nav){\r\n      document.body.style.overflow=\"hidden\";\r\n    }\r\n    if(!nav){\r\n      document.body.style.overflow=\"auto\";\r\n    }\r\n  }\r\n  burgerTask.addEventListener('click', openMenu)\r\n  burger.addEventListener('click', openMenu);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet swiper = new Swiper(\".swiper-main\",{\r\n \r\n    // centerSlides: 'true',\r\n    slidesPerView: '1.2',\r\n    spaceBetween: 0,\r\n    loop: true,\r\n    on: {\r\n        init: function () {\r\n           var currentSlide = '01' ;\r\n          document.querySelector('.current-slide').innerHTML = currentSlide;\r\n        },\r\n          slideChange: function(){\r\n            var currentSlide = '0' + (this.realIndex + 1);\r\n            document.querySelector('.current-slide').innerHTML = currentSlide;\r\n        },\r\n          beforeInit: function(){\r\n          let numOfSlides = '0' + (this.wrapperEl.querySelectorAll(\".swiper-slide\").length);\r\n          document.querySelector('.total-slides').innerHTML = numOfSlides;\r\n          }\r\n        },\r\n        pagination: {\r\n            el: '.swiper-pagination',\r\n            type: 'progressbar'\r\n        },\r\n        navigation: {\r\n            nextEl: '.swiper-button-next',\r\n            prevEl: '.swiper-button-prev',\r\n          },\r\n  });\r\n\r\n// страница новостей\r\n\r\nconst tabsBtn = document.querySelectorAll('.news-btn-list');\r\n\r\n// перва кнопка с новостями\r\n\r\n\r\n\r\nif(tabsBtn){\r\n  tabsBtn.forEach(function(items){\r\n    items.addEventListener('click', function(){\r\n      let currentBTN = items;\r\n\r\n      // currentTab.forEach(function(item){\r\n      //   item.classList.remove('active')\r\n      // })\r\n\r\n      tabsBtn.forEach(function(item){\r\n        item.classList.remove('active')\r\n      })\r\n\r\n      currentBTN.classList.add('active');\r\n      // currentTab.classList.add('active');\r\n    })\r\n  })\r\n}\r\n\r\n\r\nconst allBtn =  document.querySelector('.all-news-btn');\r\nconst blogBtn = document.querySelector('.blog-btn');\r\nconst newsBtn = document.querySelector('.news-btn');\r\nconst adiceBtn = document.querySelector('.advice-news-btn')\r\n\r\n\r\nconst blogContent = document.querySelector('.news__project-top');\r\n\r\nconst newsContent = document.querySelector('.news__project-top-reverse');\r\nconst adiceContent = document.querySelector('.news__project-middle');\r\n\r\n\r\n\r\nif(allBtn){\r\n  allBtn.addEventListener('click', ()=>{\r\n    blogContent.classList.add('active');\r\n    newsContent.classList.add('active');\r\n    adiceContent.classList.add('active');\r\n  })\r\n}\r\n\r\nif(blogBtn){\r\n  blogBtn.addEventListener('click', ()=>{\r\n    blogContent.classList.add('active');\r\n    newsContent.classList.remove('active');\r\n    adiceContent.classList.remove('active');\r\n  })\r\n}\r\n\r\nif(newsBtn){\r\n  newsBtn.addEventListener('click', ()=>{\r\n    blogContent.classList.remove('active');\r\n    newsContent.classList.add('active');\r\n    adiceContent.classList.remove('active');\r\n  })\r\n}\r\n\r\nif(adiceBtn){\r\n  adiceBtn.addEventListener('click', ()=>{\r\n    blogContent.classList.remove('active');\r\n    newsContent.classList.remove('active');\r\n    adiceContent.classList.add('active');\r\n  })\r\n}\r\n\r\n// селект для мобайла\r\nvar e = document.getElementById(\"select-id\");\r\nif(e){\r\n  e.addEventListener('change', function(){  \r\n    var getValue = this.value;\r\n    // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;\r\n    if(getValue == 1){\r\n      blogContent.classList.remove('active');\r\n      newsContent.classList.remove('active');\r\n      adiceContent.classList.add('active');\r\n    }\r\n    if(getValue == 2){\r\n      blogContent.classList.remove('active');\r\n    newsContent.classList.add('active');\r\n    adiceContent.classList.remove('active');\r\n    }\r\n    if( getValue == 3){\r\n      blogContent.classList.add('active');\r\n      newsContent.classList.remove('active');\r\n      adiceContent.classList.remove('active');\r\n    }\r\n    if( getValue == 0){\r\n      blogContent.classList.add('active');\r\n      newsContent.classList.add('active');\r\n      adiceContent.classList.add('active');\r\n    }\r\n  });\r\n}\r\n\r\n\r\n \n\n//# sourceURL=webpack://dimagulak/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://dimagulak/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;