(function () {
  "use strict"

  nglarily.module.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("home-page", {
          url: "",
          templateUrl: "pages/home.html",
          controller: "HomeController"
        })
        .state("tutorial", {
          url: "/tutorial/:tutorial",
          templateUrl: "pages/tutorial.html",
          controller: "ChapterController"
        })
        .state("tutorial.step", {
          url: "/step/:step",               // creates nested route: tutorial/:tutorial/step/:step (because state is named tutorial.step).
          templateUrl: "pages/step.html",
          controller: "LessonController"
        });
  }]);

}).call(this);