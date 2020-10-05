import { Component, OnInit } from '@angular/core';

//Service
import { AuthService } from "../../services/auth.service";

import { RegistroComponent } from '../../registro.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
