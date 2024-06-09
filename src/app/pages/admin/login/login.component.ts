import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], //[FormsModule]
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent2 {

  loginObj: any = {
    userName: '',
    password: ''
  };
  constructor(private router: Router){}

  onLogin() {
    if(this.loginObj.userName == "admin" && this.loginObj.password == "123456"){

      alert("Bienvenido Administrador")

      this.router.navigateByUrl('admin/products')

    } else if (this.loginObj.userName == null && this.loginObj.password == null) {

      alert("Ingrese sus datos!")

    } else {
      alert("Credenciales Incorrectas")
    }
  }

}
