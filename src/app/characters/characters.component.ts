import { Component, OnInit, OnDestroy } from '@angular/core';
import { GotService } from '../got.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit,OnDestroy {

  public allCharacters;

  constructor(public gotService: GotService) {
    console.log('Characters component constructor');
   }

  ngOnInit() {
    console.log('Characters component initialized');
    this.allCharacters = this.gotService.getCharacters().subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.allCharacters = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
    console.log(this.allCharacters);
  }

  onDeactivate() {
    document.body.scrollTop = 0;
}

  ngOnDestroy() {
    console.log('Characters component destroyed');
  }

}
