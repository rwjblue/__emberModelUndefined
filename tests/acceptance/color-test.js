import { module, test } from "qunit";
import { click, visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | color", function (hooks) {
  setupApplicationTest(hooks);

  test("visiting /color", async function (assert) {
    await visit("/red");

    assert.equal(currentURL(), "/red");
    assert.dom().containsText("RED");

    await click("[data-test-foo]");
    assert.equal(currentURL(), "/green");
    assert.dom().containsText("GREEN");
  });

  test("visiting /color in an engine", async function (assert) {
    await visit("/nested-color/red");

    assert.equal(currentURL(), "/nested-color/red");
    assert.dom().containsText("RED");

    await click("[data-test-nested-foo]");
    assert.equal(currentURL(), "/nested-color/green");
    assert.dom().containsText("GREEN");
  });
});
