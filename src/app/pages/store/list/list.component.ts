import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  template: `
    <store-list-layout>
      <router-outlet></router-outlet>
    </store-list-layout>
  `,
  styles: [],
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
