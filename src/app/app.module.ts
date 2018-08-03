import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { PolymerModule } from '@codebakery/origami';
import { FormsModule } from '@angular/forms';

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
