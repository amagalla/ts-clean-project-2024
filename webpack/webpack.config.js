const commonConfig = require('./webpack.common.js');

module.exports = (enviroVar) => {
  const { env } = enviroVar;
  const envConfig = require(`./webpack.${env}.js`);
  return {
    ...envConfig,
    ...commonConfig
  }
};
