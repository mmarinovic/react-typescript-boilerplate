import webpack from 'webpack';
import path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const hot = !!process.env.WATCH_MODE;
const chunkName = process.env.NODE_ENV === 'production' ? 'id' : 'name';
const chunkHash = process.env.WATCH_MODE ? 'hash' : 'chunkhash';

const moduleResolveDirectories = ['src', 'node_modules'];

export const commonPlugins: webpack.Plugin[] = [
  new BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
    generateStatsFile: true,
    openAnalyzer: false,
    statsOptions: { source: false }
  }),
  new CleanWebpackPlugin(),
  new webpack.HashedModuleIdsPlugin(),
  new CopyWebpackPlugin([
    { context: 'assets/', from: '*/**/*', to: '.' },
    { context: 'assets/', from: '*', to: '.' },
  ]),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'assets/index.html'
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

export const commonRules: webpack.Rule[] = [
  {
    test: /\.css$/,
    use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
  },
  {
    test: /\.scss$/,
    loaders: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } },
      { loader: 'sass-loader', options: { sassOptions: { includePaths: moduleResolveDirectories } } } 
    ],
  },
  {
    test: /\.(ts|tsx)$/,
    // tslint:disable-next-line: no-any
    use: ([] as any[])
      .concat(hot ? 'react-hot-loader/webpack' : [])
      .concat([
        {
          loader: 'ts-loader',
          options: {
            logLevel: 'error',
          },
        },
      ]),
  },
  {
    test: /\.(svg|png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
];

export const commonConfig: webpack.Configuration = {
  target: 'web',
  context: path.resolve(__dirname, '..', 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `js/[name]-[${chunkHash}].bundle.js`,
    chunkFilename: `js/[${chunkName}]-[${chunkHash}].bundle.js`,
    publicPath: '/',
  },
  resolve: {
    modules: moduleResolveDirectories,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  optimization: {
    mergeDuplicateChunks: true,
    minimize: true,
    nodeEnv: JSON.stringify(process.env.NODE_ENV),
  },
  devServer: {
    hot,
    contentBase: path.resolve('..', 'build'),
    clientLogLevel: 'error',
    historyApiFallback: true,
  },
};
