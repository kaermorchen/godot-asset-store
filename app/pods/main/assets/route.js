import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    filter: { refreshModel: true },
    sort: { refreshModel: true },
    godot_version: { refreshModel: true },
    category: { refreshModel: true },
    max_results: { refreshModel: true },
  },

  model(params) {
    return this.get('store').query('asset', params);
  },

  setupController(controller) {
    this._super(...arguments);

    controller.set('searchText', controller.filter);
  }
});
