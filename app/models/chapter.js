(function () {
  "use strict"

  var
      indexOf = function (lessonName, lessons) {
        for (var i = 0; i < lessons.length; i++) {
          if (lessons[i].name == lessonName) {
            return i;
          }
        }
        return -1;
      },

      Chapter = function (data, lessons) {
        this.name = data.name;
        this.lessons = lessons;
      };

  Chapter.prototype.nextTo = function (lessonName) {
    return this.lessons[indexOf(lessonName, this.lessons) +1];
  };

  nglarily.models.Chapter = Chapter;
}).call(this);