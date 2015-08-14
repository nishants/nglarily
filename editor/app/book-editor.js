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
          $scope.newLessons[chapterIndex] = null;
        };

        $scope.showJson = function(){
          console.log(angular.toJson($scope.book));
        };

        $scope.editLesson = function(chapterIndex, lessonIndex) {
          var chapter = $scope.book.chapters[chapterIndex],
              lesson = chapter.lessons[lessonIndex];

          alert("editing - "+ chapter.name + " : "+lesson.name)
        };

        $scope.addChapter = function(){
          $scope.book.chapters.push(new bookEditor.models.Chapter($scope.newChapter));
          $scope.newChapter = null;
        };
        $scope.newLessons = [];
      }]
  );

}).call(this);