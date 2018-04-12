import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterMockService } from './services/character-mock.service';
import { NgReduxModule } from '@angular-redux/store';
import { CharactersActions } from '../store/actions/characters.actions';
import { StoreModule } from '../store/store.module';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { SingleCharacterActions } from '../store/actions/single-character.actions';
import { CharacterDetailsContentComponent } from './components/character-details/character-details-content/character-details-content.component';
import { CharacterDetailsEditComponent } from './components/character-details/character-details-edit/character-details-edit.component';

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
    CharacterDetailsContentComponent,
    CharacterDetailsEditComponent],
  providers: [
    CharacterMockService,
    CharactersActions,
    SingleCharacterActions
  ]
})
export class CharactersModule {
}
