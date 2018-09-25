import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('asset', {

    });
  },

  renderTemplate() {
    this.render('main/assets/new', {
      into: 'main'
    });
  }
});
