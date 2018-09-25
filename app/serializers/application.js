import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import { underscore } from '@ember/string';

export default DS.RESTSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const pluralizedModelName = pluralize(primaryModelClass.modelName);

    if (payload.result && !payload[pluralizedModelName]) {
      const hash = {};

      hash[pluralizedModelName] = payload.result;
      delete payload.result;

      hash.meta = payload;

      payload = hash;
    }

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    const hash = {};

    hash[primaryModelClass.modelName] = payload;

    return this.normalizeSingleResponse(store, primaryModelClass, hash, id, requestType);
  },

  keyForAttribute(key) {
    return underscore(key);
  },
});
