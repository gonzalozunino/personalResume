'use strict'

new WOW().init();

angular.module('personalResumeApp')
.controller('MainCtrl', function($scope, $document, ResumeHttpService) {
    
	ResumeHttpService.getInfo().then(function(info) {
        $scope.profile = info.data.profile;
    }, function(error) {
        // promise rejected, could log the error with: console.log('error', error);
    });

	$scope.getAge = function(dateOfBirth) {
		var ageDifMs = Date.now() - new Date(dateOfBirth);
		var ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	};
});