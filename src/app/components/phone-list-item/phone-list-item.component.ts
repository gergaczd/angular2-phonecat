import { Component, Input } from '@angular/core';
import { PhoneModel } from '../../models/phone.model';

@Component({
  selector: 'ap-list-item',
  templateUrl: 'phone-list-item.template.pug'
})
export class PhoneListItemComponent {

  @Input()
  phone: PhoneModel;
}
