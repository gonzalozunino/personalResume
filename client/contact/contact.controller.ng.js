'use strict';

angular.module('personalResumeApp')
	.controller('ContactCtrl', function ($scope, $http) {
		$scope.viewName = 'Contact';
		$scope.success = false;
		$scope.error = false;

		$scope.send = function () {

			var htmlBody = '<div>Name: ' + $scope.msg.name + '</div>' +
						   '<div>Email: ' + $scope.msg.email + '</div>' +
						   '<div>Message: ' + $scope.msg.body + '</div>' +
						   '<div>Date: ' + (new Date()).toString() + '</div>';

			var textBody = 'Name: ' + $scope.msg.name + '\n' +
				'Email: ' + $scope.msg.email + '\n' +
				'Message: ' + $scope.msg.body + '\n' +
				'Date: ' + (new Date()).toString() + '\n';			

			$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

			var url = 'https://api.postmarkapp.com/email';

			var data = {
				'From': 'gonzalo.zunino@globant.com',
				'To': 'gonzalo.zunino@gmail.com',
				'ReplyTo' : $scope.msg.email,
				'Cc' : '',
				'HtmlBody': htmlBody,
				'TextBody': textBody,
				'Subject': 'New Contact Form Submission'
			};

			var headers = {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-Postmark-Server-Token': '39531bdb-c835-4395-8e96-703ec0beaa7a'
			};

			var paramStr = $.param({url: url, data: JSON.stringify(data), headers: JSON.stringify(headers)});

			$http({
				method: 'POST',
				url: 'http://gonzalozunino.com.ar/contact',
				data: paramStr
			}).
			success(function (data) {				
				$scope.success = true;
				$scope.msg = {};
			}).
			error(function (data) {							
				$scope.error = true;
			});
		};

		$http.get('../resume/resume.json').success(function(data) {
			$scope.resume = data;
		}).error(function(data) {
		    $q.reject(data);
		});
	});