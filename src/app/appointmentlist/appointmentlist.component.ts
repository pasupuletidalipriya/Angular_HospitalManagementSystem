import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.css']
})
export class AppointmentlistComponent implements OnInit
{

  appointments:Appointment[]=[];
  appointment:Appointment=new Appointment();
  constructor(private appointmentService:AppointmentService){}

  
   ngOnInit(): void 
   {
      this.getAllAppointments();
   }
   getAllAppointments()
   {
     this.appointmentService.getappointments().subscribe(data=>{this.appointments=data;});
   }
}
