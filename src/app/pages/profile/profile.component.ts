import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  template: `
    <store-list-layout>
      <router-outlet></router-outlet>
    </store-list-layout>
  `,
  styles: [],
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
