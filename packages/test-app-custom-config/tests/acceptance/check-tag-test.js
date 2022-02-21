import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | check tag", function (hooks) {
  setupApplicationTest(hooks);

  test("that noscript tag is placed in the body", async function (assert) {
    await visit("/");
    const el = document.querySelector('body noscript');
    assert.ok(el);
    assert.equal(el.textContent, 'No script stuff');
  });
});
