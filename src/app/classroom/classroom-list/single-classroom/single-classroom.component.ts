import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Classroom } from 'src/app/shared/classroom.model';
import { ClassroomService } from '../../classroom.service';
import { Router } from '@angular/router';
import { ClassroomAllocationService } from '../../classroom-allocation/classroom-allocation.service';

@Component({
  selector: 'app-single-classroom',
  templateUrl: './single-classroom.component.html',
  styleUrls: ['./single-classroom.component.css']
})
export class SingleClassroomComponent implements OnInit {

  @Input() classroom:Classroom;
  @Output() classroomSelected = new EventEmitter<string>();
  
  constructor(
    private classroomService:ClassroomService,
    private classroomAllocationService:ClassroomAllocationService,
    private router:Router
    ) { }

  ngOnInit() {
  }
  getClassroom(classroom:Classroom){
    //alert(classroom.RoomNo);
    this.classroomAllocationService.classroomSelected(classroom.RoomNo);
    this.router.navigateByUrl("classrooms/allocation/allocate");

    
  }
  deleteClassroom(classroom:Classroom){
    alert(classroom.RoomNo);
  }

}
