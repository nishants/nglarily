(function () {
  "use strict"

  var Book = function () {};

  var Chapter = function (name) {
    this.name = name;
    this.lessons = [];
  };

  var Lesson = function (name) {
    this.name = name;
    this.sections = [];
  };

  bookEditor.models.Book = Book;
  bookEditor.models.Chapter = Chapter;
  bookEditor.models.Lesson = Lesson;
}).call(this);