(function () {
  "use strict"

  bookEditor.module.controller("BookEditor", ["$scope", "$http", function ($scope, $http) {

        var onGetBook = function(response){
          $scope.book = response.data;
        };

        $http.get("empty-book.json").then(onGetBook)
      }]
  );

}).call(this);