import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  // test;
  constructor() { }

  ngOnInit(): void {
    // console.log("called");
    // window.localStorage.setItem('test', 'megha');
    // this.test = window.localStorage.getItem('test');
  }
}
