import Controller from '@ember/controller';
import { isBlank } from '@ember/utils';

export default Controller.extend({
  queryParams: ['filter'],

  filter: null,
  searchText: null,
  sort: 'updated',

  sortOptions: ['rating', 'cost', 'name', 'updated'],

  actions: {
    onSearch() {
      const filter = isBlank(this.searchText) ? null : this.searchText;

      this.set('filter', filter);
    }
  }
});
