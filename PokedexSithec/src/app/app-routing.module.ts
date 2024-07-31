import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexHomeComponent } from './components/pokedex-home/pokedex-home.component';
import { PokedexDetailComponent } from './components/pokedex-detail/pokedex-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: 'pokedex', component: PokedexHomeComponent },
  { path: 'pokemon/:id', component: PokedexDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
