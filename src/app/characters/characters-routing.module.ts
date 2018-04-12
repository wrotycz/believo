import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './componenets/characters-page/characters-page.component';
import { CharacterDetailsComponent } from './componenets/character-details/character-details.component';
import { CharacterEditComponent } from './components/character-edit/character-edit.component';

const routes: Routes = [
  { path: '', component: CharactersPageComponent },
  {
    path: ':character_id',
    component: CharacterDetailsComponent,
    children: [
      { path: 'edit', component: CharacterEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule {
}
