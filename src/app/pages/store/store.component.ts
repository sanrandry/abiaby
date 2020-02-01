import { Component, OnInit } from '@angular/core';
import { PageMenuService } from '../page-menu.service';

@Component({
  selector: 'store',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
  styles: []
})
export class StoreComponent implements OnInit {

  constructor(private pageMenuService: PageMenuService) { }
  menu = this.pageMenuService.MENU_ITEMS;

  ngOnInit() {
  }

}
