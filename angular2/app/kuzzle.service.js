System.register(['angular2/core', '../node_modules/kuzzle-sdk/dist/kuzzle.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Kuzzle;
    var KuzzleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Kuzzle_1) {
                Kuzzle = Kuzzle_1;
            }],
        execute: function() {
            KuzzleService = (function () {
                function KuzzleService() {
                    this.kuzzle = new Kuzzle('http://localhost:7512', 'mainindex');
                }
                KuzzleService.prototype.subscribe = function (fn) {
                    this.kuzzle.dataCollectionFactory('message').subscribe({}, fn);
                };
                KuzzleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], KuzzleService);
                return KuzzleService;
            })();
            exports_1("KuzzleService", KuzzleService);
        }
    }
});
//# sourceMappingURL=kuzzle.service.js.map