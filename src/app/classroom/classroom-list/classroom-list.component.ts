import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { Classroom } from 'src/app/shared/classroom.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css']
})
export class ClassroomListComponent implements OnInit {

  classrooms:Classroom[];
  IsFormOpen:boolean=false;
  roomNo:string;
  constructor(private classroomService:ClassroomService,private router:Router) { }

  ngOnInit() {
    this.classroomService.GetAll().subscribe(classroomList=> this.classrooms = classroomList);
  }

  RoomSelected(r:string){
    this.roomNo = r;
    alert(this.roomNo);
    this.classroomService.room.emit(this.roomNo);
  }

  CreateFormOpen(){
    this.IsFormOpen = true;
  }

}
