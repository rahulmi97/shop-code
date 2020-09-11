import { itemOpr } from './../../Model/itemOperations';
import { SharedService } from '../../shared.service';
import { Item } from './../../Model/items';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
count:number;
Data:Item[];
flag:boolean;
  constructor(private service:SharedService) { 
    this.count=0;
    this.flag=false;
  }

  ngOnInit() {
    this.service.getCount().subscribe(data=>{
      this.count=data;
      
    }) ;
    this.service.getItem().subscribe(item=>{
      this.Data=item;
    })
  }
  show(){
    this.flag=!this.flag;
   this.Data= itemOpr.count();
  }
  remove(id){
  itemOpr.toggle(id);
  this.Data=itemOpr.count();
  this.count=itemOpr.count().length;
  }

}
