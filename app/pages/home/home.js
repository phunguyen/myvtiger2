import {Page, NavController} from 'ionic/ionic';
import {AuthService} from '../../providers/auth';
import {DataService} from '../../providers/data';
import {ModuleDetailPage} from '../module-detail/module-detail';

@Page({
  	templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
	constructor(nav: NavController, authService: AuthService, dataService: DataService) {
		this.nav = nav;
		this.dataService = dataService;
		this.authService = authService;
		this.modules = [];
		if(this.authService.loggedIn()) {
			this.viewHome();
		}
	}

	loggedIn(): boolean {
		return this.authService.loggedIn();
	}

	viewHome(): void {
		this.modules = this.dataService.getListModules();
	}

	viewModule(module): void {
		this.nav.push(ModuleDetailPage, {
	      	module: module
	    });
	}
}
