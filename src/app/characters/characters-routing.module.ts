import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterDetailsEditComponent } from './components/character-details/character-details-edit/character-details-edit.component';
import { CharacterDetailsContentComponent } from './components/character-details/character-details-content/character-details-content.component';
import { CharacterCreateComponent } from './components/character-create/character-create.component';

const routes: Routes = [
  { path: '', component: CharactersPageComponent },
  { path: 'create', component: CharacterCreateComponent },
  {
    path: ':character_id',
    component: CharacterDetailsComponent,
    children: [
      { path: '', component: CharacterDetailsContentComponent },
      { path: 'edit', component: CharacterDetailsEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule {
}
