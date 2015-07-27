'use strict'

angular.module('personalResumeApp')
.directive('toolbar', function(scope, elm, attrs) {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
    replace: true
  };
});