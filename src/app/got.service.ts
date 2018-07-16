import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  private books;
  private houses;
  private characters;
  private baseUrl = 'https://anapioficeandfire.com/api/';

  constructor(private _http:HttpClient) {
    console.log('GoT Service constructor called');
   }

  //exception handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getBooks():any {

    this.books = this._http.get(this.baseUrl+'books');
    console.log(this.books);
    return this.books;

  }

  public getSingleBookInformation(currentBookId):any {

    let currentBook = this._http.get(this.baseUrl + 'books/' + currentBookId);
    console.log(currentBook);
    return currentBook;

  }  

  public getHouses():any {

    this.houses = this._http.get(this.baseUrl+'houses');
    console.log(this.houses);
    return this.houses;

  }

  public getSingleHouseInformation(currentHouseId):any {

    let currentHouse = this._http.get(this.baseUrl + 'houses/' + currentHouseId);
    console.log(currentHouse);
    return currentHouse;

  }    

  public getCharacters():any {

    this.characters = this._http.get(this.baseUrl+'characters');
    console.log(this.characters);
    return this.characters;

  }

  public getSingleCharacterInformation(currentCharacterId):any {

    let currentCharacter = this._http.get(this.baseUrl + 'characters/' + currentCharacterId);
    console.log(currentCharacter);
    return currentCharacter;

  }   

}
