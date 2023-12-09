 import { Component, OnInit } from '@angular/core';
 import { Doctor } from '../doctor';
 import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrls: ['./updatedoctor.component.css']
})
export class UpdatedoctorComponent implements OnInit
{
   constructor(private doctorService:DoctorService){}

   doctor:Doctor=new Doctor();
   msg:any="";
   ngOnInit(): void {

   }
   updatedoctor(){this.doctorService.updateDoctor(this.doctor).subscribe(data=>{this.msg=this.msg=data;});} 

}
