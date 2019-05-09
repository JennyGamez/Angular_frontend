import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  res: any = [];

  constructor(public restApi: RestService) { }

  ngOnInit() {
    this.restApi.getDefault().subscribe((data: {}) => {
      this.res = data
      console.log(this.res);
    })
  }

}
