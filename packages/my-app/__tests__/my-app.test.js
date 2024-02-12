'use strict';

import myApp from '../lib/my-app.js';
import { strict as assert } from 'assert';

assert.strictEqual(myApp(), 'Hello from myApp');
console.info('myApp tests passed');
