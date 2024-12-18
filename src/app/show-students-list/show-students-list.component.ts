import { Component, ViewChild } from '@angular/core';
import { student } from '../../models/students';
import { CommonModule } from '@angular/common';
import { ShowStudentDetailsComponent } from '../show-student-details/show-student-details.component';
import { InformationPopupComponent } from '../information-popup/information-popup.component';
import { FormsModule } from '@angular/forms';
import { ChangeColorDirective } from '../change-color.directive';

@Component({
  selector: 'app-show-students-list',
  standalone: true,
  imports: [CommonModule, ShowStudentDetailsComponent, InformationPopupComponent,ChangeColorDirective],
  templateUrl: './show-students-list.component.html',
  styleUrl: './show-students-list.component.css'
})
export class ShowStudentsListComponent{

@ViewChild(InformationPopupComponent)popup!:InformationPopupComponent
showPopup()
{
 this.popup.show("האם אתה בטוח שברצונך למחוק?")
}
idForChecking:number = -1
studentList:student[]=[new student(1,"s1","00","yona hanavi",true,100),new student(2,"s2","00","r akiva",false,100),new student(3,"s3","00","rashi",true,100),new student(4,"s4","hirsh","aa",true,100)]
size:number=this.studentList.length

emptyStudent()
{
  let id=this.studentList.length+1
  return new student(id,"","","",true,0)
}
deleteStudent(id:number){
this.studentList=this.studentList.filter(s=>s.Id!=id)
}
editStudent(student:student)
{
  this.idForChecking=student.Id
}
saveStudent(studentToSave:student)
{
  this.studentList.push(studentToSave)
  this.idForChecking=-1
}
updateStudent(studentToSave:student)
{
this.idForChecking=-1
}
selectedColor:string=''
changeColor(color:string)
{
this.selectedColor=color
}
}
