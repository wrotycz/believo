import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { CharactersActions } from '../store/actions/characters.actions';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { SingleCharacterActions } from '../store/actions/single-character.actions';
import { CharacterDetailsContentComponent } from './components/character-details/character-details-content/character-details-content.component';
import { CharacterDetailsEditComponent } from './components/character-details/character-details-edit/character-details-edit.component';
import { FormsModule } from '@angular/forms';
import { SingleCharacterFormActions } from '../store/actions/single-character-form.actions';
import { CharacterCreateComponent } from './components/character-create/character-create.component';
import { NgReduxFormModule } from '@angular-redux/form';
import { CharacterService } from './services/character.service';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule,
    FormsModule,
    NgReduxFormModule
  ],
  declarations: [
    CharactersPageComponent,
    CharacterListComponent,
    CharacterComponent,
    CharacterDetailsComponent,
    CharacterDetailsContentComponent,
    CharacterDetailsEditComponent,
    CharacterCreateComponent],
  providers: [
    CharacterService,
    CharactersActions,
    SingleCharacterActions,
    SingleCharacterFormActions
  ]
})
export class CharactersModule {
}
