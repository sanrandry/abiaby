import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="http://www.asaunivers.mg/" target="_blank">ASA</a></b> 2019</span>
  `,
})
export class FooterComponent {
}
