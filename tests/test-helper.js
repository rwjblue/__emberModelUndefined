import Application from '--ember-model-undefined/app';
import config from '--ember-model-undefined/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
