import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Result } from './mock/rewiew.interface';
import { DataService } from './review.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  apiData: any;


  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    const apiUrl = 'https://stg.api.bazaarvoice.com/data/reviews.json?apiversion=5.4&passkey=caB45h2jBqXFw1OE043qoMBD1gJC8EwFNCjktzgwncXY4&Filter=ProductId:data-gen-moppq9ekthfzbc6qff3bqokie&Include=Products&FilteredStats=Reviews&Filter=HasPhotos:eq:true';
    this.dataService.getData(apiUrl).subscribe((data) => {
      console.log(data)
      this.dataService.setData(data);
      this.apiData = data; 
    });
  }
  
  arrImages = ['https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/f918b4d7-4a7a-530a-8110-a79b23718ee0', 'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/be9256eb-24d7-5b03-b0ec-5c0b9232b3b5', 'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/f918b4d7-4a7a-530a-8110-a79b23718ee0', 'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/f918b4d7-4a7a-530a-8110-a79b23718ee0', 'https://photos-uat-us.bazaarvoice.com/photo/2/cGhvdG86Y29uY2llcmdlYXBpZG9jdW1lbnRhdGlvbg/f918b4d7-4a7a-530a-8110-a79b23718ee0']


  CallbackHandler(data: string) {
    this.mensaje = `Callback invocado con datos: ${data}`;
    console.log(this.mensaje);
  }
}
