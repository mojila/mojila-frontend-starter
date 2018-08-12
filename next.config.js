const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const imageOptimized = require('next-optimized-images');
const purgeCSS = require('next-purgecss');
const preact = require('@zeit/next-preact');

module.exports = withPlugins([
    [css],
    [imageOptimized],
    [purgeCSS],
    [preact]
]);