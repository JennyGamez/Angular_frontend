import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-token-pass',
  templateUrl: './reset-token-pass.component.html',
  styleUrls: ['./reset-token-pass.component.css']
})
export class ResetTokenPassComponent implements OnInit {

  mensaje: string;

  constructor(private restService: RestService, private formBuilder: FormBuilder) { }

  resetTokenPassForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.resetTokenPassForm = this.formBuilder.group({
      password: ['', Validators.required],
      passwordConfirma: ['', Validators.required]
    });
  }

  get formControls() { return this.resetTokenPassForm.controls; }

  resetTokenPass() {
    const datos = this.resetTokenPassForm.value;
    console.log(this.resetTokenPassForm.value);
    this.isSubmitted = true;
    if (this.resetTokenPassForm.invalid) {
      return;
    }

    this.restService.requestPassword(this.resetTokenPassForm.value).subscribe(jsonsend => {
      this.mensaje = jsonsend['message'];
      console.log(jsonsend);
    })

  }

}
