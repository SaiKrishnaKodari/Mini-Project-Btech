/*! Editor.md v1.5.0 | editormd.min.js | Open source online markdown editor. | MIT License | By: Pandao | https://github.com/pandao/editor.md | 2015-06-09 */
!function(e) {
    "use strict";
    "function" == typeof require && "object" == typeof exports && "object" == typeof module ? module.exports = e : "function" == typeof define ? define.amd || define(["jquery"], e) : window.editormd = e()
}(function() {
    "use strict";
    var e = "undefined" != typeof jQuery ? jQuery : Zepto;
    if ("undefined" != typeof e) {
        var t = function(e, i) {
            return new t.fn.init(e,i)
        };
        t.title = t.$name = "Editor.md",
        t.version = "1.5.0",
        t.homePage = "https://pandao.github.io/editor.md/",
        t.classPrefix = "editormd-",
        t.toolbarModes = {
            full: ["undo", "redo", "|", "bold", "del", "italic", "quote", "ucwords", "uppercase", "lowercase", "|", "h1", "h2", "h3", "h4", "h5", "h6", "|", "list-ul", "list-ol", "hr", "|", "link", "reference-link", "image", "code", "preformatted-text", "code-block", "table", "datetime", "emoji", "html-entities", "pagebreak", "|", "goto-line", "watch", "preview", "fullscreen", "clear", "search", "|", "help", "info"],
            simple: ["undo", "redo", "|", "bold", "del", "italic", "quote", "uppercase", "lowercase", "|", "h1", "h2", "h3", "h4", "h5", "h6", "|", "list-ul", "list-ol", "hr", "|", "watch", "preview", "fullscreen", "|", "help", "info"],
            mini: ["undo", "redo", "|", "watch", "preview", "|", "help", "info"]
        },
        t.defaults = {
            mode: "gfm",
            name: "",
            value: "",
            theme: "",
            editorTheme: "default",
            previewTheme: "",
            markdown: "",
            appendMarkdown: "",
            width: "100%",
            height: "100%",
            path: "./lib/",
            pluginPath: "",
            delay: 300,
            autoLoadModules: !0,
            watch: !0,
            placeholder: "Enjoy Markdown! coding now...",
            gotoLine: !0,
            codeFold: !1,
            autoHeight: !1,
            autoFocus: !0,
            autoCloseTags: !0,
            searchReplace: !0,
            syncScrolling: !0,
            readOnly: !1,
            tabSize: 4,
            indentUnit: 4,
            lineNumbers: !0,
            lineWrapping: !0,
            autoCloseBrackets: !0,
            showTrailingSpace: !0,
            matchBrackets: !0,
            indentWithTabs: !0,
            styleSelectedText: !0,
            matchWordHighlight: !0,
            styleActiveLine: !0,
            dialogLockScreen: !0,
            dialogShowMask: !0,
            dialogDraggable: !0,
            dialogMaskBgColor: "#fff",
            dialogMaskOpacity: .1,
            fontSize: "13px",
            saveHTMLToTextarea: !1,
            disabledKeyMaps: [],
            onload: function() {},
            onresize: function() {},
            onchange: function() {},
            onwatch: null,
            onunwatch: null,
            onpreviewing: function() {},
            onpreviewed: function() {},
            onfullscreen: function() {},
            onfullscreenExit: function() {},
            onscroll: function() {},
            onpreviewscroll: function() {},
            imageUpload: !1,
            imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
            imageUploadURL: "",
            crossDomainUpload: !1,
            uploadCallbackURL: "",
            toc: !0,
            tocm: !1,
            tocTitle: "",
            tocDropdown: !1,
            tocContainer: "",
            tocStartLevel: 1,
            htmlDecode: !1,
            pageBreak: !0,
            atLink: !0,
            emailLink: !0,
            taskList: !1,
            emoji: !1,
            tex: !1,
            flowChart: !1,
            sequenceDiagram: !1,
            previewCodeHighlight: !0,
            toolbar: !0,
            toolbarAutoFixed: !0,
            toolbarIcons: "full",
            toolbarTitles: {},
            toolbarHandlers: {
                ucwords: function() {
                    return t.toolbarHandlers.ucwords
                },
                lowercase: function() {
                    return t.toolbarHandlers.lowercase
                }
            },
            toolbarCustomIcons: {
                lowercase: '<a href="javascript:;" title="Lowercase" unselectable="on"><i class="fa" name="lowercase" style="font-size:24px;margin-top: -10px;">a</i></a>',
                ucwords: '<a href="javascript:;" title="ucwords" unselectable="on"><i class="fa" name="ucwords" style="font-size:20px;margin-top: -3px;">Aa</i></a>'
            },
            toolbarIconsClass: {
                undo: "fa-undo",
                redo: "fa-repeat",
                bold: "fa-bold",
                del: "fa-strikethrough",
                italic: "fa-italic",
                quote: "fa-quote-left",
                uppercase: "fa-font",
                h1: t.classPrefix + "bold",
                h2: t.classPrefix + "bold",
                h3: t.classPrefix + "bold",
                h4: t.classPrefix + "bold",
                h5: t.classPrefix + "bold",
                h6: t.classPrefix + "bold",
                "list-ul": "fa-list-ul",
                "list-ol": "fa-list-ol",
                hr: "fa-minus",
                link: "fa-link",
                "reference-link": "fa-anchor",
                image: "fa-picture-o",
                code: "fa-code",
                "preformatted-text": "fa-file-code-o",
                "code-block": "fa-file-code-o",
                table: "fa-table",
                datetime: "fa-clock-o",
                emoji: "fa-smile-o",
                "html-entities": "fa-copyright",
                pagebreak: "fa-newspaper-o",
                "goto-line": "fa-terminal",
                watch: "fa-eye-slash",
                unwatch: "fa-eye",
                preview: "fa-desktop",
                search: "fa-search",
                fullscreen: "fa-arrows-alt",
                clear: "fa-eraser",
                help: "fa-question-circle",
                info: "fa-info-circle"
            },
            toolbarIconTexts: {},
            lang: {
                name: "zh-cn",
                description: "开源在线Markdown编辑器<br/>Open source online Markdown editor.",
                tocTitle: "目录",
                toolbar: {
                    undo: "撤销（Ctrl+Z）",
                    redo: "重做（Ctrl+Y）",
                    bold: "粗体",
                    del: "删除线",
                    italic: "斜体",
                    quote: "引用",
                    ucwords: "将每个单词首字母转成大写",
                    uppercase: "将所选转换成大写",
                    lowercase: "将所选转换成小写",
                    h1: "标题1",
                    h2: "标题2",
                    h3: "标题3",
                    h4: "标题4",
                    h5: "标题5",
                    h6: "标题6",
                    "list-ul": "无序列表",
                    "list-ol": "有序列表",
                    hr: "横线",
                    link: "链接",
                    "reference-link": "引用链接",
                    image: "添加图片",
                    code: "行内代码",
                    "preformatted-text": "预格式文本 / 代码块（缩进风格）",
                    "code-block": "代码块（多语言风格）",
                    table: "添加表格",
                    datetime: "日期时间",
                    emoji: "Emoji表情",
                    "html-entities": "HTML实体字符",
                    pagebreak: "插入分页符",
                    "goto-line": "跳转到行",
                    watch: "关闭实时预览",
                    unwatch: "开启实时预览",
                    preview: "全窗口预览HTML（按 Shift + ESC还原）",
                    fullscreen: "全屏（按ESC还原）",
                    clear: "清空",
                    search: "搜索",
                    help: "使用帮助",
                    info: "关于" + t.title
                },
                buttons: {
                    enter: "确定",
                    cancel: "取消",
                    close: "关闭"
                },
                dialog: {
                    link: {
                        title: "添加链接",
                        url: "链接地址",
                        urlTitle: "链接标题",
                        urlEmpty: "错误：请填写链接地址。"
                    },
                    referenceLink: {
                        title: "添加引用链接",
                        name: "引用名称",
                        url: "链接地址",
                        urlId: "链接ID",
                        urlTitle: "链接标题",
                        nameEmpty: "错误：引用链接的名称不能为空。",
                        idEmpty: "错误：请填写引用链接的ID。",
                        urlEmpty: "错误：请填写引用链接的URL地址。"
                    },
                    image: {
                        title: "添加图片",
                        url: "图片地址",
                        link: "图片链接",
                        alt: "图片描述",
                        uploadButton: "本地上传",
                        imageURLEmpty: "错误：图片地址不能为空。",
                        uploadFileEmpty: "错误：上传的图片不能为空。",
                        formatNotAllowed: "错误：只允许上传图片文件，允许上传的图片文件格式有："
                    },
                    preformattedText: {
                        title: "添加预格式文本或代码块",
                        emptyAlert: "错误：请填写预格式文本或代码的内容。"
                    },
                    codeBlock: {
                        title: "添加代码块",
                        selectLabel: "代码语言：",
                        selectDefaultText: "请选择代码语言",
                        otherLanguage: "其他语言",
                        unselectedLanguageAlert: "错误：请选择代码所属的语言类型。",
                        codeEmptyAlert: "错误：请填写代码内容。"
                    },
                    htmlEntities: {
                        title: "HTML 实体字符"
                    },
                    help: {
                        title: "使用帮助"
                    }
                }
            }
        },
        t.classNames = {
            tex: t.classPrefix + "tex"
        },
        t.dialogZindex = 99999,
        t.$katex = null,
        t.$marked = null,
        t.$CodeMirror = null,
        t.$prettyPrint = null;
        var i, o;
        t.prototype = t.fn = {
            state: {
                watching: !1,
                loaded: !1,
                preview: !1,
                fullscreen: !1
            },
            init: function(i, o) {
                o = o || {},
                "object" == typeof i && (o = i);
                var r = this.classPrefix = t.classPrefix
                  , n = this.settings = e.extend(!0, t.defaults, o);
                i = "object" == typeof i ? n.id : i;
                var a = this.editor = e("#" + i);
                this.id = i,
                this.lang = n.lang;
                var s = this.classNames = {
                    textarea: {
                        html: r + "html-textarea",
                        markdown: r + "markdown-textarea"
                    }
                };
                n.pluginPath = "" === n.pluginPath ? n.path + "../plugins/" : n.pluginPath,
                this.state.watching = n.watch ? !0 : !1,
                a.hasClass("editormd") || a.addClass("editormd"),
                a.css({
                    width: "number" == typeof n.width ? n.width + "px" : n.width,
                    height: "number" == typeof n.height ? n.height + "px" : n.height
                }),
                n.autoHeight && a.css("height", "auto");
                var l = this.markdownTextarea = a.children("textarea");
                l.length < 1 && (a.append("<textarea></textarea>"),
                l = this.markdownTextarea = a.children("textarea")),
                l.addClass(s.textarea.markdown).attr("placeholder", n.placeholder),
                ("undefined" == typeof l.attr("name") || "" === l.attr("name")) && l.attr("name", "" !== n.name ? n.name : i + "-markdown-doc");
                var c = [n.readOnly ? "" : '<a href="javascript:;" class="fa fa-close ' + r + 'preview-close-btn"></a>', n.saveHTMLToTextarea ? '<textarea class="' + s.textarea.html + '" name="' + i + '-html-code"></textarea>' : "", '<div class="' + r + 'preview"><div class="markdown-body ' + r + 'preview-container"></div></div>', '<div class="' + r + 'container-mask" style="display:block;"></div>', '<div class="' + r + 'mask"></div>'].join("\n");
                return a.append(c).addClass(r + "vertical"),
                "" !== n.theme && a.addClass(r + "theme-" + n.theme),
                this.mask = a.children("." + r + "mask"),
                this.containerMask = a.children("." + r + "container-mask"),
                "" !== n.markdown && l.val(n.markdown),
                "" !== n.appendMarkdown && l.val(l.val() + n.appendMarkdown),
                this.htmlTextarea = a.children("." + s.textarea.html),
                this.preview = a.children("." + r + "preview"),
                this.previewContainer = this.preview.children("." + r + "preview-container"),
                "" !== n.previewTheme && this.preview.addClass(r + "preview-theme-" + n.previewTheme),
                "function" == typeof define && define.amd && ("undefined" != typeof katex && (t.$katex = katex),
                n.searchReplace && !n.readOnly && (t.loadCSS(n.path + "codemirror/addon/dialog/dialog"),
                t.loadCSS(n.path + "codemirror/addon/search/matchesonscrollbar"))),
                "function" == typeof define && define.amd || !n.autoLoadModules ? ("undefined" != typeof CodeMirror && (t.$CodeMirror = CodeMirror),
                "undefined" != typeof marked && (t.$marked = marked),
                this.setCodeMirror().setToolbar().loadedDisplay()) : this.loadQueues(),
                this
            },
            loadQueues: function() {
                var e = this
                  , i = this.settings
                  , o = i.path
                  , r = function() {
                    return t.isIE8 ? void e.loadedDisplay() : void (i.flowChart || i.sequenceDiagram ? t.loadScript(o + "raphael.min", function() {
                        t.loadScript(o + "underscore.min", function() {
                            !i.flowChart && i.sequenceDiagram ? t.loadScript(o + "sequence-diagram.min", function() {
                                e.loadedDisplay()
                            }) : i.flowChart && !i.sequenceDiagram ? t.loadScript(o + "flowchart.min", function() {
                                t.loadScript(o + "jquery.flowchart.min", function() {
                                    e.loadedDisplay()
                                })
                            }) : i.flowChart && i.sequenceDiagram && t.loadScript(o + "flowchart.min", function() {
                                t.loadScript(o + "jquery.flowchart.min", function() {
                                    t.loadScript(o + "sequence-diagram.min", function() {
                                        e.loadedDisplay()
                                    })
                                })
                            })
                        })
                    }) : e.loadedDisplay())
                };
                return t.loadCSS(o + "codemirror/codemirror.min"),
                i.searchReplace && !i.readOnly && (t.loadCSS(o + "codemirror/addon/dialog/dialog"),
                t.loadCSS(o + "codemirror/addon/search/matchesonscrollbar")),
                i.codeFold && t.loadCSS(o + "codemirror/addon/fold/foldgutter"),
                t.loadScript(o + "codemirror/codemirror.min", function() {
                    t.$CodeMirror = CodeMirror,
                    t.loadScript(o + "codemirror/modes.min", function() {
                        t.loadScript(o + "codemirror/addons.min", function() {
                            return e.setCodeMirror(),
                            "gfm" !== i.mode && "markdown" !== i.mode ? (e.loadedDisplay(),
                            !1) : (e.setToolbar(),
                            void t.loadScript(o + "marked.min", function() {
                                t.$marked = marked,
                                i.previewCodeHighlight ? t.loadScript(o + "prettify.min", function() {
                                    r()
                                }) : r()
                            }))
                        })
                    })
                }),
                this
            },
            setTheme: function(e) {
                var t = this.editor
                  , i = this.settings.theme
                  , o = this.classPrefix + "theme-";
                return t.removeClass(o + i).addClass(o + e),
                this.settings.theme = e,
                this
            },
            setEditorTheme: function(e) {
                var i = this.settings;
                return i.editorTheme = e,
                "default" !== e && t.loadCSS(i.path + "codemirror/theme/" + i.editorTheme),
                this.cm.setOption("theme", e),
                this
            },
            setCodeMirrorTheme: function(e) {
                return this.setEditorTheme(e),
                this
            },
            setPreviewTheme: function(e) {
                var t = this.preview
                  , i = this.settings.previewTheme
                  , o = this.classPrefix + "preview-theme-";
                return t.removeClass(o + i).addClass(o + e),
                this.settings.previewTheme = e,
                this
            },
            setCodeMirror: function() {
                var e = this.settings
                  , i = this.editor;
                "default" !== e.editorTheme && t.loadCSS(e.path + "codemirror/theme/" + e.editorTheme);
                var o = {
                    mode: e.mode,
                    theme: e.editorTheme,
                    tabSize: e.tabSize,
                    dragDrop: !1,
                    autofocus: e.autoFocus,
                    autoCloseTags: e.autoCloseTags,
                    readOnly: e.readOnly ? "nocursor" : !1,
                    indentUnit: e.indentUnit,
                    lineNumbers: e.lineNumbers,
                    lineWrapping: e.lineWrapping,
                    extraKeys: {
                        "Ctrl-Q": function(e) {
                            e.foldCode(e.getCursor())
                        }
                    },
                    foldGutter: e.codeFold,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    matchBrackets: e.matchBrackets,
                    indentWithTabs: e.indentWithTabs,
                    styleActiveLine: e.styleActiveLine,
                    styleSelectedText: e.styleSelectedText,
                    autoCloseBrackets: e.autoCloseBrackets,
                    showTrailingSpace: e.showTrailingSpace,
                    highlightSelectionMatches: e.matchWordHighlight ? {
                        showToken: "onselected" === e.matchWordHighlight ? !1 : /\w/
                    } : !1
                };
                return this.codeEditor = this.cm = t.$CodeMirror.fromTextArea(this.markdownTextarea[0], o),
                this.codeMirror = this.cmElement = i.children(".CodeMirror"),
                "" !== e.value && this.cm.setValue(e.value),
                this.codeMirror.css({
                    fontSize: e.fontSize,
                    width: e.watch ? "50%" : "100%"
                }),
                e.autoHeight && (this.codeMirror.css("height", "auto"),
                this.cm.setOption("viewportMargin", 1 / 0)),
                e.lineNumbers || this.codeMirror.find(".CodeMirror-gutters").css("border-right", "none"),
                this
            },
            getCodeMirrorOption: function(e) {
                return this.cm.getOption(e)
            },
            setCodeMirrorOption: function(e, t) {
                return this.cm.setOption(e, t),
                this
            },
            addKeyMap: function(e, t) {
                return this.cm.addKeyMap(e, t),
                this
            },
            removeKeyMap: function(e) {
                return this.cm.removeKeyMap(e),
                this
            },
            gotoLine: function(t) {
                var i = this.settings;
                if (!i.gotoLine)
                    return this;
                var o = this.cm
                  , r = (this.editor,
                o.lineCount())
                  , n = this.preview;
                if ("string" == typeof t && ("last" === t && (t = r),
                "first" === t && (t = 1)),
                "number" != typeof t)
                    return alert("Error: The line number must be an integer."),
                    this;
                if (t = parseInt(t) - 1,
                t > r)
                    return alert("Error: The line number range 1-" + r),
                    this;
                o.setCursor({
                    line: t,
                    ch: 0
                });
                var a = o.getScrollInfo()
                  , s = a.clientHeight
                  , l = o.charCoords({
                    line: t,
                    ch: 0
                }, "local");
                if (o.scrollTo(null, (l.top + l.bottom - s) / 2),
                i.watch) {
                    var c = this.codeMirror.find(".CodeMirror-scroll")[0]
                      , h = e(c).height()
                      , d = c.scrollTop
                      , u = d / c.scrollHeight;
                    n.scrollTop(0 === d ? 0 : d + h >= c.scrollHeight - 16 ? n[0].scrollHeight : n[0].scrollHeight * u)
                }
                return o.focus(),
                this
            },
            extend: function() {
                return "undefined" != typeof arguments[1] && ("function" == typeof arguments[1] && (arguments[1] = e.proxy(arguments[1], this)),
                this[arguments[0]] = arguments[1]),
                "object" == typeof arguments[0] && "undefined" == typeof arguments[0].length && e.extend(!0, this, arguments[0]),
                this
            },
            set: function(t, i) {
                return "undefined" != typeof i && "function" == typeof i && (i = e.proxy(i, this)),
                this[t] = i,
                this
            },
            config: function(t, i) {
                var o = this.settings;
                return "object" == typeof t && (o = e.extend(!0, o, t)),
                "string" == typeof t && (o[t] = i),
                this.settings = o,
                this.recreate(),
                this
            },
            on: function(t, i) {
                var o = this.settings;
                return "undefined" != typeof o["on" + t] && (o["on" + t] = e.proxy(i, this)),
                this
            },
            off: function(e) {
                var t = this.settings;
                return "undefined" != typeof t["on" + e] && (t["on" + e] = function() {}
                ),
                this
            },
            showToolbar: function(t) {
                var i = this.settings;
                return i.readOnly ? this : (i.toolbar && (this.toolbar.length < 1 || "" === this.toolbar.find("." + this.classPrefix + "menu").html()) && this.setToolbar(),
                i.toolbar = !0,
                this.toolbar.show(),
                this.resize(),
                e.proxy(t || function() {}
                , this)(),
                this)
            },
            hideToolbar: function(t) {
                var i = this.settings;
                return i.toolbar = !1,
                this.toolbar.hide(),
                this.resize(),
                e.proxy(t || function() {}
                , this)(),
                this
            },
            setToolbarAutoFixed: function(t) {
                var i = this.state
                  , o = this.editor
                  , r = this.toolbar
                  , n = this.settings;
                "undefined" != typeof t && (n.toolbarAutoFixed = t);
                var a = function() {
                    var t = e(window)
                      , i = t.scrollTop();
                    return n.toolbarAutoFixed ? void r.css(i - o.offset().top > 10 && i < o.height() ? {
                        position: "fixed",
                        width: o.width() + "px",
                        left: (t.width() - o.width()) / 2 + "px"
                    } : {
                        position: "absolute",
                        width: "100%",
                        left: 0
                    }) : !1
                };
                return !i.fullscreen && !i.preview && n.toolbar && n.toolbarAutoFixed && e(window).bind("scroll", a),
                this
            },
            setToolbar: function() {
                var e = this.settings;
                if (e.readOnly)
                    return this;
                var i = this.editor
                  , o = (this.preview,
                this.classPrefix)
                  , r = this.toolbar = i.children("." + o + "toolbar");
                if (e.toolbar && r.length < 1) {
                    var n = '<div class="' + o + 'toolbar"><div class="' + o + 'toolbar-container"><ul class="' + o + 'menu"></ul></div></div>';
                    i.append(n),
                    r = this.toolbar = i.children("." + o + "toolbar")
                }
                if (!e.toolbar)
                    return r.hide(),
                    this;
                r.show();
                for (var a = "function" == typeof e.toolbarIcons ? e.toolbarIcons() : "string" == typeof e.toolbarIcons ? t.toolbarModes[e.toolbarIcons] : e.toolbarIcons, s = r.find("." + this.classPrefix + "menu"), l = "", c = !1, h = 0, d = a.length; d > h; h++) {
                    var u = a[h];
                    if ("||" === u)
                        c = !0;
                    else if ("|" === u)
                        l += '<li class="divider" unselectable="on">|</li>';
                    else {
                        var f = /h(\d)/.test(u)
                          , g = u;
                        "watch" !== u || e.watch || (g = "unwatch");
                        var p = e.lang.toolbar[g]
                          , m = e.toolbarIconTexts[g]
                          , w = e.toolbarIconsClass[g];
                        p = "undefined" == typeof p ? "" : p,
                        m = "undefined" == typeof m ? "" : m,
                        w = "undefined" == typeof w ? "" : w;
                        var v = c ? '<li class="pull-right">' : "<li>";
                        "undefined" != typeof e.toolbarCustomIcons[u] && "function" != typeof e.toolbarCustomIcons[u] ? v += e.toolbarCustomIcons[u] : (v += '<a href="javascript:;" title="' + p + '" unselectable="on">',
                        v += '<i class="fa ' + w + '" name="' + u + '" unselectable="on">' + (f ? u.toUpperCase() : "" === w ? m : "") + "</i>",
                        v += "</a>"),
                        v += "</li>",
                        l = c ? v + l : l + v
                    }
                }
                return s.html(l),
                s.find('[title="Lowercase"]').attr("title", e.lang.toolbar.lowercase),
                s.find('[title="ucwords"]').attr("title", e.lang.toolbar.ucwords),
                this.setToolbarHandler(),
                this.setToolbarAutoFixed(),
                this
            },
            dialogLockScreen: function() {
                return e.proxy(t.dialogLockScreen, this)(),
                this
            },
            dialogShowMask: function(i) {
                return e.proxy(t.dialogShowMask, this)(i),
                this
            },
            getToolbarHandles: function(e) {
                var i = this.toolbarHandlers = t.toolbarHandlers;
                return e && "undefined" != typeof toolbarIconHandlers[e] ? i[e] : i
            },
            setToolbarHandler: function() {
                var i = this
                  , o = this.settings;
                if (!o.toolbar || o.readOnly)
                    return this;
                var r = this.toolbar
                  , n = this.cm
                  , a = this.classPrefix
                  , s = this.toolbarIcons = r.find("." + a + "menu > li > a")
                  , l = this.getToolbarHandles();
                return s.bind(t.mouseOrTouch("click", "touchend"), function(t) {
                    var r = e(this).children(".fa")
                      , a = r.attr("name")
                      , s = n.getCursor()
                      , c = n.getSelection();
                    return "" !== a ? (i.activeIcon = r,
                    "undefined" != typeof l[a] ? e.proxy(l[a], i)(n) : "undefined" != typeof o.toolbarHandlers[a] && e.proxy(o.toolbarHandlers[a], i)(n, r, s, c),
                    "link" !== a && "reference-link" !== a && "image" !== a && "code-block" !== a && "preformatted-text" !== a && "watch" !== a && "preview" !== a && "search" !== a && "fullscreen" !== a && "info" !== a && n.focus(),
                    !1) : void 0
                }),
                this
            },
            createDialog: function(i) {
                return e.proxy(t.createDialog, this)(i)
            },
            createInfoDialog: function() {
                var e = this
                  , i = this.editor
                  , o = this.classPrefix
                  , r = ['<div class="' + o + "dialog " + o + 'dialog-info" style="">', '<div class="' + o + 'dialog-container">', '<h1><i class="editormd-logo editormd-logo-lg editormd-logo-color"></i> ' + t.title + "<small>v" + t.version + "</small></h1>", "<p>" + this.lang.description + "</p>", '<p style="margin: 10px 0 20px 0;"><a href="' + t.homePage + '" target="_blank">' + t.homePage + ' <i class="fa fa-external-link"></i></a></p>', '<p style="font-size: 0.85em;">Copyright &copy; 2015 <a href="https://github.com/pandao" target="_blank" class="hover-link">Pandao</a>, The <a href="https://github.com/pandao/editor.md/blob/master/LICENSE" target="_blank" class="hover-link">MIT</a> License.</p>', "</div>", '<a href="javascript:;" class="fa fa-close ' + o + 'dialog-close"></a>', "</div>"].join("\n");
                i.append(r);
                var n = this.infoDialog = i.children("." + o + "dialog-info");
                return n.find("." + o + "dialog-close").bind(t.mouseOrTouch("click", "touchend"), function() {
                    e.hideInfoDialog()
                }),
                n.css("border", t.isIE8 ? "1px solid #ddd" : "").css("z-index", t.dialogZindex).show(),
                this.infoDialogPosition(),
                this
            },
            infoDialogPosition: function() {
                var t = this.infoDialog
                  , i = function() {
                    t.css({
                        top: (e(window).height() - t.height()) / 2 + "px",
                        left: (e(window).width() - t.width()) / 2 + "px"
                    })
                };
                return i(),
                e(window).resize(i),
                this
            },
            showInfoDialog: function() {
                e("html,body").css("overflow-x", "hidden");
                var i = this.editor
                  , o = this.settings
                  , r = this.infoDialog = i.children("." + this.classPrefix + "dialog-info");
                return r.length < 1 && this.createInfoDialog(),
                this.lockScreen(!0),
                this.mask.css({
                    opacity: o.dialogMaskOpacity,
                    backgroundColor: o.dialogMaskBgColor
                }).show(),
                r.css("z-index", t.dialogZindex).show(),
                this.infoDialogPosition(),
                this
            },
            hideInfoDialog: function() {
                return e("html,body").css("overflow-x", ""),
                this.infoDialog.hide(),
                this.mask.hide(),
                this.lockScreen(!1),
                this
            },
            lockScreen: function(e) {
                return t.lockScreen(e),
                this.resize(),
                this
            },
            recreate: function() {
                var e = this.editor
                  , t = this.settings;
                return this.codeMirror.remove(),
                this.setCodeMirror(),
                t.readOnly || (e.find(".editormd-dialog").length > 0 && e.find(".editormd-dialog").remove(),
                t.toolbar && (this.getToolbarHandles(),
                this.setToolbar())),
                this.loadedDisplay(!0),
                this
            },
            previewCodeHighlight: function() {
                var e = this.settings
                  , t = this.previewContainer;
                return e.previewCodeHighlight && (t.find("pre").addClass("prettyprint linenums"),
                "undefined" != typeof prettyPrint && prettyPrint()),
                this
            },
            katexRender: function() {
                return null === i ? this : (this.previewContainer.find("." + t.classNames.tex).each(function() {
                    var i = e(this);
                    t.$katex.render(i.text(), i[0]),
                    i.find(".katex").css("font-size", "1.6em")
                }),
                this)
            },
            flowChartAndSequenceDiagramRender: function() {
                var i = this
                  , r = this.settings
                  , n = this.previewContainer;
                if (t.isIE8)
                    return this;
                if (r.flowChart) {
                    if (null === o)
                        return this;
                    n.find(".flowchart").flowChart()
                }
                r.sequenceDiagram && n.find(".sequence-diagram").sequenceDiagram({
                    theme: "simple"
                });
                var a = i.preview
                  , s = i.codeMirror
                  , l = s.find(".CodeMirror-scroll")
                  , c = l.height()
                  , h = l.scrollTop()
                  , d = h / l[0].scrollHeight
                  , u = 0;
                a.find(".markdown-toc-list").each(function() {
                    u += e(this).height()
                });
                var f = a.find(".editormd-toc-menu").height();
                return f = f ? f : 0,
                a.scrollTop(0 === h ? 0 : h + c >= l[0].scrollHeight - 16 ? a[0].scrollHeight : (a[0].scrollHeight + u + f) * d),
                this
            },
            registerKeyMaps: function(i) {
                var o = this
                  , r = this.cm
                  , n = this.settings
                  , a = t.toolbarHandlers
                  , s = n.disabledKeyMaps;
                if (i = i || null) {
                    for (var l in i)
                        if (e.inArray(l, s) < 0) {
                            var c = {};
                            c[l] = i[l],
                            r.addKeyMap(i)
                        }
                } else {
                    for (var h in t.keyMaps) {
                        var d = t.keyMaps[h]
                          , u = "string" == typeof d ? e.proxy(a[d], o) : e.proxy(d, o);
                        if (e.inArray(h, ["F9", "F10", "F11"]) < 0 && e.inArray(h, s) < 0) {
                            var f = {};
                            f[h] = u,
                            r.addKeyMap(f)
                        }
                    }
                    e(window).keydown(function(t) {
                        var i = {
                            120: "F9",
                            121: "F10",
                            122: "F11"
                        };
                        if (e.inArray(i[t.keyCode], s) < 0)
                            switch (t.keyCode) {
                            case 120:
                                return e.proxy(a.watch, o)(),
                                !1;
                            case 121:
                                return e.proxy(a.preview, o)(),
                                !1;
                            case 122:
                                return e.proxy(a.fullscreen, o)(),
                                !1
                            }
                    })
                }
                return this
            },
            bindScrollEvent: function() {
                var i = this
                  , o = this.preview
                  , r = this.settings
                  , n = this.codeMirror
                  , a = t.mouseOrTouch;
                if (!r.syncScrolling)
                    return this;
                var s = function() {
                    n.find(".CodeMirror-scroll").bind(a("scroll", "touchmove"), function(t) {
                        var n = e(this).height()
                          , a = e(this).scrollTop()
                          , s = a / e(this)[0].scrollHeight
                          , l = 0;
                        o.find(".markdown-toc-list").each(function() {
                            l += e(this).height()
                        });
                        var c = o.find(".editormd-toc-menu").height();
                        c = c ? c : 0,
                        o.scrollTop(0 === a ? 0 : a + n >= e(this)[0].scrollHeight - 16 ? o[0].scrollHeight : (o[0].scrollHeight + l + c) * s),
                        e.proxy(r.onscroll, i)(t)
                    })
                }
                  , l = function() {
                    n.find(".CodeMirror-scroll").unbind(a("scroll", "touchmove"))
                }
                  , c = function() {
                    o.bind(a("scroll", "touchmove"), function(t) {
                        var o = e(this).height()
                          , a = e(this).scrollTop()
                          , s = a / e(this)[0].scrollHeight
                          , l = n.find(".CodeMirror-scroll");
                        l.scrollTop(0 === a ? 0 : a + o >= e(this)[0].scrollHeight ? l[0].scrollHeight : l[0].scrollHeight * s),
                        e.proxy(r.onpreviewscroll, i)(t)
                    })
                }
                  , h = function() {
                    o.unbind(a("scroll", "touchmove"))
                };
                return n.bind({
                    mouseover: s,
                    mouseout: l,
                    touchstart: s,
                    touchend: l
                }),
                "single" === r.syncScrolling ? this : (o.bind({
                    mouseover: c,
                    mouseout: h,
                    touchstart: c,
                    touchend: h
                }),
                this)
            },
            bindChangeEvent: function() {
                var e = this
                  , t = this.cm
                  , o = this.settings;
                return o.syncScrolling ? (t.on("change", function(t, r) {
                    o.watch && e.previewContainer.css("padding", o.autoHeight ? "20px 20px 50px 40px" : "20px"),
                    i = setTimeout(function() {
                        clearTimeout(i),
                        e.save(),
                        i = null
                    }, o.delay)
                }),
                this) : this
            },
            loadedDisplay: function(t) {
                t = t || !1;
                var i = this
                  , o = this.editor
                  , r = this.preview
                  , n = this.settings;
                return this.containerMask.hide(),
                this.save(),
                n.watch && r.show(),
                o.data("oldWidth", o.width()).data("oldHeight", o.height()),
                this.resize(),
                this.registerKeyMaps(),
                e(window).resize(function() {
                    i.resize()
                }),
                this.bindScrollEvent().bindChangeEvent(),
                t || e.proxy(n.onload, this)(),
                this.state.loaded = !0,
                this
            },
            width: function(e) {
                return this.editor.css("width", "number" == typeof e ? e + "px" : e),
                this.resize(),
                this
            },
            height: function(e) {
                return this.editor.css("height", "number" == typeof e ? e + "px" : e),
                this.resize(),
                this
            },
            resize: function(t, i) {
                t = t || null,
                i = i || null;
                var o = this.state
                  , r = this.editor
                  , n = this.preview
                  , a = this.toolbar
                  , s = this.settings
                  , l = this.codeMirror;
                if (t && r.css("width", "number" == typeof t ? t + "px" : t),
                !s.autoHeight || o.fullscreen || o.preview ? (i && r.css("height", "number" == typeof i ? i + "px" : i),
                o.fullscreen && r.height(e(window).height()),
                s.toolbar && !s.readOnly ? l.css("margin-top", a.height() + 1).height(r.height() - a.height()) : l.css("margin-top", 0).height(r.height())) : (r.css("height", "auto"),
                l.css("height", "auto")),
                s.watch)
                    if (l.width(r.width() / 2),
                    n.width(o.preview ? r.width() : r.width() / 2),
                    this.previewContainer.css("padding", s.autoHeight ? "20px 20px 50px 40px" : "20px"),
                    s.toolbar && !s.readOnly ? n.css("top", a.height() + 1) : n.css("top", 0),
                    !s.autoHeight || o.fullscreen || o.preview) {
                        var c = s.toolbar && !s.readOnly ? r.height() - a.height() : r.height();
                        n.height(c)
                    } else
                        n.height("");
                else
                    l.width(r.width()),
                    n.hide();
                return o.loaded && e.proxy(s.onresize, this)(),
                this
            },
            save: function() {
                if (null === i)
                    return this;
                var r = this
                  , n = this.state
                  , a = this.settings
                  , s = this.cm
                  , l = s.getValue()
                  , c = this.previewContainer;
                if ("gfm" !== a.mode && "markdown" !== a.mode)
                    return this.markdownTextarea.val(l),
                    this;
                var h = t.$marked
                  , d = this.markdownToC = []
                  , u = this.markedRendererOptions = {
                    toc: a.toc,
                    tocm: a.tocm,
                    tocStartLevel: a.tocStartLevel,
                    pageBreak: a.pageBreak,
                    taskList: a.taskList,
                    emoji: a.emoji,
                    tex: a.tex,
                    atLink: a.atLink,
                    emailLink: a.emailLink,
                    flowChart: a.flowChart,
                    sequenceDiagram: a.sequenceDiagram,
                    previewCodeHighlight: a.previewCodeHighlight
                }
                  , f = this.markedOptions = {
                    renderer: t.markedRenderer(d, u),
                    gfm: !0,
                    tables: !0,
                    breaks: !0,
                    pedantic: !1,
                    sanitize: a.htmlDecode ? !1 : !0,
                    smartLists: !0,
                    smartypants: !0
                };
                h.setOptions(f);
                var g = t.$marked(l, f);
                if (g = t.filterHTMLTags(g, a.htmlDecode),
                this.markdownTextarea.text(l),
                s.save(),
                a.saveHTMLToTextarea && this.htmlTextarea.text(g),
                a.watch || !a.watch && n.preview) {
                    if (c.html(g),
                    this.previewCodeHighlight(),
                    a.toc) {
                        var p = "" === a.tocContainer ? c : e(a.tocContainer)
                          , m = p.find("." + this.classPrefix + "toc-menu");
                        p.attr("previewContainer", "" === a.tocContainer ? "true" : "false"),
                        "" !== a.tocContainer && m.length > 0 && m.remove(),
                        t.markdownToCRenderer(d, p, a.tocDropdown, a.tocStartLevel),
                        (a.tocDropdown || p.find("." + this.classPrefix + "toc-menu").length > 0) && t.tocDropdownMenu(p, "" !== a.tocTitle ? a.tocTitle : this.lang.tocTitle),
                        "" !== a.tocContainer && c.find(".markdown-toc").css("border", "none")
                    }
                    a.tex && (!t.kaTeXLoaded && a.autoLoadModules ? t.loadKaTeX(function() {
                        t.$katex = katex,
                        t.kaTeXLoaded = !0,
                        r.katexRender()
                    }) : (t.$katex = katex,
                    this.katexRender())),
                    (a.flowChart || a.sequenceDiagram) && (o = setTimeout(function() {
                        clearTimeout(o),
                        r.flowChartAndSequenceDiagramRender(),
                        o = null
                    }, 10)),
                    n.loaded && e.proxy(a.onchange, this)()
                }
                return this
            },
            focus: function() {
                return this.cm.focus(),
                this
            },
            setCursor: function(e) {
                return this.cm.setCursor(e),
                this
            },
            getCursor: function() {
                return this.cm.getCursor()
            },
            setSelection: function(e, t) {
                return this.cm.setSelection(e, t),
                this
            },
            getSelection: function() {
                return this.cm.getSelection()
            },
            setSelections: function(e) {
                return this.cm.setSelections(e),
                this
            },
            getSelections: function() {
                return this.cm.getSelections()
            },
            replaceSelection: function(e) {
                return this.cm.replaceSelection(e),
                this
            },
            insertValue: function(e) {
                return this.replaceSelection(e),
                this
            },
            appendMarkdown: function(e) {
                var t = (this.settings,
                this.cm);
                return t.setValue(t.getValue() + e),
                this
            },
            setMarkdown: function(e) {
                return this.cm.setValue(e || this.settings.markdown),
                this
            },
            getMarkdown: function() {
                return this.cm.getValue()
            },
            getValue: function() {
                return this.cm.getValue()
            },
            setValue: function(e) {
                return this.cm.setValue(e),
                this
            },
            clear: function() {
                return this.cm.setValue(""),
                this
            },
            getHTML: function() {
                return this.settings.saveHTMLToTextarea ? this.htmlTextarea.val() : (alert("Error: settings.saveHTMLToTextarea == false"),
                !1)
            },
            getTextareaSavedHTML: function() {
                return this.getHTML()
            },
            getPreviewedHTML: function() {
                return this.settings.watch ? this.previewContainer.html() : (alert("Error: settings.watch == false"),
                !1)
            },
            watch: function(t) {
                var o = this.settings;
                if (e.inArray(o.mode, ["gfm", "markdown"]) < 0)
                    return this;
                if (this.state.watching = o.watch = !0,
                this.preview.show(),
                this.toolbar) {
                    var r = o.toolbarIconsClass.watch
                      , n = o.toolbarIconsClass.unwatch
                      , a = this.toolbar.find(".fa[name=watch]");
                    a.parent().attr("title", o.lang.toolbar.watch),
                    a.removeClass(n).addClass(r)
                }
                return this.codeMirror.css("border-right", "1px solid #ddd").width(this.editor.width() / 2),
                i = 0,
                this.save().resize(),
                o.onwatch || (o.onwatch = t || function() {}
                ),
                e.proxy(o.onwatch, this)(),
                this
            },
            unwatch: function(t) {
                var i = this.settings;
                if (this.state.watching = i.watch = !1,
                this.preview.hide(),
                this.toolbar) {
                    var o = i.toolbarIconsClass.watch
                      , r = i.toolbarIconsClass.unwatch
                      , n = this.toolbar.find(".fa[name=watch]");
                    n.parent().attr("title", i.lang.toolbar.unwatch),
                    n.removeClass(o).addClass(r)
                }
                return this.codeMirror.css("border-right", "none").width(this.editor.width()),
                this.resize(),
                i.onunwatch || (i.onunwatch = t || function() {}
                ),
                e.proxy(i.onunwatch, this)(),
                this
            },
            show: function(t) {
                t = t || function() {}
                ;
                var i = this;
                return this.editor.show(0, function() {
                    e.proxy(t, i)()
                }),
                this
            },
            hide: function(t) {
                t = t || function() {}
                ;
                var i = this;
                return this.editor.hide(0, function() {
                    e.proxy(t, i)()
                }),
                this
            },
            previewing: function() {
                var i = this
                  , o = this.editor
                  , r = this.preview
                  , n = this.toolbar
                  , a = this.settings
                  , s = this.codeMirror
                  , l = this.previewContainer;
                if (e.inArray(a.mode, ["gfm", "markdown"]) < 0)
                    return this;
                a.toolbar && n && (n.toggle(),
                n.find(".fa[name=preview]").toggleClass("active")),
                s.toggle();
                var c = function(e) {
                    e.shiftKey && 27 === e.keyCode && i.previewed()
                };
                "none" === s.css("display") ? (this.state.preview = !0,
                this.state.fullscreen && r.css("background", "#fff"),
                o.find("." + this.classPrefix + "preview-close-btn").show().bind(t.mouseOrTouch("click", "touchend"), function() {
                    i.previewed()
                }),
                a.watch ? l.css("padding", "") : this.save(),
                l.addClass(this.classPrefix + "preview-active"),
                r.show().css({
                    position: "",
                    top: 0,
                    width: o.width(),
                    height: a.autoHeight && !this.state.fullscreen ? "auto" : o.height()
                }),
                this.state.loaded && e.proxy(a.onpreviewing, this)(),
                e(window).bind("keyup", c)) : (e(window).unbind("keyup", c),
                this.previewed())
            },
            previewed: function() {
                var i = this.editor
                  , o = this.preview
                  , r = this.toolbar
                  , n = this.settings
                  , a = this.previewContainer
                  , s = i.find("." + this.classPrefix + "preview-close-btn");
                return this.state.preview = !1,
                this.codeMirror.show(),
                n.toolbar && r.show(),
                o[n.watch ? "show" : "hide"](),
                s.hide().unbind(t.mouseOrTouch("click", "touchend")),
                a.removeClass(this.classPrefix + "preview-active"),
                n.watch && a.css("padding", "20px"),
                o.css({
                    background: null,
                    position: "absolute",
                    width: i.width() / 2,
                    height: n.autoHeight && !this.state.fullscreen ? "auto" : i.height() - r.height(),
                    top: n.toolbar ? r.height() : 0
                }),
                this.state.loaded && e.proxy(n.onpreviewed, this)(),
                this
            },
            fullscreen: function() {
                var t = this
                  , i = this.state
                  , o = this.editor
                  , r = (this.preview,
                this.toolbar)
                  , n = this.settings
                  , a = this.classPrefix + "fullscreen";
                r && r.find(".fa[name=fullscreen]").parent().toggleClass("active");
                var s = function(e) {
                    e.shiftKey || 27 !== e.keyCode || i.fullscreen && t.fullscreenExit()
                };
                return o.hasClass(a) ? (e(window).unbind("keyup", s),
                this.fullscreenExit()) : (i.fullscreen = !0,
                e("html,body").css("overflow", "hidden"),
                o.css({
                    width: e(window).width(),
                    height: e(window).height()
                }).addClass(a),
                this.resize(),
                e.proxy(n.onfullscreen, this)(),
                e(window).bind("keyup", s)),
                this
            },
            fullscreenExit: function() {
                var t = this.editor
                  , i = this.settings
                  , o = this.toolbar
                  , r = this.classPrefix + "fullscreen";
                return this.state.fullscreen = !1,
                o && o.find(".fa[name=fullscreen]").parent().removeClass("active"),
                e("html,body").css("overflow", ""),
                t.css({
                    width: t.data("oldWidth"),
                    height: t.data("oldHeight")
                }).removeClass(r),
                this.resize(),
                e.proxy(i.onfullscreenExit, this)(),
                this
            },
            executePlugin: function(i, o) {
                var r = this
                  , n = this.cm
                  , a = this.settings;
                return o = a.pluginPath + o,
                "function" == typeof define ? "undefined" == typeof this[i] ? (alert("Error: " + i + " plugin is not found, you are not load this plugin."),
                this) : (this[i](n),
                this) : (e.inArray(o, t.loadFiles.plugin) < 0 ? t.loadPlugin(o, function() {
                    t.loadPlugins[i] = r[i],
                    r[i](n)
                }) : e.proxy(t.loadPlugins[i], this)(n),
                this)
            },
            search: function(e) {
                var t = this.settings;
                return t.searchReplace ? (t.readOnly || this.cm.execCommand(e || "find"),
                this) : (alert("Error: settings.searchReplace == false"),
                this)
            },
            searchReplace: function() {
                return this.search("replace"),
                this
            },
            searchReplaceAll: function() {
                return this.search("replaceAll"),
                this
            }
        },
        t.fn.init.prototype = t.fn,
        t.dialogLockScreen = function() {
            var t = this.settings || {
                dialogLockScreen: !0
            };
            t.dialogLockScreen && (e("html,body").css("overflow", "hidden"),
            this.resize())
        }
        ,
        t.dialogShowMask = function(t) {
            var i = this.editor
              , o = this.settings || {
                dialogShowMask: !0
            };
            t.css({
                top: (e(window).height() - t.height()) / 2 + "px",
                left: (e(window).width() - t.width()) / 2 + "px"
            }),
            o.dialogShowMask && i.children("." + this.classPrefix + "mask").css("z-index", parseInt(t.css("z-index")) - 1).show()
        }
        ,
        t.toolbarHandlers = {
            undo: function() {
                this.cm.undo()
            },
            redo: function() {
                this.cm.redo()
            },
            bold: function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                e.replaceSelection("**" + i + "**"),
                "" === i && e.setCursor(t.line, t.ch + 2)
            },
            del: function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                e.replaceSelection("~~" + i + "~~"),
                "" === i && e.setCursor(t.line, t.ch + 2)
            },
            italic: function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                e.replaceSelection("*" + i + "*"),
                "" === i && e.setCursor(t.line, t.ch + 1)
            },
            quote: function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                0 !== t.ch ? (e.setCursor(t.line, 0),
                e.replaceSelection("> " + i),
                e.setCursor(t.line, t.ch + 2)) : e.replaceSelection("> " + i)
            },
            ucfirst: function() {
                var e = this.cm
                  , i = e.getSelection()
                  , o = e.listSelections();
                e.replaceSelection(t.firstUpperCase(i)),
                e.setSelections(o)
            },
            ucwords: function() {
                var e = this.cm
                  , i = e.getSelection()
                  , o = e.listSelections();
                e.replaceSelection(t.wordsFirstUpperCase(i)),
                e.setSelections(o)
            },
            uppercase: function() {
                var e = this.cm
                  , t = e.getSelection()
                  , i = e.listSelections();
                e.replaceSelection(t.toUpperCase()),
                e.setSelections(i)
            },
            lowercase: function() {
                var e = this.cm
                  , t = (e.getCursor(),
                e.getSelection())
                  , i = e.listSelections();
                e.replaceSelection(t.toLowerCase()),
                e.setSelections(i)
            },
            h1: function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                0 !== t.ch ? (e.setCursor(t.line, 0),
                e.replaceSelection("# " + i),
                e.setCursor(t.line, t.ch + 2)) : e.replaceSelection("# " + i)
            },
            h2: function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                0 !== t.ch ? (e.setCursor(t.line, 0),
                e.replaceSelection("## " + i),
                e.setCursor(t.line, t.ch + 3)) : e.replaceSelection("## " + i)
            },
            h3: function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                0 !== t.ch ? (e.setCursor(t.line, 0),
                e.replaceSelection("### " + i),
                e.setCursor(t.line, t.ch + 4)) : e.replaceSelection("### " + i)
            },
            h4: function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                0 !== t.ch ? (e.setCursor(t.line, 0),
                e.replaceSelection("#### " + i),
                e.setCursor(t.line, t.ch + 5)) : e.replaceSelection("#### " + i)
            },
            h5: function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                0 !== t.ch ? (e.setCursor(t.line, 0),
                e.replaceSelection("##### " + i),
                e.setCursor(t.line, t.ch + 6)) : e.replaceSelection("##### " + i)
            },
            h6: function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                0 !== t.ch ? (e.setCursor(t.line, 0),
                e.replaceSelection("###### " + i),
                e.setCursor(t.line, t.ch + 7)) : e.replaceSelection("###### " + i)
            },
            "list-ul": function() {
                var e = this.cm
                  , t = (e.getCursor(),
                e.getSelection());
                if ("" === t)
                    e.replaceSelection("- " + t);
                else {
                    for (var i = t.split("\n"), o = 0, r = i.length; r > o; o++)
                        i[o] = "" === i[o] ? "" : "- " + i[o];
                    e.replaceSelection(i.join("\n"))
                }
            },
            "list-ol": function() {
                var e = this.cm
                  , t = (e.getCursor(),
                e.getSelection());
                if ("" === t)
                    e.replaceSelection("1. " + t);
                else {
                    for (var i = t.split("\n"), o = 0, r = i.length; r > o; o++)
                        i[o] = "" === i[o] ? "" : o + 1 + ". " + i[o];
                    e.replaceSelection(i.join("\n"))
                }
            },
            hr: function() {
                {
                    var e = this.cm
                      , t = e.getCursor();
                    e.getSelection()
                }
                e.replaceSelection((0 !== t.ch ? "\n\n" : "\n") + "------------\n\n")
            },
            tex: function() {
                if (!this.settings.tex)
                    return alert("settings.tex === false"),
                    this;
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                e.replaceSelection("$$" + i + "$$"),
                "" === i && e.setCursor(t.line, t.ch + 2)
            },
            link: function() {
                this.executePlugin("linkDialog", "link-dialog/link-dialog")
            },
            "reference-link": function() {
                this.executePlugin("referenceLinkDialog", "reference-link-dialog/reference-link-dialog")
            },
            pagebreak: function() {
                if (!this.settings.pageBreak)
                    return alert("settings.pageBreak === false"),
                    this;
                {
                    var e = this.cm;
                    e.getSelection()
                }
                e.replaceSelection("\r\n[========]\r\n")
            },
            image: function() {
                this.executePlugin("imageDialog", "image-dialog/image-dialog")
            },
            code: function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                e.replaceSelection("`" + i + "`"),
                "" === i && e.setCursor(t.line, t.ch + 1)
            },
            "code-block": function() {
                this.executePlugin("codeBlockDialog", "code-block-dialog/code-block-dialog")
            },
            "preformatted-text": function() {
                this.executePlugin("preformattedTextDialog", "preformatted-text-dialog/preformatted-text-dialog")
            },
            table: function() {
                this.executePlugin("tableDialog", "table-dialog/table-dialog")
            },
            datetime: function() {
                var e = this.cm
                  , i = (e.getSelection(),
                new Date,
                this.settings.lang.name)
                  , o = t.dateFormat() + " " + t.dateFormat("zh-cn" === i || "zh-tw" === i ? "cn-week-day" : "week-day");
                e.replaceSelection(o)
            },
            emoji: function() {
                this.executePlugin("emojiDialog", "emoji-dialog/emoji-dialog")
            },
            "html-entities": function() {
                this.executePlugin("htmlEntitiesDialog", "html-entities-dialog/html-entities-dialog")
            },
            "goto-line": function() {
                this.executePlugin("gotoLineDialog", "goto-line-dialog/goto-line-dialog")
            },
            watch: function() {
                this[this.settings.watch ? "unwatch" : "watch"]()
            },
            preview: function() {
                this.previewing()
            },
            fullscreen: function() {
                this.fullscreen()
            },
            clear: function() {
                this.clear()
            },
            search: function() {
                this.search()
            },
            help: function() {
                this.executePlugin("helpDialog", "help-dialog/help-dialog")
            },
            info: function() {
                this.showInfoDialog()
            }
        },
        t.keyMaps = {
            "Ctrl-1": "h1",
            "Ctrl-2": "h2",
            "Ctrl-3": "h3",
            "Ctrl-4": "h4",
            "Ctrl-5": "h5",
            "Ctrl-6": "h6",
            "Ctrl-B": "bold",
            "Ctrl-D": "datetime",
            "Ctrl-E": function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                return this.settings.emoji ? (e.replaceSelection(":" + i + ":"),
                void ("" === i && e.setCursor(t.line, t.ch + 1))) : void alert("Error: settings.emoji == false")
            },
            "Ctrl-Alt-G": "goto-line",
            "Ctrl-H": "hr",
            "Ctrl-I": "italic",
            "Ctrl-K": "code",
            "Ctrl-L": function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection()
                  , o = "" === i ? "" : ' "' + i + '"';
                e.replaceSelection("[" + i + "](" + o + ")"),
                "" === i && e.setCursor(t.line, t.ch + 1)
            },
            "Ctrl-U": "list-ul",
            "Shift-Ctrl-A": function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                return this.settings.atLink ? (e.replaceSelection("@" + i),
                void ("" === i && e.setCursor(t.line, t.ch + 1))) : void alert("Error: settings.atLink == false")
            },
            "Shift-Ctrl-C": "code",
            "Shift-Ctrl-Q": "quote",
            "Shift-Ctrl-S": "del",
            "Shift-Ctrl-K": "tex",
            "Shift-Alt-C": function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection();
                e.replaceSelection(["```", i, "```"].join("\n")),
                "" === i && e.setCursor(t.line, t.ch + 3)
            },
            "Shift-Ctrl-Alt-C": "code-block",
            "Shift-Ctrl-H": "html-entities",
            "Shift-Alt-H": "help",
            "Shift-Ctrl-E": "emoji",
            "Shift-Ctrl-U": "uppercase",
            "Shift-Alt-U": "ucwords",
            "Shift-Ctrl-Alt-U": "ucfirst",
            "Shift-Alt-L": "lowercase",
            "Shift-Ctrl-I": function() {
                var e = this.cm
                  , t = e.getCursor()
                  , i = e.getSelection()
                  , o = "" === i ? "" : ' "' + i + '"';
                e.replaceSelection("![" + i + "](" + o + ")"),
                "" === i && e.setCursor(t.line, t.ch + 4)
            },
            "Shift-Ctrl-Alt-I": "image",
            "Shift-Ctrl-L": "link",
            "Shift-Ctrl-O": "list-ol",
            "Shift-Ctrl-P": "preformatted-text",
            "Shift-Ctrl-T": "table",
            "Shift-Alt-P": "pagebreak",
            F9: "watch",
            F10: "preview",
            F11: "fullscreen"
        };
        var r = function(e) {
            return String.prototype.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        };
        t.trim = r;
        var n = function(e) {
            return e.toLowerCase().replace(/\b(\w)|\s(\w)/g, function(e) {
                return e.toUpperCase()
            })
        };
        t.ucwords = t.wordsFirstUpperCase = n;
        var a = function(e) {
            return e.toLowerCase().replace(/\b(\w)/, function(e) {
                return e.toUpperCase()
            })
        };
        return t.firstUpperCase = t.ucfirst = a,
        t.urls = {
            atLinkBase: "https://github.com/"
        },
        t.regexs = {
            atLink: /@(\w+)/g,
            email: /(\w+)@(\w+)\.(\w+)\.?(\w+)?/g,
            emailLink: /(mailto:)?([\w\.\_]+)@(\w+)\.(\w+)\.?(\w+)?/g,
            emoji: /:([\w\+-]+):/g,
            emojiDatetime: /(\d{2}:\d{2}:\d{2})/g,
            twemoji: /:(tw-([\w]+)-?(\w+)?):/g,
            fontAwesome: /:(fa-([\w]+)(-(\w+)){0,}):/g,
            editormdLogo: /:(editormd-logo-?(\w+)?):/g,
            pageBreak: /^\[[=]{8,}\]$/
        },
        t.emoji = {
            path: "http://www.emoji-cheat-sheet.com/graphics/emojis/",
            ext: ".png"
        },
        t.twemoji = {
            path: "http://twemoji.maxcdn.com/36x36/",
            ext: ".png"
        },
        t.markedRenderer = function(i, o) {
            var n = {
                toc: !0,
                tocm: !1,
                tocStartLevel: 1,
                pageBreak: !0,
                atLink: !0,
                emailLink: !0,
                taskList: !1,
                emoji: !1,
                tex: !1,
                flowChart: !1,
                sequenceDiagram: !1
            }
              , a = e.extend(n, o || {})
              , s = t.$marked
              , l = new s.Renderer;
            i = i || [];
            var c = t.regexs
              , h = c.atLink
              , d = c.emoji
              , u = c.email
              , f = c.emailLink
              , g = c.twemoji
              , p = c.fontAwesome
              , m = c.editormdLogo
              , w = c.pageBreak;
            return l.emoji = function(e) {
                e = e.replace(t.regexs.emojiDatetime, function(e) {
                    return e.replace(/:/g, "&#58;")
                });
                var i = e.match(d);
                if (!i || !a.emoji)
                    return e;
                for (var o = 0, r = i.length; r > o; o++)
                    ":+1:" === i[o] && (i[o] = ":\\+1:"),
                    e = e.replace(new RegExp(i[o]), function(e, i) {
                        var o = e.match(p)
                          , r = e.replace(/:/g, "");
                        if (o)
                            for (var n = 0, a = o.length; a > n; n++) {
                                var s = o[n].replace(/:/g, "");
                                return '<i class="fa ' + s + ' fa-emoji" title="' + s.replace("fa-", "") + '"></i>'
                            }
                        else {
                            var l = e.match(m)
                              , c = e.match(g);
                            if (l)
                                for (var h = 0, d = l.length; d > h; h++) {
                                    var u = l[h].replace(/:/g, "");
                                    return '<i class="' + u + '" title="Editor.md logo (' + u + ')"></i>'
                                }
                            else {
                                if (!c) {
                                    var f = "+1" === r ? "plus1" : r;
                                    return f = "black_large_square" === f ? "black_square" : f,
                                    f = "moon" === f ? "waxing_gibbous_moon" : f,
                                    '<img src="' + t.emoji.path + f + t.emoji.ext + '" class="emoji" title="&#58;' + r + '&#58;" alt="&#58;' + r + '&#58;" />'
                                }
                                for (var w = 0, v = c.length; v > w; w++) {
                                    var k = c[w].replace(/:/g, "").replace("tw-", "");
                                    return '<img src="' + t.twemoji.path + k + t.twemoji.ext + '" title="twemoji-' + k + '" alt="twemoji-' + k + '" class="emoji twemoji" />'
                                }
                            }
                        }
                    });
                return e
            }
            ,
            l.atLink = function(i) {
                return h.test(i) ? (a.atLink && (i = i.replace(u, function(e, t, i, o) {
                    return e.replace(/@/g, "_#_&#64;_#_")
                }),
                i = i.replace(h, function(e, i) {
                    return '<a href="' + t.urls.atLinkBase + i + '" title="&#64;' + i + '" class="at-link">' + e + "</a>"
                }).replace(/_#_&#64;_#_/g, "@")),
                a.emailLink && (i = i.replace(f, function(t, i, o, r, n) {
                    return !i && e.inArray(n, "jpg|jpeg|png|gif|webp|ico|icon|pdf".split("|")) < 0 ? '<a href="mailto:' + t + '">' + t + "</a>" : t
                })),
                i) : i
            }
            ,
            l.link = function(e, t, i) {
                if (this.options.sanitize) {
                    try {
                        var o = decodeURIComponent(unescape(e)).replace(/[^\w:]/g, "").toLowerCase()
                    } catch (r) {
                        return ""
                    }
                    if (0 === o.indexOf("javascript:"))
                        return ""
                }
                var n = '<a href="' + e + '"';
                return h.test(t) || h.test(i) ? (t && (n += ' title="' + t.replace(/@/g, "&#64;")),
                n + '">' + i.replace(/@/g, "&#64;") + "</a>") : (t && (n += ' title="' + t + '"'),
                n += ">" + i + "</a>")
            }
            ,
            l.heading = function(e, t, o) {
                var n = e
                  , a = /\s*\<a\s*href\=\"(.*)\"\s*([^\>]*)\>(.*)\<\/a\>\s*/;
                if (a.test(e)) {
                    var s = [];
                    e = e.split(/\<a\s*([^\>]+)\>([^\>]*)\<\/a\>/);
                    for (var l = 0, c = e.length; c > l; l++)
                        s.push(e[l].replace(/\s*href\=\"(.*)\"\s*/g, ""));
                    e = s.join(" ")
                }
                e = r(e);
                var h = e.toLowerCase().replace(/[^\w]+/g, "-")
                  , d = {
                    text: e,
                    level: t,
                    slug: h
                }
                  , u = /^[\u4e00-\u9fa5]+$/.test(e)
                  , f = u ? escape(e).replace(/\%/g, "") : e.toLowerCase().replace(/[^\w]+/g, "-");
                i.push(d);
                var g = "<h" + t + ' id="h' + t + "-" + this.options.headerPrefix + f + '">';
                return g += '<a name="' + e + '" class="reference-link"></a>',
                g += '<span class="header-link octicon octicon-link"></span>',
                g += this.atLink(a ? this.emoji(n) : this.emoji(e)),
                g += "</h" + t + ">"
            }
            ,
            l.pageBreak = function(e) {
                return w.test(e) && a.pageBreak && (e = '<hr style="page-break-after:always;" class="page-break editormd-page-break" />'),
                e
            }
            ,
            l.paragraph = function(e) {
                var i = /\$\$(.*)\$\$/g.test(e)
                  , o = /^\$\$(.*)\$\$$/.test(e)
                  , r = o ? ' class="' + t.classNames.tex + '"' : ""
                  , n = a.tocm ? /^(\[TOC\]|\[TOCM\])$/.test(e) : /^\[TOC\]$/.test(e)
                  , s = /^\[TOCM\]$/.test(e);
                e = !o && i ? e.replace(/(\$\$([^\$]*)\$\$)+/g, function(e, i) {
                    return '<span class="' + t.classNames.tex + '">' + i.replace(/\$/g, "") + "</span>"
                }) : o ? e.replace(/\$/g, "") : e;
                var l = '<div class="markdown-toc editormd-markdown-toc">' + e + "</div>";
                return n ? s ? '<div class="editormd-toc-menu">' + l + "</div><br/>" : l : w.test(e) ? this.pageBreak(e) : "<p" + r + ">" + this.atLink(this.emoji(e)) + "</p>\n"
            }
            ,
            l.code = function(e, i, o) {
                return "seq" === i || "sequence" === i ? '<div class="sequence-diagram">' + e + "</div>" : "flow" === i ? '<div class="flowchart">' + e + "</div>" : "math" === i || "latex" === i || "katex" === i ? '<p class="' + t.classNames.tex + '">' + e + "</p>" : s.Renderer.prototype.code.apply(this, arguments)
            }
            ,
            l.tablecell = function(e, t) {
                var i = t.header ? "th" : "td"
                  , o = t.align ? "<" + i + ' style="text-align:' + t.align + '">' : "<" + i + ">";
                return o + this.atLink(this.emoji(e)) + "</" + i + ">\n"
            }
            ,
            l.listitem = function(e) {
                return a.taskList && /^\s*\[[x\s]\]\s*/.test(e) ? (e = e.replace(/^\s*\[\s\]\s*/, '<input type="checkbox" class="task-list-item-checkbox" /> ').replace(/^\s*\[x\]\s*/, '<input type="checkbox" class="task-list-item-checkbox" checked disabled /> '),
                '<li style="list-style: none;">' + this.atLink(this.emoji(e)) + "</li>") : "<li>" + this.atLink(this.emoji(e)) + "</li>"
            }
            ,
            l
        }
        ,
        t.markdownToCRenderer = function(e, t, i, o) {
            var r = ""
              , n = 0
              , a = this.classPrefix;
            o = o || 1;
            for (var s = 0, l = e.length; l > s; s++) {
                var c = e[s].text
                  , h = e[s].level;
                o > h || (r += h > n ? "" : n > h ? new Array(n - h + 2).join("</ul></li>") : "</ul></li>",
                r += '<li><a class="toc-level-' + h + '" href="#' + c + '" level="' + h + '">' + c + "</a><ul>",
                n = h)
            }
            var d = t.find(".markdown-toc");
            if (d.length < 1 && "false" === t.attr("previewContainer")) {
                var u = '<div class="markdown-toc ' + a + 'markdown-toc"></div>';
                u = i ? '<div class="' + a + 'toc-menu">' + u + "</div>" : u,
                t.html(u),
                d = t.find(".markdown-toc")
            }
            return i && d.wrap('<div class="' + a + 'toc-menu"></div><br/>'),
            d.html('<ul class="markdown-toc-list"></ul>').children(".markdown-toc-list").html(r.replace(/\r?\n?\<ul\>\<\/ul\>/g, "")),
            d
        }
        ,
        t.tocDropdownMenu = function(t, i) {
            i = i || "Table of Contents";
            var o = 400
              , r = t.find("." + this.classPrefix + "toc-menu");
            return r.each(function() {
                var t = e(this)
                  , r = t.children(".markdown-toc")
                  , n = '<i class="fa fa-angle-down"></i>'
                  , a = '<a href="javascript:;" class="toc-menu-btn">' + n + i + "</a>"
                  , s = r.children("ul")
                  , l = s.find("li");
                r.append(a),
                l.first().before("<li><h1>" + i + " " + n + "</h1></li>"),
                t.mouseover(function() {
                    s.show(),
                    l.each(function() {
                        var t = e(this)
                          , i = t.children("ul");
                        if ("" === i.html() && i.remove(),
                        i.length > 0 && "" !== i.html()) {
                            var r = t.children("a").first();
                            r.children(".fa").length < 1 && r.append(e(n).css({
                                "float": "right",
                                paddingTop: "4px"
                            }))
                        }
                        t.mouseover(function() {
                            i.css("z-index", o).show(),
                            o += 1
                        }).mouseleave(function() {
                            i.hide()
                        })
                    })
                }).mouseleave(function() {
                    s.hide()
                })
            }),
            r
        }
        ,
        t.filterHTMLTags = function(t, i) {
            if ("string" != typeof t && (t = new String(t)),
            "string" != typeof i)
                return t;
            for (var o = i.split("|"), r = o[0].split(","), n = o[1], a = 0, s = r.length; s > a; a++) {
                var l = r[a];
                t = t.replace(new RegExp("<s*" + l + "s*([^>]*)>([^>]*)<s*/" + l + "s*>","igm"), "")
            }
            if ("undefined" != typeof n) {
                var c = /\<(\w+)\s*([^\>]*)\>([^\>]*)\<\/(\w+)\>/gi;
                t = "*" === n ? t.replace(c, function(e, t, i, o, r) {
                    return "<" + t + ">" + o + "</" + r + ">"
                }) : "on*" === n ? t.replace(c, function(t, i, o, r, n) {
                    var a = e("<" + i + ">" + r + "</" + n + ">")
                      , s = e(t)[0].attributes
                      , l = {};
                    e.each(s, function(e, t) {
                        '"' !== t.nodeName && (l[t.nodeName] = t.nodeValue)
                    }),
                    e.each(l, function(e) {
                        0 === e.indexOf("on") && delete l[e]
                    }),
                    a.attr(l);
                    var c = "undefined" != typeof a[1] ? e(a[1]).text() : "";
                    return a[0].outerHTML + c
                }) : t.replace(c, function(t, i, o, r) {
                    var a = n.split(",")
                      , s = e(t);
                    return s.html(r),
                    e.each(a, function(e) {
                        s.attr(a[e], null)
                    }),
                    s[0].outerHTML
                })
            }
            return t
        }
        ,
        t.markdownToHTML = function(i, o) {
            var r = {
                gfm: !0,
                toc: !0,
                tocm: !1,
                tocStartLevel: 1,
                tocTitle: "目录",
                tocDropdown: !1,
                tocContainer: "",
                markdown: "",
                markdownSourceCode: !1,
                htmlDecode: !1,
                autoLoadKaTeX: !0,
                pageBreak: !0,
                atLink: !0,
                emailLink: !0,
                tex: !1,
                taskList: !1,
                emoji: !1,
                flowChart: !1,
                sequenceDiagram: !1,
                previewCodeHighlight: !0
            };
            t.$marked = marked;
            var n = e("#" + i)
              , a = n.settings = e.extend(!0, r, o || {})
              , s = n.find("textarea");
            s.length < 1 && (n.append("<textarea></textarea>"),
            s = n.find("textarea"));
            var l = "" === a.markdown ? s.val() : a.markdown
              , c = []
              , h = {
                toc: a.toc,
                tocm: a.tocm,
                tocStartLevel: a.tocStartLevel,
                taskList: a.taskList,
                emoji: a.emoji,
                tex: a.tex,
                pageBreak: a.pageBreak,
                atLink: a.atLink,
                emailLink: a.emailLink,
                flowChart: a.flowChart,
                sequenceDiagram: a.sequenceDiagram,
                previewCodeHighlight: a.previewCodeHighlight
            }
              , d = {
                renderer: t.markedRenderer(c, h),
                gfm: a.gfm,
                tables: !0,
                breaks: !0,
                pedantic: !1,
                sanitize: a.htmlDecode ? !1 : !0,
                smartLists: !0,
                smartypants: !0
            };
            l = new String(l);
            var u = marked(l, d);
            u = t.filterHTMLTags(u, a.htmlDecode),
            a.markdownSourceCode ? s.text(l) : s.remove(),
            n.addClass("markdown-body " + this.classPrefix + "html-preview").append(u);
            var f = "" !== a.tocContainer ? e(a.tocContainer) : n;
            if ("" !== a.tocContainer && f.attr("previewContainer", !1),
            a.toc && (n.tocContainer = this.markdownToCRenderer(c, f, a.tocDropdown, a.tocStartLevel),
            (a.tocDropdown || n.find("." + this.classPrefix + "toc-menu").length > 0) && this.tocDropdownMenu(n, a.tocTitle),
            "" !== a.tocContainer && n.find(".editormd-toc-menu, .editormd-markdown-toc").remove()),
            a.previewCodeHighlight && (n.find("pre").addClass("prettyprint linenums"),
            prettyPrint()),
            t.isIE8 || (a.flowChart && n.find(".flowchart").flowChart(),
            a.sequenceDiagram && n.find(".sequence-diagram").sequenceDiagram({
                theme: "simple"
            })),
            a.tex) {
                var g = function() {
                    n.find("." + t.classNames.tex).each(function() {
                        var t = e(this);
                        katex.render(t.html().replace(/&lt;/g, "<").replace(/&gt;/g, ">"), t[0]),
                        t.find(".katex").css("font-size", "1.6em")
                    })
                };
                !a.autoLoadKaTeX || t.$katex || t.kaTeXLoaded ? g() : this.loadKaTeX(function() {
                    t.$katex = katex,
                    t.kaTeXLoaded = !0,
                    g()
                })
            }
            return n.getMarkdown = function() {
                return s.val()
            }
            ,
            n
        }
        ,
        t.themes = ["default", "dark"],
        t.previewThemes = ["default", "dark"],
        t.editorThemes = ["default", "3024-day", "3024-night", "ambiance", "ambiance-mobile", "base16-dark", "base16-light", "blackboard", "cobalt", "eclipse", "elegant", "erlang-dark", "lesser-dark", "mbo", "mdn-like", "midnight", "monokai", "neat", "neo", "night", "paraiso-dark", "paraiso-light", "pastel-on-dark", "rubyblue", "solarized", "the-matrix", "tomorrow-night-eighties", "twilight", "vibrant-ink", "xq-dark", "xq-light"],
        t.loadPlugins = {},
        t.loadFiles = {
            js: [],
            css: [],
            plugin: []
        },
        t.loadPlugin = function(e, i, o) {
            i = i || function() {}
            ,
            this.loadScript(e, function() {
                t.loadFiles.plugin.push(e),
                i()
            }, o)
        }
        ,
        t.loadCSS = function(e, i, o) {
            o = o || "head",
            i = i || function() {}
            ;
            var r = document.createElement("link");
            r.type = "text/css",
            r.rel = "stylesheet",
            r.onload = r.onreadystatechange = function() {
                t.loadFiles.css.push(e),
                i()
            }
            ,
            r.href = e + ".css",
            "head" === o ? document.getElementsByTagName("head")[0].appendChild(r) : document.body.appendChild(r)
        }
        ,
        t.isIE = "Microsoft Internet Explorer" == navigator.appName,
        t.isIE8 = t.isIE && "8." == navigator.appVersion.match(/8./i),
        t.loadScript = function(e, i, o) {
            o = o || "head",
            i = i || function() {}
            ;
            var r = null;
            r = document.createElement("script"),
            r.id = e.replace(/[\./]+/g, "-"),
            r.type = "text/javascript",
            r.src = e + ".js",
            t.isIE8 ? r.onreadystatechange = function() {
                r.readyState && ("loaded" === r.readyState || "complete" === r.readyState) && (r.onreadystatechange = null,
                t.loadFiles.js.push(e),
                i())
            }
            : r.onload = function() {
                t.loadFiles.js.push(e),
                i()
            }
            ,
            "head" === o ? document.getElementsByTagName("head")[0].appendChild(r) : document.body.appendChild(r)
        }
        ,
        t.katexURL = {
            css: "//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min",
            js: "//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min"
        },
        t.kaTeXLoaded = !1,
        t.loadKaTeX = function(e) {
            t.loadCSS(t.katexURL.css, function() {
                t.loadScript(t.katexURL.js, e || function() {}
                )
            })
        }
        ,
        t.lockScreen = function(t) {
            e("html,body").css("overflow", t ? "hidden" : "")
        }
        ,
        t.createDialog = function(i) {
            var o = {
                name: "",
                width: 420,
                height: 240,
                title: "",
                drag: !0,
                closed: !0,
                content: "",
                mask: !0,
                maskStyle: {
                    backgroundColor: "#fff",
                    opacity: .1
                },
                lockScreen: !0,
                footer: !0,
                buttons: !1
            };
            i = e.extend(!0, o, i);
            var r = this
              , n = this.editor
              , a = t.classPrefix
              , s = (new Date).getTime()
              , l = "" === i.name ? a + "dialog-" + s : i.name
              , c = t.mouseOrTouch
              , h = '<div class="' + a + "dialog " + l + '">';
            "" !== i.title && (h += '<div class="' + a + 'dialog-header"' + (i.drag ? ' style="cursor: move;"' : "") + ">",
            h += '<strong class="' + a + 'dialog-title">' + i.title + "</strong>",
            h += "</div>"),
            i.closed && (h += '<a href="javascript:;" class="fa fa-close ' + a + 'dialog-close"></a>'),
            h += '<div class="' + a + 'dialog-container">' + i.content,
            (i.footer || "string" == typeof i.footer) && (h += '<div class="' + a + 'dialog-footer">' + ("boolean" == typeof i.footer ? "" : i.footer) + "</div>"),
            h += "</div>",
            h += '<div class="' + a + "dialog-mask " + a + 'dialog-mask-bg"></div>',
            h += '<div class="' + a + "dialog-mask " + a + 'dialog-mask-con"></div>',
            h += "</div>",
            n.append(h);
            var d = n.find("." + l);
            d.lockScreen = function(t) {
                return i.lockScreen && (e("html,body").css("overflow", t ? "hidden" : ""),
                r.resize()),
                d
            }
            ,
            d.showMask = function() {
                return i.mask && n.find("." + a + "mask").css(i.maskStyle).css("z-index", t.dialogZindex - 1).show(),
                d
            }
            ,
            d.hideMask = function() {
                return i.mask && n.find("." + a + "mask").hide(),
                d
            }
            ,
            d.loading = function(e) {
                var t = d.find("." + a + "dialog-mask");
                return t[e ? "show" : "hide"](),
                d
            }
            ,
            d.lockScreen(!0).showMask(),
            d.show().css({
                zIndex: t.dialogZindex,
                border: t.isIE8 ? "1px solid #ddd" : "",
                width: "number" == typeof i.width ? i.width + "px" : i.width,
                height: "number" == typeof i.height ? i.height + "px" : i.height
            });
            var u = function() {
                d.css({
                    top: (e(window).height() - d.height()) / 2 + "px",
                    left: (e(window).width() - d.width()) / 2 + "px"
                })
            };
            if (u(),
            e(window).resize(u),
            d.children("." + a + "dialog-close").bind(c("click", "touchend"), function() {
                d.hide().lockScreen(!1).hideMask()
            }),
            "object" == typeof i.buttons) {
                var f = d.footer = d.find("." + a + "dialog-footer");
                for (var g in i.buttons) {
                    var p = i.buttons[g]
                      , m = a + g + "-btn";
                    f.append('<button class="' + a + "btn " + m + '">' + p[0] + "</button>"),
                    p[1] = e.proxy(p[1], d),
                    f.children("." + m).bind(c("click", "touchend"), p[1])
                }
            }
            if ("" !== i.title && i.drag) {
                var w, v, k = d.children("." + a + "dialog-header");
                i.mask || k.bind(c("click", "touchend"), function() {
                    t.dialogZindex += 2,
                    d.css("z-index", t.dialogZindex)
                }),
                k.mousedown(function(e) {
                    e = e || window.event,
                    w = e.clientX - parseInt(d[0].style.left),
                    v = e.clientY - parseInt(d[0].style.top),
                    document.onmousemove = y
                });
                var b = function(e) {
                    e.removeClass(a + "user-unselect").off("selectstart")
                }
                  , x = function(e) {
                    e.addClass(a + "user-unselect").on("selectstart", function(e) {
                        return !1
                    })
                }
                  , y = function(t) {
                    t = t || window.event;
                    var i, o, r = parseInt(d[0].style.left), n = parseInt(d[0].style.top);
                    r >= 0 ? r + d.width() <= e(window).width() ? i = t.clientX - w : (i = e(window).width() - d.width(),
                    document.onmousemove = null) : (i = 0,
                    document.onmousemove = null),
                    n >= 0 ? o = t.clientY - v : (o = 0,
                    document.onmousemove = null),
                    document.onselectstart = function() {
                        return !1
                    }
                    ,
                    x(e("body")),
                    x(d),
                    d[0].style.left = i + "px",
                    d[0].style.top = o + "px"
                };
                document.onmouseup = function() {
                    b(e("body")),
                    b(d),
                    document.onselectstart = null,
                    document.onmousemove = null
                }
                ,
                k.touchDraggable = function() {
                    var t = null
                      , i = function(i) {
                        var o = i.originalEvent
                          , r = e(this).parent().position();
                        t = {
                            x: o.changedTouches[0].pageX - r.left,
                            y: o.changedTouches[0].pageY - r.top
                        }
                    }
                      , o = function(i) {
                        i.preventDefault();
                        var o = i.originalEvent;
                        e(this).parent().css({
                            top: o.changedTouches[0].pageY - t.y,
                            left: o.changedTouches[0].pageX - t.x
                        })
                    };
                    this.bind("touchstart", i).bind("touchmove", o)
                }
                ,
                k.touchDraggable()
            }
            return t.dialogZindex += 2,
            d
        }
        ,
        t.mouseOrTouch = function(e, t) {
            e = e || "click",
            t = t || "touchend";
            var i = e;
            try {
                document.createEvent("TouchEvent"),
                i = t
            } catch (o) {}
            return i
        }
        ,
        t.dateFormat = function(e) {
            e = e || "";
            var t = function(e) {
                return 10 > e ? "0" + e : e
            }
              , i = new Date
              , o = i.getFullYear()
              , r = o.toString().slice(2, 4)
              , n = t(i.getMonth() + 1)
              , a = t(i.getDate())
              , s = i.getDay()
              , l = t(i.getHours())
              , c = t(i.getMinutes())
              , h = t(i.getSeconds())
              , d = t(i.getMilliseconds())
              , u = ""
              , f = r + "-" + n + "-" + a
              , g = o + "-" + n + "-" + a
              , p = l + ":" + c + ":" + h;
            switch (e) {
            case "UNIX Time":
                u = i.getTime();
                break;
            case "UTC":
                u = i.toUTCString();
                break;
            case "yy":
                u = r;
                break;
            case "year":
            case "yyyy":
                u = o;
                break;
            case "month":
            case "mm":
                u = n;
                break;
            case "cn-week-day":
            case "cn-wd":
                var m = ["日", "一", "二", "三", "四", "五", "六"];
                u = "星期" + m[s];
                break;
            case "week-day":
            case "wd":
                var w = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                u = w[s];
                break;
            case "day":
            case "dd":
                u = a;
                break;
            case "hour":
            case "hh":
                u = l;
                break;
            case "min":
            case "ii":
                u = c;
                break;
            case "second":
            case "ss":
                u = h;
                break;
            case "ms":
                u = d;
                break;
            case "yy-mm-dd":
                u = f;
                break;
            case "yyyy-mm-dd":
                u = g;
                break;
            case "yyyy-mm-dd h:i:s ms":
            case "full + ms":
                u = g + " " + p + " " + d;
                break;
            case "full":
            case "yyyy-mm-dd h:i:s":
            default:
                u = g + " " + p
            }
            return u
        }
        ,
        t
    }
});
