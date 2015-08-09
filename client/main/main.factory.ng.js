'use strict'

new WOW().init();

angular.module('personalResumeApp').factory('ResumeHttpService', ['$http', '$q', function($http, $q){
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
}]);