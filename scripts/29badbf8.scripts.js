"use strict";angular.module("websiteApp",["ngCookies","ngResource","ngSanitize","ui.bootstrap","ngDisqus"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/index.html",controller:"MainCtrl"}).when("/Mag",{templateUrl:"views/index.html",controller:"MagCtrl"}).when("/News",{templateUrl:"views/news.html",controller:"NewsCtrl"}).when("/Rankings",{templateUrl:"views/rankings.html",controller:"RankingsCtrl"}).when("/Blog",{templateUrl:"views/blog.html",controller:"BlogCtrl"}).when("/Page",{templateUrl:"views/page.html",controller:"PageCtrl"}).when("/Result",{templateUrl:"views/result.html",controller:"ResultCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!1).hashPrefix("!")}]),angular.module("websiteApp").controller("MainCtrl",["$scope","$routeParams","$modal","News",function(a,b,c,d){function e(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}var f=d.getNews();a.news=f,a.randFirstNews=e(f.slice(0,5)),(parseInt(b.n)||"0"===b.n)&&c.open({templateUrl:"news-modal.html",controller:["$scope","$routeParams","$modalInstance","News",function(a,b,c,d){var e=parseInt(b.n),f=d.getNews(e);a.news=f,a.disqusId="News"+e,a.close=function(){c.close()}}]})}]),angular.module("websiteApp").controller("MagCtrl",["$scope","News",function(a,b){function c(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}var d=b.getMagNews();a.news=d,a.randFirstNews=c(d.slice(0,5))}]),angular.module("websiteApp").directive("tsNewsList",function(){return{templateUrl:"views/directives/news/newslist.html",restrict:"EACM",replace:!0,scope:{news:"=news"},link:function(){}}}),angular.module("websiteApp").filter("truncate",function(){return function(a,b,c){return isNaN(b)&&(b=10),void 0===c&&(c="..."),a.length<=b||a.length-c.length<=b?a:String(a).substring(0,b-c.length)+c}}),angular.module("websiteApp").filter("findImage",function(){return function(a){var b=/(https?:\/\/[A-Za-z0-9_/\.\-\(\)]*\.(?:png|jpg|svg|jpeg))/gi;return a=b.exec(a),a=a?a[0]:"/images/site/Sflocon_vecteur_Transparent.png"}}),angular.module("websiteApp").directive("tsNewsCarousel",function(){return{templateUrl:"views/directives/news/carousel.html",restrict:"EACM",scope:{news:"="},link:function(a){a.interval=5e3}}}),angular.module("websiteApp").controller("NewsCtrl",["$scope","$routeParams","News",function(a,b,c){var d=b.id;a.news=c.getNews(d),a.disqusId="News"+d}]),angular.module("websiteApp").directive("tsPubSide",["Pub",function(a){return{templateUrl:"views/directives/pub/side.html",restrict:"EACM",link:function(b){var c=a.getVerticalBanner(),d=a.getSquareBanner();b.vertical=c[0],b.square1=d[0],b.square2=d.length>1?d[1]:d[0]}}}]),angular.module("websiteApp").directive("tsComments",function(){return window.disqus_shortname="tooski",{templateUrl:"views/directives/comments/comments.html",restrict:"EACM",link:function(){}}}),angular.module("websiteApp").factory("News",function(){var a=[{id:0,author:"Séb",title:"News n°0",content:'Mon super text, avec du html: <img src="http://www.google.ch/logos/doodles/2014/annette-von-droste-hulshoffs-217th-birthday-5701007384248320.2-hp.jpg" /><a href="http://tooski.ch"></a>',date:1389390694,mag:1},{id:1,author:"Séb",title:"News n°1",content:'Mon super text, avec du html: <img src="http://www.fricktal24.ch/typo3temp/pics/Ski-Aerni_Luca_01_55d138efee.jpg" /><a href="http://tooski.ch"></a>',date:1389390695,mag:1},{id:2,author:"Séb",title:"News n°2",content:'Mon super text, avec du html: <a href="https://tooski.ch"><img src="http://skiweltcup.tv/wp-content/themes/tvsportnews/images/09-aerni002-klein-swiss-ski.jpg" /></a>',date:1389390696,mag:1},{id:3,author:"Séb",title:"News n°0",content:'Mon super text, avec du html: <img src="http://www.google.ch/logos/doodles/2014/annette-von-droste-hulshoffs-217th-birthday-5701007384248320.2-hp.jpg" /><a href="http://tooski.ch"></a>',date:1389390694,mag:1},{id:4,author:"Séb",title:"News n°1",content:'Mon super text, avec du html: <img src="http://www.fricktal24.ch/typo3temp/pics/Ski-Aerni_Luca_01_55d138efee.jpg" /><a href="http://tooski.ch"></a>',date:1389390695,mag:0},{id:5,author:"Séb",title:"News n°2",content:'Mon super text, avec du html: <a href="https://tooski.ch"><img src="http://skiweltcup.tv/wp-content/themes/tvsportnews/images/09-aerni002-klein-swiss-ski.jpg" /></a>',date:1389390696,mag:0},{id:6,author:"Séb",title:"News n°0",content:'Mon super text, avec du html: <img src="http://www.google.ch/logos/doodles/2014/annette-von-droste-hulshoffs-217th-birthday-5701007384248320.2-hp.jpg" /><a href="http://tooski.ch"></a>',date:1389390694,mag:1},{id:7,author:"Séb",title:"News n°1",content:'Mon super text, avec du html: <img src="http://www.fricktal24.ch/typo3temp/pics/Ski-Aerni_Luca_01_55d138efee.jpg" /><a href="http://tooski.ch"></a>',date:1389390695,mag:1},{id:8,author:"Séb",title:"News n°2",content:'Mon super text, avec du html: <a href="https://tooski.ch"><img src="http://skiweltcup.tv/wp-content/themes/tvsportnews/images/09-aerni002-klein-swiss-ski.jpg" /></a>',date:1389390696,mag:0}];return{getNews:function(b){return b||angular.isNumber(b)?a.filter(function(a){return a.id===b})[0]:a},getMagNews:function(){return a.filter(function(a){return 1===a.mag})}}}),angular.module("websiteApp").directive("tsNavbar",["Blog","Page","Ranking",function(a,b,c){return{templateUrl:"views/directives/core/navbar.html",restrict:"EACM",replace:!0,link:function(d){d.resultsCat=c.getRankingLinks(),d.blogsCat=a.getBlogLinks(),d.pagesCat=b.getPageLinks(),d.isCollapsed=!0,d.selectNav=function(a){d.activeCat=a},d.selectSubCat=function(a){d.activeSubCat=a},d.revealPills=function(a,b){var c=document.getElementById("ts-nav-subbar");d.selectNav(a),d.currentCat=b,c.style.display=null===b?"none":"block"}}}}]),angular.module("websiteApp").factory("Pub",function(){var a=[{id:0,horizontal:0,vertical:1,square:0,img:"http://placehold.it/350x750"},{id:0,horizontal:0,vertical:0,square:1,img:"http://placehold.it/350x350"},{id:0,horizontal:0,vertical:0,square:1,img:"http://placehold.it/750x750"},{id:0,horizontal:1,vertical:0,square:0,img:"http://placehold.it/750x350"}],b=function(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a};return a=b(a),{getVerticalBanner:function(){return a.filter(function(a){return 1===a.vertical}).reduce(function(a,b){return a.push(b.img),a},[])},getSquareBanner:function(){return a.filter(function(a){return 1===a.square}).reduce(function(a,b){return a.push(b.img),a},[])}}}),angular.module("websiteApp").factory("Blog",function(){var a=[{title:"Antoine Perrottet",link:"Blog?id=1"},{title:"Axel Béguelin",link:"Blog?id=2"},{title:"Un autre Skieur",link:"Blog?id=3"}];return{getBlogLinks:function(){return a},getNews:function(){return[{id:0,author:"Séb",title:"News n°0",content:'Mon super text, avec du html: <img src="http://www.google.ch/logos/doodles/2014/annette-von-droste-hulshoffs-217th-birthday-5701007384248320.2-hp.jpg" /><a href="http://tooski.ch"></a>',date:1389390694},{id:1,author:"Séb",title:"News n°1",content:'Mon super text, avec du html: <img src="http://www.fricktal24.ch/typo3temp/pics/Ski-Aerni_Luca_01_55d138efee.jpg" /><a href="http://tooski.ch"></a>',date:1389390695},{id:2,author:"Séb",title:"News n°2",content:'Mon super text, avec du html: <a href="https://tooski.ch"><img src="http://skiweltcup.tv/wp-content/themes/tvsportnews/images/09-aerni002-klein-swiss-ski.jpg" /></a>',date:1389390696}]},getLinkResults:function(){return"http://data.fis-ski.com/dynamic/athlete-biography.html?sector=AL&competitorid=190056&type=result"},getCV:function(){return"Né: 12.12.12 <br /> Mange des petits poids au petit déjeuner. <br /> Il y a beaucoup de petits dans la phrase précédente, mais au moins elle n'est pas trop courte."},getName:function(){return"Axel Béguelin"},getProfilePic:function(){return"http://www.arcinfo.ch/multimedia/images/archives_arcinfo//2010.04.09/axel_beguelin.jpg"},getSponsors:function(){return["http://snow.co.nz/media/uploads/2012/06/logo-atomic.jpg","http://3.bp.blogspot.com/_8cOgwU34ueU/TH6rXYo9kBI/AAAAAAAABaQ/ueZjXw7bpYk/s1600/fi_main-logo_4c_high.jpg","http://www.daillon.ch/wordpress/wp-content/uploads/2013/10/1357755346.jpg"]}}}),angular.module("websiteApp").controller("RankingsCtrl",["$scope","$routeParams","Ranking","Result",function(a,b,c,d){var e=b.type;a.rankings=d.getResultLists(e),a.generalMen=c.getGeneralRanking(e,"H"),a.generalWomen=c.getGeneralRanking(e,"F")}]),angular.module("websiteApp").controller("BlogCtrl",["$scope","$routeParams","Blog",function(a,b,c){var d=b.id;a.news=c.getNews(d),a.CV=c.getCV(d),a.name=c.getName(d),a.profilePic=c.getProfilePic(d),a.linkResults=c.getLinkResults(d),a.blogId=d,a.sponsors=c.getSponsors(d)}]),angular.module("websiteApp").factory("Page",function(){var a=[{title:"Staff",link:"Page?id=1"},{title:"Truc",link:"Page?id=2"},{title:"Publicité",link:"Page?id=3"},{title:"Muche",link:"Page?id=4"},{title:"Muche2",link:"Page?id=5"}];return{getPageLinks:function(){return a},getPage:function(a){return"<p>Salut comment tu fais pour manger du <b>thon</b> id: "+a+" ?</p>"}}}),angular.module("websiteApp").factory("Ranking",function(){var a=[{title:"Coupe du Monde",link:"Rankings?type=WC"},{title:"Coupe d'Europe",link:"Rankings?type=EC"},{title:"FIS",link:"Rankings?type=FIS"}],b={men:[{name:"Marcel Hirscher",points:256},{name:"Aksel Lund Svindal",points:255},{name:"Ted Ligety",points:254}],women:[{name:"Lara Gut",points:256},{name:"Anna Fenninger",points:255},{name:"Michel Gisin",points:254}]};return{getRankingLinks:function(){return a},getGeneralRanking:function(a,c){return"F"===c?b.women:b.men}}}),angular.module("websiteApp").controller("PageCtrl",["$scope","$routeParams","Page",function(a,b,c){a.page=c.getPage(b.id)}]),angular.module("websiteApp").directive("tsBlogSponsors",["Blog",function(){return{templateUrl:"views/directives/blog/sponsors.html",restrict:"EACM",scope:{sponsors:"=sponsors"},link:function(){}}}]),angular.module("websiteApp").controller("ResultCtrl",["$scope","$routeParams","Result",function(a,b,c){var d=b.resultId,e=c.getResult(d);a.headers=e.headers,a.results=e.values,a.title=e.title,a.date=e.date,a.genre=e.genre}]),angular.module("websiteApp").directive("tsRankingGeneral",function(){return{templateUrl:"views/directives/ranking/general.html",restrict:"EACM",scope:{generalRanking:"=ranking"},link:function(){}}}),angular.module("websiteApp").factory("Result",function(){var a={headers:["Place","Nom","Points","Temps"],values:[["1","Pinturault","1.00","1.34"],["2","Pinturault","2.00","2.34"],["3","Pinturault","3.00","3.34"],["4","Pinturault","4.00","4.34"],["5","Pinturault","5.00","5.34"],["6","Pinturault","6.00","6.34"],["7","Pinturault","7.00","7.34"],["8","Pinturault","8.00","8.34"],["9","Pinturault","9.00","9.34"],["10","Pinturault","10.00","10.34"],["11","Pinturault","11.00","11.34"],["12","Pinturault","12.00","12.34"],["13","Pinturault","13.00","13.34"],["14","Pinturault","14.00","14.34"],["15","Pinturault","15.00","15.34"],["16","Pinturault","16.00","16.34"],["17","Pinturault","17.00","17.34"],["18","Pinturault","18.00","18.34"]],title:"SL Alta Badia",date:1388476529,category:"WC",genre:"H",id:0};return{getResult:function(){return a},getResultLists:function(){var b,c=[];for(b=0;10>=b;b++)a.id=b,c.push(a);return c}}});