import { Component } from '@angular/core';
import { PageMenuService } from './page-menu.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  constructor (private pageMenuService: PageMenuService) {}
  menu = this.pageMenuService.MENU_ITEMS;
}
