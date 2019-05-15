import { Component, OnInit, Input } from '@angular/core';
import { LoadingScreenService } from "../../services/loading-screen/loading-screen.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {
  
  @Input() textloading: string;
  @Input() statusloading: boolean = false;

  constructor(/*private loadingScreenService: LoadingScreenService*/) { }

  ngOnInit() {
    /*this.loadingSubscription = this.loadingScreenService.loadingStatus.subscribe((value) => {
      this.loading = value;
    });*/
  }

}
