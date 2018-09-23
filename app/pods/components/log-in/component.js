import Component from '@ember/component';
import { task } from 'ember-concurrency';
import { validator, buildValidations } from 'ember-cp-validations';
import { inject as service } from '@ember/service';

const Validations = buildValidations({
  username: validator('presence', true),
  password: validator('presence', true),
});

export default Component.extend(Validations, {
  session: service(),
  router: service(),

  username: null,
  password: null,

  login: task(function* () {
    const { validations } = yield this.validate();

    if (validations.get('isInvalid')) {
      this.set('didValidate', true);
      return;
    }

    let { username, password } = this.getProperties('username', 'password');

    // TODO: add catch
    this.get('session').authenticate('authenticator:custom', username, password);
  })
});
