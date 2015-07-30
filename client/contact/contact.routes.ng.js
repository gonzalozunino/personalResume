'use strict'

angular.module('personalResumeApp')
.config(function($stateProvider) {
  $stateProvider
  .state('contact', {  	
    url: '/contact',
	views: {
		"contact": {
			templateUrl: 'client/contact/contact.view.ng.html',
			controller: 'ContactCtrl'
		}
	}
  });
});