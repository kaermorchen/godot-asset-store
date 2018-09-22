import Component from '@ember/component';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Component.extend({
  fetch: service(),

  register: task(function* () {
    this.get('fetch').request('register', { method: 'POST', body: this.getProperties('username', 'email', 'password') })
  })
});
