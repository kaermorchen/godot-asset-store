import Controller from '@ember/controller';
import { isBlank, isPresent } from '@ember/utils';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import DS from 'ember-data';

export default Controller.extend({
  constants: service(),

  queryParams: ['filter'],

  filter: null,
  searchText: null,
  sort: 'updated',
  godot_version: null,
  category: null,

  sortOptions: ['rating', 'cost', 'name', 'updated'],

  categories: computed(function () {
    const promise = this.store.findAll('category');

    return DS.PromiseArray.create({ promise });
  }),

  actions: {
    onSearch() {
      const filter = isBlank(this.searchText) ? null : this.searchText;

      this.set('filter', filter);
    },

    categoryChanged(category) {
      if (isPresent(category)) {
        this.set('category', category.id);
      } else {
        this.set('category', null);
      }
    }
  }
});
