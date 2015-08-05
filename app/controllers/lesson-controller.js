(function () {
  "use strict"

  nglarily.module.controller("LessonController", ["$scope", "$stateParams", function ($scope, $stateParams) {

        var
            currentLesson = function () {
              return $stateParams.lesson;
            },
            render = function (lesson) {
              $scope.lesson = lesson;
            };

        render({name: currentLesson()});
      }]
  );

}).call(this);