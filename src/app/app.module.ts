import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainComponent} from './main/main.component';
import {ContactComponent} from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BodyStyleDirective} from './body-style.directive';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AboutComponent} from './about/about.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {loadProjectsReducer} from "./state/github.reducers";
import {GithubEffects} from "./state/github.effects";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ContactComponent,
    BodyStyleDirective,
    AboutComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    StoreModule.forRoot({projects: loadProjectsReducer}, {}),
    EffectsModule.forRoot([GithubEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
