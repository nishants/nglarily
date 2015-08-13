(function () {
  "use strict"

  nglarily.module.factory("BookNavigator", ["$http", "$stateParams", function ($http, $stateParams) {

    var next = function (){
      alert("next navigation")
    };

    return {
      next: next
    };
  }]);

}).call(this);