'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('poll service', function() {
  it('registered the polls service', () => {
    assert.ok(app.service('polls'));
  });
});
