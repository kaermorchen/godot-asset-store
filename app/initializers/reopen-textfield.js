import TextField from '@ember/component/text-field';

export function initialize() {
  TextField.reopen({
    attributeBindings: ['data-edit'],
    classNames: ['form-control'],

    didInsertElement() {
      this._super(...arguments);

      if (this.get('autofocus')) {
        this.element.focus();
      }
    },
  });
}
export default {
  initialize
};
