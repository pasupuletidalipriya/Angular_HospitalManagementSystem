import { Component,OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService} from '../doctor.service';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit{

  doctors:Doctor[]=[];
  doctor:Doctor=new Doctor();
  constructor(private doctorService:DoctorService){}

  
   ngOnInit(): void 
   {
      this.getAllDoctors();
   }
 getAllDoctors()
 {
   this.doctorService.getdoctors().subscribe(data=>{this.doctors=data;});
 }
}


