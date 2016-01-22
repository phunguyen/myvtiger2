import {Injectable} from 'angular2/core';

@Injectable()
export class DataService {
    constructor() {
    }

    private getListModules() {
        var vtresult = JSON.parse(localStorage.getItem('vtresult'));

        return vtresult.modules;
    }
}