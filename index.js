'use strict';

const { defaultNoscriptContent } = require('./lib/strings');

module.exports = {
  name: require('./package').name,
  isConfigChecked: false,
  config(env, appConfig) {
    this.checkConfig(appConfig)
  },
  contentFor(type, config) {
    const placeIn = this.getValueForPlaceIn(config);
    const content = this.getValueForContent(config);
    if( type === placeIn) {
      return `<noscript>${content}</noscript>`;
    }
  },
  getValueForContent(config) {
    if ('noScript' in config) {
      if ('content' in config.noScript) {
        return config.noScript.content;
      }
    }

    return defaultNoscriptContent;
  },
  getValueForPlaceIn(config) {
    if ('noScript' in config) {
      if ('placeIn' in config.noScript) {
        return config.noScript.placeIn;
      }
    }

    return "head";
  },
  checkConfig(appConfig) {
    //ensure we only check config once to avoid duplicate messages.
    if (this.isConfigChecked) {
      return;
    }
    this.isConfigChecked = true;
    if ('noScript' in appConfig) {
      if ('tag' in appConfig.noScript) {
        this.ui.writeWarnLine(`ember-noscript
          Specifying the 'tag' option in environment.js for "noScript" was removed in v4.0.0.
          <noscript> is now the only tag option.
        `);
      }
    }
  }
};
