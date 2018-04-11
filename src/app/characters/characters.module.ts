import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersPageComponent } from './componenets/characters-page/characters-page.component';
import { CharacterListComponent } from './componenets/character-list/character-list.component';
import { CharacterComponent } from './componenets/character/character.component';
import { CharacterService } from './services/character.service';
import { NgReduxModule } from '@angular-redux/store';
import { CharacterActions } from '../store/actions/characters.actions';
import { StoreModule } from '../store/store.module';
import { CharacterDetailsComponent } from './componenets/character-details/character-details.component';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule,
    NgReduxModule,
    StoreModule
  ],
  declarations: [
    CharactersPageComponent,
    CharacterListComponent,
    CharacterComponent,
    CharacterDetailsComponent],
  providers: [
    CharacterService,
    CharacterActions
  ]
})
export class CharactersModule {
}
