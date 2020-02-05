import 'babel-polyfill';
import _ from 'lodash';
import './../sass/styles.scss';
if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../index.html')
}
