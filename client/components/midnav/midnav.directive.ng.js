'use strict'

angular.module('personalResumeApp')
.directive('midnav', function() {	
	return {
		restrict: 'AE',
		templateUrl: 'client/components/midnav/midnav.view.ng.html',
		replace: true
	};  
});