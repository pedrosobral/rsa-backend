'use strict';

const assert = require('assert');
const app = require('../../src/app');

describe('\'attendance\' service', () => {
  it('registered the service', () => {
    const service = app.service('attendance');

    assert.ok(service, 'Registered the service');
  });
});
