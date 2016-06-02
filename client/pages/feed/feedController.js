'use strict';
angular.module('meanPanda').controller('feedController', [
    '$scope', 'commentsService',
    function ($scope, commentsService) {

        $scope.newComment = {
            email: undefined,
            message: undefined
        };

        $scope.filter = {
            searchText: undefined
        };

        $scope.getSearchText = function () {
            return $scope.search;
        };

        $scope.postComment = function () {
            commentsService.postComment($scope.newComment)
                .then(getComments)
                .then(function () {
                    // clear message so I can put a new one
                    $scope.newComment.message = undefined;
                });
        };

        function getComments() {
            commentsService.getComments()
                .then(function (comments) {
                    $scope.comments = comments;
                })
        }


        getComments();


    }]);
