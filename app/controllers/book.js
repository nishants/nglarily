(function () {
  "use strict"

  nglarily.module.controller("Book", ["$scope", "DataService", "UserView", function ($scope, DataService, UserView) {
        var success = function (book) {
              $scope.book = book;
            },
            error = function (err) {
              console.error(err);
            };
        $scope.collapseBook = function(){
          return UserView.chapterVisible();
        };

        DataService.book(success, error);
      }]
  );

}).call(this);