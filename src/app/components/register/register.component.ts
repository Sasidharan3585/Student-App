import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  getDetails = {
    email: '',
    name: '',
    userName: '',
    password: ''
  }

  getValue() {
    if (this.getDetails.name.charCodeAt(0) !== 32 && this.getDetails.email.charCodeAt(0) !== 32 && this.getDetails.password.charCodeAt(0) !== 32 && this.getDetails.userName.charCodeAt(0) !== 32) {

      this.service.addUser(this.getDetails).subscribe(data => {
        console.log("User added successfully")
        alert("User added successfully")
        this.router.navigate(['/Login']);
      },
        error => {
          console.log(error)
          alert("User already exists!!")
        }
      )
    } else {
      alert("space is not allowed")
    }
  }

  ngOnInit(): void {
  }

}
