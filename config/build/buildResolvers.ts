import { BuildOptions } from 'config/build/types/config';
import path from 'path';
import * as webpack from 'webpack';

export function buildResolvers({ paths }: BuildOptions): webpack.ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {
			'@': paths.src,
		},
	};
}

