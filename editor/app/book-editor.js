(function () {
  "use strict"

  bookEditor.module.controller("BookEditor", ["$scope", "$http", function ($scope, $http) {

        var onGetBook = function(response){
          $scope.book = response.data;
        };

        $http.get("empty-book.json").then(onGetBook);
        $scope.addChapter = function(){
          $scope.book.chapters.push(new bookEditor.models.Chapter($scope.newChapter));
        };
      }]
  );

}).call(this);