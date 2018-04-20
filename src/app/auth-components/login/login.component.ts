import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { AuthActions } from '../../store/actions/auth.actions';

export interface LoginModel {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginModel = { username: '', password: '' };
  errorMessage: string;

  constructor(
    private loginService: LoginService,
    private authActions: AuthActions) {
  }

  ngOnInit() {
  }

  login() {
    this.authActions.removeToken();
    this.loginService.login(this.model.username, this.model.password);
  }

}
