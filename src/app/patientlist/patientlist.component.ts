import { Component,OnInit} from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit
{

  patients:Patient[]=[];
  patient:Patient=new Patient();
  constructor(private patientService:PatientService){}

  
   ngOnInit(): void 
   {
      this.getAllPatients();
   }
  getAllPatients()
  {
   this.patientService.getpatients().subscribe(data=>{this.patients=data;});
  }


}
