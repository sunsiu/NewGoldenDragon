import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div id="whole-page">
    <div id="outer-menu">
      <div class="table">
        <ul id="nav-list">
            <li><button mat-button><a [routerLink]="['/home']">Home</a></button></li>
            <li><button mat-button>Menu</button></li>
            <li><button mat-button>Location</button></li>
            <li><button mat-button><a [routerLink]="['/contact']">Contact</a></button></li>
        </ul>
      </div>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styleUrls: ['./pages/home-page.component.css']
})
export class AppComponent {
  title = 'New Golden Dragon';
}
