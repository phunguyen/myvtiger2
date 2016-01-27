import {Injectable} from 'angular2/core';
import {WebService} from './webservice';

@Injectable()
export class DataService {
    constructor(webService: WebService) {
    	this.webService = webService;
    }

    private getSession() {
    	return localStorage.getItem('vtsession');
    }

    private getListModules() {
        var vtresult = JSON.parse(localStorage.getItem('vtresult'));

        return vtresult.modules;
    }

    private getList(moduleName) {
    	return new Promise((resolve, reject) => {
	    	var objModule = localStorage.getItem(moduleName);
	    	if(objModule) {
	    		resolve(JSON.parse(objModule).records);
	    	} else {
	    		this.webService.getList(this.getSession(), moduleName).then((res) => {
	    			resolve(res.result.records);
	    			localStorage.setItem(moduleName, JSON.stringify(res.result));
	    		});
	    	}
	    }
    }

    private getDetail(recordId) {
    	return new Promise((resolve, reject) => {
	    	var objModule = localStorage.getItem(recordId);
	    	if(objModule) {
	    		resolve(JSON.parse(objModule).records);
	    	} else {
	    		this.webService.getDetail(this.getSession(), recordId).then((res) => {
	    			resolve(res.result.record);
	    			// localStorage.setItem(moduleName, JSON.stringify(res.result));
	    		});
	    	}
	    }
    }
}