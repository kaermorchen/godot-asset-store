import Controller from '@ember/controller';
import { computed } from '@ember/object';
import DS from 'ember-data';
import { inject as service } from '@ember/service';

export default Controller.extend({
  constants: service(),

  licenseText: `
    <p>The license under which the asset is available. Check <a href="https://opensource.org/licenses">opensource.org</a> for a more detailed description of each. In case an OSI-approved license you are using is missing, you might <a href="https://github.com/godotengine/asset-library/issues">open an issue</a> about it.<p>
    <p class="mb-0"><strong>Note:</strong> The license you specify here should also be included in the repository you are submitting under a standard name, such as LICENSE or LICENSE.md</p>
  `,
  repositoryHostText: 'The site or service hosting your repository. If your repository host is missing, you might like to <a href="https://github.com/godotengine/asset-library/issues">open an issue</a> about it.',
  repositoryUrlText: `
    <p>The url you use to browse your repository.</p>
    <p class="mb-0">Do not give the clone url (the one that ends in <code>.git</code>), but give the one you use to browse your code.</p>
  `,
  issuesText: 'Optional, in case you are not using the one supplied by the repository host.',
  downloadText: 'The commit or tag that should be downloaded. If using a tag name, make sure that you actually created the tag on your repository.',

  categories: computed(function () {
    const promise = this.store.findAll('category');

    return DS.PromiseArray.create({ promise });
  })
});
