'use strict';

const plugins = [
  require('postcss-import'),
  require('postcss-cssnext'),
  require('cssnano')
];

module.exports = {

  * build (task) {
    yield task.source('src/tacc.js')
          .babel({ preload: true, minified: true, comments: false })
          .rename({ suffix: '.min' }).target('dist');
  },

  * default (task) {
    yield task.start('build');
    yield task.watch('src/*.js', 'build');
  }

};
