(function () {
  "use strict"

  nglarily.module.controller("TutorialController", ["$scope", "ApiService", "$stateParams", function ($scope, ApiService, $stateParams) {

        var error = function (err) {
              console.err(err);
            },
            tutorialName = function () {
              return $stateParams.tutorial;
            },
            render = function (tutorial) {
              $scope.tutorial = tutorial;
            };

        ApiService.getTutorial(tutorialName(), render, error);
      }]
  );

}).call(this);