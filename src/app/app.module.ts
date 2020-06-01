import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import {StudentCreateComponent} from './student/student-create/student-create.component'
import {StudentEditComponent} from './student/student-edit/student-edit.component'
import { StudentListComponent } from './student/student-list/student-list.component';
import { SingleStudentComponent } from './student/student-list/single-student/single-student.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomListComponent } from './classroom/classroom-list/classroom-list.component';
import { ClassroomCreateComponent } from './classroom/classroom-create/classroom-create.component';
import { ClassroomEditComponent } from './classroom/classroom-edit/classroom-edit.component';
import { SingleClassroomComponent } from './classroom/classroom-list/single-classroom/single-classroom.component';
import { CourseAssignComponent } from './course-assign/course-assign.component';
import { CourseAssignCreateComponent } from './course-assign/course-assign-create/course-assign-create.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherCreateComponent } from './teacher/teacher-create/teacher-create.component';
import { TeacherEditComponent } from './teacher/teacher-edit/teacher-edit.component';
import { SingleTeacherComponent } from './teacher/teacher-list/single-teacher/single-teacher.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseCreateComponent } from './course/course-create/course-create.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { SingleCourseComponent } from './course/course-list/single-course/single-course.component';
import { ClassroomAllocationComponent } from './classroom/classroom-allocation/classroom-allocation.component';
import { ClassroomAllocateComponent } from './classroom/classroom-allocation/classroom-allocate/classroom-allocate.component';
import { ClassroomDetailsComponent } from './classroom/classroom-allocation/classroom-details/classroom-details.component';
const routes: Routes = [
  { path:'classrooms',component: ClassroomComponent },
  { path:'classrooms/create',component: ClassroomCreateComponent },
  { path:'students',component: StudentComponent },
  { path:'course-assign',component:CourseAssignComponent},
  { path:'teachers',component:TeacherComponent},
  { path:'courses',component:CourseComponent},
  { path:'classrooms/allocation',component:ClassroomAllocationComponent},
  { path:'classrooms/allocation/allocate',component:ClassroomAllocateComponent},
  { path:'classrooms/allocation/edit',component:ClassroomEditComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentListComponent,
    SingleStudentComponent,
    ClassroomComponent,
    ClassroomListComponent,
    ClassroomCreateComponent,
    ClassroomEditComponent,
    SingleClassroomComponent,
    CourseAssignComponent,
    CourseAssignCreateComponent,
    TeacherComponent,
    TeacherListComponent,
    TeacherCreateComponent,
    TeacherEditComponent,
    SingleTeacherComponent,
    CourseComponent,
    CourseListComponent,
    CourseCreateComponent,
    CourseEditComponent,
    SingleCourseComponent,
    ClassroomAllocationComponent,
    ClassroomAllocateComponent,
    ClassroomDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
