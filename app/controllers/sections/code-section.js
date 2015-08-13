(function () {
  "use strict"

  nglarily.module.controller("CodeSection", ["$scope", function ($scope) {
        var code = function () {
          return $scope.section.href;
        };

        $scope.code = code;
      }]
  );

}).call(this);