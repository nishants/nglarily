(function () {
  "use strict"

  nglarily.module.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    //go to nglarily book by default
    $urlRouterProvider.when("", "/book/nglarily");

    $stateProvider
        .state("book", {
          url: "/book/:book",
          templateUrl: "pages/book.html",
          controller: "Book"
        })
        .state("book.chapter", {
          url: "/chapter/:chapter",
          templateUrl: "pages/chapter.html",
          controller: "Chapter"
        })
        .state("book.chapter.lesson", {
          url: "/lesson/:lesson",               // creates nested route: chapter/:chapter/lesson/:lesson (because state is named chapter.lesson).
          templateUrl: "pages/lesson.html",
          controller: "LessonController"
        });
  }]);

}).call(this);