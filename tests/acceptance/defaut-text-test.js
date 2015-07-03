import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: DefautText', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

function getTag(){
  return $('specialnoscripttesttag');
}
test('tag is created', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index');
    let tag = getTag();
    assert.equal(tag.length, 1);
  });
});

test('tag is filled with config text', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index');
    let tag = getTag();
    assert.equal(tag.text(), 'noscripty stuff');
  });
});
