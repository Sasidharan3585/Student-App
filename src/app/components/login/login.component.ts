import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    email:'',
    password:''   
  }

  loginFormGroup: FormGroup;
  hide = true;


  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value'
    }
    return null;
  }

  getValue(){
    console.log(this.user);
    if((this.user.email!='' && this.user.password!='')&&(this.user.email!=null && this.user.password!=null)){
      console.log("Login Successfull");
      this.userService.sendDetails(this.user).subscribe(
        (response:any) => {
          console.log(response.token);
          console.log("Success");
          this.userService.userLogin(response.token)
          window.location.href=("student")
        },
        error =>{
          console.log(error);
          console.log("Failed");
          alert("Invalid credentials");
        }
        )
    }
    else{
      console.log("Input Fields are empty");
      alert("Input Fields are empty");
    }
  }

  constructor(private formBuilder: FormBuilder, private userService:UserService) { }

  ngOnInit(): void {

   
  }





}

