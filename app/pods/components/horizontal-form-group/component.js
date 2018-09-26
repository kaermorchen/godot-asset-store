import layout from '../form-group/template';
import HorizontalFormGroup from '../form-group/component';

export default HorizontalFormGroup.extend({
  layout,
  classNames: ['row'],

  leftColumnClass: 'col-sm-4',
  rightColumnClass: 'col-sm-8',

  labelClass: 'col-form-label',
});
