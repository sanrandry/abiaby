import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthenticationService } from '../../shared/authetication/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageMenuService {
  private storeId;

  public MENU_ITEMS: NbMenuItem[] = [
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
          link: `/${this.authenticationService.getUserId()}/dashboard/fd`,
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
    },
  ]; 
  constructor(private authenticationService: AuthenticationService, private route: ActivatedRoute) { 
  }
  private getStoreId() {
    this.route.paramMap.subscribe((params) => {
      this.storeId = params.get('companyId');
      console.log(this.storeId)
    });
  }
}
