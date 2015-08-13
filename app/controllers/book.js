(function () {
  "use strict"

  nglarily.module.controller("Book", ["$scope", "DataService", "UserView", "BookNavigator", function ($scope, DataService, UserView, BookNavigator) {
        var success = function (book) {
              $scope.book = book;
            },
            error = function (err) {
              console.error(err);
            },
            goBack = function () {
              alert("lets go back...");
            },
            goNext = function () {
              if (!$scope.book) return; // ignore if book not loaded
              window.location = BookNavigator.nextUrl($scope.book, {location: false});
            };

        $scope.next = function () {
          // wait till book loads.
          return $scope.book ? BookNavigator.nextUrl($scope.book) : "";
        };


        $scope.collapseBook = function () {
          return UserView.chapterVisible();
        };

        document.onkeydown = function (evt) {
          evt = evt || window.event;
          switch (evt.keyCode) {
            case 37:
              goBack();
              break;
            case 39:
              goNext();
              break;
          }
        };

        DataService.book(success, error);
      }]
  );

}).call(this);