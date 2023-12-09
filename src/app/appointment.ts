export class Appointment 
{
    appointmentId:Number=0;
    doctorId:Number=0;
    patientId:Number=0;
    appointmentDate:Date=new Date;
    appointmentTime:Time=new Time(0,0);
    appointmentStatus:String="";
    doctor:{doctorId:number}={doctorId:0};
    patient:{patientId:number}={patientId:0};
    constructor(){}
    
}
export class Time
{
    hours:number;
    minutes:number;
    constructor(hours:number,
        minutes:number)
        {
            this.hours=hours;
            this.minutes=minutes;
        }
}