/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-noscript',
  isDevelopingAddon: function() {
    return false;
  },
  config: function() {
    var ENV = {
      noScript: {
        tag:     'noscript',
        content: "<p>" +
                    "For full functionality of this site it is necessary to enable JavaScript." +
                    "Here are the <a href='http://www.enable-javascript.com/' target='_blank'>" +
                    "instructions how to enable JavaScript in your web browser</a>." +
                  "</p>"
      }
    };

    return ENV;
  },
  contentFor: function(type, config) {
    if( type === 'body') {
      return '<' + config.noScript.tag + '>' + 
        config.noScript.content + 
        '</' + config.noScript.tag + '>';
    }
  }
};
