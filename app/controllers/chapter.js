(function () {
  "use strict"

  nglarily.module.controller("Chapter", ["$scope", "DataService", "$stateParams", function ($scope, DataService, $stateParams) {

        var error = function (err) {
              console.error(err);
            },
            render = function (chapter) {
              $scope.chapter = chapter;
            };

        DataService.chapter(render, error);
      }]
  );

}).call(this);