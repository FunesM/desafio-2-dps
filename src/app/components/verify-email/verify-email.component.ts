import { Component, OnInit } from '@angular/core';

//Service
import { AuthService } from "../../services/auth.service";

import { RegistroComponent } from '../../registro.component';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
