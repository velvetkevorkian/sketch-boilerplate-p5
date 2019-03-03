/**
 * Return the correct webpack config with customised options.
 * @param {string} title - Full sketch title. This will go in the <title> element.
 * @param {string} slug - The last part of the path the sketch will live at.
 * @param {string} path - Path to the sketch's dev folder
 * @param {string} [mode=development] - Webpack build mode, production or development
 * @returns {object} - Webpack config object
 */

function config(title, slug, path, mode = 'development') {
  return mode === 'development'
    ? require('./webpack/development.js')(title, slug, path)
    : require('./webpack/production.js')(title, slug, path)
}

module.exports = {
  config
}
