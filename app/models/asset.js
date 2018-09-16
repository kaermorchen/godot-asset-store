import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  title: attr('string'),
  godotVersion: attr('string'),
  rating: attr('string'),
  cost: attr('string'),
  supportLevel: attr('string'),
  iconUrl: attr('string'),
  version: attr('string'),
  versionString: attr('string'),
  modifyDate: attr('string'),

  author: belongsTo('user'),
  category: belongsTo('category'),
});
