(function () {
  "use strict"

  nglarily.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("home-page", {
          url: "",
          templateUrl: "pages/home.html",
          controller: "HomeController"
        })
        .state("tutorial", {
          url: "/tutorials/:name",
          templateUrl: "pages/tutorial.html"
        })
        .state("tutorial.step", {
          url: "/tutorial/:tutorial/step/:step",
          templateUrl: "pages/step.html"
        });
  }]);

}).call(this);