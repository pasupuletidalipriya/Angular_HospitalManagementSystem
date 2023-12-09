import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit
{
  constructor(private patientService:PatientService){}

  patient:Patient=new Patient();
  msg:any="";
  ngOnInit(): void {

  }
  addpatient(){this.patientService.savePatient(this.patient).subscribe(data=>{this.msg=this.msg=data;});}
}
