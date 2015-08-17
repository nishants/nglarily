(function () {
  "use strict"

  nglarily.module.controller("LessonController", ["$scope", "DataService", function ($scope, DataService) {

        var
            error = function (err) {
              console.error(err);
            },
            render = function (lesson) {
              $scope.lesson = lesson;
            },
            templateForSection = function(section){
              return 'pages/sections/'+ section.type + '.html';
            };

        $scope.templateFor = templateForSection;
        DataService.lesson(render, error)
      }]
  );

}).call(this);