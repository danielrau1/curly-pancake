import { Component, OnInit } from '@angular/core';
import {DadService} from '../../models/dad.service';

@Component({
  selector: 'app-randon-dad-joke',
  templateUrl: './randon-dad-joke.component.html',
  styleUrls: ['./randon-dad-joke.component.scss']
})
export class RandonDadJokeComponent implements OnInit {
  theJoke: any; // (1)
  constructor(private dadJoke: DadService ) { }

  ngOnInit() {
    this.dadJoke.getDadJoke().subscribe(
      (result) => {
        this.theJoke = result.joke;
        console.log(this.theJoke); // (1) First want to test for the fetching fo the json
      }
    );
  }

}
