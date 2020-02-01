import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create',
  template: `
    <store-list-layout>
      <router-outlet></router-outlet>
    </store-list-layout>
  `,
  styles: []
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
