import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | assets/asset', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:assets/asset');
    assert.ok(controller);
  });
});
