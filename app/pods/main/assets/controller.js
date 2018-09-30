import Controller from '@ember/controller';
import { isBlank } from '@ember/utils';
import { inject as service } from '@ember/service';

export default Controller.extend({
  constants: service(),

  queryParams: ['filter'],

  filter: null,
  searchText: null,
  sort: 'updated',
  godot_version: null,

  sortOptions: ['rating', 'cost', 'name', 'updated'],

  actions: {
    onSearch() {
      const filter = isBlank(this.searchText) ? null : this.searchText;

      this.set('filter', filter);
    }
  }
});
