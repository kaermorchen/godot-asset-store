import Component from '@ember/component';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: validator('presence', true),
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: validator('presence', true),
});

export default Component.extend(Validations, {
  fetch: service(),
  router: service(),

  username: null,
  email: null,
  password: null,

  register: task(function* () {
    const { validations } = yield this.validate();

    if (validations.get('isInvalid')) {
      this.set('didValidate', true);
      return;
    }

    yield this.get('fetch').request('register', { method: 'POST', data: this.getProperties('username', 'email', 'password') });

    // TODO: add auto login after success registration
    this.get('router').transitionTo('login');
  })
});
