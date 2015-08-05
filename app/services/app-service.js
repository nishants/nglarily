(function () {
  "use strict"

  nglarily.module.factory("ApiService", ["$http", function ($http) {
    var
        findByName = function (name, chapters) {
          for(var i=0; i< chapters.length; i++){
            if(chapters[i].name == name){
              return new nglarily.models.Chapter(chapters[i]);
            }
          }
          return null;
        },

        angularBook = function (success, error) {
          $http.get("api/angular-book.json").then(function (response) {
            success(response.data);
          }, error);
        },

        getChapter = function (chapterName, success, error) {
          $http.get("api/angular-book.json").then(function (response) {
            success(findByName(chapterName, response.data.chapters));
          }, error);
        };

    return {
      angularBook: angularBook,
      getChapter: getChapter
    };
  }]);

}).call(this);