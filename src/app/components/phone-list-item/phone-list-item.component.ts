import { Component, Input } from '@angular/core';
import { PhoneModel } from '../../models/phone.model';

@Component({
  selector: 'ap-list-item',
  templateUrl: 'phone-list-item.template.pug',
  styles: ['.thumbnail .ap-phone-item-caption { height: 180px; }']
})
export class PhoneListItemComponent {

  @Input()
  phone: PhoneModel;
}
