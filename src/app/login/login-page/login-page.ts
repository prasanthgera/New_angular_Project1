import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
username: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {
    
  }
togglePassword() {
    this.showPassword = !this.showPassword;
  }
 login() {
  if(this.username === ''||this.password===''){
     this.username === ''? alert('please  enter username!'):alert('please enter passwd!');
     return
  }
  debugger
  if (this.username === 'admin' && this.password === 'admin') {
  console.log('this.username :', this.username);
    this.router.navigate(['/dashboard']);
  } else {
    alert('Invalid credentials!');
  }
}

}
