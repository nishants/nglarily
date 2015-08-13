(function () {
  "use strict"

  nglarily.module.controller("CodeSection", ["$scope", "SectionData", function ($scope, SectionData) {
        var
            showError = function (err) {
              alert(err);
            },
            setCode = function (code) {
              $scope.code = code;
            };

        SectionData.codeFor($scope.section, setCode, showError);
      }]
  );

}).call(this);