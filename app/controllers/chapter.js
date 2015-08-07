(function () {
  "use strict"

  nglarily.module.controller("Chapter", ["$scope", "$stateParams", "DataService", function ($scope, $stateParams, DataService) {

        var error = function (err) {
              console.error(err);
            },
            render = function (chapter) {
              $scope.chapter = chapter;
            };

        $scope.expandChapter = function () {
          return false;
        };
        DataService.chapter(render, error);
      }]
  );

}).call(this);