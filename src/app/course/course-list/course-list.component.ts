import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Output() CourseSelected = new EventEmitter<Course>();
  courses:Course[];
  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.courseService.GetAll().subscribe(courseList=>this.courses = courseList);
  }

  EditCourse(course:Course){
    this.CourseSelected.emit(course);
  }

  DeleteCourse(course:Course){
    this.courseService.Delete(course).subscribe(data=> console.log(data+"deleted"));
    this.courseService.redirectTo('courses');
  }

}
