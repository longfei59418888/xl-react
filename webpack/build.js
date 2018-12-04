
const { exec } = require('shelljs');

const tag = new Date().getTime();
const UPLOAD_JS_PATH = './dist/js';
const URL_PREFIX_PATH = '~/js/';
const step = [
  `sentry-cli releases new ${tag}`,
  `cross-env envTag=${tag} webpack --config ./webpack/webpack.config.prod.js`,
  `sentry-cli releases files ${tag} upload-sourcemaps ${UPLOAD_JS_PATH}  --url-prefix '${URL_PREFIX_PATH}'`,
];
const command = step.join(' && ');

exec(command, () => {
  console.log('build success!');
});
