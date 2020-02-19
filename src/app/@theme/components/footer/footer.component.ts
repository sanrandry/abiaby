import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="http://www.iasa.mg/" target="_blank">ASA</a></b> {{year}}</span>
  `,
})
export class FooterComponent {
  public year = new Date().getFullYear();
}
