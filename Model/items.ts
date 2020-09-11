export class Item{
private isAdded:boolean;
constructor(private id:number,private name:string,private url:string,private price:number){}
toggle():void{
    this.isAdded=!this.isAdded;
}
}