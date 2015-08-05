(function () {
  "use strict"

  var Chapter = function (data) {
    this.name     = data.name;
    this.lessons  = data.lessons;
  };

  nglarily.models.Chapter = Chapter;
}).call(this);