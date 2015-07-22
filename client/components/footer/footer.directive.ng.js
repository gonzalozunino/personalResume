'use strict'

angular.module('personalResumeApp')
.directive('footer', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/footer/footer.view.ng.html',
    replace: true
  };
});