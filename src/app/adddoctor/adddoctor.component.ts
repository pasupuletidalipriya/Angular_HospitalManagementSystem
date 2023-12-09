import { Component,OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit
{
   constructor(private doctorService:DoctorService){}

   doctor:Doctor=new Doctor();
   msg:any="";
   ngOnInit(): void {

   }
   adddoctor(){this.doctorService.saveDoctor(this.doctor).subscribe(data=>{this.msg=this.msg=data;});}
}
