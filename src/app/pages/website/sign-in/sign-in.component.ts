import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  registerForm: FormGroup; // Define registerForm como FormGroup

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<SignInComponent>) {
    // Inicializa registerForm en el constructor utilizando FormBuilder
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastNameP: ['', Validators.required],
      lastNameM: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator }); // Agrega la validación personalizada
  }

  ngOnInit() {
    // Puedes realizar alguna lógica adicional en el ngOnInit si es necesario
  }

  // Función de validación personalizada para asegurar que las contraseñas coincidan
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'mismatch': true };
    }
    return null;
  }

  // Función llamada cuando se envía el formulario de registro
  onRegister() {
    if (this.registerForm.valid) {
      // Aquí puedes realizar la lógica para registrar al usuario
      console.log(this.registerForm.value); // Muestra los valores del formulario en la consola
      this.dialogRef.close(); // Cierra el diálogo después de registrar al usuario
    }
  }
}
