import LinkComponent from '@ember/routing/link-component';

export function initialize() {
  LinkComponent.reopen({
    invokeAction() { },

    init() {
      this._super(...arguments);

      if (this.invokeAction) {
        this._attachActionEvent();
      }
    },

    willDestroyElement() {
      if (this.invokeAction) {
        this._detachActionEvent();
      }

      this._super(...arguments);
    },

    _sendInvokeAction() {
      if (this.invokeAction) {
        this.invokeAction();
      }
    },

    _attachActionEvent() {
      this.on(this.get('eventName'), this, this._sendInvokeAction);
    },

    _detachActionEvent() {
      this.off(this.get('eventName'), this, this._sendInvokeAction);
    }
  });
}

export default {
  initialize
};
