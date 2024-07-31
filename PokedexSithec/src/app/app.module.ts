import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PokedexHomeComponent } from './components/pokedex-home/pokedex-home.component';
import { PokedexDetailComponent } from './components/pokedex-detail/pokedex-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexHomeComponent,
    PokedexDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
