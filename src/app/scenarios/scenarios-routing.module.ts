import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScenariosPageComponent } from './components/scenarios-page/scenarios-page.component';

const routes: Routes = [
  { path: '', component: ScenariosPageComponent },
  { path: ':scenario_id/characters', loadChildren: 'app/characters/characters.module#CharactersModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScenariosRoutingModule {
}
