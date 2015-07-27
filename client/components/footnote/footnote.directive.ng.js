'use strict'

angular.module('personalResumeApp')
.directive('footnote', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/footnote/footnote.view.ng.html',
    replace: true
  };
});