import { alias, oneWay } from '@ember/object/computed';
import Component from '@ember/component';
import { isPresent, tryInvoke } from '@ember/utils';
import { defineProperty, computed } from '@ember/object';

export default Component.extend({
  classNames: ['form-group'],
  classNameBindings: ['errorIsShown:is-invalid'],

  leftColumnClass: null,
  rightColumnClass: null,

  leftAddonIcon: null,
  rightAddonIcon: null,

  label: null,
  model: null,
  property: null,
  autofocus: false,
  formText: null,
  labelIsShown: true,
  placeholder: null,
  labelHelp: null,
  disabled: false,
  value: undefined,
  error: undefined,
  errors: undefined,
  didValidate: undefined,
  type: null,
  tabindex: null,
  hasBeenTouched: false,

  didInsertElement() {
    this._super(...arguments);

    const property = this.get('property');
    const model = this.get('model');

    if (this.get('didValidate') === undefined && model) {
      defineProperty(this, 'didValidate', oneWay('model.didValidate'));
      this.notifyPropertyChange('didValidate');
    }

    if (this.get('errors') === undefined && model && property) {
      defineProperty(this, 'errors', alias(`model.errors.${property}`));
      this.notifyPropertyChange('errors');
    }

    if (this.get('value') === undefined && model && property) {
      defineProperty(this, 'value', alias(`model.${property}`));
      this.notifyPropertyChange('value');
    }

    if (this.get('error') === undefined && model && property) {
      defineProperty(this, 'error', computed(`model.validations.attrs.${property}.{message,isInvalid}`, 'model.validations.{isInvalid,isDirty}', () => {
        return this.get(`model.validations.attrs.${property}.isInvalid`) ? this.get(`model.validations.attrs.${property}.message`) : null;
      }));
      this.notifyPropertyChange('error');
    }
  },

  publicAPI: computed('disabled', function () {
    return {
      disabled: this.get('disabled'),
      actions: {
        validate: this.validate.bind(this)
      }
    }
  }),

  errorIsShown: computed('error', 'errors', 'didValidate', 'hasBeenTouched', function () {
    return (this.get('didValidate') || this.get('hasBeenTouched')) && (isPresent(this.get('error')) || isPresent(this.get('errors')))
  }),

  validate() {
    this.set('hasBeenTouched', true);
  },

  actions: {
    keyDown() {
      tryInvoke(this, 'keyDown', arguments);
    },

    validate() {
      this.validate();
    },

    onLeftAddonClick() {
      tryInvoke(this, 'onLeftAddonClick');
    },

    onRightAddonClick() {
      tryInvoke(this, 'onRightAddonClick');
    }
  }
});
