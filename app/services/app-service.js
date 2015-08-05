(function () {
  "use strict"

  nglarily.module.factory("ApiService", ["$http", "$stateParams", function ($http, $stateParams) {
    var
        currentBook =function(){
          return "books/"+ $stateParams.book +".json";
        },
        chapterName = function () {
          return $stateParams.chapter;
        },

        currentFrom = function (chapters) {
          var fromUrl = chapterName();
          for(var i=0; i< chapters.length; i++){
            if(chapters[i].name == fromUrl){
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

        getChapter = function (success, error) {
          var currentChapter = function (book) {
            success(currentFrom(book.chapters));
          };
          angularBook(currentChapter, error);
        };

    return {
      book: angularBook,
      chapter: getChapter
    };
  }]);

}).call(this);