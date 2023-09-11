import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl =
    'https://stg.api.bazaarvoice.com/data/reviews.json?apiversion=5.4&passkey=caB45h2jBqXFw1OE043qoMBD1gJC8EwFNCjktzgwncXY4&Filter=ProductId:data-gen-moppq9ekthfzbc6qff3bqokie&Include=Products&FilteredStats=Reviews&Filter=HasPhotos:eq:true';
  private responseData: any;
  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(
        switchMap((response) => {
          this.responseData = response;
          return this.getResponseData();
        })
      );
  }

  getResponseData(): Observable<any> {
    return of(this.responseData);
  }
}
