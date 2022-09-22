import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student;
  message: String;

  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.student= new Student();
  }

  createStudent(){
    this.service.createStudent(this.student)
    .subscribe(data =>{
      this.message=data;
      this.student=new Student();
      // alert("Student created successfully")
    },
    error =>{
      console.log(error);
    }
      );
  }

}
