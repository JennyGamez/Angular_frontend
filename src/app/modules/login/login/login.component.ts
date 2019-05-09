import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    //window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition login-page';
  }

  ngOnDestroy() {
    document.body.className = '';
  }

}
