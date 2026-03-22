import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../payment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments.html',
  styleUrls: ['./payments.css']
})
export class Payments implements OnInit {

  payments: any[] = [];
username: string = '';
  constructor(private paymentService: PaymentService, private router: Router) {
    
  }

 ngOnInit(): void {
   this.username = localStorage.getItem('username') || 'User'; 
  this.payments = [
    {
      transactionId: 'TXN001',
      customerName: 'Priyanka',
      email: 'priya@gmail.com',
      amount: 1200,
      paymentStatus: 'Success'
    },
    {
      transactionId: 'TXN002',
      customerName: 'Rahul',
      email: 'rahul@gmail.com',
      amount: 800,
      paymentStatus: 'Pending'
    },
    {
      transactionId: 'TXN003',
      customerName: 'Anu',
      email: 'anu@gmail.com',
      amount: 1500,
      paymentStatus: 'Success'
    }
  ];

  // this.paymentService.getPayments().subscribe({
  //   next: (data: any) => {
  //     console.log("API DATA:", data);
  //     this.payments = data || [];   // 👈 IMPORTANT FIX
  //   },
  //   error: (err) => {
  //     console.error('API Error:', err);
  //   }
  // });
console.log('Payments loaded:', this.payments);
}
  getSuccessCount() {
  return this.payments.filter(p => p.paymentStatus === 'Success').length;
}

getPendingCount() {
  return this.payments.filter(p => p.paymentStatus === 'Pending').length;
}
logout() {
  localStorage.removeItem('loggedIn');
  this.router.navigate(['/login']);
}
trackByFn(index: number, item: any) {
  return item.transactionId;
}
}