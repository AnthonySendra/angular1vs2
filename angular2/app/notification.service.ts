import {Injectable} from  'angular2/core';
import {Notification} from './notification'
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {KuzzleService} from './kuzzle.service';

@Injectable()
export class NotificationService {

    notifications: Observable<Notification[]>;
    messages: Notification[] = [];

    constructor (private _kuzzleService: KuzzleService) {
        this.notifications = Observable.create(subscriber => {
            this._kuzzleService.subscribe((error, result) => {

                this.messages = [...this.messages, result];
                subscriber.next(this.messages);
            });
        });
    }
}