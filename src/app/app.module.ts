import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {rightcomponent} from'./common/right.component';
import {leftcomponent} from'./common/left.component';
import {logincomponent} from './common/login/login.component';
import {registrycomponent} from './common/registry/registry.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, rightcomponent, leftcomponent, logincomponent,registrycomponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
