(function () {
  "use strict"

  nglarily.module.controller("ChapterController", ["$scope", "ApiService", "$stateParams", function ($scope, ApiService, $stateParams) {

        var error = function (err) {
              console.error(err);
            },
            render = function (chapter) {
              $scope.chapter = chapter;
            };

        ApiService.chapter(render, error);
      }]
  );

}).call(this);