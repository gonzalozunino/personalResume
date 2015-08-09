'use strict';

angular.module('personalResumeApp')
.controller('AbilitiesCtrl', function($scope, ResumeHttpService) {
  $scope.viewName = 'Abilities';
  ResumeHttpService.getInfo().then(function(info) {  		
	    $scope.skills = info.data.skills;
	    $scope.languages = info.data.languages;
	}, function(error) {
	    // promise rejected, could log the error with: console.log('error', error);
	});  	  
    $scope.isReadonly = true;
    $scope.rateFunction = function(rating) {
      console.log('Rating selected: ' + rating);
    };
});