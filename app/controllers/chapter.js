(function () {
  "use strict"

  nglarily.module.controller("Chapter", ["$scope", "$stateParams", "DataService", "UserView", function ($scope, $stateParams, DataService, UserView) {

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

        DataService.chapter(render, error);
      }]
  );

}).call(this);