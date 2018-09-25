import Controller from '@ember/controller';
import { computed } from '@ember/object';
import DS from 'ember-data';
import { inject as service } from '@ember/service';

export default Controller.extend({
  constants: service(),

  categories: computed(function () {
    const promise = this.store.findAll('category');

    return DS.PromiseArray.create({ promise });
  })
});
