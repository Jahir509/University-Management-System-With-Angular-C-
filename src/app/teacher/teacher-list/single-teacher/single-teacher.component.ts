import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Teacher } from 'src/app/shared/teacher.model';
import { TeacherService } from '../../teacher.service';

@Component({
  selector: 'app-single-teacher',
  templateUrl: './single-teacher.component.html',
  styleUrls: ['./single-teacher.component.css']
})
export class SingleTeacherComponent implements OnInit {

  @Input() teachers:Teacher[];
  @Output() editedTeacher = new EventEmitter<Teacher>();
  constructor(private teacherService:TeacherService) { }

  ngOnInit() {
  }

  EditTeacher(teacher:Teacher){
    this.editedTeacher.emit(teacher);
  }

  DeleteTeacher(teacher:Teacher){
    this.teacherService.Delete(teacher).subscribe();
    this.teacherService.redirectTo('teachers');
  }

}
