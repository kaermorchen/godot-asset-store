import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  didInsertElement() {
    this._super(...arguments);

    // Remove page loader
    const el = document.body.querySelector('.start-loader');

    if (el) {
      document.body.removeChild(el);
    }
  }
});
