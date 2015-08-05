(function () {
  "use strict"

  nglarily.module.factory("ApiService", ["$http", "$stateParams", function ($http, $stateParams) {
    var
        currentBook =function(){
          return "books/"+ $stateParams.book +".json";
        },

        findByName = function (name, chapters) {
          for(var i=0; i< chapters.length; i++){
            if(chapters[i].name == name){
              return new nglarily.models.Chapter(chapters[i]);
            }
          }
          return null;
        },

        angularBook = function (success, error) {
          $http.get(currentBook()).then(function (response) {
            success(response.data);
          }, error);
        },

        getChapter = function (chapterName, success, error) {
          var withChapters = function (book) {
            success(findByName(chapterName, book.chapters));
          };
          angularBook(withChapters, error);
        };

    return {
      getBook: angularBook,
      getChapter: getChapter
    };
  }]);

}).call(this);