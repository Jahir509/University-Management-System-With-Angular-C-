import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/shared/student.model';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnInit {
  @Output() editFormDisplay = new EventEmitter<Student>();
  @Output() selectStudent = new EventEmitter<Student>();
  @Input() student : Student;
  constructor() { }

  ngOnInit() {
  }

  getStudent(student:Student){
    this.editFormDisplay.emit(student);
  }
  
  deleteStudent(student:Student){
    this.selectStudent.emit(student);
  }
}
