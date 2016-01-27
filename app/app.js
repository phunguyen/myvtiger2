import {App, Platform, Config} from 'ionic/ionic';
import {HomePage} from './pages/home/home';
import {AuthService} from './providers/auth';
import {DataService} from './providers/data';
import {WebService} from './providers/webservice';

@App({
    template: `
    <ion-nav [root]="root"></ion-nav>
    `,
    providers: [AuthService, DataService, WebService],
    // Check out the config API docs for more info
    // http://ionicframework.com/docs/v2/api/config/Config/
    config: {}
})
export class MyApp {
    constructor(platform: Platform) {
        this.platform = platform;
        this.initializeApp();
        this.root = HomePage;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            console.log('Platform ready');
        });
    }
}