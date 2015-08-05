(function () {
  "use strict"

  nglarily.module.controller("ChapterController", ["$scope", "ApiService", "$stateParams", function ($scope, ApiService, $stateParams) {

        var error = function (err) {
              console.err(err);
            },
            bookName = function () {
              return $stateParams.book;
            },
            render = function (chapter) {
              $scope.chapter = chapter;
            };

        ApiService.chapter(render, error);
        $scope.book = bookName(); //TODO required for a bug in ui.router(or i dont get it?
      }]
  );

}).call(this);