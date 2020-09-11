import { SharedService } from '../shared.service';
import { itemOpr } from './../Model/itemOperations';
import {Item} from '../Model/items'
import { ActivatedRoute,  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
name:string;
role:string;
item:Item[];
flag1:boolean;
toggle:boolean;
tr:any;
id:number;
id1:number;
id2:number;
index:number;
indArr:number[];
  constructor(private activatedRoute:ActivatedRoute,private route:Router,private serveice:SharedService) { 
    this.flag1=true;
    this.toggle=false;
    this.indArr=[];
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data=>{
      this.name=data.name;
      this.role=data.role;
    });
    if(itemOpr.items.length<=1){
      this.serveice.getData().subscribe(data=>{
        this.item=data['mobiles'];
        itemOpr.add(this.item);
        this.counter();
      })
    }else{
      this.counter();
    }
   
   
    
  }
add(val){
  this.flag1=false;
  this.item=itemOpr.push(val);
  val=null;
  this.counter();
}
send(){
  this.indArr=[];
this.route.navigate(['/customer'],{queryParams:{name:this.name,role:this.role}})
}
checkbox(id,i,index){
  this.index=index;
 if(this.indArr.indexOf(id)==-1){
   this.indArr.push(id);
   this.id=0;
 }else{
   this.id=this.indArr.indexOf(id);
   this.indArr.splice(this.id,1);
 }
this.id=id;
  this.tr=i.parentNode;
  this.tr.classList.toggle('bg');
 
  
}
delete():void{
    this.item=itemOpr.delete(this.indArr);
    this.counter();
    this.indArr=[];
}
counter():void{
  this.id2=itemOpr.items.length;
  this.id1=itemOpr.id(this.id2);
}
}
