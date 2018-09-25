import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindAll() {
    return `${this.host}/${this.namespace}/configure`;
  }
});
