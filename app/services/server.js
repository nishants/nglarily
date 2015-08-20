(function () {
  "use strict"

  nglarily.module.factory("Server", ["$http", function ($http) {

    var
        urlFor = function (bookName) {
          return ("books/" + bookName + ".json");
        },

        getBook = function (name, success, error) {
          $http.get(urlFor(name)).then(
              function (response) {
                success(response.data);
              },
              error
          );
        };

    return {
      getBook: getBook
    };
  }]);

}).call(this);