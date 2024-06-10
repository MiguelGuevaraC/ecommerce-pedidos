import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  registerObj: any = {
    userName: '',
    fatherLastName: '',
    motherLastName: '',
    phoneNumber: '',
    typeUser: '',
    password: ''
  };
  
  constructor(private router: Router){}

  onRegister() {
    // lógica de registro
    console.log(this.registerObj);
    alert('Registro exitoso');
    this.router.navigateByUrl('/login');
  }
}
