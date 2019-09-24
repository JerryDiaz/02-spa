import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[]=[];
  termino:string;
  constructor(private heroeService: HeroesService,
              private activateRoute:ActivatedRoute) { }

  ngOnInit() {

     
      this.activateRoute.params.subscribe( params => {       
        this.termino =  params['termino'];
        this.heroes = this.heroeService.buscarHeroes(params['termino']);      
      
      });

  }



}
