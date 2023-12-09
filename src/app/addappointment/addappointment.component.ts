import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent implements OnInit
{
  constructor(private appointmentService:AppointmentService){}

  appointment:Appointment=new Appointment();
  msg:any="";
  ngOnInit(): void {

  }
  addappointment(){this.appointmentService.saveAppointment(this.appointment).subscribe(data=>{this.msg=this.msg=data;});}
}
