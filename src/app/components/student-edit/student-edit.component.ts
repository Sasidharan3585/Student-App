import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: Student;
  studentId: String;

  constructor(private service: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.studentId=this.activatedRoute.snapshot.params['studentId'];

    this.service.getOneStudent(this.studentId).subscribe(
      data =>{
        this.student=data;
        console.log(this.student);
      },
      error =>{
        console.log(error);
      }
    )
  }

  updateStudent() {
    this.service.updateStudent(this.studentId, this.student)
    .subscribe( data => {
      console.log(data);
      this.router.navigate(['Student']);
    });
  }

}
