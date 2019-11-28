import webpack from 'webpack';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import { commonRules, commonPlugins, commonConfig } from './common';

const hot = !!process.env.WATCH_MODE;

const plugins: webpack.Plugin[] = commonPlugins
  .concat(hot ? new webpack.HotModuleReplacementPlugin() : [])
  .concat(new webpack.NamedModulesPlugin())
  .concat(new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: false,
    cwd: process.cwd(),
  }));

const devConfig: webpack.Configuration = {
  mode: 'development',
  ...commonConfig,
  plugins,
  watch: hot,
  entry: {
    app: ([] as string[])
      .concat(hot ? 'react-hot-loader/patch' : [])
      .concat('./index.tsx'),
  },
  module: {
    rules: commonRules,
  },
  devtool: 'eval',
};

export default devConfig;