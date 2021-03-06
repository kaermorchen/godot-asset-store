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
      icons: ['magnify', 'chevron-down', 'account-outline', 'login', 'checkbox-blank-circle', 'star', 'loading'],
    },
    'ember-composable-helpers': {
      only: ['find-by']
    }
  });

  return app.toTree();
};
