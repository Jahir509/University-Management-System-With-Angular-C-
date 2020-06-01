import { Component, OnInit } from '@angular/core';
import { ClassroomService } from './classroom.service';
import { Classroom } from '../shared/classroom.model';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  classrooms:Classroom[];
  constructor(private classroomService:ClassroomService) { }

  ngOnInit() {
    this.classroomService.GetAll().subscribe(classroomLists=>this.classrooms = classroomLists);
  }



}
