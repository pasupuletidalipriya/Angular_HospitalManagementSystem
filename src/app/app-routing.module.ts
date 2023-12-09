import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { UpdatedoctorComponent } from './updatedoctor/updatedoctor.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { UpdateappointmentComponent } from './updateappointment/updateappointment.component';



const routes: Routes = [
  {path:'adddoctor',component:AdddoctorComponent},
  {path:'doctorlist',component:DoctorlistComponent},
  {path:'updatedoctor',component:UpdatedoctorComponent},
  {path:'addpatient',component:AddpatientComponent},
  {path:'patientlist',component:PatientlistComponent},
  {path:'updatepatient',component:UpdatepatientComponent},
  {path:'addappointment',component:AddappointmentComponent},
  {path:'appointmentlist',component:AppointmentlistComponent},
  {path:'updateappointment',component:UpdateappointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
