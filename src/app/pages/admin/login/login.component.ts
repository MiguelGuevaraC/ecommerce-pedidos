import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    userName: '',
    password: ''
  };
  constructor(private router: Router){}

  onLogin() {
    if(this.loginObj.userName == "admin" && this.loginObj.password == "123456"){

      alert("Bienvenido Administrador")

      this.router.navigateByUrl('/products')

    } else if (this.loginObj.userName == "" && this.loginObj.password == "") {

      alert("Ingrese sus datos!")

    } else {
      alert("Credenciales Incorrectas")
    }
  }

}
