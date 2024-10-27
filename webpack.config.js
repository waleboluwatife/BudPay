const path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
};