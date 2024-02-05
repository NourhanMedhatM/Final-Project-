import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] =[];
  addtocard(items:any): void{
    this.items.push(items)
  }
  

  private cartitemcount = new BehaviorSubject<number>(0);

  
  realcartcount = this.cartitemcount.asObservable();

  constructor() { 
    
  }
}
