import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-updateappointment',
  templateUrl: './updateappointment.component.html',
  styleUrls: ['./updateappointment.component.css']
})
export class UpdateappointmentComponent  implements OnInit
{
  constructor(private appointmentService:AppointmentService){}

  appointment:Appointment=new Appointment();
  msg:any="";
  ngOnInit(): void {

  }
  updateappointment(){this.appointmentService.updateAppointment(this.appointment).subscribe(data=>{this.msg=this.msg=data;});}
}
