import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';

import { ImageCarousel } from './image-carousel/image-carousel.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonModule, MatIconModule ],
  declarations: [ AppComponent, ImageCarousel ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
