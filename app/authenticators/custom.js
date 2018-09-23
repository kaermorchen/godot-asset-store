import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Base.extend({
  fetch: service(),

  restore(data) {
    return data.authenticated && data.token && data.username ? RSVP.resolve(data) : RSVP.reject();
  },

  authenticate(username, password) {
    return this.get('fetch').request('login', { method: 'POST', data: { username, password } });
  },

  invalidate({ token }) {
    return this.get('fetch').request('logout', { method: 'POST', data: { token } });
  }
});
