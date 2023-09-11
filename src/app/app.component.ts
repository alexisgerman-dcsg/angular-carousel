import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from './review.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mensaje: string;
  responseData: any;

  constructor(private apiService: DataService) { 
  }
  
  ngOnInit(): void {
    this.apiService.fetchData().subscribe((data) => {
      this.responseData = data;
    });
  }
  
  arrImages = [
    'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/f918b4d7-4a7a-530a-8110-a79b23718ee0',
    'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/be9256eb-24d7-5b03-b0ec-5c0b9232b3b5',
    'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/f918b4d7-4a7a-530a-8110-a79b23718ee0',
    'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/f918b4d7-4a7a-530a-8110-a79b23718ee0',
    'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/f918b4d7-4a7a-530a-8110-a79b23718ee0',
  ];

  CallbackHandler(data: string) {
    this.mensaje = `Callback invocado con datos: ${data}`;
    console.log(this.mensaje);
  }
}
