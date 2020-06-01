import { Component, OnInit } from '@angular/core';
import { AllocateClassroom } from 'src/app/shared/classroom-allocate.model';
import { DepartmentService } from 'src/app/service/department.service';
import { Department } from 'src/app/shared/department.model';
import { ClassroomAllocationService } from '../classroom-allocation.service';
import { ClassroomService } from '../../classroom.service';
import { Classroom } from 'src/app/shared/classroom.model';
import { CourseService } from 'src/app/course/course.service';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-classroom-allocate',
  templateUrl: './classroom-allocate.component.html',
  styleUrls: ['./classroom-allocate.component.css']
})
export class ClassroomAllocateComponent implements OnInit {

  text:string;
  allocatedClassroom:AllocateClassroom = new AllocateClassroom();
  departments:Department[];
  classrooms:Classroom[];
  courses:Course[];

  constructor(
    private departmentService:DepartmentService,
    private classroomAllocationService:ClassroomAllocationService,
    private classroomService:ClassroomService,
    private courseService:CourseService ) {
    
   }

  ngOnInit() {
    this.departmentService.GetAll().subscribe(deptList=>this.departments = deptList);
    this.classroomService.GetAll().subscribe(classList=>this.classrooms=classList);
    this.text = this.classroomAllocationService.roomSelected;
  }


  selectClassroom(event:any){
    alert(event.target.value);
  }

  selectDept(event:any){
    this.courseService.GetAll().subscribe()
  }

}
