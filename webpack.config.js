var getConfig = require('hjs-webpack');



module.exports = getConfig({
  loader: 'babel-loader',
  in: 'src/app.js',


  out: 'public'
});
