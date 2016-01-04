import {Injectable} from 'angular2/core';
import * as Kuzzle from '../node_modules/kuzzle-sdk/dist/kuzzle.js';

@Injectable()
export class KuzzleService {

    private kuzzle: any;

    constructor () {
        this.kuzzle = new Kuzzle('http://localhost:7512', 'mainindex');
    }

    subscribe (fn) {
        this.kuzzle.dataCollectionFactory('message').subscribe({}, fn);
    }
}