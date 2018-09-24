import Application from '@ember/application';

import { initialize } from 'godot-asset-store/initializers/reopen-link';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Initializer | reopen-link', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.initializer({
      name: 'initializer under test',
      initialize
    });

    this.application = this.TestApplication.create({ autoboot: false });
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  // Replace this with your real tests.
  test('it works', async function(assert) {
    await this.application.boot();

    assert.ok(true);
  });
});
