import { Injectable } from '@angular/core';
/* Add */
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ObtenerInfoService {

  private privateKey: string = "24d2501b026a44d6da18d393e6d43664";
  public idCity: string= "3939459";
  
  /*How to get a data from a Form */

  checkConection():string {
    return 'msj from service to component'
  }

  private getCityId : string = '';
  
  successMsg$ = this.getCityId;
  
  sendSuccessMsg(message: string) {
    this.getCityId = message;
    console.log('recibido');
    console.log(this.getCityId);
  }

  constructor(
    private http: HttpClient ) 
    {  }

  public getInfo(): Observable<any>{
    
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?id=${this.getCityId}&lang=es&appid=${this.privateKey}&units=metric`);

  }
}
