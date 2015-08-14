(function () {
  "use strict"

  bookEditor.module.controller("BookEditor", ["$scope", "$http", function ($scope, $http) {

        var onGetBook = function(response){
          $scope.book = response.data;
        };

        $http.get("empty-book.json").then(onGetBook);

        $scope.addLessonTo = function(chapterIndex){
          var chapter = $scope.book.chapters[chapterIndex],
              newLessonName = $scope.newLessons[chapterIndex];

          chapter.lessons.push(new bookEditor.models.Lesson(newLessonName));
        };

        $scope.addChapter = function(){
          $scope.book.chapters.push(new bookEditor.models.Chapter($scope.newChapter));
        };
        $scope.newLessons = [];
      }]
  );

}).call(this);