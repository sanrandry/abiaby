import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authetication/authentication.service';
import { NbMenuItem } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';

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
  private storeId;

  public menu: NbMenuItem[];

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStoreId();
  }

  private getStoreId() {
    this.route.paramMap.subscribe((params) => {
      this.storeId = params.get('companyId');
      this.menu = this.getMenu();
    });
  }
  /**
   * getMenu()
   * return the store menu item list
   */
  private getMenu(): NbMenuItem[] {
    return [
      {
        title: 'Accueil',
        icon: 'home-outline',
        link: `/${this.authenticationService.getUserId()}/store/${this.storeId}/`,
        home: true,
      },
      {
        title: 'Boutique',
        icon: 'shopping-cart-outline',
        expanded: true,
        children: [
          {
            title: 'Produits',
            link: `/${this.authenticationService.getUserId()}/store/${this.storeId}/product`,
          },
          {
            title: 'Catégories',
            link: '',
          },
          {
            title: 'Commandes',
            link: '',
          },
          {
            title: 'Clients',
            link: '',
          },
        ],
      },
      {
        title: 'Cofiguration',
        icon: 'settings-2-outline',
        link: `/${this.authenticationService.getUserId()}/store/${this.storeId}/configuration`,
        home: true,
      },
    ];
  }

}
