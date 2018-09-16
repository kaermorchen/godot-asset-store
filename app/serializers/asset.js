import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'asset_id',

  normalize(typeClass, hash) {
    hash.author = hash.author_id;
    delete hash.author_id;

    hash.author = hash.category_id;
    delete hash.category_id;

    return this._super(...arguments);
  },
});
