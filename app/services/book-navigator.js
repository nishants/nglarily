(function () {
  "use strict"

  nglarily.module.factory("BookNavigator", ["$state", "UserView", function ($state, UserView) {

    var openChapter = function (chapter) {
          $state.go("book.chapter", {
            chapter: chapter.name
          });
        },

        openLesson = function (chapter, lesson) {
          $state.go("book.chapter.lesson", {
            chapter: chapter.name,
            lesson: lesson.name
          });
        },
        goNext = function (book) {
          var
              currentLesson = book.nextTo(UserView.currentLesson()),
              nextChapter = book.nextTo(UserView.currentChapter()),
              nextLesson = nextChapter ? nextChapter.nextTo(currentLesson) : undefined;

          if (currentLesson) {
            openLesson(nextChapter, nextLesson);
          } else if (nextChapter) {
            openChapter(nextChapter);
          }
        };

    return {
      goToNextOf: goNext
    };
  }]);

}).call(this);