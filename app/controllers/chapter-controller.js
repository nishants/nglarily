(function () {
  "use strict"

  nglarily.module.controller("ChapterController", ["$scope", "ApiService", "$stateParams", function ($scope, ApiService, $stateParams) {

        var error = function (err) {
              console.err(err);
            },
            chapterName = function () {
              return $stateParams.chapter;
            },
            render = function (chapter) {
              $scope.chapter = chapter;
            };

        ApiService.getTutorial(chapterName(), render, error);
      }]
  );

}).call(this);