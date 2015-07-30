'use strict'

angular.module('personalResumeApp')
.factory('ResumeHttpService', ['$http', '$q', function($http, $q){
	return {
        getInfo: function() {
            // the $http API is based on the deferred/promise APIs exposed by the $q service
            // so it returns a promise for us by default
            return $http.get('../resume/resume.json')
                .then(function(response) {                	
                    if (typeof response.data === 'object') {                    	
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        }
    };
}])
.controller('MainCtrl', function($scope, ResumeHttpService, $document) {
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
    //Makes an element to scroll to the top
    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 500);
    };
    //Makes an element to a specific section
    $scope.toExperiences = function() {
      $document.scrollToElementAnimated(angular.element('#experiences'));
    };    
});