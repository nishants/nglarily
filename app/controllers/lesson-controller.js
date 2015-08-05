(function () {
  "use strict"

  nglarily.module.controller("LessonController", ["$scope", "$stateParams", function ($scope, $stateParams) {

        var
            stepName = function () {
              return $stateParams.step;
            },
            render = function (step) {
              $scope.step = step;
            };

        render({name: stepName()});
      }]
  );

}).call(this);