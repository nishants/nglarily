(function () {
  "use strict"

  nglarily.module.factory("ApiService", ["$http", function ($http) {
    var
        findByName = function (name, tutorials) {
          for(var i=0; i< tutorials.length; i++){
            if(tutorials[i].name == name){
              return tutorials[i];
            }
          }
          return null;
        },

        getAngularGuide = function (success, error) {
          $http.get("api/angular-book.json").then(function (response) {
            success(response.data);
          }, error);
        },

        getTutorial = function (tutorialName, success, error) {
          $http.get("api/angular-book.json").then(function (response) {
            success(findByName(tutorialName, response.data.tutorials));
          }, error);
        };

    return {
      getAngularGuide: getAngularGuide,
      getTutorial: getTutorial
    };
  }]);

}).call(this);