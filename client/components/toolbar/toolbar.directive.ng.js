'use strict'

angular.module('personalResumeApp')
.directive('toolbar', function() {	
	return {
		restrict: 'AE',
		templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
		replace: true
	};  
})
.directive('navCollapse', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
            	angular.element('.navbar-toggle').trigger('click');            	
            });
        }
    };
});