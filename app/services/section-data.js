(function () {
  "use strict"

  nglarily.module.factory("SectionData", ["$http", function ($http) {
     var codeFor = function(section, success, error){
       return $http.get(section.href).then(function(response){
         success(nglarily.models.Section(response.data));
       }, error)
     };

    return {
      codeFor: codeFor
    };
  }]);

}).call(this);