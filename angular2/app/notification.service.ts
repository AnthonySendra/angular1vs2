import {Injectable} from  'angular2/core';
import {Notification} from './notification'
import {Observable} from "rxjs/Observable";
import {KuzzleService} from './kuzzle.service';

@Injectable()
export class NotificationService {

    notifications: Observable<Notification[]>;

    constructor (private _kuzzleService: KuzzleService) {
        this.notifications = Observable.create((observer) => {
            this._kuzzleService.subscribe((error, result) => {
                observer.onNext(result);
            });

            return function () {}
        });
    }
}