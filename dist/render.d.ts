/// <reference types="react" />
import * as React from 'react';
export interface renderOpts {
    title?: string;
    stylesheets?: stylesheetOpts[];
    headScripts?: scriptOpts[];
    component: React.Component | React.PureComponent | any;
    bodyScripts?: scriptOpts[];
    metaTags?: metaOpts[];
    charset?: string;
}
export interface metaOpts {
    name: string;
    content: string;
}
export interface stylesheetOpts {
    href: string;
    integrity?: string;
    crossOrigin?: string;
}
export interface scriptOpts {
    src: string;
    isAsync?: string;
    isDefer?: string;
}
export declare function RenderReact(opts?: renderOpts): string;
