import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;

  constructor(private movieService: MoviesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      let imdbId = params['imdbId'];
      this.movieService.getMovideDetails(imdbId).subscribe(
        resp => this.movie = resp
      );
    })
  }

  goBack(): void{
    window.history.back();
  }

}
