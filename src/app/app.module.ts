import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page.component';
import { ContactPageComponent } from './pages/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent
  ],

  imports: [
    BrowserModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent },
      { path: 'contact', component: ContactPageComponent},
      { path: 'menu', redirectTo: "assets/images/Menu.pdf", pathMatch: "full"},
      { path: '', redirectTo: 'home', pathMatch: 'full'}
      //add notfound page
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
