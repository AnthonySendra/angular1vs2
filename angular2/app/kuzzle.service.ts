import {Injectable} from 'angular2/core';
import * as Kuzzle from 'node_modules/kuzzle-sdk/dist/kuzzle.js';

@Injectable()
export class KuzzleService {

    private kuzzle: any;

    constructor () {
        this.kuzzle = new Kuzzle.default('http://paint.kuzzle.io:7512', 'mainindex');
    }

    subscribe (fn) {
        this.kuzzle.dataCollectionFactory('paint').subscribe({}, fn);
    }
}