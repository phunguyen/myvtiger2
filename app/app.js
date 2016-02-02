import {App, IonicApp, Platform, Config} from 'ionic/ionic';
import {HomePage} from './pages/home/home';
import {LoginPage} from './pages/login/login';
import {SettingPage} from './pages/setting/setting';
import {AuthService} from './providers/auth';
import {DataService} from './providers/data';
import {WebService} from './providers/webservice';

@App({
    templateUrl: 'build/app.html',
    providers: [AuthService, DataService, WebService],
    // Check out the config API docs for more info
    // http://ionicframework.com/docs/v2/api/config/Config/
    config: {}
})
export class MyApp {
    constructor(app: IonicApp, platform: Platform, authService: AuthService) {
        this.app = app;
        this.platform = platform;
        this.authService = authService;

        // init
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'Setting', component: SettingPage },
            { title: 'Logout', component: LoginPage },
        ];

        // check logged in
        if(this.authService.loggedIn()) {
            this.root = HomePage;
        } else {
            this.root = LoginPage;
        }
    }

    initializeApp() {
        this.platform.ready().then(() => {
            console.log('Platform ready');
        });
    }

    openPage(page) {
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    }
}