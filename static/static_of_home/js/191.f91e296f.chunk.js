(this.webpackJsonpgroup_project=this.webpackJsonpgroup_project||[]).push([[191],{295:function(e,n){!function(e){var n=e.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(n,"addSupport",{value:function(n,a){"string"==typeof n&&(n=[n]),n.forEach((function(n){!function(n,a){var t="doc-comment",o=e.languages[n];if(o){var r=o[t];if(!r){r=(o=e.languages.insertBefore(n,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[t]}if(r instanceof RegExp&&(r=o[t]={pattern:r}),Array.isArray(r))for(var i=0,p=r.length;i<p;i++)r[i]instanceof RegExp&&(r[i]={pattern:r[i]}),a(r[i]);else a(r)}}(n,(function(e){e.inside||(e.inside={}),e.inside.rest=a}))}))}}),n.addSupport(["java","javascript","php"],n)}(Prism)}}]);
//# sourceMappingURL=191.f91e296f.chunk.js.map