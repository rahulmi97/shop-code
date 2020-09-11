import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
name:string;
role:string;
regForm:FormGroup;
roles:string[]=['admin','customer'];
hide:boolean;
  constructor(private router:Router) {
    this.hide=false;
   }
  ngOnInit() {
    this.regForm=new FormGroup({
      'uname':new FormControl(null,Validators.required),
      'urole':new FormControl('-1',[Validators.required,this.select.bind(this)])
    })
  }
  send():void{
    if(this.regForm.invalid){
this.hide=true;
    }
    else{
      this.name=this.regForm.value.uname;
      this.role=this.regForm.value.urole;
        this.router.navigate([`/${this.role}`],{queryParams:{name:this.name,role:this.role}});
    }
  
   
  }
select(control:FormControl):{[key:string]:boolean}{
  if(this.roles.indexOf(control.value)==-1){
return {'selectrole':true};
  }
  else{
    return null;
  }
}
 

}
