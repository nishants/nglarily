(function () {
  "use strict"

  nglarily.module.controller("Book", ["$scope","$window", "Books", "UserView", "BookNavigator", function ($scope, $window, Books, UserView, BookNavigator) {
        var success = function (book) {
              $scope.book = book;
            },
            error = function (err) {
              console.error(err);
            },
            goBack = function () {
              $window.history.back();;
            },
            goNext = function () {
              if (!$scope.book) return; // ignore if book not loaded
              window.location = BookNavigator.nextUrl($scope.book, {location: false});
            };

        $scope.next = function () {
          // wait till book loads.
          return $scope.book ? BookNavigator.nextUrl($scope.book) : "";
        };

        document.onkeydown = function (evt) {
          evt = evt || window.event;
          switch (evt.keyCode) {
            case 37:
              goBack();
              return false;
            case 39:
              goNext();
              return false;
          }
          return true;
        };

        Books.book(success, error);
      }]
  );

}).call(this);