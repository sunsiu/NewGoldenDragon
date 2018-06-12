import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

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
      { path: '', redirectTo: 'home', pathMatch: 'full'}
      //add notfound page
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
