(function () {
  "use strict"

  nglarily.module.controller("Book", ["$scope", "DataService", "UserView", "BookNavigator", function ($scope, DataService, UserView, BookNavigator) {
        var success = function (book) {
              $scope.book = book;
            },
            error = function (err) {
              console.error(err);
            };

        $scope.next = function(){
          BookNavigator.goToNextOf($scope.book);
        };

        $scope.collapseBook = function(){
          return UserView.chapterVisible();
        };

        DataService.book(success, error);
      }]
  );

}).call(this);