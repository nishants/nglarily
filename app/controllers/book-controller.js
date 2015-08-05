(function () {
  "use strict"

  nglarily.module.controller("BookController", ["$scope", "ApiService", function ($scope, ApiService) {
        var success = function (book) {
              $scope.book = book;
            },
            error = function (err) {
              console.err(err);
            };

        ApiService.angularBook(success, error);
      }]
  );

}).call(this);