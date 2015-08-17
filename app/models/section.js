(function () {
  "use strict"

  var
      Section = function (code, desc) {
        this.code = code;
        this.desc = desc;
      },

      parse = function (snipppetText) {
        var tokens      = snipppetText.split("**##"),
            code        = tokens[0],
            description = nglarily.models.SnippetDescription(tokens[1]);
        return new Section(code, description);
      };

  nglarily.models.Section = parse;

}).call(this);