import DS from 'ember-data';
import attr from 'ember-data/attr';

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
  category: attr('string'),
  author: attr('string'),
  description: attr('string'),
  browseUrl: attr('string'),
  downloadCommit: attr('string'),
  downloadHash: attr('string'),
  downloadProvider: attr('string'),
  downloadUrl: attr('string'),
  issuesUrl: attr('string'),
  searchable: attr('string'),
  type: attr('string'),

  previews: attr(), //?
});

