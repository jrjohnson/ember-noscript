/* eslint-env node */
'use strict';

const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;
const assert = require('assert');
const denodeify = require('denodeify');
const request = denodeify(require('request'));

describe('Adds Noscript to output', function () {
  this.timeout(300000);

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
    assert.ok(response.body.includes("<noscript><p>For full functionality of this site it is necessary to enable JavaScript. Here are the <a href='https://www.enable-javascript.com/' target='_blank'>instructions on how to enable JavaScript in your web browser</a>.</p></noscript>"));
    return app.stopServer();
  });

  it('with configuration from environment', async function () {
    const app = new AddonTestApp();
    await app.create('configuration-env');
    await app.startServer();
    let response = await request({
      url: 'http://localhost:49741',
      headers: {
        'Accept': 'text/html'
      }
    });
    assert.equal(200, response.statusCode);
    assert.ok(response.body.includes("<specialnoscripttesttag>noscripty stuff</specialnoscripttesttag>"));
    return app.stopServer();
  });
});
