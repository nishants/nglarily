(function () {
  "use strict"

  nglarily.factory("ApiService", ["$http", function ($http) {
    var getAngularGuide = function (success, error) {
      $http.get("api/angular-book.json").then(function (response) {
        success(response.data);
      }, error);
    };

    return {
      getAngularGuide: getAngularGuide
    };
  }]);

}).call(this);