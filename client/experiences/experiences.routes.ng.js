'use strict'

angular.module('personalResumeApp')
.config(function($stateProvider) {
  $stateProvider
  .state('experiences', {
    url: '/experiences',
    templateUrl: 'client/experiences/experiences.view.ng.html',
    controller: 'ExperiencesCtrl'
  });
});