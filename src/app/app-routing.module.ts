import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HerosectionComponent } from './herosection/herosection.component';
import{ DetailsComponent} from './details/details.component'

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:"full"},
  {path:'home', component:HerosectionComponent},
  {path:'favourite', component:FavouriteComponent},
  {path:'details/:name', component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
