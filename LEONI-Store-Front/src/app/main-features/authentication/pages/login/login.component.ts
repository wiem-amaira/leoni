import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {APP_ROUTING} from "../../../../core/config/route/APP_ROUTING";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToDashboard() {
    this.router.navigate([APP_ROUTING.PRIVATE.DASHBOARD])
  }

}
