import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    constructor(public http: Http) {
    }

    public getAuth(username: string, password: string): any {
        return new Promise((resolve, reject) => {
            username = 'admin';
            password = 'admin'
            var creds = "_operation=loginAndFetchModules&username=" + username + "&password=" + password;
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post('http://localhost/citigo/ellsworth/modules/Mobile/api.php', creds, {headers: headers})
            .map(res => res.json())
            .subscribe(data => resolve(this.saveAuth(data)));
        });
    }

    private saveAuth(data: any): boolean {
        if (data.success) {
            localStorage.setItem('vtresult', JSON.stringify(data.result));
            localStorage.setItem('vtsession', data.result.login.session);
            return true;
        } else {
            return false;
        }
    }

    private loggedIn() {
        if(localStorage.getItem('vtsession')) {
            return true;
        } else {
            return false;
        }
    }

    public logout(): void {
        localStorage.removeItem('vtresult');
        localStorage.removeItem('vtsession');
    }
}