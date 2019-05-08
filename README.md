# ember-noscript

[![Build Status](https://travis-ci.org/jrjohnson/ember-noscript.svg)](https://travis-ci.org/jrjohnson/ember-noscript)
[![Ember Observer Score](http://emberobserver.com/badges/ember-noscript.svg)](http://emberobserver.com/addons/ember-noscript)

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

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

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
