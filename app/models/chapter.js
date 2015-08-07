(function () {
  "use strict"

  var Chapter = function (data, lessons) {
    this.name     = data.name;
    this.lessons  = lessons;
  };

  nglarily.models.Chapter = Chapter;
}).call(this);