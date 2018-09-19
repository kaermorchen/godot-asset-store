import Route from '@ember/routing/route';

export default Route.extend({
  renderTemplate() {
    this.render('main/assets/asset', {
      into: 'main'
    });
  }
});
