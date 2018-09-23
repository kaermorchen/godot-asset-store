import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Base.extend({
  fetch: service(),

  restore(data) {
    return data.authenticated && data.token && data.username ? RSVP.resolve() : RSVP.reject();
  },

  authenticate(username, password) {
    console.log('authenticate', ...arguments);

    return this.get('fetch').request('login', { method: 'POST', data: { username, password } });
  },

  invalidate(data) {
    console.log('invalidate', ...arguments);
  }
});
