"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var def_args = {
    component: React.createElement('div', null)
};
function RenderReact(opts) {
    if (opts === void 0) { opts = def_args; }
    var title = def(opts.title, "Legoto");
    var charset = metaCharset(def(opts.charset, null));
    var stylesheets = def(opts.stylesheets, []);
    var headScripts = def(opts.headScripts, []);
    var component = opts.component;
    var bodyScripts = def(opts.bodyScripts, []);
    var markup = "\n    <!doctype html>\n    <html>\n        <head>\n            <title>" + title + "</title>\n            " + (charset ? charset : '<meta charset="utf-8"/>') + "\n            " + injectStylesheets(stylesheets) + "\n            " + injectScripts(headScripts) + "\n        </head>\n        <body>\n            <div id=\"app\">" + ReactDOMServer.renderToString(component) + "</div>\n            " + injectScripts(bodyScripts) + "\n        </body>\n    </html>";
    return markup;
}
exports.RenderReact = RenderReact;
var metaCharset = function (charset) { return (charset ? "<meta charset=\"" + charset + "\" />" : null); };
var injectMetaTags = function (tags) { return (tags.map(function (tag) {
    return "<meta name=" + tag.name + " content=\"" + tag.content + "\" />";
})); };
var injectStylesheets = function (headStylesheets) { return (headStylesheets.map(function (stylesheet) {
    var hasCrossOrigin = def(stylesheet.crossOrigin, null);
    var hasIntegrity = def(stylesheet.integrity, null);
    var crossOrigin = hasCrossOrigin ? "crossOrigin=\"" + stylesheet.crossOrigin + "\"" : "";
    var integrity = hasIntegrity ? "integrity=\"" + stylesheet.integrity + "\"" : "";
    return "<link rel=\"stylesheet\"  href=\"" + stylesheet.href + "\" " + crossOrigin + " " + integrity + " />";
})); };
function injectScripts(scripts) {
    scripts.map(function (script) {
        var hasAsync = def(script.isAsync, null);
        var hasDefer = def(script.isDefer, null);
        var isAsync = hasAsync ? "async" : "";
        var isDefer = hasDefer ? "defer" : "";
        return "<script " + isAsync + " " + isDefer + " type=\"text/javascript\" src=\"" + script.src + "\"></script>";
    });
}
function def(value, def) {
    return (typeof value === "undefined") ? def : value;
}
