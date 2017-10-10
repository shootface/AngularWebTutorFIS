import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HeaderComponent} from './common/header.component';
import {FooterComponent} from './common/footer.component';
import {rightcomponent} from'./common/right.component';
import {leftcomponent} from'./common/left.component';
import {logincomponent} from './common/login.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, rightcomponent, leftcomponent, logincomponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
