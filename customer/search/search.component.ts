import { SharedService } from '../../shared.service';
import { itemOpr } from './../../Model/itemOperations';
import { Item } from './../../Model/items';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
item:Item[];
value:string;
  constructor(private service:SharedService) { }

  ngOnInit() {
  }
  search(val){
    if(val){
     this.value = val.charAt(0).toUpperCase();
      this.item=itemOpr.search(this.value);
      this.service.getList().next(this.item);
    }
    else{
      this.item=itemOpr.data();
      this.service.getList().next(this.item);
    }
  }

}
