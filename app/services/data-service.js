(function () {
  "use strict"

  nglarily.module.factory("DataService", ["$http", "$stateParams", function ($http, $stateParams) {
    var
        parseLessons = function(lessonsData){
          var lessons =[];
          for(var i = 0; i < lessonsData.length; i++){
            lessons.push(nglarily.models.Lesson(lessonsData[i]));
          }
          return lessons;
        },

        parseChapter = function(data, lessons){
          return new nglarily.models.Chapter(data, lessons);
        },

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
              return chapters[i];
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
            var chapters =[];
            for(var i = 0; i < response.data.chapters.length; i++){
              var data = response.data.chapters[i];
              chapters.push(parseChapter(data, parseLessons(data.lessons)))
            }

            success(new nglarily.models.Book(response.data, chapters));
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