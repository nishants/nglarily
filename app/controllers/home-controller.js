(function () {
  "use strict"

  nglarily.controller("HomeController", ["$scope", "ApiService", function ($scope, ApiService) {
        var success = function (guide) {
              $scope.guide = guide;
            },
            error = function (err) {
              console.err(err);
            };

        ApiService.getAngularGuide(success, error);
      }]
  );

}).call(this);