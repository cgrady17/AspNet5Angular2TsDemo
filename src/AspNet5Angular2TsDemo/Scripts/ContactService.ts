import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Contact} from "./contacts";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ContactService {
    private _url = "http://localhost/38218/api/contacts";

    constructor(private http: Http) { }

    getContacts() {
        return this.http.get(this._url)
            .map(response => <Contact[]>response.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error);
            });
    }
}