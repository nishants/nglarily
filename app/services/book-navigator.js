(function () {
  "use strict"

  nglarily.module.factory("BookNavigator", ["$state", "UserView", function ($state, UserView) {

    var openChapter = function (chapter) {
          $state.go("book.chapter", {
            chapter: chapter.name
          })
        },

        goNext = function (book) {
          var nextChapter = book.nextTo(UserView.currentChapter());
          if (nextChapter) {
            openChapter(nextChapter);
          }
        };

    return {
      goToNextOf: goNext
    };
  }]);

}).call(this);