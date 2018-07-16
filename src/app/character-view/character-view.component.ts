import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GotService } from '../got.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css'],
  providers: [Location]
})
export class CharacterViewComponent implements OnInit,OnDestroy {

  public currentCharacter;

constructor(public _route: ActivatedRoute, public router: Router, public gotService: GotService, public location: Location) { 
    console.log("character-view constructor is called");
  }

  ngOnInit() {
    console.log("character-view ngOnInit called");
    let currentCharacterUrl = this._route.snapshot.url.toString();
    console.log('currentCharacterUrl : '+ currentCharacterUrl);
    let currentCharacterId = currentCharacterUrl.split(',')[1];
    console.log('currentCharacterId : '+ currentCharacterId);
    this.gotService.getSingleCharacterInformation(currentCharacterId).subscribe(

      data =>{
        console.log(data);
        this.currentCharacter = data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy() {
    console.log('character-view destroyed');
  }
}
