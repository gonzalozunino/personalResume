'use strict';

angular.module('personalResumeApp')
.controller('ContactCtrl', function($scope, $http) {
	$http.defaults.useXDomain = true;

	$scope.viewName = 'Contact';
	$scope.success = false;
	$scope.error = false;

	$scope.send = function () {

		var htmlBody = '<div>Name: ' + $scope.msg.name + '</div>' +					   
					   '<div>Message: ' + $scope.msg.body + '</div>' +
					   '<div>Date: ' + (new Date()).toString() + '</div>';

		var textBody = 'Name: ' + $scope.msg.name + '\n' +		
				'Message: ' + $scope.msg.body + '\n' +
				'Date: ' + (new Date()).toString() + '\n';   
        
		// Set the Content-Type
		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
		
		// Delete the Requested With Header
		delete $http.defaults.headers.common['X-Requested-With'];

		var url = '//api.postmarkapp.com/email';

		var data = {
			'From': 'gonzalo.zunino@globant.com',
			'To': 'gonzalo.zunino@gmail.com',
			"Cc": '',
			"Bcc": '',
			'Subject': $scope.msg.subject,
			"Tag": '',
			'HtmlBody': htmlBody,
			'TextBody': textBody,
			'ReplyTo' : $scope.msg.email,
			'TrackOpens': true
		};

		var headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-Postmark-Server-Token': '39531bdb-c835-4395-8e96-703ec0beaa7a'
		};			

		var paramStr = $.param({url: url, data: JSON.stringify(data), headers: JSON.stringify(headers)});

		$http({
		  method: "POST", 
		  url: '//gonzalozunino.com.ar', 
		  data: paramStr
		}).success(function (data) {
			console.log(data);
			$scope.success = true;
			$scope.user = {};
		}).error(function (data) {
			console.log(data);
			$scope.error = true;
		});
	       	    
	};
});