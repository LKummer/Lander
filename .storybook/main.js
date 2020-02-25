const merge = require('webpack-merge')

const common = require('../webpack.common')

const dev = {
  module: {
    rules: [
      {
        test: /\.(?:css|scss|sass)$/i,
        use: ['style-loader']
      }
    ]
  }
}

module.exports = {
  stories: ['../src/**/*.stories.js'],
  webpackFinal: config => {
    const merged = merge.smart(config, dev, common)
    // Find the CSS/Sass rule and add exclusion for css files as Storybook's
    // configuration already handles them.
    const css = merged.module.rules.find(element => element.test.toString() === "/\\.(?:css|scss|sass)$/i")
    css.exclude = /\.css$/
    return merged
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register'
  ]
}
