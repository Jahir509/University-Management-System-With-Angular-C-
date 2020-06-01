import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-classroom-create',
  templateUrl: './classroom-create.component.html',
  styleUrls: ['./classroom-create.component.css']
})
export class ClassroomCreateComponent implements OnInit {

  constructor(private classroomService:ClassroomService) { }
  t:string;
  ngOnInit() {
    
  }

}
