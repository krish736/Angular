import { Component, OnInit } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent implements OnInit {

  constructor(private jokeService: JokeService){}

  joke: string = 'loading'

  ngOnInit(){
    this.jokeService.getJoke().subscribe((data:any)=>{
      this.joke = data.value
    })
  }

}
