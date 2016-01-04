import {Component, ChangeDetectionStrategy, OnInit} from 'angular2/core';
import {NotificationService} from "./notification.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'messages-log',
    changeDetection: ChangeDetectionStrategy.OnPushObserve,
    template: `
        <ul class="message-list">
            <li class="message-item" *ngFor="#notification of notifications">
                {{notification.text}}
            </li>
        </ul>
    `
})

export class AppComponent implements OnInit {

    public notifications: Observable<any>;

    constructor (private _notificationsService: NotificationService) {}

    ngOnInit () {
        this.getNotifications();
    }

    getNotifications () {
        this.notifications = this._notificationsService.notifications;
    }
}