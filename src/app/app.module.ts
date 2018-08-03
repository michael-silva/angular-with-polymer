import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { PolymerModule } from '@codebakery/origami';
import { FormsModule } from '@angular/forms';

import 'app-layout/app-layout.html';
import 'iron-icons/iron-icons.html';

import 'paper-icon-button/paper-icon-button.html';
import 'paper-item/paper-item.html';
import 'paper-item/paper-item-body.html';
import 'paper-fab/paper-fab.html';
import 'paper-dialog/paper-dialog.html';
import 'paper-button/paper-button.html';
import 'paper-input/paper-input.html';
import 'paper-checkbox/paper-checkbox.html';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Origami requires the Angular Forms module
    PolymerModule.forRoot() // Do not call .forRoot() when importing in child modules
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add to every @NgModule() that uses custom elements
  bootstrap: [AppComponent]
})
export class AppModule { }
