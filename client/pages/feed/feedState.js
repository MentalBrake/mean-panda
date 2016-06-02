'use strict';
angular.module('meanPanda').config([
    '$stateProvider',
    function ($stateProvider) {

        $stateProvider
            .state('feed', {
                url: '/feed',
                templateUrl: 'pages/feed/feed.html',
                controller: 'feedController'
            });
    }]);