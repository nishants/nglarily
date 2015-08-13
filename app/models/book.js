(function () {
  "use strict"

  var Book = function (data, chapters) {
    this.name     = data.name;
    this.chapters  = chapters;
  };

  nglarily.models.Book = Book;
}).call(this);