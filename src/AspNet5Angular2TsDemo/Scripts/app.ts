import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Contact} from './contacts';
import {ContactService} from './ContactService';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
            <h1>{{title}}</h1>
            <ul class="list-unstyled">
                <li *ngFor="#contact of contacts">
                    <span class="badge">{{contact.Id}}</span> {{contact.Name
                </li>
            </ul>
                `,
    providers: [
        HTTP_PROVIDERS,
        ContactService
    ]
})
export class AppComponent implements OnInit {
    public title = 'Contacts List';
    public contacts: Contact[];

    constructor(private contactService: ContactService) { }

    ngOnInit() {
        this.contactService.getContacts()
            .subscribe(contacts => {
                console.log(contacts);
                this.contacts = contacts;
            },
            error => alert(error));
    }
}