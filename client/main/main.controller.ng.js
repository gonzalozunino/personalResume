'use strict'

angular.module('personalResumeApp')
.controller('MainCtrl', function($scope, $http, $q, $meteor) {	
	$http.get('../resume/resume.json').success(function(data) {
		$scope.resume = data;
	}).error(function(data) {
	    $q.reject(data);
	});

	$scope.getAge = function(dateOfBirth) {
		var ageDifMs = Date.now() - new Date(dateOfBirth);
		var ageDate = new Date(ageDifMs);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	};
});