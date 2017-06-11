import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ap-search-box',
  templateUrl: 'search-box.template.pug'
})
export class SearchBoxComponent {

  @Output()
  onInputChange = new EventEmitter();

  handleKeyUp($event) {
    this.onInputChange.emit($event.target.value);
  }
}
