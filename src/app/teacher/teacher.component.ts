import { Component, OnInit } from '@angular/core';
import { TeacherService } from './teacher.service';
import { Router } from '@angular/router';
import { Teacher } from '../shared/teacher.model';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  createButton:boolean = true;
  createNew:boolean = false;
  editForm:boolean = false;
  showTeacherList:boolean = true;
  selectedTeacher:Teacher;

  
  constructor(private teacherService:TeacherService,private router:Router) { }

  ngOnInit() {
    
  }

  //this is for opening Teacher Create Form Component through button click
  CreateFormOpen(){
    this.createNew=true;
    this.showTeacherList = false; 
  }
  //this is for closing Teacher Create Form Component
  closeCreateForm(){
    this.createNew=false;
    this.showTeacherList = true; 

  }

  //this is for closing Teacher Edit Form Component
  closeEditForm(){
    this.showTeacherList = true;
    this.createButton = true;
    this.editForm=false;
  }

  teacherSelected(teacher:Teacher){
    this.editForm = true;
    this.showTeacherList = false;
    this.createButton = false;
    this.selectedTeacher = teacher;
    //this.router.navigateByUrl("/teachers/edit");
  }
}
