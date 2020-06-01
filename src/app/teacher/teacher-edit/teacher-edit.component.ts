import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Teacher } from 'src/app/shared/teacher.model';
import { DepartmentService } from 'src/app/service/department.service';
import { Department } from 'src/app/shared/department.model';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {

  @Output() closeEditForm = new EventEmitter<boolean>();
  @Input() teacher:Teacher;
  departments:Department[];
  constructor(private router:Router,private departmentService:DepartmentService,private teacherService:TeacherService) { }

  ngOnInit() {
    this.departmentService.GetAll().subscribe(deptList=> this.departments = deptList);
  }

  Cancel(){
    this.closeEditForm.emit(false);
  }

  UpdateTeacher(){
    this.teacherService.Update(this.teacher).subscribe();
    this.teacherService.redirectTo('teachers');
  }


}
