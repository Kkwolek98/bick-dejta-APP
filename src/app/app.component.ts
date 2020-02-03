import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
  ) { }

  changePage(route): void {
    console.log(route)
    // this.router.navigate([route])
  }

  setActivePage(page): void {

  }
}
