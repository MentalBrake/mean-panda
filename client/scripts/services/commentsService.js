'use strict';

angular.module('meanPanda').service('commentsService', [
    '$http',
    function ($http) {
        this.getComments = function () {
            return $http({
                method: 'GET',
                url: 'api/comments'
            })
                .then(function (result) {
                    return result.data;
                })
                .catch(_onError.bind(this));
        };

        this.postComment = function (comment) {
            return $http({
                method: 'POST',
                url: 'api/comments',
                params: {
                    email: comment.email,
                    message: comment.message
                }
            })
                .then(function (result) {
                    return result.data;
                })
                .catch(_onError.bind(this));
        };

        function _onError(resp) {
            var message = resp.data || 'Unexpected error occurred';

            throw new Error(message);
        }
    }]);
