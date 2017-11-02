import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ng module lives here
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    //imports the formsModule before binding with [(ngModule)]
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
