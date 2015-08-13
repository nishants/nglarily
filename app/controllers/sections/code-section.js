(function () {
  "use strict"

  nglarily.module.controller("CodeSection", ["$scope", "SectionData", "$timeout", function ($scope, SectionData, $timeout) {
        var
            editorOptions = {
              readOnly: true,
              lineNumbers: true,
              viewportMargin: Infinity
            },

            editorElement = function(){
              return document.getElementById("code-editor")
            },

            showError = function (err) {
              alert(err);
            },

            setCodeMirror = function () {
              CodeMirror.fromTextArea(editorElement(), editorOptions);
            },

            setCode = function (code) {
              $scope.code = code;
              $timeout(setCodeMirror);

            };

        SectionData.codeFor($scope.section, setCode, showError);
      }]
  );

}).call(this);