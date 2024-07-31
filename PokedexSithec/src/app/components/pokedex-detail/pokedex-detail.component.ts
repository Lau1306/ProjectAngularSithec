import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
  styleUrl: './pokedex-detail.component.css'
})
export class PokedexDetailComponent implements OnInit{
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokeapiService: PokeApiService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const pokemonId = +id;
      this.getPokemonDetails(pokemonId);
    } else {
      console.error('ID is null');
    }
  }

  getPokemonDetails(id: number) {
    this.pokeapiService.getPokemonDetail(id).subscribe(data => {
      this.pokemon = data;
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
