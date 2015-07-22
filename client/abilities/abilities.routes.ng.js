'use strict'

angular.module('personalResumeApp')
.config(function($stateProvider) {
  $stateProvider
  .state('abilities', {
    url: '/abilities',
    templateUrl: 'client/abilities/abilities.view.ng.html',
    controller: 'AbilitiesCtrl'
  });
});