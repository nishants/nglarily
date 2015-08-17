(function () {
  "use strict"

  var
      SnippetDescription = function (text) {
        this.text = text;
      },

      parse = function(text){
        return new SnippetDescription(text)
      };


  nglarily.models.SnippetDescription = parse;

}).call(this);