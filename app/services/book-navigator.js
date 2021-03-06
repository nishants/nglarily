(function () {
  "use strict"

  nglarily.module.factory("BookNavigator", ["$state", "UserView", function ($state, UserView) {

    var
        toBook = function (book) {
          return $state.href("book", {
            book: book.name
          });
        },

        toNextChapter = function (chapter) {
          return $state.href("book.chapter", {
            chapter: chapter.name
          });
        },

        toNextLesson = function (chapter, lesson) {
          return $state.href("book.chapter.lesson", {
            chapter: chapter.name,
            lesson: lesson.name
          });
        },

        nextUrl = function (book) {
          var currentChapterName = UserView.currentChapter(),
              currentChapter    = book.get(currentChapterName),
              currentLessonName = UserView.currentLesson(),
              nextChapter ,
              nextLesson ;

          currentChapter = currentChapter ? (currentChapter.isLast(currentLessonName) ? undefined : currentChapter) : undefined;
          nextChapter = currentChapter ? currentChapter : book.nextTo(currentChapterName);
          nextLesson = nextChapter ? nextChapter.nextTo(currentLessonName) : undefined;

          if (nextLesson) {
            return toNextLesson(nextChapter, nextLesson);
          } else if (nextChapter) {
            return toNextChapter(nextChapter);
          } else{
            return toBook(book);
          }
        };

    return {
      nextUrl: nextUrl
    };
  }]);

}).call(this);