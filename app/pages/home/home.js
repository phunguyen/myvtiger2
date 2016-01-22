import {Page} from 'ionic/ionic';
import {AuthService} from '../../providers/auth';
import {DataService} from '../../providers/data';

@Page({
  	templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
	constructor(auth: AuthService, data: DataService) {
		this.data = data;
		this.auth = auth;
		this.modules = [];
		if(this.auth.loggedIn()) {
			this.viewHome();
		}
	}

	loggedIn(): boolean {
		return this.auth.loggedIn();
	}

	login(): void {
		this.auth.getAuth(this.username, this.password).then((status) => {
			if(status) {
				this.viewHome();
			}
		});
	}

	viewHome(): void {
		this.modules = this.data.getListModules();
	}

	viewModule(module): void {
		console.log(module);
	}
}
