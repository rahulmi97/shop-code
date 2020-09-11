import { SharedService } from '../../shared.service';
// import { itemOpr } from './../../Model/itemOperations';
import { Item } from '../../Model/items';
import { itemOpr } from '../../Model/itemOperations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
Data:Item[];
count:number;
  constructor(private service:SharedService) {
    this.count=0
   }

  ngOnInit() {
    this.Data=[];
    this.Data=itemOpr.data();
    this.service.getList().subscribe(data=>{
      this.Data=data
    })
  }
  cart(id){
    this.count=itemOpr.count().length;
    itemOpr.toggle(id)
    // console.log('isadded h kya',itemOpr.toggle(id));
    // console.log('yecount h',itemOpr.count().length);
    this.service.getCount().next(itemOpr.count().length);
    this.service.getItem().next(itemOpr.count());
  }
  

}
