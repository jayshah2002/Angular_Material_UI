import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    details:any=[];
    data:any[]=[];
    constructor(private userService: UserService) {}
    
  
    get(){
      console.log("call");
      this.userService.getUsers().subscribe((data:any)=>{this.details=data; console.log(this.details);
      })
      // this.userService.getUsers().subscribe((data:any)=>{this.details=data; console.log(data);
    
      
    }
    
    deleteUser(email:string){
      console.log(email);
      
      this.userService.deleteUsers(email).subscribe(
        (res)=>{this.data = this.data.filter(item => item.email !== email);console.log(res);});
    }
      
    
}
