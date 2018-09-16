'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-bootstrap-4': {
      js: null
    },
    'ember-cli-string-helpers': {
      only: ['capitalize']
    },
    'ember-mdi': {
      icons: ['checkbox-blank-circle', 'star'],
    }
  });

  return app.toTree();
};
