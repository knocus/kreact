import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

export interface renderOpts {
    title?:string,
    headStylesheets?: stylesheetOpts[],
    headScripts?: scriptOpts[],
    component: React.Component | React.PureComponent | any
    bodyScripts?: scriptOpts[],
    metaTags?: metaOpts[],
    charset?: string
}

export interface metaOpts {
    name: string,
    content: string
}

export interface stylesheetOpts {
    href: string,
    integrity?: string,
    crossOrigin?: string
}

export interface scriptOpts {
    src: string,
    isAsync?: string,
    isDefer?: string
}

const def_args:renderOpts = {
    component: React.createElement('div', null)
}

export function RenderReact(opts: renderOpts = def_args){
    let title = def(opts.title, "Legoto");
    let charset = metaCharset(def(opts.charset, null));
    let headStylesheets = def(opts.headStylesheets, []);
    let headScripts = def(opts.headScripts, []);
    let component = opts.component;
    let bodyScripts = def(opts.bodyScripts, []);

    let markup = `
    <!doctype html>
    <html>
        <head>
            <title>${title}</title>
            ${charset ? charset : '<meta charset="utf-8"/>'}
            ${injectStylesheets(headStylesheets)}
            ${injectScripts(headScripts)}
        </head>
        <body>
            <div id="app">${ReactDOMServer.renderToString(component)}</div>
            ${injectScripts(bodyScripts)}
        </body>
    </html>`
}

const metaCharset = (charset: string | null) => (
    charset ? `<meta charset="${charset}" />` : null
)

const injectMetaTags = (tags: metaOpts[]) => (
    tags.map(tag => {
        return `<meta name=${tag.name} content="${tag.content}" />`
    })
)

const injectStylesheets = (headStylesheets: any[]) => (
    headStylesheets.map(stylesheet => {
        let hasCrossOrigin = def(stylesheet.crossOrigin, null);
        let hasIntegrity = def(stylesheet.integrity, null);

        let crossOrigin = hasCrossOrigin ? `crossOrigin="${stylesheet.crossOrigin}"` : "";
        let integrity = hasIntegrity ? `integrity="${stylesheet.integrity}"` : "";

        return `<link rel="stylesheet"  href="${stylesheet.href}" ${crossOrigin} ${integrity} />`
    })
)

function injectScripts(scripts: any[]){
    scripts.map(script => {
        let hasAsync = def(script.isAsync, null)
        let hasDefer = def(script.isDefer, null)
        let isAsync = hasAsync ? "async" : "";
        let isDefer = hasDefer ? "defer" : "";
        return `<script ${isAsync} ${isDefer} type="text/javascript" src="${script.src}"></script>`
    })
}

function def(value:any, def:any) {
    return (typeof value === "undefined") ? def : value;
}
