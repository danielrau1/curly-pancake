import { Component, OnInit } from '@angular/core';
import {DadService} from '../../models/dad.service';

@Component({
  selector: 'app-randon-dad-joke',
  templateUrl: './randon-dad-joke.component.html',
  styleUrls: ['./randon-dad-joke.component.scss']
})
export class RandonDadJokeComponent implements OnInit {
  theJoke: any;
  constructor(private dadJoke: DadService ) { }

  ngOnInit() {
    this.dadJoke.getDadJoke().subscribe(
      (result) => {
        this.theJoke = result.message;
        console.log(this.theJoke);
      }
    );
  }

}
