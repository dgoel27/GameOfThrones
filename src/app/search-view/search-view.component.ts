import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// import { CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent } from "ng-auto-complete";
import { GotService } from '../got.service';
import { Observable } from "rxjs/Observable";
import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/add/operator/concat';

@Pipe({
  name: 'filter'
})

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit, OnDestroy, PipeTransform {

  public allItems: Observable<any>[] = [];
  public items: any; 
  public searchText: string;
  // public group;
  // public selected: any[] = [];

  // @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;

  constructor(public gotService: GotService) {
    console.log('search-view component constructor');
  }

  ngOnInit() {
    console.log('search-view component initialized');
    this.gotService.getBooks().subscribe(

      data => {
        console.log(data);
        console.log('All Books Data -->');
        this.allItems = this.allItems.concat(data);
        console.log(this.allItems);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );

    this.gotService.getHouses().subscribe(

      data => {
        console.log('All Houses data -->');
        this.allItems = this.allItems.concat(data);
        console.log(this.allItems);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );

    this.gotService.getCharacters().subscribe(

      data => {
        console.log('All Characters Data -->');
        this.allItems = this.allItems.concat(data);
        console.log(this.allItems);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );


  //   this.group = [
  //     CreateNewAutocompleteGroup(
  //       'Search...',
  //       'completer',
  //       [
  //         { name: 'A Game of Thrones' },
  //         { name: 'A Clash of Kings' },
  //         { name: 'A Storm of Swords' },
  //         { name: 'The Hedge Knight' },
  //         { name: 'A Feast for Crows' },
  //         { name: 'The Sworn Sword' },
  //         { name: 'The Mystery Knight' },
  //         { name: 'A Dance with Dragons' },
  //         { name: 'The Princess and the Queen' },
  //         { name: 'The Rogue Prince' },
  //         { name: 'House Algood' },
  //         { name: 'House Allyrion of Godsgrace' },
  //         { name: 'House Amber' },
  //         { name: 'House Ambrose' },
  //         { name: 'House Appleton of Appleton' },
  //         { name: 'House Arryn of Gulltown' },
  //         { name: 'House Arryn of the Eyrie' },
  //         { name: 'House Ashford of Ashford' },
  //         { name: 'House Ashwood' },
  //         { name: 'House Baelish of Harrenhal' },
  //         { name: 'Walder' },
  //         { name: 'The Daughter of the Dusk' },
  //         { name: 'Hodor' },
  //         { name: 'Lamprey' },
  //         { name: 'The Merling Queen' },
  //         { name: 'Old Crackbones' },
  //         { name: 'The Poetess' },
  //         { name: 'Porridge' },
  //         { name: 'Quickfinger' },
  //         { name: 'the Sailor\'s Wife' },
  //         { name: 'The Veiled Lady' }
  //       ],
  //       { titleKey: 'name', childrenKey: null },
  //     ),
  //   ];

  //   console.log(this.group);
  // }

  // Selected(item: SelectedAutocompleteItem) {
  //   console.log(item);
  // }

  // Selected(item: SelectedAutocompleteItem) {
  //   this.selected.push(item.item);

  //   /**
  //    * Remove selected values from list,
  //    * selected value must be of type: {id: string(based on GUID's), [value: string]: any}[]
  //    */
  //   this.completer.RemovableValues('completer', this.selected)
  }
  
  transform(items: any, searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
        return (it.name?it.name:it.aliases[0]).toLowerCase().includes(searchText);
    });
}

  ngOnDestroy() {
    console.log('search-view component destroyed');
  }
}
