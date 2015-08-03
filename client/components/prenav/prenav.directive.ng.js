'use strict'

angular.module('personalResumeApp')
.directive('prenav', function() {	
	return {
		restrict: 'AE',
		templateUrl: 'client/components/prenav/prenav.view.ng.html',
		replace: true
	};  
});