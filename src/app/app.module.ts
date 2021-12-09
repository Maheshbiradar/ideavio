import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { IdeasComponent } from './ideas/ideas/ideas.component';
import { MyIdeasComponent } from './ideas/my-ideas/my-ideas.component';
import { AddNewIdeaComponent } from './ideas/add-new-idea/add-new-idea.component';
import { DonateComponent } from './ideas/donate/donate/donate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    IdeasComponent,
    MyIdeasComponent,
    AddNewIdeaComponent,
    DonateComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
