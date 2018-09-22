import Service from '@ember/service';
import { assign } from '@ember/polyfills';
import fetch from 'fetch';
import config from 'godot-asset-store/config/environment';
import { typeOf } from '@ember/utils';

export default Service.extend({
  request(url, options) {
    const defautlOptions = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    if (typeOf(options.body) === 'object') {
      options.body = JSON.stringify(options.body);
    }

    url = `${config.APP.host}/${config.APP.namespace}/${url}`;
    options = assign(defautlOptions, options);

    console.log('options', options);

    return fetch(url, options).then(response => response.json())
  }
});
