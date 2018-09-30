import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  asset: null,

  backgroundImage: computed('asset.iconUrl', function () {
    return htmlSafe(`background-image: url(${this.get('asset.iconUrl')})`);
  })
});
