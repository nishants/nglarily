(function () {
  "use strict"

  nglarily.module.factory("Server", ["$http", function ($http) {
    var getBook = function(url, success, error){
      $http.get(url).then(function(response){
        success(response.data);
      }, error);
    };

    return {
      getBook : getBook
    };
  }]);

}).call(this);