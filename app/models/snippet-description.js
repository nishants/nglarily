(function () {
  "use strict"

  var
      SnippetDescription = function (head, lines) {
        this.head = head;
        this.lines = lines;
      },

      parseLines = function (text) {
        var parsed = [],
            textLines = text.split("#li.");

        for (var i = 0; i < textLines.length; i++) {
          if(textLines[i].indexOf("#h1.") == -1){
            parsed.push(textLines[i]);
          };
        }
        return parsed;
      },
      parse = function (text) {
        var
            head = text.split("#li.")[0].replace("#h1.", "").replace("\n", "").trim(),
            lines = parseLines(text);
        return new SnippetDescription(head, lines)
      };


  nglarily.models.SnippetDescription = parse;

}).call(this);