import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './componenets/characters-page/characters-page.component';
import { CharacterComponent } from './componenets/character/character.component';

const routes: Routes = [
  { path: '', component: CharactersPageComponent },
  { path: ':character_id', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule {
}
