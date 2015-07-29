'use strict'

angular.module('personalResumeApp')
.controller('ContactCtrl', function($scope, $stateParams, ResumeHttpService, $meteor) {
	$scope.viewName = 'Contact';
	$scope.success = false;
	$scope.error = false;

	ResumeHttpService.getInfo().then(function(info) {		
        $scope.contact = info.data.contact_details;
    }, function(error) {
        // promise rejected, could log the error with: console.log('error', error);
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