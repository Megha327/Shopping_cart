import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from '';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
@Input() products;

@Output() searchItem:EventEmitter<string> = new EventEmitter<string>();

searchTerm ;
  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.searchItem.emit(this.searchTerm);
  }
}
