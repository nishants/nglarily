(function () {
  "use strict"

  var
      indexOf = function (chapterName, chapters) {
        for (var i = 0; i < chapters.length; i++) {
          if (chapters[i].name == chapterName) {
            return i;
          }
        }
        return -1;
      },

      Book = function (data, chapters) {
        this.name = data.name;
        this.chapters = chapters;
      };

  Book.prototype.get = function (chapterName) {
    return this.chapters[indexOf(chapterName, this.chapters)];
  };

  Book.prototype.nextTo = function (chapterName) {
    return this.chapters[indexOf(chapterName, this.chapters) +1];
  };

  nglarily.models.Book = Book;
}).call(this);