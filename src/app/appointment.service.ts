import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService
 {
  private restUrl='htttp://localhost:8080/appointment'                                 
  constructor(private httpClient:HttpClient) { }


  getappointments():Observable<Appointment[]>
  {
   return this.httpClient.get<Appointment[]>(`${this.restUrl}/getall`,{responseType:'json'});
  }
  saveAppointment(appointment:Appointment):Observable<Object>
 {
   return this.httpClient.post(`${this.restUrl}/insert`,appointment,{responseType:"text"});
 }
 updateAppointment(appointment:Appointment):Observable<Object>
 {
   return this.httpClient.put(`${this.restUrl}/update`,appointment,{responseType:"text"});
  }
}
