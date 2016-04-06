var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var ContactService_1 = require('./ContactService');
require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent(contactService) {
        this.contactService = contactService;
        this.title = 'Contacts List';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContacts()
            .subscribe(function (contacts) {
            console.log(contacts);
            _this.contacts = contacts;
        }, function (error) { return alert(error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n            <h1>{{title}}</h1>\n            <ul class=\"list-unstyled\">\n                <li *ngFor=\"#contact of contacts\">\n                    <span class=\"badge\">{{contact.Id}}</span> {{contact.Name\n                </li>\n            </ul>\n                ",
            providers: [
                http_1.HTTP_PROVIDERS,
                ContactService_1.ContactService
            ]
        }), 
        __metadata('design:paramtypes', [ContactService_1.ContactService])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map