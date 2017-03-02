import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | DefautText');

function getTag(){
  return $('specialnoscripttesttag');
}
test('tag is created', function(assert) {
  visit('/');
  andThen(()=> {
    assert.equal(currentPath(), 'index');
    let tag = getTag();
    assert.equal(tag.length, 1);
  });
});

test('tag is filled with config text', function(assert) {
  visit('/');
  andThen(()=> {
    assert.equal(currentPath(), 'index');
    let tag = getTag();
    assert.equal(tag.text(), 'noscripty stuff');
  });
});
