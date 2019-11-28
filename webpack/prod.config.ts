import webpack from 'webpack';

import { commonConfig, commonPlugins, commonRules } from './common';

const prodConfig: webpack.Configuration = {
  mode: 'production',
  ...commonConfig,
  plugins: commonPlugins,
  optimization: {
    ...commonConfig.optimization,
    minimize: true,
  },
  entry: {
    app: './index.tsx',
  },
  module: {
    rules: commonRules,
  },
};

export default prodConfig;
