import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const result = {};

    result[pluralize(primaryModelClass.modelName)] = payload.result;
    delete payload.result;

    result.meta = payload;

    return this._super(store, primaryModelClass, result, id, requestType);
  },
});
