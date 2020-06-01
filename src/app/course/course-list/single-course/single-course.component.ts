import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  @Input() course:Course;
  constructor() { }

  ngOnInit() {
  }

}
