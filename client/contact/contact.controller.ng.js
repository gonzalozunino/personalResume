'use strict';

angular.module('personalResumeApp')
.controller('ContactCtrl', function($scope, $http) {
	$scope.viewName = 'Contact';
	$scope.success = false;
	$scope.error = false;

	$scope.send = function () {

		var htmlBody = '<html><body><div>Name: ' + $scope.msg.name + '</div>' +					   
					   '<div>Message: ' + $scope.msg.body + '</div>' +
					   '<div>Date: ' + (new Date()).toString() + '</div></body></html>';

		var textBody = 'Name: ' + $scope.msg.name + '\n' +		
				'Message: ' + $scope.msg.body + '\n' +
				'Date: ' + (new Date()).toString() + '\n';

		$http({
			url: 'https://api.postmarkapp.com/email',
			method: 'POST',
			data: {
				'From': 'contact@gonzalozunino.net46.net',
				'To': 'gonzalo.zunino@gmail.com',
				'ReplyTo' : $scope.msg.email,
				'Subject': $scope.msg.subject,
				'HtmlBody': htmlBody,
				'TextBody': textBody
			},
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-Postmark-Server-Token': '39531bdb-c835-4395-8e96-703ec0beaa7a'
			}
	    }).success(function (data) {
	    	$scope.success = true;
	    	$scope.user = {};
	    }).error(function (data) {
	    	$scope.error = true;
	    });
	};
});