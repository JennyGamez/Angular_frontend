import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
//import { LoadingScreenService } from 'src/app/services/loading-screen/loading-screen.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-reset-token-pass',
  templateUrl: './reset-token-pass.component.html',
  styleUrls: ['./reset-token-pass.component.css']
})
export class ResetTokenPassComponent implements OnInit {

  mensaje: any;
  paramToken: string;
  textloading= 'Hola 2';
  statusloading = true;
  
  constructor(
    private restService: RestService, 
    private formBuilder: FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute,
    //public loaderService: LoadingScreenService
  ) {

    this.route.params.subscribe(params => {      
      this.paramToken = params['params'];
      this.onSearch(this.paramToken);
    })
  }

  resetTokenPassForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.resetTokenPassForm = this.formBuilder.group({
      password: ['', Validators.required],
      passwordConfirma: ['', Validators.required],
      token: [this.paramToken, Validators.required]
    });
  }

  get formControls() { return this.resetTokenPassForm.controls; }

  resetTokenPass() {
    console.log(this.resetTokenPassForm.value);
    this.isSubmitted = true;
    if (this.resetTokenPassForm.invalid) {
      return;
    }
    
    //this.statusloading = true;
    this.restService.requestTokenPasswordPost(this.resetTokenPassForm.value).subscribe(data => {
      this.mensaje = data;
      console.log('@@@ '+JSON.stringify(this.resetTokenPassForm.value)+' --- '+this.mensaje.status+' *** '+JSON.stringify(this.mensaje));
      //this.statusloading = false;
    })
    
  }

  onSearch(term) {
    this.restService.requestValidateToken(term).subscribe(data => {
      this.mensaje = data;

      if (this.mensaje.status) {
        localStorage.setItem('accessToken', this.mensaje.data);
        console.log("Token existe");
        console.log(this.mensaje.data);
        return true;
      } else {
        console.log("Token no existe, redirect login");
        this.router.navigate(['/login']);
        return false;
      }
    })
  }
}
