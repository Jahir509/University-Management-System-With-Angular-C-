import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/shared/student.model';
import { Department } from 'src/app/shared/department.model';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  departments:Department[];
  Id:number;
  RegNo:string;
  Name:string;
  Email:string;
  Phone:string;
  Date:string;
  Address:string;
  DepartmentId:number;
  Department:Department;

  constructor(private studentService:StudentService,private departmentService:DepartmentService) { }

  @Output() onCreated = new EventEmitter<Student>();

  ngOnInit() {
    this.departmentService.GetAll().subscribe(departmentList=>this.departments = departmentList);
  }

  SaveStudent(){
    //alert(this.DepartmentId);
    var student:Student = {
      Id:0,
      RegNo:'',
      Name:this.Name,
      Email:this.Email,
      Phone:this.Phone,
      Date:this.Date,
      Address:this.Address,
      DepartmentId:this.DepartmentId,
      Department:this.Department
    }
    this.studentService.Create(student).subscribe(s=>this.onCreated.emit(s));
  }
  test(event:any){
    this.DepartmentId = event.target.value;
  }
}
