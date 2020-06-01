import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Student } from '../shared/student.model';
import { StudentService } from '../service/student.service';
import { Department } from '../shared/department.model';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  isEditable:boolean = false;
  testData:Student;
  students:Student[];
  student:Student;
  @Output() selectedStudent = new EventEmitter<Student>();
  

  constructor(private studentService: StudentService,private departmentService:DepartmentService) { }

  ngOnInit() {
    this.studentService.GetAll().subscribe(studentList=>this.students = studentList);
  }
  

  getStudent(Id:number){
    
     this.studentService.GetStudent(Id).subscribe((s: Student)=> this.student=s);
     this.selectedStudent.emit(this.student); 
  }
  studentWasSelected(student:Student){
    this.isEditable = true;
    this.testData = student;
  }

  closeEditForm(closeForm:boolean){
    this.isEditable = closeForm;
  }
}
