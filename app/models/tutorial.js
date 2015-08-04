(function () {
  "use strict"
  var
      Tutorial = function (data) {
        this.name = data.name;
        this.steps = data.steps;
      },
      nextTo = function (currentStepName, steps) {
        return steps[1];
      };

  Tutorial.prototype.nextOf = function (currentStepName) {
    return currentStepName ? nextTo(currentStepName, this.steps) : this.steps[0];
  }

  nglarily.models.Tutorial = Tutorial;
}).call(this);