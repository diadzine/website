'use strict';

angular.module('websiteApp')
  .directive('tsSideAds', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the tsSideAds directive');
      }
    };
  });
