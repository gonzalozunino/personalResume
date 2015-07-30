'use strict'

angular.module('personalResumeApp')
.config(function($stateProvider) {
  $stateProvider
  .state('main', {
	url: '/main',
	views: {
		"main": {
			templateUrl: 'client/main/main.view.ng.html',
			controller: 'MainCtrl'
		}/*,
		"contact": {
			templateUrl: 'client/contact/contact.view.ng.html',
			controller: 'ContactCtrl'
    	},
    	"experiences": {
			templateUrl: 'client/experiences/experiences.view.ng.html',
			controller: 'ExperiencesCtrl'
		},
    	"abilities":{
			templateUrl: 'client/abilities/abilities.view.ng.html',
			controller: 'AbilitiesCtrl'
		}*/
	}
  });
});