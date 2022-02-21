import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | check tag", function (hooks) {
  setupApplicationTest(hooks);

  test("that noscript tag is placed in the header", async function (assert) {
    await visit("/");
    const el = document.querySelector('head noscript');
    assert.ok(el);
    assert.ok(el.textContent.includes('javascript'));
  });
});
