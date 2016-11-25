// file: webpack.config.devel.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: "./index.jsx",
 debug: true,
 devtool: 'cheap-module-eval-source-map', // For production, use cheap-module-source-map.
 output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "http://localhost:8080/build/",
    filename: "bundle.js"
 },
 resolve: {
    extensions: ['', '.js', '.jsx']
 },
 module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/, query: {
 cacheDirectory: true,
 presets: ['es2015', 'react-hmre', 'react']
 }, include: path.app
 },
    { test: /\.css$/, loader: 'style-loader!css-loader'},
    { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: {
 presets: [ 'es2015', 'react', 'react-hmre' ]
 }},
   { test: /\.less$/, loader: 'style!css!less' },
   { test: /\.scss$/, loader: 'style!css!sass' },
   { test: /\.json$/, loader: "json-loader" },
   { test: /\.woff(2)?(\?v=[0–9].[0–9].[0–9])?$/, loader: "url-loader?mimetype=application/font-woff" },
   { test: /\.(ttf|eot|svg)(\?v=[0–9].[0–9].[0–9])?$/, loader: "file-loader?name=[name].[ext]" },
   { test: /\.gif$/, loader: "url-loader?mimetype=image/png" }
 ]
 },
 devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true
 },
 node: {
   fs: "empty"
 },
 plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
   ]
};
