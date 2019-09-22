/* eslint-env node */
'use strict';

const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;
const assert = require('assert');
const denodeify = require('denodeify');
const request = denodeify(require('request'));
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { defaultNoscriptContent } = require('../lib/strings');

describe('Adds Noscript to output', function () {
  this.timeout(100000);

  it('with default configuration', async function () {
    const app = new AddonTestApp();
    await app.create('defaults', {
      noFixtures: true
    });
    await app.startServer();
    let response = await request({
      url: 'http://localhost:49741',
      headers: {
        'Accept': 'text/html'
      }
    });
    assert.equal(200, response.statusCode);
    const { document } = (new JSDOM(response.body)).window;
    const element = document.querySelector("head noscript");
    assert.ok(element);
    assert.equal(element.textContent, defaultNoscriptContent);
    return app.stopServer();
  });

  it('with configuration of content', async function () {
    const app = new AddonTestApp();
    await app.create('configuration-content');
    await app.startServer();
    let response = await request({
      url: 'http://localhost:49741',
      headers: {
        'Accept': 'text/html'
      }
    });
    assert.equal(200, response.statusCode);
    const { document } = (new JSDOM(response.body)).window;
    const element = document.querySelector("head noscript");
    assert.ok(element);
    assert.equal(element.textContent, "noscripty stuff");
    return app.stopServer();
  });

  it('with configuration of placeIn', async function () {
    const app = new AddonTestApp();
    await app.create('configuration-place-in');
    await app.startServer();
    let response = await request({
      url: 'http://localhost:49741',
      headers: {
        'Accept': 'text/html'
      }
    });
    assert.equal(200, response.statusCode);
    const { document } = (new JSDOM(response.body)).window;
    const element = document.querySelector("body noscript");
    assert.ok(element);
    assert.equal(element.textContent, defaultNoscriptContent);
    return app.stopServer();
  });
});
