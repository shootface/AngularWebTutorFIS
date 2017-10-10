import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <app-header></app-header>
  <app-login></app-login>
  <app-footer></app-footer>
  `,
})
export class AppComponent  { name = 'Camilo'; }
