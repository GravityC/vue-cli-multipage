'use strict';
const path = require('path');
const glob = require('glob');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.getPages = function () {
  const pages = [];

  const globpath = './src/pages/*';
  const _pages = glob.sync(globpath);
  for (let page of _pages){
    pages.push({
      static:glob.sync(path.join(__dirname, '..', page) + '/static')[0],  //各个static目录绝对路径
      name:path.basename(page),
      html:glob.sync(page + '/app.html')[0],
      js:page + '/app.js',
    })
  }
  return pages;
};

exports.getEntries = function () {
  const pages = exports.getPages();

  const entries = {};
  for (let page of pages) {
    entries[page.name] = page.js;
  }
  return entries;
};

exports.getHtmlWebpackPlugins = function () {
  const pages = exports.getPages();

  const htmls = [];
  let html;
  for (let page of pages) {
    html = new HtmlWebpackPlugin({
      filename: `${config.build.index}/${page.name}.html`,
      template: page.html || path.join(__dirname, '..', 'src/index.html'),
      inject: true,
      chunks:['manifest', 'vendor', page.name],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    });
    htmls.push(html)
  }
  return htmls;
};

exports.getCopyWebpackPlugins = function () {
  const CopyWebpackPlugins = [];
  const pages = exports.getPages();

  for (let page of pages) {
    if(page.static){
      CopyWebpackPlugins.push({
        from:page.static,
        to:config.build.assetsSubDirectory,
        ignore: ['.*']
      })
    }
  }
  return CopyWebpackPlugins;
};

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path)
};

exports.cssLoaders = function (options) {
  options = options || {};

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = [cssLoader];
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = [];
  const loaders = exports.cssLoaders(options);
  for (const extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
};
