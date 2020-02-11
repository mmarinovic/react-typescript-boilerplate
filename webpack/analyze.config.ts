import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import prodConfig from './prod.config';

const analyzeConfig: webpack.Configuration = {
  ...prodConfig,
};

analyzeConfig.plugins?.push(new BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
    generateStatsFile: true,
    openAnalyzer: false,
    statsOptions: { source: false }
}));

export default analyzeConfig;
