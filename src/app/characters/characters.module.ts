import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersPageComponent } from './componenets/characters-page/characters-page.component';
import { CharacterListComponent } from './componenets/character-list/character-list.component';
import { CharacterComponent } from './componenets/character/character.component';
import { CharacterMockService } from './services/character-mock.service';
import { NgReduxModule } from '@angular-redux/store';
import { CharactersActions } from '../store/actions/characters.actions';
import { StoreModule } from '../store/store.module';
import { CharacterDetailsComponent } from './componenets/character-details/character-details.component';
import { SingleCharacterActions } from '../store/actions/single-character.actions';
import { CharacterEditComponent } from './components/character-edit/character-edit.component';

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
    CharacterDetailsComponent,
    CharacterEditComponent],
  providers: [
    CharacterMockService,
    CharactersActions,
    SingleCharacterActions
  ]
})
export class CharactersModule {
}
