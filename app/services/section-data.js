(function () {
  "use strict"

  nglarily.module.factory("SectionData", ["$http", function ($http) {
     var codeFor = function(href, success, error){
       return $http.get(href).then(function(response){
         success(nglarily.models.Section(response.data));
       }, error)
     };

    return {
      codeFor: codeFor
    };
  }]);

}).call(this);