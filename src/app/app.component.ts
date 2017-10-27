import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <app-header></app-header>
  <app-registry></app-registry>
  <app-footer></app-footer>
  `,
})
export class AppComponent  { name = 'Camilo'; }
