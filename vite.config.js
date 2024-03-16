import { defineConfig } from 'vite';
import * as glob from 'glob';
import path, { resolve } from 'node:path';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import htmlPurge from 'vite-plugin-purgecss';
import handlebars from 'vite-plugin-handlebars';

import hbsContext  from './context/context';
export default defineConfig(
    {
        base: '/',
        appType: 'mpa',
        
    }
)