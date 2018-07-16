import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GotService } from './got.service';
import {HttpClient} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import {NgAutoCompleteModule} from "ng-auto-complete";
import { FilterPipe} from './filter.pipe';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { HousesComponent } from './houses/houses.component';
import { CharactersComponent } from './characters/characters.component';
import { UniverseComponent } from './universe/universe.component';
import { BookViewComponent } from './book-view/book-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { SearchViewComponent } from './search-view/search-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    HousesComponent,
    CharactersComponent,
    UniverseComponent,
    BookViewComponent,
    HouseViewComponent,
    CharacterViewComponent,
    ComingSoonComponent,
    FilterPipe,
    SearchViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    FilterPipeModule,
    OrderModule,
    NgAutoCompleteModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'', redirectTo:'home',pathMatch:'full'},
      {path:'search', component: SearchViewComponent},
      {path:'books', component: BooksComponent},
      {path:'houses', component: HousesComponent},
      {path:'characters', component: CharactersComponent},
      {path:'comingSoon', component: ComingSoonComponent},
      {path:'books/:bookId', component: BookViewComponent},
      {path:'houses/:houseId', component: HouseViewComponent},
      {path:'characters/:characterId', component: CharacterViewComponent},
      {path:'universe', component: UniverseComponent}
    ])
  ],
  providers: [GotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
