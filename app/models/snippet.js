(function () {
  "use strict"

  var
      Snippet = function (code, desc) {
        this.code = code;
        this.desc = desc;
      },

      parse = function (snipppetText) {
        var tokens      = snipppetText.split("**##"),
            code        = tokens[0],
            description = nglarily.models.SnippetDescription(tokens[1]);
        return new Snippet(code, description);
      };

  nglarily.models.Snippet = parse;

}).call(this);