import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';



@Injectable({
  providedIn: 'root'
})
export class DoctorService
 {
   private restUrl='htttp://localhost:8080/doctors'                                 
   constructor(private httpClient:HttpClient) { }


   getdoctors():Observable<Doctor[]>
   {
    return this.httpClient.get<Doctor[]>(`${this.restUrl}/getall`,{responseType:'json'});
   }
   saveDoctor(doctor:Doctor):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/insert`,doctor,{responseType:"text"});
  }
  updateDoctor(doctor:Doctor):Observable<Object>
  {
    return this.httpClient.put(`${this.restUrl}/update`,doctor,{responseType:"text"});
  }
}
