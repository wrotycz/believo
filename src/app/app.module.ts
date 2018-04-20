import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from './store/store.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiRequestService } from './services/api-request.service';
import { UserInfoService } from './services/user-info.service';
import { AuthGuard } from './services/auth-guard.service';
import { LoginService } from './services/login.service';
import { AuthActions } from './store/actions/auth.actions';
import { LoginComponent } from './auth-components/login/login.component';
import { LogoutComponent } from './auth-components/logout/logout.component';
import { FormsModule } from '@angular/forms';
import { ForbiddenComponent } from './auth-components/forbidden/forbidden.component';
import { ErrorComponent } from './auth-components/error/error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'error', component: ForbiddenComponent },
  { path: 'scenarios', loadChildren: 'app/scenarios/scenarios.module#ScenariosModule', canActivate: [AuthGuard] },
  { path: '', redirectTo: 'scenarios', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ForbiddenComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiRequestService,
    UserInfoService,
    LoginService,
    AuthActions,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
