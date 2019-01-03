import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importing Router Module
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewOneComponent } from './view-one/view-one.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
//importing Services
import { ViewService } from './view.service';
import { ViewRequestService } from './view-request.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ViewAllComponent,
    ViewOneComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Router to declare all the possible routes.
    RouterModule.forRoot([
      { path: 'home', component: ViewAllComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'view/:name', component: ViewOneComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [ViewService, ViewRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
