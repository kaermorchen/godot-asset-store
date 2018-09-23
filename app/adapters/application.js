import DS from 'ember-data';
import { camelize } from '@ember/string';
import config from 'godot-asset-store/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  session: service(),

  host: config.APP.host,
  namespace: config.APP.namespace,

  pathForType(modelName) {
    return camelize(modelName);
  },

  authorize(xhr) {
    let { token } = this.get('session.data.authenticated');

    if (isPresent(token)) {
      xhr.setRequestHeader('Authorization', token);
    }
  }
});
