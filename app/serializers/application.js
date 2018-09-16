import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

export default DS.JSONAPISerializer.extend({
  normalize(typeClass, hash) {
    const result = {};

    result[pluralize(typeClass.modelName)] = hash.result;
    delete hash.result;

    result.meta = hash;

    return result;
  },
});
