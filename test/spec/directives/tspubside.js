'use strict';

describe('Directive: tsPubSide', function () {

  // load the directive's module
  beforeEach(module('websiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ts-pub-side></ts-pub-side>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tsPubSide directive');
  }));
});
