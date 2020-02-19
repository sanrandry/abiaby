import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/authetication/authentication.service';
import { SellerAccountService } from '../../../shared/services/seller-account.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [{ title: 'Profil', id: 'profile' }, { title: 'Se déconnecter', id: 'logout' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              private router: Router,
              private authenticationService: AuthenticationService,
              private nbMenuService: NbMenuService,
              private sellerAccountService: SellerAccountService) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);

      // get the user data
      this.getUser();

      // handle the user menu event
    this.userMenuEventHandler();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * getUser
   * get the user to authentication service
   */
  public getUser() {
    this.sellerAccountService.get(this.authenticationService.getUserId()).subscribe((data) => {
      this.user = data;
    });
  }

  /**
   * userMenyEventHandler()
   * handle the user dropdown menu event
   *
   * @memberof HeaderComponent
   */
  public userMenuEventHandler() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'userMenu'),
      )
      .subscribe((data: any) => {
        // logout function
        if (data.item.id && data.item.id === 'logout') {
          this.authenticationService.logout().subscribe(() => {
            this.router.navigate(['/auth/login']);
          });
        } else if (data.item.id && data.item.id === 'profile') { // redirect to profile page
          this.router.navigate(['/' + this.authenticationService.getUserId() + '/profile']);
        }
      });
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  navigateHome() {
    this.router.navigate(['/' + this.authenticationService.getUserId() + '/dashboard']);
  }
}
