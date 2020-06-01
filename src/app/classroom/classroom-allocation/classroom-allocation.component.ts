import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-classroom-allocation',
  templateUrl: './classroom-allocation.component.html',
  styleUrls: ['./classroom-allocation.component.css']
})
export class ClassroomAllocationComponent implements OnInit {

  t:string;
  constructor(private classroomService:ClassroomService) {
   }

  ngOnInit() {

  }

}
