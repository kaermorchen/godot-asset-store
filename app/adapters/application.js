import DS from 'ember-data';
import { camelize } from '@ember/string';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'https://godotengine.org/asset-library',

  pathForType(modelName) {
    return camelize(modelName);
  },
});
