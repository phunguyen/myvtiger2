import {Page, NavController, NavParams} from 'ionic/ionic';
import {DataService} from '../../providers/data';
import {RecordDetailPage} from '../record-detail/record-detail';

@Page({
	templateUrl: 'build/pages/module-detail/module-detail.html',
})

export class ModuleDetailPage {
	constructor(nav: NavController, navParams: NavParams, dataService: DataService) {
		this.nav = nav;
		this.navParams = navParams;
		this.dataService = dataService;

		// init
		this.name = '';
		this.records = [];

		// view
		this.viewModuleDetail(this.navParams.get('module'));
	}

	viewModuleDetail(module) {
		this.name = module.name;
		this.dataService.getList(module.name).then((records) => {
			this.records = records;
		});
	}

	viewRecord(record) {
		this.nav.push(RecordDetailPage, {
	      	record: record
	    });
	}
}
