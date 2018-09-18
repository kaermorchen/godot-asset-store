import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import { underscore } from '@ember/string';

export default DS.RESTSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const hash = {};

    hash[pluralize(primaryModelClass.modelName)] = payload.result;
    delete payload.result;

    hash.meta = payload;

    return this._super(store, primaryModelClass, hash, id, requestType);
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
