import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  constructor(private restService: RestService, private formBuilder: FormBuilder) { }

  resetPassForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.resetPassForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  resetPass() {
    console.log(this.resetPassForm.value);
    this.isSubmitted = true;
    if(this.resetPassForm.invalid){
      return;
    }
    this.restService.getSite(this.resetPassForm.value).subscribe(data => data);

  }

}
