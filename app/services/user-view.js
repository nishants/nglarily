(function () {
  "use strict"

  nglarily.module.factory("UserView", ["$stateParams", function ($stateParams) {
    var currentChapter = function(){
      return $stateParams.chapter;
    };

    return {
      chapterVisible: function(){
        return currentChapter() != null;
      }
    };

  }]);

}).call(this);