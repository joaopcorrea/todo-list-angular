import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() searchChanged = new EventEmitter();

  onSearchChange(searchValue: string) {
    this.searchChanged.emit(searchValue.toLowerCase());
  }
}
