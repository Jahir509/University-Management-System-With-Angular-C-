import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/shared/student.model';
import { DepartmentService } from 'src/app/service/department.service';
import { StudentService } from 'src/app/service/student.service';
import { Department } from 'src/app/shared/department.model';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  @Output() closeEditForm = new EventEmitter<boolean>();
  @Input() student:Student;
  departments:Department[];
  deptCode:number;
  model:Student;
  constructor(private departmentService:DepartmentService,private studentService:StudentService) { }

  ngOnInit() {
    this.departmentService.GetAll().subscribe(departmentList=>this.departments = departmentList);
  }

  CancelSubmit(){
    this.closeEditForm.emit(false);
  }

  UpdateStudent(){
    var student = new Student();
    student = this.student;
    this.studentService.Update(student).subscribe(data=>alert(data));
  }
  selectDept(deptCode:any){
    this.student.DepartmentId = deptCode.target.value;
    //alert(this.student.DepartmentId);
  }
}
