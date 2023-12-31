import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';

import { MultipleImage } from './component/multiple-image/multiple-image.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './review.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, MultipleImage],
  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
