(function () {
  "use strict"

  nglarily.module.factory("UserView", ["$stateParams", function ($stateParams) {
    var currentChapter = function () {
      return $stateParams.chapter;
    };

    var currentLesson = function () {
      return $stateParams.lesson;
    };

    return {
      chapterVisible: function () {
        return currentChapter() != null;
      },

      expandChapter: function () {
        return currentLesson() == null;
      },
      currentLesson: currentLesson
    };

  }]);

}).call(this);