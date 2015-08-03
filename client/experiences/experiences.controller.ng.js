'use strict';

angular.module('personalResumeApp')
.controller('ExperiencesCtrl', function($scope, ResumeHttpService) {
  $scope.viewName = 'Experiences';

  ResumeHttpService.getInfo().then(function(info) {
	    $scope.careers = info.data.careers;
	    $scope.educations = info.data.educations;
	}, function(error) {
	    // promise rejected, could log the error with: console.log('error', error);
	});
});