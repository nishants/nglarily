(function () {
  "use strict"

  nglarily.module.factory("DataService", ["$http", "$stateParams", function ($http, $stateParams) {
    var
        currentBook =function(){
          return "books/"+ $stateParams.book +".json";
        },

        chapterName = function () {
          return $stateParams.chapter;
        },

        lessonName = function () {
          return $stateParams.lesson;
        },

        chapterFrom = function (chapters) {
          var fromUrl = chapterName();
          for(var i=0; i< chapters.length; i++){
            if(chapters[i].name == fromUrl){
              return new nglarily.models.Chapter(chapters[i]);
            }
          }
          return null;
        },

        lessonFrom = function (chapter) {
          var fromUrl = lessonName();
          var lessons = chapter.lessons;
          for(var i=0; i< lessons.length; i++){
            if(lessons[i].name == fromUrl){
              return lessons[i];
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
            success(chapterFrom(book.chapters));
          };
          angularBook(currentChapter, error);
        },

        getLesson = function (success, error) {
          var currentLesson = function (chapter) {
            success(lessonFrom(chapter));
          };
          getChapter(currentLesson, error);
        };

    return {
      book: angularBook,
      chapter: getChapter,
      lesson: getLesson
    };
  }]);

}).call(this);