(function () {
  "use strict"

  var Book = function () {};
  bookEditor.models.Book = Book;

  var Chapter = function (name) {
    this.name = name;
    this.lessons = [];
  };

  bookEditor.models.Chapter = Chapter;


}).call(this);