(function () {
  "use strict"

  nglarily.module.controller("ChapterController", ["$scope", "ApiService", "$stateParams", function ($scope, ApiService, $stateParams) {

        var error = function (err) {
              console.err(err);
            },
            chapterName = function () {
              return $stateParams.chapter;
            },
            bookName = function () {
              return $stateParams.book;
            },
            render = function (chapter) {
              $scope.chapter = chapter;
            };

        ApiService.getChapter(chapterName(), render, error);
        $scope.book = bookName(); //TODO required for a bug in ui.router(or i dont get it?
      }]
  );

}).call(this);