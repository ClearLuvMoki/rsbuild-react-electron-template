import {defineConfig} from '@rsbuild/core';
import {releaseMainPath, rootPath, srcMainPath} from '../common/paths';
import {join} from 'path';
import CommonConfig from '../common/rsbuild.common';


const Config = defineConfig({
    tools: {
        rspack: {
            target: 'electron-main',
        },
    },
    source: {
        entry: {
            index: join(srcMainPath, './index.ts'),
            preload: join(srcMainPath, './preload.ts'),
        },
    },
    output: {
        targets: ['node'],
        distPath: {
            root: join(releaseMainPath),
            server: './',
        },
        cleanDistPath: true,
    },
});

module.exports = Object.assign(CommonConfig, Config);
