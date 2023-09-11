import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('https://stg.api.bazaarvoice.com/data/reviews.json?apiversion=5.4&passkey=caB45h2jBqXFw1OE043qoMBD1gJC8EwFNCjktzgwncXY4&Filter=ProductId:data-gen-moppq9ekthfzbc6qff3bqokie&Include=Products&FilteredStats=Reviews&Filter=HasPhotos:eq:true'); 
  }
}