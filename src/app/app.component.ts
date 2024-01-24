import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Material_UI';

  // Stock:number=0
  // change(el:HTMLInputElement){
  //   console.log("el",el.value);
  //   if(!Number.isNaN(Number(el.value))){
  //     console.log("Stock",this.Stock);
  //     this.Stock = Number(el.value);
  //   }
    
  // }
  


  
}
