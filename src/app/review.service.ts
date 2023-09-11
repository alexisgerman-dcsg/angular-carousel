import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private responseData: any;

  // Método para realizar una solicitud GET a la API
  getData(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl);
  }

  // Método para establecer la respuesta de la API en el servicio
  setData(data: any): void {
    this.responseData = data;
  }

  // Método para obtener la respuesta de la API desde el servicio
  getDataResponse(): any {
    return this.responseData;
  }
  
}