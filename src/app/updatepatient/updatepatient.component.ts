import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent implements OnInit
{
  constructor(private patientService:PatientService){}

  patient:Patient=new Patient();
  msg:any="";
  ngOnInit(): void {

  }
  updatepatient(){this.patientService.updatePatient(this.patient).subscribe(data=>{this.msg=this.msg=data;});}
}{

}

