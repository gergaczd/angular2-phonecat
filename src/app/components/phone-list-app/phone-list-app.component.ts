import { Component } from '@angular/core';

import { FilteredPhoneListService } from '../../services/filtered-phone-list/filtered-phone-list.service';

@Component({
  selector: 'ap-phone-list-app',
  templateUrl: 'phone-list-app.template.pug',
  styles: ['.row .ap-search-panel { margin-bottom: 20px; }']
})
export class PhoneListAppComponent {

  public phones: FilteredPhoneListService;

  constructor(filteredPhoneList: FilteredPhoneListService) {
    this.phones = filteredPhoneList;
  }

  ngOnInit() {
    this.phones.load();
  }
}
