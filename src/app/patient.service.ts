import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService
 {
  private restUrl='htttp://localhost:8080/patients'                                 
  constructor(private httpClient:HttpClient) { }


  getpatients():Observable<Patient[]>
  {
   return this.httpClient.get<Patient[]>(`${this.restUrl}/getall`,{responseType:'json'});
  }
  savePatient(patient:Patient):Observable<Object>
 {
   return this.httpClient.post(`${this.restUrl}/insert`,patient,{responseType:"text"});
 }
 updatePatient(patient:Patient):Observable<Object>
 {
   return this.httpClient.put(`${this.restUrl}/update`,patient,{responseType:"text"});
  }
}
