import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import {HashLocationStrategy , LocationStrategy} from '@angular/common';
//ng module lives here
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AppRoutingModule } from './app-routing.module';
import { TravelComponent } from './components/travel/travel.component'


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    //imports the formsModule before binding with [(ngModule)]
    FormsModule,
    AppRoutingModule
  ],
  //{provide: Logger, useClass: EventBetterLogger}
  providers: [HeroService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
