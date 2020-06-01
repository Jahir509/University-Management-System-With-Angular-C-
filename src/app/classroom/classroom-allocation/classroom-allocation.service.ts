import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassroomAllocationService {

  roomSelected:string;
  constructor() { }
  classroomSelected(roomNo:string){
this.roomSelected = roomNo;
alert(this.roomSelected);
  }
}
