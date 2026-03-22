import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
email: string='';


constructor(private router: Router) {}

// onLogin() {
//   localStorage.setItem('loggedIn', 'true');
//   this.router.navigate(['/payments']);
// }
onLogin() {
  // after successful login
  localStorage.setItem('loggedIn', 'true');
  localStorage.setItem('username', this.email); // 👈 ADD THIS

  this.router.navigate(['/payments']);
}
}
