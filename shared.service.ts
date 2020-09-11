import { itemOpr } from './Model/itemOperations';
import { Item } from './Model/items';
import { Observable,  BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
private count:BehaviorSubject<number>=new BehaviorSubject<number>(0);
private item:BehaviorSubject<Item[]>=new BehaviorSubject<Item[]>([]);
private list:BehaviorSubject<Item[]>=new BehaviorSubject<Item[]>([])
  constructor(private http:HttpClient) { 
   
  }
  getList():BehaviorSubject<Item[]>{
   return this.list;
  }
    
  
  getItem():BehaviorSubject<Item[]>{
return this.item;
  }
  getCount():BehaviorSubject<number>{
    return this.count
  }

  getData():Observable<Item[]>{
    return this.http.get<Item[]>("https://raw.githubusercontent.com/rahulmi97/mobiles.json/master/data.json");
  }

}
