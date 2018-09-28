import DS from 'ember-data';
import attr from 'ember-data/attr';
import { computed, setProperties } from '@ember/object';
import RSVP from 'rsvp';
import { filterBy } from '@ember/object/computed';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  title: validator('presence', true),
  description: validator('presence', true),
  category: validator('presence', true),
  cost: validator('presence', true),
  downloadProvider: validator('presence', true),
  browseUrl: validator('presence', true),
  godotVersion: validator('presence', true),
  versionString: validator('presence', true),
  downloadCommit: validator('presence', true),
  iconUrl: validator('presence', true),
});

export default DS.Model.extend(Validations, {
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
  previews: attr(),

  images: filterBy('formattedPreviews', 'type', 'image'),

  formattedPreviews: computed('previews.@each.{preview_id,link,thumbnail,type}', function () {
    const previews = this.get('previews');
    const promise = RSVP.map(previews, preview => {
      if (preview.type === 'image') {
        const image = new Image();

        image.onload = function () {
          setProperties(preview, {
            h: image.height,
            w: image.width,
            src: image.src
          });
        };

        image.src = preview.link;
      }

      return preview;
    });

    return DS.PromiseArray.create({ promise });
  })
});
