<!-- NOTE: README.md is generated from src/README.md -->

# @codemirror/lang-lc3 [![NPM version](https://img.shields.io/npm/v/@codemirror/lang-lc3.svg)](https://www.npmjs.org/package/@codemirror/lang-lc3)

[ [**WEBSITE**](https://codemirror.net/) | [**ISSUES**](https://github.com/codemirror/dev/issues) | [**FORUM**](https://discuss.codemirror.net/c/next/) | [**CHANGELOG**](https://github.com/codemirror/lang-lc3/blob/main/CHANGELOG.md) ]

This package implements lc3 language support for the
[CodeMirror](https://codemirror.net/) code editor.

The [project page](https://codemirror.net/) has more information, a
number of [examples](https://codemirror.net/examples/) and the
[documentation](https://codemirror.net/docs/).

This code is released under an
[MIT license](https://github.com/codemirror/lang-lc3/tree/main/LICENSE).

We aim to be an inclusive, welcoming community. To make that explicit,
we have a [code of
conduct](http://contributor-covenant.org/version/1/1/0/) that applies
to communication around the project.

# API Reference

<dl>
<dt id="user-content-globalcompletion">
  <code><strong><a href="#user-content-globalcompletion">globalCompletion</a></strong>: <a href="https://codemirror.net/docs/ref#autocomplete.CompletionSource">CompletionSource</a></code></dt>

<dd><p>Autocompletion for built-in lc3 globals and keywords.</p>
</dd>
<dt id="user-content-localcompletionsource">
  <code><strong><a href="#user-content-localcompletionsource">localCompletionSource</a></strong>(<a id="user-content-localcompletionsource^context" href="#user-content-localcompletionsource^context">context</a>: <a href="https://codemirror.net/docs/ref#autocomplete.CompletionContext">CompletionContext</a>) → <a href="https://codemirror.net/docs/ref#autocomplete.CompletionResult">CompletionResult</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a></code></dt>

<dd><p>Completion source that looks up locally defined names in
lc3 code.</p>
</dd>
<dt id="user-content-lc3language">
  <code><strong><a href="#user-content-lc3language">lc3Language</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>A language provider based on the <a href="https://github.com/lezer-parser/lc3">Lezer lc3
parser</a>, extended with
highlighting and indentation information.</p>
</dd>
<dt id="user-content-lc3">
  <code><strong><a href="#user-content-lc3">lc3</a></strong>() → <a href="https://codemirror.net/docs/ref#language.LanguageSupport">LanguageSupport</a></code></dt>

<dd><p>lc3 language support.</p>
</dd>
</dl>