import { SharedService } from '../../shared.service';
import { itemOpr } from './../../Model/itemOperations';
import { Item } from './../../Model/items';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
item:Item[];
toggle:boolean;
  constructor(private service:SharedService) { 
  }

  ngOnInit() {
    this.item=itemOpr.data();
    this.service.getList().next(this.item);

  }
  sort(val){
    
    if(val=='All'){
      this.item=itemOpr.data();
      this.service.getList().next(this.item);
    }else{
      this.item=itemOpr.search(val)
      this.service.getList().next(this.item);
     
    }
    
// console.log('sorted item is',itemOpr.search(val));
  }

}
