import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Student } from '../../shared/student.model';
import { StudentService } from '../../service/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[];
  student:Student;
  @Output() selectedStudent = new EventEmitter<Student>();

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.GetAll().subscribe(studentList=>this.students = studentList);
  }

  getStudent(Id:number){
    
     this.studentService.GetStudent(Id).subscribe((s: Student)=> this.student=s);
     //this.selectedStudent.emit(this.student);
     
  }
  test(student:Student){
    //alert(isEdit);
    this.selectedStudent.emit(student);
  }
  deleteStudent(student:Student){
    //alert(student.Name)
    this.studentService.DeleteStudent(student).subscribe(data=>alert("deleted"+data));
  }
}
