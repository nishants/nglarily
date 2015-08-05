(function () {
  "use strict"

  var Chapter = function (data) {
    this.name = data.name;
    this.steps = data.steps;
  };

  nglarily.models.Chapter = Chapter;
}).call(this);