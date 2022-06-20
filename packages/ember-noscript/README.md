# ember-noscript

[![Ember Observer Score](http://emberobserver.com/badges/ember-noscript.svg)](http://emberobserver.com/addons/ember-noscript)

Only does one thing, hopefully well. Adding a noscript tag to your ember app's index.html:

```html
<noscript>
  <p>
    For full functionality of this site it is necessary to enable JavaScript.  
    Here are the
    <a href='https://www.enable-javascript.com/' target='_blank'> instructions how to enable JavaScript in your web browser</a>.
  </p>
</noscript>
```

## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


## Installation

```
ember install ember-noscript
```

### Customization
This addon is configured via your applications `config/environment.js` file.

The default `noScript` value is:

```javascript
  noScript: {
    'content': "<p>" +
                "For full functionality of this site it is necessary to enable JavaScript." +
                "Here are the <a href='https://www.enable-javascript.com/' target='_blank'>" +
                "instructions on how to enable JavaScript in your web browser</a>." +
              "</p>",
    'placeIn': 'head'
  }
```

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
