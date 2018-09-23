import Service from '@ember/service';
import fetch from 'fetch';
import config from 'godot-asset-store/config/environment';
import { typeOf } from '@ember/utils';

export default Service.extend({
  request(url, options) {
    if (!options.headers) {
      options.headers = {};
    }

    options.headers['Content-Type'] = 'application/json;charset=utf-8';

    if (typeOf(options.data) === 'object') {
      options.body = JSON.stringify(options.data);
    }

    return fetch(`${config.APP.host}/${config.APP.namespace}/${url}`, options).then(response => response.json());
  }
});
