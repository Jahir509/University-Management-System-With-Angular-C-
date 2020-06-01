import { Department } from './department.model';

export class Student{
  Id:number;
  Name:string;
  RegNo:string;
  Email:string;
  Phone:string;
  Date:string;
  Address:string;
  DepartmentId:number;
  Department:Department;

  /*deserialize(input:any){
    Object.assign(this,input);
    this.Department = new Department().deserialize(input.Department);
    return this;
  }

  /*constructor(Id:number,Name:string,RegNo:string,Email:string,Phone:string,Date:string,Address:string,Department:Department)
  {
    Id=this.Id;
    Name=this.Name;
    RegNo=this.RegNo;
    Email=this.Email;
    Phone=this.Phone;
    Date=this.Date;
    Address=this.Address;
    Department=this.Department;
  }*/

}
