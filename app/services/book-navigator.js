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
          var currentChapterName = UserView.currentChapter(),
              currentChapter    = book.get(currentChapterName),
              currentLessonName = UserView.currentLesson(),
              nextChapter ,
              nextLesson ;

          currentChapter = currentChapterName ? (currentChapter.isLast(currentLessonName) ? undefined : currentChapter) : undefined;
          nextChapter = currentChapter ? currentChapter : book.nextTo(currentChapterName);
          nextLesson = nextChapter ? nextChapter.nextTo(currentLessonName) : undefined;

          if (nextLesson) {
            openLesson(nextChapter, nextLesson);
          } else if (nextChapter) {
            openChapter(nextChapter);
          } else{
            alert("end of boook");
          }
        };

    return {
      goToNextOf: goNext
    };
  }]);

}).call(this);