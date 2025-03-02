import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { Tag, styleTags, tags } from "@lezer/highlight";
import { parser } from "@lc3tutor/lezer-lc3"; // Adjust the path to your parser file

const directive = Tag.define();
const oscall = Tag.define();
const opcode = Tag.define();
const register = Tag.define();
const sep = Tag.define();
const label = Tag.define();

const lc3Highlighting = styleTags({
  Comment: tags.comment,
  Directive: directive,
  OsCall: oscall,
  OpCode: opcode,
  Register: register,
  String: tags.string,
  Number: tags.number,
  Seperator: sep,
  Label: label
});

const lc3Language = LRLanguage.define({
  parser: parser.configure({
    props: [
      lc3Highlighting
    ]
  })
});

const lc3Support = new LanguageSupport(lc3Language, [
  syntaxHighlighting(
    HighlightStyle.define([
      { tag: tags.comment, color: "#45873a" },
      { tag: directive, color: "#8c897b" },
      { tag: oscall, color: "#85d7ee" },
      { tag: opcode, color: "#5399ca" },
      { tag: register, color: "#42a171" },
      { tag: label, color: "#dcd99b" },
      { tag: tags.number, color: "#aec996" },
      { tag: tags.string, color: "#d69d85" },
      { tag: sep, color: "#ffffff" }, // Set to system color.
    ], { all: { color: "#9381c8" } })
  )
]);

/// LC3 language support.
export function lc3() {
  return lc3Support;
}
