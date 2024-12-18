import { Component, EventEmitter, Input, Output } from '@angular/core';
import { student } from '../../models/students';

@Component({
  selector: 'app-show-student-details',
  standalone: true,
  imports: [],
  templateUrl: './show-student-details.component.html',
  styleUrl: './show-student-details.component.css'
})
export class ShowStudentDetailsComponent {
@Input()myStudent:student = new student(0,"","","",false,0)
@Output()studentToSave:EventEmitter<student>=new EventEmitter<student>()
saveStudent(name:string,adress:string,phone:string){
  if(name!="")this.myStudent.Name=name
  if(adress!="")this.myStudent.Adress=adress
  if(phone!="")this.myStudent.Phone=phone
this.studentToSave.emit(this.myStudent)
}
}

