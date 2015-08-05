(function () {
  "use strict"

  nglarily.module.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/book");

    $stateProvider
        .state("book", {
          url: "/book",
          templateUrl: "pages/book.html",
          controller: "BookController"
        })
        .state("book.chapter", {
          url: "/chapter/:chapter",
          templateUrl: "pages/chapter.html",
          controller: "ChapterController"
        })
        .state("book.chapter.lesson", {
          url: "/lesson/:lesson",               // creates nested route: chapter/:chapter/lesson/:lesson (because state is named chapter.lesson).
          templateUrl: "pages/lesson.html",
          controller: "LessonController"
        });
  }]);

}).call(this);