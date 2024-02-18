import { Component } from '@angular/core';
import { AuthService } from '../welcome/auth/auth.service';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.css'
})
export class ExplorePageComponent {

  constructor(private authService: AuthService){}

  getUserData() {
    console.log(this.authService.user)
  }
}
