'use strict'

angular.module('personalResumeApp')
.controller('ContactCtrl', function($scope, $stateParams, $http, $q, $meteor) {
	$scope.viewName = 'Contact';
	$scope.success = false;
	$scope.error = false;

	$http.get('../resume/resume.json').success(function(data) {
		$scope.resume = data;
	}).error(function(data) {
	    $q.reject(data);
	});	

	$scope.send = function(){
		$meteor.call('sendEmail', $scope.contactName, $scope.contactEmail, $scope.contactMsg).then(
			function(data){				
				$scope.success = true;
				$scope.contactName = undefined; 
				$scope.contactEmail = undefined;
				$scope.contactMsg = undefined;
				$scope.contactForm.$setPristine();				
			},
			function(err){				
				$scope.error = true;
			});			
	};
});