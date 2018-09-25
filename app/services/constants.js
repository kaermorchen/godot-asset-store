import Service from '@ember/service';

const licenses = [
  {
    name: 'MIT',
    value: 'MIT'
  }, {
    name: 'MPL-2.0',
    value: 'MPL-2.0',
  }, {
    name: 'GPL v3',
    value: 'GPLv3',
  }, {
    name: 'GPLv2',
    value: 'GPL v2',
  }, {
    name: 'AGPLv3',
    value: 'AGPL v3',
  }, {
    name: 'CC0',
    value: 'CC0 1.0 Universal',
  }, {
    name: 'CC-BY-4.0',
    value: 'CC BY 4.0 International',
  }, {
    name: 'CC-BY-3.0',
    value: 'CC BY 3.0 Unported',
  }, {
    name: 'CC-BY-SA-4.0',
    value: 'CC BY-SA 4.0 International',
  }, {
    name: 'CC-BY-SA-3.0',
    value: 'CC BY-SA 3.0 Unported',
  }, {
    name: 'BSD-2-Clause',
    value: 'BSD 2-clause License',
  }, {
    name: 'BSL-1.0',
    value: 'Boost Software License',
  }
];

const downloadProviders = [
  {
    name: 'Custom',
    value: -1
  }, {
    name: 'GitHub',
    value: 0,
  }, {
    name: 'GitLab',
    value: 1,
  }, {
    name: 'BitBucket',
    value: 2,
  }, {
    name: 'Gogs/Gitea',
    value: 3,
  }, {
    name: 'cgit',
    value: 4,
  }
];

const godotVersions = [
  '1.0',
  '1.1',
  '2.0', //'2.0.1', '2.0.2', '2.0.3', '2.0.4',
  '2.1', '2.1.1', '2.1.2', '2.1.3', '2.1.4',
  '2.2',
  '3.0', '3.0.1', '3.0.2', '3.0.3', '3.0.4',
  '3.1',
  'unknown',
  'custom_build',
]

export default Service.extend({
  licenses,
  downloadProviders,
  godotVersions,
});
