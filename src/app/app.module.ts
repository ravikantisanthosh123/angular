import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule }    from '@angular/common/http'; 
import { FetchLastService } from './fetch-last.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HerosectionComponent } from './herosection/herosection.component';
import {FormsModule} from '@angular/forms';
import { FavouriteComponent } from './favourite/favourite.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    HerosectionComponent,
    FavouriteComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchLastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
