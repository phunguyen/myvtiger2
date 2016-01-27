import {Page, NavController, NavParams} from 'ionic/ionic';
import {DataService} from '../../providers/data';

@Page({
  templateUrl: 'build/pages/record-detail/record-detail.html',
})

export class RecordDetailPage {
	constructor(nav: NavController, navParams: NavParams, dataService: DataService) {
		this.nav = nav;
		this.navParams = navParams;
		this.dataService = dataService;

		// init
		this.blocks = [];

		// view
		this.viewRecordDetail(this.navParams.get('record'))
	}

	viewRecordDetail(record) {
		this.dataService.getDetail(record.id).then((data) => {
			console.log(data);
			this.blocks = data.blocks;
		});
	}
}
