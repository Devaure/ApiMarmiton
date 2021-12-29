import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'receipe', component:ReceipeComponent},
  {path:'search', component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
