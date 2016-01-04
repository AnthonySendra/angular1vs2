System.register(['angular2/core', "rxjs/Observable", './kuzzle.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, kuzzle_service_1;
    var NotificationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (kuzzle_service_1_1) {
                kuzzle_service_1 = kuzzle_service_1_1;
            }],
        execute: function() {
            NotificationService = (function () {
                function NotificationService(_kuzzleService) {
                    var _this = this;
                    this._kuzzleService = _kuzzleService;
                    this.notifications = Observable_1.Observable.create(function (observer) {
                        _this._kuzzleService.subscribe(function (error, result) {
                            observer.onNext(result);
                        });
                        return function () { };
                    });
                }
                NotificationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [kuzzle_service_1.KuzzleService])
                ], NotificationService);
                return NotificationService;
            })();
            exports_1("NotificationService", NotificationService);
        }
    }
});
//# sourceMappingURL=notification.service.js.map