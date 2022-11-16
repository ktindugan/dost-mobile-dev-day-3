import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  films: any = [];
  public filmSub: Subscription = new Subscription();

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmSub.add(
      this.filmService.getFilms().subscribe(
        result=>{
          this.films = result['data'];
          console.log(result['data']);
        },
        error=>{
          console.log(error);

        }
        )
    );
  }
}