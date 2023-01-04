const path =  require('path');

const includePaths = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'test'),
  path.resolve(__dirname, 'package.json'),
];

module.exports = {
  
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.(ts)$/i,
        use: 'ts-loader',
        exclude: ['/node_modules/'],
        include: includePaths,
      },
    ]
  },
  resolve: {
    extensions: ['.js','.ts'],
    modules: ['src', 'node_modules']
  }
}