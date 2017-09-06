import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';

import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
