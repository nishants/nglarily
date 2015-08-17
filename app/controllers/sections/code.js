(function () {
  "use strict"

  nglarily.module.controller("CodeSection", ["$scope", "SectionData", "$timeout", function ($scope, SectionData, $timeout) {
        var
            editorOptions = {
              //remove default red dots for unknown character(linefeed, etc)
              specialCharPlaceholder: function(){return document.createElement("span")},
              readOnly: true,

              // show line numbers in editor
              //lineNumbers: true,

              // renders whole document at once (else only part in view is rendered, and text searches wont work)
              viewportMargin: Infinity,

              // syntax highlighter mode
              mode: "htmlmixed"
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

            setCode = function (snippet) {
              $scope.code        = snippet.code;
              $scope.description = snippet.desc;
              $timeout(setCodeMirror);

            };

        SectionData.codeFor($scope.section, setCode, showError);
      }]
  );

}).call(this);