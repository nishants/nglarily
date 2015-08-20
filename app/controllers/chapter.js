(function () {
  "use strict"

  nglarily.module.controller("Chapter", ["$scope", "$stateParams", "Books", "UserView", function ($scope, $stateParams, Books, UserView) {

        var error = function (err) {
              console.error(err);
            },
            render = function (chapter) {
              $scope.chapter = chapter;
            };

        $scope.expandChapter = function () {
          return UserView.expandChapter();
        };

        $scope.isCurrent = function (lessonName) {
          return UserView.currentLesson() == lessonName;
        };

        Books.chapter(render, error);
      }]
  );

}).call(this);