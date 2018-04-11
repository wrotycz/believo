import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './componenets/characters-page/characters-page.component';
import { CharacterDetailsComponent } from './componenets/character-details/character-details.component';

const routes: Routes = [
  { path: '', component: CharactersPageComponent },
  { path: ':character_id', component: CharacterDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule {
}
