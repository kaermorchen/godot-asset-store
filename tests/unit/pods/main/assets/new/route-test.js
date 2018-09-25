import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/assets/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:main/assets/new');
    assert.ok(route);
  });
});
