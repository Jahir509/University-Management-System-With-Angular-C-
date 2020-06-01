import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Teacher } from 'src/app/shared/teacher.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentService } from 'src/app/service/department.service';
import { Department } from 'src/app/shared/department.model';
import { TeacherService } from '../teacher.service';


@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {

  teacher:Teacher = new Teacher();
  departments:Department[];
  @Output() closeForm = new EventEmitter<boolean>();
  constructor(private router:Router,private departmentService:DepartmentService,private teacherService:TeacherService,private location:Location) { }

  ngOnInit() {
    this.departmentService.GetAll().subscribe(deptList=>this.departments = deptList);
  }
  Cancel(){
    this.closeForm.emit(false);
  }
  SaveTeacher(){
    var teacher:Teacher = this.teacher
    this.teacherService.Create(teacher).subscribe();
    this.teacherService.redirectTo("teachers");
    }
    selectDept(event:any){
      this.teacher.DepartmentId = event.target.value;
      //alert(this.teacher.DepartmentId)
    }

    
  }



