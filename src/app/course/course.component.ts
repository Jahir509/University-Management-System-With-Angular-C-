import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  //UI Related Boolean Value
  CreateFormVisible:boolean=false;
  CreateButtonVisible:boolean = true;
  EditFormVisible:boolean=false;
  CourseListVisible:boolean=true;

  courseWasSelected:Course;

  constructor() { }

  ngOnInit() {
  }

  CreateCourse(){
    this.CreateFormVisible = true;
    this.CourseListVisible = false;
  }

  SelectedCourse(course:Course){
    this.CreateFormVisible = false;
    this.CourseListVisible = false;
    this.EditFormVisible = true;
    this.CreateButtonVisible = false;
    this.courseWasSelected = course;
  }

}
