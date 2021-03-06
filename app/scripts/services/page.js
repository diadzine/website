'use strict';

angular.module('websiteApp')
    .factory('Page', ['$http', 'Server',
        function($http, Server) {
            var pageApi = Server.Url + 'apiv1/pages/';

            return {
                getPageLinks: function(callback) {
                    /* Should return .link and .title for each page.*/
                    this.getPage(function(pages) {
                        pages = pages.map(function(el) {
                            el.link = 'Page?id=' + el.id;
                            el.title = el.name;
                            return el;
                        });
                        callback(pages);
                    });
                },

                getPage: function(callback, id) {
                    var url = id ? pageApi + id + '/' : pageApi;
                    $http.get(url, {
                        cache: true
                    })
                        .then(function(res) {
                            callback(res.data);
                        }, Server.errorHandler);
                },

            };
        }
    ]);
