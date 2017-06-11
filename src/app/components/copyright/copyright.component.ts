import { Component, Inject } from '@angular/core';

@Component({
  selector: 'ap-copyright',
  templateUrl: 'copyright.template.pug'
})
export class CopyrightComponent {

  constructor(@Inject('ACTUAL_YEAR') public actualYear: any) {}
}
