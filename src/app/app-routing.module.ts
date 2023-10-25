import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule {
  constructor() {
    const routes: Routes = [
      {path: "about", component: HeaderComponent}
    ]
  }
}
