'use strict';

angular.module('websiteApp')
    .controller('MagCtrl', function($scope, News) {
        function shuffle(o) { //v1.0
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() *
                i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };

        var news = [];
        News.getMagNews(function(response) {
            news = response;
            $scope.news = news;
            $scope.randFirstNews = shuffle(news.slice(0, 5));
        });
    });