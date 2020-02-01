import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthenticationService } from '../../shared/authetication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PageMenuService {
  public MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Accueil',
      icon: 'home-outline',
      link: `/${this.authenticationService.getUserId()}/dashboard`,
      home: true,
    },
    {
      title: 'Boutique',
      icon: 'shopping-cart-outline',
      expanded: true,
      children: [
        {
          title: 'Produits',
          link: '',
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
      link: `/${this.authenticationService.getUserId()}/dashboard`,
      home: true,
    }
  ];
  constructor(private authenticationService: AuthenticationService) { }
}
