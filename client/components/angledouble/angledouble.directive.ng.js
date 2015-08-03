'use strict'

angular.module('personalResumeApp')
.directive('angledouble', function() {	
	return {
		restrict: 'AE',
		templateUrl: 'client/components/angledouble/angledouble.view.ng.html',
		replace: true
	};  
});