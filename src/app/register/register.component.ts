import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    pass: new FormControl('',[Validators.required,Validators.pattern("^jay$")]),
    conpass:new FormControl('',[Validators.required])
  })

  get nameValidator(){
    return this.registerForm.get('name');
  }
  get emailValidator(){
    return this.registerForm.get('email');
  }
  get passValidator(){
    return this.registerForm.get('pass');
  }
  get conpassValidator(){
    return this.registerForm.get('conpass');
  }
  register(){
    console.warn(this.registerForm.value);
    
  }

  constructor(private userService: UserService) {
    
  }

  postUser(data: any) {
    console.warn(data);
    this.userService.saveUser(data).subscribe((res)=>console.log(res));
    
    
  }

  

}
