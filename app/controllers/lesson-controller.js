(function () {
  "use strict"

  nglarily.module.controller("LessonController", ["$scope", "ApiService", function ($scope, ApiService) {

        var
            error = function (err) {
              console.error(err);
            },
            render = function (lesson) {
              $scope.lesson = lesson;
            };

        ApiService.lesson(render, error)
      }]
  );

}).call(this);