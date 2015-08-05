(function () {
  "use strict"

  nglarily.module.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("book-contents-page", {
          url: "",
          templateUrl: "pages/book.html",
          controller: "BookController"
        })
        .state("chapter", {
          url: "/chapter/:chapter",
          templateUrl: "pages/chapter.html",
          controller: "ChapterController"
        })
        .state("chapter.lesson", {
          url: "/lesson/:lesson",               // creates nested route: chapter/:chapter/lesson/:lesson (because state is named chapter.lesson).
          templateUrl: "pages/lesson.html",
          controller: "LessonController"
        });
  }]);

}).call(this);