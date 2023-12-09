import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { UpdatedoctorComponent } from './updatedoctor/updatedoctor.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { UpdateappointmentComponent } from './updateappointment/updateappointment.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdddoctorComponent,
    DoctorlistComponent,
    UpdatedoctorComponent,
    AddpatientComponent,
    PatientlistComponent,
    UpdatepatientComponent,
    AddappointmentComponent,
    AppointmentlistComponent,
    UpdateappointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
