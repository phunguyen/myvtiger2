import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WebService {
    constructor(public http: Http) {
    }

    public getList(session: string, name: string): any {
        return new Promise((resolve, reject) => {
            var creds = "_operation=listModuleRecords&module=" + name + "&_session=" + session;
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post('http://localhost/vtiger/vt61/modules/Mobile/api.php', creds, {headers: headers})
            .map(res => res.json())
            .subscribe(data => resolve(data));
        });
    }

    public getDetail(session: string, recordId: string): any {
        return new Promise((resolve, reject) => {
            var creds = "_operation=fetchRecordWithGrouping&record=" + recordId + "&_session=" + session;
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post('http://localhost/vtiger/vt61/modules/Mobile/api.php', creds, {headers: headers})
            .map(res => res.json())
            .subscribe(data => resolve(data));
        });
    }
}