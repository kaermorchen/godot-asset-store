import TextArea from '@ember/component/text-area';

export function initialize() {
  TextArea.reopen({
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
