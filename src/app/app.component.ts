import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './welcome/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fastcancy';

  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
      this.userSub = this.authService.user.subscribe(user => {
        this.isAuthenticated = !!user;
      });
  }

  ngOnDestroy() {
      this.userSub.unsubscribe();
  }

}
