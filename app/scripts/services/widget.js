'use strict';

angular.module('websiteApp')
    .factory('Widget', ['$http', 'Server',
        function($http, Server) {
            var widgetUrl = Server.Url + 'widgets/',
                widgetApi = Server.Url + 'apiv1/widgets/';

            return {
                get: function(id, callback) {
                    var url = widgetApi + id + '/';
                    $http.get(url, {
                        cache: true
                    })
                        .then(function(res) {
                            callback(res.data.content);
                        }, Server.errorHandler);
                },
            };
        }
    ]);
