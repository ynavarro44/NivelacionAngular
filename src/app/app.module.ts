import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from "@angular/common/http";
import { MovieComponent } from './components/movie/movie.component';
import { PeopleComponent } from './components/people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
