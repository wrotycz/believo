import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from './store/store.module';

const routes: Routes = [
  { path: 'scenarios', loadChildren: 'app/scenarios/scenarios.module#ScenariosModule' },
  { path: '', redirectTo: 'scenarios', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
