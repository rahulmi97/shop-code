import { itemOpr } from './../Model/itemOperations';
import { Item } from '../Model/items';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
Data:Item[];
name:string;
  constructor(private activatedRout:ActivatedRoute,private sharedser:SharedService) { }

  ngOnInit() {
    this.activatedRout.queryParams.subscribe(data=>{
      this.name=data.name;
    });
    if(itemOpr.items.length<=1){
      this.sharedser.getData().subscribe(data=>{
        this.Data=[];
        this.Data=data['mobiles']
        itemOpr.add(this.Data);
      },err=>{
        console.log('error in fetching data',err);
      },()=>{})
    }else{
      console.log('u already have data');
    }
   
  }

}
