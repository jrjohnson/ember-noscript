# ember-noscript
[![Build Status](https://travis-ci.org/jrjohnson/ember-noscript.svg)](https://travis-ci.org/jrjohnson/ember-noscript)

Only does one thing, hopefully well:

```html
<noscript>
  <p>
    For full functionality of this site it is necessary to enable JavaScript.  
    Here are the
    <a href='http://www.enable-javascript.com/' target='_blank'> instructions how to enable JavaScript in your web browser</a>.
  </p>
</noscript>
```

## Usage

* `ember install:addon ember-noscript`

### Customization
This addon is configured via your applications `config/environment.js` file.

The default `noScript` value is:

```javascript
  noScript: {
    'content': "<p>" +
                "For full functionality of this site it is necessary to enable JavaScript." +
                "Here are the <a href='http://www.enable-javascript.com/' target='_blank'>" +
                "instructions how to enable JavaScript in your web browser</a>." +
              "</p>"
  }
```

## Development

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
