import Application from 'test-app-custom-config/app';
import config from 'test-app-custom-config/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
