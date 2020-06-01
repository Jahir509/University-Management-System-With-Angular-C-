import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  @Input() course:Course;
  constructor() { }

  ngOnInit() {
  }

}
