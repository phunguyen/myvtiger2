import {Page, NavController} from 'ionic/ionic';
import {HomePage} from '../home/home';
import {AuthService} from '../../providers/auth';

@Page({
  	templateUrl: 'build/pages/login/login.html',
})

export class LoginPage {
	constructor(nav: NavController, authService: AuthService) {
		this.nav = nav;
		this.authService = authService;
		this.authService.logOut();
	}

	login(): void {
		this.authService.getAuth(this.username, this.password).then((status) => {
			if(status) {
				this.nav.setRoot(HomePage);
			}
		});
	}
}
