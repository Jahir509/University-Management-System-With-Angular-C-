import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Teacher } from 'src/app/shared/teacher.model';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers:Teacher[];
  @Output() teacherIsSelected = new EventEmitter<Teacher>();
  
  constructor(private teacherService:TeacherService) { }

  ngOnInit() {
    this.teacherService.GetAll().subscribe(teacherList=> this.teachers = teacherList);
  }

  selectedTeacher(teacher:Teacher){
    this.teacherIsSelected.emit(teacher);
  }

}
