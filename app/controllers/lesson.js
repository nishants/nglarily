(function () {
  "use strict"

  nglarily.module.controller("LessonController", ["$scope", "Books", function ($scope, Books) {

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
        Books.lesson(render, error)
      }]
  );

}).call(this);