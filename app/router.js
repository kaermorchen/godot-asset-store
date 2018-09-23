import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main', { path: '/' }, function() {
    this.route('assets', function() {
      this.route('asset', { path: ':asset_id' });
    });
  });
  this.route('registration');
  this.route('login');
  this.route('index');
});

export default Router;
