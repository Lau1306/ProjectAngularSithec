import { Component, OnInit  } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { PageEvent } from '@angular/material/paginator';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-pokedex-home',
  templateUrl: './pokedex-home.component.html',
  styleUrl: './pokedex-home.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [
        animate(500)
      ])
    ])
  ]
})
export class PokedexHomeComponent implements OnInit{
  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  page: number = 0;
  total: number = 0;

  constructor(private pokeapiService: PokeApiService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    const limit = 20;
    const offset = this.page * limit;

    this.pokeapiService.getPokemons(offset, limit).subscribe(data => {
      this.pokemons = data.results;
      this.filteredPokemons = [...this.pokemons];
      this.total = data.count;
    });
  }

  nextPage() {
    if ((this.page + 1) * 20 < this.total) {
      this.page++;
      this.getPokemons();
    }
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
      this.getPokemons();
    }
  }

  getIdFromUrl(url: string): number {
    const segments = url.split('/');
    return +segments[segments.length - 2];
  }

  getPokemonImage(url: string): string {
    const id = this.getIdFromUrl(url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    if (filterValue) {
      this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(filterValue));
    } else {
      this.filteredPokemons = [...this.pokemons];
    }
  }

  changePage(event: PageEvent) {
    this.page = event.pageIndex;
    this.getPokemons();
  }
}
