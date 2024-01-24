import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,ToastrModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent { 
  loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  constructor(private _userService:UserService,private toast:ToastrService){}
  detail!:any
  login(data:any){
      
      this._userService.auth(data).subscribe({
        
        next:(res)=>{console.log(res);
        },
        
        error:(err:HttpErrorResponse)=>{
          // Handling error response
          console.log(err.error.error);
          this.toast  .error(err.error.error);
        }
      }
      );
    
      

  }

}
