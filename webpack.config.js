module.exports = {
  entry: { app: './app/app.js' },

  module: {
    loaders: [{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ }]
  },

  devtool: '#inline-source-map'
};
