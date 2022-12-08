import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSearchChange(searchValue: string) {
    this.searchChanged.emit(searchValue.trim().toLowerCase());
  }
}
