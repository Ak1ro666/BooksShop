import * as webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { mode, paths, isDev } = options;

	return {
		mode,
		entry: paths.entry,
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true,
		},
		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}

