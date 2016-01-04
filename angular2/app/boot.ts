import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {NotificationService} from "./notification.service";
import {KuzzleService} from "./kuzzle.service";

bootstrap(AppComponent, [NotificationService, KuzzleService]);