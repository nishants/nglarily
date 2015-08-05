(function () {
  "use strict"

  nglarily.module.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("home-page", {
          url: "",
          templateUrl: "pages/home.html",
          controller: "HomeController"
        })
        .state("chapter", {
          url: "/chapter/:chapter",
          templateUrl: "pages/chapter.html",
          controller: "ChapterController"
        })
        .state("chapter.step", {
          url: "/step/:step",               // creates nested route: chapter/:chapter/step/:step (because state is named chapter.step).
          templateUrl: "pages/step.html",
          controller: "LessonController"
        });
  }]);

}).call(this);