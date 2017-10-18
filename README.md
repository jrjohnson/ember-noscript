# ember-noscript

[![Greenkeeper badge](https://badges.greenkeeper.io/jrjohnson/ember-noscript.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/jrjohnson/ember-noscript.svg)](https://travis-ci.org/jrjohnson/ember-noscript)
[![Ember Observer Score](http://emberobserver.com/badges/ember-noscript.svg)](http://emberobserver.com/addons/ember-noscript)

Only does one thing, hopefully well:

```html
<noscript>
  <p>
    For full functionality of this site it is necessary to enable JavaScript.  
    Here are the
    <a href='https://www.enable-javascript.com/' target='_blank'> instructions how to enable JavaScript in your web browser</a>.
  </p>
</noscript>
```

## Usage

* `ember install ember-noscript`

### Customization
This addon is configured via your applications `config/environment.js` file.

The default `noScript` value is:

```javascript
  noScript: {
    'content': "<p>" +
                "For full functionality of this site it is necessary to enable JavaScript." +
                "Here are the <a href='https://www.enable-javascript.com/' target='_blank'>" +
                "instructions on how to enable JavaScript in your web browser</a>." +
              "</p>"
  }
```

## Development

* `git clone <repository-url>` this repository
* `cd ember-noscript`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
