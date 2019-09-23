import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any={};
  imagenComic:string;

  constructor(private activateRoute: ActivatedRoute,
              private heroesService: HeroesService
              ) { 

    this.activateRoute.params.subscribe( params => {
        this.heroe = this.heroesService.getHeroe(params['id']);      
    });   
    this.casaComic(this.heroe.casa);

  }

  casaComic(valor:string){
    if(valor=='DC'){
      this.imagenComic = 'assets/img/dcComics.png';   
    }else{
      this.imagenComic = 'assets/img/marvel.png';
    }
  }

}
