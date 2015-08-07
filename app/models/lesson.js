(function () {
  "use strict"

  var Lesson = function (data) {
    this.name         = data.name;
    this.sections     = data.sections;
  };

  nglarily.models.Lesson = function(data){
    return new Lesson(data);
  };
}).call(this);