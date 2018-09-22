import DS from 'ember-data';
import { camelize } from '@ember/string';
import config from 'godot-asset-store/config/environment';

export default DS.RESTAdapter.extend({
  host: config.APP.host,
  namespace: config.APP.namespace,

  pathForType(modelName) {
    return camelize(modelName);
  },
});
