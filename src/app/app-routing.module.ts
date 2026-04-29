import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {AboutComponent} from "./about/about.component";
import {AppComponent} from "./app.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "", component: PortfolioComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Import routes correctly
  exports: [RouterModule], // Export RouterModule for use in AppModule
  declarations: [],
})
export class AppRoutingModule {
  constructor() {

  }
}
