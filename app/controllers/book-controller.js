(function () {
  "use strict"

  nglarily.module.controller("BookController", ["$scope", "DataService", function ($scope, DataService) {
        var success = function (book) {
              $scope.book = book;
            },
            error = function (err) {
              console.error(err);
            };
        $scope.collapseBook = function(){
          return true;
        };

        DataService.book(success, error);
      }]
  );

}).call(this);