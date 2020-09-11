import { Item } from './items';
export const itemOpr={
items:[],
add(data):void{
    for(let item of data){
        this.items.push(new Item(item.id,item.name,item.url,item.price));
    }

},
push(data):Item[]{
        this.items.push(new Item(data.id,data.name,data.url,data.price));
    
return this.items
},
data():Item[]{
    return this.items;
},
toggle(id):void{
 this.items.find(item=>item.id==id).toggle();
},
count():Item[]{
    return this.items.filter(item=>item.isAdded)
},
search(name){
    if(name){
        return this.items.filter(item=>item.name.startsWith(name));
    }
    else{
        this.items;
    }


},
delete(index):Item[]{
    
        for(let key of index){
          this.items= this.items.filter(item=>item.id!=key);    
        }
        return this.items; 
   
       

},
id(index){
 return parseInt(this.items[index-1].id) +1;   
}
}