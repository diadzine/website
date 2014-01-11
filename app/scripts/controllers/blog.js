'use strict';

angular.module('websiteApp')
  .controller('BlogCtrl', function ($scope, $routeParams, Blog) {
  	var blogId = $routeParams.id;
  	$scope.news = Blog.getNews(blogId);
  	// $scope.linkCV = Blog.getLinkCV(blogId);
  	// $scope.profilePic = Blog.getProfilePic(blogId);
  	// $scope.linkResults = Blog.getLinkResults(blogId);
  	// $scope.sponsors = Blog.getSponsors(blogId);
  });
